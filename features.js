// ============================================
// FEATURES - Dark Mode, Translations, WhatsApp
// ============================================

// WhatsApp phone number
const WHATSAPP_PHONE = '330768531713';

// Text mapping for automatic translation (French -> Translation Key)
const textMapping = {
  // Navigation
  'Accueil': 'nav.home',
  'Import-Export': 'nav.importExport',
  'Immobilier': 'nav.realEstate',
  'Contact': 'nav.contact',
  
  // Home page
  'Bienvenue chez SunuLink Global': 'home.title',
  'Votre partenaire de confiance dans le commerce international et l\'immobilier au Sénégal': 'home.subtitle',
  'Nous facilitons les échanges entre l\'Afrique et le reste du monde, tout en offrant des solutions immobilières adaptées aux besoins des investisseurs, expatriés et particuliers.': 'home.description',
  'Découvrir nos services': 'home.discoverServices',
  'Nous contacter': 'home.contactUs',
  'Nos Services': 'home.services',
  'Riz, huiles, fruits, produits alimentaires et biens de consommation. Nous connectons les marchés pour bâtir l\'avenir.': 'home.importExportDesc',
  'Vente, location et gestion de villas, appartements et terrains. Trouvez le bien idéal au Sénégal.': 'home.realEstateDesc',
  'En savoir plus': 'home.learnMore',
  'Notre Mission': 'home.mission',
  'Créer des ponts économiques durables entre le Sénégal et le monde, en alliant qualité, fiabilité et innovation.': 'home.missionText',
  'Nos Valeurs': 'home.values',
  'Qualité responsable': 'home.quality',
  'Nous appliquons des standards stricts à chaque étape, de la sélection des matières premières jusqu\'à la livraison finale.': 'home.qualityDesc',
  'Fiabilité & confiance': 'home.reliability',
  'Nous construisons des partenariats durables basés sur la transparence, le respect des engagements et la performance.': 'home.reliabilityDesc',
  'Impact local & vision durable': 'home.impact',
  'Nous croyons en un développement économique ancré localement et ouvert sur le monde, au service des communautés et des marchés.': 'home.impactDesc',
  'Notre Vision': 'home.vision',
  'Devenir un acteur clé du commerce et de l\'immobilier africain, reconnu pour son professionnalisme et son impact positif.': 'home.visionText',
  'Prêt à commencer votre projet ?': 'home.ctaTitle',
  'Contactez-nous dès aujourd\'hui et découvrez comment nous pouvons vous accompagner.': 'home.ctaDescription',
  'WhatsApp': 'home.whatsapp',
  
  // Import-Export page
  'Import-Export': 'importExport.title',
  'Connecter les marchés, bâtir l\'avenir': 'importExport.subtitle',
  'SunuLink Global importe et exporte une large gamme de produits alimentaires essentiels. Nous travaillons avec des producteurs et des distributeurs fiables en Inde, en Asie, Europe, et en Afrique pour garantir qualité et traçabilité.': 'importExport.description',
  'Nos Produits': 'importExport.products',
  'Fruits secs': 'importExport.driedFruits',
  'Une large sélection de fruits secs de qualité premium : amandes, noix, raisins secs, dattes, figues et bien plus encore. Idéal pour la consommation directe ou l\'industrie alimentaire.': 'importExport.driedFruitsDesc',
  'Riz & Céréales': 'importExport.rice',
  'Riz parfumé et brisé de qualité supérieure. Nous importons directement des meilleures régions productrices pour garantir fraîcheur et qualité.': 'importExport.riceDesc',
  'Huiles végétales': 'importExport.oils',
  'Huiles de tournesol et de palme de première qualité. Produits certifiés et conformes aux normes internationales.': 'importExport.oilsDesc',
  'Fruits': 'importExport.fruits',
  'Fruits frais et de saison. Nous garantissons une chaîne du froid optimale pour préserver la qualité et la fraîcheur de nos produits.': 'importExport.fruitsDesc',
  'Produits alimentaires': 'importExport.food',
  'Sucre, farine et autres produits essentiels. Une gamme complète pour répondre à tous vos besoins alimentaires.': 'importExport.foodDesc',
  'Logistique & Douanes': 'importExport.logistics',
  'Notre équipe assure le transit, le dédouanement et la livraison jusqu\'au client final. Service complet et professionnel.': 'importExport.logisticsDesc',
  'Besoin de nos services ?': 'importExport.needServices',
  'Contactez-nous pour discuter de vos besoins en import-export.': 'importExport.contactDescription',
  'Contacter sur WhatsApp': 'importExport.contactWhatsApp',
  
  // Real Estate page
  'Immobilier': 'realEstate.title',
  'Votre partenaire immobilier au Sénégal': 'realEstate.subtitle',
  'Avec SunuLink Immobilier, trouvez le bien idéal au Sénégal. Nous proposons des villas de standing, appartements modernes dans les zones les plus recherchées : Dakar, Saly, Diamniadio, Thiès, etc.': 'realEstate.description',
  'Nos Services Immobiliers': 'realEstate.services',
  'Villas & Appartements': 'realEstate.villas',
  'Propriétés de standing dans les meilleures zones. Découvrez notre sélection de villas et appartements modernes dans les quartiers les plus prisés du Sénégal.': 'realEstate.villasDesc',
  'Gestion Locative': 'realEstate.management',
  'Gestion complète de vos biens immobiliers. Nous prenons en charge tous les aspects de la gestion locative pour vous offrir une tranquillité d\'esprit totale.': 'realEstate.managementDesc',
  'Trouvez votre bien idéal': 'realEstate.findProperty',
  'Contactez-nous pour découvrir notre sélection de propriétés ou pour confier la gestion de votre bien.': 'realEstate.contactDescription',
  
  // Contact page
  'Contactez-nous': 'contact.title',
  'Nous sommes à votre écoute': 'contact.subtitle',
  'Une question ? Un projet ? N\'hésitez pas à nous contacter. Notre équipe est là pour vous accompagner.': 'contact.description',
  'Envoyez-nous un message': 'contact.sendMessage',
  'Nom': 'contact.name',
  'Email': 'contact.email',
  'Téléphone': 'contact.phone',
  'Message': 'contact.message',
  'Envoyer': 'contact.send',
  'Envoi en cours...': 'contact.sending',
  'Informations de contact': 'contact.contactInfo',
  'Siège : 11 rue Malan, Immeuble Electra 2, Dakar': 'contact.address',
  'Nous contacter sur WhatsApp': 'contact.whatsapp',
  
  // Footer
  'À propos': 'footer.about',
  'Services': 'footer.services',
  'Connecter les marchés, bâtir l\'avenir': 'footer.slogan',
  'Tous droits réservés': 'footer.rights',
  'Dakar, Sénégal': 'common.dakar',
  
  // Social media titles
  'Suivez-nous sur Instagram': 'social.instagram',
  'Suivez-nous sur TikTok': 'social.tiktok',
  'Suivez-nous sur Facebook': 'social.facebook',
  
  // Common
  'Remonter en haut': 'common.scrollToTop',
  'Menu': 'common.menu',
  
  // Additional patterns for better coverage
  'Import-Export': 'nav.importExport',
  'Immobilier': 'nav.realEstate',
  'SunuLink Global': 'common.companyName',
  'Dakar, Sénégal': 'common.dakar',
  
  // PDF Documents
  'Catalogue Produits': 'pdf.catalog',
  'Brochure de présentation': 'pdf.brochure',
  'Télécharger': 'pdf.download',
  'Voir le document': 'pdf.view',
  'Télécharger le catalogue': 'pdf.downloadCatalog',
  'Télécharger la brochure': 'pdf.downloadBrochure'
};

