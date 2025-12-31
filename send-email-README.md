# Configuration de l'envoi d'emails - SunuLink Global

## Fichier PHP : `send-email.php`

Ce script PHP gère l'envoi des emails depuis le formulaire de contact.

### Configuration

- **Destinataire principal** : `sunulinkglobal@gmail.com`
- **Copie (CC)** : `contact@sunulinkglobal.com`
- **Expéditeur** : `noreply@sunulinkglobal.com`
- **Reply-To** : Email de l'utilisateur qui remplit le formulaire

### Compatibilité OVH

Ce script utilise la fonction PHP native `mail()` qui est généralement supportée par OVH.

### Si PHP n'est pas disponible

Si votre hébergement OVH ne supporte pas PHP ou si la fonction `mail()` ne fonctionne pas, vous pouvez :

1. Utiliser FormSubmit (solution de secours) en modifiant `contact.html` :
   - Changer `action="send-email.php"` par `action="https://formsubmit.co/sunulinkglobal@gmail.com"`
   - Ajouter les champs cachés FormSubmit

2. Contacter le support OVH pour activer PHP ou configurer SMTP

### Test

Pour tester le script :
1. Remplir le formulaire de contact
2. Vérifier que l'email arrive sur `sunulinkglobal@gmail.com`
3. Vérifier que `contact@sunulinkglobal.com` reçoit une copie

### Sécurité

- Validation des champs côté serveur
- Protection contre les injections (htmlspecialchars)
- Validation de l'email
- Headers sécurisés

