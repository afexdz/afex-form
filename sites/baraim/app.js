/* Bara’im : contenu FR / AR / EN, simulateur, galerie, réservation (GSAP + ScrollTrigger + Flip + Lenis, en local) */
(function () {
  var doc = document.documentElement;
  var STATIC = doc.classList.contains("static") || !window.gsap || !window.ScrollTrigger;
  if (STATIC) doc.classList.add("static");
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  /* photo heights at 1280 px wide, and Unsplash author */
  var P = { cercle: [852, "CDC"], voitures: [853, "BBC Creative"], collage: [920, "Compagnons"], cubes: [853, "Marisa Howenstine"], salle: [853, "Gautam Arora"], tour: [1920, "Markus Spiske"], dessin: [853, "Gabe Pierce"], papillon: [853, "Lucas Alexander"], lettres: [1707, "Ryan Fields"], dessins: [853, "Julia Taubitz"], rangement: [853, "Far Chinberdiev"], bottes: [853, "Ben Wicks"], appareil: [884, "Tanaphong Toochinda"], table: [1920, "Anna Zwiefel"], mur: [960, "Monica Sedra"], bulles: [851, "Leo Rivas"], jouets: [849, "Yuri Li"], balancoire: [1919, "Brooke Balentine"], rire: [1919, "Brooke Balentine"], petitesvoitures: [853, "Sandy Millar"], tasse: [1919, "krakenimages"], puzzle: [1920, "NHN"], poupee: [1864, "Mina Rad"], etagere: [854, "Paige Cody"], peinture: [1927, "Senjuti Kundu"], mainbleue: [853, "Phil Hearing"], pate: [1919, "Jonathan Borba"], empreintes: [853, "Bernard Hermant"], pinceau: [852, "Mike Fox"], atelier: [853, "Anna Khromova"], sieste: [853, "Richard Stachmann"], veilleuse: [853, "Bastien Jaillot"], dodo: [853, "Tara Raye"], toboggan: [848, "Power Lai"], parc: [960, "Brett Jordan"], pneu: [853, "Kelly Sikkema"], grimper: [1920, "Aarón Blanco Tejedor"], bac: [853, "Alexandr Podvalny"], dejeuner: [961, "Pavol Štugel"], bol: [853, "NHN"], cereales: [851, "Providence Doucet"], peche: [853, "Land O’Lakes, Inc."], fraises: [848, "Kelly Sikkema"], cuillere: [853, "hui sang"] };
  function img(n, sizes, cls, eager) {
    var big = n === "peinture" || n === "rire" || n === "table" || n === "atelier";
    return '<img' + (cls ? ' class="' + cls + '"' : "") + ' src="assets/img/' + n + '-640.webp" srcset="assets/img/' + n + '-640.webp 640w, assets/img/' + n + '-1280.webp 1280w' + (big ? ", assets/img/" + n + "-1920.webp 1920w" : "") + '" sizes="' + (sizes || "33vw") + '" width="1280" height="' + P[n][0] + '" alt=""' + (eager ? "" : ' loading="lazy"') + ' decoding="async">';
  }
  function cur() { return lang === "ar" ? "دج" : "DA"; }
  function da(n) { return "\u2066" + n.toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " ") + "\u2069"; }

  var I = {
    fr: { demo0: "Site de démonstration : crèche fictive, tarifs et places donnés à titre d’exemple.", demo1: "Voir les autres modèles",
      brand: "Bara’im", brandS: "Crèche et préscolaire", n1: "Places", n2: "Tarifs", n3: "Galerie", n4: "La journée", n5: "Questions", cta0: "Réserver une visite",
      h1a: "Ici, on grandit", h1b: "en jouant.", lede: "Crèche et préscolaire bilingue à Hydra, de 3 mois à 5 ans. Ouvert de 7 h à 18 h 30, repas cuisinés sur place, photos de la journée chaque soir.",
      cta1: "Calculer mon tarif", cta2: "Réserver une visite", liveA: "places restantes", liveB: "cette année, toutes sections",
      band: ["Ouvert de 7 h à 18 h 30", "Repas cuisinés sur place", "Photos chaque soir sur WhatsApp", "Arabe et français", "De 3 mois à 5 ans", "Cour de jeux fermée", "Visite sans engagement"],
      pH: "Places disponibles", pP: "Quatre sections, de petits groupes. Une visite réservée bloque votre place 7 jours.", pUpd: "Mis à jour cette semaine",
      full: "Complet", few: "Dernières places", ok: "Places libres", left: "places libres sur", leftFull: "Liste d’attente ouverte", from: "À partir de", perM: "DA / mois", kids: "enfants", carers: "éducatrices",
      sH: "Votre tarif en 20 secondes", sP: "Choisissez la section, la formule et les options : le prix mensuel se calcule tout seul.", q1: "1. La section", q2: "2. La formule", q3: "3. Jours par semaine", q4: "4. Options",
      forms: [["Journée complète", "7 h à 18 h 30, déjeuner et goûter"], ["Matinée", "7 h à 12 h 30, avec le déjeuner"]], dayso: [["5 jours", "Du dimanche au jeudi"], ["3 jours", "Dimanche, mardi, jeudi"]],
      opts: [["Transport matin et soir", "Hydra, El Biar, Ben Aknoun"], ["Anglais en jouant", "Deux séances par semaine"], ["Garde tardive jusqu’à 19 h", "Pour les parents qui finissent tard"], ["Frère ou sœur déjà inscrit", "10 % de remise"]],
      rL: "Votre estimation mensuelle", rBase: "Section", rForm: "Formule matinée", rDays: "3 jours par semaine", rSib: "Remise fratrie",
      incl: ["Repas et goûter", "Photos chaque soir", "Assurance"], inclB: "Couches et lingettes", waQ: "Recevoir ce devis sur WhatsApp",
      fine: "Tarifs de démonstration. Frais d’inscription annuels : 10 000 DA. Paiement mensuel, en espèces ou par virement CCP.",
      gH: "La crèche en photos", gP: "Les salles, les ateliers, les repas et la cour. Touchez une photo pour l’agrandir.", gAll: "Tout", more: "Voir les {n} photos",
      cats: { ateliers: "Ateliers", jeux: "Jeux", repas: "Repas", sieste: "Sieste", dehors: "Dehors", salles: "Les salles" },
      dH: "Une journée chez nous", dP: "De l’accueil à 7 h au départ à 18 h 30. Faites glisser.",
      mH: "Au menu cette semaine", mP: "Cuisiné chaque matin dans notre cuisine, sans piment, adapté à l’âge. Les allergies sont notées à l’inscription.",
      st: ["Entrée", "Plat", "Dessert"], wd: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu."],
      chatT: "Bara’im, section des Pousses", chatS: "Message du soir aux parents", chatEx: "Exemple de message, prénoms fictifs.",
      bH: "Venez la visiter", bP: "30 minutes avec la directrice : les salles, la cuisine, la cour. Venez avec votre enfant si vous voulez.",
      fDay: "Choisissez un jour", fSlot: "Choisissez une heure", l1: "Votre nom", l2: "Téléphone", l4: "Section", send: "Confirmer la visite",
      recap0: "Choisissez un jour et une heure.", recap: "Visite le {d} à {h}", taken: "complet",
      err: "Indiquez votre nom, un numéro valide, un jour et une heure.", demo: "Démo AFEX Digital : aucune visite n’a été réservée, ce formulaire n’est pas encore connecté.",
      waDemo: "Démo AFEX Digital : le numéro WhatsApp de la crèche n’est pas encore connecté.",
      fH: "Les questions des parents", fA: "Crèche et préscolaire bilingue, Hydra, Alger.", fHrs: "Horaires", fHrsV: "Dimanche au jeudi, 7 h à 18 h 30", fC: "Contact", fCV: "WhatsApp et téléphone : numéro de démonstration",
      foot: "© 2026 Bara’im, crèche fictive.", by: "Site réalisé par", photos: "Photos : Unsplash,", lang: "Langue", close: "Fermer", prev: "Précédent", next: "Suivant",
      salleAlt: "Une salle de crèche lumineuse avec petites tables et coins de jeu", title: "Bara’im, crèche et préscolaire à Alger", loc: "fr-FR" },
    ar: { demo0: "موقع تجريبي: روضة وهمية، الأسعار والأماكن للتوضيح فقط.", demo1: "شاهد النماذج الأخرى",
      brand: "براعم", brandS: "روضة وتحضيري", n1: "الأماكن", n2: "الأسعار", n3: "الصور", n4: "اليوم", n5: "أسئلة", cta0: "احجز زيارة",
      h1a: "هنا، نكبر", h1b: "ونحن نلعب.", lede: "روضة وتحضيري مزدوج اللغة في حيدرة، من 3 أشهر إلى 5 سنوات. مفتوحة من 7:00 إلى 18:30، وجبات مطهوة في عين المكان، وصور اليوم كل مساء.",
      cta1: "احسب السعر", cta2: "احجز زيارة", liveA: "أماكن متبقية", liveB: "هذه السنة، كل الأقسام",
      band: ["مفتوحة من 7:00 إلى 18:30", "وجبات مطهوة في عين المكان", "صور كل مساء على واتساب", "العربية والفرنسية", "من 3 أشهر إلى 5 سنوات", "ساحة لعب مغلقة", "زيارة بلا التزام"],
      pH: "الأماكن المتاحة", pP: "أربعة أقسام وأفواج صغيرة. حجز زيارة يحفظ لك المكان 7 أيام.", pUpd: "حُدّث هذا الأسبوع",
      full: "ممتلئ", few: "آخر الأماكن", ok: "أماكن متاحة", left: "أماكن شاغرة من", leftFull: "قائمة الانتظار مفتوحة", from: "ابتداءً من", perM: "دج / الشهر", kids: "طفلًا", carers: "مربّيات",
      sH: "سعرك في 20 ثانية", sP: "اختر القسم والصيغة والخيارات: يُحسب السعر الشهري تلقائيًا.", q1: "1. القسم", q2: "2. الصيغة", q3: "3. أيام الأسبوع", q4: "4. خيارات",
      forms: [["يوم كامل", "من 7:00 إلى 18:30، غداء ولمجة"], ["الصباح", "من 7:00 إلى 12:30، مع الغداء"]], dayso: [["5 أيام", "من الأحد إلى الخميس"], ["3 أيام", "الأحد، الثلاثاء، الخميس"]],
      opts: [["النقل صباحًا ومساءً", "حيدرة، الأبيار، بن عكنون"], ["الإنجليزية باللعب", "حصتان في الأسبوع"], ["حراسة متأخرة حتى 19:00", "للأولياء الذين يتأخرون"], ["أخ أو أخت مسجّل", "تخفيض 10 %"]],
      rL: "تقديرك الشهري", rBase: "القسم", rForm: "صيغة الصباح", rDays: "3 أيام في الأسبوع", rSib: "تخفيض الإخوة",
      incl: ["الوجبة واللمجة", "صور كل مساء", "التأمين"], inclB: "الحفاظات والمناديل", waQ: "استلم هذا التقدير على واتساب",
      fine: "أسعار تجريبية. حقوق التسجيل السنوية: 10 000 دج. الدفع شهريًا نقدًا أو بتحويل بريدي CCP.",
      gH: "الروضة بالصور", gP: "القاعات، الورشات، الوجبات والساحة. المس الصورة لتكبيرها.", gAll: "الكل", more: "شاهد كل الصور ({n})",
      cats: { ateliers: "ورشات", jeux: "ألعاب", repas: "وجبات", sieste: "قيلولة", dehors: "في الخارج", salles: "القاعات" },
      dH: "يوم عندنا", dP: "من الاستقبال على 7:00 إلى المغادرة على 18:30. اسحب للتصفح.",
      mH: "قائمة طعام هذا الأسبوع", mP: "يُطهى كل صباح في مطبخنا، بلا فلفل حار، ومناسب للسن. تُسجَّل الحساسيات عند التسجيل.",
      st: ["مقبلات", "طبق رئيسي", "تحلية"], wd: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"],
      chatT: "براعم، قسم البراعم الصغيرة", chatS: "رسالة المساء للأولياء", chatEx: "مثال على رسالة، أسماء وهمية.",
      bH: "تعالوا لزيارتها", bP: "30 دقيقة مع المديرة: القاعات، المطبخ، الساحة. أحضروا طفلكم إن شئتم.",
      fDay: "اختر يومًا", fSlot: "اختر ساعة", l1: "اسمك", l2: "الهاتف", l4: "القسم", send: "تأكيد الزيارة",
      recap0: "اختر يومًا وساعة.", recap: "زيارة يوم {d} على الساعة {h}", taken: "ممتلئ",
      err: "أدخل اسمك ورقمًا صحيحًا ويومًا وساعة.", demo: "عرض AFEX Digital: لم تُحجز أي زيارة، هذا النموذج غير متصل بعد.",
      waDemo: "عرض AFEX Digital: رقم واتساب الروضة غير متصل بعد.",
      fH: "أسئلة الأولياء", fA: "روضة وتحضيري مزدوج اللغة، حيدرة، الجزائر.", fHrs: "التوقيت", fHrsV: "من الأحد إلى الخميس، من 7:00 إلى 18:30", fC: "الاتصال", fCV: "واتساب والهاتف: رقم تجريبي",
      foot: "© 2026 براعم، روضة وهمية.", by: "موقع من إنجاز", photos: "الصور: Unsplash،", lang: "اللغة", close: "إغلاق", prev: "السابق", next: "التالي",
      salleAlt: "قاعة روضة مضيئة بطاولات صغيرة وأركان لعب", title: "براعم، روضة وتحضيري بالجزائر", loc: "ar-DZ" },
    en: { demo0: "Demo website: a fictional nursery, prices and places are examples.", demo1: "See the other templates",
      brand: "Bara’im", brandS: "Nursery and preschool", n1: "Places", n2: "Fees", n3: "Gallery", n4: "The day", n5: "Questions", cta0: "Book a visit",
      h1a: "Here, children grow", h1b: "through play.", lede: "A bilingual nursery and preschool in Hydra, from 3 months to 5 years. Open 7:00 to 18:30, meals cooked on site, photos of the day every evening.",
      cta1: "Work out my fees", cta2: "Book a visit", liveA: "places left", liveB: "this year, all groups",
      band: ["Open 7:00 to 18:30", "Meals cooked on site", "Photos every evening on WhatsApp", "Arabic and French", "3 months to 5 years", "Enclosed play yard", "No-commitment visits"],
      pH: "Places available", pP: "Four groups, all small. Booking a visit holds your place for 7 days.", pUpd: "Updated this week",
      full: "Full", few: "Last places", ok: "Places open", left: "places free out of", leftFull: "Waiting list open", from: "From", perM: "DA / month", kids: "children", carers: "carers",
      sH: "Your fees in 20 seconds", sP: "Pick the group, the plan and the extras: the monthly price works itself out.", q1: "1. The group", q2: "2. The plan", q3: "3. Days per week", q4: "4. Extras",
      forms: [["Full day", "7:00 to 18:30, lunch and snack"], ["Mornings", "7:00 to 12:30, with lunch"]], dayso: [["5 days", "Sunday to Thursday"], ["3 days", "Sunday, Tuesday, Thursday"]],
      opts: [["Pick-up and drop-off", "Hydra, El Biar, Ben Aknoun"], ["English through play", "Two sessions a week"], ["Late care until 19:00", "For parents who finish late"], ["Sibling already enrolled", "10% off"]],
      rL: "Your monthly estimate", rBase: "Group", rForm: "Mornings plan", rDays: "3 days a week", rSib: "Sibling discount",
      incl: ["Lunch and snack", "Photos every evening", "Insurance"], inclB: "Nappies and wipes", waQ: "Get this quote on WhatsApp",
      fine: "Demo prices. Yearly registration: 10,000 DA. Paid monthly, in cash or by CCP transfer.",
      gH: "The nursery in pictures", gP: "Rooms, activities, meals and the yard. Tap a photo to enlarge it.", gAll: "All", more: "See all {n} photos",
      cats: { ateliers: "Activities", jeux: "Play", repas: "Meals", sieste: "Naps", dehors: "Outdoors", salles: "Rooms" },
      dH: "A day with us", dP: "From drop-off at 7:00 to pick-up at 18:30. Swipe through.",
      mH: "This week’s menu", mP: "Cooked every morning in our kitchen, never spicy, suited to each age. Allergies are noted at enrolment.",
      st: ["Starter", "Main", "Dessert"], wd: ["Sun", "Mon", "Tue", "Wed", "Thu"],
      chatT: "Bara’im, the Shoots group", chatS: "Evening message to parents", chatEx: "Sample message, made-up names.",
      bH: "Come and see it", bP: "30 minutes with the head: the rooms, the kitchen, the yard. Bring your child if you like.",
      fDay: "Pick a day", fSlot: "Pick a time", l1: "Your name", l2: "Phone", l4: "Group", send: "Confirm the visit",
      recap0: "Pick a day and a time.", recap: "Visit on {d} at {h}", taken: "full",
      err: "Enter your name, a valid number, a day and a time.", demo: "AFEX Digital demo: no visit was booked, this form is not connected yet.",
      waDemo: "AFEX Digital demo: the nursery’s WhatsApp number is not connected yet.",
      fH: "Parents’ questions", fA: "Bilingual nursery and preschool, Hydra, Algiers.", fHrs: "Opening hours", fHrsV: "Sunday to Thursday, 7:00 to 18:30", fC: "Contact", fCV: "WhatsApp and phone: demo number",
      foot: "© 2026 Bara’im, a fictional nursery.", by: "Website by", photos: "Photos: Unsplash,", lang: "Language", close: "Close", prev: "Previous", next: "Next",
      salleAlt: "A bright nursery room with small tables and play corners", title: "Bara’im, nursery and preschool in Algiers", loc: "en-GB" }
  };

  var HERO = ["peinture", "rire", "table", "atelier"];
  var SECS = [
    { img: "cuillere", price: 34000, total: 8, taken: 8, carers: 2, t: { fr: "Les Bourgeons", ar: "البراعم", en: "The Buds" }, a: { fr: "3 à 18 mois", ar: "من 3 إلى 18 شهرًا", en: "3 to 18 months" } },
    { img: "puzzle", price: 30000, total: 12, taken: 10, carers: 2, t: { fr: "Les Pousses", ar: "البراعم الصغيرة", en: "The Shoots" }, a: { fr: "18 mois à 3 ans", ar: "من 18 شهرًا إلى 3 سنوات", en: "18 months to 3 years" } },
    { img: "voitures", price: 26000, total: 16, taken: 13, carers: 2, t: { fr: "Les Branches", ar: "الأغصان", en: "The Branches" }, a: { fr: "3 à 4 ans", ar: "من 3 إلى 4 سنوات", en: "3 to 4 years" } },
    { img: "cercle", price: 24000, total: 20, taken: 16, carers: 2, t: { fr: "Les Fleurs", ar: "الأزهار", en: "The Flowers" }, a: { fr: "4 à 5 ans, préscolaire", ar: "من 4 إلى 5 سنوات، تحضيري", en: "4 to 5 years, preschool" } }
  ];
  var OPT = [5500, 2500, 3000, -0.1];
  var G = [
    ["atelier", "ateliers", "big", { fr: "Atelier peinture sur figurines", ar: "ورشة تلوين المجسّمات", en: "Painting figurines" }],
    ["salle", "salles", "", { fr: "La grande salle", ar: "القاعة الكبيرة", en: "The main room" }],
    ["pate", "ateliers", "t", { fr: "Pâte à modeler", ar: "العجين", en: "Modelling clay" }],
    ["toboggan", "dehors", "", { fr: "Le toboggan de la cour", ar: "زحليقة الساحة", en: "The yard slide" }],
    ["dejeuner", "repas", "", { fr: "Le déjeuner", ar: "الغداء", en: "Lunch" }],
    ["tour", "jeux", "t", { fr: "Construire une tour", ar: "بناء برج", en: "Building a tower" }],
    ["sieste", "sieste", "", { fr: "La sieste", ar: "القيلولة", en: "Nap time" }],
    ["mainbleue", "ateliers", "", { fr: "Peinture à doigts", ar: "الرسم بالأصابع", en: "Finger painting" }],
    ["balancoire", "dehors", "t", { fr: "Les balançoires", ar: "الأراجيح", en: "The swings" }],
    ["rangement", "salles", "", { fr: "Chaque jouet a sa place", ar: "لكل لعبة مكانها", en: "A place for every toy" }],
    ["cercle", "ateliers", "big", { fr: "Le cercle du matin", ar: "حلقة الصباح", en: "Morning circle" }],
    ["fraises", "repas", "", { fr: "Le goûter de fruits", ar: "لمجة الفواكه", en: "Fruit snack" }],
    ["puzzle", "jeux", "t", { fr: "Puzzle des lettres", ar: "لغز الحروف", en: "Letter puzzle" }],
    ["dodo", "sieste", "", { fr: "Le coin des bébés", ar: "ركن الرضّع", en: "The baby corner" }],
    ["papillon", "ateliers", "", { fr: "Coloriage", ar: "التلوين", en: "Colouring" }],
    ["bac", "dehors", "", { fr: "Le bac à sable", ar: "صندوق الرمل", en: "The sandpit" }],
    ["cubes", "jeux", "", { fr: "Les cubes de lettres", ar: "مكعبات الحروف", en: "Letter blocks" }],
    ["mur", "salles", "", { fr: "Les doudous de la classe", ar: "دمى القسم", en: "Classroom cuddly toys" }],
    ["rire", "dehors", "t", { fr: "Fou rire à la balançoire", ar: "ضحك على الأرجوحة", en: "Giggles on the swing" }],
    ["bol", "repas", "", { fr: "Manger tout seul", ar: "يأكل وحده", en: "Eating on their own" }],
    ["empreintes", "ateliers", "", { fr: "Empreintes de mains", ar: "بصمات الأيدي", en: "Handprints" }],
    ["jouets", "jeux", "", { fr: "L’éveil des bébés", ar: "إيقاظ الرضّع", en: "Baby play" }],
    ["veilleuse", "sieste", "", { fr: "La veilleuse de la sieste", ar: "ضوء القيلولة", en: "The nap nightlight" }],
    ["grimper", "dehors", "t", { fr: "Grimper", ar: "التسلّق", en: "Climbing" }],
    ["collage", "ateliers", "", { fr: "Découpage et collage", ar: "القص واللصق", en: "Cutting and gluing" }],
    ["peche", "repas", "", { fr: "Une pêche au jardin", ar: "خوخة في الحديقة", en: "A peach in the garden" }],
    ["appareil", "jeux", "", { fr: "Jeu d’imitation", ar: "لعب المحاكاة", en: "Pretend play" }],
    ["dessins", "salles", "", { fr: "Le mur des dessins", ar: "جدار الرسومات", en: "The drawing wall" }],
    ["pinceau", "ateliers", "", { fr: "Le pinceau", ar: "الفرشاة", en: "Brushwork" }],
    ["poupee", "jeux", "t", { fr: "Les poupées", ar: "الدمى", en: "Dolls" }],
    ["pneu", "dehors", "", { fr: "La balançoire pneu", ar: "أرجوحة العجلة", en: "The tyre swing" }],
    ["cereales", "repas", "", { fr: "Le petit déjeuner", ar: "الفطور", en: "Breakfast" }],
    ["lettres", "jeux", "t", { fr: "Empiler les lettres", ar: "تكديس الحروف", en: "Stacking letters" }],
    ["dessin", "ateliers", "", { fr: "Dessiner avec l’éducatrice", ar: "الرسم مع المربّية", en: "Drawing with a carer" }],
    ["etagere", "salles", "", { fr: "Le coin rangement", ar: "ركن الترتيب", en: "Tidy-up corner" }],
    ["petitesvoitures", "jeux", "", { fr: "Les petites voitures", ar: "السيارات الصغيرة", en: "Toy cars" }],
    ["bottes", "dehors", "", { fr: "Bottes de pluie", ar: "أحذية المطر", en: "Rain boots" }],
    ["bulles", "dehors", "", { fr: "Bulles de savon", ar: "فقاعات الصابون", en: "Bubbles" }]
  ];
  var DAYS = [
    ["07:00", "tasse", { fr: "Accueil", ar: "الاستقبال", en: "Drop-off" }, { fr: "Petit déjeuner pour ceux qui arrivent tôt, et un câlin pour dire au revoir.", ar: "فطور لمن يصل مبكرًا، وعناق للوداع.", en: "Breakfast for early arrivals, and a hug to say goodbye." }],
    ["08:30", "cercle", { fr: "Le cercle", ar: "الحلقة", en: "Circle time" }, { fr: "On se dit bonjour en arabe et en français, la date, la météo, une comptine.", ar: "نُلقي التحية بالعربية والفرنسية، التاريخ، الطقس، وأنشودة.", en: "Hellos in Arabic and French, the date, the weather, a rhyme." }],
    ["09:15", "atelier", { fr: "Ateliers", ar: "الورشات", en: "Activities" }, { fr: "Peinture, pâte à modeler, lettres : un atelier par petit groupe.", ar: "رسم، عجين، حروف: ورشة لكل فوج صغير.", en: "Painting, clay, letters: one activity per small group." }],
    ["10:30", "toboggan", { fr: "Dans la cour", ar: "في الساحة", en: "In the yard" }, { fr: "Toboggan, vélos, bac à sable, quand il fait beau.", ar: "زحليقة، دراجات، صندوق رمل، عندما يكون الجو جميلًا.", en: "Slide, bikes and sandpit when the weather is nice." }],
    ["11:45", "dejeuner", { fr: "Déjeuner", ar: "الغداء", en: "Lunch" }, { fr: "Un repas complet cuisiné le matin même, à table tous ensemble.", ar: "وجبة كاملة مطهوة صباح اليوم نفسه، على المائدة معًا.", en: "A full meal cooked that morning, at the table together." }],
    ["13:00", "sieste", { fr: "Sieste", ar: "القيلولة", en: "Nap" }, { fr: "Lumière tamisée, doudou, une éducatrice reste dans la salle.", ar: "إضاءة خافتة، دمية النوم، ومربّية تبقى في القاعة.", en: "Dim lights, a comforter, and a carer stays in the room." }],
    ["15:00", "fraises", { fr: "Goûter", ar: "اللمجة", en: "Snack" }, { fr: "Fruits de saison, lait ou pain maison.", ar: "فواكه الموسم، حليب أو خبز الدار.", en: "Seasonal fruit, milk or homemade bread." }],
    ["15:45", "voitures", { fr: "Jeux libres", ar: "اللعب الحر", en: "Free play" }, { fr: "Construction, voitures, poupées : chacun choisit son coin.", ar: "بناء، سيارات، دمى: كل واحد يختار ركنه.", en: "Building, cars, dolls: everyone picks a corner." }],
    ["17:00", "appareil", { fr: "Le message du soir", ar: "رسالة المساء", en: "Evening message" }, { fr: "Les photos de la journée partent sur WhatsApp à chaque parent.", ar: "تُرسل صور اليوم على واتساب لكل وليّ.", en: "The day’s photos go out on WhatsApp to each parent." }],
    ["18:30", "bottes", { fr: "À demain", ar: "إلى الغد", en: "See you tomorrow" }, { fr: "Les derniers parents arrivent, la crèche ferme.", ar: "يصل آخر الأولياء وتُغلق الروضة.", en: "The last parents arrive and the nursery closes." }]
  ];
  var MENU = [
    { fr: ["Soupe de légumes", "Couscous au poulet", "Compote de pommes"], ar: ["حساء الخضر", "كسكسي بالدجاج", "مربى التفاح"], en: ["Vegetable soup", "Chicken couscous", "Apple compote"] },
    { fr: ["Chorba douce au frik", "Purée et poisson blanc", "Yaourt nature"], ar: ["شوربة فريك خفيفة", "بطاطا مهروسة وسمك أبيض", "ياغورت طبيعي"], en: ["Mild frik chorba", "Mash and white fish", "Plain yoghurt"] },
    { fr: ["Salade de carottes", "Lentilles et riz", "Orange"], ar: ["سلطة الجزر", "عدس وأرز", "برتقالة"], en: ["Carrot salad", "Lentils and rice", "Orange"] },
    { fr: ["Velouté de courgettes", "Tajine de légumes et viande hachée", "Flan au lait"], ar: ["حساء الكوسة", "طاجين الخضر واللحم المفروم", "فلان بالحليب"], en: ["Courgette soup", "Vegetable and mince tagine", "Milk custard"] },
    { fr: ["Hrira douce", "M’hadjeb aux légumes", "Banane"], ar: ["حريرة خفيفة", "محاجب بالخضر", "موزة"], en: ["Mild hrira", "Vegetable m’hadjeb", "Banana"] }
  ];
  var CHAT = [
    ["pate", { fr: "Atelier pâte à modeler ce matin : Lina a fait un chat, Adam une pizza.", ar: "ورشة العجين هذا الصباح: لينا صنعت قطة وآدم بيتزا.", en: "Clay this morning: Lina made a cat, Adam a pizza." }, "16:58"],
    ["dejeuner", { fr: "Couscous au poulet, assiette terminée pour presque tout le monde.", ar: "كسكسي بالدجاج، أنهى الجميع تقريبًا صحونهم.", en: "Chicken couscous, nearly every plate finished." }, "17:01"],
    [null, { fr: "Sieste de 13 h 05 à 14 h 40. Bonne soirée, à demain !", ar: "قيلولة من 13:05 إلى 14:40. مساء سعيد، إلى الغد!", en: "Nap from 13:05 to 14:40. Have a good evening, see you tomorrow!" }, "17:02"]
  ];
  var FAQ = [
    [{ fr: "Comment se passe l’adaptation ?", ar: "كيف تتم فترة التكيّف؟", en: "How does settling in work?" }, { fr: "Deux semaines progressives : une heure avec vous le premier jour, puis une matinée, puis la journée complète. On avance au rythme de votre enfant.", ar: "أسبوعان تدريجيان: ساعة معكم في اليوم الأول، ثم صباح، ثم يوم كامل. نسير على إيقاع طفلكم.", en: "Two gradual weeks: one hour with you on day one, then a morning, then a full day. We go at your child’s pace." }],
    [{ fr: "Que faut-il apporter ?", ar: "ماذا يجب إحضاره؟", en: "What should we bring?" }, { fr: "Un change complet, le doudou et le carnet de santé. Pour les bébés, les couches et les lingettes sont fournies.", ar: "ملابس احتياطية كاملة، دمية النوم ودفتر الصحة. الحفاظات والمناديل مقدّمة للرضّع.", en: "A full change of clothes, a comforter and the health record. Nappies and wipes are provided for babies." }],
    [{ fr: "Et si mon enfant est malade ?", ar: "وإذا مرض طفلي؟", en: "What if my child is ill?" }, { fr: "Au-dessus de 38 °C, on vous appelle pour venir le chercher. Les médicaments sont donnés seulement avec l’ordonnance.", ar: "فوق 38 درجة نتصل بكم لأخذه. لا تُعطى الأدوية إلا بوصفة طبية.", en: "Above 38 °C we call you to collect them. Medicine is only given with a prescription." }],
    [{ fr: "Combien d’adultes par enfant ?", ar: "كم مربّية لكل طفل؟", en: "How many adults per child?" }, { fr: "Une éducatrice pour quatre bébés, une pour six chez les Pousses, une pour huit chez les Branches, une pour dix chez les Fleurs.", ar: "مربّية لكل أربعة رضّع، لكل ستة في البراعم الصغيرة، لكل ثمانية في الأغصان، ولكل عشرة في الأزهار.", en: "One carer for four babies, one for six Shoots, one for eight Branches and one for ten Flowers." }],
    [{ fr: "Peut-on s’inscrire en cours d’année ?", ar: "هل يمكن التسجيل خلال السنة؟", en: "Can we enrol mid-year?" }, { fr: "Oui, s’il reste des places dans la section. Sinon, on vous met sur la liste d’attente et on vous appelle dès qu’une place se libère.", ar: "نعم، إن بقيت أماكن في القسم. وإلا نسجّلكم في قائمة الانتظار ونتصل بكم فور توفّر مكان.", en: "Yes, if the group has places. Otherwise we put you on the waiting list and call as soon as one opens." }],
    [{ fr: "Comment se fait le paiement ?", ar: "كيف يتم الدفع؟", en: "How do we pay?" }, { fr: "Chaque début de mois, en espèces à l’accueil ou par virement CCP. L’inscription annuelle est de 10 000 DA.", ar: "في بداية كل شهر، نقدًا في الاستقبال أو بتحويل بريدي CCP. حقوق التسجيل السنوية 10 000 دج.", en: "At the start of each month, in cash at reception or by CCP transfer. Yearly registration is 10,000 DA." }]
  ];
  var SLOTS = ["09:00", "10:30", "14:00", "16:00"], LIMIT = matchMedia("(max-width: 600px)").matches ? 10 : 16;

  var lang = "fr", cat = "all", more = false, menuDay = 0, slide = 0, lbI = 0, visible = [], ready = false, dyn = [];
  var sim = { sec: 1, form: 0, days: 0, opt: [false, false, false, false] }, book = { d: -1, s: -1 }, shown = 0;
  try { var sv = localStorage.getItem("baraim-lang"); if (I[sv]) lang = sv; } catch (e) {}

  /* the next ten opening days (Sunday to Thursday) */
  var OPEN = (function () { var out = [], d = new Date(); d.setHours(12, 0, 0, 0); d.setDate(d.getDate() + 1); while (out.length < 10) { var w = d.getDay(); if (w <= 4) out.push(new Date(d)); d.setDate(d.getDate() + 1); } return out; })();
  function dayFull(i) { return (OPEN[i].getDate() * 7) % 5 === 3; }
  function slotTaken(i, s) { return ((OPEN[i].getDate() + s * 3) % 4) === 0; }
  function fmt(d, o) { try { return new Intl.DateTimeFormat(I[lang].loc, o).format(d); } catch (e) { return d.toDateString(); } }

  function openWa() { var m = { fr: "Bonjour AFEX Digital, je viens du site de démonstration « " + document.title + " ». Je veux un site comme celui-ci.", ar: "مرحبًا AFEX Digital، أتيت من الموقع التجريبي « " + document.title + " ». أريد موقعًا مثله.", en: "Hello AFEX Digital, I found the demo site “" + document.title + "”. I would like a website like this one." }; window.open("https://wa.me/213657944090?text=" + encodeURIComponent(m[lang] || m.fr), "_blank", "noopener"); }
  function toast(t) { var el = $("#toast"); el.textContent = t; el.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(function () { el.classList.remove("on"); }, 4200); }

  function renderHero() {
    $("#slides").innerHTML = HERO.map(function (n, i) { return img(n, "100vw", i === slide ? "on" : "", i === 0); }).join("");
    $("#dots").innerHTML = HERO.map(function (_, i) { return '<button type="button" aria-label="' + (i + 1) + '"><i></i></button>'; }).join("");
    var t = I[lang].band, s = "<span>" + t.join("</span><span>") + "</span>";
    $("#band").innerHTML = s + s + s;
  }
  function renderCards() {
    var t = I[lang];
    $("#cards").innerHTML = SECS.map(function (s, i) {
      var left = s.total - s.taken, st = left === 0 ? "full" : left <= 2 ? "few" : "ok";
      var seats = ""; for (var k = 0; k < s.total; k++) seats += '<i class="' + (k < s.taken ? "f" : "") + '"></i>';
      return '<article class="pc"><div class="ph">' + img(s.img, "(min-width:1080px) 25vw, (min-width:600px) 50vw, 92vw") + '<span class="tag t-' + st + '">' + t[st] + '</span></div><div class="bd"><span class="age">' + s.a[lang] + '</span><h3>' + s.t[lang] + '</h3><p class="meta">' + s.total + " " + t.kids + ", " + s.carers + " " + t.carers + '</p><div class="seats" aria-hidden="true">' + seats + '</div><p class="cnt">' + (left ? "<b>" + left + "</b> " + t.left + " " + s.total : "<b>0</b> " + t.leftFull) + '</p><div class="from"><span><small>' + t.from + "</small><b>" + da(s.price) + " " + cur() + "</b></span>" + '<a class="go" href="#visite" data-sec="' + i + '" aria-label="' + t.cta2 + ", " + s.t[lang] + '"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div></div></article>';
    }).join("");
  }
  function radio(name, i, on, html, cls) { return '<label class="opt' + (cls ? " " + cls : "") + '"><input type="radio" name="' + name + '" value="' + i + '"' + (on ? " checked" : "") + '><span class="ck"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg></span>' + html + "</label>"; }
  function renderSim() {
    var t = I[lang];
    $("#qSec").innerHTML = SECS.map(function (s, i) { return radio("sec", i, sim.sec === i, img(s.img, "160px") + "<strong>" + s.t[lang] + "</strong><small>" + s.a[lang] + "</small>"); }).join("");
    $("#qForm").innerHTML = t.forms.map(function (f, i) { return radio("form", i, sim.form === i, "<strong>" + f[0] + "</strong><small>" + f[1] + "</small>"); }).join("");
    $("#qDays").innerHTML = t.dayso.map(function (f, i) { return radio("days", i, sim.days === i, "<strong>" + f[0] + "</strong><small>" + f[1] + "</small>"); }).join("");
    $("#qOpt").innerHTML = t.opts.map(function (o, i) { return '<label class="opt ln"><input type="checkbox" name="o' + i + '"' + (sim.opt[i] ? " checked" : "") + '><span class="ck"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg></span><span><strong>' + o[0] + "</strong><small>" + o[1] + '</small></span><span class="px">' + (OPT[i] > 0 ? "+ " + da(OPT[i]) + " " + cur() : "− 10 %") + "</span></label>"; }).join("");
    calc();
  }
  function calc() {
    var t = I[lang], s = SECS[sim.sec], base = s.price, lines = [[t.rBase + " " + s.t[lang], base]], sub = base;
    if (sim.form === 1) { var r = -Math.round(sub * .3 / 500) * 500; lines.push([t.rForm, r]); sub += r; }
    if (sim.days === 1) { var r2 = -Math.round(sub * .32 / 500) * 500; lines.push([t.rDays, r2]); sub += r2; }
    for (var i = 0; i < 3; i++) if (sim.opt[i]) { lines.push([t.opts[i][0], OPT[i]]); sub += OPT[i]; }
    if (sim.opt[3]) { var r3 = -Math.round(sub * .1 / 100) * 100; lines.push([t.rSib, r3]); sub += r3; }
    $("#lines").innerHTML = lines.map(function (l) { return '<li class="' + (l[1] < 0 ? "neg" : "") + '"><span>' + l[0] + "</span><span>" + (l[1] < 0 ? "− " : "") + da(Math.abs(l[1])) + " " + cur() + "</span></li>"; }).join("");
    $("#rSub").textContent = s.a[lang] + ", " + t.forms[sim.form][0].toLowerCase() + ", " + t.dayso[sim.days][0];
    $("#incl").innerHTML = t.incl.concat(sim.sec < 2 ? [t.inclB] : []).map(function (x) { return "<span>" + x + "</span>"; }).join("");
    var el = $("#tot");
    if (STATIC || !ready) { el.textContent = da(sub); shown = sub; return; }
    var o = { v: shown }; gsap.to(o, { v: sub, duration: .7, ease: "power3.out", onUpdate: function () { el.textContent = da(Math.round(o.v / 100) * 100); }, onComplete: function () { el.textContent = da(sub); } });
    gsap.fromTo(".total", { scale: 1.06 }, { scale: 1, duration: .5, ease: "back.out(3)" });
    shown = sub;
  }
  function renderGallery() {
    var t = I[lang], counts = { all: G.length };
    G.forEach(function (g) { counts[g[1]] = (counts[g[1]] || 0) + 1; });
    $("#chips").innerHTML = ["all", "ateliers", "jeux", "repas", "sieste", "dehors", "salles"].map(function (c) { return '<button type="button" data-c="' + c + '" aria-pressed="' + (c === cat) + '">' + (c === "all" ? t.gAll : t.cats[c]) + "<sup>" + counts[c] + "</sup></button>"; }).join("");
    $("#grid").innerHTML = G.map(function (g, i) { return '<button type="button" class="gi ' + g[2] + '" data-k="' + i + '" data-c="' + g[1] + '"' + (hideG(g, i) ? " hidden" : "") + ' aria-label="' + g[3][lang] + '">' + img(g[0], g[2] === "big" ? "(min-width:1080px) 50vw, 92vw" : "(min-width:1080px) 25vw, 50vw") + "<span>" + g[3][lang] + "</span></button>"; }).join("");
  }
  function hideG(g, i) { return cat === "all" ? !more && i >= LIMIT : g[1] !== cat; }
  function syncMore() { var b = $("#more"); b.hidden = cat !== "all" || more; b.textContent = I[lang].more.replace("{n}", G.length); }
  function filter(c) {
    if (c === cat) return; cat = c;
    $$("#chips button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.c === c); });
    var items = $$("#grid .gi"), state = !STATIC && window.Flip ? Flip.getState(items) : null;
    items.forEach(function (g, i) { g.hidden = hideG(G[i], i); }); syncMore();
    if (state) Flip.from(state, { duration: .6, ease: "power3.inOut", absolute: true, scale: true, onEnter: function (els) { return gsap.fromTo(els, { opacity: 0, scale: .85 }, { opacity: 1, scale: 1, duration: .5, stagger: .03 }); }, onLeave: function (els) { return gsap.to(els, { opacity: 0, scale: .85, duration: .3 }); }, onComplete: function () { ScrollTrigger.refresh(); } });
  }
  $("#more").addEventListener("click", function () { more = true; cat = "x"; filter("all"); });
  function openLb(k) {
    visible = $$("#grid .gi").filter(function (g) { return !g.hidden; }).map(function (g) { return +g.dataset.k; });
    lbI = visible.indexOf(k); showLb(); $("#lb").hidden = false; if (lenis) lenis.stop(); $("#lbX").focus();
  }
  function showLb() { var g = G[visible[lbI]]; $("#lbI").src = "assets/img/" + g[0] + "-1280.webp"; $("#lbI").alt = g[3][lang]; $("#lbC").textContent = g[3][lang] + "  ·  " + (lbI + 1) + " / " + visible.length; }
  function closeLb() { $("#lb").hidden = true; if (lenis) lenis.start(); var b = $('#grid .gi[data-k="' + visible[lbI] + '"]'); if (b) b.focus(); }
  function renderDay() {
    $("#rail").innerHTML = DAYS.map(function (d) { return '<article class="dc">' + img(d[1], "340px") + '<div class="in"><time>' + d[0] + "</time><h3>" + d[2][lang] + "</h3><p>" + d[3][lang] + "</p></div></article>"; }).join("");
  }
  function renderMenu() {
    var t = I[lang], cols = ["#FFE7A3", "#FFD3C7", "#CFE8DA"];
    $("#days").innerHTML = t.wd.map(function (d, k) { return '<button type="button" data-d="' + k + '" aria-pressed="' + (k === menuDay) + '">' + d + "</button>"; }).join("");
    $("#plate").innerHTML = MENU[menuDay][lang].map(function (x, k) { return '<div><i style="background:' + cols[k] + '">' + (k + 1) + "</i><span><small>" + t.st[k] + "</small><b>" + x + "</b></span></div>"; }).join("");
  }
  function renderChat() {
    $("#chat").innerHTML = CHAT.map(function (c) { return '<div class="msg">' + (c[0] ? img(c[0], "320px") : "") + "<p>" + c[1][lang] + "</p><time>" + c[2] + "</time></div>"; }).join("");
  }
  function renderBook() {
    var t = I[lang];
    $("#cal").innerHTML = OPEN.map(function (d, i) { var full = dayFull(i); return '<button type="button" data-d="' + i + '" aria-pressed="' + (book.d === i) + '"' + (full ? " disabled" : "") + ' aria-label="' + fmt(d, { weekday: "long", day: "numeric", month: "long" }) + (full ? ", " + t.taken : "") + '"><small>' + fmt(d, { weekday: "short" }) + "</small><b>" + d.getDate() + "</b><small>" + fmt(d, { month: "short" }) + "</small></button>"; }).join("");
    renderSlots();
    $("#sel").innerHTML = SECS.map(function (s, i) { return '<option value="' + i + '"' + (i === sim.sec ? " selected" : "") + ">" + s.t[lang] + ", " + s.a[lang] + "</option>"; }).join("");
  }
  function renderSlots() {
    $("#slots").innerHTML = SLOTS.map(function (h, s) { var off = book.d < 0 || slotTaken(book.d, s); return '<button type="button" data-s="' + s + '" aria-pressed="' + (book.s === s) + '"' + (off ? " disabled" : "") + ">" + h + "</button>"; }).join("");
    var t = I[lang];
    $("#recap").textContent = book.d >= 0 && book.s >= 0 ? t.recap.replace("{d}", fmt(OPEN[book.d], { weekday: "long", day: "numeric", month: "long" })).replace("{h}", SLOTS[book.s]) : t.recap0;
  }
  /* every answer visible at once, on cards */
  function renderFaq() {
    $("#faqL").innerHTML = '<div class="fcards">' + FAQ.map(function (f, i) { return '<article class="fc"><span class="n">' + (i + 1) + "</span><h3>" + f[0][lang] + "</h3><p>" + f[1][lang] + "</p></article>"; }).join("") + "</div>";
  }
  function render() {
    var t = I[lang];
    renderHero(); renderCards(); renderSim(); renderGallery(); syncMore(); renderDay(); renderMenu(); renderChat(); renderBook(); renderFaq();
    $("#leftN").textContent = SECS.reduce(function (a, s) { return a + s.total - s.taken; }, 0);
    var names = []; Object.keys(P).forEach(function (k) { if (names.indexOf(P[k][1]) < 0) names.push(P[k][1]); });
    $("#credits").textContent = t.photos + " " + names.join(", ") + ".";
    $("#prev").setAttribute("aria-label", t.prev); $("#next").setAttribute("aria-label", t.next);
    $("#lbX").setAttribute("aria-label", t.close); $("#lbP").setAttribute("aria-label", t.prev); $("#lbN").setAttribute("aria-label", t.next);
  }
  function setLang(l) {
    lang = l; var t = I[l];
    doc.lang = l; doc.dir = l === "ar" ? "rtl" : "ltr"; document.title = t.title;
    $$("[data-i]").forEach(function (e) { if (typeof t[e.dataset.i] === "string") e.textContent = t[e.dataset.i]; });
    $$("[data-alt]").forEach(function (e) { e.alt = t[e.dataset.alt]; });
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.l === l); });
    $(".lang").setAttribute("aria-label", t.lang); $("#msg").textContent = "";
    try { localStorage.setItem("baraim-lang", l); } catch (e) {}
    render();
    if (ready) { bindDynamic(); startSlides(); ScrollTrigger.refresh(); }
  }

  /* events */
  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.l !== lang) setLang(b.dataset.l); }); });
  $(".sim").addEventListener("change", function (e) {
    var n = e.target.name;
    if (n === "sec") sim.sec = +e.target.value; else if (n === "form") sim.form = +e.target.value; else if (n === "days") sim.days = +e.target.value; else if (n && n[0] === "o") sim.opt[+n.slice(1)] = e.target.checked;
    if (n === "sec") $("#sel").value = sim.sec;
    calc();
  });
  $("#cards").addEventListener("click", function (e) { var a = e.target.closest(".go"); if (a) { sim.sec = +a.dataset.sec; $("#sel").value = sim.sec; } });
  $("#chips").addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) filter(b.dataset.c); });
  $("#grid").addEventListener("click", function (e) { var b = e.target.closest(".gi"); if (b) openLb(+b.dataset.k); });
  $("#lbX").addEventListener("click", closeLb);
  $("#lbP").addEventListener("click", function () { lbI = (lbI - 1 + visible.length) % visible.length; showLb(); });
  $("#lbN").addEventListener("click", function () { lbI = (lbI + 1) % visible.length; showLb(); });
  $("#lb").addEventListener("click", function (e) { if (e.target === this) closeLb(); });
  document.addEventListener("keydown", function (e) {
    if ($("#lb").hidden) return;
    var rtl = doc.dir === "rtl";
    if (e.key === "Escape") closeLb();
    else if (e.key === (rtl ? "ArrowLeft" : "ArrowRight")) $("#lbN").click();
    else if (e.key === (rtl ? "ArrowRight" : "ArrowLeft")) $("#lbP").click();
    else if (e.key === "Tab") { var f = [$("#lbX"), $("#lbP"), $("#lbN")], i = f.indexOf(document.activeElement); e.preventDefault(); f[(i + (e.shiftKey ? 2 : 1)) % 3].focus(); }
  });
  var rail = $("#rail");
  function railStep(dir) { var c = $(".dc", rail); var w = c ? c.offsetWidth + 18 : 300; rail.scrollBy({ left: dir * w * (doc.dir === "rtl" ? -1 : 1), behavior: "smooth" }); }
  $("#prev").addEventListener("click", function () { railStep(-1); });
  $("#next").addEventListener("click", function () { railStep(1); });
  rail.addEventListener("scroll", function () { var m = rail.scrollWidth - rail.clientWidth, p = m > 0 ? Math.abs(rail.scrollLeft) / m : 0; $("#progI").style.transform = "scaleX(" + Math.max(.12, p).toFixed(3) + ")"; }, { passive: true });
  $("#days").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; menuDay = +b.dataset.d; renderMenu(); if (!STATIC) gsap.from("#plate > div", { y: 20, opacity: 0, duration: .45, stagger: .07, ease: "back.out(2)" }); });
  $("#cal").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b || b.disabled) return; book.d = +b.dataset.d; if (book.s >= 0 && slotTaken(book.d, book.s)) book.s = -1; $$("#cal button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); renderSlots(); });
  $("#slots").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b || b.disabled) return; book.s = +b.dataset.s; renderSlots(); });
  $("#f").addEventListener("submit", function (e) {
    e.preventDefault(); var t = I[lang], ok = this.name.value.trim() && /^0[5-7]\d{8}$/.test(this.tel.value.replace(/\s/g, "")) && book.d >= 0 && book.s >= 0;
    if (!ok) { $("#msg").textContent = t.err; if (!this.name.value.trim()) this.name.focus(); else if (!/^0[5-7]\d{8}$/.test(this.tel.value.replace(/\s/g, ""))) this.tel.focus(); return; }
    $("#msg").textContent = t.demo;
  });
  $("#waQuote").addEventListener("click", function () { openWa(); });
  $("#waf").addEventListener("click", function () { openWa(); });

  for (var q = 0; q < OPEN.length; q++) if (!dayFull(q)) { book.d = q; break; }
  var lenis = null, slideTl = null;
  render();
  if (STATIC) return;

  gsap.registerPlugin(ScrollTrigger, Flip);
  lenis = window.Lenis ? new Lenis({ lerp: 0.1 }) : null;
  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach(function (a) { a.addEventListener("click", function (e) { var id = a.getAttribute("href"); if (id.length < 2) return; var el = $(id); if (!el) return; e.preventDefault(); lenis.scrollTo(el, { offset: id === "#top" ? 0 : -74 }); }); });
  }

  /* hero: slideshow with a slow zoom, progress bars, and the headline rising */
  function startSlides() {
    if (slideTl) slideTl.kill();
    var imgs = $$("#slides img"), bars = $$("#dots i");
    slideTl = gsap.timeline({ repeat: -1 });
    imgs.forEach(function (im, i) {
      var nx = imgs[(i + 1) % imgs.length];
      slideTl.set(bars, { scaleX: function (k) { return k < i ? 1 : 0; } }, i * 6)
        .fromTo(im, { scale: 1.12 }, { scale: 1, duration: 7, ease: "none" }, i * 6)
        .to(bars[i], { scaleX: 1, duration: 6, ease: "none" }, i * 6)
        .to(im, { opacity: 0, duration: 1.2, ease: "power1.inOut" }, i * 6 + 5.4)
        .to(nx, { opacity: 1, duration: 1.2, ease: "power1.inOut" }, i * 6 + 5.4);
    });
    slideTl.progress((slide * 6) / (imgs.length * 6));
    $$("#dots button").forEach(function (b, i) { b.onclick = function () { gsap.set(imgs, { opacity: 0 }); gsap.set(imgs[i], { opacity: 1 }); slideTl.time(i * 6 + .01); }; });
  }
  gsap.set("#slides img", { opacity: function (i) { return i === 0 ? 1 : 0; } });
  startSlides();
  gsap.from(".hero h1 > *", { yPercent: 60, opacity: 0, duration: 1.1, stagger: .12, ease: "expo.out", delay: .1 });
  gsap.from(".hero p, .hero .acts", { y: 30, opacity: 0, duration: .9, stagger: .1, ease: "power3.out", delay: .45 });
  gsap.from(".live", { y: 40, opacity: 0, duration: .8, ease: "back.out(1.6)", delay: .8 });
  gsap.from("#leftN", { textContent: 0, duration: 1.4, snap: { textContent: 1 }, ease: "power2.out", delay: .9 });

  /* marquee band that speeds up with the scroll */
  var band = gsap.to("#band", { xPercent: function () { return doc.dir === "rtl" ? 100 / 3 : -100 / 3; }, duration: 28, ease: "none", repeat: -1 });
  ScrollTrigger.create({ onUpdate: function (s) { var v = Math.min(4, 1 + Math.abs(s.getVelocity()) / 600); gsap.to(band, { timeScale: v, duration: .2, overwrite: true }); gsap.to(band, { timeScale: 1, duration: 1, delay: .25 }); } });

  ScrollTrigger.batch("[data-up]", { start: "top 88%", once: true, onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, duration: 1, stagger: .1, ease: "power3.out" }); } });

  function bindDynamic() {
    [].concat.apply([], dyn).forEach(function (x) { if (x.targets || x.getChildren) x.revert(); else if (x.kill) x.kill(); }); dyn = [];
    dyn.push(gsap.from("#cards .pc", { y: 90, opacity: 0, duration: 1, stagger: .1, ease: "power3.out", scrollTrigger: { trigger: "#cards", start: "top 82%" } }));
    dyn.push(gsap.from("#cards .seats i.f", { scale: 0, duration: .3, stagger: .02, ease: "back.out(3)", scrollTrigger: { trigger: "#cards", start: "top 60%" } }));
    dyn.push(gsap.fromTo("#qSec .opt, #qForm .opt, #qDays .opt, #qOpt .opt", { y: 30, opacity: 0 }, { y: 0, opacity: 1, clearProps: "transform,opacity", duration: .6, stagger: .04, ease: "power3.out", scrollTrigger: { trigger: "#tarifs", start: "top 70%" } }));
    dyn.push(ScrollTrigger.batch("#grid .gi", { start: "top 92%", once: true, onEnter: function (els) { gsap.fromTo(els, { clipPath: "inset(100% 0 0 0)", y: 30 }, { clipPath: "inset(0% 0 0 0)", y: 0, duration: 1, stagger: .06, ease: "expo.out" }); } }));
    dyn.push(gsap.from("#rail .dc", { x: function () { return doc.dir === "rtl" ? -120 : 120; }, opacity: 0, duration: 1, stagger: .08, ease: "power3.out", scrollTrigger: { trigger: "#rail", start: "top 80%" } }));
    dyn.push(gsap.from("#chat .msg", { y: 30, opacity: 0, scale: .94, duration: .6, stagger: .35, ease: "back.out(1.8)", scrollTrigger: { trigger: "#chat", start: "top 75%" } }));
    dyn.push(gsap.fromTo(".bkimg img", { scale: 1.15 }, { scale: 1, ease: "none", scrollTrigger: { trigger: ".bkimg", start: "top bottom", end: "bottom top", scrub: true } }));
  }
  bindDynamic();
  ready = true;
  var rz, lw = innerWidth; window.addEventListener("resize", function () { if (innerWidth === lw) return; lw = innerWidth; clearTimeout(rz); rz = setTimeout(function () { ScrollTrigger.refresh(); }, 300); });
})();