// Initialize features
document.addEventListener('DOMContentLoaded', function() {
  initDarkMode();
  initTranslations();
  initWhatsAppButtons();
});

// ============================================
// DARK MODE
// ============================================

function initDarkMode() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
  createDarkModeToggle();
}

function createDarkModeToggle() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  
  if (document.querySelector('.theme-toggle')) return; // Already exists
  
  const toggle = document.createElement('button');
  toggle.className = 'theme-toggle';
  toggle.setAttribute('aria-label', t('common.toggleTheme', getCurrentLang()));
  toggle.innerHTML = `
    <svg class="theme-icon sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
    <svg class="theme-icon moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  `;
  
  toggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
  
  const mobileToggle = nav.querySelector('.mobile-menu-toggle');
  if (mobileToggle) {
    nav.insertBefore(toggle, mobileToggle);
  } else {
    nav.appendChild(toggle);
  }
  
  updateThemeToggleIcon();
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeToggleIcon();
}

function updateThemeToggleIcon() {
  const theme = document.documentElement.getAttribute('data-theme') || 'light';
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;
  
  const sunIcon = toggle.querySelector('.sun-icon');
  const moonIcon = toggle.querySelector('.moon-icon');
  
  if (theme === 'dark') {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  } else {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  }
}

// ============================================
// TRANSLATIONS
// ============================================

function getCurrentLang() {
  return document.documentElement.getAttribute('data-lang') || localStorage.getItem('language') || 'fr';
}

function initTranslations() {
  const savedLang = localStorage.getItem('language') || 'fr';
  
  // Apply language immediately
  applyLanguage(savedLang);
  
  // Create language selector
  createLanguageSelector();
  
  // Re-apply after a short delay to catch any dynamically loaded content
  setTimeout(() => {
    applyLanguage(savedLang);
  }, 100);
}

function createLanguageSelector() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  
  if (document.querySelector('.language-selector')) return; // Already exists
  
  const selector = document.createElement('div');
  selector.className = 'language-selector';
  selector.innerHTML = `
    <button class="lang-btn" data-lang="fr">FR</button>
    <button class="lang-btn" data-lang="en">EN</button>
  `;
  
  selector.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      applyLanguage(lang);
      localStorage.setItem('language', lang);
    });
  });
  
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    nav.insertBefore(selector, themeToggle);
  } else {
    const mobileToggle = nav.querySelector('.mobile-menu-toggle');
    if (mobileToggle) {
      nav.insertBefore(selector, mobileToggle);
    } else {
      nav.appendChild(selector);
    }
  }
  
  updateLanguageButtons();
}

