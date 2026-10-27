/* Nakhla : contenu FR / AR / EN, maison-école interactive, simulateur de micro-projet, horaires, galerie, tarifs, FAQ en arches (GSAP + ScrollTrigger + Lenis, en local) */
(function () {
  var doc = document.documentElement;
  var STATIC = doc.classList.contains("static") || !window.gsap || !window.ScrollTrigger;
  if (STATIC) doc.classList.add("static");
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  function L(o) { return o[lang]; }
  function T(fr, ar, en) { return { fr: fr, ar: ar, en: en }; }
  var P = { ghardaia: [906, "mido art"], ruelle: [1707, "Ãbdøû Mâïstrø"], vallee: [960, "Tarek Nacer"], palmes: [1600, "youcef habib zitani"], couchant: [1600, "youcef habib zitani"], artisan: [853, "Amara Saleh"], couture: [822, "Khang Nguyen"], aiguille: [853, "Alexander Grey"], patisserie: [853, "Nadya Spetnitskaya"], boulange: [853, "Victor Rodríguez Iglesias"], tapis: [1920, "Paolo Bici"], fils: [854, "Sergio Gonzalez"], palmeraie: [849, "Oleg"], dattes: [1920, "Raúl Mermans García"], solaire: [854, "Markus Spiske"] };
  function img(n, sizes) { var big = n === "ghardaia" || n === "couchant" || n === "palmeraie"; return '<img src="assets/img/' + n + '-640.webp" srcset="assets/img/' + n + '-640.webp 640w, assets/img/' + n + '-1280.webp 1280w' + (big ? ", assets/img/" + n + "-1920.webp 1920w" : "") + '" sizes="' + (sizes || "50vw") + '" width="1280" height="' + P[n][0] + '" alt="" loading="lazy" decoding="async">'; }
  function cur() { return lang === "ar" ? "دج" : "DA"; }
  function da(n) { return "⁦" + Math.round(n).toLocaleString("fr-FR").replace(/ | /g, " ") + "⁩ " + cur(); }

  var F = [
    { room: "e1", img: "couture", t: T("Couture et confection", "الخياطة والتفصيل", "Sewing and dressmaking"), m: 6, p: 48000, w: T("Femmes le matin, mixte le soir", "النساء صباحًا، مختلط مساءً", "Women in the morning, mixed in the evening"),
      mod: T(["Prise de mesures et patronage", "Robes, gandouras et tenues de fête", "Retouches et ourlets", "Finitions et broderie à la machine"], ["أخذ المقاسات ورسم الباترون", "الفساتين والقنادر وألبسة الأعراس", "التعديلات والحواشي", "التشطيب والتطريز الآلي"], ["Measuring and pattern-making", "Dresses, gandouras and party outfits", "Alterations and hems", "Finishing and machine embroidery"]), kit: T("Une machine par stagiaire, tissu fourni", "آلة لكل متربصة، والقماش مجاني", "A machine each, fabric provided") },
    { room: "e2", img: "patisserie", t: T("Pâtisserie traditionnelle et moderne", "الحلويات التقليدية والعصرية", "Traditional and modern pastry"), m: 3, p: 42000, w: T("Femmes le matin", "النساء صباحًا", "Women in the morning"),
      mod: T(["Gâteaux secs et gâteaux au miel", "Pâte d’amande et décor", "Gâteaux de fête et pièces montées", "Hygiène, coûts et prix de vente"], ["الحلويات الجافة وحلويات العسل", "عجينة اللوز والتزيين", "حلويات الأعراس والقطع المركّبة", "النظافة والتكاليف وسعر البيع"], ["Dry and honey cakes", "Almond paste and decoration", "Party cakes and tiered pieces", "Hygiene, costs and pricing"]), kit: T("Ingrédients et four de l’atelier", "المكوّنات وفرن الورشة", "Ingredients and the workshop oven") },
    { room: "e3", img: "boulange", t: T("Cuisine et traiteur", "الطبخ والممون", "Cooking and catering"), m: 3, p: 40000, w: T("Femmes le matin, mixte le soir", "النساء صباحًا، مختلط مساءً", "Women in the morning, mixed in the evening"),
      mod: T(["Plats du Sud et de toute l’Algérie", "Pains et galettes", "Organiser un repas de 100 personnes", "Hygiène et conservation"], ["أطباق الجنوب وكل الجزائر", "الخبز والكسرة", "تنظيم وجبة لـ 100 شخص", "النظافة والحفظ"], ["Dishes from the South and all of Algeria", "Breads and flatbreads", "Planning a meal for 100 guests", "Hygiene and storage"]), kit: T("Cuisine équipée et ingrédients", "مطبخ مجهّز ومكوّنات", "Equipped kitchen and ingredients") },
    { room: "r1", wide: 1, img: "tapis", t: T("Tissage du tapis", "نسج الزربية", "Rug weaving"), m: 4, p: 35000, w: T("Femmes, du samedi au mercredi", "النساء، من السبت إلى الأربعاء", "Women, Saturday to Wednesday"),
      mod: T(["Monter un métier à tisser", "Motifs du M’zab et nœuds", "Teinture de la laine", "Vendre son tapis : prix et photos"], ["تركيب المنسج", "زخارف ميزاب والعقد", "صباغة الصوف", "بيع الزربية: السعر والصور"], ["Setting up a loom", "M’zab patterns and knots", "Dyeing wool", "Selling your rug: price and photos"]), kit: T("Métier à tisser et laine fournis", "المنسج والصوف مجانًا", "Loom and wool provided") },
    { room: "r2", img: "artisan", t: T("Artisanat : bois et cuir", "الحرف: الخشب والجلد", "Crafts: wood and leather"), m: 3, p: 30000, w: T("Mixte, le soir", "مختلط، مساءً", "Mixed, evenings"),
      mod: T(["Outils et sécurité", "Objets en bois de palmier", "Maroquinerie simple", "Vendre aux touristes et en ligne"], ["الأدوات والسلامة", "مصنوعات من خشب النخيل", "الجلديات البسيطة", "البيع للسياح وعبر الإنترنت"], ["Tools and safety", "Palm-wood objects", "Simple leatherwork", "Selling to visitors and online"]), kit: T("Outillage de l’atelier", "أدوات الورشة", "Workshop tools") },
    { room: "t", img: "solaire", t: T("Installation de panneaux solaires", "تركيب الألواح الشمسية", "Solar panel installation"), m: 3, p: 62000, w: T("Le samedi, toute la journée", "يوم السبت، طوال اليوم", "Saturdays, all day"),
      mod: T(["Bases de l’électricité", "Panneaux, onduleurs, batteries", "Pose sur toit et au sol", "Pompage solaire pour l’agriculture"], ["أساسيات الكهرباء", "الألواح، المحوّلات، البطاريات", "التركيب على السطح والأرض", "الضخ الشمسي للفلاحة"], ["Electrical basics", "Panels, inverters, batteries", "Roof and ground mounting", "Solar pumping for farms"]), kit: T("Kit solaire d’entraînement sur la terrasse", "عدّة شمسية للتدريب على السطح", "Training solar kit on the roof") },
    { room: "g", img: "dattes", t: T("Culture du palmier dattier", "زراعة النخيل", "Date palm growing"), m: 2, p: 25000, w: T("Jeudi et samedi, dans la palmeraie", "الخميس والسبت، في الواحة", "Thursday and Saturday, in the palm grove"),
      mod: T(["Pollinisation et taille", "Irrigation et foggara", "Récolte et tri des dattes", "Conditionnement et vente"], ["التلقيح والتقليم", "السقي والفقارة", "جني التمور وفرزها", "التعبئة والبيع"], ["Pollination and pruning", "Irrigation and foggara", "Harvesting and sorting dates", "Packing and selling"]), kit: T("Sorties dans une palmeraie partenaire", "خرجات إلى واحة شريكة", "Visits to a partner palm grove") }
  ];
  var SIM = [
    { f: 0, t: T("Couture", "الخياطة", "Sewing"), unit: T("tenue", "قطعة", "outfit"), p: 4000, q: 5, c: 40, qmax: 20 },
    { f: 1, t: T("Pâtisserie", "الحلويات", "Pastry"), unit: T("plateau de 1 kg", "صينية 1 كغ", "1 kg tray"), p: 2500, q: 12, c: 45, qmax: 40 },
    { f: 3, t: T("Tapis", "الزربية", "Rugs"), unit: T("tapis d’1 m²", "زربية 1 م²", "1 m² rug"), p: 25000, q: 1, c: 50, qmax: 4 },
    { f: 2, t: T("Traiteur", "الممون", "Catering"), unit: T("repas", "وجبة", "meal"), p: 600, q: 80, c: 55, qmax: 300 }
  ];
  var GAL = ["vallee", "artisan", "palmeraie", "fils", "aiguille", "boulange", "palmes", "ruelle"];
  var COMM = ["Ghardaïa", "Beni Isguen", "Melika", "Bounoura", "El Atteuf", "Metlili", "Berriane", "Guerrara"];
  var RAMP = [.3, .5, .7, .85, 1, 1, 1, 1, 1, 1, 1, 1];

  var I = {
    fr: { brand: "Nakhla", demo0: "Site de démonstration, école fictive.", demo1: "Autres modèles", n1: "La maison", n2: "Mon projet", n3: "Horaires", n4: "Tarifs", n5: "Inscription",
      h1: "Un métier dans les mains, <span>au cœur du M’zab.</span>", hP: "Couture, tapis, pâtisserie, cuisine, artisanat, solaire et palmier dattier : sept formations pratiques à Ghardaïa, avec des groupes réservés aux femmes le matin.", hB1: "Visiter l’école", hB2: "Calculer mon projet", sealB: "Groupes femmes", sealS: "chaque matin",
      mH: "Entrez dans la maison.", mP: "L’école est une maison du M’zab : chaque pièce est un atelier. Touchez une pièce pour voir la formation qui s’y donne.", floors: ["La terrasse", "Premier étage", "Rez-de-chaussée"], garden: "La palmeraie", mo: "{n} mois", book: "Je m’inscris à cet atelier", kitL: "Fourni :", whenL: "Quand :",
      pH: "Du métier au projet.", pP: "Beaucoup de nos stagiaires travaillent ensuite depuis la maison. Mettez vos propres chiffres et voyez ce que l’activité peut rapporter.", sAct: "Activité", sPrice: "Prix de vente d’un(e) {u}", sQty: "{u} vendu(e)s par semaine", sCost: "Matière et frais", sMonth: "Bénéfice par mois, une fois lancé", sYear: "Sur la première année", mths: ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12"], sNote: "Calcul indicatif avec vos chiffres. On suppose un démarrage progressif sur les quatre premiers mois. Les dispositifs publics d’aide à la création d’activité peuvent financer le matériel : nous vous aidons à monter le dossier.",
      hH: "Des horaires pour chacun.", hPl: "Le matin entre femmes, le soir pour ceux qui travaillent, le week-end pour le solaire.",
      hor: [["Groupes femmes", "8 h 30 – 12 h, encadrés par des formatrices", [["Couture", "sam, lun, mer"], ["Pâtisserie", "dim, mar"], ["Tissage du tapis", "sam → mer"], ["Cuisine et traiteur", "jeu"]]], ["Groupes du soir et week-end", "16 h – 19 h, mixtes", [["Artisanat bois et cuir", "dim, mar, jeu"], ["Couture du soir", "lun, mer"], ["Cuisine et traiteur", "dim, mar"], ["Solaire", "sam 8 h – 16 h"], ["Palmier dattier", "jeu et sam matin"]]]],
      gH: "Ghardaïa, notre atelier.", gal: ["La vallée du M’zab", "Un artisan au travail", "La palmeraie", "Les fils du métier à tisser", "À la machine", "Le pain du matin", "Sous les palmes", "Une ruelle de la vieille ville"],
      tH: "Les prix, comme au souk : clairs.", tP: "Prix total de chaque formation, matière première des ateliers comprise. Paiement au mois possible.", perM: "soit {p} par mois", incl: ["Matière première comprise", "Attestation de l’école", "Paiement au mois", "Frais de dossier : 1 500 DA"],
      qH: "On nous demande souvent.", F: [["Les groupes femmes sont-ils vraiment séparés ?", "Oui. Le matin, les ateliers de couture, pâtisserie, cuisine et tapis sont réservés aux femmes, avec des formatrices."], ["Faut-il un diplôme ?", "Non, sauf pour le solaire où savoir lire et compter suffit. On demande surtout de la motivation."], ["Je peux venir avec mon bébé ?", "Un petit coin garderie est surveillé le matin, sur réservation, dans la limite des places."], ["Est-ce que je garde ce que je fabrique ?", "Oui : gâteaux, tenues, tapis ou objets, vos réalisations repartent avec vous."], ["Et après la formation ?", "On vous aide à préparer un dossier de micro-projet et à trouver vos premiers clients, en boutique ou en ligne."], ["Comment payer ?", "En espèces à l’accueil, par CCP ou BaridiMob, en une fois ou au mois."]],
      iH: "Réservez votre place.", iP: "Laissez votre numéro : une formatrice ou un formateur vous rappelle pour l’entretien et la visite des ateliers.", l1: "Prénom et nom", l2: "Téléphone", l3: "Formation", l4: "Commune", l5: "Groupe", grp: ["Femmes, le matin", "Le soir", "Le week-end"], other: "Autre commune", send: "Réserver ma place", err: "Indiquez votre nom et un numéro valide (05, 06 ou 07).", demo: "Démo AFEX Digital : aucune réservation n’a été envoyée, ce formulaire n’est pas encore connecté.",
      vH: "Dans la vallée du M’zab", vP: "Adresse de démonstration, Ghardaïa. Samedi → jeudi, 8 h – 19 h.",
      foA: "Nakhla, école fictive", foAd: "Formation polyvalente, Ghardaïa.", foH: "Horaires", foHv: "Samedi → jeudi, 8 h – 19 h.", foL: "Ateliers", foLv: "Couture, tapis, pâtisserie, cuisine, artisanat, solaire, palmeraie.", foC: "Contact", foCv: "Téléphone : numéro de démonstration.", foot: "© 2026 Nakhla, école fictive.", by: "Site réalisé par", photos: "Photos : Unsplash,", waT: "Écrire sur WhatsApp", lang: "Langue",
      ghAlt: "Ghardaïa et ses maisons au pied de la colline", tapisAlt: "Un tapis en cours de tissage sur un métier", ruelleAlt: "Une ruelle de Ghardaïa aux murs ocre", couchAlt: "Des palmiers au coucher du soleil", title: "Nakhla, école de formation polyvalente à Ghardaïa", loc: "fr-FR" },
    ar: { brand: "نخلة", demo0: "موقع تجريبي، مدرسة وهمية.", demo1: "نماذج أخرى", n1: "الدار", n2: "مشروعي", n3: "التوقيت", n4: "الأسعار", n5: "التسجيل",
      h1: "حرفة بين يديك، <span>في قلب ميزاب.</span>", hP: "الخياطة، الزربية، الحلويات، الطبخ، الحرف، الطاقة الشمسية والنخيل: سبعة تكوينات تطبيقية في غرداية، مع أفواج خاصة بالنساء صباحًا.", hB1: "زر المدرسة", hB2: "احسب مشروعي", sealB: "أفواج النساء", sealS: "كل صباح",
      mH: "ادخل الدار.", mP: "المدرسة دار ميزابية: كل غرفة ورشة. المس غرفة لترى التكوين الذي يُقدَّم فيها.", floors: ["السطح", "الطابق الأول", "الطابق الأرضي"], garden: "الواحة", mo: "{n} أشهر", book: "أسجّل في هذه الورشة", kitL: "المتوفّر:", whenL: "التوقيت:",
      pH: "من الحرفة إلى المشروع.", pP: "كثير من متربصاتنا يعملن بعدها من البيت. ضع أرقامك وانظر ما يمكن أن يدرّه النشاط.", sAct: "النشاط", sPrice: "سعر بيع {u}", sQty: "{u} مباعة في الأسبوع", sCost: "المواد والمصاريف", sMonth: "الربح الشهري بعد الانطلاق", sYear: "خلال السنة الأولى", mths: ["ش1", "ش2", "ش3", "ش4", "ش5", "ش6", "ش7", "ش8", "ش9", "ش10", "ش11", "ش12"], sNote: "حساب تقريبي بأرقامك. نفترض انطلاقًا تدريجيًا خلال الأشهر الأربعة الأولى. يمكن لأجهزة الدعم العمومية لإنشاء النشاط تمويل المعدّات: نساعدك في إعداد الملف.",
      hH: "توقيت يناسب الجميع.", hPl: "الصباح بين النساء، المساء لمن يعمل، ونهاية الأسبوع للطاقة الشمسية.",
      hor: [["أفواج النساء", "8:30 – 12:00، بتأطير مكوّنات", [["الخياطة", "السبت، الاثنين، الأربعاء"], ["الحلويات", "الأحد، الثلاثاء"], ["نسج الزربية", "السبت ← الأربعاء"], ["الطبخ والممون", "الخميس"]]], ["أفواج المساء ونهاية الأسبوع", "16:00 – 19:00، مختلطة", [["حرف الخشب والجلد", "الأحد، الثلاثاء، الخميس"], ["الخياطة المسائية", "الاثنين، الأربعاء"], ["الطبخ والممون", "الأحد، الثلاثاء"], ["الطاقة الشمسية", "السبت 8:00 – 16:00"], ["النخيل", "الخميس والسبت صباحًا"]]]],
      gH: "غرداية، ورشتنا.", gal: ["وادي ميزاب", "حرفي في عمله", "الواحة", "خيوط المنسج", "على الآلة", "خبز الصباح", "تحت النخيل", "زقاق في المدينة القديمة"],
      tH: "الأسعار، كما في السوق: واضحة.", tP: "السعر الكامل لكل تكوين، مع المواد الأولية للورشات. يمكن الدفع شهريًا.", perM: "أي {p} شهريًا", incl: ["المواد الأولية مشمولة", "شهادة المدرسة", "الدفع شهريًا", "مصاريف الملف: 1 500 دج"],
      qH: "يسألوننا كثيرًا.", F: [["هل أفواج النساء منفصلة فعلًا؟", "نعم. صباحًا، ورشات الخياطة والحلويات والطبخ والزربية خاصة بالنساء، بتأطير مكوّنات."], ["هل يلزم شهادة؟", "لا، إلا للطاقة الشمسية حيث تكفي القراءة والحساب. نطلب قبل كل شيء العزيمة."], ["هل أستطيع المجيء مع رضيعي؟", "ركن صغير للحضانة مراقَب صباحًا، بالحجز وفي حدود الأماكن."], ["هل أحتفظ بما أصنعه؟", "نعم: الحلويات، الألبسة، الزرابي أو المصنوعات، أعمالك تعود معك."], ["وبعد التكوين؟", "نساعدك في إعداد ملف مشروع صغير وإيجاد أول زبائنك، في محل أو عبر الإنترنت."], ["كيف أدفع؟", "نقدًا في الاستقبال، عبر CCP أو BaridiMob، مرة واحدة أو شهريًا."]],
      iH: "احجز مكانك.", iP: "اترك رقمك: تتصل بك مكوّنة أو مكوّن للمقابلة وزيارة الورشات.", l1: "الاسم واللقب", l2: "الهاتف", l3: "التكوين", l4: "البلدية", l5: "الفوج", grp: ["النساء، صباحًا", "المساء", "نهاية الأسبوع"], other: "بلدية أخرى", send: "احجز مكاني", err: "أدخل اسمك ورقمًا صحيحًا (05 أو 06 أو 07).", demo: "عرض AFEX Digital: لم يُرسل أي حجز، هذا النموذج غير متصل بعد.",
      vH: "في وادي ميزاب", vP: "عنوان للعرض، غرداية. من السبت إلى الخميس، 8:00 – 19:00.",
      foA: "نخلة، مدرسة وهمية", foAd: "تكوين متعدد التخصصات، غرداية.", foH: "التوقيت", foHv: "من السبت إلى الخميس، 8:00 – 19:00.", foL: "الورشات", foLv: "الخياطة، الزربية، الحلويات، الطبخ، الحرف، الطاقة الشمسية، النخيل.", foC: "الاتصال", foCv: "الهاتف: رقم تجريبي.", foot: "© 2026 نخلة، مدرسة وهمية.", by: "موقع من إنجاز", photos: "الصور: Unsplash،", waT: "راسلنا على واتساب", lang: "اللغة",
      ghAlt: "غرداية وبيوتها عند سفح التلة", tapisAlt: "زربية قيد النسج على المنسج", ruelleAlt: "زقاق في غرداية بجدران مغرّة", couchAlt: "نخيل عند الغروب", title: "نخلة، مدرسة تكوين متعدد التخصصات في غرداية", loc: "ar-DZ" },
    en: { brand: "Nakhla", demo0: "Demo website, fictional school.", demo1: "Other templates", n1: "The house", n2: "My project", n3: "Timetable", n4: "Fees", n5: "Enrol",
      h1: "A trade in your hands, <span>in the heart of the M’zab.</span>", hP: "Sewing, rugs, pastry, cooking, crafts, solar and date palms: seven hands-on courses in Ghardaïa, with women-only groups every morning.", hB1: "Visit the school", hB2: "Work out my project", sealB: "Women’s groups", sealS: "every morning",
      mH: "Step inside the house.", mP: "The school is a M’zab house: every room is a workshop. Tap a room to see the course taught there.", floors: ["The roof terrace", "First floor", "Ground floor"], garden: "The palm grove", mo: "{n} months", book: "Enrol in this workshop", kitL: "Provided:", whenL: "When:",
      pH: "From skill to business.", pP: "Many of our trainees go on to work from home. Enter your own figures and see what the activity could bring in.", sAct: "Activity", sPrice: "Selling price of one {u}", sQty: "{u}s sold per week", sCost: "Materials and costs", sMonth: "Monthly profit once up and running", sYear: "Over the first year", mths: ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12"], sNote: "A rough estimate using your figures, assuming a gradual start over the first four months. Public business-start-up schemes can fund equipment: we help you put the file together.",
      hH: "A timetable for everyone.", hPl: "Women together in the morning, evenings for people who work, weekends for solar.",
      hor: [["Women’s groups", "8:30 – 12:00, taught by women trainers", [["Sewing", "Sat, Mon, Wed"], ["Pastry", "Sun, Tue"], ["Rug weaving", "Sat → Wed"], ["Cooking and catering", "Thu"]]], ["Evening and weekend groups", "16:00 – 19:00, mixed", [["Wood and leather crafts", "Sun, Tue, Thu"], ["Evening sewing", "Mon, Wed"], ["Cooking and catering", "Sun, Tue"], ["Solar", "Sat 8:00 – 16:00"], ["Date palms", "Thu and Sat mornings"]]]],
      gH: "Ghardaïa, our workshop.", gal: ["The M’zab valley", "A craftsman at work", "The palm grove", "Threads on the loom", "At the machine", "Morning bread", "Under the palms", "A lane in the old town"],
      tH: "Prices as clear as the souk.", tP: "Full price for each course, workshop materials included. Monthly payment available.", perM: "or {p} a month", incl: ["Materials included", "School certificate", "Monthly payment", "File fee: 1,500 DA"],
      qH: "What people often ask.", F: [["Are the women’s groups really separate?", "Yes. In the morning, the sewing, pastry, cooking and rug workshops are for women only, with women trainers."], ["Do I need a diploma?", "No, except for solar, where reading and basic maths are enough. Motivation matters most."], ["Can I bring my baby?", "A small supervised childcare corner is open in the mornings, by booking, while places last."], ["Do I keep what I make?", "Yes: cakes, outfits, rugs or objects, your work goes home with you."], ["What happens after the course?", "We help you prepare a small-business file and find your first customers, in a shop or online."], ["How do I pay?", "Cash at reception, CCP or BaridiMob, in one go or monthly."]],
      iH: "Book your place.", iP: "Leave your number: a trainer will call you for an interview and a tour of the workshops.", l1: "Full name", l2: "Phone", l3: "Course", l4: "Town", l5: "Group", grp: ["Women, mornings", "Evenings", "Weekends"], other: "Other town", send: "Book my place", err: "Enter your name and a valid number (05, 06 or 07).", demo: "AFEX Digital demo: no booking was sent, this form is not connected yet.",
      vH: "In the M’zab valley", vP: "Demo address, Ghardaïa. Saturday → Thursday, 8:00 – 19:00.",
      foA: "Nakhla, a fictional school", foAd: "Multi-trade training, Ghardaïa.", foH: "Hours", foHv: "Saturday → Thursday, 8:00 – 19:00.", foL: "Workshops", foLv: "Sewing, rugs, pastry, cooking, crafts, solar, palm grove.", foC: "Contact", foCv: "Phone: demo number.", foot: "© 2026 Nakhla, a fictional school.", by: "Website by", photos: "Photos: Unsplash,", waT: "Message us on WhatsApp", lang: "Language",
      ghAlt: "Ghardaïa’s houses at the foot of the hill", tapisAlt: "A rug being woven on a loom", ruelleAlt: "A Ghardaïa lane with ochre walls", couchAlt: "Palm trees at sunset", title: "Nakhla, multi-trade training school in Ghardaïa", loc: "en-GB" }
  };

  var lang = "fr", room = 0, si = 0, sv = { p: SIM[0].p, q: SIM[0].q, c: SIM[0].c }, ready = false, dyn = [];
  try { var sl = localStorage.getItem("nakhla-lang"); if (I[sl]) lang = sl; } catch (e) {}
  function go(s) { var el = $(s); if (!el) return; if (lenis) lenis.scrollTo(el, { offset: -80 }); else el.scrollIntoView(); }
  function openWa() { var m = { fr: "Bonjour AFEX Digital, je viens du site de démonstration « " + document.title + " ». Je veux un site comme celui-ci.", ar: "مرحبًا AFEX Digital، أتيت من الموقع التجريبي « " + document.title + " ». أريد موقعًا مثله.", en: "Hello AFEX Digital, I found the demo site “" + document.title + "”. I would like a website like this one." }; window.open("https://wa.me/213550284873?text=" + encodeURIComponent(m[lang] || m.fr), "_blank", "noopener"); }

  /* house */
  function rb(i, cls) { var f = F[i]; return '<button type="button" class="room ' + (cls || "") + '" data-r="' + i + '" aria-pressed="' + (i === room) + '"><b>' + L(f.t) + "</b><small>" + I[lang].mo.replace("{n}", f.m) + " · " + da(f.p) + '</small><span class="door" aria-hidden="true"></span></button>'; }
  function renderHouse() {
    var t = I[lang];
    $("#house").innerHTML = '<div class="roofl">' + t.floors[0] + "</div>" + rb(5, "terr") + '<div class="flr">' + t.floors[1] + "</div>" + rb(0) + rb(1) + rb(2) + '<div class="flr">' + t.floors[2] + "</div>" + rb(3, "wide") + rb(4) + rb(6, "garden");
    $("#house").setAttribute("aria-label", t.mH);
  }
  function renderPanel(anim) {
    var t = I[lang], f = F[room];
    $("#panel").innerHTML = '<div class="ph">' + img(f.img, "(min-width:1060px) 44vw, 92vw") + '</div><div class="bd"><h3>' + L(f.t) + '</h3><div class="facts"><span>' + t.mo.replace("{n}", f.m) + "</span><span>" + da(f.p) + "</span></div><p><b>" + t.whenL + "</b> " + L(f.w) + "</p><ul>" + L(f.mod).map(function (m) { return "<li>" + m + "</li>"; }).join("") + "</ul><p><b>" + t.kitL + "</b> " + L(f.kit) + '</p><a class="btn c" href="#inscription" data-book="' + room + '" style="justify-self:start">' + t.book + "</a></div>";
    if (anim && !STATIC) gsap.fromTo("#panel .ph img, #panel .bd > *", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: .45, stagger: .04, clearProps: "transform,opacity" });
  }
  /* simulator */
  function renderSctl() {
    var t = I[lang], s = SIM[si], u = L(s.unit);
    $("#sctl").innerHTML = '<div><b style="display:block;margin-bottom:8px">' + t.sAct + '</b><div class="acts2" role="group">' + SIM.map(function (x, i) { return '<button type="button" data-s="' + i + '" aria-pressed="' + (i === si) + '">' + L(x.t) + "</button>"; }).join("") + '</div></div><label><span>' + t.sPrice.replace("{u}", u) + ' <output id="oP">' + da(sv.p) + '</output></span><input type="range" id="iP" min="' + Math.round(s.p * .3) + '" max="' + s.p * 3 + '" step="' + (s.p >= 10000 ? 1000 : s.p >= 2000 ? 100 : 50) + '" value="' + sv.p + '"></label><label><span>' + t.sQty.replace("{u}", u) + ' <output id="oQ">' + sv.q + '</output></span><input type="range" id="iQ" min="' + (s.qmax <= 4 ? .5 : 1) + '" max="' + s.qmax + '" step="' + (s.qmax <= 4 ? .5 : 1) + '" value="' + sv.q + '"></label><label><span>' + t.sCost + ' <output id="oC">' + sv.c + ' %</output></span><input type="range" id="iC" min="10" max="80" step="5" value="' + sv.c + '"></label>';
  }
  function renderSres() {
    var t = I[lang], month = sv.p * sv.q * 4.3 * (1 - sv.c / 100), year = RAMP.reduce(function (a, r) { return a + r * month; }, 0), mx = month || 1;
    $("#oP").textContent = da(sv.p); $("#oQ").textContent = sv.q; $("#oC").textContent = sv.c + " %";
    $("#sres").innerHTML = "<small>" + t.sMonth + '</small><div class="big">' + da(Math.round(month / 100) * 100) + '</div><div class="bars" aria-hidden="true">' + RAMP.map(function (r, i) { return '<div><i style="height:' + Math.max(4, r * month / mx * 100) + '%"></i><small>' + t.mths[i] + "</small></div>"; }).join("") + "</div><p><b>" + t.sYear + " :</b> " + da(Math.round(year / 100) * 100) + '</p><p class="snote">' + t.sNote + "</p>";
  }
  /* other */
  function renderHor() { var t = I[lang]; $("#hor").innerHTML = t.hor.map(function (h, i) { return '<div class="hcard ' + (i ? "m" : "f") + '" data-up><h3>' + h[0] + "</h3><p>" + h[1] + "</p><ul>" + h[2].map(function (x) { return "<li><span>" + x[0] + "</span><b>" + x[1] + "</b></li>"; }).join("") + "</ul></div>"; }).join(""); }
  function renderGal() { var t = I[lang]; $("#gal").innerHTML = GAL.map(function (g, i) { return "<figure>" + img(g, "(min-width:1060px) 30vw, 92vw") + "<figcaption>" + t.gal[i] + "</figcaption></figure>"; }).join(""); }
  function renderMenu() { var t = I[lang]; $("#menu").innerHTML = F.map(function (f) { return "<div><span style=\"flex:none;max-width:70%\"><b>" + L(f.t) + "</b><small>" + t.mo.replace("{n}", f.m) + " · " + t.perM.replace("{p}", da(Math.ceil(f.p / f.m / 100) * 100)) + "</small></span><i></i><span>" + da(f.p) + "</span></div>"; }).join(""); $("#incl").innerHTML = t.incl.map(function (x) { return "<span>" + x + "</span>"; }).join(""); }
  function renderFaq() { $("#arches").innerHTML = I[lang].F.map(function (f, i) { return '<article class="arch"><span class="n">' + (i + 1) + '</span><p class="q">' + f[0] + "</p><p>" + f[1] + "</p></article>"; }).join(""); }
  function renderForm() {
    var t = I[lang], f = $("#f"), keep = f.elements.length ? { name: f.name.value, tel: f.tel.value } : null;
    f.innerHTML = '<div class="r2"><label>' + t.l1 + '<input name="name" autocomplete="name"></label><label>' + t.l2 + '<input name="tel" type="tel" inputmode="tel" placeholder="05 / 06 / 07 …" autocomplete="tel"></label></div><div class="r2"><label>' + t.l3 + '<select name="fo" id="fFo">' + F.map(function (x, i) { return '<option value="' + i + '"' + (i === room ? " selected" : "") + ">" + L(x.t) + "</option>"; }).join("") + "</select></label><label>" + t.l4 + '<select name="com">' + COMM.map(function (c) { return "<option>" + c + "</option>"; }).join("") + "<option>" + t.other + '</option></select></label></div><fieldset style="border:0;display:grid;gap:8px"><legend style="font-weight:800;font-size:.94rem;margin-bottom:6px">' + t.l5 + '</legend><div class="seg">' + t.grp.map(function (g, i) { return '<label><input type="radio" name="grp" value="' + i + '"' + (i ? "" : " checked") + ">" + g + "</label>"; }).join("") + '</div></fieldset><button class="btn c" type="submit" style="justify-self:start">' + t.send + '</button><p id="msg" role="status"></p>';
    if (keep) { f.name.value = keep.name; f.tel.value = keep.tel; }
  }

  function render() {
    var t = I[lang];
    $("#h1").innerHTML = t.h1;
    renderHouse(); renderPanel(false); renderSctl(); renderSres(); renderHor(); renderGal(); renderMenu(); renderFaq(); renderForm();
    var names = []; Object.keys(P).forEach(function (k) { if (names.indexOf(P[k][1]) < 0) names.push(P[k][1]); });
    $("#credits").textContent = t.photos + " " + names.join(", ") + ".";
  }
  function setLang(l) {
    lang = l; var t = I[l];
    doc.lang = l; doc.dir = l === "ar" ? "rtl" : "ltr"; document.title = t.title;
    $$("[data-i]").forEach(function (e) { if (typeof t[e.dataset.i] === "string") e.textContent = t[e.dataset.i]; });
    $$("[data-alt]").forEach(function (e) { e.alt = t[e.dataset.alt]; });
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.l === l); });
    $(".lang").setAttribute("aria-label", t.lang);
    try { localStorage.setItem("nakhla-lang", l); } catch (e) {}
    render();
    if (ready) { bindDynamic(); ScrollTrigger.refresh(); }
  }

  /* events */
  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.l !== lang) setLang(b.dataset.l); }); });
  $("#house").addEventListener("click", function (e) { var b = e.target.closest("[data-r]"); if (!b) return; room = +b.dataset.r; $$("#house .room").forEach(function (x) { x.setAttribute("aria-pressed", +x.dataset.r === room); }); renderPanel(true); if (innerWidth < 1060) go("#panel"); });
  $("#sctl").addEventListener("click", function (e) { var b = e.target.closest("[data-s]"); if (!b) return; si = +b.dataset.s; sv = { p: SIM[si].p, q: SIM[si].q, c: SIM[si].c }; renderSctl(); renderSres(); if (!STATIC) gsap.from("#sres .bars i", { scaleY: 0, duration: .5, stagger: .03, ease: "power2.out", clearProps: "transform" }); });
  $("#sctl").addEventListener("input", function (e) { if (e.target.id === "iP") sv.p = +e.target.value; if (e.target.id === "iQ") sv.q = +e.target.value; if (e.target.id === "iC") sv.c = +e.target.value; renderSres(); });
  document.addEventListener("click", function (e) { var b = e.target.closest("[data-book]"); if (!b) return; e.preventDefault(); room = +b.dataset.book; var s = $("#fFo"); if (s) s.value = room; go("#inscription"); });
  $("#f").addEventListener("submit", function (e) { e.preventDefault(); var f = e.target, t = I[lang], m = $("#msg"); if (!f.name.value.trim() || !/^0[5-7]\d{8}$/.test(f.tel.value.replace(/\s/g, ""))) { m.textContent = t.err; m.className = "err"; (f.name.value.trim() ? f.tel : f.name).focus(); return; } m.className = ""; m.textContent = t.demo; });
  $("#waf").addEventListener("click", openWa);

  var lenis = null;
  setLang(lang);
  if (STATIC) return;

  gsap.registerPlugin(ScrollTrigger);
  lenis = window.Lenis ? new Lenis({ lerp: 0.1 }) : null;
  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    document.addEventListener("click", function (e) { var a = e.target.closest('a[href^="#"]'); if (!a || e.defaultPrevented) return; var id = a.getAttribute("href"); if (id.length < 2 || !$(id)) return; e.preventDefault(); lenis.scrollTo($(id), { offset: -80 }); });
  }
  gsap.from(".hero h1, .hero p, .hero .acts", { y: 36, opacity: 0, duration: 1, stagger: .1, ease: "power3.out" });
  gsap.from(".blob", { scale: .85, opacity: 0, rotation: -6, duration: 1.3, ease: "power3.out" });
  gsap.from(".hv .mini", { y: -40, opacity: 0, duration: 1, delay: .4, ease: "power3.out" });
  gsap.from(".seal", { scale: 0, rotation: -40, duration: .9, delay: .7, ease: "back.out(1.7)" });
  gsap.to(".blob", { borderRadius: "56% 44% 46% 54% / 52% 58% 42% 48%", duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });

  function bindDynamic() {
    [].concat.apply([], dyn).forEach(function (x) { if (x.targets || x.getChildren) x.revert(); else if (x.kill) x.kill(); }); dyn = [];
    dyn.push(ScrollTrigger.batch("[data-up]", { start: "top 88%", once: true, onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, duration: .8, stagger: .08, ease: "power3.out" }); } }));
    dyn.push(gsap.fromTo("#house .room", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: .5, stagger: .06, ease: "power2.out", clearProps: "transform,opacity", scrollTrigger: { trigger: "#house", start: "top 80%" } }));
    dyn.push(gsap.fromTo("#arches .arch", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: .7, stagger: .08, clearProps: "transform,opacity", scrollTrigger: { trigger: "#arches", start: "top 85%" } }));
  }
  bindDynamic();
  ready = true;
  var rz, lw = innerWidth; window.addEventListener("resize", function () { if (innerWidth === lw) return; lw = innerWidth; clearTimeout(rz); rz = setTimeout(function () { ScrollTrigger.refresh(); }, 300); });
})();
