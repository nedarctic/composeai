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
| Parse JSON body
|--------------------------------------------------------------------------
*/
$input = json_decode(file_get_contents('php://input'), true);

$email = trim($input['email'] ?? '');
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Valid email is required']);
    exit;
}

$normalizedEmail = strtolower($email);

/*
|--------------------------------------------------------------------------
| Insert subscription into DB
|--------------------------------------------------------------------------
*/
try {
    $stmt = $pdo->prepare("
        INSERT INTO subscriptions (email)
        VALUES (:email)
        ON DUPLICATE KEY UPDATE email = email
    ");

    $stmt->execute([
        ':email' => $normalizedEmail
    ]);
} catch (Throwable $e) {
    error_log('Subscribe DB Error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Database error']);
    exit;
}

/*
|--------------------------------------------------------------------------
| Send notification email (PHPMailer)
|--------------------------------------------------------------------------
*/
try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = $_ENV['SMTP_HOST'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $_ENV['SUBSCRIPTION_EMAIL_USER'];
    $mail->Password   = $_ENV['SUBSCRIPTION_EMAIL_PASS'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = (int) $_ENV['SMTP_PORT'];

    $mail->setFrom($_ENV['SUBSCRIPTION_EMAIL_FROM'], 'ScholarBrood Newsletter');
    $mail->addAddress($_ENV['SUBSCRIPTION_EMAIL_TO']);
    $mail->addReplyTo($normalizedEmail);

    $mail->isHTML(true);
    $mail->Subject = 'New Newsletter Subscription';
    $mail->Body    = "
        <h2>New Newsletter Subscriber</h2>
        <p><strong>Email:</strong> " . htmlspecialchars($normalizedEmail) . "</p>
        <p>This user has subscribed to the ScholarBrood newsletter.</p>
        <hr>
        <small>Received: " . date('Y-m-d H:i:s') . "</small>
    ";

    $mail->send();
} catch (Exception $e) {
    error_log('Subscribe Email Error: ' . $e->getMessage());
    // Do not fail request if email fails
}

/*
|--------------------------------------------------------------------------
| Success response
|--------------------------------------------------------------------------
*/
echo json_encode(['success' => true]);
exit;