function applyLanguage(lang) {
  // Set language attributes
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  
  // Translate meta tags
  translateMetaTags(lang);
  
  // Translate in order of specificity
  translateNavigation(lang);
  translatePageContent(lang);
  translateDataKeys(lang); // Translate elements with data-key attributes
  translateFooter(lang);
  translateForm(lang);
  translateButtons(lang);
  translateSocialTitles(lang);
  translateAllTexts(lang); // Do this last to catch any remaining texts
  
  // Final pass to catch any missed texts
  setTimeout(() => {
    translateAllTexts(lang);
    finalTranslationPass(lang); // Aggressive final pass
  }, 50);
  
  updateLanguageButtons();
  
  // Re-initialize WhatsApp buttons with new language
  setTimeout(() => {
    document.querySelectorAll('.whatsapp-btn, .whatsapp-service-btn').forEach(btn => btn.remove());
    initWhatsAppButtons();
  }, 200);
}

function translateMetaTags(lang) {
  // Translate page title
  const title = document.querySelector('title');
  if (title) {
    const path = window.location.pathname;
    let key = 'home.title';
    if (path.includes('import-export')) key = 'importExport.title';
    else if (path.includes('immobilier')) key = 'realEstate.title';
    else if (path.includes('contact')) key = 'contact.title';
    
    const translation = t(key, lang);
    if (translation) {
      title.textContent = `${translation} - SunuLink Global`;
    }
  }
  
  // Translate meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    const path = window.location.pathname;
    let key = 'home.description';
    if (path.includes('import-export')) key = 'importExport.description';
    else if (path.includes('immobilier')) key = 'realEstate.description';
    else if (path.includes('contact')) key = 'contact.description';
    
    const translation = t(key, lang);
    if (translation) {
      metaDesc.setAttribute('content', translation);
    }
  }
}

function translateDataKeys(lang) {
  // Translate all elements with data-key attributes
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    if (key) {
      const translation = t(key, lang);
      if (translation && translation !== key) {
        // Preserve inline styles if they exist
        const style = element.getAttribute('style');
        element.textContent = translation;
        if (style) element.setAttribute('style', style);
        element.setAttribute('data-translated', 'true');
      }
    }
  });
}

function translateAllTexts(lang) {
  // Skip elements that shouldn't be translated
  const skipSelectors = '.language-selector, .theme-toggle, script, style, .whatsapp-btn, .whatsapp-service-btn, .carousel-nav, .carousel-dot, .nav-link';
  
  // Translate all text elements - more comprehensive
  const elementsToTranslate = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, label, li, td, th, .card-title, .card-description, .section-title, .section-description, .hero-title, .hero-subtitle, .hero-description, .service-card .card-title, .service-card .card-description');
  
  elementsToTranslate.forEach(element => {
    // Skip navigation links - they are handled by translateNavigation
    if (element.classList.contains('nav-link') || element.closest('.nav-menu')) return;
    
    // Skip if element is in a skip container
    if (element.closest(skipSelectors)) return;
    
    // Skip if already processed by specific translation functions
    if (element.hasAttribute('data-translated')) return;
    
    const text = element.textContent.trim();
    
    // Skip empty or very short texts
    if (!text || text.length < 2) return;
    
    // Skip if it's a number, email, phone, or URL only
    if (/^[\d\s\-\+\(\)]+$/.test(text) || text.includes('@') || text.includes('http') || text.includes('www.')) return;
    
    // Skip if it's already in the target language (simple check)
    if (lang === 'en' && !/[àâäéèêëïîôùûüÿç]/.test(text) && text.length > 3) {
      // Might already be in English, but still check mapping
    }
    
    // Check exact match first
    if (textMapping[text]) {
      const translation = t(textMapping[text], lang);
      if (translation && translation !== textMapping[text] && translation !== text) {
        element.textContent = translation;
        element.setAttribute('data-translated', 'true');
        return;
      }
    }
    
    // Check for partial matches (for longer texts that might have extra content)
    for (const [frenchText, key] of Object.entries(textMapping)) {
      if (frenchText.length > 15 && text.includes(frenchText)) {
        const translation = t(key, lang);
        if (translation && translation !== key) {
          element.textContent = element.textContent.replace(frenchText, translation);
          element.setAttribute('data-translated', 'true');
          return;
        }
      }
    }
  });
  
  // Translate specific patterns
  translatePatterns(lang);
  
  // Remove data-translated attributes for next translation
  document.querySelectorAll('[data-translated]').forEach(el => el.removeAttribute('data-translated'));
}

function translateNavigation(lang) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    // Remove data-translated to allow re-translation
    link.removeAttribute('data-translated');
    
    // Use href to identify the link, not text content (which changes after translation)
    const href = link.getAttribute('href') || '';
    let translationKey = '';
    
    // Identify link by href
    if (href.includes('index.html') || href === 'index.html' || href === '/' || href === '#services') {
      translationKey = 'nav.home';
    } else if (href.includes('import-export')) {
      translationKey = 'nav.importExport';
    } else if (href.includes('immobilier')) {
      translationKey = 'nav.realEstate';
    } else if (href.includes('contact')) {
      translationKey = 'nav.contact';
    } else {
      // Fallback: try to identify by current text (only if href doesn't help)
      const text = link.textContent.trim();
      if (text === 'Accueil' || text === 'Home') {
        translationKey = 'nav.home';
      } else if (text === 'Import-Export') {
        translationKey = 'nav.importExport';
      } else if (text === 'Immobilier' || text === 'Real Estate') {
        translationKey = 'nav.realEstate';
      } else if (text === 'Contact') {
        translationKey = 'nav.contact';
      }
    }
    
    if (translationKey) {
      const translation = t(translationKey, lang);
      if (translation && translation !== translationKey) {
        link.textContent = translation;
        link.setAttribute('data-translated', 'true');
      }
    }
  });
}

