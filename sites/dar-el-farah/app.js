/* Dar El Farah : contenu FR / AR / EN, planificateur, ramassage, stories, inscription (GSAP + ScrollTrigger + Lenis, en local) */
(function () {
  var doc = document.documentElement;
  var STATIC = doc.classList.contains("static") || !window.gsap || !window.ScrollTrigger;
  if (STATIC) doc.classList.add("static");
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  var P = { gorge: [960, "Ahmed El Amine Nakib"], pont: [853, "zenad nabil"], sidimcid: [853, "zenad nabil"], coucher: [1920, "abdelmoumene laligui"], ville: [853, "zenad nabil"], fete: [853, "Samuel Lopez Cruz"], ronde: [853, "Jay Chen"], jeu: [854, "Ashton Bingham"], chapeaux: [853, "Victoria Rodriguez"], anniv: [853, "john renzzel"], bougie: [720, "Jorge Ibanez"], ballons: [850, "Senjuti Kundu"], dinos: [935, "Joyce Adams"], foret: [886, "Robert Collins"], course: [854, "MI PHAM"], danse: [1920, "Laura Fuhrman"], corde: [960, "Pierre Vaucher"], ombre: [1920, "Arthur Tseng"], tutu: [853, "Caleb Woods"], rire: [853, "Jose Ibarra"], sourire: [1920, "Mieke Campbell"], bebe: [1920, "Alvin Mahmudov"], chapeau: [853, "Travis Grossen"], bonnet: [854, "Persnickety Prints"], cuisine: [853, "Jackson Wilson"], bebebleu: [1920, "Josh Duncan"], marche: [1920, "Josh Duncan"], guitares: [853, "Robert Collins"], xylo: [853, "Jelleke Vanooteghem"], xylo2: [852, "David Vilches"], ukulele: [854, "Jimmy Liu"], matin: [853, "Vitaly Gariev"], petitdej: [853, "Vitaly Gariev"], habiller: [720, "Vitaly Gariev"], coiffer: [720, "Vitaly Gariev"], depot: [2276, "Muhammad Azzam"], bebematin: [852, "Tanaphong Toochinda"], petitdej2: [720, "Vitaly Gariev"] };
  function img(n, sizes, eager) { return '<img src="assets/img/' + n + '-640.webp" srcset="assets/img/' + n + '-640.webp 640w, assets/img/' + n + '-1280.webp 1280w" sizes="' + (sizes || "33vw") + '" width="1280" height="' + P[n][0] + '" alt=""' + (eager ? "" : ' loading="lazy"') + ' decoding="async" draggable="false">'; }
  function cur() { return lang === "ar" ? "دج" : "DA"; }
  function da(n) { return "⁦" + n.toLocaleString("fr-FR").replace(/ | /g, " ") + "⁩"; }
  function hm(m) { var h = Math.floor(m / 60), mm = m % 60; return (h < 10 ? "0" : "") + h + ":" + (mm < 10 ? "0" : "") + mm; }

  var I = {
    fr: { fqCta: "Une place pour votre enfant ?", fqCtaP: "Le dossier se remplit en ligne en cinq minutes.", fqWa: "Écrire sur WhatsApp", demo0: "Site de démonstration : garderie fictive, tarifs et places donnés à titre d’exemple.", demo1: "Voir les autres modèles",
      brand: "Dar El Farah", n1: "Horaires et prix", n2: "Ramassage", n3: "Les groupes", n4: "En images", n5: "Inscription", cta0: "Inscrire mon enfant",
      kick: "Garderie à Constantine, 4 mois à 5 ans", h1a: "Vous travaillez,", h1b: "on s’occupe", h1c: "de tout.", lede: "Ouverte de 6 h 30 à 19 h et le samedi matin. Ramassage dans toute la ville, petit déjeuner et dîner léger compris, et des photos de la journée sur WhatsApp.",
      cta1: "Calculer ma formule", cta2: "Inscription en ligne", pl1: "ouverture", pl2: "fermeture", pl3: "quartiers desservis", ring: "OUVERT 6H30 – 19H • SAMEDI AUSSI • ", stick: "6h30 19h", hint: "Glissez la photo pour voir la suivante",
      stackL: ["Fête des chapeaux", "Fou rire au jardin", "Bonjour !", "Atelier musique", "La ronde"],
      paK: "Votre formule sur mesure", paH: "Dites-nous vos horaires, on calcule le reste", paP: "Réglez l’heure à laquelle vous déposez et récupérez votre enfant : la formule, les repas compris et le prix s’affichent tout de suite.",
      arr: "Je dépose mon enfant à", dep: "Je le récupère à", sat: "Garde le samedi matin", busL: "Ramassage", perM: "DA / mois", outGo: "Réserver cette formule",
      f: ["Demi-journée", "Journée", "Journée longue"], hrs: "{a} à {d}, soit {h} par jour", meals: ["Petit déj.", "Déjeuner", "Goûter", "Dîner léger"],
      lF: "Formule", lS: "Samedi matin", lB: "Ramassage, {z}", fine: "Tarifs de démonstration. Inscription : 8 000 DA par an. Paiement au mois.",
      raK: "Ramassage en minibus", raH: "On passe le prendre près de chez vous", raP: "Deux minibus climatisés, une accompagnatrice à bord, siège enfant pour chacun. Choisissez votre quartier.",
      zMorn: "Passage le matin", zEve: "Retour le soir", zPrice: "Prix par mois", zSeats: "Places dans le minibus", zLeft: "{n} places libres sur {t}", zFull: "Complet, liste d’attente", zAdd: "Ajouter à ma formule", zAdded: "Ajouté à ma formule",
      grK: "Trois groupes", grH: "Chacun avec les enfants de son âge",
      stK: "Comme sur WhatsApp", stH: "Une journée à Dar El Farah, en stories", stP: "Touchez un rond pour regarder. Les parents reçoivent les mêmes photos chaque soir.",
      evK: "Agenda de l’année", evH: "Ici, on fait la fête souvent", every: "Chaque mois",
      enK: "Inscription en ligne", enH: "Trois étapes, cinq minutes", enP: "Remplissez le dossier ici, on vous rappelle pour la visite et le premier jour d’adaptation.",
      s1: "1. L’enfant", s2: "2. Les parents", s3: "3. Le dossier", p1H: "Votre enfant", kName: "Prénom de l’enfant", kDob: "Date de naissance", p2H: "Vous", l1: "Votre nom", l2: "Téléphone", l3: "Début souhaité", p3H: "Ce que vous avez déjà",
      auto0: "Indiquez la date de naissance : on trouve son groupe.", autoG: "Groupe : <b>{g}</b> ({a})", autoNo: "Nous accueillons de 4 mois à 5 ans.",
      docs: ["Extrait de naissance", "Carnet de vaccination à jour", "4 photos d’identité", "Attestation de travail des parents", "Certificat médical d’aptitude"],
      sum: "<b>{k}</b>, groupe {g}. Début : {s}. Documents prêts : {n} sur 5.", back: "Retour", next: "Continuer", send: "Envoyer le dossier",
      e0: "Indiquez le prénom et une date de naissance entre 4 mois et 5 ans.", e1: "Indiquez votre nom et un numéro valide.", demo: "Démo AFEX Digital : aucun dossier n’a été envoyé, ce formulaire n’est pas encore connecté.",
      coK: "Constantine", coH: "Une maison de la joie, entre les ponts", coP: "Au cœur de la ville des ponts suspendus, à deux pas du Rhumel. Facile d’accès le matin avant le travail, et sur la route du retour le soir.",
      polas: ["Le pont Sidi M’Cid", "Les gorges du Rhumel", "Le soir sur la ville"],
      iK1: "Adresse", i1: "Constantine centre (adresse fictive)", iK2: "Semaine", i2: "Dim. au jeu. 6 h 30 – 19 h", iK3: "Samedi", i3: "7 h 30 – 13 h, sur inscription", iK4: "Parking", i4: "Dépose-minute devant la porte",
      fqK: "Questions", fqH: "Les parents nous demandent souvent", foA: "Garderie fictive à horaires étendus, Constantine.", foC: "Contact", foCV: "WhatsApp et téléphone : numéro de démonstration",
      foot: "© 2026 Dar El Farah, garderie fictive.", by: "Site réalisé par", photos: "Photos : Unsplash,", lang: "Langue", waDemo: "Démo AFEX Digital : le numéro WhatsApp de la garderie n’est pas encore connecté.",
      close: "Fermer", prev: "Précédent", next2: "Suivant", depotAlt: "Un parent accompagne son enfant à la garderie le matin", cstAlt: "Le pont suspendu Sidi M’Cid au-dessus des gorges de Constantine",
      title: "Dar El Farah, garderie de 6 h 30 à 19 h à Constantine", loc: "fr-FR" },
    ar: { fqCta: "مكان لطفلك؟", fqCtaP: "يُملأ الملف عبر الإنترنت في خمس دقائق.", fqWa: "راسلنا على واتساب", demo0: "موقع تجريبي: حضانة وهمية، الأسعار والأماكن للتوضيح فقط.", demo1: "شاهد النماذج الأخرى",
      brand: "دار الفرح", n1: "المواعيد والأسعار", n2: "النقل", n3: "الأفواج", n4: "بالصور", n5: "التسجيل", cta0: "سجّل طفلك",
      kick: "حضانة في قسنطينة، من 4 أشهر إلى 5 سنوات", h1a: "أنتم تعملون،", h1b: "ونحن نتكفّل", h1c: "بكل شيء.", lede: "مفتوحة من 6:30 إلى 19:00 وصباح السبت. نقل في كل أحياء المدينة، فطور وعشاء خفيف مشمولان، وصور اليوم على واتساب.",
      cta1: "احسب صيغتي", cta2: "التسجيل عبر الإنترنت", pl1: "الافتتاح", pl2: "الإغلاق", pl3: "أحياء مخدومة", ring: "مفتوحة 6:30 – 19:00 • والسبت أيضًا • ", stick: "6:30 19:00", hint: "اسحب الصورة لرؤية التالية",
      stackL: ["حفلة القبعات", "ضحك في الحديقة", "صباح الخير!", "ورشة الموسيقى", "الحلقة"],
      paK: "صيغتك على المقاس", paH: "أخبرونا بمواعيدكم ونحسب الباقي", paP: "اضبطوا ساعة إيصال طفلكم واستلامه: تظهر الصيغة والوجبات المشمولة والسعر فورًا.",
      arr: "أوصل طفلي على الساعة", dep: "أستلمه على الساعة", sat: "حراسة صباح السبت", busL: "النقل", perM: "دج / الشهر", outGo: "احجز هذه الصيغة",
      f: ["نصف يوم", "يوم كامل", "يوم طويل"], hrs: "من {a} إلى {d}، أي {h} يوميًا", meals: ["الفطور", "الغداء", "اللمجة", "عشاء خفيف"],
      lF: "الصيغة", lS: "صباح السبت", lB: "النقل، {z}", fine: "أسعار تجريبية. التسجيل: 8 000 دج سنويًا. الدفع شهريًا.",
      raK: "النقل بالحافلة الصغيرة", raH: "نمرّ لأخذه قرب بيتكم", raP: "حافلتان مكيّفتان، مرافقة على متنهما، ومقعد أطفال لكل واحد. اختاروا حيّكم.",
      zMorn: "المرور صباحًا", zEve: "العودة مساءً", zPrice: "السعر الشهري", zSeats: "الأماكن في الحافلة", zLeft: "{n} أماكن شاغرة من {t}", zFull: "ممتلئ، قائمة انتظار", zAdd: "أضف إلى صيغتي", zAdded: "أُضيف إلى صيغتي",
      grK: "ثلاثة أفواج", grH: "كل طفل مع أطفال سنّه",
      stK: "مثل واتساب", stH: "يوم في دار الفرح، بالقصص", stP: "المس دائرة للمشاهدة. يتلقى الأولياء الصور نفسها كل مساء.",
      evK: "رزنامة السنة", evH: "هنا نحتفل كثيرًا", every: "كل شهر",
      enK: "التسجيل عبر الإنترنت", enH: "ثلاث خطوات، خمس دقائق", enP: "املأ الملف هنا، ونتصل بك للزيارة وأول يوم تكيّف.",
      s1: "1. الطفل", s2: "2. الأولياء", s3: "3. الملف", p1H: "طفلكم", kName: "اسم الطفل", kDob: "تاريخ الميلاد", p2H: "أنتم", l1: "اسمك", l2: "الهاتف", l3: "تاريخ البدء المرغوب", p3H: "الوثائق الجاهزة لديكم",
      auto0: "أدخل تاريخ الميلاد لنجد فوجه.", autoG: "الفوج: <b>{g}</b> ({a})", autoNo: "نستقبل الأطفال من 4 أشهر إلى 5 سنوات.",
      docs: ["شهادة الميلاد", "دفتر التلقيح محيَّن", "4 صور شمسية", "شهادة عمل الأولياء", "شهادة طبية للقبول"],
      sum: "<b>{k}</b>، فوج {g}. البدء: {s}. الوثائق الجاهزة: {n} من 5.", back: "رجوع", next: "متابعة", send: "إرسال الملف",
      e0: "أدخل الاسم وتاريخ ميلاد بين 4 أشهر و5 سنوات.", e1: "أدخل اسمك ورقمًا صحيحًا.", demo: "عرض AFEX Digital: لم يُرسل أي ملف، هذا النموذج غير متصل بعد.",
      coK: "قسنطينة", coH: "بيت الفرح بين الجسور", coP: "في قلب مدينة الجسور المعلّقة، على بعد خطوات من الرمال. سهلة الوصول صباحًا قبل العمل، وعلى طريق العودة مساءً.",
      polas: ["جسر سيدي مسيد", "خوانق الرمال", "المساء على المدينة"],
      iK1: "العنوان", i1: "وسط قسنطينة (عنوان وهمي)", iK2: "الأسبوع", i2: "من الأحد إلى الخميس 6:30 – 19:00", iK3: "السبت", i3: "7:30 – 13:00، بالتسجيل", iK4: "الموقف", i4: "توقف سريع أمام الباب",
      fqK: "أسئلة", fqH: "ما يسألنا عنه الأولياء كثيرًا", foA: "حضانة وهمية بمواعيد ممتدة، قسنطينة.", foC: "الاتصال", foCV: "واتساب والهاتف: رقم تجريبي",
      foot: "© 2026 دار الفرح، حضانة وهمية.", by: "موقع من إنجاز", photos: "الصور: Unsplash،", lang: "اللغة", waDemo: "عرض AFEX Digital: رقم واتساب الحضانة غير متصل بعد.",
      close: "إغلاق", prev: "السابق", next2: "التالي", depotAlt: "وليّ يرافق طفله إلى الحضانة صباحًا", cstAlt: "جسر سيدي مسيد المعلّق فوق خوانق قسنطينة",
      title: "دار الفرح، حضانة من 6:30 إلى 19:00 في قسنطينة", loc: "ar-DZ" },
    en: { fqCta: "A place for your child?", fqCtaP: "The file takes five minutes online.", fqWa: "Message us on WhatsApp", demo0: "Demo website: a fictional childcare centre, prices and places are examples.", demo1: "See the other templates",
      brand: "Dar El Farah", n1: "Hours and fees", n2: "Pick-up", n3: "Groups", n4: "In pictures", n5: "Enrol", cta0: "Enrol my child",
      kick: "Childcare in Constantine, 4 months to 5 years", h1a: "You work,", h1b: "we handle", h1c: "the rest.", lede: "Open 6:30 to 19:00 and Saturday mornings. Pick-up across the city, breakfast and a light dinner included, and photos of the day on WhatsApp.",
      cta1: "Work out my plan", cta2: "Enrol online", pl1: "opening", pl2: "closing", pl3: "areas covered", ring: "OPEN 6:30 – 19:00 • SATURDAYS TOO • ", stick: "6:30 19:00", hint: "Swipe the photo to see the next one",
      stackL: ["Party hats day", "Giggles in the garden", "Good morning!", "Music workshop", "Ring-a-roses"],
      paK: "A plan that fits you", paH: "Tell us your hours, we work out the rest", paP: "Set when you drop off and collect your child: the plan, the meals included and the price appear straight away.",
      arr: "I drop my child off at", dep: "I pick them up at", sat: "Saturday morning care", busL: "Pick-up", perM: "DA / month", outGo: "Book this plan",
      f: ["Half day", "Full day", "Long day"], hrs: "{a} to {d}, that is {h} a day", meals: ["Breakfast", "Lunch", "Snack", "Light dinner"],
      lF: "Plan", lS: "Saturday morning", lB: "Pick-up, {z}", fine: "Demo prices. Registration: 8,000 DA a year. Paid monthly.",
      raK: "Minibus pick-up", raH: "We collect them near your home", raP: "Two air-conditioned minibuses, an escort on board and a child seat for each. Pick your area.",
      zMorn: "Morning pick-up", zEve: "Evening drop-off", zPrice: "Price per month", zSeats: "Seats on the minibus", zLeft: "{n} seats free out of {t}", zFull: "Full, waiting list", zAdd: "Add to my plan", zAdded: "Added to my plan",
      grK: "Three groups", grH: "Each with children their own age",
      stK: "Just like WhatsApp", stH: "A day at Dar El Farah, in stories", stP: "Tap a circle to watch. Parents get the same photos every evening.",
      evK: "This year’s calendar", evH: "We celebrate a lot here", every: "Every month",
      enK: "Online enrolment", enH: "Three steps, five minutes", enP: "Fill in the file here and we call you back for the visit and the first settling-in day.",
      s1: "1. The child", s2: "2. The parents", s3: "3. The file", p1H: "Your child", kName: "Child’s first name", kDob: "Date of birth", p2H: "You", l1: "Your name", l2: "Phone", l3: "Preferred start", p3H: "What you already have",
      auto0: "Enter the date of birth and we find their group.", autoG: "Group: <b>{g}</b> ({a})", autoNo: "We take children from 4 months to 5 years.",
      docs: ["Birth certificate", "Up-to-date vaccination record", "4 passport photos", "Parents’ proof of employment", "Medical fitness certificate"],
      sum: "<b>{k}</b>, {g} group. Start: {s}. Documents ready: {n} of 5.", back: "Back", next: "Continue", send: "Send the file",
      e0: "Enter a first name and a date of birth between 4 months and 5 years.", e1: "Enter your name and a valid number.", demo: "AFEX Digital demo: no file was sent, this form is not connected yet.",
      coK: "Constantine", coH: "A house of joy, between the bridges", coP: "In the heart of the city of hanging bridges, a few steps from the Rhumel. Easy to reach in the morning before work, and on the way home at night.",
      polas: ["Sidi M’Cid bridge", "The Rhumel gorge", "Evening over the city"],
      iK1: "Address", i1: "Central Constantine (made-up address)", iK2: "Weekdays", i2: "Sun to Thu 6:30 – 19:00", iK3: "Saturday", i3: "7:30 – 13:00, booking needed", iK4: "Parking", i4: "Drop-off bay at the door",
      fqK: "Questions", fqH: "What parents often ask us", foA: "A fictional extended-hours childcare centre, Constantine.", foC: "Contact", foCV: "WhatsApp and phone: demo number",
      foot: "© 2026 Dar El Farah, a fictional childcare centre.", by: "Website by", photos: "Photos: Unsplash,", lang: "Language", waDemo: "AFEX Digital demo: the centre’s WhatsApp number is not connected yet.",
      close: "Close", prev: "Previous", next2: "Next", depotAlt: "A parent walks their child to childcare in the morning", cstAlt: "Sidi M’Cid suspension bridge over the Constantine gorge",
      title: "Dar El Farah, childcare from 6:30 to 19:00 in Constantine", loc: "en-GB" }
  };

  var STACK = ["chapeaux", "rire", "sourire", "xylo2", "ronde"];
  var PRICE = [17000, 25000, 30000], SAT = 4000;
  var ZONES = [
    { n: { fr: "Centre-ville", ar: "وسط المدينة", en: "City centre" }, m: "07:25", e: "17:30", p: 3500, t: 8, k: 3, x: 330, y: 150 },
    { n: { fr: "Sidi Mabrouk", ar: "سيدي مبروك", en: "Sidi Mabrouk" }, m: "07:05", e: "17:50", p: 4500, t: 8, k: 5, x: 470, y: 120 },
    { n: { fr: "Belle-Vue", ar: "بلفيو", en: "Belle-Vue" }, m: "07:15", e: "17:40", p: 4000, t: 8, k: 7, x: 210, y: 210 },
    { n: { fr: "Zouaghi", ar: "زواغي", en: "Zouaghi" }, m: "06:55", e: "18:00", p: 5500, t: 8, k: 8, x: 150, y: 290 },
    { n: { fr: "Didouche Mourad", ar: "ديدوش مراد", en: "Didouche Mourad" }, m: "06:40", e: "18:15", p: 7000, t: 8, k: 6, x: 260, y: 40 },
    { n: { fr: "Ali Mendjeli", ar: "علي منجلي", en: "Ali Mendjeli" }, m: "06:45", e: "18:10", p: 6500, t: 8, k: 6, x: 70, y: 200 },
    { n: { fr: "El Khroub", ar: "الخروب", en: "El Khroub" }, m: "06:35", e: "18:20", p: 7500, t: 8, k: 4, x: 540, y: 290 }
  ];
  var HOME = { x: 320, y: 175 };
  var GROUPS = [
    { img: "bebe", t: { fr: "Les Poussins", ar: "الكتاكيت", en: "The Chicks" }, a: { fr: "4 à 18 mois", ar: "من 4 إلى 18 شهرًا", en: "4 to 18 months" }, min: 4, max: 18,
      d: { fr: "Une salle douce, des lits à barreaux, le rythme de chaque bébé respecté.", ar: "قاعة هادئة، أسرّة أطفال، واحترام إيقاع كل رضيع.", en: "A soft room, cots, and each baby’s rhythm respected." },
      l: { fr: ["1 adulte pour 4", "Biberons préparés", "Couches fournies"], ar: ["مربّية لكل 4", "رضّاعات محضّرة", "حفاظات مقدّمة"], en: ["1 adult for 4", "Bottles prepared", "Nappies provided"] } },
    { img: "marche", t: { fr: "Les Lutins", ar: "الأقزام", en: "The Elves" }, a: { fr: "18 mois à 3 ans", ar: "من 18 شهرًا إلى 3 سنوات", en: "18 months to 3 years" }, min: 18, max: 36,
      d: { fr: "Marcher, grimper, chanter : beaucoup de jeu, et la propreté en douceur.", ar: "المشي، التسلّق، الغناء: لعب كثير وتعلّم النظافة بهدوء.", en: "Walking, climbing, singing: lots of play, and gentle potty training." },
      l: { fr: ["1 adulte pour 6", "Motricité tous les jours", "Comptines en 2 langues"], ar: ["مربّية لكل 6", "حركة كل يوم", "أناشيد بلغتين"], en: ["1 adult for 6", "Movement every day", "Rhymes in 2 languages"] } },
    { img: "jeu", t: { fr: "Les Explorateurs", ar: "المستكشفون", en: "The Explorers" }, a: { fr: "3 à 5 ans", ar: "من 3 إلى 5 سنوات", en: "3 to 5 years" }, min: 36, max: 60,
      d: { fr: "Ateliers, préscolaire léger, sorties : on prépare l’école sans la pression.", ar: "ورشات، تحضيري خفيف، خرجات: نحضّر للمدرسة بلا ضغط.", en: "Workshops, light preschool and outings: getting ready for school without pressure." },
      l: { fr: ["1 adulte pour 10", "Lettres et chiffres", "Sorties en ville"], ar: ["مربّية لكل 10", "حروف وأرقام", "خرجات في المدينة"], en: ["1 adult for 10", "Letters and numbers", "Trips in town"] } }
  ];
  var STORIES = [
    { imgs: ["matin", "petitdej", "habiller", "coiffer"], t: { fr: "Le matin", ar: "الصباح", en: "Mornings" }, c: { fr: "6 h 30 : on se prépare, la garderie est déjà ouverte.", ar: "6:30: نستعد، والحضانة مفتوحة بالفعل.", en: "6:30: getting ready, the centre is already open." } },
    { imgs: ["xylo", "xylo2", "ukulele", "guitares"], t: { fr: "Musique", ar: "الموسيقى", en: "Music" }, c: { fr: "Atelier musique le lundi et le mercredi.", ar: "ورشة الموسيقى الاثنين والأربعاء.", en: "Music workshop on Mondays and Wednesdays." } },
    { imgs: ["ronde", "course", "foret", "corde"], t: { fr: "Dehors", ar: "في الخارج", en: "Outdoors" }, c: { fr: "Une heure dehors chaque jour, sauf s’il pleut fort.", ar: "ساعة في الخارج كل يوم، إلا إذا أمطرت بقوة.", en: "An hour outside every day, unless it pours." } },
    { imgs: ["fete", "anniv", "bougie", "ballons"], t: { fr: "Fêtes", ar: "الحفلات", en: "Parties" }, c: { fr: "Un goûter d’anniversaire chaque fin de mois.", ar: "لمجة عيد الميلاد في آخر كل شهر.", en: "A birthday snack at the end of every month." } },
    { imgs: ["danse", "tutu", "ombre"], t: { fr: "Danse", ar: "الرقص", en: "Dance" }, c: { fr: "On danse, on tourne, on fait des ombres.", ar: "نرقص وندور ونلعب بالظلال.", en: "We dance, spin and play with shadows." } },
    { imgs: ["bebematin", "bebebleu", "bonnet", "chapeau"], t: { fr: "Les bébés", ar: "الرضّع", en: "Babies" }, c: { fr: "Chez les Poussins, chaque bébé a son rythme.", ar: "عند الكتاكيت، لكل رضيع إيقاعه.", en: "With the Chicks, every baby has their own rhythm." } }
  ];
  var MOS = ["rire", "sourire", "cuisine", "dinos", "chapeau"];
  var EVENTS = [
    { img: "bonnet", d: "2026-11-26", t: { fr: "Journée pyjama", ar: "يوم البيجامة", en: "Pyjama day" }, p: { fr: "Tout le monde vient en pyjama, histoires et chocolat chaud.", ar: "الجميع بالبيجامة، قصص وشوكولاتة ساخنة.", en: "Everyone comes in pyjamas, with stories and hot chocolate." } },
    { img: "fete", d: "2027-01-12", t: { fr: "Yennayer", ar: "يناير", en: "Yennayer" }, p: { fr: "Chakhchoukha au déjeuner, contes et habits traditionnels.", ar: "شخشوخة في الغداء، حكايات ولباس تقليدي.", en: "Chakhchoukha for lunch, tales and traditional clothes." } },
    { img: "bougie", every: true, t: { fr: "Anniversaires du mois", ar: "أعياد ميلاد الشهر", en: "Birthdays of the month" }, p: { fr: "Le dernier jeudi, un gâteau pour tous ceux nés dans le mois.", ar: "آخر خميس، كعكة لكل من وُلد في الشهر.", en: "On the last Thursday, a cake for everyone born that month." } },
    { img: "tutu", d: "2027-06-17", t: { fr: "Spectacle de fin d’année", ar: "حفل نهاية السنة", en: "End-of-year show" }, p: { fr: "Chants et danses devant les familles.", ar: "أناشيد ورقصات أمام العائلات.", en: "Songs and dances in front of the families." } }
  ];
  var FAQ = [
    [{ fr: "Pourquoi ouvrir dès 6 h 30 ?", ar: "لماذا نفتح من 6:30؟", en: "Why open at 6:30?" }, { fr: "Parce que beaucoup de parents commencent à 7 h 30 ou 8 h, à l’hôpital, à l’université ou dans les entreprises de la nouvelle ville. Un petit déjeuner est servi aux enfants arrivés avant 7 h 30.", ar: "لأن كثيرًا من الأولياء يبدأون العمل على 7:30 أو 8:00 في المستشفى أو الجامعة أو مؤسسات المدينة الجديدة. يُقدّم الفطور للأطفال الواصلين قبل 7:30.", en: "Because many parents start at 7:30 or 8:00, at the hospital, the university or firms in the new town. Breakfast is served to children who arrive before 7:30." }],
    [{ fr: "Et si je suis en retard le soir ?", ar: "وإذا تأخرت مساءً؟", en: "What if I’m late in the evening?" }, { fr: "Prévenez-nous par WhatsApp : une éducatrice reste avec votre enfant. Au-delà de 19 h 15, un supplément de 500 DA par quart d’heure s’applique.", ar: "أعلمونا عبر واتساب: تبقى مربّية مع طفلكم. بعد 19:15 تُضاف 500 دج عن كل ربع ساعة.", en: "Let us know on WhatsApp and a carer stays with your child. After 19:15, there is a 500 DA charge per quarter hour." }],
    [{ fr: "Comment marche la garde du samedi ?", ar: "كيف تعمل حراسة السبت؟", en: "How does Saturday care work?" }, { fr: "De 7 h 30 à 13 h, sur inscription le jeudi au plus tard. Déjeuner compris, groupes mélangés.", ar: "من 7:30 إلى 13:00، بالتسجيل يوم الخميس على الأكثر. الغداء مشمول، والأفواج مختلطة.", en: "7:30 to 13:00, booked by Thursday at the latest. Lunch included, mixed groups." }],
    [{ fr: "Le ramassage est-il sûr ?", ar: "هل النقل آمن؟", en: "Is the pick-up safe?" }, { fr: "Chaque minibus a un chauffeur, une accompagnatrice et un siège enfant par place. Vous recevez un message au départ et à l’arrivée.", ar: "في كل حافلة سائق ومرافقة ومقعد أطفال لكل مكان. تصلكم رسالة عند الانطلاق والوصول.", en: "Each minibus has a driver, an escort and a child seat per place. You get a message on departure and arrival." }],
    [{ fr: "Que mangent les enfants ?", ar: "ماذا يأكل الأطفال؟", en: "What do the children eat?" }, { fr: "Tout est cuisiné sur place : petit déjeuner, déjeuner, goûter et un dîner léger pour ceux qui restent après 18 h 30. Menus affichés chaque semaine.", ar: "كل شيء يُطهى في عين المكان: فطور، غداء، لمجة وعشاء خفيف لمن يبقى بعد 18:30. القوائم معلّقة كل أسبوع.", en: "Everything is cooked on site: breakfast, lunch, snack and a light dinner for those staying after 18:30. Menus posted weekly." }],
    [{ fr: "Mon enfant est malade, que faire ?", ar: "طفلي مريض، ماذا أفعل؟", en: "My child is ill, what now?" }, { fr: "Gardez-le à la maison en cas de fièvre. Si la fièvre arrive dans la journée, on vous appelle tout de suite.", ar: "أبقوه في البيت في حال الحمى. وإذا ظهرت خلال اليوم، نتصل بكم فورًا.", en: "Keep them home if they have a fever. If it starts during the day, we call you straight away." }]
  ];

  var lang = "fr", zone = 0, ready = false, dyn = [], shown = 0, step = 0, story = -1, sIdx = 0, sTl = null, busTl = null;
  try { var sv = localStorage.getItem("farah-lang"); if (I[sv]) lang = sv; } catch (e) {}
  function fmt(d, o) { try { return new Intl.DateTimeFormat(I[lang].loc, o).format(d); } catch (e) { return d.toDateString(); } }
  function openWa() { var m = { fr: "Bonjour AFEX Digital, je viens du site de démonstration « " + document.title + " ». Je veux un site comme celui-ci.", ar: "مرحبًا AFEX Digital، أتيت من الموقع التجريبي « " + document.title + " ». أريد موقعًا مثله.", en: "Hello AFEX Digital, I found the demo site “" + document.title + "”. I would like a website like this one." }; window.open("https://wa.me/213550284873?text=" + encodeURIComponent(m[lang] || m.fr), "_blank", "noopener"); }
  function toast(t) { var el = $("#toast"); el.textContent = t; el.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(function () { el.classList.remove("on"); }, 4200); }

  /* hero card stack */
  function renderStack() {
    var t = I[lang];
    $$("#stack .card").forEach(function (c) { c.remove(); });
    var html = STACK.map(function (n, i) { return '<div class="card" data-k="' + i + '">' + img(n, "440px", i < 2) + "<span>" + t.stackL[i] + "</span></div>"; }).join("");
    $("#stack").insertAdjacentHTML("afterbegin", html);
    layStack(false);
    $("#ringT").textContent = t.ring;
  }
  var order = [0, 1, 2, 3, 4];
  function layStack(anim) {
    var cards = $$("#stack .card");
    order.forEach(function (k, pos) {
      var c = cards[k], r = [0, 5, -6, 3, -3][pos], y = pos * 10, s = 1 - pos * .04;
      c.style.zIndex = 10 - pos;
      if (anim && !STATIC) gsap.to(c, { x: 0, y: y, rotation: r, scale: s, duration: .6, ease: "back.out(1.6)" });
      else if (window.gsap) gsap.set(c, { x: 0, y: y, rotation: r, scale: s }); else c.style.transform = "translateY(" + y + "px) rotate(" + r + "deg) scale(" + s + ")";
    });
  }
  function nextCard(dir) {
    var top = $$("#stack .card")[order[0]];
    if (STATIC || !window.gsap) { order.push(order.shift()); layStack(false); return; }
    gsap.to(top, { x: (dir || 1) * 520, rotation: (dir || 1) * 30, duration: .45, ease: "power2.in", onComplete: function () { order.push(order.shift()); layStack(true); } });
  }
  (function drag() {
    var sx = 0, dx = 0, on = false, el = null;
    $("#stack").addEventListener("pointerdown", function (e) { var c = e.target.closest(".card"); if (!c || +c.dataset.k !== order[0]) return; on = true; el = c; sx = e.clientX; dx = 0; c.setPointerCapture(e.pointerId); c.style.cursor = "grabbing"; stopAuto(); });
    $("#stack").addEventListener("pointermove", function (e) { if (!on) return; dx = e.clientX - sx; if (window.gsap) gsap.set(el, { x: dx, rotation: dx / 14 }); });
    function up() { if (!on) return; on = false; el.style.cursor = ""; if (Math.abs(dx) > 80) nextCard(dx > 0 ? 1 : -1); else if (Math.abs(dx) < 4) nextCard(1); else layStack(true); startAuto(); }
    $("#stack").addEventListener("pointerup", up); $("#stack").addEventListener("pointercancel", up);
  })();
  var auto = null;
  function startAuto() { if (STATIC) return; stopAuto(); auto = setInterval(function () { nextCard(1); }, 4200); }
  function stopAuto() { clearInterval(auto); }

  /* planner */
  function calc() {
    var t = I[lang], a = 390 + 15 * +$("#arr").value, d = 720 + 15 * +$("#dep").value;
    $("#arrO").textContent = hm(a); $("#depO").textContent = hm(d);
    $("#arr").style.setProperty("--p", (+$("#arr").value / 14 * 100) + "%");
    $("#dep").style.setProperty("--p", (+$("#dep").value / 28 * 100) + "%");
    var f = d <= 810 ? 0 : (a >= 450 && d <= 1050 ? 1 : 2), tot = PRICE[f], lines = [[t.lF + " " + t.f[f].toLowerCase(), PRICE[f]]];
    if ($("#sat").checked) { lines.push([t.lS, SAT]); tot += SAT; }
    if ($("#bus").checked) { var z = ZONES[zone]; lines.push([t.lB.replace("{z}", z.n[lang]), z.p]); tot += z.p; }
    $("#fm").textContent = t.f[f];
    var h = d - a; $("#hrs").textContent = t.hrs.replace("{a}", hm(a)).replace("{d}", hm(d)).replace("{h}", Math.floor(h / 60) + (lang === "ar" ? " سا" : " h") + (h % 60 ? " " + (h % 60) + (lang === "ar" ? " د" : "") : ""));
    $("#lines").innerHTML = lines.map(function (l) { return "<li><span>" + l[0] + "</span><span>" + da(l[1]) + " " + cur() + "</span></li>"; }).join("");
    var L = 390, R = 1140, rtl = doc.dir === "rtl", pos = function (m) { return (m - L) / (R - L) * 100; };
    var seg = $("#seg"); seg.style.left = pos(a) + "%"; seg.style.width = (pos(d) - pos(a)) + "%";
    var ms = [[450, a <= 450], [720, d >= 750], [930, d >= 945], [1095, d >= 1110]];
    $("#meals").innerHTML = ms.map(function (m, i) { return '<span class="meal' + (m[1] ? " on" : "") + '" style="left:' + pos(m[0]) + '%"><i>' + (m[1] ? "✓" : "") + "</i>" + t.meals[i] + "</span>"; }).join("");
    $("#tl").style.direction = "ltr";
    var el = $("#tot");
    if (STATIC || !ready) { el.textContent = da(tot); shown = tot; return; }
    var o = { v: shown }; gsap.to(o, { v: tot, duration: .6, ease: "power3.out", overwrite: true, onUpdate: function () { el.textContent = da(Math.round(o.v / 100) * 100); }, onComplete: function () { el.textContent = da(tot); } });
    if (tot !== shown) gsap.fromTo("#fm", { rotation: -8, scale: 1.15 }, { rotation: -2, scale: 1, duration: .5, ease: "back.out(3)" });
    shown = tot;
  }

  /* pick-up */
  function renderZones() {
    $("#zones").innerHTML = ZONES.map(function (z, i) { return '<button type="button" data-z="' + i + '" aria-pressed="' + (i === zone) + '">' + z.n[lang] + "</button>"; }).join("");
    var s = '<g fill="none" stroke="rgba(255,255,255,.25)" stroke-width="2" stroke-dasharray="2 8" stroke-linecap="round">' + ZONES.map(function (z) { return '<path d="' + route(z) + '"/>'; }).join("") + "</g>";
    s += '<path id="rt" fill="none" stroke="#6FE3C1" stroke-width="5" stroke-linecap="round" d=""/>';
    s += ZONES.map(function (z, i) { return '<g class="zd" data-z="' + i + '"><circle cx="' + z.x + '" cy="' + z.y + '" r="9" fill="' + (z.t - z.k ? "#FFE08A" : "#F0386B") + '" stroke="#2A1236" stroke-width="3"/><text x="' + z.x + '" y="' + (z.y - 16) + '" text-anchor="middle" font-family="Rubik, sans-serif" font-size="13" font-weight="700" fill="#fff">' + z.n[lang] + "</text></g>"; }).join("");
    s += '<g><circle cx="' + HOME.x + '" cy="' + HOME.y + '" r="22" fill="#F0386B"/><path d="M' + (HOME.x - 8) + " " + (HOME.y + 2) + "c2 6 14 6 16 0" + '" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round"/><circle cx="' + (HOME.x - 5) + '" cy="' + (HOME.y - 5) + '" r="2" fill="#fff"/><circle cx="' + (HOME.x + 5) + '" cy="' + (HOME.y - 5) + '" r="2" fill="#fff"/></g>';
    s += '<g id="busG"><rect x="-15" y="-10" width="30" height="20" rx="6" fill="#FFE08A" stroke="#2A1236" stroke-width="2.5"/><rect x="-10" y="-6" width="8" height="6" rx="1.5" fill="#2A1236"/><rect x="2" y="-6" width="8" height="6" rx="1.5" fill="#2A1236"/></g>';
    $("#mapSvg").innerHTML = s;
    showZone(false);
  }
  function route(z) { var mx = (z.x + HOME.x) / 2 + (z.y - HOME.y) * .25, my = (z.y + HOME.y) / 2 - (z.x - HOME.x) * .25; return "M" + z.x + " " + z.y + " Q" + mx.toFixed(0) + " " + my.toFixed(0) + " " + HOME.x + " " + HOME.y; }
  function showZone(anim) {
    var t = I[lang], z = ZONES[zone], left = z.t - z.k, seats = "";
    for (var i = 0; i < z.t; i++) seats += '<i class="' + (i < z.k ? "f" : "") + '"></i>';
    $("#zinfo").innerHTML = "<h3>" + z.n[lang] + '</h3><div class="kv"><div><small>' + t.zMorn + "</small><b>" + z.m + "</b></div><div><small>" + t.zEve + "</small><b>" + z.e + "</b></div><div><small>" + t.zPrice + "</small><b>" + da(z.p) + " " + cur() + "</b></div><div><small>" + t.zSeats + "</small><b>" + (left ? left + " / " + z.t : "0") + '</b></div></div><div class="seats" aria-hidden="true">' + seats + "</div><p>" + (left ? t.zLeft.replace("{n}", left).replace("{t}", z.t) : t.zFull) + "</p>" + (left ? '<button type="button" class="btn m" id="zAdd">' + ($("#bus").checked ? t.zAdded : t.zAdd) + "</button>" : "");
    $("#busL").textContent = t.busL + " (" + z.n[lang] + ")";
    $("#bus").disabled = !left; if (!left) $("#bus").checked = false;
    var rt = $("#rt"); rt.setAttribute("d", route(z));
    $$(".zd circle").forEach(function (c, i) { c.setAttribute("r", i === zone ? 13 : 9); });
    var len = rt.getTotalLength(), bus = $("#busG");
    if (busTl) busTl.kill();
    if (STATIC || !window.gsap) { var p = rt.getPointAtLength(len); bus.setAttribute("transform", "translate(" + p.x + " " + p.y + ")"); return; }
    gsap.set(rt, { strokeDasharray: len, strokeDashoffset: len });
    var o = { l: 0 };
    busTl = gsap.timeline();
    busTl.to(rt, { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" }, 0)
      .to(o, { l: len, duration: 1.2, ease: "power2.inOut", onUpdate: function () { var p = rt.getPointAtLength(o.l); bus.setAttribute("transform", "translate(" + p.x.toFixed(1) + " " + p.y.toFixed(1) + ")"); } }, 0);
    if (anim) gsap.from("#zinfo > *", { y: 16, opacity: 0, duration: .5, stagger: .05, ease: "power3.out" });
  }

  function renderGroups() {
    $("#groups").innerHTML = GROUPS.map(function (g) { return '<article class="gc"><div class="ph">' + img(g.img, "(min-width:1080px) 30vw, 92vw") + "<span>" + g.a[lang] + '</span></div><div class="bd"><h3>' + g.t[lang] + "</h3><p>" + g.d[lang] + "</p><ul>" + g.l[lang].map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul></div></article>"; }).join("");
  }
  function renderStories() {
    $("#bubbles").innerHTML = STORIES.map(function (s, i) { return '<button type="button" class="bub" data-s="' + i + '"><span class="ring"><span>' + img(s.imgs[0], "120px") + "</span></span>" + s.t[lang] + "</button>"; }).join("");
    $("#mosaic").innerHTML = MOS.map(function (n, i) { return '<div class="' + "abcde"[i] + '">' + img(n, "(min-width:900px) 33vw, 50vw") + "</div>"; }).join("");
  }
  function openStory(i) { story = i; sIdx = 0; $("#sv").hidden = false; if (lenis) lenis.stop(); var s = STORIES[i]; $("#svProg").innerHTML = s.imgs.map(function () { return "<i><b></b></i>"; }).join(""); $("#svAv").src = "assets/img/" + s.imgs[0] + "-640.webp"; $("#svT").textContent = s.t[lang]; $("#svC").textContent = s.c[lang]; showFrame(); $("#svX").focus(); }
  function showFrame() {
    var s = STORIES[story]; $("#svI").src = "assets/img/" + s.imgs[sIdx] + "-1280.webp"; $("#svI").alt = s.t[lang];
    var bars = $$("#svProg b"); bars.forEach(function (b, k) { b.style.transform = "scaleX(" + (k < sIdx ? 1 : 0) + ")"; });
    if (sTl) sTl.kill();
    if (STATIC || !window.gsap) return;
    gsap.fromTo("#svI", { scale: 1.08, opacity: .4 }, { scale: 1, opacity: 1, duration: .6, ease: "power2.out" });
    sTl = gsap.to(bars[sIdx], { scaleX: 1, duration: 4, ease: "none", onComplete: function () { stepStory(1); } });
  }
  function stepStory(d) { var s = STORIES[story]; sIdx += d; if (sIdx < 0) sIdx = 0; if (sIdx >= s.imgs.length) { if (story < STORIES.length - 1) { openStory(story + 1); return; } closeStory(); return; } showFrame(); }
  function closeStory() { if (sTl) sTl.kill(); $("#sv").hidden = true; if (lenis) lenis.start(); var b = $('.bub[data-s="' + story + '"]'); if (b) b.focus(); }

  function renderAgenda() {
    var t = I[lang];
    $("#ag").innerHTML = EVENTS.map(function (e) { var d = e.d ? new Date(e.d + "T12:00:00") : null; return '<article class="ev"><div class="ph">' + img(e.img, "(min-width:1080px) 25vw, 92vw") + '<span class="dt">' + (d ? "<b>" + d.getDate() + "</b><small>" + fmt(d, { month: "short" }) + "</small>" : "<small>" + t.every + "</small>") + '</span></div><div class="bd"><h3>' + e.t[lang] + "</h3><p>" + e.p[lang] + "</p></div></article>"; }).join("");
  }

  /* enrolment */
  function ageMonths() { var v = $("#f").dob.value; if (!v) return null; var b = new Date(v + "T12:00:00"), n = new Date(); return (n.getFullYear() - b.getFullYear()) * 12 + n.getMonth() - b.getMonth() - (n.getDate() < b.getDate() ? 1 : 0); }
  function grp() { var m = ageMonths(); if (m === null || m < 4 || m >= 60) return null; for (var i = 0; i < GROUPS.length; i++) if (m < GROUPS[i].max) return GROUPS[i]; return null; }
  function renderAuto() { var t = I[lang], m = ageMonths(), g = grp(); $("#auto").innerHTML = m === null ? t.auto0 : g ? t.autoG.replace("{g}", g.t[lang]).replace("{a}", g.a[lang]) : t.autoNo; }
  function renderEnrol() {
    var t = I[lang], n = new Date(), opts = "";
    for (var i = 1; i <= 6; i++) { var d = new Date(n.getFullYear(), n.getMonth() + i, 1); opts += '<option value="' + i + '">' + fmt(d, { month: "long", year: "numeric" }) + "</option>"; }
    var sv2 = $("#startSel").value; $("#startSel").innerHTML = opts; if (sv2) $("#startSel").value = sv2;
    var checked = $$("#docs input").map(function (c) { return c.checked; });
    $("#docs").innerHTML = t.docs.map(function (d, i) { return '<label><input type="checkbox"' + (checked[i] ? " checked" : "") + "><span>" + d + "</span></label>"; }).join("");
    renderAuto(); renderStep();
  }
  function renderStep() {
    var t = I[lang];
    $$(".pane").forEach(function (p) { p.hidden = +p.dataset.p !== step; });
    $$("#steps span").forEach(function (s, i) { s.classList.toggle("on", i <= step); });
    $("#back").style.visibility = step ? "visible" : "hidden";
    $("#next").textContent = step === 2 ? t.send : t.next;
    if (step === 2) summary();
  }
  function summary() { var t = I[lang], f = $("#f"), g = grp(); $("#sum").innerHTML = t.sum.replace("{k}", f.kid.value.trim().replace(/[<>&]/g, "")).replace("{g}", g ? g.t[lang] : "–").replace("{s}", $("#startSel").selectedOptions[0] ? $("#startSel").selectedOptions[0].textContent : "").replace("{n}", $$("#docs input").filter(function (c) { return c.checked; }).length); }

  /* questions as a chat: tap a question, the answer comes back as a message */
  var faqI = 0;
  function renderFaq() {
    $("#faqL").innerHTML = '<div class="qchips" role="group">' + FAQ.map(function (f, i) { return '<button type="button" data-q="' + i + '" aria-pressed="' + (i === faqI) + '">' + f[0][lang] + "</button>"; }).join("") + '</div><div class="convo" id="convo" aria-live="polite"></div>';
    showFaq(false);
  }
  function showFaq(anim) {
    var f = FAQ[faqI];
    $$("#faqL .qchips button").forEach(function (b, i) { b.setAttribute("aria-pressed", i === faqI); });
    $("#convo").innerHTML = '<p class="me">' + f[0][lang] + '</p><p class="typing" aria-hidden="true"><i></i><i></i><i></i></p><p class="them">' + f[1][lang] + "</p>";
    if (!anim || STATIC) { $(".typing").remove(); return; }
    gsap.set("#convo .them", { opacity: 0, y: 10 });
    gsap.from("#convo .me", { x: doc.dir === "rtl" ? -30 : 30, opacity: 0, duration: .35 });
    gsap.from(".typing i", { y: -4, duration: .3, stagger: .1, repeat: 2, yoyo: true });
    gsap.to(".typing", { opacity: 0, height: 0, padding: 0, margin: 0, delay: .9, duration: .2 });
    gsap.to("#convo .them", { opacity: 1, y: 0, delay: 1, duration: .4, ease: "back.out(2)" });
  }
  function render() {
    var t = I[lang];
    renderStack(); calc(); renderZones(); renderGroups(); renderStories(); renderAgenda(); renderEnrol(); renderFaq();
    $("#polas").innerHTML = ["pont", "gorge", "coucher"].map(function (n, i) { return '<figure class="pola">' + img(n, "170px") + "<span>" + t.polas[i] + "</span></figure>"; }).join("");
    var names = []; Object.keys(P).forEach(function (k) { if (names.indexOf(P[k][1]) < 0) names.push(P[k][1]); });
    $("#credits").textContent = t.photos + " " + names.join(", ") + ".";
    $("#svX").setAttribute("aria-label", t.close); $("#svP").setAttribute("aria-label", t.prev); $("#svN").setAttribute("aria-label", t.next2);
  }
  function setLang(l) {
    lang = l; var t = I[l];
    doc.lang = l; doc.dir = l === "ar" ? "rtl" : "ltr"; document.title = t.title;
    $$("[data-i]").forEach(function (e) { if (typeof t[e.dataset.i] === "string") e.textContent = t[e.dataset.i]; });
    $$("[data-alt]").forEach(function (e) { e.alt = t[e.dataset.alt]; });
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.l === l); });
    $(".lang").setAttribute("aria-label", t.lang); $("#msg").textContent = "";
    try { localStorage.setItem("farah-lang", l); } catch (e) {}
    render();
    if (ready) { bindDynamic(); ScrollTrigger.refresh(); }
  }

  /* events */
  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.l !== lang) setLang(b.dataset.l); }); });
  ["arr", "dep", "sat", "bus"].forEach(function (id) { $("#" + id).addEventListener("input", calc); $("#" + id).addEventListener("change", function () { calc(); if (id === "bus") showZone(false); }); });
  $("#zones").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; zone = +b.dataset.z; $$("#zones button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); showZone(true); calc(); });
  $("#mapSvg").addEventListener("click", function (e) { var g = e.target.closest(".zd"); if (g) $('#zones [data-z="' + g.dataset.z + '"]').click(); });
  $("#zinfo").addEventListener("click", function (e) { if (e.target.closest("#zAdd")) { $("#bus").checked = !$("#bus").checked; calc(); showZone(false); } });
  $("#bubbles").addEventListener("click", function (e) { var b = e.target.closest(".bub"); if (b) openStory(+b.dataset.s); });
  $("#svN").addEventListener("click", function () { stepStory(doc.dir === "rtl" ? -1 : 1); });
  $("#svP").addEventListener("click", function () { stepStory(doc.dir === "rtl" ? 1 : -1); });
  $("#svX").addEventListener("click", closeStory);
  document.addEventListener("keydown", function (e) {
    if ($("#sv").hidden) return;
    if (e.key === "Escape") closeStory(); else if (e.key === "ArrowRight") stepStory(doc.dir === "rtl" ? -1 : 1); else if (e.key === "ArrowLeft") stepStory(doc.dir === "rtl" ? 1 : -1);
    else if (e.key === "Tab") { var f = [$("#svX"), $("#svP"), $("#svN")], i = f.indexOf(document.activeElement); e.preventDefault(); f[(i + (e.shiftKey ? 2 : 1)) % 3].focus(); }
  });
  $("#f").dob.addEventListener("change", renderAuto);
  $("#f").dob.max = new Date().toISOString().slice(0, 10);
  $("#back").addEventListener("click", function () { if (step) { step--; $("#msg").textContent = ""; renderStep(); } });
  $("#next").addEventListener("click", function () {
    var t = I[lang], f = $("#f");
    if (step === 0 && (!f.kid.value.trim() || !grp())) { $("#msg").textContent = t.e0; (f.kid.value.trim() ? f.dob : f.kid).focus(); return; }
    if (step === 1 && (!f.name.value.trim() || !/^0[5-7]\d{8}$/.test(f.tel.value.replace(/\s/g, "")))) { $("#msg").textContent = t.e1; (f.name.value.trim() ? f.tel : f.name).focus(); return; }
    $("#msg").textContent = "";
    if (step === 2) { summary(); $("#msg").textContent = t.demo; return; }
    step++; renderStep();
    if (!STATIC) gsap.from('.pane[data-p="' + step + '"] > *', { x: doc.dir === "rtl" ? -30 : 30, opacity: 0, duration: .45, stagger: .05, ease: "power3.out" });
  });
  $("#docs").addEventListener("change", summary);
  $("#f").addEventListener("submit", function (e) { e.preventDefault(); $("#next").click(); });
  $("#waf").addEventListener("click", function () { openWa(); });
  $("#faqL").addEventListener("click", function (e) { var b = e.target.closest(".qchips button"); if (!b) return; faqI = +b.dataset.q; showFaq(true); });
  $("#footWa").addEventListener("click", function () { openWa(); });

  var lenis = null;
  render();
  if (STATIC) return;

  gsap.registerPlugin(ScrollTrigger);
  lenis = window.Lenis ? new Lenis({ lerp: 0.1 }) : null;
  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach(function (a) { a.addEventListener("click", function (e) { var id = a.getAttribute("href"); if (id.length < 2) return; var el = $(id); if (!el) return; e.preventDefault(); lenis.scrollTo(el, { offset: id === "#top" ? 0 : -90 }); }); });
  }

  /* hero: words bounce in, cards deal onto the table, sticker pops */
  gsap.from(".hero .lbl, .hero h1 > span, .hero p, .hero .acts, .pills span", { y: 50, opacity: 0, rotation: 2, duration: .9, stagger: .08, ease: "back.out(1.7)", delay: .1 });
  gsap.from("#stack .card", { y: 300, x: function (i) { return (i - 2) * 80; }, rotation: function (i) { return (i - 2) * 18; }, opacity: 0, duration: 1, stagger: { each: .1, from: "end" }, ease: "back.out(1.3)", delay: .3 });
  gsap.from(".sticker", { scale: 0, rotation: -120, duration: 1, ease: "back.out(2)", delay: 1.1 });
  setTimeout(startAuto, 2500);
  ScrollTrigger.batch("[data-up]", { start: "top 88%", once: true, onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, rotation: 0, duration: .9, stagger: .1, ease: "back.out(1.4)" }); } });
  ScrollTrigger.create({ trigger: "#ramassage", start: "top 60%", once: true, onEnter: function () { showZone(false); } });

  function bindDynamic() {
    [].concat.apply([], dyn).forEach(function (x) { if (x.targets || x.getChildren) x.revert(); else if (x.kill) x.kill(); }); dyn = [];
    dyn.push(gsap.from(".out", { y: 60, rotation: 2, opacity: 0, duration: 1, ease: "back.out(1.3)", scrollTrigger: { trigger: ".plan", start: "top 70%" } }));
    dyn.push(gsap.fromTo("#zones button", { y: 20, opacity: 0, scale: .8 }, { y: 0, opacity: 1, scale: 1, clearProps: "transform,opacity", duration: .5, stagger: .05, ease: "back.out(2)", scrollTrigger: { trigger: "#zones", start: "top 85%" } }));
    dyn.push(gsap.fromTo("#groups .gc", { y: 100, rotation: function (i) { return (i - 1) * 8; }, opacity: 0 }, { y: 0, rotation: function (i) { return [-2, 0, 2][i]; }, opacity: 1, clearProps: "transform,opacity", duration: 1.1, stagger: .12, ease: "back.out(1.3)", scrollTrigger: { trigger: "#groups", start: "top 82%" } }));
    dyn.push(gsap.from("#bubbles .bub", { scale: 0, rotation: -40, duration: .7, stagger: .08, ease: "back.out(2.2)", scrollTrigger: { trigger: "#bubbles", start: "top 85%" } }));
    dyn.push(gsap.from("#mosaic > div", { clipPath: "circle(0% at 50% 50%)", duration: 1.2, stagger: .1, ease: "power3.out", scrollTrigger: { trigger: "#mosaic", start: "top 80%" } }));
    dyn.push(gsap.from("#ag .ev", { y: 80, opacity: 0, duration: .9, stagger: .1, ease: "power3.out", scrollTrigger: { trigger: "#ag", start: "top 82%" } }));
    dyn.push(gsap.fromTo("#cstImg", { yPercent: -6, scale: 1.1 }, { yPercent: 6, scale: 1, ease: "none", scrollTrigger: { trigger: ".cst", start: "top bottom", end: "bottom top", scrub: true } }));
    dyn.push(gsap.from("#polas .pola", { y: 120, rotation: function (i) { return [-25, 20, -12][i]; }, opacity: 0, duration: 1, stagger: .12, ease: "back.out(1.5)", scrollTrigger: { trigger: "#polas", start: "top 92%" } }));
  }
  bindDynamic();
  ready = true;
  var rz, lw = innerWidth; window.addEventListener("resize", function () { if (innerWidth === lw) return; lw = innerWidth; clearTimeout(rz); rz = setTimeout(function () { ScrollTrigger.refresh(); }, 300); });
})();
