<?php
/**
 * Script d'envoi d'emails pour SunuLink Global
 * Utilise PHPMailer avec SMTP pour un envoi fiable sur OVH
 * Compatible PHP 7.0+
 */

// Headers pour JSON et CORS
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Vérifier que la requête est en POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
    exit;
}

/**
 * Fonction de fallback utilisant mail() natif si PHPMailer n'est pas disponible
 */
function sendEmailWithNativeMail() {
    // Récupérer les données
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';
    
    // Validation
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Veuillez remplir tous les champs obligatoires.']);
        return;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Adresse email invalide.']);
        return;
    }
    
    // Sécurisation
    $name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
    
    // Configuration
    $to = 'sunulinkglobal@gmail.com';
    $cc = 'contact@sunulinkglobal.com';
    $subject = 'Nouveau message depuis le site SunuLink Global';
    
    // Corps du message
    $emailBody = "Nouveau message reçu depuis le formulaire de contact du site SunuLink Global\n\n";
    $emailBody .= "Nom : " . $name . "\n";
    $emailBody .= "Email : " . $email . "\n";
    if (!empty($phone)) {
        $emailBody .= "Téléphone : " . $phone . "\n";
    }
    $emailBody .= "\nMessage :\n" . $message . "\n";
    $emailBody .= "\n---\n";
    $emailBody .= "Ce message a été envoyé depuis le formulaire de contact du site SunuLink Global.\n";
    
    // Headers sécurisés (protection contre l'injection)
    $headers = "From: SunuLink Global <noreply@sunulinkglobal.com>\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Cc: " . $cc . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Envoi
    $mailSent = @mail($to, $subject, $emailBody, $headers);
    
    if ($mailSent) {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Votre message a été envoyé avec succès !']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Une erreur est survenue. Veuillez réessayer plus tard.']);
    }
}

// Charger PHPMailer
$phpmailerAvailable = false;
$useNamespaces = false;

// Option 1 : Si PHPMailer est installé via Composer (avec namespaces)
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
    $phpmailerAvailable = true;
    $useNamespaces = true;
}
// Option 2 : Si PHPMailer est dans un dossier local (sans namespaces)
elseif (file_exists(__DIR__ . '/PHPMailer/PHPMailer.php')) {
    require_once __DIR__ . '/PHPMailer/PHPMailer.php';
    require_once __DIR__ . '/PHPMailer/SMTP.php';
    require_once __DIR__ . '/PHPMailer/Exception.php';
    $phpmailerAvailable = true;
    $useNamespaces = false;
}

// Si PHPMailer n'est pas disponible, utiliser mail() natif
if (!$phpmailerAvailable) {
    sendEmailWithNativeMail();
    exit;
}

// Récupérer et valider les données du formulaire
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Validation des champs obligatoires
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Veuillez remplir tous les champs obligatoires.']);
    exit;
}

// Validation de l'email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Adresse email invalide.']);
    exit;
}

// Protection contre l'injection dans les headers et le contenu
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Configuration SMTP
// ⚠️ IMPORTANT : Configurer le mot de passe SMTP avant de déployer en production
// Option 1 : Configuration OVH SMTP (recommandé)
$smtpHost = 'ssl0.ovh.net'; // Serveur SMTP OVH
$smtpPort = 465; // Port SSL
$smtpUsername = 'contact@sunulinkglobal.com'; // Email OVH
$smtpPassword = ''; // ⚠️ À CONFIGURER : Mettre le mot de passe de l'email OVH ici
// Note : Pour plus de sécurité, vous pouvez utiliser un fichier de configuration séparé non versionné

// Option 2 : Configuration Gmail SMTP (alternative)
// Décommenter et configurer si vous préférez utiliser Gmail
/*
$smtpHost = 'smtp.gmail.com';
$smtpPort = 587;
$smtpUsername = 'sunulinkglobal@gmail.com';
$smtpPassword = ''; // Mot de passe d'application Gmail (pas le mot de passe du compte)
*/

// Vérifier que le mot de passe SMTP est configuré
if (empty($smtpPassword)) {
    // Si pas de mot de passe configuré, utiliser mail() natif en fallback
    sendEmailWithNativeMail();
    exit;
}

try {
    // Créer une instance de PHPMailer (gérer les namespaces selon l'installation)
    if ($useNamespaces) {
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        $encryption = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
    } else {
        $mail = new PHPMailer(true);
        $encryption = PHPMailer::ENCRYPTION_SMTPS;
    }
    
    // Configuration SMTP
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;
    $mail->SMTPSecure = $encryption; // SSL/TLS
    $mail->Port = $smtpPort;
    $mail->CharSet = 'UTF-8';
    
    // Options de débogage (désactiver en production)
    $mail->SMTPDebug = 0; // 0 = pas de debug, 2 = debug complet
    
    // Expéditeur
    $mail->setFrom('noreply@sunulinkglobal.com', 'SunuLink Global');
    $mail->addReplyTo($email, $name);
    
    // Destinataires
    $mail->addAddress('sunulinkglobal@gmail.com', 'SunuLink Global');
    $mail->addCC('contact@sunulinkglobal.com', 'Contact SunuLink');
    
    // Sujet et corps du message
    $mail->Subject = 'Nouveau message depuis le site SunuLink Global';
    
    $emailBody = "Nouveau message reçu depuis le formulaire de contact du site SunuLink Global\n\n";
    $emailBody .= "Nom : " . $name . "\n";
    $emailBody .= "Email : " . $email . "\n";
    if (!empty($phone)) {
        $emailBody .= "Téléphone : " . $phone . "\n";
    }
    $emailBody .= "\nMessage :\n" . $message . "\n";
    $emailBody .= "\n---\n";
    $emailBody .= "Ce message a été envoyé depuis le formulaire de contact du site SunuLink Global.\n";
    
    $mail->Body = $emailBody;
    $mail->AltBody = strip_tags($emailBody);
    
    // Envoyer l'email
    $mail->send();
    
    // Succès
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Votre message a été envoyé avec succès !']);
    
} catch (Exception $e) {
    // Erreur SMTP - logger l'erreur mais ne pas exposer les détails à l'utilisateur
    $errorInfo = isset($mail) && isset($mail->ErrorInfo) ? $mail->ErrorInfo : $e->getMessage();
    error_log('Erreur PHPMailer: ' . $errorInfo);
    
    // Essayer avec mail() natif en fallback
    sendEmailWithNativeMail();
}
?>