function translatePageContent(lang) {
  const path = window.location.pathname;
  const page = path.includes('import-export') ? 'importExport' : 
               path.includes('immobilier') ? 'realEstate' :
               path.includes('contact') ? 'contact' : 'home';
  
  // Translate page title
  const pageTitle = document.querySelector('h1');
  if (pageTitle) {
    const title = t(`${page}.title`, lang);
    if (title) pageTitle.textContent = title;
  }
  
  // Translate subtitle
  const subtitle = document.querySelector('.section-subtitle, .hero-subtitle');
  if (subtitle) {
    const subtitleText = t(`${page}.subtitle`, lang);
    if (subtitleText) subtitle.textContent = subtitleText;
  }
  
  // Translate description - be more careful with inline styles
  const descriptions = document.querySelectorAll('.section-description, .hero-description');
  descriptions.forEach(desc => {
    // Skip if it has inline style attribute (might be custom)
    if (desc.hasAttribute('style') && desc.getAttribute('style').includes('color')) {
      // Still translate, just preserve the style
      const descText = t(`${page}.description`, lang);
      if (descText && descText !== `${page}.description`) {
        const style = desc.getAttribute('style');
        desc.textContent = descText;
        if (style) desc.setAttribute('style', style);
      }
    } else if (desc.textContent.trim()) {
      const descText = t(`${page}.description`, lang);
      if (descText && descText !== `${page}.description`) {
        desc.textContent = descText;
      }
    }
  });
  
  // Translate CTA descriptions
  if (page === 'home') {
    const ctaDesc = document.querySelector('.section-description[style*="color: rgba"]');
    if (ctaDesc && (ctaDesc.textContent.includes('Contactez-nous dès aujourd\'hui') || ctaDesc.textContent.includes('Contact us today'))) {
      ctaDesc.textContent = t('home.ctaDescription', lang);
    }
  } else if (page === 'importExport') {
    const ctaDesc = document.querySelector('.section-description');
    if (ctaDesc && (ctaDesc.textContent.includes('Contactez-nous pour discuter') || ctaDesc.textContent.includes('Contact us to discuss'))) {
      ctaDesc.textContent = t('importExport.contactDescription', lang);
    }
  } else if (page === 'realEstate') {
    const ctaDesc = document.querySelector('.section-description');
    if (ctaDesc && (ctaDesc.textContent.includes('Contactez-nous pour découvrir') || ctaDesc.textContent.includes('Contact us to discover'))) {
      ctaDesc.textContent = t('realEstate.contactDescription', lang);
    }
  }
  
  // Translate section titles
  document.querySelectorAll('.section-title').forEach(title => {
    const text = title.textContent.trim();
    let key = '';
    if (text === 'Nos Services' || text === 'Our Services') key = 'home.services';
    else if (text === 'Notre Mission' || text === 'Our Mission') key = 'home.mission';
    else if (text === 'Nos Valeurs' || text === 'Our Values') key = 'home.values';
    else if (text === 'Notre Vision' || text === 'Our Vision') key = 'home.vision';
    else if (text === 'Nos Produits' || text === 'Our Products') key = 'importExport.products';
    else if (text === 'Nos Services Immobiliers' || text === 'Our Real Estate Services') key = 'realEstate.services';
    else if (text === 'Villas & Appartements' || text === 'Villas & Apartments') key = 'realEstate.villas';
    else if (text === 'Ils nous font confiance' || text === 'They trust us') key = 'home.partners';
    else if (text === 'Gestion Locative' || text === 'Rental Management') key = 'realEstate.management';
    else if (text === 'Trouvez votre bien idéal' || text === 'Find your ideal property') key = 'realEstate.findProperty';
    else if (text === 'Besoin de nos services ?' || text === 'Need our services?') key = 'importExport.needServices';
    else if (text === 'Prêt à commencer votre projet ?' || text === 'Ready to start your project?') key = 'home.ctaTitle';
    
    if (key) {
      const translation = t(key, lang);
      if (translation) title.textContent = translation;
    }
  });
  
  // Translate service cards on home page
  if (page === 'home') {
    document.querySelectorAll('.service-card').forEach(card => {
      const title = card.querySelector('.card-title');
      const desc = card.querySelector('.card-description');
      
      if (title) {
        const titleText = title.textContent.trim();
        if (titleText === 'Import-Export') {
          // Keep as is, it's the same in both languages
        } else if (titleText === 'Immobilier' || titleText === 'Real Estate') {
          title.textContent = t('nav.realEstate', lang);
        }
      }
      
      if (desc) {
        const descText = desc.textContent.trim();
        if (descText.includes('Riz, huiles') || descText.includes('Rice, oils')) {
          desc.textContent = t('home.importExportDesc', lang);
        } else if (descText.includes('Vente, location') || descText.includes('Sale, rental')) {
          desc.textContent = t('home.realEstateDesc', lang);
        }
      }
    });
    
    // Translate value cards (modern values section)
    document.querySelectorAll('.value-title-modern').forEach(title => {
      const text = title.textContent.trim();
      if (text === 'Qualité responsable' || text === 'Responsible quality') {
        title.textContent = t('home.quality', lang);
      } else if (text === 'Fiabilité & confiance' || text === 'Reliability & trust') {
        title.textContent = t('home.reliability', lang);
      } else if (text === 'Impact local & vision durable' || text === 'Local impact & sustainable vision') {
        title.textContent = t('home.impact', lang);
      }
    });
    
    document.querySelectorAll('.value-text-modern').forEach(desc => {
      const text = desc.textContent.trim();
      if (text.includes('standards stricts à chaque étape') || text.includes('Strict standards are applied')) {
        desc.textContent = t('home.qualityDesc', lang);
      } else if (text.includes('partenariats durables basés') || text.includes('long-term partnerships based')) {
        desc.textContent = t('home.reliabilityDesc', lang);
      } else if (text.includes('développement économique ancré') || text.includes('locally rooted growth')) {
        desc.textContent = t('home.impactDesc', lang);
      }
    });
  }
  
  // Translate product cards
  if (page === 'importExport') {
    document.querySelectorAll('.card').forEach(card => {
      const title = card.querySelector('.card-title');
      const desc = card.querySelector('.card-description');
      
      if (title) {
        const titleText = title.textContent.trim();
        let key = '';
        if (titleText === 'Fruits secs' || titleText === 'Dried Fruits') key = 'importExport.driedFruits';
        else if (titleText === 'Riz & Céréales' || titleText === 'Rice & Cereals') key = 'importExport.rice';
        else if (titleText === 'Huiles végétales' || titleText === 'Vegetable Oils') key = 'importExport.oils';
        else if (titleText === 'Fruits') key = 'importExport.fruits';
        else if (titleText === 'Produits alimentaires' || titleText === 'Food Products') key = 'importExport.food';
        else if (titleText === 'Logistique & Douanes' || titleText === 'Logistics & Customs') key = 'importExport.logistics';
        
        if (key) {
          const translation = t(key, lang);
          if (translation) title.textContent = translation;
        }
      }
      
      if (desc) {
        const descText = desc.textContent.trim();
        let key = '';
        if (descText.includes('amandes') || descText.includes('almonds') || descText.includes('premium quality dried fruits')) key = 'importExport.driedFruitsDesc';
        else if (descText.includes('parfumé') || descText.includes('fragrant') || descText.includes('premium quality fragrant')) key = 'importExport.riceDesc';
        else if (descText.includes('tournesol') || descText.includes('sunflower') || descText.includes('Premium quality sunflower')) key = 'importExport.oilsDesc';
        else if (descText.includes('frais et de saison') || descText.includes('Fresh and seasonal') || descText.includes('optimal cold chain')) key = 'importExport.fruitsDesc';
        else if (descText.includes('Sucre, farine') || descText.includes('Sugar, flour') || descText.includes('complete range')) key = 'importExport.foodDesc';
        else if (descText.includes('transit') || descText.includes('customs clearance') || descText.includes('Our team handles')) key = 'importExport.logisticsDesc';
        
        if (key) {
          const translation = t(key, lang);
          if (translation) desc.textContent = translation;
        }
      }
    });
  }
  
  // Translate service sections
  if (page === 'realEstate') {
    document.querySelectorAll('[style*="margin-bottom: var(--spacing-xl)"]').forEach(section => {
      const title = section.querySelector('h3.section-title');
      const desc = section.querySelector('p');
      
      if (title) {
        const titleText = title.textContent.trim();
        let key = '';
        if (titleText === 'Villas & Appartements' || titleText === 'Villas & Apartments') key = 'realEstate.villas';
        else if (titleText === 'Gestion Locative' || titleText === 'Rental Management') key = 'realEstate.management';
        
        if (key) {
          const translation = t(key, lang);
          if (translation) title.textContent = translation;
        }
      }
      
      if (desc && desc.textContent.trim()) {
        const descText = desc.textContent.trim();
        let key = '';
        if (descText.includes('Propriétés de standing') || descText.includes('Luxury properties') || descText.includes('best areas')) key = 'realEstate.villasDesc';
        else if (descText.includes('Gestion complète') || descText.includes('Complete management') || descText.includes('total peace of mind')) key = 'realEstate.managementDesc';
        
        if (key) {
          const translation = t(key, lang);
          if (translation) desc.textContent = translation;
        }
      }
    });
  }
}

