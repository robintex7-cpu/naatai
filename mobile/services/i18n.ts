/**
 * Naatai Fit – Translations
 * Supported: English (en), German (de), Turkish (tr), French (fr), Arabic (ar)
 */

export type Lang = "en" | "de" | "tr" | "fr" | "ar";

export const LANGUAGES: { code: Lang; label: string; flag: string; rtl?: boolean }[] = [
  { code: "en", label: "English",   flag: "🇬🇧" },
  { code: "de", label: "Deutsch",   flag: "🇩🇪" },
  { code: "tr", label: "Türkçe",   flag: "🇹🇷" },
  { code: "fr", label: "Français",  flag: "🇫🇷" },
  { code: "ar", label: "العربية",  flag: "🇸🇦", rtl: true },
];

type Translations = {
  // Auth
  welcome:          string;
  tagline:          string;
  enterToken:       string;
  tokenHint:        string;
  tokenExample:     string;
  login:            string;
  invalidToken:     string;
  tokenPrefix:      string;

  // Home
  welcomeBack:      string;
  findPerfectFit:   string;
  findPerfectFitSub:string;
  whoIsThisFor:     string;
  man:              string;
  woman:            string;
  kid:              string;
  howItWorks:       string;
  step1Title:       string;
  step1Desc:        string;
  step2Title:       string;
  step2Desc:        string;
  step3Title:       string;
  step3Desc:        string;

  // Clothing type
  shoppingFor:      string;
  tops:             string;
  topsSub:          string;
  bottom:           string;
  bottomSub:        string;
  fullBody:         string;
  fullBodySub:      string;

  // Input method
  howToMeasure:     string;
  chooseMethod:     string;
  scan3D:           string;
  scan3DSub:        string;
  mostAccurate:     string;
  photoScan:        string;
  photoScanSub:     string;
  quick:            string;
  manual:           string;
  manualSub:        string;

  // Video scan
  bodyScan:         string;
  stand2m:          string;
  wearFitClothing:  string;
  rotate360:        string;
  armsAway:         string;
  tapToScan:        string;
  tapToStop:        string;
  secondsRemaining: string;
  rotateslowly:     string;
  uploading:        string;
  cameraPermission: string;
  allowCamera:      string;

  // Photo scan
  uploadPhotos:     string;
  frontView:        string;
  backView:         string;
  camera:           string;
  gallery:          string;
  analysePhotos:    string;
  photoTip1:        string;
  photoTip2:        string;
  photoTip3:        string;
  photoTip4:        string;

  // Manual
  enterMeasurements:string;
  tapeMeasure:      string;
  getMySize:        string;
  height:           string;
  weight:           string;
  chest:            string;
  waist:            string;
  hips:             string;
  shoulders:        string;
  inseam:           string;
  sleeve:           string;
  neck:             string;
  thigh:            string;

  // Processing
  processingScan:   string;
  mlBuilding:       string;
  step_frames:      string;
  step_pose:        string;
  step_mesh:        string;
  step_measure:     string;
  step_size:        string;
  step_final:       string;
  eta:              string;

  // Results
  yourResults:      string;
  yourSize:         string;
  alsoFits:         string;
  accuracy:         string;
  allSizes:         string;
  yourMeasurements: string;
  view3DMesh:       string;
  meshSaved:        string;
  scanAnother:      string;
  viewHistory:      string;
  scanFailed:       string;
  tryAgain:         string;

  // History
  scanHistory:      string;
  noScans:          string;
  noScansSub:       string;
  startFirstScan:   string;

  // Profile
  account:          string;
  appSettings:      string;
  support:          string;
  editProfile:      string;
  savedProfiles:    string;
  language:         string;
  units:            string;
  notifications:    string;
  helpCenter:       string;
  privacyPolicy:    string;
  appVersion:       string;
  logout:           string;
  logoutConfirm:    string;
  cancel:           string;

  // Language select
  selectLanguage:   string;
  languageChanged:  string;

  // Nav tabs
  tabHome:          string;
  tabScan:          string;
  tabHistory:       string;
  tabProfile:       string;

  // Demo
  demoMode:         string;
  demoModeDesc:     string;
  enterDemoMode:    string;
};

