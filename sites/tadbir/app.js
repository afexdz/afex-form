/* Tadbir : contenu FR / AR / EN, catalogue filtrable, fiches, pré-inscription, calendrier (GSAP + ScrollTrigger + Flip + Lenis, en local) */
(function () {
  var doc = document.documentElement;
  var STATIC = doc.classList.contains("static") || !window.gsap || !window.ScrollTrigger;
  if (STATIC) doc.classList.add("static");
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  function L(o) { return o[lang]; }
  var P = { capcarbon: [817, "Ramzi Belaidi"], ville: [853, "Walid Amghar"], rayons: [852, "CHUTTERSNAP"], allee: [1707, "Ruchindra Gunasekara"], chariot: [1920, "Kseniia Ilinykh"], entrepot: [853, "Adrian Sulyok"], stocktab: [814, "Cova Software"], hijabtab: [1707, "Francis Odeyemi"], hijabbur: [1920, "IvanBE pratama"], entretien: [720, "Vitaly Gariev"], compta: [940, "Cht Gsml"], compta2: [853, "Cht Gsml"], secretaire: [853, "cornerstone accounting Services"], classe: [720, "Vitaly Gariev"], salle: [720, "Vitaly Gariev"], magasin: [853, "EqualStock"], conteneurs: [853, "Julia Taubitz"], cariste: [853, "National Cancer Institute"], documents: [853, "Olena Kholina"] };
  function img(n, sizes, eager) { var h = P[n][0], big = n === "capcarbon" || n === "ville" || n === "entrepot"; return '<img src="assets/img/' + n + '-640.webp" srcset="assets/img/' + n + '-640.webp 640w, assets/img/' + n + '-1280.webp 1280w' + (big ? ", assets/img/" + n + "-1920.webp 1920w" : "") + '" sizes="' + (sizes || "33vw") + '" width="1280" height="' + h + '" alt=""' + (eager ? "" : ' loading="lazy"') + ' decoding="async">'; }
  function cur() { return lang === "ar" ? "دج" : "DA"; }
  function da(n) { return "⁦" + Math.round(n).toLocaleString("fr-FR").replace(/ | /g, " ") + "⁩ " + cur(); }

  var I = {
    fr: { u1: "Agréé par l’État", u1p: "· agrément de démonstration", u2: "Samedi → jeudi, 8 h – 17 h · cours du soir 17 h 30 – 20 h", demo0: "Site de démonstration, école fictive.", demo1: "Autres modèles",
      brand: "Tadbir", brandS: "École de formation · Béjaïa", sBtn: "Chercher", ph: "GRH, stock, comptabilité, Excel…", cart: "Ma pré-inscription", all: "Toutes",
      m1: "Paiement en 3 tranches", m1p: "Sans frais, à l’inscription, au 2e et au 3e mois.", m2: "Étudiants et demandeurs d’emploi", m2p: "Sur présentation de la carte d’étudiant ou de l’attestation ANEM.",
      w1: "Attestation agréée", w1p: "et relevé de notes", w2: "Stage en entreprise", w2p: "port, zones d’Akbou et Taharacht", w3: "Jour, soir, week-end", w3p: "ou à distance pour certaines", w4: "20 stagiaires au plus", w4p: "par groupe",
      slides: [["Inscriptions ouvertes", "Formez-vous aux métiers de la gestion, à Béjaïa.", "GRH, achats, stock, logistique, comptabilité, secrétariat : 14 formations, de jour, le soir ou le week-end.", "Voir les formations"], ["Pour les salariés", "Les cours du soir, de 17 h 30 à 20 h.", "Gardez votre travail et préparez la suite : 3 soirs par semaine, attestation à la fin.", "Formations du soir"], ["Logistique", "Le port de Béjaïa recrute des profils formés.", "Gestion de stock, cariste, logistique et transport, avec un stage pratique.", "Voir la logistique"]],
      cH: "Toutes nos formations", cP: "Filtrez par domaine, horaire et budget. Ajoutez une ou plusieurs formations à votre pré-inscription.", count: "{n} formations", none: "Aucune formation ne correspond. Essayez d’enlever un filtre.",
      sort: ["Prochaine session", "Prix croissant", "Prix décroissant", "Plus courte"], fT: "Filtres", reset: "Effacer", fDom: "Domaine", fRy: "Horaire", fDur: "Durée", fPr: "Budget max", fLeft: "Places disponibles seulement",
      modes: { jour: "Jour", soir: "Soir", we: "Week-end", dist: "À distance" }, durs: ["Moins d’un mois", "1 à 2 mois", "3 mois et plus"],
      next: "Prochaine session :", left: "{n} places", full: "Complet", det: "Détails", add: "Ajouter", added: "Ajouté", hours: "h", tr: "ou 3 × {p}",
      dk: ["Durée", "Volume horaire", "Prochaine session", "Diplôme"], cq: "Attestation de formation qualifiante", cc: "Certificat de spécialisation", prog: "Le programme", jobs: "Après la formation", pre: "Niveau demandé", trs: ["À l’inscription", "2e mois", "3e mois"],
      cEmpty: "Votre pré-inscription est vide. Ajoutez une formation depuis le catalogue.", sub: "Sous-total", combo: "2 formations ou plus −10 %", red: "Remise −20 %", total: "Total", fees: "+ frais de dossier : 2 000 DA",
      l1: "Nom et prénom", l2: "Téléphone", l3: "Wilaya", l4: "Situation", sit: ["Salarié", "Étudiant", "Demandeur d’emploi (ANEM)", "Autre"], send: "Envoyer la pré-inscription",
      trayT: "{n} formation(s) · {t}", trayB: "Finaliser", err: "Indiquez votre nom et un numéro valide.", demo: "Démo AFEX Digital : aucune pré-inscription n’a été envoyée, ce formulaire n’est pas encore connecté.",
      kH: "Le calendrier des prochaines sessions", kP: "Chaque couleur est un domaine. Touchez une session pour ouvrir la fiche.", wd: ["Sam", "Dim", "Lun", "Mar", "Mer", "Jeu", "Ven"],
      dH: "Le dossier d’inscription", dP: "À déposer à l’accueil, ou à envoyer en photo sur WhatsApp avant la rentrée.",
      docs: ["2 photos d’identité", "Copie de la carte d’identité", "Extrait d’acte de naissance (12S)", "Copie du dernier diplôme ou certificat de scolarité", "Carte d’étudiant ou attestation ANEM, pour la remise", "Frais de dossier : 2 000 DA"],
      eH: "Pour les entreprises", eP: "Formez vos équipes chez nous ou dans vos locaux, avec une convention et une facture en bonne et due forme.", eBtn: "Demander un devis",
      ent: ["Convention de formation et facture au nom de l’entreprise", "Sessions dans vos locaux, à partir de 6 salariés", "Attestation pour chaque salarié formé", "Programmes sur mesure : inventaire annuel, achats publics, paie", "Devis sous 48 heures"],
      foA: "École de formation professionnelle fictive, Béjaïa.", foAd: "Près de la gare routière (adresse de démonstration).", foH: "Accueil", foC: "Contact", foCV: "Téléphone et WhatsApp : numéro de démonstration. Facebook et Instagram : Tadbir Béjaïa.",
      foot: "© 2026 Tadbir, école fictive.", by: "Site réalisé par", photos: "Photos : Unsplash,", waT: "Écrire sur WhatsApp", waDemo: "Démo AFEX Digital : le numéro WhatsApp n’est pas encore connecté.", quote: "Démo : la demande de devis n’est pas encore connectée.", lang: "Langue", close: "Fermer",
      docAlt: "Des documents administratifs sur une table", entAlt: "Des magasiniers dans un grand entrepôt", capAlt: "Le cap Carbon à Béjaïa", title: "Tadbir, école de formation en gestion à Béjaïa", loc: "fr-FR" },
    ar: { u1: "معتمدة من الدولة", u1p: "· اعتماد للعرض فقط", u2: "من السبت إلى الخميس، 8:00 – 17:00 · دروس مسائية 17:30 – 20:00", demo0: "موقع تجريبي، مدرسة وهمية.", demo1: "نماذج أخرى",
      brand: "تدبير", brandS: "مدرسة تكوين · بجاية", sBtn: "ابحث", ph: "موارد بشرية، مخزون، محاسبة، إكسل…", cart: "تسجيلي المسبق", all: "الكل",
      m1: "الدفع على 3 أقساط", m1p: "بلا مصاريف: عند التسجيل، في الشهر الثاني والثالث.", m2: "الطلبة وطالبو العمل", m2p: "بتقديم بطاقة الطالب أو شهادة ANEM.",
      w1: "شهادة معتمدة", w1p: "وكشف نقاط", w2: "تربص في مؤسسة", w2p: "الميناء، مناطق أقبو وطاهراشت", w3: "صباحًا، مساءً، نهاية الأسبوع", w3p: "أو عن بُعد لبعضها", w4: "20 متربصًا على الأكثر", w4p: "في الفوج",
      slides: [["التسجيلات مفتوحة", "تكوّن في مهن التسيير، في بجاية.", "الموارد البشرية، المشتريات، المخزون، اللوجستيك، المحاسبة، السكرتارية: 14 تكوينًا، صباحًا أو مساءً أو نهاية الأسبوع.", "شاهد التكوينات"], ["للعمّال", "الدروس المسائية من 17:30 إلى 20:00.", "حافظ على عملك وحضّر المستقبل: 3 أمسيات في الأسبوع وشهادة في النهاية.", "التكوينات المسائية"], ["اللوجستيك", "ميناء بجاية يوظّف المكوَّنين.", "تسيير المخزون، سائق رافعة، اللوجستيك والنقل، مع تربص تطبيقي.", "شاهد اللوجستيك"]],
      cH: "كل تكويناتنا", cP: "صنّف حسب المجال والتوقيت والميزانية. أضف تكوينًا أو أكثر إلى تسجيلك المسبق.", count: "{n} تكوين", none: "لا يوجد تكوين مطابق. جرّب حذف أحد المرشّحات.",
      sort: ["أقرب دورة", "السعر تصاعديًا", "السعر تنازليًا", "الأقصر"], fT: "المرشّحات", reset: "مسح", fDom: "المجال", fRy: "التوقيت", fDur: "المدة", fPr: "أقصى ميزانية", fLeft: "الأماكن المتاحة فقط",
      modes: { jour: "صباحي", soir: "مسائي", we: "نهاية الأسبوع", dist: "عن بُعد" }, durs: ["أقل من شهر", "من شهر إلى شهرين", "3 أشهر فأكثر"],
      next: "الدورة القادمة:", left: "{n} أماكن", full: "ممتلئ", det: "التفاصيل", add: "أضف", added: "مُضاف", hours: "سا", tr: "أو 3 × {p}",
      dk: ["المدة", "الحجم الساعي", "الدورة القادمة", "الشهادة"], cq: "شهادة تكوين تأهيلي", cc: "شهادة تخصص", prog: "البرنامج", jobs: "بعد التكوين", pre: "المستوى المطلوب", trs: ["عند التسجيل", "الشهر الثاني", "الشهر الثالث"],
      cEmpty: "تسجيلك المسبق فارغ. أضف تكوينًا من الفهرس.", sub: "المجموع الجزئي", combo: "تكوينان أو أكثر −10 %", red: "تخفيض −20 %", total: "المجموع", fees: "+ مصاريف الملف: 2 000 دج",
      l1: "الاسم واللقب", l2: "الهاتف", l3: "الولاية", l4: "الوضعية", sit: ["عامل", "طالب", "طالب عمل (ANEM)", "أخرى"], send: "أرسل التسجيل المسبق",
      trayT: "{n} تكوين · {t}", trayB: "إتمام", err: "أدخل اسمك ورقمًا صحيحًا.", demo: "عرض AFEX Digital: لم يُرسل أي تسجيل، هذا النموذج غير متصل بعد.",
      kH: "رزنامة الدورات القادمة", kP: "كل لون مجال. المس دورة لفتح بطاقتها.", wd: ["سبت", "أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة"],
      dH: "ملف التسجيل", dP: "يودع في الاستقبال، أو يُرسل مصوّرًا على واتساب قبل الدخول.",
      docs: ["صورتان شمسيتان", "نسخة من بطاقة التعريف", "مستخرج شهادة الميلاد (12S)", "نسخة من آخر شهادة أو شهادة مدرسية", "بطاقة الطالب أو شهادة ANEM للتخفيض", "مصاريف الملف: 2 000 دج"],
      eH: "للمؤسسات", eP: "كوّنوا فرقكم عندنا أو في مقرّاتكم، باتفاقية وفاتورة قانونية.", eBtn: "اطلب عرض سعر",
      ent: ["اتفاقية تكوين وفاتورة باسم المؤسسة", "دورات في مقرّكم ابتداءً من 6 عمّال", "شهادة لكل عامل مكوَّن", "برامج على المقاس: الجرد السنوي، الصفقات العمومية، الأجور", "عرض سعر خلال 48 ساعة"],
      foA: "مدرسة تكوين مهني وهمية، بجاية.", foAd: "قرب المحطة البرية (عنوان للعرض).", foH: "الاستقبال", foC: "الاتصال", foCV: "الهاتف وواتساب: رقم تجريبي. فيسبوك وإنستغرام: تدبير بجاية.",
      foot: "© 2026 تدبير، مدرسة وهمية.", by: "موقع من إنجاز", photos: "الصور: Unsplash،", waT: "راسلنا على واتساب", waDemo: "عرض AFEX Digital: رقم واتساب غير متصل بعد.", quote: "عرض: طلب عرض السعر غير متصل بعد.", lang: "اللغة", close: "إغلاق",
      docAlt: "وثائق إدارية على طاولة", entAlt: "عمّال مخزن في مستودع كبير", capAlt: "رأس كاربون في بجاية", title: "تدبير، مدرسة تكوين في التسيير ببجاية", loc: "ar-DZ" },
    en: { u1: "State-approved", u1p: "· demo accreditation", u2: "Saturday → Thursday, 8:00 – 17:00 · evening classes 17:30 – 20:00", demo0: "Demo website, fictional school.", demo1: "Other templates",
      brand: "Tadbir", brandS: "Training school · Béjaïa", sBtn: "Search", ph: "HR, stock, accounting, Excel…", cart: "My pre-registration", all: "All",
      m1: "Pay in 3 instalments", m1p: "No fees: at sign-up, in month 2 and month 3.", m2: "Students and job seekers", m2p: "With a student card or an ANEM certificate.",
      w1: "Approved certificate", w1p: "and transcript", w2: "Company placement", w2p: "the port, Akbou and Taharacht zones", w3: "Day, evening, weekend", w3p: "or remote for some", w4: "20 trainees at most", w4p: "per group",
      slides: [["Enrolment open", "Train for management jobs, in Béjaïa.", "HR, purchasing, stock, logistics, accounting, secretarial: 14 courses, daytime, evenings or weekends.", "See the courses"], ["For employees", "Evening classes, 17:30 to 20:00.", "Keep your job and prepare what’s next: 3 evenings a week, certificate at the end.", "Evening courses"], ["Logistics", "The port of Béjaïa hires trained people.", "Stock management, forklift, logistics and transport, with a work placement.", "See logistics"]],
      cH: "All our courses", cP: "Filter by field, schedule and budget. Add one or more courses to your pre-registration.", count: "{n} courses", none: "No course matches. Try removing a filter.",
      sort: ["Next session", "Price, low to high", "Price, high to low", "Shortest"], fT: "Filters", reset: "Clear", fDom: "Field", fRy: "Schedule", fDur: "Length", fPr: "Max budget", fLeft: "Only with free places",
      modes: { jour: "Daytime", soir: "Evening", we: "Weekend", dist: "Remote" }, durs: ["Under a month", "1 to 2 months", "3 months or more"],
      next: "Next session:", left: "{n} places", full: "Full", det: "Details", add: "Add", added: "Added", hours: "h", tr: "or 3 × {p}",
      dk: ["Length", "Hours", "Next session", "Award"], cq: "Qualifying training certificate", cc: "Specialisation certificate", prog: "Programme", jobs: "After the course", pre: "Entry level", trs: ["At sign-up", "Month 2", "Month 3"],
      cEmpty: "Your pre-registration is empty. Add a course from the catalogue.", sub: "Subtotal", combo: "2 courses or more −10%", red: "Discount −20%", total: "Total", fees: "+ file fee: 2,000 DA",
      l1: "Full name", l2: "Phone", l3: "Province", l4: "Status", sit: ["Employee", "Student", "Job seeker (ANEM)", "Other"], send: "Send the pre-registration",
      trayT: "{n} course(s) · {t}", trayB: "Finish", err: "Enter your name and a valid number.", demo: "AFEX Digital demo: no pre-registration was sent, this form is not connected yet.",
      kH: "Upcoming sessions", kP: "Each colour is a field. Tap a session to open its page.", wd: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      dH: "The enrolment file", dP: "Hand it in at reception, or send photos on WhatsApp before the start.",
      docs: ["2 passport photos", "Copy of your ID card", "Birth certificate extract (12S)", "Copy of your latest diploma or school certificate", "Student card or ANEM certificate, for the discount", "File fee: 2,000 DA"],
      eH: "For companies", eP: "Train your teams here or at your premises, with a proper agreement and invoice.", eBtn: "Request a quote",
      ent: ["Training agreement and invoice in the company’s name", "Sessions at your premises, from 6 employees", "A certificate for each trained employee", "Tailored programmes: annual stocktake, public procurement, payroll", "Quote within 48 hours"],
      foA: "A fictional vocational training school, Béjaïa.", foAd: "Near the bus station (demo address).", foH: "Reception", foC: "Contact", foCV: "Phone and WhatsApp: demo number. Facebook and Instagram: Tadbir Béjaïa.",
      foot: "© 2026 Tadbir, a fictional school.", by: "Website by", photos: "Photos: Unsplash,", waT: "Message us on WhatsApp", waDemo: "AFEX Digital demo: the WhatsApp number is not connected yet.", quote: "Demo: the quote request is not connected yet.", lang: "Language", close: "Close",
      docAlt: "Administrative papers on a table", entAlt: "Storekeepers in a large warehouse", capAlt: "Cap Carbon in Béjaïa", title: "Tadbir, management training school in Béjaïa", loc: "en-GB" }
  };

  var DOM = { grh: ["#00594F", { fr: "Ressources humaines", ar: "الموارد البشرية", en: "Human resources" }], achat: ["#E5533D", { fr: "Achats", ar: "المشتريات", en: "Purchasing" }], stock: ["#2D6CDF", { fr: "Stock et logistique", ar: "المخزون واللوجستيك", en: "Stock and logistics" }], compta: ["#8A4FD8", { fr: "Comptabilité", ar: "المحاسبة", en: "Accounting" }], secret: ["#C98900", { fr: "Secrétariat et bureautique", ar: "السكرتارية والمكتبية", en: "Secretarial and office" }], vente: ["#1F9E6E", { fr: "Commerce et vente", ar: "التجارة والبيع", en: "Sales" }] };
  function T(fr, ar, en) { return { fr: fr, ar: ar, en: en }; }
  var F = [
    { d: "grh", img: "entretien", t: T("Gestion des ressources humaines", "تسيير الموارد البشرية", "Human resources management"), m: 3, h: 180, p: 45000, md: ["jour", "soir"], nx: 9, left: 6, c: 1,
      mod: T(["Droit du travail algérien (loi 90-11)", "Recrutement et entretiens", "Contrats, dossiers et discipline", "Formation et évaluation"], ["قانون العمل الجزائري (90-11)", "التوظيف والمقابلات", "العقود والملفات والانضباط", "التكوين والتقييم"], ["Algerian labour law (law 90-11)", "Recruiting and interviews", "Contracts, files and discipline", "Training and appraisal"]), job: T("Assistant RH, chargé du personnel", "مساعد موارد بشرية، مكلّف بالمستخدمين", "HR assistant, personnel officer"), pre: T("Bac ou niveau terminale", "بكالوريا أو مستوى نهائي", "Baccalaureate level") },
    { d: "grh", img: "hijabbur", t: T("Paie et déclarations CNAS", "الأجور وتصريحات CNAS", "Payroll and CNAS filings"), m: 1, h: 60, p: 25000, md: ["soir", "we"], nx: 16, left: 3, c: 0,
      mod: T(["Bulletin de paie et IRG", "Cotisations CNAS et CASNOS", "Déclarations mensuelles et annuelles", "Cas pratiques"], ["كشف الراتب والضريبة على الدخل", "اشتراكات CNAS وCASNOS", "التصريحات الشهرية والسنوية", "حالات تطبيقية"], ["Payslips and income tax", "CNAS and CASNOS contributions", "Monthly and annual returns", "Case studies"]), job: T("Gestionnaire de paie", "مسيّر الأجور", "Payroll officer"), pre: T("Niveau 3e AS", "مستوى الثالثة ثانوي", "Secondary school level") },
    { d: "achat", img: "stocktab", t: T("Gestion des achats et approvisionnement", "تسيير المشتريات والتموين", "Purchasing and supply management"), m: 2, h: 120, p: 38000, md: ["jour", "soir"], nx: 23, left: 8, c: 1,
      mod: T(["Cycle d’achat et bons de commande", "Choix et évaluation des fournisseurs", "Négociation et contrats", "Achats à l’importation"], ["دورة الشراء وسندات الطلب", "اختيار الموردين وتقييمهم", "التفاوض والعقود", "مشتريات الاستيراد"], ["Purchase cycle and orders", "Choosing and rating suppliers", "Negotiation and contracts", "Import purchasing"]), job: T("Acheteur, approvisionneur", "مشتري، مموّن", "Buyer, procurement officer"), pre: T("Bac", "بكالوريا", "Baccalaureate") },
    { d: "achat", img: "hijabtab", t: T("Marchés publics : le code et la pratique", "الصفقات العمومية: القانون والتطبيق", "Public procurement: the code in practice"), m: 1, h: 48, p: 30000, md: ["we", "dist"], nx: 30, left: 10, c: 0,
      mod: T(["Le décret des marchés publics", "Cahier des charges et avis d’appel d’offres", "Ouverture des plis et évaluation", "Suivi et réception"], ["مرسوم الصفقات العمومية", "دفتر الشروط وإعلان المناقصة", "فتح الأظرفة والتقييم", "المتابعة والاستلام"], ["The public procurement decree", "Specifications and tender notices", "Bid opening and evaluation", "Follow-up and acceptance"]), job: T("Service des marchés, soumissionnaires", "مصلحة الصفقات، المتعهّدون", "Procurement units, bidders"), pre: T("Bac + expérience appréciée", "بكالوريا مع خبرة مفضّلة", "Baccalaureate, experience a plus") },
    { d: "stock", img: "rayons", t: T("Gestion de stock et inventaire", "تسيير المخزون والجرد", "Stock management and stocktaking"), m: 2, h: 110, p: 36000, md: ["jour", "soir"], nx: 4, left: 2, c: 1,
      mod: T(["Entrées, sorties et fiches de stock", "Méthodes FIFO, LIFO, CUMP", "Inventaire permanent et annuel", "Logiciel de gestion de stock"], ["المداخيل والمخارج وبطاقات المخزون", "طرق FIFO وLIFO والتكلفة الوسطية", "الجرد الدائم والسنوي", "برنامج تسيير المخزون"], ["Stock in, out and stock cards", "FIFO, LIFO and weighted cost", "Perpetual and annual stocktake", "Stock software"]), job: T("Gestionnaire de stock, magasinier", "مسيّر مخزون، أمين مخزن", "Stock controller, storekeeper"), pre: T("Niveau 3e AS", "مستوى الثالثة ثانوي", "Secondary school level") },
    { d: "stock", img: "magasin", t: T("Magasinier", "أمين مخزن", "Storekeeper"), m: 1.5, h: 80, p: 28000, md: ["jour"], nx: 11, left: 5, c: 0,
      mod: T(["Réception et contrôle des marchandises", "Rangement et emplacements", "Préparation des commandes", "Sécurité dans l’entrepôt"], ["استلام البضائع ومراقبتها", "الترتيب والمواقع", "تحضير الطلبيات", "السلامة في المستودع"], ["Receiving and checking goods", "Storage and locations", "Order picking", "Warehouse safety"]), job: T("Magasinier, agent logistique", "أمين مخزن، عون لوجستيك", "Storekeeper, logistics agent"), pre: T("Niveau 4e AM", "مستوى الرابعة متوسط", "Middle school level") },
    { d: "stock", img: "conteneurs", t: T("Logistique et transport", "اللوجستيك والنقل", "Logistics and transport"), m: 3, h: 170, p: 48000, md: ["jour", "we"], nx: 18, left: 9, c: 1,
      mod: T(["Chaîne logistique et flux", "Transport routier et maritime", "Incoterms et documents", "Plateformes et port de Béjaïa"], ["سلسلة الإمداد والتدفقات", "النقل البري والبحري", "Incoterms والوثائق", "المنصات وميناء بجاية"], ["Supply chain and flows", "Road and sea transport", "Incoterms and documents", "Hubs and the port of Béjaïa"]), job: T("Agent logistique, affréteur", "عون لوجستيك، وكيل شحن", "Logistics agent, freight officer"), pre: T("Bac", "بكالوريا", "Baccalaureate") },
    { d: "stock", img: "chariot", t: T("Cariste : chariot élévateur", "سائق رافعة شوكية", "Forklift operator"), m: 0.5, h: 40, p: 18000, md: ["jour", "we"], nx: 6, left: 0, c: 0,
      mod: T(["Règles de sécurité", "Conduite à vide et en charge", "Gerbage et dégerbage", "Examen pratique"], ["قواعد السلامة", "القيادة فارغة ومحمّلة", "التكديس والتفريغ", "امتحان تطبيقي"], ["Safety rules", "Driving empty and loaded", "Stacking and unstacking", "Practical exam"]), job: T("Cariste en entrepôt ou au port", "سائق رافعة في مستودع أو ميناء", "Forklift driver in a warehouse or port"), pre: T("18 ans et plus", "18 سنة فأكثر", "Aged 18 or over") },
    { d: "compta", img: "compta", t: T("Comptabilité générale (SCF)", "المحاسبة العامة (SCF)", "General accounting (SCF)"), m: 3, h: 180, p: 42000, md: ["jour", "soir", "dist"], nx: 13, left: 7, c: 1,
      mod: T(["Le système comptable financier", "Journal, grand livre, balance", "TVA et G50", "Bilan et compte de résultat"], ["النظام المحاسبي المالي", "اليومية، دفتر الأستاذ، الميزان", "الرسم على القيمة المضافة وG50", "الميزانية وجدول النتائج"], ["The Algerian accounting system", "Journal, ledger, trial balance", "VAT and G50 returns", "Balance sheet and income statement"]), job: T("Aide-comptable", "مساعد محاسب", "Bookkeeper"), pre: T("Bac", "بكالوريا", "Baccalaureate") },
    { d: "compta", img: "compta2", t: T("PC Compta et PC Paie", "برامج PC Compta وPC Paie", "PC Compta and PC Paie software"), m: 0.75, h: 36, p: 20000, md: ["soir", "we"], nx: 20, left: 4, c: 0,
      mod: T(["Créer un dossier société", "Saisie et lettrage", "Paramétrer la paie", "Éditions et sauvegardes"], ["إنشاء ملف مؤسسة", "الإدخال والمطابقة", "إعداد الأجور", "الطباعة والحفظ"], ["Setting up a company file", "Entry and matching", "Payroll settings", "Reports and backups"]), job: T("Comptable sur logiciel", "محاسب على البرامج", "Software bookkeeper"), pre: T("Notions de comptabilité", "مبادئ المحاسبة", "Basic accounting") },
    { d: "secret", img: "secretaire", t: T("Secrétariat de direction", "سكرتارية المديرية", "Executive assistant"), m: 3, h: 160, p: 35000, md: ["jour"], nx: 27, left: 11, c: 1,
      mod: T(["Courrier administratif en arabe et en français", "Classement et archivage", "Accueil et agenda", "Comptes rendus de réunion"], ["المراسلات الإدارية بالعربية والفرنسية", "الترتيب والأرشفة", "الاستقبال والأجندة", "محاضر الاجتماعات"], ["Admin letters in Arabic and French", "Filing and archiving", "Reception and diary", "Meeting minutes"]), job: T("Secrétaire, assistante de direction", "سكرتيرة، مساعدة مدير", "Secretary, executive assistant"), pre: T("Niveau 3e AS", "مستوى الثالثة ثانوي", "Secondary school level") },
    { d: "secret", img: "classe", t: T("Bureautique : Word, Excel, PowerPoint", "المكتبية: Word وExcel وPowerPoint", "Office: Word, Excel, PowerPoint"), m: 1, h: 48, p: 15000, md: ["jour", "soir", "we"], nx: 2, left: 12, c: 0,
      mod: T(["Rédiger et mettre en page", "Tableaux et formules Excel", "Présentations PowerPoint", "E-mail et Internet au bureau"], ["التحرير والتنسيق", "جداول وصيغ إكسل", "عروض باوربوينت", "البريد والإنترنت في المكتب"], ["Writing and layout", "Excel tables and formulas", "PowerPoint presentations", "Email and web at work"]), job: T("Tous les postes de bureau", "كل مناصب المكتب", "Any office job"), pre: T("Aucun", "لا شيء", "None") },
    { d: "secret", img: "salle", t: T("Excel avancé pour la gestion", "إكسل متقدّم للتسيير", "Advanced Excel for management"), m: 0.75, h: 30, p: 18000, md: ["soir", "dist"], nx: 15, left: 6, c: 0,
      mod: T(["Fonctions RECHERCHEV et SI", "Tableaux croisés dynamiques", "Tableaux de bord", "Suivi de stock et de paie dans Excel"], ["دوال البحث والشرط", "الجداول المحورية", "لوحات القيادة", "متابعة المخزون والأجور في إكسل"], ["VLOOKUP and IF", "Pivot tables", "Dashboards", "Stock and payroll tracking in Excel"]), job: T("Gestionnaires, comptables, acheteurs", "المسيّرون، المحاسبون، المشترون", "Managers, accountants, buyers"), pre: T("Bureautique de base", "مكتبية أساسية", "Basic office skills") },
    { d: "vente", img: "allee", t: T("Techniques de vente et service client", "تقنيات البيع وخدمة الزبائن", "Sales and customer service"), m: 1, h: 50, p: 22000, md: ["soir", "we"], nx: 22, left: 9, c: 0,
      mod: T(["Accueil et écoute du client", "Argumentaire et objections", "Vente au comptoir et au téléphone", "Fidéliser et gérer les réclamations"], ["استقبال الزبون والاستماع إليه", "الحجج والاعتراضات", "البيع في المحل وعبر الهاتف", "الوفاء ومعالجة الشكاوى"], ["Welcoming and listening", "Pitch and objections", "Counter and phone sales", "Loyalty and complaints"]), job: T("Vendeur, commercial, agent d’accueil", "بائع، تجاري، عون استقبال", "Sales assistant, rep, receptionist"), pre: T("Aucun", "لا شيء", "None") }
  ];
  F.forEach(function (f, i) { f.id = i; });
  var WILAYAS = ["Béjaïa", "Sétif", "Bouira", "Tizi Ouzou", "Jijel", "Bordj Bou Arréridj", "Alger", "Boumerdès", "Constantine"];
  var OTHER = T("Autre wilaya", "ولاية أخرى", "Other province");

  var lang = "fr", flt = { dom: [], md: [], dur: [], max: 50000, left: false, q: "" }, sortBy = 0, cart = [], slide = 0, month = 0, sit = 0, ready = false, dyn = [];
  try { var sv = localStorage.getItem("tadbir-lang"); if (I[sv]) lang = sv; } catch (e) {}
  var today = new Date(); today.setHours(12, 0, 0, 0);
  function startOf(f) { var d = new Date(today); d.setDate(d.getDate() + f.nx); while (d.getDay() === 5) d.setDate(d.getDate() + 1); return d; }
  function fmt(d, o) { try { return new Intl.DateTimeFormat(I[lang].loc === "ar-DZ" ? "ar-DZ-u-nu-latn" : I[lang].loc, o).format(d); } catch (e) { return d.toDateString(); } }
  function durTxt(m) { var t = lang; if (m < 1) return t === "ar" ? Math.round(m * 4) + " أسابيع" : t === "en" ? Math.round(m * 4) + " weeks" : Math.round(m * 4) + " semaines"; if (m === 1.5) return t === "ar" ? "6 أسابيع" : t === "en" ? "6 weeks" : "6 semaines"; return t === "ar" ? m + (m === 1 ? " شهر" : " أشهر") : t === "en" ? m + (m === 1 ? " month" : " months") : m + " mois"; }
  function durBand(m) { return m < 1 ? 0 : m < 3 ? 1 : 2; }
  function openWa() { var m = { fr: "Bonjour AFEX Digital, je viens du site de démonstration « " + document.title + " ». Je veux un site comme celui-ci.", ar: "مرحبًا AFEX Digital، أتيت من الموقع التجريبي « " + document.title + " ». أريد موقعًا مثله.", en: "Hello AFEX Digital, I found the demo site “" + document.title + "”. I would like a website like this one." }; window.open("https://wa.me/213657944090?text=" + encodeURIComponent(m[lang] || m.fr), "_blank", "noopener"); }
  function toast(t) { var el = $("#toast"); el.textContent = t; el.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(function () { el.classList.remove("on"); }, 4200); }

  /* promo slider */
  var SIMG = ["entrepot", "salle", "conteneurs"], slideT = null;
  function renderSlider() {
    var t = I[lang];
    $("#slider").innerHTML = t.slides.map(function (s, i) { var H = i === 0 ? "h1" : "h2"; return '<div class="slide' + (i === slide ? " on" : "") + '" aria-hidden="' + (i !== slide) + '"><div class="tx"><span class="pill">' + s[0] + "</span><" + H + ">" + s[1] + "</" + H + "><p>" + s[2] + '</p><a class="btn r" href="#catalogue" data-go="' + i + '" style="align-self:flex-start">' + s[3] + '</a></div><div class="im">' + img(SIMG[i], "(min-width:900px) 40vw, 100vw", i === 0) + "</div></div>"; }).join("") + '<div class="sdots">' + t.slides.map(function (_, i) { return '<button type="button" data-s="' + i + '" aria-label="' + (i + 1) + '" aria-current="' + (i === slide) + '"></button>'; }).join("") + "</div>";
  }
  function goSlide(i) { slide = (i + 3) % 3; $$("#slider .slide").forEach(function (s, k) { s.classList.toggle("on", k === slide); s.setAttribute("aria-hidden", k !== slide); }); $$("#slider .sdots button").forEach(function (b, k) { b.setAttribute("aria-current", k === slide); }); if (!STATIC) gsap.from($$("#slider .slide")[slide].querySelectorAll(".tx > *"), { y: 20, opacity: 0, duration: .5, stagger: .06 }); }
  function autoSlide() { if (STATIC) return; clearInterval(slideT); slideT = setInterval(function () { goSlide(slide + 1); }, 6000); }

  /* catalogue */
  function renderCats() {
    var t = I[lang];
    $("#cats").innerHTML = '<button type="button" data-c="" aria-pressed="' + (!flt.dom.length) + '">' + t.all + "</button>" + Object.keys(DOM).map(function (k) { return '<button type="button" data-c="' + k + '" aria-pressed="' + (flt.dom.length === 1 && flt.dom[0] === k) + '">' + L(DOM[k][1]) + "</button>"; }).join("");
    $("#q").placeholder = t.ph;
  }
  function renderFilters() {
    var t = I[lang], cnt = function (fn) { return F.filter(fn).length; };
    $("#filters").innerHTML = "<h3>" + t.fT + ' <button type="button" id="reset">' + t.reset + "</button></h3>" +
      '<div class="fg"><b>' + t.fDom + "</b>" + Object.keys(DOM).map(function (k) { return '<label><input type="checkbox" data-f="dom" value="' + k + '"' + (flt.dom.indexOf(k) > -1 ? " checked" : "") + '><i style="width:10px;height:10px;border-radius:3px;background:' + DOM[k][0] + '"></i>' + L(DOM[k][1]) + "<span>" + cnt(function (f) { return f.d === k; }) + "</span></label>"; }).join("") + "</div>" +
      '<div class="fg"><b>' + t.fRy + "</b>" + Object.keys(t.modes).map(function (k) { return '<label><input type="checkbox" data-f="md" value="' + k + '"' + (flt.md.indexOf(k) > -1 ? " checked" : "") + ">" + t.modes[k] + "<span>" + cnt(function (f) { return f.md.indexOf(k) > -1; }) + "</span></label>"; }).join("") + "</div>" +
      '<div class="fg"><b>' + t.fDur + "</b>" + t.durs.map(function (x, k) { return '<label><input type="checkbox" data-f="dur" value="' + k + '"' + (flt.dur.indexOf(k) > -1 ? " checked" : "") + ">" + x + "<span>" + cnt(function (f) { return durBand(f.m) === k; }) + "</span></label>"; }).join("") + "</div>" +
      '<div class="fg"><b>' + t.fPr + ' : <output id="maxO">' + da(flt.max) + '</output></b><input type="range" id="max" min="15000" max="50000" step="1000" value="' + flt.max + '" aria-label="' + t.fPr + '"></div>' +
      '<div class="fg"><label><input type="checkbox" id="onlyLeft"' + (flt.left ? " checked" : "") + ">" + t.fLeft + "</label></div>";
  }
  function match(f) {
    if (flt.dom.length && flt.dom.indexOf(f.d) < 0) return false;
    if (flt.md.length && !flt.md.some(function (m) { return f.md.indexOf(m) > -1; })) return false;
    if (flt.dur.length && flt.dur.indexOf(durBand(f.m)) < 0) return false;
    if (f.p > flt.max) return false;
    if (flt.left && !f.left) return false;
    if (flt.q) { var hay = (["fr", "ar", "en"].map(function (l) { return f.t[l] + " " + f.mod[l].join(" ") + " " + DOM[f.d][1][l]; }).join(" ")).toLowerCase(); if (flt.q.toLowerCase().split(/\s+/).some(function (w) { return w && hay.indexOf(w) < 0; })) return false; }
    return true;
  }
  function sorted() { var a = F.slice(); a.sort(function (x, y) { return sortBy === 1 ? x.p - y.p : sortBy === 2 ? y.p - x.p : sortBy === 3 ? x.m - y.m : x.nx - y.nx; }); return a; }
  function cardHtml(f) {
    var t = I[lang], inC = cart.indexOf(f.id) > -1;
    return '<article class="fcard" data-id="' + f.id + '"><div class="im">' + img(f.img, "(min-width:1100px) 25vw, (min-width:600px) 45vw, 92vw") + '<span class="pill" style="color:' + DOM[f.d][0] + '">' + L(DOM[f.d][1]) + "</span>" + (f.left <= 3 ? '<span class="pill left">' + (f.left ? t.left.replace("{n}", f.left) : t.full) + "</span>" : "") + '</div><div class="bd"><h3>' + L(f.t) + '</h3><div class="meta"><span>' + durTxt(f.m) + "</span><span>" + f.h + " " + t.hours + "</span>" + f.md.map(function (m) { return "<span>" + t.modes[m] + "</span>"; }).join("") + '</div><p class="nx">' + t.next + " <b>" + fmt(startOf(f), { weekday: "short", day: "numeric", month: "short" }) + '</b></p><div class="price"><b>' + da(f.p) + "</b><small>" + t.tr.replace("{p}", da(Math.ceil(f.p / 3 / 100) * 100)) + '</small></div></div><div class="acts"><button type="button" class="btn g" data-det="' + f.id + '">' + t.det + '</button><button type="button" class="btn g" data-add="' + f.id + '" aria-pressed="' + inC + '"' + (f.left ? "" : " disabled") + ">" + (inC ? t.added : t.add) + "</button></div></article>";
  }
  function renderGrid(anim) {
    var t = I[lang], list = sorted(), shown = list.filter(match), st = anim && !STATIC && window.Flip ? Flip.getState("#grid .fcard") : null;
    $("#grid").innerHTML = list.map(cardHtml).join("") + '<p class="empty" id="empty" hidden>' + t.none + "</p>";
    $$("#grid .fcard").forEach(function (c) { c.hidden = !match(F[+c.dataset.id]); });
    $("#empty").hidden = shown.length > 0;
    $("#count").textContent = t.count.replace("{n}", shown.length);
    if (st) Flip.from(st, { duration: .5, ease: "power2.inOut", targets: "#grid .fcard", absolute: true, onEnter: function (e) { return gsap.fromTo(e, { opacity: 0, scale: .94 }, { opacity: 1, scale: 1, duration: .35 }); }, onLeave: function (e) { return gsap.to(e, { opacity: 0, duration: .2 }); } });
  }
  function renderSort() { $("#sort").innerHTML = I[lang].sort.map(function (s, i) { return '<option value="' + i + '"' + (i === sortBy ? " selected" : "") + ">" + s + "</option>"; }).join(""); }
  /* drawers */
  var lastFocus = null;
  function openDrawer(id) { lastFocus = document.activeElement; $("#scrim").classList.add("on"); $(id).classList.add("on"); if (lenis) lenis.stop(); setTimeout(function () { var x = $(id + " .x"); if (x) x.focus(); }, 50); }
  function closeDrawers() { $("#scrim").classList.remove("on"); $$(".drawer").forEach(function (d) { d.classList.remove("on"); }); if (lenis) lenis.start(); if (lastFocus) lastFocus.focus(); }
  function showDetail(id) {
    var t = I[lang], f = F[id], tr = Math.ceil(f.p / 3 / 100) * 100, inC = cart.indexOf(id) > -1;
    $("#detT").textContent = L(f.t);
    $("#detB").innerHTML = '<div class="dimg">' + img(f.img, "520px") + '</div><div class="kv"><div><small>' + t.dk[0] + "</small><b>" + durTxt(f.m) + "</b></div><div><small>" + t.dk[1] + "</small><b>" + f.h + " " + t.hours + "</b></div><div><small>" + t.dk[2] + "</small><b>" + fmt(startOf(f), { weekday: "long", day: "numeric", month: "long" }) + "</b></div><div><small>" + t.dk[3] + "</small><b>" + (f.c ? t.cc : t.cq) + "</b></div></div><div><h3 style=\"font-size:1.1rem;margin-bottom:8px\">" + t.prog + '</h3><ol class="mods">' + L(f.mod).map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ol></div><div class=\"kv\"><div><small>" + t.jobs + "</small><b>" + L(f.job) + "</b></div><div><small>" + t.pre + "</small><b>" + L(f.pre) + '</b></div></div><div class="tranche">' + t.trs.map(function (x) { return "<div><small>" + x + "</small><b>" + da(tr) + "</b></div>"; }).join("") + "</div>";
    $("#detF").innerHTML = '<div class="price" style="border:0;padding:0"><b>' + da(f.p) + '</b><small>' + (f.left ? t.left.replace("{n}", f.left) : t.full) + '</small></div><button type="button" class="btn ' + (inC ? "g" : "t") + '" data-add="' + id + '"' + (f.left ? "" : " disabled") + ">" + (inC ? t.added : t.add) + "</button>";
    openDrawer("#det");
  }
  function totals() { var sub = cart.reduce(function (a, id) { return a + F[id].p; }, 0), combo = cart.length >= 2 ? sub * .1 : 0, red = (sit === 1 || sit === 2) ? (sub - combo) * .2 : 0; return { sub: sub, combo: combo, red: red, tot: sub - combo - red }; }
  function renderCart() {
    var t = I[lang], z = totals();
    $("#cartN").textContent = cart.length;
    var tray = $("#tray"); tray.classList.toggle("on", cart.length > 0); $("#trayT").textContent = t.trayT.replace("{n}", cart.length).replace("{t}", da(z.tot));
    if (!cart.length) { $("#cartB").innerHTML = '<p class="muted">' + t.cEmpty + '</p><a class="btn t" href="#catalogue" data-close>' + t.cH + "</a>"; return; }
    var wil = WILAYAS.map(function (w) { return "<option>" + w + "</option>"; }).join("") + "<option>" + L(OTHER) + "</option>";
    $("#cartB").innerHTML = cart.map(function (id) { var f = F[id]; return '<div class="citem">' + img(f.img, "64px") + "<div><b>" + L(f.t) + "</b><small>" + fmt(startOf(f), { day: "numeric", month: "short" }) + " · " + da(f.p) + '</small></div><button type="button" data-rm="' + id + '" aria-label="×"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>'; }).join("") +
      '<div class="tot"><div><span>' + t.sub + "</span><span>" + da(z.sub) + "</span></div>" + (z.combo ? '<div class="disc"><span>' + t.combo + "</span><span>− " + da(z.combo) + "</span></div>" : "") + (z.red ? '<div class="disc"><span>' + t.red + "</span><span>− " + da(z.red) + "</span></div>" : "") + '<div class="big"><span>' + t.total + "</span><span>" + da(z.tot) + '</span></div><small class="muted">' + t.tr.replace("{p}", da(Math.ceil(z.tot / 3 / 100) * 100)) + " · " + t.fees + "</small></div>" +
      '<form class="dform" id="f" novalidate><div class="row2"><label>' + t.l1 + '<input name="name" autocomplete="name"></label><label>' + t.l2 + '<input name="tel" type="tel" inputmode="tel" placeholder="05 / 06 / 07 …" autocomplete="tel"></label></div><div class="row2"><label>' + t.l3 + "<select name=\"wil\">" + wil + "</select></label><label>" + t.l4 + '<select name="sit" id="sit">' + t.sit.map(function (s, i) { return '<option value="' + i + '"' + (i === sit ? " selected" : "") + ">" + s + "</option>"; }).join("") + '</select></label></div><button class="btn r" type="submit">' + t.send + '</button><p id="msg" role="status"></p></form>';
  }
  function toggleCart(id) {
    var i = cart.indexOf(id); if (i > -1) cart.splice(i, 1); else cart.push(id);
    var t = I[lang], inC = cart.indexOf(id) > -1;
    $$('[data-add="' + id + '"]').forEach(function (b) { b.setAttribute("aria-pressed", inC); b.textContent = inC ? t.added : t.add; if (b.closest(".df")) b.className = "btn " + (inC ? "g" : "t"); });
    renderCart();
    if (!STATIC && inC) gsap.fromTo("#cartN", { scale: 1.8 }, { scale: 1, duration: .5, ease: "back.out(3)" });
  }
  /* calendar */
  function renderCal() {
    var t = I[lang], base = new Date(today.getFullYear(), today.getMonth() + month, 1), months = [0, 1, 2].map(function (k) { return new Date(today.getFullYear(), today.getMonth() + k, 1); });
    $("#mtabs").innerHTML = months.map(function (m, k) { return '<button type="button" data-m="' + k + '" aria-pressed="' + (k === month) + '">' + fmt(m, { month: "long", year: "numeric" }) + "</button>"; }).join("");
    var first = (base.getDay() + 1) % 7, days = new Date(base.getFullYear(), base.getMonth() + 1, 0).getDate(), html = t.wd.map(function (w) { return '<div class="dn">' + w + "</div>"; }).join("");
    for (var i = 0; i < first; i++) html += "<div></div>";
    var ev = {}; F.forEach(function (f) { [0, 42].forEach(function (off) { var d = startOf(f); d.setDate(d.getDate() + off); while (d.getDay() === 5) d.setDate(d.getDate() + 1); if (d.getMonth() === base.getMonth() && d.getFullYear() === base.getFullYear()) (ev[d.getDate()] = ev[d.getDate()] || []).push(f); }); });
    for (var d = 1; d <= days; d++) { var dt = new Date(base.getFullYear(), base.getMonth(), d), fri = dt.getDay() === 5; html += '<div class="' + (fri ? "off" : "") + '"><span class="d">' + d + "</span>" + (ev[d] || []).map(function (f) { return '<button type="button" class="ev" style="background:' + DOM[f.d][0] + '" data-det="' + f.id + '">' + L(f.t) + "</button>"; }).join("") + "</div>"; }
    $("#month").innerHTML = html;
    $("#leg").innerHTML = Object.keys(DOM).map(function (k) { return '<span><i style="background:' + DOM[k][0] + '"></i>' + L(DOM[k][1]) + "</span>"; }).join("");
  }
  function render() {
    var t = I[lang];
    renderSlider(); renderCats(); renderFilters(); renderSort(); renderGrid(false); renderCart(); renderCal();
    $("#docs").innerHTML = t.docs.map(function (x) { return "<li>" + x + "</li>"; }).join("");
    $("#ent").innerHTML = t.ent.map(function (x) { return '<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg><span>' + x + "</span></li>"; }).join("");
    var names = []; Object.keys(P).forEach(function (k) { if (names.indexOf(P[k][1]) < 0) names.push(P[k][1]); });
    $("#credits").textContent = t.photos + " " + names.join(", ") + ".";
    $$("[data-close]").forEach(function (b) { b.setAttribute("aria-label", t.close); });
  }
  function setLang(l) {
    lang = l; var t = I[l];
    doc.lang = l; doc.dir = l === "ar" ? "rtl" : "ltr"; document.title = t.title;
    $$("[data-i]").forEach(function (e) { if (typeof t[e.dataset.i] === "string") e.textContent = t[e.dataset.i]; });
    $$("[data-alt]").forEach(function (e) { e.alt = t[e.dataset.alt]; });
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.l === l); });
    $(".lang").setAttribute("aria-label", t.lang);
    try { localStorage.setItem("tadbir-lang", l); } catch (e) {}
    render();
    if (ready) { bindDynamic(); ScrollTrigger.refresh(); }
  }

  /* events */
  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.l !== lang) setLang(b.dataset.l); }); });
  $("#slider").addEventListener("click", function (e) { var b = e.target.closest(".sdots button"); if (b) { goSlide(+b.dataset.s); autoSlide(); } var g = e.target.closest("[data-go]"); if (g) { var k = +g.dataset.go; flt.dom = k === 2 ? ["stock"] : []; flt.md = k === 1 ? ["soir"] : []; renderCats(); renderFilters(); renderGrid(true); } });
  $("#sform").addEventListener("submit", function (e) { e.preventDefault(); flt.q = $("#q").value.trim(); renderGrid(true); var c = $("#catalogue"); if (lenis) lenis.scrollTo(c, { offset: -130 }); else c.scrollIntoView(); });
  var qT; $("#q").addEventListener("input", function () { clearTimeout(qT); qT = setTimeout(function () { flt.q = $("#q").value.trim(); renderGrid(true); }, 220); });
  $("#cats").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; flt.dom = b.dataset.c ? [b.dataset.c] : []; renderCats(); renderFilters(); renderGrid(true); var c = $("#catalogue"); if (lenis) lenis.scrollTo(c, { offset: -130 }); });
  $("#filters").addEventListener("change", function (e) { var x = e.target; if (x.dataset.f) { var a = flt[x.dataset.f], v = x.dataset.f === "dur" ? +x.value : x.value; if (x.checked) a.push(v); else a.splice(a.indexOf(v), 1); if (x.dataset.f === "dom") renderCats(); } else if (x.id === "onlyLeft") flt.left = x.checked; renderGrid(true); });
  $("#filters").addEventListener("input", function (e) { if (e.target.id === "max") { flt.max = +e.target.value; $("#maxO").textContent = da(flt.max); renderGrid(false); } });
  $("#filters").addEventListener("click", function (e) { if (e.target.id === "reset") { flt = { dom: [], md: [], dur: [], max: 50000, left: false, q: "" }; $("#q").value = ""; renderCats(); renderFilters(); renderGrid(true); } });
  $("#sort").addEventListener("change", function () { sortBy = +this.value; renderGrid(true); });
  document.addEventListener("click", function (e) {
    var d = e.target.closest("[data-det]"); if (d) { showDetail(+d.dataset.det); return; }
    var a = e.target.closest("[data-add]"); if (a && !a.disabled) { toggleCart(+a.dataset.add); return; }
    var r = e.target.closest("[data-rm]"); if (r) { toggleCart(+r.dataset.rm); return; }
    if (e.target.closest("[data-close]") || e.target.id === "scrim") closeDrawers();
  });
  $("#openCart").addEventListener("click", function () { renderCart(); openDrawer("#cartD"); });
  $("#trayB").addEventListener("click", function () { renderCart(); openDrawer("#cartD"); });
  $("#cartD").addEventListener("change", function (e) { if (e.target.id === "sit") { sit = +e.target.value; var keep = { name: $("#f").name.value, tel: $("#f").tel.value, wil: $("#f").wil.value }; renderCart(); $("#f").name.value = keep.name; $("#f").tel.value = keep.tel; $("#f").wil.value = keep.wil; } });
  $("#cartD").addEventListener("submit", function (e) { e.preventDefault(); var f = e.target, t = I[lang]; if (!f.name.value.trim() || !/^0[5-7]\d{8}$/.test(f.tel.value.replace(/\s/g, ""))) { $("#msg").textContent = t.err; (f.name.value.trim() ? f.tel : f.name).focus(); return; } $("#msg").textContent = t.demo; });
  $("#mtabs").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; month = +b.dataset.m; renderCal(); if (!STATIC) gsap.from("#month .ev", { scale: .8, opacity: 0, duration: .35, stagger: .02 }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && $(".drawer.on")) closeDrawers(); });
  $("#waf").addEventListener("click", function () { openWa(); });
  $("#quoteB").addEventListener("click", function () { toast(I[lang].quote); });

  var lenis = null;
  render();
  if (STATIC) return;

  gsap.registerPlugin(ScrollTrigger, Flip);
  lenis = window.Lenis ? new Lenis({ lerp: 0.12 }) : null;
  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach(function (a) { a.addEventListener("click", function (e) { var id = a.getAttribute("href"); if (id.length < 2) return; var el = $(id); if (!el) return; e.preventDefault(); lenis.scrollTo(el, { offset: -130 }); }); });
  }
  autoSlide();
  $("#slider").addEventListener("mouseenter", function () { clearInterval(slideT); });
  $("#slider").addEventListener("mouseleave", autoSlide);
  gsap.from("#slider .slide.on .tx > *", { y: 24, opacity: 0, duration: .7, stagger: .08, ease: "power3.out", delay: .1 });
  gsap.from(".side .mini", { x: doc.dir === "rtl" ? -40 : 40, opacity: 0, duration: .7, stagger: .1, ease: "power3.out", delay: .3 });
  gsap.from(".why > div", { y: 20, opacity: 0, duration: .5, stagger: .06, delay: .5 });
  ScrollTrigger.batch("[data-up]", { start: "top 90%", once: true, onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, duration: .7, stagger: .08, ease: "power3.out" }); } });

  function bindDynamic() {
    [].concat.apply([], dyn).forEach(function (x) { if (x.targets || x.getChildren) x.revert(); else if (x.kill) x.kill(); }); dyn = [];
    dyn.push(ScrollTrigger.batch("#grid .fcard", { start: "top 92%", once: true, onEnter: function (els) { gsap.fromTo(els, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .5, stagger: .05, ease: "power2.out", clearProps: "transform,opacity" }); } }));
    dyn.push(gsap.fromTo("#month .ev", { scale: .8, opacity: 0 }, { scale: 1, opacity: 1, duration: .35, stagger: .02, clearProps: "transform,opacity", scrollTrigger: { trigger: "#month", start: "top 80%" } }));
  }
  bindDynamic();
  ready = true;
  var rz, lw = innerWidth; window.addEventListener("resize", function () { if (innerWidth === lw) return; lw = innerWidth; clearTimeout(rz); rz = setTimeout(function () { ScrollTrigger.refresh(); }, 300); });
})();
