/* Bina Pro : contenu FR / AR / EN et animations (GSAP + ScrollTrigger + Lenis, en local) */
(function () {
  var doc = document.documentElement;
  var STATIC = doc.classList.contains("static") || !window.gsap || !window.ScrollTrigger;
  if (STATIC) doc.classList.add("static");
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  function img(name, w, h, sizes, eager) {
    return '<img src="assets/img/' + name + '-800.webp" srcset="assets/img/' + name + '-800.webp 800w, assets/img/' + name + '-1600.webp 1600w" sizes="' + (sizes || "40vw") + '" width="' + w + '" height="' + h + '" alt=""' + (eager ? ' fetchpriority="high"' : ' loading="lazy"') + ' decoding="async">';
  }

  var I = {
    fr: { brand: "Bina Pro", n1: "Métiers", n2: "Parcours", n3: "Atelier", cta1: "S’inscrire", cta2: "Voir les métiers", m1: "Centre de formation, Sétif",
      h1a: "Bâtis", h1b: "ton", h1c: "métier.", lede: "Électricité, plomberie, climatisation, soudure, solaire et sécurité : 70 % de pratique en atelier, puis un stage en entreprise.",
      mH: "Six métiers", mP: "Faites défiler : le tambour tourne et la fiche du métier s’affiche. Sur mobile, choisissez un métier.",
      pH: "Votre parcours", pP: "Quatre étapes, comme les étages d’un bâtiment. L’immeuble monte à mesure que vous avancez.",
      aH: "L’atelier", aP: "Dix élèves par poste au plus, du matériel de chantier, et un formateur du métier à côté de vous.",
      c1: "Adresse", c1v: "Zone d’activités de Sétif, à 10 minutes d’Aïn El Fouara", c2: "Accès", c2v: "Tramway de Sétif, arrêt zone d’activités", c3: "Ateliers ouverts", c3v: "Du dimanche au jeudi, de 8 h à 17 h",
      oH: "Bon d’inscription", stamp: "Sétif", l1: "Nom complet", l2: "Téléphone", l3: "Métier", send: "Envoyer le bon",
      foot: "© 2026 Bina Pro, centre des métiers du bâtiment, Sétif.", by: "Site réalisé par",
      sheet: "Fiche métier", dur: "Durée", price: "Tarif", entry: "Accès", learn: "Compétences", book: "Réserver ce métier", trades: "Métiers", season: "Rentrée",
      err: "Indiquez votre nom et un numéro de téléphone valide.", demo: "Démo AFEX Digital : aucun bon n’a été envoyé, ce formulaire n’est pas encore connecté.",
      lang: "Langue", photos: "Photographies :", title: "Bina Pro, centre des métiers du bâtiment et de l’énergie à Sétif",
      setifAlt: "La fontaine d’Aïn El Fouara au centre de Sétif", setif2Alt: "Le tramway de Sétif près d’Aïn El Fouara",
      tape: ["Sécurité d’abord", "70 % de pratique", "Stage en entreprise", "Attestation de qualification", "Sétif"],
      tiles: [["crane", "Chantier"], ["weld", "Soudure"], ["solar", "Solaire"], ["worker2", "Sécurité"]] },
    ar: { brand: "بناء برو", n1: "المهن", n2: "المسار", n3: "الورشة", cta1: "سجّل الآن", cta2: "اكتشف المهن", m1: "مركز تكوين، سطيف",
      h1a: "ابنِ", h1b: "مهنتك", h1c: "بيديك.", lede: "الكهرباء، الترصيص، التكييف، التلحيم، الطاقة الشمسية والسلامة: 70 % تطبيق في الورشة، ثم تربص في مؤسسة.",
      mH: "ست مهن", mP: "مرّر الصفحة: تدور الأسطوانة وتظهر بطاقة المهنة. على الهاتف اختر مهنة.",
      pH: "مسارك", pP: "أربع مراحل مثل طوابق بناية. ترتفع العمارة كلما تقدّمت.",
      aH: "الورشة", aP: "عشرة متكوّنين في كل مركز كحد أقصى، عتاد ورشات حقيقي، ومكوّن من أهل المهنة بجانبك.",
      c1: "العنوان", c1v: "منطقة النشاطات بسطيف، على بعد 10 دقائق من عين الفوارة", c2: "الوصول", c2v: "ترامواي سطيف، محطة منطقة النشاطات", c3: "الورشات مفتوحة", c3v: "من الأحد إلى الخميس، من 8:00 إلى 17:00",
      oH: "وصل التسجيل", stamp: "سطيف", l1: "الاسم الكامل", l2: "الهاتف", l3: "المهنة", send: "أرسل الوصل",
      foot: "© 2026 بناء برو، مركز مهن البناء، سطيف.", by: "موقع من إنجاز",
      sheet: "بطاقة المهنة", dur: "المدة", price: "السعر", entry: "الشروط", learn: "المهارات", book: "احجز هذه المهنة", trades: "المهن", season: "الدخول",
      err: "أدخل اسمك ورقم هاتف صحيح.", demo: "عرض AFEX Digital: لم يُرسل أي وصل، هذا النموذج غير متصل بعد.",
      lang: "اللغة", photos: "الصور:", title: "بناء برو، مركز مهن البناء والطاقة بسطيف",
      setifAlt: "نافورة عين الفوارة في وسط سطيف", setif2Alt: "ترامواي سطيف قرب عين الفوارة",
      tape: ["السلامة أولًا", "70 % تطبيق", "تربص في مؤسسة", "شهادة تأهيل", "سطيف"],
      tiles: [["crane", "ورشة بناء"], ["weld", "تلحيم"], ["solar", "طاقة شمسية"], ["worker2", "سلامة"]] },
    en: { brand: "Bina Pro", n1: "Trades", n2: "Path", n3: "Workshop", cta1: "Enrol now", cta2: "See the trades", m1: "Training centre, Sétif",
      h1a: "Build", h1b: "your", h1c: "trade.", lede: "Electrics, plumbing, air conditioning, welding, solar and safety: 70% hands-on workshop time, then a company placement.",
      mH: "Six trades", mP: "Scroll: the drum turns and the trade sheet appears. On a phone, pick a trade.",
      pH: "Your path", pP: "Four stages, like the floors of a building. The building rises as you move forward.",
      aH: "The workshop", aP: "Ten students per workstation at most, real site equipment, and a trainer from the trade beside you.",
      c1: "Address", c1v: "Sétif business park, 10 minutes from Aïn El Fouara", c2: "Getting here", c2v: "Sétif tramway, business park stop", c3: "Workshops open", c3v: "Sunday to Thursday, 8:00 to 17:00",
      oH: "Enrolment order", stamp: "Sétif", l1: "Full name", l2: "Phone", l3: "Trade", send: "Send the order",
      foot: "© 2026 Bina Pro, building trades centre, Sétif.", by: "Website by",
      sheet: "Trade sheet", dur: "Length", price: "Fee", entry: "Entry", learn: "Skills", book: "Book this trade", trades: "Trades", season: "Next intake",
      err: "Enter your name and a valid phone number.", demo: "AFEX Digital demo: no order was sent, this form is not connected yet.",
      lang: "Language", photos: "Photographs:", title: "Bina Pro, building and energy trades centre in Sétif",
      setifAlt: "The Aïn El Fouara fountain in central Sétif", setif2Alt: "The Sétif tramway near Aïn El Fouara",
      tape: ["Safety first", "70% hands-on", "Company placement", "Qualification certificate", "Sétif"],
      tiles: [["crane", "Building site"], ["weld", "Welding"], ["solar", "Solar"], ["worker2", "Safety"]] }
  };

  var T = [
    { img: "elec", w: 1600, h: 2400, n: { fr: "Électricité du bâtiment", ar: "كهرباء البناء", en: "Building electrics" }, du: { fr: "5 mois", ar: "5 أشهر", en: "5 months" }, p: 65000, lv: { fr: "Dès 18 ans", ar: "من 18 سنة", en: "From 18" }, d: { fr: "Installer et dépanner l’électricité d’un logement et d’un local, selon les normes en vigueur.", ar: "تركيب وإصلاح كهرباء المساكن والمحلات وفق المعايير المعمول بها.", en: "Install and repair the wiring of homes and shops, to current standards." }, l: { fr: ["Lecture de schémas", "Tableau et disjoncteurs", "Prises de terre", "Domotique de base"], ar: ["قراءة المخططات", "اللوحة والقواطع", "التأريض", "أساسيات المنزل الذكي"], en: ["Reading diagrams", "Panels and breakers", "Earthing", "Basic home automation"] } },
    { img: "plumb", w: 1600, h: 1200, n: { fr: "Plomberie et sanitaire", ar: "الترصيص والصحي", en: "Plumbing and sanitary" }, du: { fr: "4 mois", ar: "4 أشهر", en: "4 months" }, p: 55000, lv: { fr: "Dès 18 ans", ar: "من 18 سنة", en: "From 18" }, d: { fr: "Poser et réparer les réseaux d’eau, le chauffe-eau et les sanitaires d’un logement.", ar: "تركيب وإصلاح شبكات الماء، سخان الماء والأدوات الصحية في المسكن.", en: "Fit and repair water networks, water heaters and bathrooms." }, l: { fr: ["Cuivre, PER et multicouche", "Évacuations", "Chauffe-eau et chaudière", "Recherche de fuites"], ar: ["النحاس وPER", "الصرف", "سخان الماء والمرجل", "كشف التسربات"], en: ["Copper, PEX and multilayer", "Drainage", "Water heaters and boilers", "Leak detection"] } },
    { img: "hvac", w: 1600, h: 1067, n: { fr: "Froid et climatisation", ar: "التبريد والتكييف", en: "Refrigeration and air conditioning" }, du: { fr: "5 mois", ar: "5 أشهر", en: "5 months" }, p: 70000, lv: { fr: "Niveau 4e AM conseillé", ar: "يُنصح بمستوى الرابعة متوسط", en: "Middle-school level advised" }, d: { fr: "Installer, charger et entretenir les climatiseurs split et les chambres froides.", ar: "تركيب، شحن وصيانة المكيفات والغرف الباردة.", en: "Install, charge and service split air conditioners and cold rooms." }, l: { fr: ["Pose de split", "Brasure et tirage au vide", "Charge en fluide", "Diagnostic des pannes"], ar: ["تركيب المكيف", "اللحام بالنحاس والتفريغ", "الشحن بالغاز", "تشخيص الأعطال"], en: ["Split installation", "Brazing and vacuuming", "Refrigerant charging", "Fault finding"] } },
    { img: "weld", w: 1600, h: 1068, n: { fr: "Soudure et charpente métallique", ar: "التلحيم والهياكل المعدنية", en: "Welding and steel framing" }, du: { fr: "4 mois", ar: "4 أشهر", en: "4 months" }, p: 60000, lv: { fr: "Dès 18 ans", ar: "من 18 سنة", en: "From 18" }, d: { fr: "Souder à l’arc et au MIG, fabriquer portails, rampes et petites structures.", ar: "التلحيم بالقوس وMIG، صناعة البوابات والدرابزين والهياكل الصغيرة.", en: "Arc and MIG welding, making gates, railings and small structures." }, l: { fr: ["Soudure à l’arc", "Soudure MIG", "Découpe et meulage", "Lecture de plans"], ar: ["التلحيم بالقوس", "التلحيم MIG", "القطع والصقل", "قراءة المخططات"], en: ["Arc welding", "MIG welding", "Cutting and grinding", "Reading drawings"] } },
    { img: "solar", w: 1600, h: 901, n: { fr: "Installateur solaire", ar: "مركّب الطاقة الشمسية", en: "Solar installer" }, du: { fr: "3 mois", ar: "3 أشهر", en: "3 months" }, p: 58000, lv: { fr: "Base en électricité conseillée", ar: "يُنصح بأساسيات الكهرباء", en: "Basic electrics advised" }, d: { fr: "Dimensionner et poser des panneaux photovoltaïques et des chauffe-eau solaires.", ar: "تحجيم وتركيب الألواح الكهروضوئية وسخانات الماء الشمسية.", en: "Size and fit photovoltaic panels and solar water heaters." }, l: { fr: ["Dimensionnement", "Pose en toiture", "Onduleurs et batteries", "Pompage solaire agricole"], ar: ["التحجيم", "التركيب على السطح", "المموجات والبطاريات", "الضخ الشمسي الفلاحي"], en: ["System sizing", "Roof mounting", "Inverters and batteries", "Solar pumping for farms"] } },
    { img: "worker", w: 1600, h: 1067, n: { fr: "Sécurité HSE sur chantier", ar: "السلامة HSE في الورشات", en: "HSE site safety" }, du: { fr: "6 semaines", ar: "6 أسابيع", en: "6 weeks" }, p: 35000, lv: { fr: "Niveau terminale", ar: "مستوى نهائي", en: "Final-year secondary" }, d: { fr: "Prévenir les risques sur un chantier de bâtiment et tenir le registre de sécurité.", ar: "الوقاية من المخاطر في ورشات البناء ومسك سجل السلامة.", en: "Prevent risks on a building site and keep the safety register." }, l: { fr: ["Analyse des risques", "Travail en hauteur", "Premiers secours", "Plan de prévention"], ar: ["تحليل المخاطر", "العمل في الأعالي", "الإسعافات الأولية", "مخطط الوقاية"], en: ["Risk assessment", "Working at height", "First aid", "Prevention plan"] } }
  ];
  var STEPS = [
    { t: { fr: "Atelier", ar: "الورشة", en: "Workshop" }, d: { fr: "Câblage, raccords, brasure et soudure sur des postes réels, dès la première semaine.", ar: "التوصيل، الربط، اللحام بالنحاس والتلحيم على مراكز حقيقية منذ الأسبوع الأول.", en: "Wiring, fittings, brazing and welding on real workstations from week one." } },
    { t: { fr: "Sécurité", ar: "السلامة", en: "Safety" }, d: { fr: "Port des EPI, consignation électrique et travail en hauteur, avant chaque chantier.", ar: "ارتداء معدات الحماية، عزل الكهرباء والعمل في الأعالي قبل كل ورشة.", en: "PPE, electrical lockout and working at height, before every site." } },
    { t: { fr: "Stage", ar: "التربص", en: "Placement" }, d: { fr: "Un mois en entreprise de bâtiment ou d’installation, suivi par votre formateur.", ar: "شهر في مؤسسة بناء أو تركيب، بمتابعة مكوّنك.", en: "A month in a building or installation company, followed by your trainer." } },
    { t: { fr: "Qualification", ar: "التأهيل", en: "Qualification" }, d: { fr: "Une épreuve pratique devant un jury, puis l’attestation de qualification.", ar: "اختبار تطبيقي أمام لجنة، ثم شهادة التأهيل.", en: "A practical test before a panel, then the qualification certificate." } }
  ];
  var REEL = [["plumb", { fr: "Travaux pratiques de plomberie", ar: "أشغال تطبيقية في الترصيص", en: "Plumbing practicals" }], ["elec2", { fr: "Ossature et coffrage", ar: "الهيكل والقوالب", en: "Framing and formwork" }], ["hvac", { fr: "Mise en service d’une climatisation", ar: "تشغيل مكيف", en: "Commissioning an air conditioner" }], ["weld2", { fr: "Un portail soudé à l’arc", ar: "بوابة ملحومة بالقوس", en: "An arc-welded gate" }], ["worker2", { fr: "Sécurité au travail en hauteur", ar: "السلامة في العمل بالأعالي", en: "Safety when working at height" }]];
  var DIMS = { plumb: [1600, 1200], elec2: [1600, 1064], hvac: [1600, 1067], weld2: [1600, 2133], worker2: [1600, 1067], crane: [1600, 905], weld: [1600, 1068], solar: [1600, 901] };
  var CREDITS = [["Dan Sloan", "CC BY-SA 2.0", "https://commons.wikimedia.org/wiki/File:Ain_El_Fouara_Fountain_-_S%C3%A9tif_(15685996830).jpg"], ["Zach1055", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:S%C3%A9tif_tram_%26_A%C3%AFn_el_Fouara,_June_2024.jpg"], ["Retired electrician", "CC0", "https://commons.wikimedia.org/wiki/File:Small_house_distribution_panel_1.jpg"], ["U.S. Navy", "domaine public", "https://commons.wikimedia.org/wiki/File:NMCB_133_Forward_Deployed_to_Rota,_Spain_(7325899).jpg"], ["State Government Photographer", "CC0", "https://commons.wikimedia.org/wiki/File:Plumbers_Trade_School_Students_Working_on_Pipes(GN08936).jpg"], ["U.S. Air Force", "domaine public", "https://commons.wikimedia.org/wiki/File:379th_ECES_HVAC_technicians_combat_rising_temperatures_(8502257).jpg"], ["U.S. Air Force", "domaine public", "https://commons.wikimedia.org/wiki/File:Let_the_sparks_fly_(13313009905).jpg"], ["Johnnybam", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Man_Welding_a_Metal_Gate.jpg"], ["CoCreatr", "CC BY-SA 2.0", "https://commons.wikimedia.org/wiki/File:Solar_installation_technician_on_rooftop_(5392894792).jpg"], ["Jorge Royan", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Construction_worker_-_8217.jpg"], ["HelenOnline", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Construction_worker_CT.jpg"], ["Alfred Twu", "CC0", "https://commons.wikimedia.org/wiki/File:New_building_under_construction_-_Portland,_Oregon.jpg"]];

  var lang = "fr", cur = 0, ready = false, dyn = [], drumST = null;
  try { var s = localStorage.getItem("binapro-lang"); if (I[s]) lang = s; } catch (e) {}
  function loc() { return lang === "ar" ? "ar-DZ" : lang === "en" ? "en-GB" : "fr-FR"; }
  function money(n) { return n.toLocaleString(lang === "ar" ? "ar-DZ" : "fr-FR") + (lang === "ar" ? " دج" : " DA"); }

  function buildBuilding() {
    var s = '<line x1="0" y1="550" x2="420" y2="550" stroke="#111" stroke-width="4"/>';
    for (var f = 0; f < 4; f++) {
      var y = 450 - f * 105;
      s += '<g class="fl" data-f="' + f + '"><rect x="70" y="' + y + '" width="250" height="100"/>';
      for (var k = 0; k < 4; k++) s += '<rect class="win" x="' + (90 + k * 58) + '" y="' + (y + 28) + '" width="36" height="44"/>';
      s += '<text x="335" y="' + (y + 60) + '" font-family="JetBrains Mono, monospace" font-weight="700" font-size="20" fill="#111">R+' + f + '</text></g>';
    }
    s += '<g class="crane"><line x1="380" y1="550" x2="380" y2="20"/><line x1="200" y1="30" x2="420" y2="30"/><path d="M380 30 L360 60 L400 60 Z"/><line x1="240" y1="30" x2="240" y2="90" stroke-dasharray="6 6"/><rect x="226" y="90" width="28" height="18" fill="#FFC400" stroke="#111" stroke-width="3"/></g>';
    $("#bld").innerHTML = s;
  }

  function show(i) {
    cur = i; var t = I[lang], x = T[i];
    $$("#picker button").forEach(function (b) { b.setAttribute("aria-pressed", +b.dataset.n === i); });
    $("#sheet").innerHTML = '<header><span class="mono">' + t.sheet + '</span><span class="mono">0' + (i + 1) + ' / 06</span></header><h3>' + x.n[lang] + '</h3><p class="d">' + x.d[lang] + '</p>' +
      '<dl class="spec"><div><dt class="mono">' + t.dur + '</dt><dd>' + x.du[lang] + '</dd></div><div><dt class="mono">' + t.price + '</dt><dd>' + money(x.p) + '</dd></div><div><dt class="mono">' + t.entry + '</dt><dd style="font-size:1.1rem">' + x.lv[lang] + '</dd></div></dl>' +
      '<ul>' + x.l[lang].map(function (y) { return '<li>' + y + '</li>'; }).join("") + '</ul><div class="go"><a class="btn ink" href="#inscription" data-k="' + i + '">' + t.book + '</a></div>';
  }

  function render() {
    var t = I[lang];
    $("#tiles").innerHTML = t.tiles.map(function (x, i) { var d = DIMS[x[0]]; return '<figure class="tile">' + img(x[0], d[0], d[1], "(min-width:1000px) 22vw, 50vw", i < 2) + '<figcaption class="mono">Fig. 0' + (i + 1) + ', ' + x[1] + '</figcaption></figure>'; }).join("");
    var tp = t.tape.map(function (x) { return "<span>" + x + "</span>"; }).join(""); $("#tape").innerHTML = tp + tp;
    var now = new Date(), y = now.getFullYear(), next = [new Date(y, 1, 1), new Date(y, 8, 1), new Date(y + 1, 1, 1)].filter(function (d) { return d > now; })[0];
    $("#season").textContent = t.season + " " + next.toLocaleDateString(loc(), { month: "long", year: "numeric" });
    $("#drum").innerHTML = T.map(function (x, i) { return '<div class="face" style="transform:rotateY(' + (i * 60) + 'deg) translateZ(var(--r))">' + img(x.img, x.w, x.h, "320px") + '<b>' + x.n[lang] + '</b></div>'; }).join("");
    $("#picker").setAttribute("aria-label", t.trades);
    $("#picker").innerHTML = T.map(function (x, i) { return '<button type="button" data-n="' + i + '" aria-pressed="false">' + x.n[lang] + '</button>'; }).join("");
    show(cur);
    $("#steps").innerHTML = STEPS.map(function (x, i) { return '<li data-s="' + i + '"><b>0' + (i + 1) + '</b><div><h3>' + x.t[lang] + '</h3><p>' + x.d[lang] + '</p></div></li>'; }).join("");
    $("#reel").innerHTML = REEL.map(function (x, i) { var d = DIMS[x[0]]; return '<figure class="frame"><figure>' + img(x[0], d[0], d[1], "(min-width:1000px) 34vw, 80vw") + '</figure><figcaption class="mono"><b>0' + (i + 1) + '</b><span>' + x[1][lang] + '</span></figcaption></figure>'; }).join("");
    $("#sel").innerHTML = T.map(function (x, i) { return '<option value="' + i + '">' + x.n[lang] + '</option>'; }).join("");
    $("#ono").textContent = "N° " + String(now.getFullYear()).slice(2) + String(now.getMonth() + 1).padStart(2, "0") + "-0" + (now.getDate() % 9 + 1);
    $("#credits").innerHTML = t.photos + " " + CREDITS.map(function (c) { return '<a href="' + c[2] + '" target="_blank" rel="noopener">' + c[0] + '</a> (' + c[1] + ')'; }).join(", ") + ", Wikimedia Commons.";
    if (!ready) buildBuilding();
  }

  function setLang(l) {
    lang = l; var t = I[l];
    doc.lang = l; doc.dir = l === "ar" ? "rtl" : "ltr"; document.title = t.title;
    $$("[data-i]").forEach(function (e) { e.textContent = t[e.dataset.i]; });
    $$("[data-alt]").forEach(function (e) { e.alt = t[e.dataset.alt]; });
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.l === l); });
    $(".lang").setAttribute("aria-label", t.lang); $("#msg").textContent = "";
    $("#big").textContent = l === "ar" ? "سطيف · Sétif · سطيف" : "Sétif · سطيف · Sétif";
    try { localStorage.setItem("binapro-lang", l); } catch (e) {}
    render();
    if (ready) { bindDynamic(); ScrollTrigger.refresh(); }
  }

  function rotateTo(i, animate) {
    if (STATIC || !animate) { $("#drum").style.transform = "rotateX(-6deg) rotateY(" + (-60 * i) + "deg)"; return; }
    gsap.to("#drum", { rotateY: -60 * i, duration: .9, ease: "power3.inOut" });
  }

  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.l !== lang) setLang(b.dataset.l); }); });
  $("#picker").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return; var i = +b.dataset.n;
    if (drumST && lenis) { lenis.scrollTo(drumST.start + (drumST.end - drumST.start) * i / 5); return; }
    show(i); rotateTo(i, true);
  });
  $("#sheet").addEventListener("click", function (e) { var a = e.target.closest("[data-k]"); if (a) $("#sel").value = a.dataset.k; });
  $("#f").addEventListener("submit", function (e) {
    e.preventDefault(); var t = I[lang], ok = this.name.value.trim() && /^0[5-7]\d{8}$/.test(this.tel.value.replace(/\s/g, ""));
    if (!ok) { $("#msg").textContent = t.err; (this.name.value.trim() ? this.tel : this.name).focus(); return; }
    $("#msg").textContent = t.demo;
  });

  var lenis = null;
  setLang(lang);
  if (STATIC) { $$("#bld .fl").forEach(function (f) { f.classList.add("on"); }); $$("#steps li").forEach(function (li) { li.classList.add("on"); }); return; }

  gsap.registerPlugin(ScrollTrigger);
  lenis = window.Lenis ? new Lenis({ lerp: 0.12 }) : null;
  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach(function (a) { a.addEventListener("click", function (e) { var id = a.getAttribute("href"); if (id.length < 2) return; var el = $(id); if (!el) return; e.preventDefault(); lenis.scrollTo(el, { offset: -72 }); }); });
  }

  /* ---------- hero: yellow bars reveal the words, the board scans in ---------- */
  var tl = gsap.timeline({ delay: .2 });
  $$("#h1 .ln").forEach(function (ln, i) {
    var bar = $(".bar", ln), tx = $(".tx", ln), rtl = doc.dir === "rtl";
    gsap.set(tx, { opacity: 0 });
    tl.to(bar, { scaleX: 1, duration: .45, ease: "power3.in", transformOrigin: rtl ? "100% 50%" : "0% 50%" }, i * .18)
      .set(tx, { opacity: 1 })
      .to(bar, { scaleX: 0, duration: .45, ease: "power3.out", transformOrigin: rtl ? "0% 50%" : "100% 50%" });
  });
  tl.from(".hero .bot", { y: 30, opacity: 0, duration: .8, ease: "power3.out" }, .9);
  gsap.from("#tiles .tile", { clipPath: "inset(0% 100% 0% 0%)", duration: 1, stagger: .14, ease: "power4.inOut", delay: .3, clearProps: "clipPath" });

  ScrollTrigger.batch("[data-up]", { start: "top 88%", once: true, onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, duration: .9, stagger: .1, ease: "power3.out" }); } });
  $$(".px").forEach(function (im) { gsap.fromTo(im, { yPercent: -14 }, { yPercent: 0, ease: "none", scrollTrigger: { trigger: im.parentNode, start: "top bottom", end: "bottom top", scrub: true } }); });
  gsap.fromTo("#big", { xPercent: 0 }, { xPercent: -35, ease: "none", scrollTrigger: { trigger: ".city", start: "top bottom", end: "bottom top", scrub: true } });

  function bindDynamic() {
    dyn.forEach(function (x) { if (x.scrollTrigger) x.scrollTrigger.kill(); if (x.kill) x.kill(); }); dyn = []; drumST = null;
    var wide = matchMedia("(min-width: 1001px)").matches;
    /* the drum turns with the scroll */
    if (wide) {
      gsap.set("#drum", { rotateX: -6, rotateY: -60 * cur });
      var dt = gsap.fromTo("#drum", { rotateY: 0 }, { rotateY: -300, ease: "none", scrollTrigger: { trigger: "#metiers .dgrid", start: "center center", end: "+=1800", pin: "#metiers", pinSpacing: true, scrub: .6, snap: { snapTo: 1 / 5, duration: .4, ease: "power2.inOut" },
        onUpdate: function (st) { var i = Math.round(st.progress * 5); if (i !== cur) show(i); } } });
      dyn.push(dt); drumST = dt.scrollTrigger;
    } else { rotateTo(cur, false); }
    /* the building rises floor by floor */
    var floors = $$("#bld .fl"), steps = $$("#steps li");
    floors.forEach(function (f) { f.classList.remove("on"); });
    var bt = gsap.timeline({ scrollTrigger: wide ? { trigger: "#parcours .rise", start: "center center", end: "+=1400", pin: "#parcours", scrub: .5 } : { trigger: "#parcours .rise", start: "top 70%", end: "bottom 60%", scrub: .5 } });
    floors.forEach(function (f, i) {
      bt.fromTo(f, { y: -260, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "bounce.out", onComplete: function () { f.classList.add("on"); steps.forEach(function (li, k) { li.classList.toggle("on", k <= i); }); }, onReverseComplete: function () { f.classList.remove("on"); steps.forEach(function (li, k) { li.classList.toggle("on", k < i); }); } }, i);
    });
    bt.fromTo("#bld .crane rect", { y: 0 }, { y: 260, duration: 3.5, ease: "none" }, 0);
    dyn.push(bt);
    /* the workshop reel slides */
    var reel = $("#reel");
    if (wide) {
      reel.style.overflow = "visible"; reel.style.width = "max-content";
      dyn.push(gsap.to(reel, { x: function () { return (doc.dir === "rtl" ? 1 : -1) * Math.max(0, reel.scrollWidth - window.innerWidth) * .6; }, ease: "none", scrollTrigger: { trigger: ".film", start: "top bottom", end: "bottom top", scrub: true, invalidateOnRefresh: true } }));
    } else { reel.style.overflow = ""; reel.style.width = ""; }
    $$("#reel img").forEach(function (im) { dyn.push(gsap.fromTo(im, { scale: 1.2 }, { scale: 1, ease: "none", scrollTrigger: { trigger: im, start: "top bottom", end: "bottom top", scrub: true } })); });
  }
  bindDynamic();
  ready = true;
  var rz; window.addEventListener("resize", function () { clearTimeout(rz); rz = setTimeout(function () { bindDynamic(); ScrollTrigger.refresh(); }, 300); });
})();