const T: Record<Lang, Translations> = {
  en: {
    welcome: "Welcome back", tagline: "Your perfect size, every time.",
    enterToken: "Enter Your Access Token", tokenHint: "Found in your order confirmation email or printed receipt.",
    tokenExample: "e.g. NAT-A8F3K2WQ", login: "LOGIN", invalidToken: "Invalid token. Try again.", tokenPrefix: "NAT –",
    welcomeBack: "Welcome back", findPerfectFit: "Find Your\nPerfect Fit",
    findPerfectFitSub: "Scan your body in 60 seconds.\nGet size recommendations for every item.",
    whoIsThisFor: "WHO IS THIS FOR?", man: "Man", woman: "Woman", kid: "Kid",
    howItWorks: "HOW IT WORKS",
    step1Title: "Select Category", step1Desc: "Choose gender and clothing type",
    step2Title: "Scan or Enter",   step2Desc: "Video scan, photo, or manual input",
    step3Title: "Get Your Size",   step3Desc: "Instant recommendations in every brand",
    shoppingFor: "What are you\nshopping for?",
    tops: "Tops", topsSub: "T-shirts, blouses, jackets",
    bottom: "Bottom", bottomSub: "Jeans, trousers, skirts",
    fullBody: "Full Body", fullBodySub: "Dresses, suits, full outfits",
    howToMeasure: "How would you like\nto measure?", chooseMethod: "Choose your preferred method",
    scan3D: "3D Body Scan", scan3DSub: "Record a 360° video — our ML model builds a 3D mesh and extracts all measurements.", mostAccurate: "MOST ACCURATE",
    photoScan: "Photo Scan", photoScanSub: "Upload front & back photos. AI detects your silhouette and estimates measurements.", quick: "QUICK",
    manual: "Manual Input", manualSub: "Enter your measurements directly using a tape measure.",
    bodyScan: "3D BODY SCAN", stand2m: "Stand 2 metres from camera", wearFitClothing: "Wear form-fitting clothing",
    rotate360: "Slowly rotate 360°", armsAway: "Keep arms slightly away from body",
    tapToScan: "TAP TO SCAN", tapToStop: "TAP TO STOP", secondsRemaining: "seconds remaining",
    rotateslowly: "⟳ Rotate slowly", uploading: "Uploading scan…",
    cameraPermission: "Camera access needed for 3D scanning", allowCamera: "ALLOW CAMERA",
    uploadPhotos: "Upload Body\nPhotos", frontView: "FRONT VIEW *", backView: "BACK VIEW",
    camera: "Camera", gallery: "Gallery", analysePhotos: "ANALYSE PHOTOS",
    photoTip1: "Wear form-fitting clothing", photoTip2: "Stand in front of a plain background",
    photoTip3: "Keep arms slightly out from body", photoTip4: "Back photo recommended for accuracy",
    enterMeasurements: "Enter Your\nMeasurements", tapeMeasure: "Use a flexible tape measure. All values in cm.",
    getMySize: "GET MY SIZE",
    height: "Height", weight: "Weight", chest: "Chest / Bust", waist: "Waist",
    hips: "Hips", shoulders: "Shoulder Width", inseam: "Inseam", sleeve: "Sleeve Length",
    neck: "Neck", thigh: "Thigh",
    processingScan: "Processing Your Scan", mlBuilding: "Our ML model is building your 3D body mesh",
    step_frames: "Extracting video frames…", step_pose: "Running body pose estimation…",
    step_mesh: "Building 3D mesh…", step_measure: "Calculating measurements…",
    step_size: "Generating size recommendations…", step_final: "Finalising results…",
    eta: "This usually takes 30–60 seconds",
    yourResults: "YOUR RESULTS", yourSize: "YOUR SIZE", alsoFits: "Also fits:", accuracy: "Accuracy",
    allSizes: "ALL SIZES", yourMeasurements: "YOUR MEASUREMENTS",
    view3DMesh: "View 3D Model", meshSaved: "Your mesh is saved and updated with every scan",
    scanAnother: "SCAN ANOTHER ITEM", viewHistory: "VIEW HISTORY",
    scanFailed: "Scan Failed", tryAgain: "TRY AGAIN",
    scanHistory: "SCAN HISTORY", noScans: "No scans yet", noScansSub: "Your scan history will appear here",
    startFirstScan: "START FIRST SCAN",
    account: "ACCOUNT", appSettings: "APP", support: "SUPPORT",
    editProfile: "Edit Profile", savedProfiles: "Saved Profiles", language: "Language",
    units: "Units (cm/in)", notifications: "Notifications", helpCenter: "Help Center",
    privacyPolicy: "Privacy Policy", appVersion: "App Version 1.0.0",
    logout: "Logout", logoutConfirm: "Are you sure you want to logout?",
    cancel: "Cancel",
    selectLanguage: "Select Language", languageChanged: "Language updated",
    tabHome: "HOME", tabScan: "SCAN", tabHistory: "HISTORY", tabProfile: "PROFILE",
    demoMode: "DEMO MODE", demoModeDesc: "Try without a backend. Uses sample data.", enterDemoMode: "ENTER DEMO MODE",
  },
  de: {
    welcome: "Willkommen zurück", tagline: "Deine perfekte Größe, jedes Mal.",
    enterToken: "Zugangscode eingeben", tokenHint: "In deiner Bestellbestätigung oder auf dem Kassenbon.",
    tokenExample: "z.B. NAT-A8F3K2WQ", login: "ANMELDEN", invalidToken: "Ungültiger Code. Bitte erneut versuchen.", tokenPrefix: "NAT –",
    welcomeBack: "Willkommen zurück", findPerfectFit: "Finde deine\nperfekte Passform",
    findPerfectFitSub: "Scanne deinen Körper in 60 Sekunden.\nGrößenempfehlungen für jedes Teil.",
    whoIsThisFor: "FÜR WEN IST DAS?", man: "Herren", woman: "Damen", kid: "Kinder",
    howItWorks: "SO FUNKTIONIERT ES",
    step1Title: "Kategorie wählen", step1Desc: "Geschlecht und Bekleidungsart auswählen",
    step2Title: "Scannen oder eingeben", step2Desc: "Video-Scan, Foto oder manuelle Eingabe",
    step3Title: "Deine Größe",     step3Desc: "Sofortige Empfehlungen für jede Marke",
    shoppingFor: "Was kaufst du\ngerade?",
    tops: "Oberteile", topsSub: "T-Shirts, Blusen, Jacken",
    bottom: "Unterteile", bottomSub: "Jeans, Hosen, Röcke",
    fullBody: "Ganzkörper", fullBodySub: "Kleider, Anzüge, Outfits",
    howToMeasure: "Wie möchtest du\nmessen?", chooseMethod: "Bevorzugte Methode wählen",
    scan3D: "3D-Körperscan", scan3DSub: "Nimm ein 360°-Video auf – unser ML-Modell erstellt ein 3D-Netz.", mostAccurate: "AM GENAUESTEN",
    photoScan: "Foto-Scan", photoScanSub: "Lade Vorder- & Rückansichtsfotos hoch. KI erkennt deine Silhouette.", quick: "SCHNELL",
    manual: "Manuelle Eingabe", manualSub: "Gib deine Maße direkt mit einem Maßband ein.",
    bodyScan: "3D-KÖRPERSCAN", stand2m: "2 Meter von der Kamera entfernt stehen",
    wearFitClothing: "Eng anliegende Kleidung tragen", rotate360: "Langsam 360° drehen",
    armsAway: "Arme leicht vom Körper halten", tapToScan: "TIPPEN ZUM SCANNEN",
    tapToStop: "TIPPEN ZUM STOPPEN", secondsRemaining: "Sekunden verbleibend",
    rotateslowly: "⟳ Langsam drehen", uploading: "Scan wird hochgeladen…",
    cameraPermission: "Kamerazugriff für 3D-Scan erforderlich", allowCamera: "KAMERA ERLAUBEN",
    uploadPhotos: "Körperfotos\nhochladen", frontView: "VORDERANSICHT *", backView: "RÜCKANSICHT",
    camera: "Kamera", gallery: "Galerie", analysePhotos: "FOTOS ANALYSIEREN",
    photoTip1: "Eng anliegende Kleidung", photoTip2: "Vor einfarbigem Hintergrund stehen",
    photoTip3: "Arme leicht abspreizen", photoTip4: "Rückenfoto für mehr Genauigkeit empfohlen",
    enterMeasurements: "Maße eingeben", tapeMeasure: "Flexibles Maßband verwenden. Alle Werte in cm.",
    getMySize: "MEINE GRÖSSE ERMITTELN",
    height: "Körpergröße", weight: "Gewicht", chest: "Brust / Büste", waist: "Taille",
    hips: "Hüfte", shoulders: "Schulterbreite", inseam: "Innenbeinlänge", sleeve: "Ärmellänge",
    neck: "Halsumfang", thigh: "Oberschenkel",
    processingScan: "Scan wird verarbeitet", mlBuilding: "Unser ML-Modell erstellt dein 3D-Körpernetz",
    step_frames: "Video-Frames extrahieren…", step_pose: "Körperhaltung analysieren…",
    step_mesh: "3D-Netz aufbauen…", step_measure: "Maße berechnen…",
    step_size: "Größenempfehlungen generieren…", step_final: "Ergebnisse fertigstellen…",
    eta: "Dies dauert normalerweise 30–60 Sekunden",
    yourResults: "DEINE ERGEBNISSE", yourSize: "DEINE GRÖSSE", alsoFits: "Passt auch:", accuracy: "Genauigkeit",
    allSizes: "ALLE GRÖSSEN", yourMeasurements: "DEINE MASSE",
    view3DMesh: "3D-Modell anzeigen", meshSaved: "Dein Netz wird gespeichert und mit jedem Scan aktualisiert",
    scanAnother: "WEITERES ITEM SCANNEN", viewHistory: "VERLAUF ANZEIGEN",
    scanFailed: "Scan fehlgeschlagen", tryAgain: "ERNEUT VERSUCHEN",
    scanHistory: "SCAN-VERLAUF", noScans: "Noch keine Scans", noScansSub: "Dein Scan-Verlauf erscheint hier",
    startFirstScan: "ERSTEN SCAN STARTEN",
    account: "KONTO", appSettings: "APP", support: "SUPPORT",
    editProfile: "Profil bearbeiten", savedProfiles: "Gespeicherte Profile", language: "Sprache",
    units: "Einheiten (cm/inch)", notifications: "Benachrichtigungen", helpCenter: "Hilfezentrum",
    privacyPolicy: "Datenschutzrichtlinie", appVersion: "App-Version 1.0.0",
    logout: "Abmelden", logoutConfirm: "Möchtest du dich wirklich abmelden?",
    cancel: "Abbrechen",
    selectLanguage: "Sprache auswählen", languageChanged: "Sprache aktualisiert",
    tabHome: "START", tabScan: "SCAN", tabHistory: "VERLAUF", tabProfile: "PROFIL",
    demoMode: "DEMO-MODUS", demoModeDesc: "Ohne Backend ausprobieren. Verwendet Beispieldaten.", enterDemoMode: "DEMO STARTEN",
  },
  tr: {
    welcome: "Tekrar hoş geldiniz", tagline: "Her seferinde mükemmel bedeniniz.",
    enterToken: "Erişim Kodunuzu Girin", tokenHint: "Sipariş onay e-postanızda veya makbuzunuzda bulunur.",
    tokenExample: "örn. NAT-A8F3K2WQ", login: "GİRİŞ YAP", invalidToken: "Geçersiz kod. Tekrar deneyin.", tokenPrefix: "NAT –",
    welcomeBack: "Tekrar hoş geldiniz", findPerfectFit: "Mükemmel\nBedeninizi Bulun",
    findPerfectFitSub: "60 saniyede bedeninizi tarayın.\nHer ürün için beden önerileri alın.",
    whoIsThisFor: "KİM İÇİN?", man: "Erkek", woman: "Kadın", kid: "Çocuk",
    howItWorks: "NASIL ÇALIŞIR",
    step1Title: "Kategori Seçin", step1Desc: "Cinsiyet ve giysi türünü seçin",
    step2Title: "Tara veya Gir", step2Desc: "Video tarama, fotoğraf veya manuel giriş",
    step3Title: "Bedeninizi Alın", step3Desc: "Her markada anında öneriler",
    shoppingFor: "Ne alışverişi\nyapıyorsunuz?",
    tops: "Üst Giyim", topsSub: "Tişört, bluz, ceket",
    bottom: "Alt Giyim", bottomSub: "Jean, pantolon, etek",
    fullBody: "Tam Vücut", fullBodySub: "Elbise, takım elbise, kombin",
    howToMeasure: "Nasıl ölçmek\nistersiniz?", chooseMethod: "Tercih ettiğiniz yöntemi seçin",
    scan3D: "3D Vücut Tarama", scan3DSub: "360° video çekin — ML modelimiz 3D mesh oluşturur ve tüm ölçümleri çıkarır.", mostAccurate: "EN DOĞRU",
    photoScan: "Fotoğraf Tarama", photoScanSub: "Ön ve arka fotoğraf yükleyin. YZ siluetinizi algılar.", quick: "HIZLI",
    manual: "Manuel Giriş", manualSub: "Mezura kullanarak ölçülerinizi doğrudan girin.",
    bodyScan: "3D VÜCUT TARAMA", stand2m: "Kameradan 2 metre uzakta durun",
    wearFitClothing: "Dar giysi giyin", rotate360: "Yavaşça 360° dönün",
    armsAway: "Kolları vücuttan biraz uzak tutun", tapToScan: "TARAMAK İÇİN DOKUN",
    tapToStop: "DURDURMAK İÇİN DOKUN", secondsRemaining: "saniye kaldı",
    rotateslowly: "⟳ Yavaşça dönün", uploading: "Tarama yükleniyor…",
    cameraPermission: "3D tarama için kamera erişimi gerekli", allowCamera: "KAMERAYA İZİN VER",
    uploadPhotos: "Vücut Fotoğrafları\nYükle", frontView: "ÖN GÖRÜNÜM *", backView: "ARKA GÖRÜNÜM",
    camera: "Kamera", gallery: "Galeri", analysePhotos: "FOTOĞRAFLARI ANALİZ ET",
    photoTip1: "Dar giysi giyin", photoTip2: "Düz arka plan önünde durun",
    photoTip3: "Kolları vücuttan biraz uzak tutun", photoTip4: "Doğruluk için arka fotoğraf önerilir",
    enterMeasurements: "Ölçülerinizi\nGirin", tapeMeasure: "Esnek mezura kullanın. Tüm değerler cm cinsinden.",
    getMySize: "BEDENİMİ BUL",
    height: "Boy", weight: "Kilo", chest: "Göğüs / Büst", waist: "Bel",
    hips: "Kalça", shoulders: "Omuz Genişliği", inseam: "İç Bacak", sleeve: "Kol Boyu",
    neck: "Boyun Çevresi", thigh: "Uyluk",
    processingScan: "Tarama İşleniyor", mlBuilding: "ML modelimiz 3D vücut mesh'inizi oluşturuyor",
    step_frames: "Video kareleri çıkarılıyor…", step_pose: "Vücut duruşu tahmin ediliyor…",
    step_mesh: "3D mesh oluşturuluyor…", step_measure: "Ölçümler hesaplanıyor…",
    step_size: "Beden önerileri oluşturuluyor…", step_final: "Sonuçlar tamamlanıyor…",
    eta: "Bu genellikle 30–60 saniye sürer",
    yourResults: "SONUÇLARINIZ", yourSize: "BEDENİNİZ", alsoFits: "Ayrıca uyar:", accuracy: "Doğruluk",
    allSizes: "TÜM BEDENLER", yourMeasurements: "ÖLÇÜLERİNİZ",
    view3DMesh: "3D Modeli Görüntüle", meshSaved: "Mesh'iniz her taramada kaydedilir ve güncellenir",
    scanAnother: "BAŞKA ÜRÜN TARA", viewHistory: "GEÇMİŞİ GÖR",
    scanFailed: "Tarama Başarısız", tryAgain: "TEKRAR DENE",
    scanHistory: "TARAMA GEÇMİŞİ", noScans: "Henüz tarama yok", noScansSub: "Tarama geçmişiniz burada görünecek",
    startFirstScan: "İLK TARAMAYI BAŞLAT",
    account: "HESAP", appSettings: "UYGULAMA", support: "DESTEK",
    editProfile: "Profili Düzenle", savedProfiles: "Kayıtlı Profiller", language: "Dil",
    units: "Birimler (cm/inç)", notifications: "Bildirimler", helpCenter: "Yardım Merkezi",
    privacyPolicy: "Gizlilik Politikası", appVersion: "Uygulama Sürümü 1.0.0",
    logout: "Çıkış Yap", logoutConfirm: "Çıkış yapmak istediğinizden emin misiniz?",
    cancel: "İptal",
    selectLanguage: "Dil Seçin", languageChanged: "Dil güncellendi",
    tabHome: "ANA SAYFA", tabScan: "TARAMA", tabHistory: "GEÇMİŞ", tabProfile: "PROFİL",
    demoMode: "DEMO MODU", demoModeDesc: "Backend olmadan deneyin. Örnek veriler kullanır.", enterDemoMode: "DEMOyu BAŞLAT",
  },
  fr: {
    welcome: "Bon retour", tagline: "Votre taille parfaite, à chaque fois.",
    enterToken: "Entrez votre code d'accès", tokenHint: "Disponible dans votre e-mail de confirmation ou sur votre reçu.",
    tokenExample: "ex. NAT-A8F3K2WQ", login: "CONNEXION", invalidToken: "Code invalide. Réessayez.", tokenPrefix: "NAT –",
    welcomeBack: "Bon retour", findPerfectFit: "Trouvez votre\ntaille parfaite",
    findPerfectFitSub: "Scannez votre corps en 60 secondes.\nRecommandations de taille pour chaque article.",
    whoIsThisFor: "POUR QUI ?", man: "Homme", woman: "Femme", kid: "Enfant",
    howItWorks: "COMMENT ÇA MARCHE",
    step1Title: "Choisir la catégorie", step1Desc: "Sélectionnez le genre et le type de vêtement",
    step2Title: "Scanner ou saisir",    step2Desc: "Scan vidéo, photo ou saisie manuelle",
    step3Title: "Votre taille",         step3Desc: "Recommandations instantanées pour chaque marque",
    shoppingFor: "Qu'achetez-vous\naujourd'hui ?",
    tops: "Hauts", topsSub: "T-shirts, chemisiers, vestes",
    bottom: "Bas", bottomSub: "Jeans, pantalons, jupes",
    fullBody: "Corps entier", fullBodySub: "Robes, costumes, tenues complètes",
    howToMeasure: "Comment souhaitez-vous\nvous mesurer ?", chooseMethod: "Choisissez votre méthode préférée",
    scan3D: "Scan 3D du corps", scan3DSub: "Enregistrez une vidéo à 360° — notre modèle ML crée un maillage 3D.", mostAccurate: "LE PLUS PRÉCIS",
    photoScan: "Scan photo", photoScanSub: "Téléchargez des photos avant/arrière. L'IA détecte votre silhouette.", quick: "RAPIDE",
    manual: "Saisie manuelle", manualSub: "Entrez vos mesures directement avec un mètre ruban.",
    bodyScan: "SCAN CORPOREL 3D", stand2m: "Tenez-vous à 2 mètres de la caméra",
    wearFitClothing: "Portez des vêtements moulants", rotate360: "Tournez lentement à 360°",
    armsAway: "Gardez les bras légèrement écartés", tapToScan: "APPUYER POUR SCANNER",
    tapToStop: "APPUYER POUR ARRÊTER", secondsRemaining: "secondes restantes",
    rotateslowly: "⟳ Tournez lentement", uploading: "Téléchargement du scan…",
    cameraPermission: "Accès à la caméra requis pour le scan 3D", allowCamera: "AUTORISER LA CAMÉRA",
    uploadPhotos: "Télécharger des\nphotos corporelles", frontView: "VUE DE FACE *", backView: "VUE DE DOS",
    camera: "Appareil photo", gallery: "Galerie", analysePhotos: "ANALYSER LES PHOTOS",
    photoTip1: "Portez des vêtements moulants", photoTip2: "Tenez-vous devant un fond uni",
    photoTip3: "Gardez les bras légèrement écartés", photoTip4: "Photo de dos recommandée pour plus de précision",
    enterMeasurements: "Entrez vos\nmesures", tapeMeasure: "Utilisez un mètre ruban flexible. Toutes les valeurs en cm.",
    getMySize: "TROUVER MA TAILLE",
    height: "Taille", weight: "Poids", chest: "Poitrine / Buste", waist: "Tour de taille",
    hips: "Tour de hanches", shoulders: "Largeur d'épaules", inseam: "Entrejambe", sleeve: "Longueur de manche",
    neck: "Tour de cou", thigh: "Cuisse",
    processingScan: "Traitement du scan", mlBuilding: "Notre modèle ML construit votre maillage 3D",
    step_frames: "Extraction des images vidéo…", step_pose: "Estimation de la posture corporelle…",
    step_mesh: "Construction du maillage 3D…", step_measure: "Calcul des mesures…",
    step_size: "Génération des recommandations de taille…", step_final: "Finalisation des résultats…",
    eta: "Cela prend généralement 30 à 60 secondes",
    yourResults: "VOS RÉSULTATS", yourSize: "VOTRE TAILLE", alsoFits: "Convient aussi :", accuracy: "Précision",
    allSizes: "TOUTES LES TAILLES", yourMeasurements: "VOS MESURES",
    view3DMesh: "Voir le modèle 3D", meshSaved: "Votre maillage est sauvegardé et mis à jour à chaque scan",
    scanAnother: "SCANNER UN AUTRE ARTICLE", viewHistory: "VOIR L'HISTORIQUE",
    scanFailed: "Scan échoué", tryAgain: "RÉESSAYER",
    scanHistory: "HISTORIQUE DES SCANS", noScans: "Aucun scan", noScansSub: "Votre historique de scans apparaîtra ici",
    startFirstScan: "DÉMARRER LE PREMIER SCAN",
    account: "COMPTE", appSettings: "APPLICATION", support: "SUPPORT",
    editProfile: "Modifier le profil", savedProfiles: "Profils enregistrés", language: "Langue",
    units: "Unités (cm/po)", notifications: "Notifications", helpCenter: "Centre d'aide",
    privacyPolicy: "Politique de confidentialité", appVersion: "Version 1.0.0",
    logout: "Se déconnecter", logoutConfirm: "Voulez-vous vraiment vous déconnecter ?",
    cancel: "Annuler",
    selectLanguage: "Choisir la langue", languageChanged: "Langue mise à jour",
    tabHome: "ACCUEIL", tabScan: "SCAN", tabHistory: "HISTORIQUE", tabProfile: "PROFIL",
    demoMode: "MODE DÉMO", demoModeDesc: "Essayez sans backend. Utilise des données d'exemple.", enterDemoMode: "LANCER LA DÉMO",
  },
  ar: {
    welcome: "مرحباً بعودتك", tagline: "مقاسك المثالي، في كل مرة.",
    enterToken: "أدخل رمز الوصول", tokenHint: "موجود في بريد تأكيد الطلب أو الإيصال المطبوع.",
    tokenExample: "مثال: NAT-A8F3K2WQ", login: "تسجيل الدخول", invalidToken: "رمز غير صالح. حاول مجدداً.", tokenPrefix: "NAT –",
    welcomeBack: "مرحباً بعودتك", findPerfectFit: "اعثر على\nمقاسك المثالي",
    findPerfectFitSub: "امسح جسمك في 60 ثانية.\nاحصل على توصيات المقاس لكل قطعة.",
    whoIsThisFor: "لمن هذا؟", man: "رجال", woman: "نساء", kid: "أطفال",
    howItWorks: "كيف يعمل",
    step1Title: "اختر الفئة", step1Desc: "اختر الجنس ونوع الملابس",
    step2Title: "امسح أو أدخل", step2Desc: "مسح بالفيديو أو الصور أو الإدخال اليدوي",
    step3Title: "احصل على مقاسك", step3Desc: "توصيات فورية لكل علامة تجارية",
    shoppingFor: "ماذا تتسوق\naليوم؟",
    tops: "الجزء العلوي", topsSub: "تيشيرت، بلوزة، جاكيت",
    bottom: "الجزء السفلي", bottomSub: "جينز، بنطلون، تنورة",
    fullBody: "الجسم كامل", fullBodySub: "فساتين، بدلات، أطقم كاملة",
    howToMeasure: "كيف تريد\nالقياس؟", chooseMethod: "اختر طريقتك المفضلة",
    scan3D: "مسح الجسم ثلاثي الأبعاد", scan3DSub: "سجل فيديو 360° — يبني نموذج الذكاء الاصطناعي شبكة ثلاثية الأبعاد.", mostAccurate: "الأكثر دقة",
    photoScan: "مسح بالصور", photoScanSub: "حمّل صور أمامية وخلفية. يكتشف الذكاء الاصطناعي ملامح جسمك.", quick: "سريع",
    manual: "إدخال يدوي", manualSub: "أدخل قياساتك مباشرة باستخدام شريط القياس.",
    bodyScan: "مسح الجسم ثلاثي الأبعاد", stand2m: "قف على بُعد مترين من الكاميرا",
    wearFitClothing: "ارتدِ ملابس ضيقة", rotate360: "دُر ببطء 360 درجة",
    armsAway: "احتفظ بذراعيك بعيدتين قليلاً عن الجسم", tapToScan: "اضغط للمسح",
    tapToStop: "اضغط للإيقاف", secondsRemaining: "ثوانٍ متبقية",
    rotateslowly: "⟳ دُر ببطء", uploading: "جارٍ تحميل المسح…",
    cameraPermission: "مطلوب الوصول للكاميرا للمسح ثلاثي الأبعاد", allowCamera: "السماح بالكاميرا",
    uploadPhotos: "تحميل\nصور الجسم", frontView: "المنظر الأمامي *", backView: "المنظر الخلفي",
    camera: "الكاميرا", gallery: "المعرض", analysePhotos: "تحليل الصور",
    photoTip1: "ارتدِ ملابس ضيقة", photoTip2: "قف أمام خلفية بسيطة",
    photoTip3: "احتفظ بذراعيك بعيدتين قليلاً", photoTip4: "الصورة الخلفية موصى بها للدقة",
    enterMeasurements: "أدخل\nقياساتك", tapeMeasure: "استخدم شريط قياس مرناً. جميع القيم بالسنتيمتر.",
    getMySize: "احصل على مقاسي",
    height: "الطول", weight: "الوزن", chest: "الصدر / البست", waist: "الخصر",
    hips: "الأرداف", shoulders: "عرض الكتفين", inseam: "الداخل", sleeve: "طول الكم",
    neck: "محيط الرقبة", thigh: "الفخذ",
    processingScan: "جارٍ معالجة المسح", mlBuilding: "يبني نموذج الذكاء الاصطناعي شبكة جسمك ثلاثية الأبعاد",
    step_frames: "استخراج إطارات الفيديو…", step_pose: "تحليل وضعية الجسم…",
    step_mesh: "بناء الشبكة ثلاثية الأبعاد…", step_measure: "حساب القياسات…",
    step_size: "إنشاء توصيات المقاس…", step_final: "إنهاء النتائج…",
    eta: "يستغرق هذا عادةً 30–60 ثانية",
    yourResults: "نتائجك", yourSize: "مقاسك", alsoFits: "يناسب أيضاً:", accuracy: "الدقة",
    allSizes: "جميع المقاسات", yourMeasurements: "قياساتك",
    view3DMesh: "عرض النموذج ثلاثي الأبعاد", meshSaved: "يتم حفظ شبكتك وتحديثها مع كل مسح",
    scanAnother: "مسح منتج آخر", viewHistory: "عرض السجل",
    scanFailed: "فشل المسح", tryAgain: "حاول مجدداً",
    scanHistory: "سجل المسح", noScans: "لا توجد عمليات مسح", noScansSub: "سجل المسح الخاص بك سيظهر هنا",
    startFirstScan: "ابدأ أول مسح",
    account: "الحساب", appSettings: "التطبيق", support: "الدعم",
    editProfile: "تعديل الملف الشخصي", savedProfiles: "الملفات المحفوظة", language: "اللغة",
    units: "الوحدات (سم/بوصة)", notifications: "الإشعارات", helpCenter: "مركز المساعدة",
    privacyPolicy: "سياسة الخصوصية", appVersion: "الإصدار 1.0.0",
    logout: "تسجيل الخروج", logoutConfirm: "هل أنت متأكد من تسجيل الخروج؟",
    cancel: "إلغاء",
    selectLanguage: "اختر اللغة", languageChanged: "تم تحديث اللغة",
    tabHome: "الرئيسية", tabScan: "المسح", tabHistory: "السجل", tabProfile: "الملف",
    demoMode: "وضع العرض", demoModeDesc: "جرب بدون خادم. يستخدم بيانات نموذجية.", enterDemoMode: "بدء العرض التجريبي",
  },
};

export function t(lang: Lang, key: keyof Translations): string {
  return T[lang]?.[key] ?? T["en"][key] ?? key;
}

export default T;