function translateFooter(lang) {
  const footerSections = document.querySelectorAll('.footer-section h3');
  footerSections.forEach(h3 => {
    const text = h3.textContent.trim();
    if (text === 'À propos' || text === 'About') {
      h3.textContent = t('footer.about', lang);
    } else if (text === 'Services') {
      h3.textContent = t('footer.services', lang);
    } else if (text === 'Contact') {
      h3.textContent = t('footer.contact', lang);
    }
  });
  
  const slogan = document.querySelector('.footer-section p[style*="italic"]');
  if (slogan) {
    const currentText = slogan.textContent.trim();
    if (currentText === 'Connecter les marchés, bâtir l\'avenir' || currentText === 'Connecting markets, building the future') {
      slogan.textContent = t('footer.slogan', lang);
    }
  }
  
  const rights = document.querySelector('.footer-bottom p');
  if (rights) {
    const currentText = rights.textContent;
    if (currentText.includes('Tous droits réservés') || currentText.includes('All rights reserved')) {
      rights.innerHTML = `&copy; ${new Date().getFullYear()} SunuLink Global. ${t('footer.rights', lang)}.`;
    }
  }
  
  // Translate footer links
  document.querySelectorAll('.footer-links a').forEach(link => {
    const text = link.textContent.trim();
    if (text === 'Import-Export') {
      link.textContent = t('nav.importExport', lang);
    } else if (text === 'Immobilier' || text === 'Real Estate') {
      link.textContent = t('nav.realEstate', lang);
    }
  });
}

