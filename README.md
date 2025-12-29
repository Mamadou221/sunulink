# SunuLink Global - Site Statique

Site vitrine 100% statique pour SunuLink Global, prêt à être déployé sur OVH ou tout hébergement web classique.

## 📁 Structure du projet

```
SLG/
├── index.html              # Page d'accueil
├── import-export.html      # Page Import-Export
├── immobilier.html          # Page Immobilier
├── contact.html             # Page Contact
├── styles.css              # Fichier CSS principal
├── script.js               # Fichier JavaScript principal
├── .htaccess               # Configuration Apache (optionnel)
├── assets/                 # Dossier des assets
│   ├── Logo.svg           # Logo principal (SVG)
│   ├── favicon.svg        # Favicon
│   ├── GS1.jpg            # Image carrousel (à ajouter)
│   ├── GS2.jpg            # Image carrousel (à ajouter)
│   ├── GS3.jpg            # Image carrousel (à ajouter)
│   └── README.md          # Instructions pour les assets
└── README.md              # Ce fichier
```

## ✅ Fichiers statiques uniquement

Ce projet contient **uniquement** des fichiers statiques :
- ✅ HTML (.html)
- ✅ CSS (.css)
- ✅ JavaScript (.js)
- ✅ Images et assets

**Aucune dépendance** : Pas de Node.js, Next.js, React, ou autre framework requis.

## 🚀 Déploiement sur OVH

### Méthode 1 : Via FTP/FileZilla

1. **Connectez-vous à votre espace OVH**
   - Utilisez FileZilla ou votre client FTP préféré
   - Connectez-vous avec vos identifiants OVH

2. **Uploadez tous les fichiers**
   - Sélectionnez tous les fichiers à la racine du projet
   - Uploadez-les dans le dossier `www` ou `public_html` de votre hébergement
   - Le fichier `index.html` doit être à la racine du dossier web

3. **Structure sur le serveur**
   ```
   www/
   ├── index.html
   ├── import-export.html
   ├── immobilier.html
   ├── contact.html
   ├── styles.css
   ├── script.js
   ├── .htaccess
   └── assets/
       ├── Logo.svg
       ├── favicon.svg
       └── ...
   ```

### Méthode 2 : Via le gestionnaire de fichiers OVH

1. Connectez-vous à votre espace client OVH
2. Accédez au gestionnaire de fichiers
3. Naviguez vers le dossier `www` ou `public_html`
4. Uploadez tous les fichiers du projet

## 📝 Avant le déploiement

### 1. Ajouter les images manquantes

Placez les images suivantes dans le dossier `assets/` :
- `GS1.jpg` (ou .png) - Image carrousel Gestion Locative
- `GS2.jpg` (ou .png) - Image carrousel Gestion Locative
- `GS3.jpg` (ou .png) - Image carrousel Gestion Locative

### 2. Ajouter votre logo

Placez votre fichier logo dans `assets/` avec le nom :
- `Logo.png` (recommandé)
- `Logo.svg` (si format vectoriel)

Voir `assets/LOGO_INSTRUCTIONS.txt` pour plus de détails.

## 🎨 Caractéristiques

- **100% statique** : Aucun backend, aucune base de données
- **Aucune dépendance** : Fonctionne sans installation
- **Responsive** : Compatible mobile, tablette et desktop
- **Design premium** : Style moderne et professionnel
- **Animations fluides** : Transitions et effets subtils
- **SEO-friendly** : Structure HTML sémantique
- **Performance** : Chargement rapide

## 📱 Pages disponibles

- **index.html** : Page d'accueil avec présentation des services
- **import-export.html** : Page Import-Export avec section Fruits secs
- **immobilier.html** : Page Immobilier avec carrousels
- **contact.html** : Page Contact avec formulaire

## 🔧 Personnalisation

### Modifier les couleurs

Les couleurs sont définies dans `styles.css` via les variables CSS :
- `--color-primary` : Vert (#00A86B)
- `--color-accent` : Orange (#FF6B35)
- `--color-dark` : Noir (#1A1A1A)
- `--color-white` : Blanc (#FFFFFF)

### Modifier les liens réseaux sociaux

Les liens sont dans le footer de chaque page HTML. Modifiez les URLs dans les balises `<a>` avec la classe `social-link`.

### Modifier les images

Les images des carrousels peuvent être remplacées en modifiant les URLs dans les fichiers HTML.

## 📞 Support

Pour toute question, contactez l'équipe de développement.

---

**Note** : Ce site est entièrement statique et ne nécessite aucune configuration serveur complexe. Il fonctionne sur n'importe quel hébergement web standard.
