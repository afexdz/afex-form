/* Iktissab : contenu FR / AR / EN et animations (GSAP + ScrollTrigger + SplitText + Lenis, en local) */
(function () {
  var doc = document.documentElement;
  var STATIC = doc.classList.contains("static") || !window.gsap || !window.ScrollTrigger;
  if (STATIC) doc.classList.add("static");
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  function pic(name, sizes, cls) {
    return '<img' + (cls ? ' class="' + cls + '"' : '') + ' src="assets/img/' + name + '-800.webp" srcset="assets/img/' + name + '-800.webp 800w, assets/img/' + name + '-1600.webp 1600w" sizes="' + (sizes || "50vw") + '" width="1600" height="1067" alt="" loading="lazy" decoding="async">';
  }

  var I = {
    fr: { brand: "Iktissab", n1: "Domaines", n2: "La paie", n3: "Sessions", cta1: "S’inscrire", cta2: "Voir les formations",
      h1: "Les métiers de la gestion, appris à Alger.", lede: "GRH, paie, comptabilité et fiscalité algérienne, enseignées par des praticiens. Une attestation à la fin de chaque formation.",
      iTitle: "Ce que l’entreprise attend de vous lundi matin.", iText: "Chaque formation part des documents réels d’une entreprise algérienne : bulletins de paie, déclarations CNAS, liasses fiscales, contrats de travail. Vous repartez en sachant les faire.",
      m1: "Jour, soir ou week-end", m1p: "trois rythmes au choix", m2: "20 places", m2p: "par session, au plus", m3: "Attestation", m3p: "à la fin de chaque formation",
      dH: "Cinq domaines", dP: "Survolez ou touchez un domaine pour voir ses formations et leurs tarifs.",
      pH: "Une fiche de paie, ligne par ligne.", pP: "En formation paie, vous calculez chaque ligne : du salaire de base aux cotisations CNAS, puis à l’IRG et au net à payer.",
      sH2: "La méthode Iktissab", cH: "Prochaines sessions", cP: "Les dates de démarrage des six prochains mois.",
      aH: "Au cœur d’Alger la Blanche.", a1: "Adresse", a1v: "Alger centre, à deux rues de la Grande Poste", a2: "Accès", a2v: "Métro Grande Poste et tramway", a3: "Accueil", a3v: "Du dimanche au jeudi, de 8 h 30 à 20 h 30",
      fH: "Réservez votre place", fP: "Laissez vos coordonnées : un conseiller vous rappelle pour confirmer la session et le mode de paiement.",
      l1: "Nom complet", l2: "Téléphone", l3: "Formation", l4: "Rythme", send: "Envoyer ma demande",
      foot: "© 2026 Iktissab, école de gestion, Alger.", by: "Site réalisé par", book: "Réserver",
      err: "Indiquez votre nom et un numéro de téléphone valide.", demo: "Démo AFEX Digital : aucune demande n’a été envoyée, ce formulaire n’est pas encore connecté.",
      lang: "Langue", photos: "Photographies :", title: "Iktissab, école de gestion et GRH à Alger", nextL: "Prochaines sessions",
      tutorAlt: "Un formateur répond à une question devant un tableau numérique", posteAlt: "La Grande Poste d’Alger illuminée la nuit", casbahAlt: "Une ruelle de la haute Casbah d’Alger", didoucheAlt: "Plaque de la rue Didouche Mourad en arabe et en français",
      slots: ["En journée", "Le soir, de 18 h à 20 h 30", "Le week-end, vendredi et samedi"],
      slip: { title: "Bulletin de paie", who: "Exemple pédagogique, barème IRG 2022", base: "Salaire de base", prime: "Indemnité de rendement", brut: "Salaire brut", cnas: "Retenue CNAS (9 %)", imp: "Salaire imposable", irg: "IRG après abattement", net: "Net à payer", note: "Montants en dinars, à titre d’exemple. La formation couvre aussi les primes non cotisables et les cas particuliers." } },
    ar: { brand: "اكتساب", n1: "المجالات", n2: "الأجور", n3: "الدورات", cta1: "سجّل الآن", cta2: "اكتشف التكوينات",
      h1: "مهن التسيير، تتعلّمها في الجزائر العاصمة.", lede: "الموارد البشرية، الأجور، المحاسبة والجباية الجزائرية، يدرّسها مختصون ممارسون. شهادة في نهاية كل تكوين.",
      iTitle: "ما تنتظره منك المؤسسة صباح الأحد.", iText: "كل تكوين ينطلق من وثائق حقيقية لمؤسسة جزائرية: كشوف الأجور، تصريحات CNAS، الحزم الجبائية وعقود العمل. تخرج وأنت تعرف كيف تنجزها.",
      m1: "نهارًا، مساءً أو نهاية الأسبوع", m1p: "ثلاثة إيقاعات للاختيار", m2: "20 مقعدًا", m2p: "في كل دورة كحد أقصى", m3: "شهادة", m3p: "في نهاية كل تكوين",
      dH: "خمسة مجالات", dP: "مرّر أو المس مجالًا لترى تكويناته وأسعارها.",
      pH: "كشف الراتب، سطرًا بسطر.", pP: "في تكوين الأجور تحسب كل سطر: من الأجر القاعدي إلى اشتراكات CNAS، ثم IRG والصافي للدفع.",
      sH2: "طريقة اكتساب", cH: "الدورات القادمة", cP: "تواريخ الانطلاق خلال الأشهر الستة القادمة.",
      aH: "في قلب الجزائر البيضاء.", a1: "العنوان", a1v: "وسط الجزائر، على بعد شارعين من البريد المركزي", a2: "الوصول", a2v: "ميترو البريد المركزي والترامواي", a3: "الاستقبال", a3v: "من الأحد إلى الخميس، من 8:30 إلى 20:30",
      fH: "احجز مكانك", fP: "اترك معلوماتك: يتصل بك مستشار لتأكيد الدورة وطريقة الدفع.",
      l1: "الاسم الكامل", l2: "الهاتف", l3: "التكوين", l4: "الإيقاع", send: "أرسل طلبي",
      foot: "© 2026 اكتساب، مدرسة التسيير، الجزائر.", by: "موقع من إنجاز", book: "احجز",
      err: "أدخل اسمك ورقم هاتف صحيح.", demo: "عرض AFEX Digital: لم يُرسل أي طلب، هذا النموذج غير متصل بعد.",
      lang: "اللغة", photos: "الصور:", title: "اكتساب، مدرسة التسيير والموارد البشرية بالجزائر", nextL: "الدورات القادمة",
      tutorAlt: "مكوّن يجيب عن سؤال أمام سبورة رقمية", posteAlt: "البريد المركزي بالجزائر مضاءً ليلًا", casbahAlt: "زقاق في أعالي قصبة الجزائر", didoucheAlt: "لافتة شارع ديدوش مراد بالعربية والفرنسية",
      slots: ["نهارًا", "مساءً، من 18:00 إلى 20:30", "نهاية الأسبوع، الجمعة والسبت"],
      slip: { title: "كشف الراتب", who: "مثال تعليمي، جدول IRG لسنة 2022", base: "الأجر القاعدي", prime: "منحة المردودية", brut: "الأجر الخام", cnas: "اقتطاع CNAS ‏(9 %)", imp: "الأجر الخاضع للضريبة", irg: "IRG بعد التخفيض", net: "الصافي للدفع", note: "المبالغ بالدينار على سبيل المثال. يشمل التكوين أيضًا المنح غير الخاضعة للاشتراك والحالات الخاصة." } },
    en: { brand: "Iktissab", n1: "Fields", n2: "Payroll", n3: "Sessions", cta1: "Enrol now", cta2: "See the courses",
      h1: "Management careers, learned in Algiers.", lede: "HR, payroll, Algerian accounting and tax, taught by practitioners. A certificate at the end of every course.",
      iTitle: "What your employer expects from you on Monday morning.", iText: "Every course starts from real documents of an Algerian company: payslips, CNAS filings, tax returns, employment contracts. You leave knowing how to do them.",
      m1: "Day, evening or weekend", m1p: "three schedules to choose from", m2: "20 places", m2p: "per session at most", m3: "Certificate", m3p: "at the end of every course",
      dH: "Five fields", dP: "Hover or tap a field to see its courses and fees.",
      pH: "A payslip, line by line.", pP: "In the payroll course you calculate every line: from base salary to CNAS contributions, then income tax (IRG) and net pay.",
      sH2: "The Iktissab method", cH: "Next sessions", cP: "Start dates over the next six months.",
      aH: "In the heart of Algiers the White.", a1: "Address", a1v: "Central Algiers, two streets from the Grande Poste", a2: "Getting here", a2v: "Grande Poste metro and tramway", a3: "Opening hours", a3v: "Sunday to Thursday, 8:30 to 20:30",
      fH: "Book your place", fP: "Leave your details: an adviser calls you back to confirm the session and payment.",
      l1: "Full name", l2: "Phone", l3: "Course", l4: "Schedule", send: "Send my request",
      foot: "© 2026 Iktissab, management school, Algiers.", by: "Website by", book: "Book",
      err: "Enter your name and a valid phone number.", demo: "AFEX Digital demo: no request was sent, this form is not connected yet.",
      lang: "Language", photos: "Photographs:", title: "Iktissab, management and HR school in Algiers", nextL: "Next sessions",
      tutorAlt: "A trainer answers a question in front of a digital whiteboard", posteAlt: "The Grande Poste of Algiers lit up at night", casbahAlt: "A lane in the upper Casbah of Algiers", didoucheAlt: "Didouche Mourad street sign in Arabic and French",
      slots: ["Daytime", "Evenings, 18:00 to 20:30", "Weekends, Friday and Saturday"],
      slip: { title: "Payslip", who: "Teaching example, 2022 IRG scale", base: "Base salary", prime: "Performance bonus", brut: "Gross salary", cnas: "CNAS deduction (9%)", imp: "Taxable salary", irg: "IRG after allowance", net: "Net pay", note: "Amounts in dinars, for illustration. The course also covers non-contributory bonuses and special cases." } }
  };

  var DOMS = [
    { img: "interview", t: { fr: "Ressources humaines", ar: "الموارد البشرية", en: "Human resources" }, d: { fr: "Recruter, intégrer, évaluer et gérer les dossiers du personnel.", ar: "التوظيف، الإدماج، التقييم وتسيير ملفات المستخدمين.", en: "Recruiting, onboarding, appraising and managing staff files." },
      c: [[{ fr: "Gestion des ressources humaines", ar: "تسيير الموارد البشرية", en: "Human resources management" }, { fr: "3 mois", ar: "3 أشهر", en: "3 months" }, 45000], [{ fr: "Recrutement et entretiens", ar: "التوظيف والمقابلات", en: "Recruitment and interviews" }, { fr: "2 semaines", ar: "أسبوعان", en: "2 weeks" }, 14000]] },
    { img: "phone", t: { fr: "Paie", ar: "الأجور", en: "Payroll" }, d: { fr: "Bulletins, cotisations CNAS et CASNOS, IRG, logiciels de paie.", ar: "كشوف الرواتب، اشتراكات CNAS وCASNOS، IRG وبرامج الأجور.", en: "Payslips, CNAS and CASNOS contributions, IRG, payroll software." },
      c: [[{ fr: "Paie et déclarations CNAS", ar: "الأجور وتصريحات CNAS", en: "Payroll and CNAS filings" }, { fr: "6 semaines", ar: "6 أسابيع", en: "6 weeks" }, 28000], [{ fr: "Logiciels de paie", ar: "برامج الأجور", en: "Payroll software" }, { fr: "1 mois", ar: "شهر واحد", en: "1 month" }, 18000]] },
    { img: "train", t: { fr: "Comptabilité", ar: "المحاسبة", en: "Accounting" }, d: { fr: "Le système comptable financier (SCF), du journal au bilan.", ar: "النظام المحاسبي المالي SCF، من اليومية إلى الميزانية.", en: "The Algerian financial accounting system (SCF), from journal to balance sheet." },
      c: [[{ fr: "Comptabilité générale (SCF)", ar: "المحاسبة العامة (SCF)", en: "General accounting (SCF)" }, { fr: "4 mois", ar: "4 أشهر", en: "4 months" }, 52000], [{ fr: "Clôture et bilan", ar: "الإقفال والميزانية", en: "Year-end closing" }, { fr: "3 semaines", ar: "3 أسابيع", en: "3 weeks" }, 20000]] },
    { img: "contract", t: { fr: "Fiscalité", ar: "الجباية", en: "Tax" }, d: { fr: "G50, TVA, IBS et calendrier fiscal des entreprises.", ar: "G50، الرسم على القيمة المضافة، IBS والرزنامة الجبائية للمؤسسات.", en: "G50, VAT, corporate tax (IBS) and the company tax calendar." },
      c: [[{ fr: "Fiscalité et déclaration G50", ar: "الجباية والتصريح G50", en: "Tax and G50 returns" }, { fr: "1 mois", ar: "شهر واحد", en: "1 month" }, 22000], [{ fr: "Fiscalité des PME", ar: "جباية المؤسسات الصغيرة", en: "Tax for small businesses" }, { fr: "3 semaines", ar: "3 أسابيع", en: "3 weeks" }, 20000]] },
    { img: "hand", t: { fr: "Droit du travail", ar: "قانون العمل", en: "Labour law" }, d: { fr: "Contrats, discipline, congés et relations de travail (loi 90-11).", ar: "العقود، الانضباط، العطل وعلاقات العمل (القانون 90-11).", en: "Contracts, discipline, leave and employment relations (Law 90-11)." },
      c: [[{ fr: "Droit du travail algérien", ar: "قانون العمل الجزائري", en: "Algerian labour law" }, { fr: "3 semaines", ar: "3 أسابيع", en: "3 weeks" }, 16000], [{ fr: "Secrétariat de direction", ar: "سكرتارية المديرية", en: "Executive assistant" }, { fr: "3 mois", ar: "3 أشهر", en: "3 months" }, 38000]] }
  ];
  var COURSES = []; DOMS.forEach(function (d) { d.c.forEach(function (c) { COURSES.push(c); }); });

  var METHOD = [
    { img: "tutor", t: { fr: "Un formateur qui pratique", ar: "مكوّن يمارس المهنة", en: "A trainer who practises" }, d: { fr: "Responsables RH, comptables et fiscalistes en poste enseignent ce qu’ils font chaque semaine.", ar: "مسؤولو موارد بشرية ومحاسبون وخبراء جباية في مناصبهم يدرّسون ما يعملونه كل أسبوع.", en: "Working HR managers, accountants and tax advisers teach what they do every week." } },
    { img: "train", t: { fr: "Des cas réels, sur ordinateur", ar: "حالات حقيقية على الحاسوب", en: "Real cases, on a computer" }, d: { fr: "Chacun traite des dossiers anonymisés d’entreprises algériennes, sur les logiciels du marché.", ar: "يعالج كل متكوّن ملفات مجهولة الهوية لمؤسسات جزائرية، على البرامج المستعملة في السوق.", en: "Everyone works through anonymised files from Algerian companies, on the software used in the market." } },
    { img: "hand", t: { fr: "Une attestation, puis l’emploi", ar: "شهادة ثم العمل", en: "A certificate, then the job" }, d: { fr: "L’attestation à la fin de la formation, et une aide pour le CV et l’entretien.", ar: "شهادة في نهاية التكوين ومساعدة في السيرة الذاتية والمقابلة.", en: "A certificate at the end of the course, and help with your CV and interview." } }
  ];

  var SLIP = [["base", 60000], ["prime", 6000], ["brut", 66000], ["cnas", -5940], ["imp", 60060], ["irg", -8516.2], ["net", 51543.8]];

  var CREDITS = [["Toufik Lerari", "CC BY-SA 2.0", "https://commons.wikimedia.org/wiki/File:Bay_of_Algiers_by_night.jpg"], ["Wlid fouka", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Alger_grande_poste_la_nuit.jpg"], ["Jean-marie Pirard", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Ruelle_dans_la_haute_casbah_Alger.JPG"], ["Bernard Gagnon", "CC BY 4.0", "https://commons.wikimedia.org/wiki/File:Rue_Didouche_Mourad,_Alger.jpg"], ["Balkrishna Hari Mali", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Training_Teacher_%26_Students.jpg"], ["Charanjitmannu", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:ELEC_Tutor_Answering_Question_Adult_Learner_Classroom_Session.jpg"], ["amtec_photos", "CC BY-SA 2.0", "https://commons.wikimedia.org/wiki/File:Woman_on_a_Job_Interview_-_38826218972.jpg"], ["Shixart1985", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Middle-aged_woman_working_on_laptop_while_holding_smartphone_at_a_wooden_table.jpg"], ["Blogtrepreneur", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Legal_Contract_%26_Signature_-_Warm_Tones.jpg"], ["perzon seo", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Business_man_and_woman_handshake_in_work_office.jpg"]];

  var lang = "fr", dom = 0, ready = false, split = null, slipTL = null, calST = null, stackST = [];
  try { var s = localStorage.getItem("iktissab-lang"); if (I[s]) lang = s; } catch (e) {}
  function loc() { return lang === "ar" ? "ar-DZ" : lang === "en" ? "en-GB" : "fr-FR"; }
  function money(n, dec) { return n.toLocaleString(loc(), { minimumFractionDigits: dec ? 2 : 0, maximumFractionDigits: dec ? 2 : 0 }) + (lang === "ar" ? " دج" : " DA"); }
  function sessionDates() {
    var now = new Date(), out = [], picks = [[0, 4], [1, 1], [0, 11], [3, 5], [1, 18], [4, 0]];
    for (var m = 1; m <= 6; m++) { var p = picks[m - 1]; out.push({ d: new Date(now.getFullYear(), now.getMonth() + m, [3, 10, 17][m % 3]), c: COURSES[(m * 3) % COURSES.length], slot: m % 3 }); }
    return out;
  }

  function renderPanels() {
    var t = I[lang];
    $("#panels").innerHTML = DOMS.map(function (d, i) {
      return '<div role="button" tabindex="0" class="panel' + (i === dom ? " on" : "") + '" data-p="' + i + '" aria-expanded="' + (i === dom) + '">' + pic(d.img, "(min-width:960px) 60vw, 100vw") + '<span class="n">0' + (i + 1) + '</span><span class="tx"><h3>' + d.t[lang] + '</h3><span class="more"><p>' + d.d[lang] + '</p><ul>' +
        d.c.map(function (c) { return '<li><span>' + c[0][lang] + ', ' + c[1][lang] + '</span><b>' + money(c[2]) + '</b></li>'; }).join("") + '</ul></span></span></div>';
    }).join("");
  }
  function setDom(i) { dom = i; $$("#panels .panel").forEach(function (p, k) { p.classList.toggle("on", k === i); p.setAttribute("aria-expanded", k === i); }); }

  function renderSlip() {
    var t = I[lang].slip;
    $("#slip").innerHTML = '<header><b>' + t.title + '</b><span>' + t.who + '</span></header>' + SLIP.map(function (l) {
      var cls = l[0] === "net" ? "ln net" : l[1] < 0 ? "ln minus" : "ln";
      return '<div class="' + cls + '" data-v="' + l[1] + '"><span>' + t[l[0]] + '</span><b>' + money(Math.abs(l[1]), true).replace(/^/, l[1] < 0 ? "− " : "") + '</b></div>';
    }).join("") + '<p class="note">' + t.note + '</p>';
  }

  function render() {
    var t = I[lang];
    var dates = sessionDates();
    $("#next").setAttribute("aria-label", t.nextL);
    $("#next").innerHTML = dates.slice(0, 3).map(function (x) { return '<div><time>' + x.d.getDate() + '<small>' + x.d.toLocaleDateString(loc(), { month: "short" }) + '</small></time><span><b>' + x.c[0][lang] + '</b><span>' + t.slots[x.slot] + '</span></span></div>'; }).join("");
    renderPanels();
    renderSlip();
    $("#stack").innerHTML = METHOD.map(function (m, i) { return '<article class="sc"><div class="tx"><b>0' + (i + 1) + '</b><h3>' + m.t[lang] + '</h3><p>' + m.d[lang] + '</p></div>' + pic(m.img, "(min-width:960px) 45vw, 100vw") + '</article>'; }).join("");
    $("#cal").innerHTML = dates.map(function (x) { var i = COURSES.indexOf(x.c); return '<li><time>' + x.d.getDate() + '<small>' + x.d.toLocaleDateString(loc(), { month: "long", year: "numeric" }) + '</small></time><h3>' + x.c[0][lang] + '</h3><span class="m">' + t.slots[x.slot] + ', ' + x.c[1][lang] + '</span><a href="#inscription" data-k="' + i + '">' + t.book + '</a></li>'; }).join("");
    $("#sel").innerHTML = COURSES.map(function (c, i) { return '<option value="' + i + '">' + c[0][lang] + '</option>'; }).join("");
    $("#slot").innerHTML = t.slots.map(function (x) { return "<option>" + x + "</option>"; }).join("");
    $("#credits").innerHTML = t.photos + " " + CREDITS.map(function (c) { return '<a href="' + c[2] + '" target="_blank" rel="noopener">' + c[0] + '</a> (' + c[1] + ')'; }).join(", ") + ", Wikimedia Commons.";
  }

  function setLang(l) {
    lang = l; var t = I[l];
    if (split) { split.revert(); split = null; }
    doc.lang = l; doc.dir = l === "ar" ? "rtl" : "ltr"; document.title = t.title;
    $$("[data-i]").forEach(function (e) { e.textContent = t[e.dataset.i]; });
    $$("[data-alt]").forEach(function (e) { e.alt = t[e.dataset.alt]; });
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.l === l); });
    $(".lang").setAttribute("aria-label", t.lang); $("#msg").textContent = "";
    try { localStorage.setItem("iktissab-lang", l); } catch (e) {}
    render();
    if (ready) { bindScroll(); ScrollTrigger.refresh(); }
  }

  /* ---------- interactions ---------- */
  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.l !== lang) setLang(b.dataset.l); }); });
  $("#panels").addEventListener("click", function (e) { var p = e.target.closest(".panel"); if (p) setDom(+p.dataset.p); });
  $("#panels").addEventListener("mouseover", function (e) { if (!matchMedia("(hover:hover) and (min-width:961px)").matches) return; var p = e.target.closest(".panel"); if (p && +p.dataset.p !== dom) setDom(+p.dataset.p); });
  $("#panels").addEventListener("focusin", function (e) { var p = e.target.closest(".panel"); if (p) setDom(+p.dataset.p); });
  $("#panels").addEventListener("keydown", function (e) { if (e.key !== "Enter" && e.key !== " ") return; var p = e.target.closest(".panel"); if (p) { e.preventDefault(); setDom(+p.dataset.p); } });
  $("#cal").addEventListener("click", function (e) { var a = e.target.closest("[data-k]"); if (a) $("#sel").value = a.dataset.k; });
  $("#f").addEventListener("submit", function (e) {
    e.preventDefault(); var t = I[lang], ok = this.name.value.trim() && /^0[5-7]\d{8}$/.test(this.tel.value.replace(/\s/g, ""));
    if (!ok) { $("#msg").textContent = t.err; (this.name.value.trim() ? this.tel : this.name).focus(); return; }
    $("#msg").textContent = t.demo;
  });
  var hd = $("#hd");
  function onScroll() { hd.classList.toggle("solid", window.scrollY > window.innerHeight * 0.55); }
  window.addEventListener("scroll", onScroll, { passive: true });

  setLang(lang);
  onScroll();
  if (STATIC) return;

  gsap.registerPlugin(ScrollTrigger, SplitText);
  var lenis = window.Lenis ? new Lenis({ lerp: 0.1 }) : null;
  if (lenis) {
    lenis.on("scroll", function () { ScrollTrigger.update(); onScroll(); });
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach(function (a) { a.addEventListener("click", function (e) { var id = a.getAttribute("href"); if (id.length < 2) return; var el = $(id); if (!el) return; e.preventDefault(); lenis.scrollTo(el, { offset: -70 }); }); });
  }

  /* ---------- hero: the arch opens onto Algiers ---------- */
  gsap.set("#arch", { clipPath: "inset(14% 33% 0% 33% round 400px 400px 0px 0px)" });
  gsap.to("#arch", { clipPath: "inset(0% 0% 0% 0% round 0px 0px 0px 0px)", duration: 1.9, ease: "power3.inOut", delay: .15 });
  gsap.from("#arch img", { scale: 1.25, duration: 2.4, ease: "power2.out" });
  gsap.set("#h1", { autoAlpha: 0 });
  document.fonts.ready.then(function () {
    gsap.set("#h1", { autoAlpha: 1 });
    split = SplitText.create("#h1", { type: lang === "ar" ? "words" : "words,chars", charsClass: "ch", wordsClass: "ch" });
    gsap.from(lang === "ar" ? split.words : split.chars, { yPercent: 80, opacity: 0, duration: .9, stagger: lang === "ar" ? .08 : .018, ease: "power4.out", delay: .9 });
  });
  gsap.from(".hero .row > *", { y: 30, opacity: 0, duration: 1, stagger: .15, delay: 1.4, ease: "power3.out" });
  gsap.to("#arch img", { yPercent: 10, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  ScrollTrigger.batch("[data-up]", { start: "top 88%", once: true, onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, duration: 1, stagger: .1, ease: "power3.out" }); } });
  gsap.fromTo("#introImg", { yPercent: -10 }, { yPercent: 0, ease: "none", scrollTrigger: { trigger: ".intro", start: "top bottom", end: "bottom top", scrub: true } });
  $$(".px").forEach(function (im) { gsap.fromTo(im, { yPercent: -10 }, { yPercent: 0, ease: "none", scrollTrigger: { trigger: im.parentNode, start: "top bottom", end: "bottom top", scrub: true } }); });

  /* ---------- content that is rebuilt on a language change ---------- */
  function bindScroll() {
    if (slipTL) { if (slipTL.scrollTrigger) slipTL.scrollTrigger.kill(); slipTL.kill(); slipTL = null; }
    if (calST) { calST.kill(); calST = null; }
    stackST.forEach(function (x) { if (x.scrollTrigger) x.scrollTrigger.kill(); x.kill(); }); stackST = [];
    var lines = $$("#slip .ln");
    var pinned = matchMedia("(min-width: 961px)").matches;
    slipTL = gsap.timeline({ scrollTrigger: pinned ? { trigger: "#paie", start: "top top", end: "+=1400", pin: true, scrub: 1 } : { trigger: "#slip", start: "top 75%" } });
    lines.forEach(function (ln, i) {
      var b = $("b", ln), v = +ln.dataset.v, o = { n: 0 };
      slipTL.from(ln, { opacity: 0, x: doc.dir === "rtl" ? 30 : -30, duration: .5 }, i * .55);
      slipTL.to(o, { n: Math.abs(v), duration: .5, ease: "none", onUpdate: function () { b.textContent = (v < 0 ? "− " : "") + money(o.n, true); } }, i * .55);
    });
    slipTL.from("#slip .net", { scale: .94, duration: .4 }, ">-0.2");
    calST = ScrollTrigger.create({ trigger: "#cal", start: "top 80%", once: true, onEnter: function () { gsap.from("#cal li", { x: doc.dir === "rtl" ? 60 : -60, opacity: 0, duration: .8, stagger: .08, ease: "power3.out" }); } });
    var cards = $$("#stack .sc");
    if (pinned) cards.forEach(function (c, i) { if (!cards[i + 1]) return; stackST.push(gsap.to(c, { scale: .93, opacity: .55, ease: "none", scrollTrigger: { trigger: cards[i + 1], start: "top bottom", end: "top 140px", scrub: true } })); });
  }
  bindScroll();
  ready = true;
  window.addEventListener("resize", function () { clearTimeout(window.__rz); window.__rz = setTimeout(function () { bindScroll(); ScrollTrigger.refresh(); }, 300); });
})();
