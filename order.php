<?php
declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/*
|--------------------------------------------------------------------------
| Response Headers
|--------------------------------------------------------------------------
*/
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: https://scholarbrood.com');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

/*
|--------------------------------------------------------------------------
| Only allow POST
|--------------------------------------------------------------------------
*/
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

/*
|--------------------------------------------------------------------------
| Input validation
|--------------------------------------------------------------------------
*/
$service = trim($_POST['service'] ?? '');
$name    = trim($_POST['name'] ?? '');
$email   = trim($_POST['email'] ?? '');
$details = trim($_POST['details'] ?? '');
$links   = trim($_POST['links'] ?? '');

if ($service === '' || $name === '' || $email === '' || $details === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Required fields are missing']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Invalid email address']);
    exit;
}

/*
|--------------------------------------------------------------------------
| File uploads (safe handling)
|--------------------------------------------------------------------------
*/
$uploadDir = __DIR__ . '/uploads/';
$maxFileSize = 10 * 1024 * 1024; // 10 MB
$allowedMimeTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/jpeg',
    'image/png',
    'text/plain'
];

if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

$uploadedFiles = [];
$fileMeta = [];

if (!empty($_FILES['files']['name'][0])) {
    foreach ($_FILES['files']['name'] as $i => $originalName) {

        if ($_FILES['files']['error'][$i] !== UPLOAD_ERR_OK) {
            continue;
        }

        $tmpName = $_FILES['files']['tmp_name'][$i];
        $size    = $_FILES['files']['size'][$i];

        if ($size > $maxFileSize) {
            continue;
        }

        $finfo = new finfo(FILEINFO_MIME_TYPE);
        $mime  = $finfo->file($tmpName);

        if (!in_array($mime, $allowedMimeTypes, true)) {
            continue;
        }

        $ext = strtolower(pathinfo($originalName, PATHINFO_EXTENSION));
        $safeName = bin2hex(random_bytes(16)) . '.' . $ext;
        $destination = $uploadDir . $safeName;

        if (move_uploaded_file($tmpName, $destination)) {
            $uploadedFiles[] = [
                'path' => $destination,
                'filename' => $originalName
            ];

            $fileMeta[] = [
                'name' => $originalName,
                'type' => $mime,
                'size' => $size
            ];
        }
    }
}

/*
|--------------------------------------------------------------------------
| Database insert (PDO comes from bootstrap.php)
|--------------------------------------------------------------------------
*/
try {
    $stmt = $pdo->prepare("
        INSERT INTO orders (service, name, email, details, links, files)
        VALUES (:service, :name, :email, :details, :links, :files)
    ");

    $stmt->execute([
        ':service' => $service,
        ':name'    => $name,
        ':email'   => $email,
        ':details' => $details,
        ':links'   => $links ?: null,
        ':files'   => $fileMeta ? json_encode($fileMeta) : null,
    ]);
} catch (Throwable $e) {
    error_log('Order DB Error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to save order']);
    exit;
}

/*
|--------------------------------------------------------------------------
| Email notification (PHPMailer)
|--------------------------------------------------------------------------
*/
try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = $_ENV['SMTP_HOST'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $_ENV['ORDER_EMAIL_USER'];
    $mail->Password   = $_ENV['ORDER_EMAIL_PASS'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = (int) $_ENV['SMTP_PORT'];

    $mail->setFrom($_ENV['ORDER_EMAIL_USER'], 'ScholarBrood Orders');
    $mail->addAddress($_ENV['ORDER_EMAIL_TO']);

    if ($email) {
        $mail->addReplyTo($email, $name);
    }

    foreach ($uploadedFiles as $file) {
        $mail->addAttachment($file['path'], $file['filename']);
    }

    $mail->isHTML(true);
    $mail->Subject = 'New Order Request';
    $mail->Body = "
        <h2>New Order Request</h2>
        <p><strong>Service:</strong> {$service}</p>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Details:</strong><br>" . nl2br(htmlspecialchars($details)) . "</p>
        <p><strong>Links:</strong> " . htmlspecialchars($links ?: 'None') . "</p>
        <hr>
        <small>Received: " . date('Y-m-d H:i:s') . "</small>
    ";

    $mail->send();

} catch (Exception $e) {
    // Email failure should NOT break order creation
    error_log('Order Email Error: ' . $e->getMessage());
}

/*
|--------------------------------------------------------------------------
| Success response
|--------------------------------------------------------------------------
*/
echo json_encode(['success' => true]);
exit;