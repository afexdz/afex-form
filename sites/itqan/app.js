/* Itqan : contenu FR / AR / EN, accueil en bento, palette de recherche, sélection, comparateur, emploi du temps, tarifs groupés, FAQ en terminal (GSAP + ScrollTrigger + Flip + Lenis, en local) */
(function () {
  var doc = document.documentElement;
  var STATIC = doc.classList.contains("static") || !window.gsap || !window.ScrollTrigger;
  if (STATIC) doc.classList.add("static");
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  function L(o) { return o[lang]; }
  function T(fr, ar, en) { return { fr: fr, ar: ar, en: en }; }
  var P = { mains: [2275, "Clint Bustrillos"], demonte: [853, "Fotografia Lui Vlad"], carte: [853, "Blaz Erzetic"], soudure: [853, "Svitlanka Dlinnaya"], reseau: [853, "Jordan Harrison"], clim: [853, "Joel Muniz"], stylet: [854, "Jakub Żerdzicki"], montage: [647, "Mark Cruz"], compta: [853, "Towfiqu barbhuiya"], cours: [860, "FLASHCOM INDONESIA"], salle: [960, "Royhan Firdaus"], plateau: [960, "Mahdi Ghellache"] };
  function img(n, sizes) { var big = n === "mains" || n === "demonte" || n === "plateau"; return '<img src="assets/img/' + n + '-640.webp" srcset="assets/img/' + n + '-640.webp 640w, assets/img/' + n + '-1280.webp 1280w' + (big ? ", assets/img/" + n + "-1920.webp 1920w" : "") + '" sizes="' + (sizes || "33vw") + '" width="1280" height="' + P[n][0] + '" alt="" loading="lazy" decoding="async">'; }
  function cur() { return lang === "ar" ? "دج" : "DA"; }
  function da(n) { return "⁦" + Math.round(n).toLocaleString("fr-FR").replace(/ | /g, " ") + "⁩ " + cur(); }

  var POLES = { tech: ["#FF7A00", T("Technique", "تقني", "Technical")], num: ["#0098C7", T("Numérique", "رقمي", "Digital")], gest: ["#6B4FD8", T("Gestion", "تسيير", "Management")] };
  var F = [
    { pole: "tech", img: "demonte", wide: 1, t: T("Réparation de smartphones", "تصليح الهواتف الذكية", "Smartphone repair"), m: 3, h: 144, p: 55000, niv: T("4e AM", "الرابعة متوسط", "Middle school"), sl: [[0, 0], [2, 0], [4, 0]],
      mod: T(["Démontage et diagnostic", "Écrans, batteries, connecteurs", "Micro-soudure sur carte mère", "Logiciel : flash et déblocage légal", "Accueil client et devis"], ["التفكيك والتشخيص", "الشاشات، البطاريات، الموصلات", "اللحام الدقيق على اللوحة الأم", "البرمجيات: التحديث وفك القفل القانوني", "استقبال الزبون والتسعير"], ["Disassembly and diagnosis", "Screens, batteries, connectors", "Board micro-soldering", "Software: flashing and legal unlocking", "Customer service and quotes"]),
      kit: T("Caisse à outils et station de soudure en atelier", "صندوق أدوات ومحطة لحام في الورشة", "Toolbox and soldering station in the workshop"), job: T("Boutique de réparation, SAV, propre atelier", "محل تصليح، خدمة ما بعد البيع، ورشتك الخاصة", "Repair shop, after-sales, your own workshop") },
    { pole: "tech", img: "carte", t: T("Électronique et cartes", "الإلكترونيك والبطاقات", "Electronics and boards"), m: 3, h: 144, p: 50000, niv: T("4e AM", "الرابعة متوسط", "Middle school"), sl: [[1, 0], [3, 0], [5, 0]],
      mod: T(["Composants et lecture de schémas", "Multimètre et oscilloscope", "Soudure et dessoudure", "Alimentations, téléviseurs, démodulateurs"], ["المكوّنات وقراءة المخططات", "جهاز القياس وراسم الذبذبات", "اللحام وفك اللحام", "مزوّدات الطاقة، التلفاز، أجهزة الاستقبال"], ["Components and reading diagrams", "Multimeter and oscilloscope", "Soldering and desoldering", "Power supplies, TVs, receivers"]),
      kit: T("Multimètre personnel offert", "جهاز قياس شخصي مجاني", "Free personal multimeter"), job: T("Usines d’électronique de la zone, ateliers de réparation", "مصانع الإلكترونيك بالمنطقة، ورشات التصليح", "Local electronics plants, repair shops") },
    { pole: "tech", img: "clim", t: T("Froid et climatisation", "التبريد والتكييف", "Refrigeration and air con"), m: 3, h: 144, p: 58000, niv: T("4e AM", "الرابعة متوسط", "Middle school"), sl: [[1, 1], [3, 1], [5, 1]],
      mod: T(["Circuit frigorifique", "Pose d’un climatiseur split", "Charge en gaz et détection de fuites", "Pannes électriques courantes"], ["الدائرة التبريدية", "تركيب مكيّف سبليت", "شحن الغاز وكشف التسرّب", "الأعطال الكهربائية الشائعة"], ["The refrigeration circuit", "Installing a split unit", "Gas charging and leak detection", "Common electrical faults"]),
      kit: T("Manomètres et pompe à vide en atelier", "مقاييس الضغط ومضخة التفريغ في الورشة", "Gauges and vacuum pump in the workshop"), job: T("Installateurs, SAV d’électroménager, à son compte l’été", "المركّبون، خدمات ما بعد البيع، العمل الحر صيفًا", "Installers, appliance after-sales, self-employed in summer") },
    { pole: "num", img: "reseau", t: T("Maintenance informatique et réseaux", "صيانة الإعلام الآلي والشبكات", "IT support and networks"), m: 4, h: 192, p: 60000, niv: T("3e AS", "الثالثة ثانوي", "Final year of secondary"), sl: [[0, 1], [2, 1], [4, 1]],
      mod: T(["Montage et dépannage d’un PC", "Windows, sauvegardes, antivirus", "Câblage et configuration d’un réseau", "Wi-Fi, imprimantes, caméras IP"], ["تركيب وإصلاح الحاسوب", "ويندوز، النسخ الاحتياطي، مكافحة الفيروسات", "تمديد وإعداد الشبكة", "الواي فاي، الطابعات، كاميرات IP"], ["Building and fixing a PC", "Windows, backups, antivirus", "Cabling and setting up a network", "Wi-Fi, printers, IP cameras"]),
      kit: T("Un poste et un switch par binôme", "حاسوب وموزّع لكل ثنائي", "A PC and a switch per pair"), job: T("Technicien en entreprise, cybercafés, magasins informatiques", "تقني في مؤسسة، مقاهي الإنترنت، محلات الإعلام الآلي", "Company technician, internet cafés, computer stores") },
    { pole: "num", img: "stylet", t: T("Infographie", "التصميم الغرافيكي", "Graphic design"), m: 2, h: 96, p: 38000, niv: T("3e AS", "الثالثة ثانوي", "Final year of secondary"), sl: [[0, 2], [3, 2]],
      mod: T(["Photoshop et Illustrator", "Logos et identité", "Affiches, menus, cartes", "Préparer un fichier pour l’imprimeur"], ["فوتوشوب وإليستريتور", "الشعارات والهوية", "الملصقات، القوائم، البطاقات", "تجهيز الملف للمطبعة"], ["Photoshop and Illustrator", "Logos and identity", "Posters, menus, cards", "Print-ready files"]),
      kit: T("Tablette graphique en salle", "لوحة رسم رقمية في القاعة", "Drawing tablet in class"), job: T("Imprimeries, agences, freelance", "المطابع، الوكالات، العمل الحر", "Print shops, agencies, freelance") },
    { pole: "num", img: "montage", wide: 1, t: T("Montage vidéo et contenu", "المونتاج وصناعة المحتوى", "Video editing and content"), m: 2, h: 96, p: 40000, niv: T("3e AS", "الثالثة ثانوي", "Final year of secondary"), sl: [[3, 2], [5, 2]],
      mod: T(["Tournage au téléphone", "Premiere Pro et CapCut", "Son, sous-titres, couleurs", "Formats courts pour les réseaux"], ["التصوير بالهاتف", "بريمير وكاب كات", "الصوت، الترجمة، الألوان", "الصيغ القصيرة لمواقع التواصل"], ["Shooting on a phone", "Premiere Pro and CapCut", "Sound, subtitles, colour", "Short formats for social media"]),
      kit: T("Micro et éclairage du studio", "ميكروفون وإضاءة الاستوديو", "Studio mic and lighting"), job: T("Commerces, agences, créateurs, mariages", "المحلات، الوكالات، صنّاع المحتوى، الأعراس", "Shops, agencies, creators, weddings") },
    { pole: "gest", img: "compta", t: T("Comptabilité et PC Compta", "المحاسبة وبرنامج PC Compta", "Accounting and PC Compta"), m: 3, h: 120, p: 45000, niv: T("3e AS", "الثالثة ثانوي", "Final year of secondary"), sl: [[1, 2], [4, 2]],
      mod: T(["Le SCF et les écritures", "TVA, G50 et bilan", "PC Compta et PC Paie", "Cas réels de PME"], ["النظام المحاسبي المالي والقيود", "الرسم على القيمة المضافة، G50 والميزانية", "PC Compta وPC Paie", "حالات حقيقية لمؤسسات صغيرة"], ["The SCF and entries", "VAT, G50 and balance sheet", "PC Compta and PC Paie", "Real SME cases"]),
      kit: T("Licence d’essai des logiciels", "رخصة تجريبية للبرامج", "Trial software licence"), job: T("Aide-comptable, cabinets, PME", "مساعد محاسب، المكاتب، المؤسسات الصغيرة", "Bookkeeper, firms, SMEs") },
    { pole: "gest", img: "cours", t: T("Bureautique", "المكتبية", "Office skills"), m: 1.5, h: 48, p: 15000, niv: T("Aucun", "بدون شرط", "None"), sl: [[0, 0], [5, 2]],
      mod: T(["Word et courrier", "Excel et tableaux", "PowerPoint", "E-mail et outils en ligne"], ["وورد والمراسلات", "إكسل والجداول", "باوربوينت", "البريد والأدوات عبر الإنترنت"], ["Word and letters", "Excel and tables", "PowerPoint", "Email and online tools"]),
      kit: T("Un poste par personne", "حاسوب لكل شخص", "One computer each"), job: T("Tous les postes de bureau", "كل مناصب المكتب", "Any office job") }
  ];
  F.forEach(function (f, i) { f.id = i; f.col = POLES[f.pole][0]; });
  var RAIL = ["soudure", "carte", "reseau", "clim", "stylet", "montage", "compta", "cours"];
  var WIL = ["Bordj Bou Arréridj", "Sétif", "M’Sila", "Bouira", "Béjaïa", "Mila"];

  var I = {
    fr: { brand: "Itqan", demo0: "Site de démonstration, école fictive.", demo1: "Autres modèles", cmd: "Rechercher une formation…", cta: "S’inscrire",
      h1: "Un métier entre <em>vos mains.</em>", hP: "Huit formations pratiques à Bordj Bou Arréridj : téléphones, électronique, réseaux, clim, design, vidéo et gestion. Composez votre semaine, l’école s’adapte.", hB1: "Voir les formations", hB2: "Composer ma semaine",
      tag1: "Atelier smartphones", tag2: "Pièces fournies pour les TP", tag3: "La salle informatique", f1s: "Prochaine rentrée", f1p: "inscriptions ouvertes", f2s: "Groupes", f2b: "12 max.", f2p: "un poste ou un établi chacun", f3s: "Horaires", f3b: "8 h – 20 h", f3p: "matin, après-midi ou soir", f4s: "Attestation", f4b: "+ stage", f4p: "dans un atelier ou une entreprise de la wilaya",
      fH: "Huit formations, trois pôles.", fP: "Ajoutez une formation à votre sélection pour la comparer, la placer dans votre semaine et calculer le prix.", all: "Tout", mo: "{n} mois", wk6: "6 semaines", hrs: "{n} h", info: "Fiche", add: "+ Sélection", added: "✓ Choisie", max: "4 formations au maximum dans la sélection.",
      spec: ["Durée", "Volume", "Niveau", "Prix"], prog: "Au programme", kitL: "Matériel", jobL: "Débouchés", slL: "Créneaux", close: "Fermer",
      cH: "Comparez avant de choisir.", cP: "Les formations de votre sélection, côte à côte.", cEmpty: "Ajoutez au moins deux formations avec « + Sélection » pour les comparer.", rows: ["Pôle", "Durée", "Volume horaire", "Prix", "Niveau demandé", "Créneaux", "Matériel", "Débouchés"], cheap: "le moins cher", short: "le plus court",
      sH: "Composez votre semaine.", sP: "Chaque formation a ses créneaux. On vous montre tout de suite si deux cours tombent en même temps.", days: ["Sam", "Dim", "Lun", "Mar", "Mer", "Jeu"], slots: ["Matin 8 h – 11 h", "Après-midi 13 h – 16 h", "Soir 17 h 30 – 20 h"], slotS: ["Matin", "Aprèm", "Soir"],
      sideH: "Votre semaine", sideE: "Votre sélection est vide : ajoutez des formations plus haut.", hw: "{n} heures de cours par semaine", ok: "Aucun chevauchement.", ko: "{n} créneau(x) en conflit : demandez le groupe du soir ou du samedi à l’accueil.",
      aH: "Dans nos ateliers.", aP: "Établis, postes, outillage et pièces : on apprend en démontant.", rail: ["Poste de soudure", "Carte électronique en TP", "Baie de brassage", "Pose d’un climatiseur", "Tablette graphique", "Banc de montage", "Comptabilité au quotidien", "Salle informatique"],
      tH: "Plus vous combinez, moins vous payez.", tP: "Le prix se calcule avec votre sélection. Paiement en 3 fois sans frais.", tiers: [["1 formation", "prix normal"], ["2 formations", "−10 % sur le total"], ["3 ou plus", "−15 % sur le total"]], sub: "Sous-total", disc: "Remise", tot: "Total", tr: "ou 3 × {p}", none: "Ajoutez des formations à votre sélection pour voir le prix.", fees: "+ 2 000 DA de frais de dossier",
      qH: "Vos questions, en ligne de commande.", F: [["Faut-il un niveau en informatique ?", "Non pour les formations techniques et la bureautique. Pour les réseaux, le design et la vidéo, savoir utiliser un ordinateur suffit."], ["Les filles peuvent-elles faire les ateliers techniques ?", "Oui, et elles sont de plus en plus nombreuses en smartphones et en électronique. Un groupe féminin ouvre si 8 inscrites le demandent."], ["Est-ce que je garde mes réalisations ?", "En infographie et en vidéo, oui : vous repartez avec un portfolio. En technique, vous gardez le multimètre offert."], ["Peut-on faire deux formations en même temps ?", "Oui, si les créneaux ne se chevauchent pas. Le planificateur plus haut vous le dit tout de suite."], ["Y a-t-il un stage ?", "Oui, deux à quatre semaines dans un atelier, une boutique ou une entreprise de la wilaya."], ["Comment payer ?", "En espèces à l’accueil, par CCP ou BaridiMob, en 1 ou 3 fois."]],
      iH: "Réservez votre place.", iP: "Votre sélection est déjà dans le formulaire. L’accueil vous rappelle pour fixer le jour de l’inscription.", l1: "Prénom et nom", l2: "Téléphone", l3: "Wilaya", l4: "Groupe préféré", grp: ["Matin", "Après-midi", "Soir", "Samedi"], other: "Autre wilaya", lSel: "Votre sélection", noneSel: "aucune formation choisie", send: "Réserver", err: "Indiquez votre nom et un numéro valide (05, 06 ou 07).", demo: "Démo AFEX Digital : aucune réservation n’a été envoyée, ce formulaire n’est pas encore connecté.",
      selN: "{n} formation(s)", selB: "Voir le prix", palPh: "Tapez : téléphone, réseau, vidéo…", palGo: "Aller à", palS: [["#comparer", "Comparer"], ["#semaine", "Ma semaine"], ["#tarifs", "Tarifs"], ["#inscription", "Inscription"]], palK: ["↑↓ choisir", "Entrée ouvrir", "Échap fermer"],
      foBig: "Bordj Bou Arréridj, la ville qui répare.", foA: "École de formation polyvalente fictive, Bordj Bou Arréridj.", foH: "Horaires", foHv: "Samedi → jeudi, 8 h – 20 h.", foL: "Adresse", foLv: "Centre-ville, BBA (adresse de démonstration).", foC: "Contact", foCv: "Téléphone : numéro de démonstration.", foot: "© 2026 Itqan, école fictive.", by: "Site réalisé par", photos: "Photos : Unsplash,", waT: "WhatsApp", lang: "Langue",
      mainsAlt: "Des mains réparent la carte d’un smartphone", demAlt: "Un smartphone démonté sur un tapis d’atelier", salleAlt: "Des stagiaires en hijab devant des ordinateurs", plateauAlt: "Les hauts plateaux autour de Bordj Bou Arréridj au coucher du soleil", title: "Itqan, école de formation polyvalente à Bordj Bou Arréridj", loc: "fr-FR" },
    ar: { brand: "إتقان", demo0: "موقع تجريبي، مدرسة وهمية.", demo1: "نماذج أخرى", cmd: "ابحث عن تكوين…", cta: "سجّل",
      h1: "مهنة بين <em>يديك.</em>", hP: "ثمانية تكوينات تطبيقية في برج بوعريريج: الهواتف، الإلكترونيك، الشبكات، التكييف، التصميم، الفيديو والتسيير. رتّب أسبوعك والمدرسة تتكيّف.", hB1: "شاهد التكوينات", hB2: "رتّب أسبوعي",
      tag1: "ورشة الهواتف", tag2: "القطع مجانية في التطبيق", tag3: "قاعة الإعلام الآلي", f1s: "الدخول القادم", f1p: "التسجيلات مفتوحة", f2s: "الأفواج", f2b: "12 كحد أقصى", f2p: "حاسوب أو طاولة عمل لكل واحد", f3s: "التوقيت", f3b: "8:00 – 20:00", f3p: "صباحًا، بعد الظهر أو مساءً", f4s: "الشهادة", f4b: "+ تربص", f4p: "في ورشة أو مؤسسة بالولاية",
      fH: "ثمانية تكوينات، ثلاثة أقطاب.", fP: "أضف تكوينًا إلى اختيارك لمقارنته ووضعه في أسبوعك وحساب السعر.", all: "الكل", mo: "{n} أشهر", wk6: "6 أسابيع", hrs: "{n} سا", info: "البطاقة", add: "+ اختيار", added: "✓ مختار", max: "4 تكوينات كحد أقصى في الاختيار.",
      spec: ["المدة", "الحجم الساعي", "المستوى", "السعر"], prog: "البرنامج", kitL: "المعدّات", jobL: "مجالات العمل", slL: "الحصص", close: "إغلاق",
      cH: "قارن قبل أن تختار.", cP: "تكوينات اختيارك جنبًا إلى جنب.", cEmpty: "أضف تكوينين على الأقل بـ « + اختيار » لمقارنتهما.", rows: ["القطب", "المدة", "الحجم الساعي", "السعر", "المستوى المطلوب", "الحصص", "المعدّات", "مجالات العمل"], cheap: "الأرخص", short: "الأقصر",
      sH: "رتّب أسبوعك.", sP: "لكل تكوين حصصه. نبيّن لك فورًا إن تزامن درسان.", days: ["سبت", "أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس"], slots: ["صباحًا 8:00 – 11:00", "بعد الظهر 13:00 – 16:00", "مساءً 17:30 – 20:00"], slotS: ["صباحًا", "ظهرًا", "مساءً"],
      sideH: "أسبوعك", sideE: "اختيارك فارغ: أضف تكوينات من الأعلى.", hw: "{n} ساعة دروس في الأسبوع", ok: "لا يوجد تداخل.", ko: "{n} حصة متداخلة: اطلب الفوج المسائي أو فوج السبت من الاستقبال.",
      aH: "في ورشاتنا.", aP: "طاولات عمل، حواسيب، أدوات وقطع: نتعلّم بالتفكيك.", rail: ["محطة اللحام", "بطاقة إلكترونية في التطبيق", "خزانة الشبكة", "تركيب مكيّف", "لوحة الرسم الرقمية", "طاولة المونتاج", "المحاسبة اليومية", "قاعة الإعلام الآلي"],
      tH: "كلما جمعت أكثر، دفعت أقل.", tP: "يُحسب السعر حسب اختيارك. الدفع على 3 أقساط بلا مصاريف.", tiers: [["تكوين واحد", "السعر العادي"], ["تكوينان", "−10 % من المجموع"], ["3 فأكثر", "−15 % من المجموع"]], sub: "المجموع الجزئي", disc: "التخفيض", tot: "المجموع", tr: "أو 3 × {p}", none: "أضف تكوينات إلى اختيارك لرؤية السعر.", fees: "+ 2 000 دج مصاريف الملف",
      qH: "أسئلتكم عبر سطر الأوامر.", F: [["هل يلزم مستوى في الإعلام الآلي؟", "لا للتكوينات التقنية والمكتبية. للشبكات والتصميم والفيديو يكفي استعمال الحاسوب."], ["هل يمكن للفتيات حضور الورشات التقنية؟", "نعم، وعددهن يزداد في الهواتف والإلكترونيك. يُفتح فوج نسائي إذا طلبته 8 مسجّلات."], ["هل أحتفظ بأعمالي؟", "في التصميم والفيديو نعم: تخرج بملف أعمال. في التقني تحتفظ بجهاز القياس المجاني."], ["هل يمكن متابعة تكوينين معًا؟", "نعم إذا لم تتداخل الحصص. المخطّط في الأعلى يخبرك فورًا."], ["هل يوجد تربص؟", "نعم، من أسبوعين إلى أربعة في ورشة أو محل أو مؤسسة بالولاية."], ["كيف أدفع؟", "نقدًا في الاستقبال، عبر CCP أو BaridiMob، مرة أو على 3 أقساط."]],
      iH: "احجز مكانك.", iP: "اختيارك موجود في الاستمارة. يتصل بك الاستقبال لتحديد يوم التسجيل.", l1: "الاسم واللقب", l2: "الهاتف", l3: "الولاية", l4: "الفوج المفضّل", grp: ["صباحًا", "بعد الظهر", "مساءً", "السبت"], other: "ولاية أخرى", lSel: "اختيارك", noneSel: "لم تختر أي تكوين", send: "احجز", err: "أدخل اسمك ورقمًا صحيحًا (05 أو 06 أو 07).", demo: "عرض AFEX Digital: لم يُرسل أي حجز، هذا النموذج غير متصل بعد.",
      selN: "{n} تكوين", selB: "اعرض السعر", palPh: "اكتب: هاتف، شبكة، فيديو…", palGo: "انتقل إلى", palS: [["#comparer", "المقارنة"], ["#semaine", "أسبوعي"], ["#tarifs", "الأسعار"], ["#inscription", "التسجيل"]], palK: ["↑↓ اختيار", "Entrée فتح", "Échap إغلاق"],
      foBig: "برج بوعريريج، المدينة التي تُصلح.", foA: "مدرسة تكوين متعدد التخصصات وهمية، برج بوعريريج.", foH: "التوقيت", foHv: "من السبت إلى الخميس، 8:00 – 20:00.", foL: "العنوان", foLv: "وسط المدينة، برج بوعريريج (عنوان للعرض).", foC: "الاتصال", foCv: "الهاتف: رقم تجريبي.", foot: "© 2026 إتقان، مدرسة وهمية.", by: "موقع من إنجاز", photos: "الصور: Unsplash،", waT: "واتساب", lang: "اللغة",
      mainsAlt: "يدان تصلحان بطاقة هاتف ذكي", demAlt: "هاتف ذكي مفكّك على بساط ورشة", salleAlt: "متربصات محجّبات أمام الحواسيب", plateauAlt: "الهضاب العليا حول برج بوعريريج عند الغروب", title: "إتقان، مدرسة تكوين متعدد التخصصات في برج بوعريريج", loc: "ar-DZ" },
    en: { brand: "Itqan", demo0: "Demo website, fictional school.", demo1: "Other templates", cmd: "Search for a course…", cta: "Enrol",
      h1: "A trade in <em>your hands.</em>", hP: "Eight hands-on courses in Bordj Bou Arréridj: phones, electronics, networks, air con, design, video and management. Build your week, the school fits around it.", hB1: "See the courses", hB2: "Build my week",
      tag1: "Smartphone workshop", tag2: "Parts provided for practicals", tag3: "The computer room", f1s: "Next intake", f1p: "enrolment open", f2s: "Groups", f2b: "12 max.", f2p: "a computer or bench each", f3s: "Hours", f3b: "8:00 – 20:00", f3p: "morning, afternoon or evening", f4s: "Certificate", f4b: "+ placement", f4p: "in a local workshop or company",
      fH: "Eight courses, three hubs.", fP: "Add a course to your selection to compare it, place it in your week and work out the price.", all: "All", mo: "{n} months", wk6: "6 weeks", hrs: "{n} h", info: "Details", add: "+ Select", added: "✓ Selected", max: "4 courses at most in your selection.",
      spec: ["Length", "Hours", "Level", "Price"], prog: "Programme", kitL: "Equipment", jobL: "Where you work", slL: "Time slots", close: "Close",
      cH: "Compare before you choose.", cP: "The courses in your selection, side by side.", cEmpty: "Add at least two courses with “+ Select” to compare them.", rows: ["Hub", "Length", "Hours", "Price", "Entry level", "Time slots", "Equipment", "Where you work"], cheap: "cheapest", short: "shortest",
      sH: "Build your week.", sP: "Each course has its slots. We show you straight away if two classes clash.", days: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu"], slots: ["Morning 8–11", "Afternoon 13–16", "Evening 17:30–20"], slotS: ["Morning", "Afternoon", "Evening"],
      sideH: "Your week", sideE: "Your selection is empty: add courses above.", hw: "{n} hours of class a week", ok: "No clashes.", ko: "{n} clashing slot(s): ask reception for the evening or Saturday group.",
      aH: "In our workshops.", aP: "Benches, computers, tools and parts: we learn by taking things apart.", rail: ["Soldering station", "Circuit board in class", "Network rack", "Fitting an air con unit", "Drawing tablet", "Editing desk", "Everyday accounting", "Computer room"],
      tH: "The more you combine, the less you pay.", tP: "The price follows your selection. Pay in 3 instalments, no fees.", tiers: [["1 course", "full price"], ["2 courses", "−10% on the total"], ["3 or more", "−15% on the total"]], sub: "Subtotal", disc: "Discount", tot: "Total", tr: "or 3 × {p}", none: "Add courses to your selection to see the price.", fees: "+ 2,000 DA file fee",
      qH: "Your questions, on the command line.", F: [["Do I need computer skills?", "Not for the technical courses or office skills. For networks, design and video, knowing how to use a computer is enough."], ["Can girls take the technical workshops?", "Yes, and more and more do in smartphones and electronics. A women-only group opens if 8 trainees ask."], ["Do I keep my work?", "In design and video, yes: you leave with a portfolio. In technical courses, you keep the free multimeter."], ["Can I take two courses at once?", "Yes, if the slots don’t clash. The planner above tells you straight away."], ["Is there a placement?", "Yes, two to four weeks in a local workshop, shop or company."], ["How do I pay?", "Cash at reception, CCP or BaridiMob, in 1 or 3 instalments."]],
      iH: "Book your place.", iP: "Your selection is already in the form. Reception will call you to set your sign-up day.", l1: "Full name", l2: "Phone", l3: "Province", l4: "Preferred group", grp: ["Morning", "Afternoon", "Evening", "Saturday"], other: "Other province", lSel: "Your selection", noneSel: "no course chosen", send: "Book", err: "Enter your name and a valid number (05, 06 or 07).", demo: "AFEX Digital demo: no booking was sent, this form is not connected yet.",
      selN: "{n} course(s)", selB: "See the price", palPh: "Type: phone, network, video…", palGo: "Go to", palS: [["#comparer", "Compare"], ["#semaine", "My week"], ["#tarifs", "Fees"], ["#inscription", "Enrol"]], palK: ["↑↓ choose", "Enter open", "Esc close"],
      foBig: "Bordj Bou Arréridj, the town that fixes things.", foA: "A fictional multi-trade training school, Bordj Bou Arréridj.", foH: "Hours", foHv: "Saturday → Thursday, 8:00 – 20:00.", foL: "Address", foLv: "Town centre, BBA (demo address).", foC: "Contact", foCv: "Phone: demo number.", foot: "© 2026 Itqan, a fictional school.", by: "Website by", photos: "Photos: Unsplash,", waT: "WhatsApp", lang: "Language",
      mainsAlt: "Hands repairing a smartphone board", demAlt: "A smartphone taken apart on a workshop mat", salleAlt: "Trainees in hijabs at computers", plateauAlt: "The high plateaus around Bordj Bou Arréridj at sunset", title: "Itqan, multi-trade training school in Bordj Bou Arréridj", loc: "en-GB" }
  };

  var lang = "fr", pole = "", sel = [0, 3], ready = false, dyn = [], pIdx = 0, pItems = [], lastFocus = null;
  try { var sv = localStorage.getItem("itqan-lang"); if (I[sv]) lang = sv; } catch (e) {}
  function toast(t) { var el = $("#toast"); el.textContent = t; el.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(function () { el.classList.remove("on"); }, 3600); }
  function go(s) { var el = $(s); if (!el) return; if (lenis) lenis.scrollTo(el, { offset: -76 }); else el.scrollIntoView(); }
  function fmt(d, o) { try { return new Intl.DateTimeFormat(lang === "ar" ? "ar-DZ-u-nu-latn" : I[lang].loc, o).format(d); } catch (e) { return d.toDateString(); } }
  function dur(f) { return f.m === 1.5 ? I[lang].wk6 : I[lang].mo.replace("{n}", f.m); }
  function openWa() { var m = { fr: "Bonjour AFEX Digital, je viens du site de démonstration « " + document.title + " ». Je veux un site comme celui-ci.", ar: "مرحبًا AFEX Digital، أتيت من الموقع التجريبي « " + document.title + " ». أريد موقعًا مثله.", en: "Hello AFEX Digital, I found the demo site “" + document.title + "”. I would like a website like this one." }; window.open("https://wa.me/213657944090?text=" + encodeURIComponent(m[lang] || m.fr), "_blank", "noopener"); }

  /* cards */
  function renderPoles() { var t = I[lang]; $("#poles").innerHTML = '<button type="button" data-p="" aria-pressed="' + (!pole) + '">' + t.all + "</button>" + Object.keys(POLES).map(function (k) { return '<button type="button" data-p="' + k + '" aria-pressed="' + (pole === k) + '">' + L(POLES[k][1]) + "</button>"; }).join(""); }
  function renderCards() {
    var t = I[lang];
    $("#cards").innerHTML = F.map(function (f) { var on = sel.indexOf(f.id) > -1; return '<article class="tile card' + (f.wide ? " wide" : "") + '" data-id="' + f.id + '"' + (pole && f.pole !== pole ? " hidden" : "") + '><div class="ph">' + img(f.img, f.wide ? "(min-width:1060px) 48vw, 92vw" : "(min-width:1060px) 24vw, 92vw") + '<span class="pole" style="color:' + f.col + '">' + L(POLES[f.pole][1]) + '</span></div><div class="bd"><h3>' + L(f.t) + '</h3><div class="meta"><span>' + dur(f) + "</span><span>" + t.hrs.replace("{n}", f.h) + "</span><span>" + L(f.niv) + '</span></div><div class="row"><span class="pr">' + da(f.p) + '</span><span class="ac"><button type="button" class="info" data-info="' + f.id + '">' + t.info + '</button><button type="button" class="add" data-add="' + f.id + '" aria-pressed="' + on + '">' + (on ? t.added : t.add) + "</button></span></div></div></article>"; }).join("");
  }
  function filterCards() {
    var st = !STATIC && window.Flip ? Flip.getState("#cards .card") : null;
    $$("#cards .card").forEach(function (c) { c.hidden = !!pole && F[+c.dataset.id].pole !== pole; });
    renderPoles();
    if (st) Flip.from(st, { duration: .5, ease: "power2.inOut", absolute: true, onEnter: function (e) { return gsap.fromTo(e, { opacity: 0, scale: .94 }, { opacity: 1, scale: 1, duration: .35 }); }, onLeave: function (e) { return gsap.to(e, { opacity: 0, duration: .2 }); } });
  }
  function slotTxt(f) { var t = I[lang]; return f.sl.map(function (s) { return t.days[s[0]] + " " + t.slotS[s[1]].toLowerCase(); }).join(", "); }
  /* fiche */
  function showFiche(id) {
    var t = I[lang], f = F[id], on = sel.indexOf(id) > -1;
    $("#fiche").innerHTML = '<div class="ph">' + img(f.img, "560px") + '<button type="button" class="x" data-close aria-label="' + t.close + '"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div><div class="bd"><small style="color:' + f.col + ';font-weight:700">' + L(POLES[f.pole][1]) + '</small><h3 id="ficheT">' + L(f.t) + '</h3><div class="specs"><div><small>' + t.spec[0] + "</small><b>" + dur(f) + "</b></div><div><small>" + t.spec[1] + "</small><b>" + t.hrs.replace("{n}", f.h) + "</b></div><div><small>" + t.spec[2] + "</small><b>" + L(f.niv) + "</b></div><div><small>" + t.spec[3] + "</small><b>" + da(f.p) + "</b></div></div><div><b>" + t.prog + '</b><ul class="mods" style="margin-top:8px">' + L(f.mod).map(function (m) { return "<li>" + m + "</li>"; }).join("") + "</ul></div><p><b>" + t.slL + " :</b> " + slotTxt(f) + "</p><p><b>" + t.kitL + " :</b> " + L(f.kit) + "</p><p><b>" + t.jobL + " :</b> " + L(f.job) + '</p><button type="button" class="btn ' + (on ? "k" : "or") + '" data-add="' + id + '" aria-pressed="' + on + '">' + (on ? t.added : t.add) + "</button></div>";
    lastFocus = document.activeElement; $("#scrim").classList.add("on"); $("#fiche").classList.add("on"); if (lenis) lenis.stop(); setTimeout(function () { $("#fiche .x").focus(); }, 60);
  }
  function closeFiche() { $("#scrim").classList.remove("on"); $("#fiche").classList.remove("on"); if (lenis) lenis.start(); if (lastFocus) lastFocus.focus(); }
  function toggleSel(id) {
    var i = sel.indexOf(id);
    if (i > -1) sel.splice(i, 1); else { if (sel.length >= 4) { toast(I[lang].max); return; } sel.push(id); }
    var t = I[lang], on = sel.indexOf(id) > -1;
    $$('[data-add="' + id + '"]').forEach(function (b) { b.setAttribute("aria-pressed", on); b.textContent = on ? t.added : t.add; if (b.classList.contains("btn")) b.className = "btn " + (on ? "k" : "or"); });
    renderSelDeps();
    if (!STATIC && on) gsap.fromTo("#selbar", { scale: 1.06 }, { scale: 1, duration: .4, ease: "back.out(3)", clearProps: "scale" });
  }
  function renderSelDeps() { renderCmp(); renderWeek(); renderPrice(); renderPicked(); renderSelbar(); }
  /* compare */
  function renderCmp() {
    var t = I[lang], s = sel.map(function (i) { return F[i]; });
    if (s.length < 2) { $("#cmp").innerHTML = '<p class="empty">' + t.cEmpty + "</p>"; return; }
    var minP = Math.min.apply(null, s.map(function (f) { return f.p; })), minH = Math.min.apply(null, s.map(function (f) { return f.h; }));
    var row = function (lab, fn) { return "<tr><th scope=\"row\">" + lab + "</th>" + s.map(function (f) { return "<td>" + fn(f) + "</td>"; }).join("") + "</tr>"; };
    $("#cmp").innerHTML = '<table><thead><tr><th></th>' + s.map(function (f) { return '<th scope="col" style="border-top:4px solid ' + f.col + '">' + L(f.t) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      row(t.rows[0], function (f) { return L(POLES[f.pole][1]); }) + row(t.rows[1], function (f) { return dur(f); }) + row(t.rows[2], function (f) { return t.hrs.replace("{n}", f.h) + (f.h === minH ? ' <small class="best">· ' + t.short + "</small>" : ""); }) + row(t.rows[3], function (f) { return "<b>" + da(f.p) + "</b>" + (f.p === minP ? ' <small class="best">· ' + t.cheap + "</small>" : ""); }) + row(t.rows[4], function (f) { return L(f.niv); }) + row(t.rows[5], slotTxt) + row(t.rows[6], function (f) { return L(f.kit); }) + row(t.rows[7], function (f) { return L(f.job); }) + "</tbody></table>";
  }
  /* week */
  function renderWeek() {
    var t = I[lang], grid = {}, clash = 0, hw = 0;
    sel.forEach(function (i) { F[i].sl.forEach(function (s) { var k = s[0] + "-" + s[1]; (grid[k] = grid[k] || []).push(F[i]); hw += 3; }); });
    var html = "<div></div>" + t.days.map(function (d) { return '<div class="hd">' + d + "</div>"; }).join("");
    [0, 1, 2].forEach(function (sl) { html += '<div class="sl">' + t.slotS[sl] + "</div>"; for (var d = 0; d < 6; d++) { var g = grid[d + "-" + sl] || []; if (g.length > 1) clash++; html += '<div class="cell' + (g.length > 1 ? " ko" : "") + '">' + g.map(function (f) { return '<span class="blk" style="background:' + f.col + '">' + L(f.t) + "</span>"; }).join("") + "</div>"; } });
    $("#wk").innerHTML = html;
    $("#side").innerHTML = '<div class="tile"><h3>' + t.sideH + "</h3>" + (sel.length ? '<p class="conf ' + (clash ? "ko" : "ok") + '">' + (clash ? t.ko.replace("{n}", clash) : t.ok) + '</p><p style="color:var(--ink2);margin-top:6px">' + t.hw.replace("{n}", hw) + "</p>" : '<p style="color:var(--ink2)">' + t.sideE + "</p>") + '</div><div class="tile"><div class="legend">' + t.slots.map(function (s) { return "<span>" + s + "</span>"; }).join("") + "</div></div>";
  }
  /* price */
  function totals() { var sub = sel.reduce(function (a, i) { return a + F[i].p; }, 0), r = sel.length >= 3 ? .15 : sel.length === 2 ? .1 : 0; return { sub: sub, d: sub * r, tot: sub * (1 - r), r: r }; }
  function renderPrice() {
    var t = I[lang], z = totals(), tier = sel.length >= 3 ? 2 : sel.length === 2 ? 1 : 0;
    $("#tiers").innerHTML = t.tiers.map(function (x, i) { return '<div class="tile tier' + (sel.length && i === tier ? " on" : "") + '"><small>' + x[0] + "</small><b>" + ["0 %", "−10 %", "−15 %"][i] + "</b><small>" + x[1] + "</small></div>"; }).join("");
    $("#sum").innerHTML = sel.length ? sel.map(function (i) { return '<div class="ln"><span>' + L(F[i].t) + "</span><b>" + da(F[i].p) + "</b></div>"; }).join("") + (z.d ? '<div class="ln" style="color:var(--ok)"><span>' + t.disc + " (−" + Math.round(z.r * 100) + " %)</span><b>− " + da(z.d) + "</b></div>" : "") + "<small>" + t.tot + '</small><div class="tot">' + da(z.tot) + '</div><small style="color:var(--ink2)">' + t.tr.replace("{p}", da(Math.ceil(z.tot / 300) * 100)) + " · " + t.fees + '</small><a class="btn or" href="#inscription">' + t.send + "</a>" : '<p style="color:var(--ink2)">' + t.none + "</p>";
  }
  function renderSelbar() { var t = I[lang], b = $("#selbar"); b.classList.toggle("on", sel.length > 0); $("#selN").textContent = t.selN.replace("{n}", sel.length) + " · " + da(totals().tot); $("#selL").textContent = sel.map(function (i) { return L(F[i].t); }).join(", "); }
  /* form */
  function renderForm() {
    var t = I[lang], f = $("#f"), keep = f.elements.length ? { name: f.name.value, tel: f.tel.value } : null;
    f.innerHTML = '<div class="r2"><label>' + t.l1 + '<input name="name" autocomplete="name"></label><label>' + t.l2 + '<input name="tel" type="tel" inputmode="tel" placeholder="05 / 06 / 07 …" autocomplete="tel"></label></div><div class="r2"><label>' + t.l3 + '<select name="wil">' + WIL.map(function (w) { return "<option>" + w + "</option>"; }).join("") + "<option>" + t.other + "</option></select></label><label>" + t.l4 + '<select name="grp">' + t.grp.map(function (g) { return "<option>" + g + "</option>"; }).join("") + '</select></label></div><div><b style="display:block;font-size:.94rem;margin-bottom:6px">' + t.lSel + '</b><div class="picked" id="picked"></div></div><button class="btn or" type="submit">' + t.send + '</button><p id="msg" role="status"></p>';
    if (keep) { f.name.value = keep.name; f.tel.value = keep.tel; }
    renderPicked();
  }
  function renderPicked() { var p = $("#picked"); if (!p) return; p.innerHTML = sel.length ? sel.map(function (i) { return "<span>" + L(F[i].t) + "</span>"; }).join("") + '<span style="background:var(--ink);color:#fff">' + da(totals().tot) + "</span>" : "<em>" + I[lang].noneSel + "</em>"; }
  /* palette */
  function openPal() { lastFocus = document.activeElement; $("#pal").classList.add("on"); $("#pq").value = ""; pIdx = 0; renderPal(); setTimeout(function () { $("#pq").focus(); }, 30); if (lenis) lenis.stop(); }
  function closePal() { $("#pal").classList.remove("on"); if (lenis) lenis.start(); if (lastFocus) lastFocus.focus(); }
  function renderPal() {
    var t = I[lang], q = $("#pq").value.trim().toLowerCase();
    pItems = F.filter(function (f) { return !q || (["fr", "ar", "en"].map(function (l) { return f.t[l] + " " + f.mod[l].join(" "); }).join(" ").toLowerCase().indexOf(q) > -1); }).map(function (f) { return { k: "f", id: f.id, a: L(f.t), b: L(POLES[f.pole][1]) + " · " + da(f.p) }; }).concat(t.palS.filter(function (s) { return !q || s[1].toLowerCase().indexOf(q) > -1; }).map(function (s) { return { k: "s", id: s[0], a: t.palGo + " : " + s[1], b: "" }; }));
    if (pIdx >= pItems.length) pIdx = 0;
    $("#plist").innerHTML = pItems.map(function (x, i) { return '<li><button type="button" role="option" data-pi="' + i + '" aria-selected="' + (i === pIdx) + '"><span>' + x.a + "</span><small>" + x.b + "</small></button></li>"; }).join("");
    $("#pfoot").innerHTML = t.palK.map(function (k) { return "<span>" + k + "</span>"; }).join("");
  }
  function runPal(i) { var x = pItems[i]; if (!x) return; closePal(); if (x.k === "f") showFiche(x.id); else go(x.id); }

  function render() {
    var t = I[lang];
    $("#h1").innerHTML = t.h1;
    var d = new Date(); d.setDate(d.getDate() + 12); while (d.getDay() !== 6) d.setDate(d.getDate() + 1); $("#rentree").textContent = fmt(d, { day: "numeric", month: "short" });
    renderPoles(); renderCards(); renderForm(); renderSelDeps();
    $("#rail").innerHTML = RAIL.map(function (n, i) { return "<figure>" + img(n, "420px") + "<figcaption>" + t.rail[i] + "</figcaption></figure>"; }).join("");
    $("#term").innerHTML = '<div class="bar" aria-hidden="true"><i></i><i></i><i></i></div><div class="body">' + t.F.map(function (f, i) { return '<button type="button" aria-expanded="false" aria-controls="ta' + i + '">' + f[0] + '</button><div class="a" id="ta' + i + '" hidden>' + f[1] + "</div>"; }).join("") + '<span><span style="color:var(--or)">$</span> <span class="cur" aria-hidden="true"></span></span></div>';
    $("#cmdB").setAttribute("aria-label", t.cmd); $("#pq").placeholder = t.palPh;
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
    try { localStorage.setItem("itqan-lang", l); } catch (e) {}
    render();
    if (ready) { bindDynamic(); ScrollTrigger.refresh(); }
  }

  /* events */
  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.l !== lang) setLang(b.dataset.l); }); });
  $("#poles").addEventListener("click", function (e) { var b = e.target.closest("[data-p]"); if (b) { pole = b.dataset.p; filterCards(); if (ready) setTimeout(function () { ScrollTrigger.refresh(); }, 520); } });
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-add]"); if (a) { toggleSel(+a.dataset.add); return; }
    var i = e.target.closest("[data-info]"); if (i) { showFiche(+i.dataset.info); return; }
    if (e.target.closest("[data-close]") || e.target.id === "scrim") { closeFiche(); return; }
    var p = e.target.closest("[data-pi]"); if (p) { runPal(+p.dataset.pi); return; }
    if (e.target.id === "pal") closePal();
  });
  $("#cmdB").addEventListener("click", openPal);
  $("#pq").addEventListener("input", function () { pIdx = 0; renderPal(); });
  document.addEventListener("keydown", function (e) {
    var palOn = $("#pal").classList.contains("on");
    if (e.key === "/" && !palOn && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); openPal(); return; }
    if (e.key === "Escape") { if (palOn) closePal(); else if ($("#fiche").classList.contains("on")) closeFiche(); return; }
    if (!palOn) return;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); pIdx = (pIdx + (e.key === "ArrowDown" ? 1 : -1) + pItems.length) % Math.max(1, pItems.length); renderPal(); var s = $('#plist [aria-selected="true"]'); if (s) s.scrollIntoView({ block: "nearest" }); }
    if (e.key === "Enter") { e.preventDefault(); runPal(pIdx); }
  });
  $("#rPrev").addEventListener("click", function () { $("#rail").scrollBy({ left: (doc.dir === "rtl" ? 1 : -1) * 430, behavior: "smooth" }); });
  $("#rNext").addEventListener("click", function () { $("#rail").scrollBy({ left: (doc.dir === "rtl" ? -1 : 1) * 430, behavior: "smooth" }); });
  $("#term").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; var on = b.getAttribute("aria-expanded") !== "true"; b.setAttribute("aria-expanded", on); $("#" + b.getAttribute("aria-controls")).hidden = !on; if (ready) ScrollTrigger.refresh(); });
  $("#f").addEventListener("submit", function (e) { e.preventDefault(); var f = e.target, t = I[lang], m = $("#msg"); if (!f.name.value.trim() || !/^0[5-7]\d{8}$/.test(f.tel.value.replace(/\s/g, ""))) { m.textContent = t.err; m.className = "err"; (f.name.value.trim() ? f.tel : f.name).focus(); return; } m.className = ""; m.textContent = t.demo; });
  $("#waf").addEventListener("click", openWa);

  var lenis = null;
  setLang(lang);
  if (STATIC) return;

  gsap.registerPlugin(ScrollTrigger, Flip);
  lenis = window.Lenis ? new Lenis({ lerp: 0.12 }) : null;
  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    document.addEventListener("click", function (e) { var a = e.target.closest('a[href^="#"]'); if (!a || e.defaultPrevented) return; var id = a.getAttribute("href"); if (id.length < 2 || !$(id)) return; e.preventDefault(); lenis.scrollTo($(id), { offset: -76 }); });
  }
  gsap.fromTo("#bento .tile", { y: 30, opacity: 0, scale: .97 }, { y: 0, opacity: 1, scale: 1, duration: .7, stagger: .06, ease: "power3.out", clearProps: "transform,opacity" });
  ScrollTrigger.batch("[data-up]", { start: "top 88%", once: true, onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, duration: .7, stagger: .08, ease: "power3.out" }); } });

  function bindDynamic() {
    [].concat.apply([], dyn).forEach(function (x) { if (x.targets || x.getChildren) x.revert(); else if (x.kill) x.kill(); }); dyn = [];
    dyn.push(ScrollTrigger.batch("#cards .card", { start: "top 92%", once: true, onEnter: function (els) { gsap.fromTo(els, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .55, stagger: .06, ease: "power2.out", clearProps: "transform,opacity" }); } }));
    dyn.push(gsap.fromTo("#wk .cell", { scale: .9, opacity: 0 }, { scale: 1, opacity: 1, duration: .35, stagger: .01, clearProps: "transform,opacity", scrollTrigger: { trigger: "#wk", start: "top 85%" } }));
  }
  bindDynamic();
  ready = true;
  var rz, lw = innerWidth; window.addEventListener("resize", function () { if (innerWidth === lw) return; lw = innerWidth; clearTimeout(rz); rz = setTimeout(function () { ScrollTrigger.refresh(); }, 300); });
})();
