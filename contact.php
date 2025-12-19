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
$name    = trim($_POST['name'] ?? '');
$email   = trim($_POST['email'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $subject === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'All fields are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Invalid email address']);
    exit;
}

/*
|--------------------------------------------------------------------------
| Database insert (PDO from bootstrap.php)
|--------------------------------------------------------------------------
*/
try {
    $stmt = $pdo->prepare("
        INSERT INTO contacts (name, email, subject, message)
        VALUES (:name, :email, :subject, :message)
    ");

    $stmt->execute([
        ':name'    => $name,
        ':email'   => $email,
        ':subject' => $subject,
        ':message' => $message,
    ]);
} catch (Throwable $e) {
    error_log('Contact DB Error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to save message']);
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
    $mail->Username   = $_ENV['CONTACT_EMAIL_USER'];
    $mail->Password   = $_ENV['CONTACT_EMAIL_PASS'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = (int) $_ENV['SMTP_PORT'];

    $mail->setFrom($_ENV['CONTACT_EMAIL_FROM'], 'ScholarBrood Contact');
    $mail->addAddress($_ENV['CONTACT_EMAIL_TO']);
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = 'Contact Form: ' . $subject;
    $mail->Body = "
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>
        <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
        <p><strong>Subject:</strong> " . htmlspecialchars($subject) . "</p>
        <p><strong>Message:</strong></p>
        <p>" . nl2br(htmlspecialchars($message)) . "</p>
        <hr>
        <small>Received: " . date('Y-m-d H:i:s') . "</small>
    ";

    $mail->send();

} catch (Exception $e) {
    // Email failure should not break contact submission
    error_log('Contact Email Error: ' . $e->getMessage());
}

/*
|--------------------------------------------------------------------------
| Success response
|--------------------------------------------------------------------------
*/
echo json_encode(['success' => true]);
exit;