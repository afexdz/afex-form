/* Sahla Digital : contenu FR / AR / EN et animations (GSAP + ScrollTrigger + Flip + Lenis, en local) */
(function () {
  var doc = document.documentElement;
  var STATIC = doc.classList.contains("static") || !window.gsap || !window.ScrollTrigger;
  if (STATIC) doc.classList.add("static");
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  function img(name, w, h, sizes) {
    return '<img src="assets/img/' + name + '-800.webp" srcset="assets/img/' + name + '-800.webp 800w, assets/img/' + name + '-1600.webp 1600w" sizes="' + (sizes || "40vw") + '" width="' + w + '" height="' + h + '" alt="" loading="lazy" decoding="async">';
  }
  var IC = { xl: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M3 15h18M9 3v18"/>', gr: '<circle cx="13.5" cy="6.5" r="2.5"/><path d="M3 21c3-6 6-9 9-9 4 0 5 3 9 3"/><path d="M3 21h18"/>' };
  function icon(k) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + IC[k] + '</svg>'; }

  var I = {
    fr: { brand: "Sahla Digital", n1: "Formations", n2: "Test gratuit", n3: "Annaba", cta1: "S’inscrire", cta2: "Faire le test gratuit", cta3: "Voir les formations",
      pill: "Cours du soir à Annaba", h1a: "Apprenez", h1b: "après le travail.", lede: "Bureautique, informatique, marketing digital, langues, transit et logistique. Commencez par un test de niveau gratuit, en deux minutes.",
      fH: "Huit formations, un seul soir à bloquer.", fP: "Des groupes de 15 au plus, un ordinateur par personne, une attestation à la fin.",
      tH: "Votre niveau en deux minutes", tP: "Répondez à cinq questions de bureautique. On vous dit par quelle formation commencer.", bot: "Sahla, test de niveau", botS: "répond en quelques secondes",
      nH: "Ce soir à l’école", nP: "De 18 h à 20 h 30, du dimanche au jeudi.",
      cH: "Annaba, ouverte sur la mer.", c1: "Centre-ville, près du Cours de la Révolution", c2: "Accueil de 9 h à 20 h 30", d1: "Basilique Saint-Augustin", d2: "Cours de la Révolution",
      iH: "Réservez votre place", iP: "Laissez vos coordonnées : on vous rappelle pour la prochaine session du soir.", l1: "Nom complet", l2: "Téléphone", l3: "Formation", send: "Envoyer ma demande",
      foot: "© 2026 Sahla Digital, école d’informatique et de langues, Annaba.", by: "Site réalisé par", photos: "Photographies :", lang: "Langue", filter: "Filtrer les formations",
      err: "Indiquez votre nom et un numéro de téléphone valide.", demo: "Démo AFEX Digital : aucune demande n’a été envoyée, ce formulaire n’est pas encore connecté.",
      title: "Sahla Digital, école d’informatique, de langues et de transit à Annaba",
      sunsetAlt: "Un porte-conteneurs à quai au coucher du soleil", basilicaAlt: "La basilique Saint-Augustin sur sa colline à Annaba", coursAlt: "Le Cours de la Révolution à Annaba en fin de journée", beach2Alt: "La côte rocheuse près d’Annaba",
      roll: ["Excel", "le marketing", "l’anglais", "le transit", "Photoshop", "WordPress"],
      all: "Tout", doms: { bur: "Bureautique", info: "Informatique", dig: "Digital", lng: "Langues", tr: "Transit" },
      strip: { basilica: "Basilique Saint-Augustin", beach: "Plage d’Annaba", cours: "Cours de la Révolution", sunset: "Le port, au soir", beach2: "La corniche", ship: "Transit maritime" },
      hello: "Bonjour ! Cinq questions rapides, et je vous dis par quelle formation commencer.", start: "C’est parti", again: "Recommencer", book: "Réserver cette formation", typing: "Sahla écrit…",
      levels: [["Débutant", "Commencez par « Bureautique de base » : Word, Excel et e-mails, pas à pas."], ["Intermédiaire", "« Excel avancé » est fait pour vous : tableaux croisés, formules et graphiques."], ["Avancé", "Passez à « Marketing digital » ou à « Transit et douane » pour viser un poste."]], score: "Votre score" },
    ar: { brand: "سهلة ديجيتال", n1: "التكوينات", n2: "اختبار مجاني", n3: "عنابة", cta1: "سجّل الآن", cta2: "قم بالاختبار المجاني", cta3: "اكتشف التكوينات",
      pill: "دروس مسائية بعنابة", h1a: "تعلّم", h1b: "بعد العمل.", lede: "المكتبية، الإعلام الآلي، التسويق الرقمي، اللغات، العبور واللوجستيك. ابدأ باختبار مستوى مجاني في دقيقتين.",
      fH: "ثمانية تكوينات، وأمسية واحدة تخصّصها.", fP: "أفواج من 15 كحد أقصى، حاسوب لكل متكوّن، وشهادة في النهاية.",
      tH: "مستواك في دقيقتين", tP: "أجب عن خمسة أسئلة في المكتبية. نخبرك بأي تكوين تبدأ.", bot: "سهلة، اختبار المستوى", botS: "ترد في ثوانٍ",
      nH: "هذا المساء في المدرسة", nP: "من 18:00 إلى 20:30، من الأحد إلى الخميس.",
      cH: "عنابة، مفتوحة على البحر.", c1: "وسط المدينة، قرب ساحة الثورة", c2: "الاستقبال من 9:00 إلى 20:30", d1: "كنيسة القديس أوغسطين", d2: "ساحة الثورة",
      iH: "احجز مكانك", iP: "اترك معلوماتك: نتصل بك للدورة المسائية القادمة.", l1: "الاسم الكامل", l2: "الهاتف", l3: "التكوين", send: "أرسل طلبي",
      foot: "© 2026 سهلة ديجيتال، مدرسة الإعلام الآلي واللغات، عنابة.", by: "موقع من إنجاز", photos: "الصور:", lang: "اللغة", filter: "تصفية التكوينات",
      err: "أدخل اسمك ورقم هاتف صحيح.", demo: "عرض AFEX Digital: لم يُرسل أي طلب، هذا النموذج غير متصل بعد.",
      title: "سهلة ديجيتال، مدرسة الإعلام الآلي واللغات والعبور بعنابة",
      sunsetAlt: "سفينة حاويات راسية عند الغروب", basilicaAlt: "كنيسة القديس أوغسطين على تلتها بعنابة", coursAlt: "ساحة الثورة بعنابة في آخر النهار", beach2Alt: "الساحل الصخري قرب عنابة",
      roll: ["إكسل", "التسويق", "الإنجليزية", "العبور", "فوتوشوب", "ووردبريس"],
      all: "الكل", doms: { bur: "المكتبية", info: "الإعلام الآلي", dig: "الرقمي", lng: "اللغات", tr: "العبور" },
      strip: { basilica: "كنيسة القديس أوغسطين", beach: "شاطئ عنابة", cours: "ساحة الثورة", sunset: "الميناء مساءً", beach2: "الكورنيش", ship: "العبور البحري" },
      hello: "مرحبًا! خمسة أسئلة سريعة وأخبرك بأي تكوين تبدأ.", start: "لنبدأ", again: "أعد الاختبار", book: "احجز هذا التكوين", typing: "سهلة تكتب…",
      levels: [["مبتدئ", "ابدأ بـ «المكتبية الأساسية»: وورد، إكسل والبريد خطوة بخطوة."], ["متوسط", "«إكسل المتقدم» يناسبك: الجداول المحورية، الصيغ والرسوم البيانية."], ["متقدم", "انتقل إلى «التسويق الرقمي» أو «العبور والجمارك» للحصول على منصب."]], score: "نتيجتك" },
    en: { brand: "Sahla Digital", n1: "Courses", n2: "Free test", n3: "Annaba", cta1: "Enrol now", cta2: "Take the free test", cta3: "See the courses",
      pill: "Evening classes in Annaba", h1a: "Learn", h1b: "after work.", lede: "Office software, IT, digital marketing, languages, freight and logistics. Start with a free two-minute placement test.",
      fH: "Eight courses, one evening to set aside.", fP: "Groups of 15 at most, one computer each, a certificate at the end.",
      tH: "Your level in two minutes", tP: "Answer five office-skills questions. We tell you which course to start with.", bot: "Sahla, placement test", botS: "replies in seconds",
      nH: "Tonight at the school", nP: "From 18:00 to 20:30, Sunday to Thursday.",
      cH: "Annaba, open to the sea.", c1: "City centre, near the Cours de la Révolution", c2: "Front desk 9:00 to 20:30", d1: "Basilica of Saint Augustine", d2: "Cours de la Révolution",
      iH: "Book your place", iP: "Leave your details: we call you back about the next evening session.", l1: "Full name", l2: "Phone", l3: "Course", send: "Send my request",
      foot: "© 2026 Sahla Digital, IT and language school, Annaba.", by: "Website by", photos: "Photographs:", lang: "Language", filter: "Filter the courses",
      err: "Enter your name and a valid phone number.", demo: "AFEX Digital demo: no request was sent, this form is not connected yet.",
      title: "Sahla Digital, IT, language and freight school in Annaba",
      sunsetAlt: "A container ship at the quay at sunset", basilicaAlt: "The Basilica of Saint Augustine on its hill in Annaba", coursAlt: "The Cours de la Révolution in Annaba at dusk", beach2Alt: "The rocky coast near Annaba",
      roll: ["Excel", "marketing", "English", "freight", "Photoshop", "WordPress"],
      all: "All", doms: { bur: "Office", info: "IT", dig: "Digital", lng: "Languages", tr: "Freight" },
      strip: { basilica: "Basilica of Saint Augustine", beach: "Annaba beach", cours: "Cours de la Révolution", sunset: "The port at dusk", beach2: "The corniche", ship: "Sea freight" },
      hello: "Hello! Five quick questions, and I’ll tell you which course to start with.", start: "Let’s go", again: "Start again", book: "Book this course", typing: "Sahla is typing…",
      levels: [["Beginner", "Start with “Office basics”: Word, Excel and email, step by step."], ["Intermediate", "“Advanced Excel” is for you: pivot tables, formulas and charts."], ["Advanced", "Move on to “Digital marketing” or “Freight and customs” to aim for a job."]], score: "Your score" }
  };

  var C = [
    { d: "dig", img: "phone", w: 1600, h: 1068, cls: "big", t: { fr: "Marketing digital", ar: "التسويق الرقمي", en: "Digital marketing" }, s: { fr: "Facebook, Instagram, TikTok et la publicité qui vend.", ar: "فيسبوك، إنستغرام، تيك توك والإشهار الذي يبيع.", en: "Facebook, Instagram, TikTok and ads that sell." }, du: { fr: "2 mois", ar: "شهران", en: "2 months" }, p: 30000 },
    { d: "bur", img: "laptop", w: 1600, h: 1067, t: { fr: "Bureautique de base", ar: "المكتبية الأساسية", en: "Office basics" }, s: { fr: "Word, Excel et e-mails pour débuter.", ar: "وورد، إكسل والبريد للمبتدئين.", en: "Word, Excel and email for beginners." }, du: { fr: "4 semaines", ar: "4 أسابيع", en: "4 weeks" }, p: 12000 },
    { d: "bur", ic: "xl", cls: "sand", t: { fr: "Excel avancé", ar: "إكسل المتقدم", en: "Advanced Excel" }, s: { fr: "Tableaux croisés et tableaux de bord.", ar: "الجداول المحورية ولوحات القيادة.", en: "Pivot tables and dashboards." }, du: { fr: "4 semaines", ar: "4 أسابيع", en: "4 weeks" }, p: 15000 },
    { d: "dig", img: "code", w: 1523, h: 1438, cls: "wide", t: { fr: "Création de sites web", ar: "إنشاء مواقع الويب", en: "Building websites" }, s: { fr: "HTML, CSS et WordPress pour les commerces.", ar: "HTML وCSS ووردبريس للمحلات.", en: "HTML, CSS and WordPress for shops." }, du: { fr: "3 mois", ar: "3 أشهر", en: "3 months" }, p: 45000 },
    { d: "info", img: "lab", w: 1600, h: 1067, t: { fr: "Maintenance informatique", ar: "صيانة الإعلام الآلي", en: "Computer maintenance" }, s: { fr: "Montage, réseaux et dépannage.", ar: "التركيب، الشبكات والإصلاح.", en: "Assembly, networks and repair." }, du: { fr: "3 mois", ar: "3 أشهر", en: "3 months" }, p: 28000 },
    { d: "dig", ic: "gr", cls: "solid", t: { fr: "Infographie", ar: "التصميم الجرافيكي", en: "Graphic design" }, s: { fr: "Photoshop, Illustrator et Canva.", ar: "فوتوشوب، إليستريتور وكانفا.", en: "Photoshop, Illustrator and Canva." }, du: { fr: "2 mois", ar: "شهران", en: "2 months" }, p: 32000 },
    { d: "tr", img: "ship", w: 1600, h: 1067, cls: "wide", t: { fr: "Transit et douane", ar: "العبور والجمارك", en: "Freight and customs" }, s: { fr: "Dédouanement, incoterms et port d’Annaba.", ar: "التخليص الجمركي، الإنكوترمز وميناء عنابة.", en: "Customs clearance, Incoterms and the port of Annaba." }, du: { fr: "3 mois", ar: "3 أشهر", en: "3 months" }, p: 40000 },
    { d: "lng", img: "classroom", w: 1600, h: 1060, cls: "wide", t: { fr: "Anglais et français professionnels", ar: "الإنجليزية والفرنسية المهنية", en: "Business English and French" }, s: { fr: "E-mails, entretiens et réunions.", ar: "المراسلات، المقابلات والاجتماعات.", en: "Emails, interviews and meetings." }, du: { fr: "2 mois", ar: "شهران", en: "2 months" }, p: 18000 }
  ];
  var STRIP = [["basilica", 1600, 1060], ["beach", 1600, 1200], ["cours", 1600, 1063], ["sunset", 1600, 1067], ["beach2", 1600, 1200], ["ship", 1600, 1067]];
  var Q = [
    { q: { fr: "Pour copier un texte, quel raccourci utilisez-vous ?", ar: "ما الاختصار الذي تستعمله لنسخ نص؟", en: "Which shortcut copies text?" }, o: ["Ctrl + V", "Ctrl + C", "Ctrl + Z"], a: 1 },
    { q: { fr: "Dans Excel, quelle formule additionne A1 à A10 ?", ar: "في إكسل، ما الصيغة التي تجمع من A1 إلى A10؟", en: "In Excel, which formula adds A1 to A10?" }, o: ["=SOMME(A1:A10)", "=A1+A10", "=TOTAL(A10)"], a: 0 },
    { q: { fr: "Un fichier .pdf s’ouvre plutôt avec…", ar: "ملف ‎.pdf يُفتح عادةً بـ…", en: "A .pdf file usually opens with…" }, o: ["Paint", "Excel", "Acrobat Reader"], a: 2 },
    { q: { fr: "À quoi sert la mise en forme conditionnelle ?", ar: "ما فائدة التنسيق الشرطي؟", en: "What is conditional formatting for?" }, o: { fr: ["Imprimer en couleur", "Colorer selon la valeur", "Protéger un fichier"], ar: ["الطباعة بالألوان", "التلوين حسب القيمة", "حماية ملف"], en: ["Printing in colour", "Colouring by value", "Protecting a file"] }, a: 1 },
    { q: { fr: "Un tableau croisé dynamique permet de…", ar: "الجدول المحوري يسمح بـ…", en: "A pivot table lets you…" }, o: { fr: ["Dessiner un tableau", "Envoyer un e-mail", "Résumer des données"], ar: ["رسم جدول", "إرسال بريد", "تلخيص البيانات"], en: ["Draw a table", "Send an email", "Summarise data"] }, a: 2 }
  ];
  var SLOTS = [["18:00", 2, { fr: "Excel avancé, groupe 2", ar: "إكسل المتقدم، الفوج 2", en: "Advanced Excel, group 2" }, { fr: "Salle Seybouse, 15 postes", ar: "قاعة سيبوس، 15 مركزًا", en: "Seybouse room, 15 stations" }], ["18:00", 0, { fr: "Marketing digital", ar: "التسويق الرقمي", en: "Digital marketing" }, { fr: "Atelier publicité Meta", ar: "ورشة إشهار ميتا", en: "Meta ads workshop" }], ["19:15", 7, { fr: "Anglais professionnel", ar: "الإنجليزية المهنية", en: "Business English" }, { fr: "Entretiens d’embauche", ar: "مقابلات التوظيف", en: "Job interviews" }]];
  var CREDITS = [["Brahim Djelloul Mustapha", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Basilique_Saint-Augustin_Annaba_02.jpg"], ["Dan Sloan", "CC BY-SA 2.0", "https://commons.wikimedia.org/wiki/File:Cours_de_la_R%C3%A9volution_-_Annaba.jpg"], ["Thehamzachaibrassou", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:La_plage_de_Annaba.jpg"], ["Sadaoui Bilel", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Chetaybi_Annaba_plages.jpg"], ["褒忠國中 雲端網", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Computer_classroom_of_the_Baozhong_Junior_High_School_20190410.jpg"], ["KK IN HK", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Laptop_computer.jpg"], ["Slashme", "CC0", "https://commons.wikimedia.org/wiki/File:RustCodeOnScreen.jpg"], ["Tulane Public Relations", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Classroom_in_Dinwiddie_Hall,_Tulane_University,_November_2010.jpg"], ["Toatway", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Container_ship_in_the_Port_of_Vigo.jpg"], ["Eric Kilby", "CC BY-SA 2.0", "https://commons.wikimedia.org/wiki/File:Port_Jersey_container_ship_sunset_2018.jpg"], ["Shixart1985", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Middle-aged_woman_working_on_laptop_while_holding_smartphone_at_a_wooden_table.jpg"]];

  var lang = "fr", dom = "all", qi = 0, score = 0, ready = false, rollTL = null, dyn = [], timers = [];
  try { var s = localStorage.getItem("sahla-lang"); if (I[s]) lang = s; } catch (e) {}
  function money(n) { return n.toLocaleString(lang === "ar" ? "ar-DZ" : "fr-FR") + (lang === "ar" ? " دج" : " DA"); }

  /* ---------- rolling word ---------- */
  function buildRoll() {
    var words = I[lang].roll, tr = $("#rollTr"), roll = $("#roll");
    tr.innerHTML = words.concat(words[0]).map(function (w) { return "<span>" + w + "</span>"; }).join("");
    if (rollTL) { rollTL.kill(); rollTL = null; }
    var spans = $$("span", tr);
    function widthOf(i) { return spans[i].getBoundingClientRect().width; }
    roll.style.width = Math.ceil(widthOf(0)) + "px";
    if (STATIC) return;
    gsap.set(tr, { yPercent: 0 });
    rollTL = gsap.timeline({ repeat: -1 });
    words.forEach(function (_, i) {
      rollTL.to(tr, { y: -(i + 1) * spans[0].offsetHeight, duration: .6, ease: "power3.inOut", delay: 1.6 }, ">")
        .to(roll, { width: Math.ceil(widthOf(i + 1)), duration: .6, ease: "power3.inOut" }, "<");
    });
    rollTL.set(tr, { y: 0 });
  }

  /* ---------- chat test ---------- */
  function bubble(cls, html) { var d = document.createElement("div"); d.className = "msg " + cls; d.innerHTML = html; $("#log").appendChild(d); $("#log").scrollTop = 1e6; if (!STATIC) gsap.from(d, { y: 14, opacity: 0, duration: .35, ease: "power2.out" }); return d; }
  function botSays(html, then) {
    var t = document.createElement("div"); t.className = "typing"; t.setAttribute("aria-label", I[lang].typing); t.innerHTML = "<i></i><i></i><i></i>"; $("#log").appendChild(t); $("#log").scrollTop = 1e6;
    timers.push(setTimeout(function () { t.remove(); bubble("bot", html); if (then) then(); }, STATIC ? 0 : 700));
  }
  function options(list) { $("#opts").innerHTML = list.map(function (o, i) { return '<button type="button" data-o="' + i + '">' + o + '</button>'; }).join(""); }
  function startChat() {
    timers.forEach(clearTimeout); timers = []; qi = 0; score = 0; $("#log").innerHTML = ""; $("#opts").innerHTML = "";
    botSays(I[lang].hello, function () { options([I[lang].start]); $("#opts").dataset.mode = "start"; });
  }
  function ask() {
    var q = Q[qi], opts = Array.isArray(q.o) ? q.o : q.o[lang]; $("#opts").innerHTML = ""; $("#opts").dataset.mode = "q";
    botSays((qi + 1) + "/5. " + q.q[lang], function () { options(opts); });
  }
  function finish() {
    var t = I[lang], lv = score <= 2 ? 0 : score <= 3 ? 1 : 2, r = t.levels[lv], target = [1, 2, 0][lv];
    $("#opts").innerHTML = "";
    botSays(t.score + " : " + score + "/5", function () {
      bubble("bot res", "<b>" + r[0] + "</b>" + r[1]);
      $("#opts").dataset.mode = "end";
      $("#opts").innerHTML = '<a class="btn coral" href="#inscription" data-k="' + target + '">' + t.book + '</a><button type="button" data-o="again">' + t.again + "</button>";
    });
  }
  $("#opts").addEventListener("click", function (e) {
    var a = e.target.closest("[data-k]"); if (a) { $("#sel").value = a.dataset.k; return; }
    var b = e.target.closest("button"); if (!b) return; var mode = this.dataset.mode;
    if (b.dataset.o === "again") { startChat(); return; }
    bubble("me", b.textContent);
    if (mode === "start") { ask(); return; }
    if (+b.dataset.o === Q[qi].a) score++;
    qi++; if (qi < Q.length) ask(); else finish();
  });

  /* ---------- render ---------- */
  function renderBento() {
    var t = I[lang];
    $("#chips").setAttribute("aria-label", t.filter);
    $("#chips").innerHTML = ['all'].concat(Object.keys(t.doms)).map(function (k) { return '<button type="button" data-d="' + k + '" aria-pressed="' + (k === dom) + '">' + (k === "all" ? t.all : t.doms[k]) + '</button>'; }).join("");
    $("#bento").innerHTML = C.map(function (c, i) {
      var vis = dom === "all" || dom === c.d;
      return '<article class="tile ' + (c.cls || "") + (vis ? "" : " hide") + '" data-d="' + c.d + '" data-flip-id="t' + i + '">' + (c.img ? img(c.img, c.w, c.h, c.cls === "big" ? "(min-width:980px) 50vw, 100vw" : "(min-width:980px) 30vw, 100vw") : '<span class="ic">' + icon(c.ic) + '</span>') +
        (c.img ? '<span class="tag">' + t.doms[c.d] + '</span>' : "") + '<h3>' + c.t[lang] + '</h3><p>' + c.s[lang] + '</p><div class="meta"><span>' + c.du[lang] + '</span><span>' + money(c.p) + '</span></div></article>';
    }).join("");
  }
  function render() {
    var t = I[lang];
    var cards = STRIP.map(function (x) { return '<figure class="card">' + img(x[0], x[1], x[2], "320px") + '<span>' + t.strip[x[0]] + '</span></figure>'; }).join("");
    $("#strip").innerHTML = cards + cards;
    renderBento();
    $("#slots").innerHTML = SLOTS.map(function (x) { return '<article class="slot"><b>' + x[0] + '</b><h3>' + x[2][lang] + '</h3><p>' + x[3][lang] + '</p></article>'; }).join("");
    $("#sel").innerHTML = C.map(function (c, i) { return '<option value="' + i + '">' + c.t[lang] + '</option>'; }).join("");
    $("#credits").innerHTML = t.photos + " " + CREDITS.map(function (c) { return '<a href="' + c[2] + '" target="_blank" rel="noopener">' + c[0] + '</a> (' + c[1] + ')'; }).join(", ") + ", Wikimedia Commons.";
  }
  function setLang(l) {
    lang = l; var t = I[l];
    doc.lang = l; doc.dir = l === "ar" ? "rtl" : "ltr"; document.title = t.title;
    $$("[data-i]").forEach(function (e) { e.textContent = t[e.dataset.i]; });
    $$("[data-alt]").forEach(function (e) { e.alt = t[e.dataset.alt]; });
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.l === l); });
    $(".lang").setAttribute("aria-label", t.lang); $("#msg").textContent = "";
    try { localStorage.setItem("sahla-lang", l); } catch (e) {}
    render();
    document.fonts.ready.then(buildRoll);
    startChat();
    if (ready) { bindDynamic(); ScrollTrigger.refresh(); }
  }

  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.l !== lang) setLang(b.dataset.l); }); });
  $("#chips").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b || b.dataset.d === dom) return; dom = b.dataset.d;
    $$("#chips button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
    var tiles = $$("#bento .tile"), state = (!STATIC && window.Flip) ? Flip.getState(tiles) : null;
    tiles.forEach(function (el) { el.classList.toggle("hide", !(dom === "all" || el.dataset.d === dom)); });
    if (state) Flip.from(state, { targets: tiles, duration: .65, ease: "power3.inOut", absolute: true, scale: true,
      onEnter: function (els) { return gsap.fromTo(els, { opacity: 0, scale: .85 }, { opacity: 1, scale: 1, duration: .5 }); },
      onLeave: function (els) { return gsap.to(els, { opacity: 0, scale: .85, duration: .35 }); },
      onComplete: function () { ScrollTrigger.refresh(); } });
  });
  $("#f").addEventListener("submit", function (e) {
    e.preventDefault(); var t = I[lang], ok = this.name.value.trim() && /^0[5-7]\d{8}$/.test(this.tel.value.replace(/\s/g, ""));
    if (!ok) { $("#msg").textContent = t.err; (this.name.value.trim() ? this.tel : this.name).focus(); return; }
    $("#msg").textContent = t.demo;
  });

  setLang(lang);
  if (STATIC) return;

  gsap.registerPlugin(ScrollTrigger, Flip);
  var lenis = window.Lenis ? new Lenis({ lerp: 0.1 }) : null;
  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach(function (a) { a.addEventListener("click", function (e) { var id = a.getAttribute("href"); if (id.length < 2) return; var el = $(id); if (!el) return; e.preventDefault(); lenis.scrollTo(el, { offset: -90 }); }); });
  }

  /* ---------- hero entrance ---------- */
  gsap.from(".hero .pill, .hero h1, .hero p, .hero .acts", { y: 34, opacity: 0, duration: .9, stagger: .1, ease: "power3.out", delay: .15 });
  gsap.from("#strip .card", { y: 120, opacity: 0, duration: 1.1, stagger: .06, ease: "power3.out", delay: .4 });

  ScrollTrigger.batch("[data-up]", { start: "top 88%", once: true, onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, duration: .9, stagger: .1, ease: "power3.out" }); } });

  /* ---------- Annaba: the circle opens on the port ---------- */
  gsap.timeline({ scrollTrigger: { trigger: ".city", start: "top top", end: "bottom bottom", scrub: .6 } })
    .fromTo("#disc", { clipPath: "circle(18% at 50% 50%)" }, { clipPath: "circle(75% at 50% 50%)", ease: "none" })
    .fromTo("#disc img", { scale: 1.3 }, { scale: 1, ease: "none" }, 0)
    .fromTo("#cityTx", { scale: .85, opacity: 0 }, { scale: 1, opacity: 1, ease: "none", duration: .5 }, .45);

  function bindDynamic() {
    dyn.forEach(function (x) { if (x.scrollTrigger) x.scrollTrigger.kill(); x.kill(); }); dyn = [];
    dyn.push(gsap.from("#bento .tile:not(.hide)", { y: 60, opacity: 0, duration: .9, stagger: .07, ease: "power3.out", scrollTrigger: { trigger: "#bento", start: "top 82%" } }));
    dyn.push(gsap.fromTo("#rail", { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { trigger: ".tline", start: "top 80%", end: "bottom 50%", scrub: true } }));
    dyn.push(gsap.from("#slots .slot", { y: 40, opacity: 0, duration: .8, stagger: .12, ease: "power3.out", scrollTrigger: { trigger: "#slots", start: "top 85%" } }));
  }
  bindDynamic();
  ready = true;
})();