function translateForm(lang) {
  // Translate form labels
  document.querySelectorAll('.form-label').forEach(label => {
    const text = label.textContent.trim();
    if (text === 'Nom' || text === 'Name') {
      label.textContent = t('contact.name', lang);
    } else if (text === 'Email') {
      label.textContent = t('contact.email', lang);
    } else if (text === 'Téléphone' || text === 'Phone') {
      label.textContent = t('contact.phone', lang);
    } else if (text === 'Message') {
      label.textContent = t('contact.message', lang);
    }
  });
  
  // Translate form placeholders
  document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
    const placeholder = input.getAttribute('placeholder');
    if (placeholder) {
      // Placeholders are usually same as labels
    }
  });
  
  // Translate form buttons
  document.querySelectorAll('button[type="submit"]').forEach(btn => {
    const text = btn.textContent.trim();
    if (text === 'Envoyer' || text === 'Send') {
      btn.textContent = t('contact.send', lang);
    }
  });
  
  // Translate contact form heading
  const formHeading = document.querySelector('h2');
  if (formHeading && (formHeading.textContent.includes('Envoyez-nous') || formHeading.textContent.includes('Send us'))) {
    formHeading.textContent = t('contact.sendMessage', lang);
  }
  
  // Translate contact info heading
  const infoHeadings = document.querySelectorAll('h2');
  infoHeadings.forEach(h2 => {
    if (h2.textContent.includes('Informations de contact') || h2.textContent.includes('Contact Information')) {
      h2.textContent = t('contact.contactInfo', lang);
    }
  });
  
  // Translate address, phone, email labels
  document.querySelectorAll('h3').forEach(h3 => {
    const text = h3.textContent.trim();
    if (text.includes('Adresse') || text.includes('Address')) {
      h3.innerHTML = `📍 ${t('contact.address', lang).split(':')[0]}`;
    } else if (text.includes('Téléphone') || text.includes('Phone')) {
      h3.innerHTML = `📞 ${t('contact.phoneLabel', lang)}`;
    } else if (text.includes('Email')) {
      h3.innerHTML = `✉️ ${t('contact.emailLabel', lang)}`;
    }
  });
}

function translateButtons(lang) {
  document.querySelectorAll('.btn, button, a.btn').forEach(btn => {
    // Skip WhatsApp buttons (they are handled separately)
    if (btn.classList.contains('whatsapp-btn') || btn.classList.contains('whatsapp-service-btn')) return;
    
    const text = btn.textContent.trim();
    if (text === 'Découvrir nos services' || text === 'Discover our services') {
      btn.textContent = t('home.discoverServices', lang);
    } else if (text === 'Nous contacter' || text === 'Contact us') {
      btn.textContent = t('home.contactUs', lang);
    } else if (text === 'En savoir plus' || text === 'Learn more') {
      btn.textContent = t('home.learnMore', lang);
    } else if (text === 'WhatsApp') {
      btn.textContent = t('home.whatsapp', lang);
    } else if (text.includes('Contacter sur WhatsApp') || text.includes('Contact on WhatsApp')) {
      const newText = t('importExport.contactWhatsApp', lang);
      if (btn.innerHTML.includes('<svg')) {
        btn.innerHTML = btn.innerHTML.replace(/<span>.*?<\/span>/, `<span>${newText}</span>`);
      } else {
        btn.textContent = newText;
      }
    } else if (text.includes('Nous contacter sur WhatsApp') || text.includes('Contact us on WhatsApp')) {
      const newText = t('contact.whatsapp', lang);
      if (btn.innerHTML.includes('<svg')) {
        btn.innerHTML = btn.innerHTML.replace(/<span>.*?<\/span>/, `<span>${newText}</span>`);
      } else {
        btn.textContent = newText;
      }
    }
  });
}

