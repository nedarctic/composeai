<?php
declare(strict_types=1);

/*
|--------------------------------------------------------------------------
| Composer Autoload
|--------------------------------------------------------------------------
*/
require_once __DIR__ . '/vendor/autoload.php';

use Dotenv\Dotenv;

/*
|--------------------------------------------------------------------------
| Load Environment Variables
|--------------------------------------------------------------------------
*/
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

/*
|--------------------------------------------------------------------------
| Validate Required Environment Variables
|--------------------------------------------------------------------------
*/
$requiredEnv = [
    'DB_HOST',
    'DB_NAME',
    'DB_USER',
    'DB_PASS',
    'SMTP_HOST',
    'SMTP_PORT',
    'ORDER_EMAIL_USER',
    'ORDER_EMAIL_PASS',
    'ORDER_EMAIL_TO',
    'CONTACT_EMAIL_USER',
    'CONTACT_EMAIL_PASS',
    'CONTACT_EMAIL_TO',
    'CONTACT_EMAIL_FROM',
    'SUBSCRIPTION_EMAIL_USER',
    'SUBSCRIPTION_EMAIL_PASS',
    'SUBSCRIPTION_EMAIL_TO',
    'SUBSCRIPTION_EMAIL_FROM',
];

foreach ($requiredEnv as $key) {
    if (empty($_ENV[$key])) {
        error_log("Missing required environment variable: {$key}");
        http_response_code(500);
        exit('Server configuration error');
    }
}

/*
|--------------------------------------------------------------------------
| Database Connection (PDO)
|--------------------------------------------------------------------------
*/
try {
    $pdo = new PDO(
        sprintf(
            'mysql:host=%s;dbname=%s;charset=utf8mb4',
            $_ENV['DB_HOST'],
            $_ENV['DB_NAME']
        ),
        $_ENV['DB_USER'],
        $_ENV['DB_PASS'],
        [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ]
    );
} catch (PDOException $e) {
    error_log('DB Connection Error: ' . $e->getMessage());
    http_response_code(500);
    exit('Database connection failed');
}

/*
|--------------------------------------------------------------------------
| Global Helpers (optional, safe)
|--------------------------------------------------------------------------
*/
date_default_timezone_set('Africa/Nairobi');