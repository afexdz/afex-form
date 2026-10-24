/* Dar Sefra : contenu FR / AR / EN et animations (GSAP + ScrollTrigger + SplitText + Lenis, en local) */
(function () {
  var doc = document.documentElement;
  var STATIC = doc.classList.contains("static") || !window.gsap || !window.ScrollTrigger;
  if (STATIC) doc.classList.add("static");
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  function pic(name, alt, sizes, eager) {
    return '<img src="assets/img/' + name + '-800.webp" srcset="assets/img/' + name + '-800.webp 800w, assets/img/' + name + '-1600.webp 1600w" sizes="' + (sizes || "(min-width:900px) 30vw, 80vw") + '" width="1600" height="1200" alt="' + alt + '"' + (eager ? "" : ' loading="lazy"') + ' decoding="async">';
  }

  var I = {
    fr: { brand: "Dar Sefra", n1: "Les plats", n2: "Formations", n3: "Une journée", cta1: "S’inscrire", cta2: "Voir les formations",
      h1: "Apprenez la cuisine en cuisine.", lede: "Cuisinier, pâtissier, boulanger : la cuisine algérienne et internationale, en groupes de 12, avec un stage en restaurant à Oran.",
      f1: "prochaine rentrée", f2: "élèves par groupe",
      man: "Ici, on apprend le geste avant la recette : pétrir, rouler le couscous, tenir un feu, dresser une assiette.",
      manP: "Chaque technique est montrée par le chef, puis refaite par chaque élève, jusqu’à ce qu’elle soit juste.",
      gH: "Ce que vous saurez préparer", gP: "De la table familiale à la vitrine de pâtisserie : les plats travaillés pendant la formation.",
      fH: "Nos formations", fP: "Choisissez votre niveau, puis retournez une carte pour voir le programme et le tarif.",
      dH: "Une journée à l’école", dP: "Chaque journée suit le rythme d’une vraie brigade de restaurant.",
      cH: "À Oran, face à Santa Cruz.", c1: "Horaires", c1v: "Du dimanche au jeudi, de 8 h à 16 h", c2: "Rentrées", c2v: "Octobre, février et juin", c3: "Contact", c3v: "Demander une visite de l’école",
      iH: "Réservez votre place", iP: "Laissez vos coordonnées : l’école vous rappelle pour l’entretien d’admission et la visite des cuisines.",
      l1: "Nom complet", l2: "Téléphone", l3: "Formation", send: "Envoyer ma demande",
      foot: "© 2026 Dar Sefra, école de cuisine, Oran.", by: "Site réalisé par", turn: "Voir le programme", back: "Retourner",
      err: "Indiquez votre nom et un numéro de téléphone valide.", demo: "Démo AFEX Digital : aucune demande n’a été envoyée, ce formulaire n’est pas encore connecté.",
      lang: "Langue", levels: "Niveaux", photos: "Photographies :", title: "Dar Sefra, école de cuisine et de pâtisserie à Oran",
      kneadAlt: "Des mains pétrissent une pâte sur un plan fariné", oranAlt: "Le fort de Santa Cruz sur la montagne au-dessus d’Oran", makroutAlt: "Makrout aux amandes sur un plateau",
      lv: { ini: "Initiation", dip: "Diplômante", per: "Perfectionnement" } },
    ar: { brand: "دار السفرة", n1: "الأطباق", n2: "التكوينات", n3: "يوم في المدرسة", cta1: "سجّل الآن", cta2: "اكتشف التكوينات",
      h1: "تعلّم الطبخ داخل المطبخ.", lede: "طباخ، حلواني، خباز: المطبخ الجزائري والعالمي، في أفواج من 12، مع تربص في مطعم بوهران.",
      f1: "الدخول القادم", f2: "متكوّنًا في الفوج",
      man: "هنا نتعلّم الحركة قبل الوصفة: العجن، فتل الكسكسي، التحكّم في النار، وتقديم الطبق.",
      manP: "كل تقنية يعرضها الشاف، ثم يعيدها كل متكوّن حتى يتقنها.",
      gH: "ما ستتقن تحضيره", gP: "من المائدة العائلية إلى واجهة الحلويات: الأطباق التي تعمل عليها خلال التكوين.",
      fH: "تكويناتنا", fP: "اختر مستواك، ثم اقلب البطاقة لترى البرنامج والسعر.",
      dH: "يوم في المدرسة", dP: "كل يوم يتبع إيقاع فريق مطبخ حقيقي.",
      cH: "في وهران، مقابل سانتا كروز.", c1: "المواعيد", c1v: "من الأحد إلى الخميس، من 8:00 إلى 16:00", c2: "الدخول", c2v: "أكتوبر، فبراير وجوان", c3: "اتصال", c3v: "اطلب زيارة المدرسة",
      iH: "احجز مكانك", iP: "اترك معلوماتك: تتصل بك المدرسة لمقابلة القبول وزيارة المطابخ.",
      l1: "الاسم الكامل", l2: "الهاتف", l3: "التكوين", send: "أرسل طلبي",
      foot: "© 2026 دار السفرة، مدرسة الطبخ، وهران.", by: "موقع من إنجاز", turn: "عرض البرنامج", back: "رجوع",
      err: "أدخل اسمك ورقم هاتف صحيح.", demo: "عرض AFEX Digital: لم يُرسل أي طلب، هذا النموذج غير متصل بعد.",
      lang: "اللغة", levels: "المستويات", photos: "الصور:", title: "دار السفرة، مدرسة الطبخ والحلويات بوهران",
      kneadAlt: "يدان تعجنان العجين على سطح مرشوش بالدقيق", oranAlt: "حصن سانتا كروز فوق جبل وهران", makroutAlt: "مقروط باللوز في صينية",
      lv: { ini: "تمهيدي", dip: "بشهادة", per: "تحسين المستوى" } },
    en: { brand: "Dar Sefra", n1: "The dishes", n2: "Courses", n3: "A day here", cta1: "Enrol now", cta2: "See the courses",
      h1: "Learn to cook in a kitchen.", lede: "Cook, pastry chef, baker: Algerian and international cuisine, in groups of 12, with a restaurant placement in Oran.",
      f1: "next intake", f2: "students per group",
      man: "Here you learn the gesture before the recipe: kneading, rolling couscous, handling a flame, plating a dish.",
      manP: "The chef shows each technique, then every student does it again until it is right.",
      gH: "What you will be able to make", gP: "From the family table to the pastry window: the dishes you work on during the course.",
      fH: "Our courses", fP: "Pick your level, then flip a card to see the programme and the fee.",
      dH: "A day at the school", dP: "Every day follows the rhythm of a real restaurant brigade.",
      cH: "In Oran, facing Santa Cruz.", c1: "Hours", c1v: "Sunday to Thursday, 8:00 to 16:00", c2: "Intakes", c2v: "October, February and June", c3: "Contact", c3v: "Ask to visit the school",
      iH: "Book your place", iP: "Leave your details: the school calls you for an admission interview and a tour of the kitchens.",
      l1: "Full name", l2: "Phone", l3: "Course", send: "Send my request",
      foot: "© 2026 Dar Sefra, cooking school, Oran.", by: "Website by", turn: "See the programme", back: "Flip back",
      err: "Enter your name and a valid phone number.", demo: "AFEX Digital demo: no request was sent, this form is not connected yet.",
      lang: "Language", levels: "Levels", photos: "Photographs:", title: "Dar Sefra, cooking and pastry school in Oran",
      kneadAlt: "Hands kneading dough on a floured worktop", oranAlt: "Santa Cruz fort on the mountain above Oran", makroutAlt: "Almond makrout on a tray",
      lv: { ini: "Introductory", dip: "Diploma", per: "Advanced" } }
  };

  var DISHES = [
    { img: "couscous", ar: "كسكسي", n: { fr: "Couscous aux légumes", ar: "كسكسي بالخضر", en: "Vegetable couscous" }, d: { fr: "Rouler la graine, cuire à la vapeur, monter la sauce.", ar: "فتل الحبة، الطهي بالبخار وتحضير المرق.", en: "Rolling the grain, steaming it, building the broth." } },
    { img: "tajine", ar: "طاجين", n: { fr: "Tajine de poulet aux olives", ar: "طاجين الدجاج بالزيتون", en: "Chicken and olive tagine" }, d: { fr: "Mijoter, réduire, équilibrer citron et épices.", ar: "الطهي على نار هادئة، التكثيف وموازنة الليمون والتوابل.", en: "Simmering, reducing, balancing lemon and spices." } },
    { img: "msemen", ar: "مسمن", n: { fr: "Msemen et m’hadjeb", ar: "المسمن والمحاجب", en: "Msemen and m’hadjeb" }, d: { fr: "Une pâte feuilletée à la main, cuite à la plaque.", ar: "عجينة مورّقة باليد تُطهى على الصفيحة.", en: "A hand-laminated dough cooked on the griddle." } },
    { img: "zlabia", ar: "زلابية", n: { fr: "Zlabia", ar: "الزلابية", en: "Zlabia" }, d: { fr: "La pâte, la friture et le sirop du ramadan.", ar: "العجينة، القلي وشراب رمضان.", en: "The batter, the frying and the Ramadan syrup." } },
    { img: "makrout", ar: "مقروط", n: { fr: "Makrout aux amandes", ar: "مقروط اللوز", en: "Almond makrout" }, d: { fr: "Pâte d’amande, glaçage et présentation de fête.", ar: "عجينة اللوز، التغليف والتقديم للأعراس.", en: "Almond paste, icing and celebration presentation." } },
    { img: "baklawa", ar: "بقلاوة", n: { fr: "Baklawa", ar: "البقلاوة", en: "Baklawa" }, d: { fr: "Les feuilles, la farce et la découpe en losanges.", ar: "الأوراق، الحشو والتقطيع على شكل معيّنات.", en: "The sheets, the filling and the diamond cut." } },
    { img: "croissant", ar: "كرواسون", n: { fr: "Croissant pur beurre", ar: "كرواسون بالزبدة", en: "All-butter croissant" }, d: { fr: "Le tourage et la pousse, comme en boulangerie.", ar: "التوريق والتخمير كما في المخبزة.", en: "Lamination and proofing, the bakery way." } }
  ];

  var C = [
    { lv: "ini", img: "couscous", p: 35000, t: { fr: "Cuisine algérienne familiale", ar: "المطبخ الجزائري العائلي", en: "Algerian home cooking" }, du: { fr: "6 semaines", ar: "6 أسابيع", en: "6 weeks" }, l: { fr: ["Chorba, rechta, couscous", "Tajines et sauces", "Hygiène et conservation"], ar: ["الشوربة، الرشتة، الكسكسي", "الطواجن والصلصات", "النظافة والحفظ"], en: ["Chorba, rechta, couscous", "Tagines and sauces", "Hygiene and storage"] } },
    { lv: "ini", img: "patisserie", p: 32000, t: { fr: "Gâteaux traditionnels", ar: "الحلويات التقليدية", en: "Traditional cakes" }, du: { fr: "5 semaines", ar: "5 أسابيع", en: "5 weeks" }, l: { fr: ["Baklawa, makrout, griwech", "Tcharek et dziriette", "Plateau de fête"], ar: ["البقلاوة، المقروط، القريوش", "التشاراك والدزيريات", "صينية الأعراس"], en: ["Baklawa, makrout, griwech", "Tcharek and dziriette", "A celebration tray"] } },
    { lv: "ini", img: "msemen", p: 30000, t: { fr: "Pains et galettes", ar: "الخبز والكسرة", en: "Breads and flatbreads" }, du: { fr: "4 semaines", ar: "4 أسابيع", en: "4 weeks" }, l: { fr: ["Pain maison et matlou’", "Kesra, msemen, m’hadjeb", "Levain et fermentation"], ar: ["الخبز والمطلوع", "الكسرة، المسمن، المحاجب", "الخميرة والتخمير"], en: ["House bread and matlou’", "Kesra, msemen, m’hadjeb", "Sourdough and fermentation"] } },
    { lv: "dip", img: "chef", p: 120000, t: { fr: "Cuisinier professionnel", ar: "طباخ محترف", en: "Professional cook" }, du: { fr: "9 mois", ar: "9 أشهر", en: "9 months" }, l: { fr: ["Cuisine algérienne et internationale", "Stage de 2 mois en restaurant", "Diplôme de cuisinier"], ar: ["المطبخ الجزائري والعالمي", "تربص شهرين في مطعم", "شهادة طباخ"], en: ["Algerian and international cuisine", "2-month restaurant placement", "Cook’s diploma"] } },
    { lv: "dip", img: "baklawa", p: 110000, t: { fr: "Pâtissier professionnel", ar: "حلواني محترف", en: "Professional pastry chef" }, du: { fr: "8 mois", ar: "8 أشهر", en: "8 months" }, l: { fr: ["Pâtisserie française et orientale", "Chocolat et entremets", "Stage en pâtisserie"], ar: ["الحلويات الفرنسية والشرقية", "الشوكولاتة والحلويات الراقية", "تربص في محل حلويات"], en: ["French and oriental pastry", "Chocolate and entremets", "Pastry shop placement"] } },
    { lv: "dip", img: "oven", p: 95000, t: { fr: "Boulanger et viennoiseries", ar: "خباز ومعجنات", en: "Baker and viennoiserie" }, du: { fr: "6 mois", ar: "6 أشهر", en: "6 months" }, l: { fr: ["Baguette et pains spéciaux", "Croissants et brioches", "Gestion d’un fournil"], ar: ["الباقيت والخبز الخاص", "الكرواسون والبريوش", "تسيير مخبزة"], en: ["Baguettes and speciality breads", "Croissants and brioches", "Running a bakehouse"] } },
    { lv: "per", img: "tajine", p: 45000, t: { fr: "Cuisine de restaurant et dressage", ar: "مطبخ المطاعم والتقديم", en: "Restaurant cooking and plating" }, du: { fr: "4 semaines", ar: "4 أسابيع", en: "4 weeks" }, l: { fr: ["Cuissons et sauces de base", "Dressage à l’assiette", "Coût d’un plat"], ar: ["الطهي والصلصات الأساسية", "تقديم الأطباق", "حساب تكلفة الطبق"], en: ["Cooking methods and base sauces", "Plating", "Costing a dish"] } },
    { lv: "per", img: "makrout", p: 40000, t: { fr: "Pièces de fête et wedding cakes", ar: "حلويات الأعراس والكعك المركّب", en: "Celebration pieces and wedding cakes" }, du: { fr: "3 semaines", ar: "3 أسابيع", en: "3 weeks" }, l: { fr: ["Pâte à sucre et décor", "Montage sur étages", "Devis pour un mariage"], ar: ["عجينة السكر والتزيين", "التركيب على طوابق", "تسعير طلبية عرس"], en: ["Sugar paste and decoration", "Tiered assembly", "Quoting a wedding order"] } },
    { lv: "per", img: "croissant", p: 38000, t: { fr: "Ouvrir son activité de traiteur", ar: "فتح نشاط ممون حفلات", en: "Starting a catering business" }, du: { fr: "3 semaines", ar: "3 أسابيع", en: "3 weeks" }, l: { fr: ["Registre de commerce et hygiène", "Menus et prix", "Vendre sur Instagram et WhatsApp"], ar: ["السجل التجاري والنظافة", "القوائم والأسعار", "البيع عبر إنستغرام وواتساب"], en: ["Business registration and hygiene", "Menus and pricing", "Selling on Instagram and WhatsApp"] } }
  ];

  var STEPS = [
    { h: "08:00", img: "knead", t: { fr: "Mise en place", ar: "التحضير", en: "Mise en place" }, d: { fr: "Pétrissage, épluchage et découpes : chaque poste est prêt avant le premier feu.", ar: "العجن، التقشير والتقطيع: كل مركز جاهز قبل إشعال النار.", en: "Kneading, peeling and cutting: every station is ready before the first flame." } },
    { h: "10:00", img: "chef", t: { fr: "Technique du jour", ar: "تقنية اليوم", en: "Technique of the day" }, d: { fr: "Le chef montre une technique devant la brigade, puis chacun la refait à son poste.", ar: "يعرض الشاف تقنية أمام الفريق، ثم يعيدها كل واحد في مركزه.", en: "The chef demonstrates one technique, then everyone repeats it at their station." } },
    { h: "12:00", img: "tajine", t: { fr: "Service", ar: "الخدمة", en: "Service" }, d: { fr: "Le déjeuner est servi au restaurant d’application de l’école, comme un vrai service.", ar: "يُقدَّم الغداء في مطعم التطبيق بالمدرسة كخدمة حقيقية.", en: "Lunch is served in the school’s training restaurant, like a real service." } },
    { h: "14:00", img: "oven", t: { fr: "Four et pâtisserie", ar: "الفرن والحلويات", en: "Oven and pastry" }, d: { fr: "Cuisson des pains et des gâteaux, puis dégustation et retour du chef.", ar: "خبز العجائن والحلويات، ثم التذوق وملاحظات الشاف.", en: "Baking breads and cakes, then tasting and the chef’s feedback." } }
  ];

  var CREDITS = [["couscous", "Yasmine ziat", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Couscous_(Alg%C3%A9rie,_lieu_exact_non_pr%C3%A9cis%C3%A9).jpg"], ["tajine", "Solima arizo", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Tajine_de_poulet_et_olives.jpg"], ["patisserie", "Waran18", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Patisserie_dz.jpg"], ["makrout", "Bigmumy", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Makrout_el_louz_amandes.jpg"], ["baklawa", "Wicanto", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Baklawa_alg%C3%A9rienne.jpg"], ["zlabia", "Opsylac", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Zlabia_(P%C3%A2tisserie_orientale).jpg"], ["msemen", "Popo le Chien", "CC0", "https://commons.wikimedia.org/wiki/File:Msemmen.jpg"], ["chef", "City Foodsters", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Chef_Joshua_Skenes_Inside_the_Chef%27s_Counter_Kitchen_2.jpg"], ["oven", "Jeremy Keith", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Putting_bread_in_the_oven_(5958998763).jpg"], ["knead", "Shixart1985", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Baker_woman%27s_hands_kneading_bread_dough.jpg"], ["croissant", "SKopp", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Croissant,_whole.jpg"], ["oran", "Maya-Anaïs Yataghène", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Alg%C3%A9rie_-_Oranie_-_5.jpg"]];

  var lang = "fr", lv = "ini", splitH1 = null, splitMan = null, manST = null, ready = false, stepST = [];
  try { var s = localStorage.getItem("darsefra-lang"); if (I[s]) lang = s; } catch (e) {}
  function fmt(n) { return n.toLocaleString(lang === "ar" ? "ar-DZ" : "fr-FR") + (lang === "ar" ? " دج" : " DA"); }

  function nextIntake() {
    var now = new Date(), y = now.getFullYear(), cand = [[y, 1], [y, 5], [y, 9], [y + 1, 1]];
    for (var i = 0; i < cand.length; i++) { var d = new Date(cand[i][0], cand[i][1], 1); if (d > now) return d; }
  }

  function renderDynamic() {
    var t = I[lang];
    var names = DISHES.map(function (d) { return '<span>' + d.n[lang === "ar" ? "fr" : lang] + '</span><span>' + d.ar + '</span>'; }).join("");
    $("#mq").innerHTML = names + names;
    $("#track").innerHTML = DISHES.map(function (d) {
      return '<article class="dish"><figure>' + pic(d.img, d.n[lang]) + '<span lang="ar">' + d.ar + '</span></figure><h3>' + d.n[lang] + '</h3><p>' + d.d[lang] + '</p></article>';
    }).join("");
    $("#lv").setAttribute("aria-label", t.levels);
    $("#lv").innerHTML = Object.keys(t.lv).map(function (k) { return '<button type="button" data-v="' + k + '" aria-pressed="' + (k === lv) + '">' + t.lv[k] + '</button>'; }).join("");
    renderFlips();
    $("#steps").innerHTML = STEPS.map(function (x, i) {
      return '<li data-s="' + i + '">' + pic(x.img, x.t[lang], "90vw").replace("<img", '<img class="mob"') + '<b>' + x.h + '</b><h3>' + x.t[lang] + '</h3><p>' + x.d[lang] + '</p></li>';
    }).join("");
    $("#stick").innerHTML = STEPS.map(function (x, i) { return pic(x.img, "", "45vw").replace("<img", '<img class="' + (i === 0 ? "on" : "") + '"'); }).join("") + '<time id="clock">' + STEPS[0].h + '</time>';
    $("#sel").innerHTML = C.map(function (c, i) { return '<option value="' + i + '">' + c.t[lang] + '</option>'; }).join("");
    var d = nextIntake();
    $("#rentree").textContent = d.toLocaleDateString(lang === "ar" ? "ar-DZ" : lang === "en" ? "en-GB" : "fr-FR", { month: "long", year: "numeric" });
    $("#credits").innerHTML = t.photos + " " + CREDITS.map(function (c) { return '<a href="' + c[3] + '" target="_blank" rel="noopener">' + c[1] + '</a> (' + c[2] + ')'; }).join(", ") + ", Wikimedia Commons.";
  }

  function renderFlips() {
    var t = I[lang];
    $("#flips").innerHTML = C.filter(function (c) { return c.lv === lv; }).map(function (c) {
      return '<article class="flip"><div class="inner"><div class="face front">' + pic(c.img, "") + '<h3>' + c.t[lang] + '</h3><span class="meta">' + c.du[lang] + '</span><button type="button" class="turn" aria-expanded="false">' + t.turn + '</button></div>' +
        '<div class="face back" aria-hidden="true"><h3>' + c.t[lang] + '</h3><ul>' + c.l[lang].map(function (x) { return "<li>" + x + "</li>"; }).join("") + '</ul><span class="pr">' + fmt(c.p) + '</span><button type="button" class="turn" tabindex="-1">' + t.back + '</button></div></div></article>';
    }).join("");
    if (!STATIC) gsap.from("#flips .flip", { y: 50, opacity: 0, rotateX: -12, duration: .8, stagger: .1, ease: "power3.out", clearProps: "transform,opacity" });
  }

  function setLang(l) {
    lang = l; var t = I[l];
    if (splitH1) { splitH1.revert(); splitH1 = null; }
    if (splitMan) { splitMan.revert(); splitMan = null; }
    doc.lang = l; doc.dir = l === "ar" ? "rtl" : "ltr"; document.title = t.title;
    $$("[data-i]").forEach(function (e) { e.textContent = t[e.dataset.i]; });
    $$("[data-alt]").forEach(function (e) { e.alt = t[e.dataset.alt]; });
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.l === l); });
    $(".lang").setAttribute("aria-label", t.lang); $("#msg").textContent = "";
    try { localStorage.setItem("darsefra-lang", l); } catch (e) {}
    renderDynamic();
    if (ready) { bindSteps(); document.fonts.ready.then(function () { splitWords(); ScrollTrigger.refresh(); }); }
  }

  /* ---------- interactions ---------- */
  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.l !== lang) setLang(b.dataset.l); }); });
  $("#lv").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; lv = b.dataset.v; $$("#lv button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); renderFlips(); });
  $("#flips").addEventListener("click", function (e) {
    var b = e.target.closest(".turn"); if (!b) return;
    var inner = b.closest(".inner"), open = !inner.classList.contains("open"), f = $(".front", inner), k = $(".back", inner);
    inner.classList.toggle("open", open); f.setAttribute("aria-hidden", open); k.setAttribute("aria-hidden", !open);
    $(".turn", f).tabIndex = open ? -1 : 0; $(".turn", k).tabIndex = open ? 0 : -1; $(".turn", f).setAttribute("aria-expanded", open);
    $(".turn", open ? k : f).focus({ preventScroll: true });
  });
  $("#f").addEventListener("submit", function (e) {
    e.preventDefault(); var t = I[lang], ok = this.name.value.trim() && /^0[5-7]\d{8}$/.test(this.tel.value.replace(/\s/g, ""));
    if (!ok) { $("#msg").textContent = t.err; (this.name.value.trim() ? this.tel : this.name).focus(); return; }
    $("#msg").textContent = t.demo;
  });
  var hd = $("#hd");
  function onScroll() { hd.classList.toggle("solid", window.scrollY > window.innerHeight * 0.6); }
  window.addEventListener("scroll", onScroll, { passive: true });

  setLang(lang);
  onScroll();
  if (STATIC) return;

  /* ---------- smooth scroll ---------- */
  gsap.registerPlugin(ScrollTrigger, SplitText);
  var lenis = window.Lenis ? new Lenis({ lerp: 0.1 }) : null;
  if (lenis) {
    lenis.on("scroll", function () { ScrollTrigger.update(); onScroll(); });
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach(function (a) { a.addEventListener("click", function (e) { var id = a.getAttribute("href"); if (id.length < 2) return; var el = $(id); if (!el) return; e.preventDefault(); lenis.scrollTo(el, { offset: -70 }); }); });
  }

  /* ---------- hero ---------- */
  gsap.to("#heroImg", { scale: 1, duration: 2.4, ease: "power2.out" });
  gsap.set("#h1", { autoAlpha: 0 });
  document.fonts.ready.then(function () {
    splitH1 = SplitText.create("#h1", { type: "lines", mask: "lines", linesClass: "line" });
    gsap.set("#h1", { autoAlpha: 1 });
    gsap.from(splitH1.lines, { yPercent: 110, duration: 1.1, stagger: .12, ease: "power4.out" });
  });
  gsap.from(".hero .row > *", { y: 30, opacity: 0, duration: 1, stagger: .15, delay: .7, ease: "power3.out" });
  gsap.to("#heroImg", { yPercent: 12, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  /* ---------- manifesto: words light up as you read ---------- */
  function splitWords() {
    if (manST) { manST.kill(); manST = null; }
    if (splitMan) splitMan.revert();
    splitMan = SplitText.create("#man", { type: "words", wordsClass: "w8" });
    manST = gsap.to(splitMan.words, { opacity: 1, stagger: .08, ease: "none", scrollTrigger: { trigger: "#man", start: "top 80%", end: "bottom 45%", scrub: true } }).scrollTrigger;
  }
  document.fonts.ready.then(function () { splitWords(); ScrollTrigger.refresh(); });

  /* ---------- reveals ---------- */
  ScrollTrigger.batch("[data-up]", { start: "top 88%", once: true, onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, duration: 1, stagger: .1, ease: "power3.out" }); } });

  /* ---------- horizontal dishes, pinned on large screens ---------- */
  var mm = gsap.matchMedia();
  mm.add("(min-width: 900px)", function () {
    var track = $("#track");
    function dist() { return Math.max(0, track.scrollWidth - window.innerWidth); }
    gsap.to(track, { x: function () { return (doc.dir === "rtl" ? 1 : -1) * dist(); }, ease: "none",
      scrollTrigger: { trigger: ".hs", start: "top top", end: function () { return "+=" + dist(); }, pin: true, scrub: 1, invalidateOnRefresh: true } });
  });

  /* ---------- a day: the sticky photo follows the steps ---------- */
  function bindSteps() {
    stepST.forEach(function (x) { x.kill(); }); stepST = [];
    $$("#steps li").forEach(function (li) {
      stepST.push(ScrollTrigger.create({ trigger: li, start: "top 55%", end: "bottom 55%", onToggle: function (st) {
        if (!st.isActive) return; var i = +li.dataset.s;
        $$("#stick img").forEach(function (im, k) { im.classList.toggle("on", k === i); });
        var c = $("#clock"); if (c) c.textContent = STEPS[i].h;
      } }));
    });
  }
  bindSteps();
  ready = true;

  /* ---------- Oran: parallax ---------- */
  gsap.fromTo("#cityBg", { yPercent: -8 }, { yPercent: 8, ease: "none", scrollTrigger: { trigger: ".city", start: "top bottom", end: "bottom top", scrub: true } });
  gsap.from(".info", { y: 60, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".city", start: "top 60%" } });
})();
