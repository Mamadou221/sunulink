# Instructions pour les Images et Assets

## 📁 Structure des dossiers

```
assets/
├── images/
│   ├── immobilier/
│   │   ├── villa1.jpg
│   │   ├── villa2.jpg
│   │   ├── villa3.jpg
│   │   ├── GS1.jpg
│   │   ├── GS2.jpg
│   │   ├── GS3.jpg
│   │   └── GS4.jpg
│   └── logo/
│       ├── Logo.png (ou Logo.jpg, Logo.svg)
│       ├── favicon.ico (ou favicon.png, favicon.svg)
│       └── README.md
```

## 🖼️ Images Immobilier

### Emplacement
Placez toutes vos images dans le dossier `assets/images/immobilier/`

### Fichiers requis

**Villas & Appartements (3 images) :**
- `villa1.jpg` - Première image du carrousel
- `villa2.jpg` - Deuxième image du carrousel
- `villa3.jpg` - Troisième image du carrousel

**Gestion Locative (4 images) :**
- `GS1.jpg` - Première image du carrousel
- `GS2.jpg` - Deuxième image du carrousel
- `GS3.jpg` - Troisième image du carrousel
- `GS4.jpg` - Quatrième image du carrousel

### Formats supportés
- `.jpg` / `.jpeg`
- `.png`
- `.webp`

### Recommandations
- **Dimensions** : 1200x800px (ratio 3:2)
- **Taille** : < 500KB par image
- **Qualité** : Optimisée pour le web

## 🎨 Logo et Favicon

### Emplacement
Placez vos fichiers dans le dossier `assets/images/logo/`

### Fichiers requis

**Logo :**
- `Logo.png` (recommandé) OU
- `Logo.jpg` OU
- `Logo.svg`

**Favicon :**
- `favicon.ico` (recommandé) OU
- `favicon.png` OU
- `favicon.svg`

### Formats supportés
- **Logo** : PNG, JPG, SVG
- **Favicon** : ICO, PNG, SVG

### Recommandations
- **Logo** : 200x60px (ou proportionnel)
- **Favicon** : 32x32px ou 64x64px

## ✅ Vérification

Après avoir ajouté vos fichiers :

1. Vérifiez que les noms de fichiers correspondent exactement (respectez la casse)
2. Testez le site dans un navigateur
3. Vérifiez que les images s'affichent correctement
4. Vérifiez que le logo apparaît dans le header
5. Vérifiez que le favicon apparaît dans l'onglet du navigateur

## 🔄 Remplacement facile

Pour remplacer une image ou le logo :
1. Copiez votre nouveau fichier dans le dossier approprié
2. Utilisez exactement le même nom que le fichier à remplacer
3. Le site utilisera automatiquement le nouveau fichier

## ⚠️ Notes importantes

- Les chemins sont relatifs, compatibles avec un déploiement OVH
- Si une image n'est pas trouvée, elle sera masquée (pas d'erreur visible)
- Le logo a un système de fallback : PNG → JPG → SVG
- Le favicon a plusieurs formats pour une compatibilité maximale









