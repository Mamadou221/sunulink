# Installation de PHPMailer pour SunuLink Global

## Option 1 : Installation via Composer (Recommandé)

1. Installer Composer sur votre serveur OVH ou localement
   - Si Composer n'est pas installé, télécharger depuis : https://getcomposer.org/
   - Ou utiliser : `php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && php composer-setup.php`

2. Dans le dossier racine du site, exécuter :
```bash
composer install
```
ou si le fichier `composer.json` n'existe pas :
```bash
composer require phpmailer/phpmailer
```

3. Le dossier `vendor/` sera créé automatiquement avec PHPMailer

## Option 2 : Installation manuelle

1. Télécharger PHPMailer depuis : https://github.com/PHPMailer/PHPMailer
2. Extraire le dossier `PHPMailer` dans la racine du site
3. Structure attendue :
```
SLG/
  ├── PHPMailer/
  │   ├── PHPMailer.php
  │   ├── SMTP.php
  │   └── Exception.php
  └── send-email.php
```

## Configuration SMTP OVH

1. Se connecter à votre espace client OVH
2. Aller dans "Emails" > "Emails"
3. Créer ou utiliser l'email : `contact@sunulinkglobal.com`
4. Noter le mot de passe de cet email
5. Dans `send-email.php`, configurer :
   - `$smtpUsername = 'contact@sunulinkglobal.com';`
   - `$smtpPassword = 'votre_mot_de_passe';`

## Configuration SMTP Gmail (Alternative)

Si vous préférez utiliser Gmail :

1. Activer l'authentification à deux facteurs sur votre compte Gmail
2. Générer un "Mot de passe d'application" :
   - Aller dans : https://myaccount.google.com/apppasswords
   - Créer un mot de passe d'application
3. Dans `send-email.php`, décommenter la section Gmail et configurer :
   - `$smtpHost = 'smtp.gmail.com';`
   - `$smtpPort = 587;`
   - `$smtpUsername = 'sunulinkglobal@gmail.com';`
   - `$smtpPassword = 'mot_de_passe_application';`

## Test

Après installation, tester le formulaire de contact pour vérifier que les emails arrivent correctement.

## Sécurité

⚠️ **Important** : Ne jamais commiter le fichier `send-email.php` avec les mots de passe en clair dans un dépôt public.

Pour la production, utiliser des variables d'environnement ou un fichier de configuration séparé non versionné.