function translatePatterns(lang) {
  // Translate common patterns in descriptions
  const patterns = [
    { pattern: /Riz, huiles, fruits.*?bâtir l'avenir/, key: 'home.importExportDesc' },
    { pattern: /Vente, location et gestion.*?Sénégal/, key: 'home.realEstateDesc' },
    { pattern: /Nous facilitons les échanges.*?particuliers/, key: 'home.description' },
    { pattern: /Créer des ponts économiques.*?innovation/, key: 'home.missionText' },
    { pattern: /Devenir un acteur clé.*?impact positif/, key: 'home.visionText' },
    { pattern: /SunuLink Global importe et exporte.*?traçabilité/, key: 'importExport.description' },
    { pattern: /Avec SunuLink Immobilier.*?Thiès/, key: 'realEstate.description' },
    { pattern: /Une question \? Un projet \?.*?accompagner/, key: 'contact.description' },
    { pattern: /Propriétés de standing.*?Sénégal/, key: 'realEstate.villasDesc' },
    { pattern: /Gestion complète de vos biens.*?totale/, key: 'realEstate.managementDesc' },
    { pattern: /Siège : 11 rue Malan.*?Dakar/, key: 'contact.address' },
    { pattern: /Contactez-nous dès aujourd'hui.*?accompagner/, key: 'home.ctaDescription' },
    { pattern: /Contactez-nous pour discuter.*?import-export/, key: 'importExport.contactDescription' },
    { pattern: /Contactez-nous pour découvrir.*?bien/, key: 'realEstate.contactDescription' }
  ];
  
  document.querySelectorAll('p, .card-description, .section-description, .hero-description').forEach(element => {
    if (element.closest('.language-selector, .theme-toggle, .whatsapp-btn, .whatsapp-service-btn')) return;
    if (element.hasAttribute('data-translated')) return;
    
    const text = element.textContent;
    for (const { pattern, key } of patterns) {
      if (pattern.test(text)) {
        const fullTranslation = t(key, lang);
        if (fullTranslation && fullTranslation !== key) {
          element.textContent = fullTranslation;
          element.setAttribute('data-translated', 'true');
          break;
        }
      }
    }
  });
}

function translateSocialTitles(lang) {
  // Translate title attributes
  document.querySelectorAll('[title]').forEach(element => {
    const title = element.getAttribute('title');
    if (title && (title.includes('Suivez-nous') || title.includes('Follow us'))) {
      if (title.includes('Instagram')) {
        element.setAttribute('title', t('social.instagram', lang));
      } else if (title.includes('TikTok')) {
        element.setAttribute('title', t('social.tiktok', lang));
      } else if (title.includes('Facebook')) {
        element.setAttribute('title', t('social.facebook', lang));
      }
    }
  });
  
  // Translate aria-label attributes
  document.querySelectorAll('[aria-label]').forEach(element => {
    const label = element.getAttribute('aria-label');
    if (label === 'Remonter en haut' || label === 'Scroll to top') {
      element.setAttribute('aria-label', t('common.scrollToTop', lang));
    } else if (label === 'Menu') {
      element.setAttribute('aria-label', t('common.menu', lang));
    } else if (label && label.includes('Basculer')) {
      element.setAttribute('aria-label', t('common.toggleTheme', lang));
    }
  });
}

function updateLanguageButtons() {
  const currentLang = getCurrentLang();
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// ============================================
// WHATSAPP BUTTONS
// ============================================

function initWhatsAppButtons() {
  // Gérer tous les boutons WhatsApp avec data-section (ronds et normaux)
  document.querySelectorAll('.whatsapp-btn[data-section], .whatsapp-btn-round[data-section]').forEach(btn => {
    const sectionName = btn.getAttribute('data-section');
    const currentLang = getCurrentLang();
    // Déterminer le type selon la page et le contexte
    let type = 'section';
    if (window.location.pathname.includes('import-export') && btn.classList.contains('whatsapp-btn-round')) {
      // Les boutons ronds sur la page Import-Export sont pour les produits
      type = 'product';
    }
    btn.href = getWhatsAppUrl(sectionName, type, currentLang);
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
  });
  
  // Ajouter WhatsApp aux produits et services (logique existante)
  addWhatsAppToProducts();
  addWhatsAppToServices();
}

function addWhatsAppToProducts() {
  if (!window.location.pathname.includes('import-export')) return;
  
  // Ne pas ajouter de boutons automatiques sur la page Import-Export
  // Les boutons ronds sont maintenant gérés directement dans le HTML
  // Supprimer les anciens boutons WhatsApp s'ils existent
  document.querySelectorAll('.whatsapp-btn:not(.whatsapp-btn-round), .whatsapp-service-btn').forEach(btn => {
    // Ne supprimer que les boutons qui ne sont pas des boutons ronds
    if (!btn.classList.contains('whatsapp-btn-round')) {
      btn.remove();
    }
  });
  
  // Ne pas créer de nouveaux boutons automatiques
  return;
  
  // Code original commenté pour référence
  /*
  const productCards = document.querySelectorAll('.card');
  const currentLang = getCurrentLang();
  
  productCards.forEach(card => {
    const titleElement = card.querySelector('.card-title');
    if (!titleElement) return;
    if (card.querySelector('.whatsapp-btn')) return;
    // Exclure les cartes avec data-no-whatsapp
    if (card.hasAttribute('data-no-whatsapp')) return;
    
    const productName = titleElement.textContent.trim();
    
    const whatsappBtn = document.createElement('a');
    whatsappBtn.className = 'whatsapp-btn';
    whatsappBtn.setAttribute('data-section', productName);
    whatsappBtn.href = getWhatsAppUrl(productName, 'product', currentLang);
    whatsappBtn.target = '_blank';
    whatsappBtn.rel = 'noopener noreferrer';
    whatsappBtn.innerHTML = `
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      <span>${t('importExport.contactWhatsApp', currentLang)}</span>
    `;
    
    card.appendChild(whatsappBtn);
  });
  */
}

function addWhatsAppToServices() {
  // Ne pas ajouter de boutons automatiques sur la page immobilier
  // Les boutons sont maintenant gérés directement dans le HTML
  if (!window.location.pathname.includes('immobilier')) return;
  
  // Supprimer les anciens boutons WhatsApp s'ils existent
  document.querySelectorAll('.whatsapp-service-btn').forEach(btn => btn.remove());
  
  // Ne pas créer de nouveaux boutons automatiques
  return;
  
  // Code original commenté pour référence
  /*
  const serviceSections = document.querySelectorAll('[style*="margin-bottom: var(--spacing-xl)"]');
  const currentLang = getCurrentLang();
  
  serviceSections.forEach(section => {
    const titleElement = section.querySelector('h3.section-title');
    if (!titleElement) return;
    if (section.querySelector('.whatsapp-service-btn')) return;
    
    const serviceName = titleElement.textContent.trim();
    
    const whatsappBtn = document.createElement('a');
    whatsappBtn.className = 'whatsapp-service-btn';
    whatsappBtn.setAttribute('data-section', serviceName);
    whatsappBtn.href = getWhatsAppUrl(serviceName, 'service', currentLang);
    whatsappBtn.target = '_blank';
    whatsappBtn.rel = 'noopener noreferrer';
    whatsappBtn.innerHTML = `
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      <span>${t('realEstate.contactWhatsApp', currentLang)}</span>
    `;
    
    const description = section.querySelector('p');
    if (description) {
      description.insertAdjacentElement('afterend', whatsappBtn);
    } else {
      section.appendChild(whatsappBtn);
    }
  });
  */
}

function getWhatsAppUrl(sectionName, type, lang) {
  // Messages personnalisés selon la section
  let message;
  
  if (sectionName === 'Villas & Appartements' || sectionName === 'Villas & Apartments') {
    message = lang === 'fr' 
      ? 'Bonjour, je suis intéressé par vos Villas & Appartements. Pouvez-vous me donner plus d\'informations ?'
      : 'Hello, I am interested in your Villas & Apartments. Could you please provide more information?';
  } else if (sectionName === 'Gestion Locative' || sectionName === 'Property Management') {
    message = lang === 'fr' 
      ? 'Bonjour, je suis intéressé par votre service de Gestion Locative. Pouvez-vous me donner plus d\'informations ?'
      : 'Hello, I am interested in your Property Management services. Could you please provide more information?';
  } else {
    // Message générique pour les autres sections
    message = lang === 'fr' 
      ? `Bonjour, je vous contacte concernant la section ${sectionName}`
      : `Hello, I'm contacting you regarding the ${sectionName} section`;
  }
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
}

// Final aggressive translation pass to catch any remaining French text
function finalTranslationPass(lang) {
  if (lang === 'fr') return; // No need if already in French
  
  // First, ensure navigation is correctly translated using href
  translateNavigation(lang);
  
  // French text detection patterns
  const frenchPatterns = {
    'Accueil': 'nav.home',
    'Import-Export': 'nav.importExport',
    'Immobilier': 'nav.realEstate',
    'Contact': 'nav.contact',
    'À propos': 'footer.about',
    'Services': 'footer.services',
    'Tous droits réservés': 'footer.rights',
    'Connecter les marchés, bâtir l\'avenir': 'footer.slogan',
    'Découvrir nos services': 'home.discoverServices',
    'Nous contacter': 'home.contactUs',
    'En savoir plus': 'home.learnMore',
    'Prêt à commencer votre projet ?': 'home.ctaTitle',
    'Contactez-nous dès aujourd\'hui': 'home.ctaDescription',
    'Besoin de nos services ?': 'importExport.needServices',
    'Trouvez votre bien idéal': 'realEstate.findProperty',
    'Envoyez-nous un message': 'contact.sendMessage',
    'Informations de contact': 'contact.contactInfo',
    'Nom': 'contact.name',
    'Téléphone': 'contact.phone',
    'Envoyer': 'contact.send',
    'Nous contacter sur WhatsApp': 'contact.whatsapp',
    'Contacter sur WhatsApp': 'importExport.contactWhatsApp'
  };
  
  // Scan all text elements one more time
  document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, label, li, .card-title, .card-description, .section-title, .section-description').forEach(element => {
    if (element.closest('.language-selector, .theme-toggle, .whatsapp-btn, .whatsapp-service-btn')) return;
    
    const text = element.textContent.trim();
    
    // Check if text contains French characters and matches a pattern
    if (/[àâäéèêëïîôùûüÿç]/.test(text) || frenchPatterns[text]) {
      const key = frenchPatterns[text];
      if (key) {
        const translation = t(key, lang);
        if (translation && translation !== key && translation !== text) {
          element.textContent = translation;
        }
      } else {
        // Try to find a match in textMapping
        for (const [frenchText, mapKey] of Object.entries(textMapping)) {
          if (text === frenchText || (frenchText.length > 10 && text.includes(frenchText))) {
            const translation = t(mapKey, lang);
            if (translation && translation !== mapKey && translation !== text) {
              element.textContent = element.textContent.replace(frenchText, translation);
              break;
            }
          }
        }
      }
    }
  });
}
