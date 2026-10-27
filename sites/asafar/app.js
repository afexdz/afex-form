/* Asafar : contenu FR / AR / EN, métiers en gélules, orientation, conditions, pouls, année, tarifs, ordonnance, inscription (GSAP + ScrollTrigger + Lenis, en local) */
(function () {
  var doc = document.documentElement;
  var STATIC = doc.classList.contains("static") || !window.gsap || !window.ScrollTrigger;
  if (STATIC) doc.classList.add("static");
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  function L(o) { return o[lang]; }
  function T(fr, ar, en) { return { fr: fr, ar: ar, en: en }; }
  var P = { steto: [1920, "mohamad azaam"], masque: [1920, "mohamad azaam"], consult: [853, "Mufid Majnun"], promo: [720, "Herlambang Tinasih Gusti"], sourire: [853, "Mufid Majnun"], cabinet: [720, "Divaris Shirichena"], rcp: [1920, "Frederick Shaw"], mains: [1920, "Frederick Shaw"], pharma: [853, "National Cancer Institute"], cachets: [845, "Roberto Sorin"], tension: [1927, "CDC"], tensio2: [853, "Mufid Majnun"], bebe: [960, "Aditya Romansa"], stage: [853, "Mufid Majnun"], regard2: [1920, "Rasheed Kemy"], kabylie: [853, "Djalil Kun"] };
  function img(n, sizes, cls) { var big = n === "steto" || n === "promo" || n === "kabylie"; return '<img src="assets/img/' + n + '-640.webp" srcset="assets/img/' + n + '-640.webp 640w, assets/img/' + n + '-1280.webp 1280w' + (big ? ", assets/img/" + n + "-1920.webp 1920w" : "") + '" sizes="' + (sizes || "50vw") + '" width="1280" height="' + P[n][0] + '" alt="" loading="lazy" decoding="async"' + (cls ? ' class="' + cls + '"' : "") + ">"; }
  function cur() { return lang === "ar" ? "دج" : "DA"; }
  function da(n) { return "⁦" + Math.round(n).toLocaleString("fr-FR").replace(/ | /g, " ") + "⁩ " + cur(); }

  var M = [
    { img: "tension", t: T("Aide-soignant(e)", "مساعد(ة) تمريض", "Care assistant"), dur: T("12 mois", "12 شهرًا", "12 months"), mo: 10, niv: 2, a0: 18, a1: 45, p: 120000,
      d: T("Toilette, repas, mobilisation, prise des constantes : vous accompagnez l’infirmier au plus près des patients.", "النظافة، الوجبات، تحريك المريض، قياس المؤشرات الحيوية: ترافق الممرض قرب المرضى.", "Washing, meals, moving patients, taking vital signs: you work alongside nurses, close to patients."),
      j: T("Cliniques privées, EHPAD, centres de dialyse, soins à domicile", "العيادات الخاصة، دور المسنين، مراكز تصفية الكلى، العلاج في المنزل", "Private clinics, care homes, dialysis centres, home care") },
    { img: "bebe", t: T("Auxiliaire de puériculture", "مساعد(ة) رعاية الرضّع", "Childcare auxiliary"), dur: T("12 mois", "12 شهرًا", "12 months"), mo: 10, niv: 2, a0: 18, a1: 45, p: 120000,
      d: T("Soins du nouveau-né, biberons, bain, éveil et hygiène : en maternité, en pédiatrie ou en crèche.", "رعاية حديثي الولادة، الرضّاعات، الحمّام، الإيقاظ والنظافة: في الولادة أو طب الأطفال أو الروضة.", "Newborn care, bottles, bathing, early learning and hygiene: in maternity, paediatrics or nurseries."),
      j: T("Cliniques de maternité, crèches, services de pédiatrie", "عيادات التوليد، الروضات، مصالح طب الأطفال", "Maternity clinics, nurseries, paediatric wards") },
    { img: "pharma", t: T("Vendeur(se) en pharmacie", "بائع(ة) في صيدلية", "Pharmacy assistant"), dur: T("6 mois", "6 أشهر", "6 months"), mo: 6, niv: 2, a0: 18, a1: 99, p: 70000,
      d: T("Noms des médicaments, lecture d’ordonnance, CHIFA et tiers payant, rangement et conseil au comptoir.", "أسماء الأدوية، قراءة الوصفة، بطاقة الشفاء والدفع من الغير، الترتيب والنصح عند المنضدة.", "Drug names, reading prescriptions, CHIFA card and third-party payment, stock and counter advice."),
      j: T("Officines, parapharmacies, grossistes", "الصيدليات، شبه الصيدليات، تجار الجملة", "Pharmacies, health stores, wholesalers") },
    { img: "cachets", t: T("Délégué(e) médical(e)", "مندوب(ة) طبي", "Medical representative"), dur: T("6 mois", "6 أشهر", "6 months"), mo: 6, niv: 4, a0: 21, a1: 99, p: 90000,
      d: T("Pharmacologie de base, présentation d’un produit, visite des médecins et des pharmacies, rapports de tournée.", "مبادئ علم الأدوية، تقديم المنتج، زيارة الأطباء والصيدليات، تقارير الجولات.", "Basic pharmacology, presenting a product, visiting doctors and pharmacies, call reports."),
      j: T("Laboratoires pharmaceutiques, distributeurs", "المخابر الصيدلانية، الموزّعون", "Pharmaceutical labs, distributors") },
    { img: "consult", t: T("Secrétaire médical(e)", "سكرتير(ة) طبية", "Medical secretary"), dur: T("9 mois", "9 أشهر", "9 months"), mo: 8, niv: 2, a0: 18, a1: 99, p: 85000,
      d: T("Accueil des patients, rendez-vous, dossiers médicaux, vocabulaire médical, facturation et CNAS.", "استقبال المرضى، المواعيد، الملفات الطبية، المصطلحات الطبية، الفوترة وCNAS.", "Welcoming patients, appointments, medical records, medical vocabulary, billing and CNAS."),
      j: T("Cabinets, cliniques, laboratoires d’analyses, centres d’imagerie", "العيادات، المصحات، مخابر التحاليل، مراكز الأشعة", "Practices, clinics, testing labs, imaging centres") },
    { img: "tensio2", t: T("Garde-malade à domicile", "مرافق(ة) المرضى في المنزل", "Home carer"), dur: T("4 mois", "4 أشهر", "4 months"), mo: 4, niv: 1, a0: 20, a1: 99, p: 45000,
      d: T("Accompagner une personne âgée ou malade chez elle : hygiène, repas, médicaments, prévention des chutes.", "مرافقة مسنّ أو مريض في بيته: النظافة، الوجبات، الأدوية، الوقاية من السقوط.", "Caring for an elderly or ill person at home: hygiene, meals, medication, fall prevention."),
      j: T("Familles, agences de soins à domicile", "العائلات، وكالات العلاج في المنزل", "Families, home care agencies") },
    { img: "rcp", t: T("Secourisme (PSC1)", "الإسعافات الأولية", "First aid (PSC1)"), dur: T("2 week-ends", "عطلتا نهاية أسبوع", "2 weekends"), mo: 1, niv: 0, a0: 15, a1: 99, p: 8000,
      d: T("Alerter, protéger, massage cardiaque, position latérale de sécurité, étouffement, brûlures et saignements.", "الإنذار، الحماية، التدليك القلبي، وضعية الأمان الجانبية، الاختناق، الحروق والنزيف.", "Raising the alarm, CPR, recovery position, choking, burns and bleeding."),
      j: T("Pour tous : parents, enseignants, chauffeurs, salariés", "للجميع: الأولياء، الأساتذة، السائقون، العمال", "For everyone: parents, teachers, drivers, employees") }
  ];
  var NIV = [T("Sans niveau ou primaire", "بدون مستوى أو ابتدائي", "No diploma or primary"), T("4e AM (BEM)", "الرابعة متوسط (BEM)", "Middle school (BEM)"), T("1re ou 2e AS", "الأولى أو الثانية ثانوي", "Secondary, years 1–2"), T("3e AS", "الثالثة ثانوي", "Final year of secondary"), T("Bac et plus", "بكالوريا فما فوق", "Baccalaureate or higher")];
  var COMMUNES = ["Tizi Ouzou", "Draâ Ben Khedda", "Azazga", "Larbaâ Nath Irathen", "Boghni", "Draâ El Mizan", "Tigzirt", "Azeffoun", "Aïn El Hammam", "Ouadhia"];

  var I = {
    fr: { brand: "Asafar", demo0: "Démo, école fictive.", demo1: "Autres modèles", cd: "Session de janvier : <b>J-{n}</b>",
      h1: "Soigner est un métier. <span>Apprenez-le à Tizi Ouzou.</span>", hP: "Sept formations paramédicales courtes, des travaux pratiques sur mannequins et un vrai stage dans les structures de santé de la wilaya.", hB1: "Je m’inscris", hB2: "Quel métier pour moi ?", nameL: "Votre badge de stagiaire :", namePh: "Votre prénom", bTop: "Asafar · stagiaire 2026", defName: "Amel",
      r1: "7 métiers", r1p: "de 2 week-ends à 12 mois", r2: "Stage pratique", r2p: "dès le 2e trimestre", r3: "Salle de TP", r3p: "mannequins, lits, tensiomètres", r4: "Paiement échelonné", r4p: "mensuel ou trimestriel",
      mH: "Sept blouses, sept métiers.", mP: "Touchez un métier pour l’ouvrir : durée, niveau demandé, ce que vous apprenez et où vous travaillerez ensuite.", lvl: "Niveau :", from: "à partir de {a} ans", jobs: "Débouchés :", pick: "Ce métier m’intéresse", picked: "Ajouté à votre badge",
      honest: "Nos formations donnent une attestation de l’école. Elles ne remplacent pas le diplôme d’État d’infirmier, qui se prépare dans les instituts publics.",
      oH: "Quel métier vous ressemble ?", oP: "Cinq questions, une minute. Puis vérifiez à droite les métiers ouverts à votre âge et à votre niveau.",
      Q: [["Qu’est-ce qui vous attire le plus ?", ["Aider les malades et les personnes âgées", "Les bébés et les enfants", "Les médicaments et le conseil"]], ["Où vous voyez-vous travailler ?", ["À l’hôpital ou en clinique", "En pharmacie ou au contact des médecins", "Chez les patients, à domicile"]], ["Les soins du corps, la toilette, le sang ?", ["Aucun problème", "Plutôt pas, je préfère le bureau", "Oui, surtout avec les tout-petits"]], ["Votre point fort ?", ["La patience et la douceur", "L’organisation et l’ordinateur", "Parler et convaincre"]], ["Combien de temps pour vous former ?", ["Le moins possible", "Quelques mois", "Une année complète"]]],
      qOf: "Question {i} sur 5", back: "Revenir", res: "Votre métier le plus proche", match: "{p} % de correspondance", alt: "Deuxième choix : {m}", see: "Voir ce métier", again: "Recommencer", toForm: "Réserver une place",
      cH: "Puis-je m’inscrire ?", cAge: "Votre âge", cNiv: "Votre niveau scolaire", ok: "Ouvert", noNiv: "Niveau insuffisant", noAge: "Âge non admis", ageU: "{n} ans",
      pH: "Premier geste : prendre un pouls.", pP: "Le cœur bat à un rythme caché. Appuyez à chaque battement pendant 15 secondes, comme en TP : on multiplie par 4 et on compare.", n1: "adulte au repos", n2: "enfant", n3: "nouveau-né", sec: "secondes", pStart: "Commencer", pAgain: "Recommencer", pTap: "Battement",
      pGo: "Comptez… appuyez à chaque battement.", pR: "Vous avez compté <b>{t} battements</b>, soit <b>{m} par minute</b>. Le vrai rythme était de <b>{b}</b>.", pGood: " Très bien, c’est le geste d’une future aide-soignante.", pMid: " Pas mal ! En TP, on recommence jusqu’à 5 près.", pBad: " Concentrez-vous sur le rythme et réessayez.",
      aH: "Votre année chez nous.", aP: "Exemple pour la formation d’aide-soignant, de septembre à juin.",
      S: [["Septembre", "Accueil et bases", "Visite de l’école, blouses, règles d’hygiène et premiers gestes."], ["Octobre → décembre", "Les cours", "Anatomie, hygiène hospitalière, soins de base, éthique et communication avec le patient."], ["Janvier → février", "La salle de TP", "Toilette, lit, constantes et massage cardiaque sur mannequins, par groupes de 9."], ["Mars → mai", "Le stage", "Dix semaines dans une structure de santé de la wilaya, avec un tuteur et un carnet de stage."], ["Juin", "Examen et attestation", "Épreuve écrite, épreuve pratique, puis remise des attestations aux familles."]],
      tH: "Combien ça coûte, vraiment.", tP: "Choisissez la formation et la façon de payer. La blouse, le kit et l’assurance sont compris.", tM: "Formation", tPay: "Paiement", tKit: "Compris dans le prix",
      pays: [["Comptant", "−5 %"], ["Par trimestre", "sans frais"], ["Par mois", "sans frais"]], kit: ["2 blouses brodées Asafar", "Kit de TP personnel", "Assurance stagiaire", "Supports de cours en français et en arabe", "Attestation de fin de formation"],
      bTot: "Total de la formation", bIns: "Frais d’inscription", bDisc: "Remise comptant", bDue: "Échéancier", bNow: "À l’inscription", bOnce: "Paiement unique", months: ["sept.", "oct.", "nov.", "déc.", "janv.", "févr.", "mars", "avr.", "mai", "juin"], bCta: "Réserver avec ce tarif",
      fH: "Vos questions, nos réponses.", fS: "Ordonnance de l’accueil, à lire avant de venir.", stamp: "Asafar · Tizi Ouzou", sig: "L’équipe pédagogique",
      F: [["Faut-il le bac pour s’inscrire ?", "Non, sauf pour délégué médical. La plupart des formations demandent la 1re ou la 2e année secondaire. Le secourisme est ouvert à tous dès 15 ans."], ["L’attestation est-elle reconnue ?", "C’est une attestation de l’école, présentée aux cliniques, pharmacies et laboratoires privés. Elle ne remplace pas le diplôme d’État d’infirmier."], ["Où se passe le stage ?", "Dans des structures de santé de la wilaya : cliniques, officines, cabinets, crèches selon le métier. Nous préparons la convention de stage."], ["Les garçons et les filles sont-ils dans les mêmes groupes ?", "Les cours sont mixtes. Les vestiaires et les TP de toilette se font séparément, dans le respect de chacun."], ["Je viens de loin, y a-t-il des horaires adaptés ?", "Oui, un groupe du matin et un groupe de l’après-midi. Le secourisme se fait le week-end."], ["Que faut-il pour le dossier ?", "4 photos, une copie de la CNI, l’extrait de naissance 12S, le dernier bulletin ou diplôme et un certificat médical d’aptitude."]],
      iH: "Réservez votre place.", iP: "Les groupes sont de 18 stagiaires. Laissez votre numéro, l’accueil vous rappelle pour fixer l’entretien et le dépôt du dossier.",
      plH: "Nous trouver", plA: "Nouvelle ville, Tizi Ouzou (adresse de démonstration). À 5 minutes de la gare multimodale.", plD1: "Sam → jeu", plD2: "Ven", plC: "fermé",
      l1: "Prénom et nom", l2: "Téléphone", l3: "Formation", l4: "Niveau", l5: "Commune", l6: "Groupe préféré", other: "Autre commune", grp: ["Matin", "Après-midi", "Week-end"], send: "Réserver ma place",
      err: "Indiquez votre nom et un numéro valide (05, 06 ou 07).", demo: "Démo AFEX Digital : aucune réservation n’a été envoyée, ce formulaire n’est pas encore connecté.",
      foA: "École paramédicale privée fictive, Tizi Ouzou.", foF: "Formations", foC: "Contact", foCV: "Téléphone et WhatsApp : numéro de démonstration. Facebook : Asafar Tizi Ouzou.", foot: "© 2026 Asafar, école fictive.", by: "Site réalisé par", photos: "Photos : Unsplash,",
      d1: "Métiers", d2: "Orientation", d3: "Pouls", d4: "Tarifs", d5: "S’inscrire", waDemo: "Démo AFEX Digital : le numéro WhatsApp n’est pas encore connecté.", lang: "Langue",
      heroAlt: "Une soignante en hijab tient un stéthoscope", kabAlt: "Un village de Kabylie à flanc de montagne", title: "Asafar, école paramédicale à Tizi Ouzou" },
    ar: { brand: "أسافار", demo0: "موقع تجريبي، مدرسة وهمية.", demo1: "نماذج أخرى", cd: "دورة جانفي: <b>بعد {n} يومًا</b>",
      h1: "العلاج مهنة. <span>تعلّمها في تيزي وزو.</span>", hP: "سبعة تكوينات شبه طبية قصيرة، أعمال تطبيقية على الدمى، وتربص حقيقي في المؤسسات الصحية للولاية.", hB1: "أسجّل الآن", hB2: "أي مهنة تناسبني؟", nameL: "شارة المتربص الخاصة بك:", namePh: "اسمك", bTop: "أسافار · متربص 2026", defName: "أمال",
      r1: "7 مهن", r1p: "من عطلتي نهاية أسبوع إلى 12 شهرًا", r2: "تربص تطبيقي", r2p: "ابتداءً من الثلاثي الثاني", r3: "قاعة تطبيق", r3p: "دمى، أسرّة، أجهزة ضغط", r4: "دفع بالتقسيط", r4p: "شهري أو فصلي",
      mH: "سبع مآزر، سبع مهن.", mP: "المس مهنة لفتحها: المدة، المستوى المطلوب، ما ستتعلّمه وأين ستعمل بعدها.", lvl: "المستوى:", from: "ابتداءً من {a} سنة", jobs: "مجالات العمل:", pick: "تهمّني هذه المهنة", picked: "أضيفت إلى شارتك",
      honest: "تكويناتنا تمنح شهادة من المدرسة. لا تعوّض شهادة الدولة للممرض التي تُحضَّر في المعاهد العمومية.",
      oH: "أي مهنة تشبهك؟", oP: "خمسة أسئلة، دقيقة واحدة. ثم تحقّق من المهن المفتوحة حسب سنّك ومستواك.",
      Q: [["ما الذي يجذبك أكثر؟", ["مساعدة المرضى والمسنين", "الرضّع والأطفال", "الأدوية والنصح"]], ["أين ترى نفسك تعمل؟", ["في المستشفى أو العيادة", "في الصيدلية أو مع الأطباء", "عند المرضى في بيوتهم"]], ["العناية بالجسم والنظافة والدم؟", ["لا مشكلة", "لا أفضّل، أحب المكتب", "نعم، خاصة مع الصغار"]], ["نقطة قوتك؟", ["الصبر واللطف", "التنظيم والحاسوب", "الكلام والإقناع"]], ["كم من الوقت للتكوين؟", ["أقل وقت ممكن", "بضعة أشهر", "سنة كاملة"]]],
      qOf: "السؤال {i} من 5", back: "رجوع", res: "المهنة الأقرب إليك", match: "تطابق {p} %", alt: "الخيار الثاني: {m}", see: "شاهد المهنة", again: "أعد الاختبار", toForm: "احجز مكانًا",
      cH: "هل يمكنني التسجيل؟", cAge: "سنّك", cNiv: "مستواك الدراسي", ok: "مفتوح", noNiv: "المستوى غير كافٍ", noAge: "السن غير مقبول", ageU: "{n} سنة",
      pH: "أول حركة: قياس النبض.", pP: "القلب ينبض بإيقاع مخفي. اضغط عند كل نبضة لمدة 15 ثانية، كما في التطبيق: نضرب في 4 ونقارن.", n1: "بالغ في الراحة", n2: "طفل", n3: "حديث الولادة", sec: "ثانية", pStart: "ابدأ", pAgain: "أعد", pTap: "نبضة",
      pGo: "عُدّ… اضغط عند كل نبضة.", pR: "عددت <b>{t} نبضة</b>، أي <b>{m} في الدقيقة</b>. الإيقاع الحقيقي كان <b>{b}</b>.", pGood: " ممتاز، هذه حركة مساعدة تمريض مستقبلية.", pMid: " ليس سيئًا! في التطبيق نعيد حتى فارق 5.", pBad: " ركّز على الإيقاع وأعد المحاولة.",
      aH: "سنتك عندنا.", aP: "مثال لتكوين مساعد التمريض، من سبتمبر إلى جوان.",
      S: [["سبتمبر", "الاستقبال والأساسيات", "زيارة المدرسة، المآزر، قواعد النظافة وأول الحركات."], ["أكتوبر ← ديسمبر", "الدروس", "التشريح، النظافة الاستشفائية، العلاج الأساسي، الأخلاقيات والتواصل مع المريض."], ["جانفي ← فيفري", "قاعة التطبيق", "النظافة، السرير، المؤشرات الحيوية والتدليك القلبي على الدمى، بأفواج من 9."], ["مارس ← ماي", "التربص", "عشرة أسابيع في مؤسسة صحية بالولاية، مع مؤطّر ودفتر تربص."], ["جوان", "الامتحان والشهادة", "اختبار كتابي واختبار تطبيقي، ثم تسليم الشهادات أمام العائلات."]],
      tH: "كم يكلّف فعلًا.", tP: "اختر التكوين وطريقة الدفع. المئزر والعُدّة والتأمين مشمولة.", tM: "التكوين", tPay: "الدفع", tKit: "مشمول في السعر",
      pays: [["نقدًا", "−5 %"], ["كل فصل", "بلا مصاريف"], ["كل شهر", "بلا مصاريف"]], kit: ["مئزران مطرّزان باسم أسافار", "عُدّة تطبيق شخصية", "تأمين المتربص", "دروس بالفرنسية والعربية", "شهادة نهاية التكوين"],
      bTot: "مجموع التكوين", bIns: "حقوق التسجيل", bDisc: "تخفيض الدفع نقدًا", bDue: "رزنامة الدفع", bNow: "عند التسجيل", bOnce: "دفعة واحدة", months: ["سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", "جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان"], bCta: "احجز بهذا السعر",
      fH: "أسئلتكم وأجوبتنا.", fS: "وصفة الاستقبال، اقرأها قبل المجيء.", stamp: "أسافار · تيزي وزو", sig: "الفريق البيداغوجي",
      F: [["هل البكالوريا ضرورية؟", "لا، إلا للمندوب الطبي. معظم التكوينات تطلب الأولى أو الثانية ثانوي. الإسعافات الأولية مفتوحة للجميع من 15 سنة."], ["هل الشهادة معترف بها؟", "هي شهادة من المدرسة تُقدَّم للعيادات والصيدليات والمخابر الخاصة. لا تعوّض شهادة الدولة للممرض."], ["أين يجري التربص؟", "في مؤسسات صحية بالولاية: عيادات، صيدليات، عيادات طبية، روضات حسب المهنة. نحضّر اتفاقية التربص."], ["هل الذكور والإناث في نفس الأفواج؟", "الدروس مختلطة. غرف تبديل الملابس وتطبيقات النظافة تتم بشكل منفصل احترامًا للجميع."], ["أسكن بعيدًا، هل هناك توقيت مناسب؟", "نعم، فوج صباحي وفوج مسائي. الإسعافات الأولية في نهاية الأسبوع."], ["ما هي وثائق الملف؟", "4 صور، نسخة من بطاقة التعريف، شهادة الميلاد 12S، آخر كشف نقاط أو شهادة، وشهادة طبية."]],
      iH: "احجز مكانك.", iP: "الأفواج من 18 متربصًا. اترك رقمك ويتصل بك الاستقبال لتحديد المقابلة وإيداع الملف.",
      plH: "أين نحن", plA: "المدينة الجديدة، تيزي وزو (عنوان للعرض). على بعد 5 دقائق من المحطة المتعددة الوسائط.", plD1: "السبت ← الخميس", plD2: "الجمعة", plC: "مغلق",
      l1: "الاسم واللقب", l2: "الهاتف", l3: "التكوين", l4: "المستوى", l5: "البلدية", l6: "الفوج المفضّل", other: "بلدية أخرى", grp: ["صباحًا", "مساءً", "نهاية الأسبوع"], send: "احجز مكاني",
      err: "أدخل اسمك ورقمًا صحيحًا (05 أو 06 أو 07).", demo: "عرض AFEX Digital: لم يُرسل أي حجز، هذا النموذج غير متصل بعد.",
      foA: "مدرسة شبه طبية خاصة وهمية، تيزي وزو.", foF: "التكوينات", foC: "الاتصال", foCV: "الهاتف وواتساب: رقم تجريبي. فيسبوك: أسافار تيزي وزو.", foot: "© 2026 أسافار، مدرسة وهمية.", by: "موقع من إنجاز", photos: "الصور: Unsplash،",
      d1: "المهن", d2: "التوجيه", d3: "النبض", d4: "الأسعار", d5: "التسجيل", waDemo: "عرض AFEX Digital: رقم واتساب غير متصل بعد.", lang: "اللغة",
      heroAlt: "ممرضة محجّبة تمسك سمّاعة طبية", kabAlt: "قرية قبائلية على سفح الجبل", title: "أسافار، مدرسة شبه طبية في تيزي وزو" },
    en: { brand: "Asafar", demo0: "Demo, fictional school.", demo1: "Other templates", cd: "January intake: <b>{n} days</b>",
      h1: "Caring is a profession. <span>Learn it in Tizi Ouzou.</span>", hP: "Seven short healthcare courses, hands-on practice on mannequins and a real placement in health facilities across the province.", hB1: "Enrol now", hB2: "Which job suits me?", nameL: "Your trainee badge:", namePh: "Your first name", bTop: "Asafar · trainee 2026", defName: "Amel",
      r1: "7 careers", r1p: "from 2 weekends to 12 months", r2: "Work placement", r2p: "from the 2nd term", r3: "Practice room", r3p: "mannequins, beds, BP monitors", r4: "Pay in instalments", r4p: "monthly or per term",
      mH: "Seven uniforms, seven careers.", mP: "Tap a career to open it: length, entry level, what you learn and where you will work next.", lvl: "Level:", from: "from age {a}", jobs: "Where you work:", pick: "I’m interested", picked: "Added to your badge",
      honest: "Our courses lead to a school certificate. They do not replace the state nursing diploma, which is taught in public institutes.",
      oH: "Which career is you?", oP: "Five questions, one minute. Then check which careers are open to your age and level.",
      Q: [["What draws you most?", ["Helping the sick and the elderly", "Babies and children", "Medicines and giving advice"]], ["Where do you see yourself working?", ["In a hospital or clinic", "In a pharmacy or with doctors", "In patients’ homes"]], ["Body care, washing, blood?", ["No problem", "Not really, I prefer a desk", "Yes, especially with little ones"]], ["Your strength?", ["Patience and gentleness", "Organisation and computers", "Talking and persuading"]], ["How long can you train?", ["As short as possible", "A few months", "A full year"]]],
      qOf: "Question {i} of 5", back: "Back", res: "Your closest career", match: "{p}% match", alt: "Second choice: {m}", see: "See this career", again: "Start again", toForm: "Book a place",
      cH: "Can I enrol?", cAge: "Your age", cNiv: "Your school level", ok: "Open", noNiv: "Level too low", noAge: "Age not accepted", ageU: "{n} years",
      pH: "First skill: taking a pulse.", pP: "The heart beats at a hidden rate. Tap on every beat for 15 seconds, like in class: multiply by 4 and compare.", n1: "adult at rest", n2: "child", n3: "newborn", sec: "seconds", pStart: "Start", pAgain: "Try again", pTap: "Beat",
      pGo: "Count… tap on every beat.", pR: "You counted <b>{t} beats</b>, that is <b>{m} per minute</b>. The real rate was <b>{b}</b>.", pGood: " Very good, that’s a future care assistant’s skill.", pMid: " Not bad! In class we repeat until we’re within 5.", pBad: " Focus on the rhythm and try again.",
      aH: "Your year with us.", aP: "Example for the care assistant course, September to June.",
      S: [["September", "Welcome and basics", "School tour, uniforms, hygiene rules and first skills."], ["October → December", "Lessons", "Anatomy, hospital hygiene, basic care, ethics and talking with patients."], ["January → February", "The practice room", "Washing, bed-making, vital signs and CPR on mannequins, in groups of 9."], ["March → May", "Placement", "Ten weeks in a health facility in the province, with a mentor and a logbook."], ["June", "Exam and certificate", "Written and practical tests, then certificates handed out with families."]],
      tH: "What it really costs.", tP: "Pick the course and how you pay. Uniform, kit and insurance are included.", tM: "Course", tPay: "Payment", tKit: "Included in the price",
      pays: [["Upfront", "−5%"], ["Per term", "no fees"], ["Monthly", "no fees"]], kit: ["2 embroidered Asafar uniforms", "Personal practice kit", "Trainee insurance", "Course notes in French and Arabic", "End-of-course certificate"],
      bTot: "Course total", bIns: "Registration fee", bDisc: "Upfront discount", bDue: "Payment schedule", bNow: "At sign-up", bOnce: "Single payment", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"], bCta: "Book at this price",
      fH: "Your questions, our answers.", fS: "A prescription from reception, to read before you visit.", stamp: "Asafar · Tizi Ouzou", sig: "The teaching team",
      F: [["Do I need the baccalaureate?", "No, except for medical representative. Most courses ask for year 1 or 2 of secondary school. First aid is open to everyone from 15."], ["Is the certificate recognised?", "It is a school certificate shown to private clinics, pharmacies and labs. It does not replace the state nursing diploma."], ["Where is the placement?", "In health facilities in the province: clinics, pharmacies, practices or nurseries depending on the career. We prepare the placement agreement."], ["Are boys and girls in the same groups?", "Classes are mixed. Changing rooms and personal-care practice are separate, with respect for everyone."], ["I live far away, are there suitable hours?", "Yes, a morning group and an afternoon group. First aid runs at weekends."], ["What goes in the file?", "4 photos, a copy of your ID card, birth certificate 12S, your latest report or diploma and a medical fitness certificate."]],
      iH: "Book your place.", iP: "Groups have 18 trainees. Leave your number and reception will call you to set the interview and file drop-off.",
      plH: "Find us", plA: "New town, Tizi Ouzou (demo address). 5 minutes from the transport hub.", plD1: "Sat → Thu", plD2: "Fri", plC: "closed",
      l1: "Full name", l2: "Phone", l3: "Course", l4: "Level", l5: "Town", l6: "Preferred group", other: "Other town", grp: ["Morning", "Afternoon", "Weekend"], send: "Book my place",
      err: "Enter your name and a valid number (05, 06 or 07).", demo: "AFEX Digital demo: no booking was sent, this form is not connected yet.",
      foA: "A fictional private healthcare school, Tizi Ouzou.", foF: "Courses", foC: "Contact", foCV: "Phone and WhatsApp: demo number. Facebook: Asafar Tizi Ouzou.", foot: "© 2026 Asafar, a fictional school.", by: "Website by", photos: "Photos: Unsplash,",
      d1: "Careers", d2: "Guidance", d3: "Pulse", d4: "Fees", d5: "Enrol", waDemo: "AFEX Digital demo: the WhatsApp number is not connected yet.", lang: "Language",
      heroAlt: "A carer in a hijab holding a stethoscope", kabAlt: "A Kabyle village on a mountainside", title: "Asafar, healthcare school in Tizi Ouzou" }
  };
  var SCORE = [[[0, 5], [1], [2, 3]], [[0, 1, 4], [2, 3, 4], [5]], [[0, 5, 6], [2, 3, 4], [1]], [[1, 5, 0], [4], [3, 2]], [[6, 5], [2, 3, 4], [0, 1]]];
  var SIMG = ["promo", "regard2", "mains", "stage", "sourire"];
  var INS = 5000;

  var lang = "fr", open = 0, job = 0, qi = 0, ans = [], pay = 2, tm = 0, uname = "", ready = false, dyn = [];
  try { var sv = localStorage.getItem("asafar-lang"); if (I[sv]) lang = sv; } catch (e) {}
  function openWa() { var m = { fr: "Bonjour AFEX Digital, je viens du site de démonstration « " + document.title + " ». Je veux un site comme celui-ci.", ar: "مرحبًا AFEX Digital، أتيت من الموقع التجريبي « " + document.title + " ». أريد موقعًا مثله.", en: "Hello AFEX Digital, I found the demo site “" + document.title + "”. I would like a website like this one." }; window.open("https://wa.me/213550284873?text=" + encodeURIComponent(m[lang] || m.fr), "_blank", "noopener"); }
  function toast(t) { var el = $("#toast"); el.textContent = t; el.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(function () { el.classList.remove("on"); }, 4200); }
  function go(sel) { var el = $(sel); if (!el) return; if (lenis) lenis.scrollTo(el, { offset: -10 }); else el.scrollIntoView(); }

  /* badge */
  function renderBadge(swing) {
    var t = I[lang], n = uname || t.defName;
    $("#bName").textContent = n; $("#bAv").textContent = n.charAt(0).toUpperCase(); $("#bJob").textContent = L(M[job].t);
    if (swing && !STATIC) gsap.fromTo("#badge", { rotation: doc.dir === "rtl" ? -9 : 9 }, { rotation: 0, duration: 1.6, ease: "elastic.out(1.1,0.25)" });
  }
  function setJob(i) { job = i; tm = i; renderBadge(true); renderTarif(); var s = $("#f [name=job]"); if (s) s.value = i; var ts = $("#tm"); if (ts) ts.value = i; }

  /* métiers */
  function renderCaps() {
    var t = I[lang];
    $("#caps").innerHTML = M.map(function (m, i) {
      return '<div class="cap" role="button" tabindex="0" data-cap="' + i + '" aria-expanded="' + (i === open) + '">' + img(m.img, "(min-width:1000px) 60vw, 92vw") + '<span class="num">' + (i + 1) + '</span><span class="vt">' + L(m.t) + '</span><div class="in"><h3>' + L(m.t) + '</h3><div class="facts"><span>' + L(m.dur) + "</span><span>" + t.lvl + " " + L(NIV[m.niv]) + "</span><span>" + t.from.replace("{a}", m.a0) + "</span><span>" + da(m.p) + "</span></div><p>" + L(m.d) + '</p><p style="margin-top:8px"><b>' + t.jobs + "</b> " + L(m.j) + '</p><button type="button" class="btn red go" data-job="' + i + '">' + (job === i ? t.picked : t.pick) + "</button></div></div>";
    }).join("");
  }
  function openCap(i) { open = i; $$("#caps .cap").forEach(function (c, k) { c.setAttribute("aria-expanded", k === i); }); setTimeout(function () { if (ready) ScrollTrigger.refresh(); }, 750); }

  /* quiz */
  function renderQuiz() {
    var t = I[lang], q = $("#quiz");
    var prog = '<div class="qprog" aria-hidden="true">' + [0, 1, 2, 3, 4].map(function (k) { return '<i class="' + (k < qi || qi >= 5 ? "on" : "") + '"></i>'; }).join("") + "</div>";
    if (qi < 5) {
      var Q = t.Q[qi];
      q.innerHTML = prog + '<small class="muted" style="color:var(--ink2)">' + t.qOf.replace("{i}", qi + 1) + "</small><h3>" + Q[0] + '</h3><div class="opts">' + Q[1].map(function (o, k) { return '<button type="button" data-a="' + k + '"><i>' + "ABC"[k] + "</i>" + o + "</button>"; }).join("") + "</div>" + (qi ? '<button type="button" class="qback" id="qback">← ' + t.back + "</button>" : "");
    } else {
      var sc = M.map(function () { return 0; }); ans.forEach(function (a, k) { SCORE[k][a].forEach(function (m) { sc[m]++; }); });
      var order = M.map(function (_, i) { return i; }).sort(function (a, b) { return sc[b] - sc[a] || M[b].mo - M[a].mo; }), best = order[0], pct = Math.round(Math.min(98, 40 + sc[best] * 13));
      q.innerHTML = prog + '<div class="res"><div class="ph">' + img(M[best].img, "200px") + "</div><div><small>" + t.res + "</small><h3>" + L(M[best].t) + "</h3><p>" + t.match.replace("{p}", pct) + " · " + L(M[best].dur) + '</p><p class="alt">' + t.alt.replace("{m}", L(M[order[1]].t)) + '</p><div class="acts"><button type="button" class="btn red" data-see="' + best + '">' + t.see + '</button><button type="button" class="btn line" id="qagain">' + t.again + "</button></div></div></div>";
      if (job !== best) setJob(best);
    }
  }
  /* conditions */
  function renderNiv() { var v = $("#niv").value; $("#niv").innerHTML = NIV.map(function (n, i) { return '<option value="' + i + '">' + L(n) + "</option>"; }).join(""); $("#niv").value = v || 2; }
  function renderElig() {
    var t = I[lang], age = +$("#age").value, niv = +$("#niv").value;
    $("#ageO").textContent = t.ageU.replace("{n}", age);
    $("#elig").innerHTML = M.map(function (m) { var why = niv < m.niv ? t.noNiv : (age < m.a0 || age > m.a1) ? t.noAge : ""; return '<li class="' + (why ? "no" : "") + '"><span>' + L(m.t) + "</span><b>" + (why ? "✕ " + why : "✓ " + t.ok) + "</b></li>"; }).join("");
  }
  /* année */
  function renderTrack() { var t = I[lang]; $("#track").innerHTML = t.S.map(function (s, i) { return '<article class="step' + (i === 4 ? " end" : "") + '"><div class="ph">' + img(SIMG[i], "400px") + '</div><div class="bd"><small>' + s[0] + "</small><h3>" + s[1] + "</h3><p>" + s[2] + "</p></div></article>"; }).join(""); }
  /* tarifs */
  function renderTarif() {
    var t = I[lang], m = M[tm], short = m.mo < 3;
    if (short && pay) pay = 0;
    $("#tm").innerHTML = M.map(function (x, i) { return '<option value="' + i + '"' + (i === tm ? " selected" : "") + ">" + L(x.t) + " · " + L(x.dur) + "</option>"; }).join("");
    $("#pay").innerHTML = t.pays.map(function (p, i) { return '<button type="button" data-pay="' + i + '" aria-pressed="' + (i === pay) + '"' + (short && i ? " disabled" : "") + "><b>" + p[0] + "</b><small>" + p[1] + "</small></button>"; }).join("");
    var disc = pay === 0 ? Math.round(m.p * .05 / 100) * 100 : 0, tot = m.p - disc, n = pay === 0 ? 1 : pay === 1 ? Math.max(1, Math.ceil(m.mo / 3)) : m.mo, each = Math.ceil(tot / n / 100) * 100;
    var sch = []; for (var k = 0; k < n; k++) { var mi = pay === 1 ? k * 3 : k; sch.push('<div><small>' + (pay === 0 ? t.bOnce : t.months[mi % 10]) + "</small><b>" + da(k === n - 1 ? tot - each * (n - 1) : each) + "</b></div>"); }
    $("#bill").innerHTML = "<small>" + t.bTot + '</small><div class="big">' + da(tot + INS) + '</div><div class="ln"><span>' + L(m.t) + "</span><b>" + da(m.p) + "</b></div>" + (disc ? '<div class="ln"><span>' + t.bDisc + "</span><b>− " + da(disc) + "</b></div>" : "") + '<div class="ln"><span>' + t.bIns + " (" + t.bNow.toLowerCase() + ")</span><b>" + da(INS) + '</b></div><b style="display:block;margin-top:14px">' + t.bDue + '</b><div class="sch">' + sch.join("") + '</div><a class="btn red" href="#inscription" data-book="' + tm + '">' + t.bCta + "</a>";
    $("#kit").innerHTML = t.kit.map(function (x) { return '<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg>' + x + "</li>"; }).join("");
  }
  /* faq */
  function renderFaq() { var t = I[lang]; $("#faqL").innerHTML = t.F.map(function (f, i) { return '<li><button type="button" aria-expanded="false" aria-controls="fa' + i + '">' + f[0] + '</button><div class="a" id="fa' + i + '" hidden>' + f[1] + "</div></li>"; }).join(""); }
  /* form */
  function renderForm() {
    var t = I[lang], f = $("#f"), keep = f.elements.length ? { name: f.name.value, tel: f.tel.value, com: f.com.value, niv: f.niv.value } : null;
    f.innerHTML = '<div class="r2"><label>' + t.l1 + '<input name="name" autocomplete="name"></label><label>' + t.l2 + '<input name="tel" type="tel" inputmode="tel" placeholder="05 / 06 / 07 …" autocomplete="tel"></label></div><div class="r2"><label>' + t.l3 + '<select name="job">' + M.map(function (m, i) { return '<option value="' + i + '"' + (i === job ? " selected" : "") + ">" + L(m.t) + "</option>"; }).join("") + "</select></label><label>" + t.l4 + '<select name="niv">' + NIV.map(function (n, i) { return '<option value="' + i + '"' + (i === 2 ? " selected" : "") + ">" + L(n) + "</option>"; }).join("") + '</select></label></div><label>' + t.l5 + '<select name="com">' + COMMUNES.map(function (c) { return "<option>" + c + "</option>"; }).join("") + "<option>" + t.other + '</option></select></label><fieldset style="border:0;display:grid;gap:8px"><legend style="font-weight:600;font-size:.94rem;margin-bottom:6px">' + t.l6 + '</legend><div class="chk">' + t.grp.map(function (g, i) { return '<label><input type="radio" name="grp" value="' + i + '"' + (i ? "" : " checked") + ">" + g + "</label>"; }).join("") + '</div></fieldset><button class="btn red" type="submit">' + t.send + '</button><p id="msg" role="status"></p>';
    if (keep) { f.name.value = keep.name; f.tel.value = keep.tel; f.niv.value = keep.niv; }
  }
  function render() {
    var t = I[lang];
    $("#h1").innerHTML = t.h1; $("#nameIn").placeholder = t.namePh;
    var days = Math.max(0, Math.ceil((new Date(2027, 0, 10) - new Date()) / 864e5)); $("#cd").innerHTML = t.cd.replace("{n}", days);
    renderBadge(false); renderCaps(); renderQuiz(); renderNiv(); renderElig(); renderTrack(); renderTarif(); renderFaq(); renderForm();
    $("#foList").textContent = M.map(function (m) { return L(m.t); }).join(", ");
    var names = []; Object.keys(P).forEach(function (k) { if (names.indexOf(P[k][1]) < 0) names.push(P[k][1]); });
    $("#credits").textContent = t.photos + " " + names.join(", ") + ".";
    if (!pulse.on) { $("#pStart").textContent = pulse.done ? t.pAgain : t.pStart; $("#pRes").innerHTML = pulse.done ? pulseMsg() : ""; }
  }
  function setLang(l) {
    lang = l; var t = I[l];
    doc.lang = l; doc.dir = l === "ar" ? "rtl" : "ltr"; document.title = t.title;
    $$("[data-i]").forEach(function (e) { if (typeof t[e.dataset.i] === "string") e.textContent = t[e.dataset.i]; });
    $$("[data-alt]").forEach(function (e) { e.alt = t[e.dataset.alt]; });
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.l === l); });
    $(".lang").setAttribute("aria-label", t.lang);
    try { localStorage.setItem("asafar-lang", l); } catch (e) {}
    render();
    if (ready) { bindDynamic(); ScrollTrigger.refresh(); }
  }

  /* pouls */
  var pulse = { on: false, done: false, bpm: 0, taps: 0, beats: 0, t0: 0 }, pts = [], beatT = null, tickT = null, secT = null;
  for (var z = 0; z < 120; z++) pts.push(50);
  function drawTrace() { $("#trace").setAttribute("d", "M" + pts.map(function (y, i) { return (i * 5) + " " + y; }).join(" L")); }
  function pulseMsg() { var t = I[lang], m = pulse.taps * 4, d = Math.abs(m - pulse.bpm); return t.pR.replace("{t}", pulse.taps).replace("{m}", m).replace("{b}", pulse.bpm) + (d <= 8 ? t.pGood : d <= 20 ? t.pMid : t.pBad); }
  function beat() { pulse.beats++; var h = $("#heart"); h.classList.remove("beat"); void h.offsetWidth; h.classList.add("beat"); pts.splice(pts.length - 4, 4, 38, 8, 84, 46); }
  function stopPulse() { clearInterval(beatT); clearInterval(tickT); clearInterval(secT); pulse.on = false; pulse.done = true; $("#pTap").disabled = true; $("#pStart").disabled = false; $("#pStart").textContent = I[lang].pAgain; $("#pRes").innerHTML = pulseMsg(); }
  function startPulse() {
    pulse = { on: true, done: false, bpm: 58 + Math.floor(Math.random() * 50), taps: 0, beats: 0 };
    var left = 15; $("#pTime").textContent = left; $("#pTap").disabled = false; $("#pStart").disabled = true; $("#pRes").textContent = I[lang].pGo; $("#pTap").focus();
    beatT = setInterval(beat, 60000 / pulse.bpm);
    tickT = setInterval(function () { pts.shift(); pts.push(50); drawTrace(); }, 50);
    secT = setInterval(function () { left--; $("#pTime").textContent = left; if (left <= 0) stopPulse(); }, 1000);
  }
  drawTrace();

  /* events */
  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.l !== lang) setLang(b.dataset.l); }); });
  $("#nameIn").addEventListener("input", function () { uname = this.value.trim(); renderBadge(false); });
  $("#nameIn").addEventListener("change", function () { renderBadge(true); });
  $("#caps").addEventListener("click", function (e) { var g = e.target.closest("[data-job]"); if (g) { e.stopPropagation(); setJob(+g.dataset.job); renderCaps(); openCap(open); toast(I[lang].picked + " : " + L(M[job].t)); return; } var c = e.target.closest(".cap"); if (c) openCap(+c.dataset.cap); });
  $("#caps").addEventListener("keydown", function (e) { var c = e.target.closest(".cap"); if (c && e.target === c && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openCap(+c.dataset.cap); } });
  $("#quiz").addEventListener("click", function (e) {
    var a = e.target.closest("[data-a]"); if (a) { ans[qi] = +a.dataset.a; qi++; renderQuiz(); if (!STATIC) gsap.fromTo("#quiz > *:not(.qprog)", { x: doc.dir === "rtl" ? -30 : 30, opacity: 0 }, { x: 0, opacity: 1, duration: .4, stagger: .04, clearProps: "transform,opacity" }); return; }
    if (e.target.closest("#qback")) { qi--; renderQuiz(); return; }
    if (e.target.closest("#qagain")) { qi = 0; ans = []; renderQuiz(); return; }
    var s = e.target.closest("[data-see]"); if (s) { openCap(+s.dataset.see); renderCaps(); openCap(+s.dataset.see); go("#metiers"); }
  });
  $("#age").addEventListener("input", renderElig);
  $("#niv").addEventListener("change", renderElig);
  $("#pStart").addEventListener("click", startPulse);
  $("#pTap").addEventListener("click", function () { if (!pulse.on) return; pulse.taps++; if (!STATIC) gsap.fromTo("#pTap", { scale: .94 }, { scale: 1, duration: .25, clearProps: "transform" }); });
  $("#tm").addEventListener("change", function () { tm = +this.value; renderTarif(); });
  $("#pay").addEventListener("click", function (e) { var b = e.target.closest("[data-pay]"); if (b && !b.disabled) { pay = +b.dataset.pay; renderTarif(); } });
  $("#bill").addEventListener("click", function (e) { var b = e.target.closest("[data-book]"); if (b) { e.preventDefault(); setJob(+b.dataset.book); go("#inscription"); } });
  $("#faqL").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; var on = b.getAttribute("aria-expanded") !== "true"; b.setAttribute("aria-expanded", on); $("#" + b.getAttribute("aria-controls")).hidden = !on; if (ready) ScrollTrigger.refresh(); });
  $("#f").addEventListener("change", function (e) { if (e.target.name === "job") { job = +e.target.value; renderBadge(true); } });
  $("#f").addEventListener("submit", function (e) { e.preventDefault(); var f = e.target, t = I[lang], m = $("#msg"); if (!f.name.value.trim() || !/^0[5-7]\d{8}$/.test(f.tel.value.replace(/\s/g, ""))) { m.textContent = t.err; m.className = "err"; (f.name.value.trim() ? f.tel : f.name).focus(); return; } m.className = ""; m.textContent = t.demo; });
  $("#wa").addEventListener("click", function () { openWa(); });

  var lenis = null;
  setLang(lang);
  if (STATIC) return;

  gsap.registerPlugin(ScrollTrigger);
  lenis = window.Lenis ? new Lenis({ lerp: 0.1 }) : null;
  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    document.addEventListener("click", function (e) { var a = e.target.closest('a[href^="#"]'); if (!a || e.defaultPrevented) return; var id = a.getAttribute("href"); if (id.length < 2 || !$(id)) return; e.preventDefault(); lenis.scrollTo($(id), { offset: -10 }); });
  }
  /* hero */
  var ecg = $("#ecgP"), len = ecg.getTotalLength();
  gsap.set(ecg, { strokeDasharray: len + " " + len, strokeDashoffset: len });
  gsap.to(ecg, { strokeDashoffset: -len, duration: 4.5, ease: "none", repeat: -1 });
  gsap.from(".hx > *", { y: 34, opacity: 0, duration: .9, stagger: .1, ease: "power3.out" });
  gsap.from(".capsule", { yPercent: 30, opacity: 0, duration: 1.2, ease: "power3.out" });
  gsap.fromTo("#badge", { y: -260, rotation: 14 }, { y: 0, rotation: 0, duration: 2, ease: "elastic.out(1,0.3)", delay: .4 });
  gsap.to(".capsule img", { yPercent: 10, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  gsap.to(".tif", { x: doc.dir === "rtl" ? 200 : -200, ease: "none", scrollTrigger: { trigger: ".ribbon", start: "top bottom", end: "bottom top", scrub: true } });
  ScrollTrigger.batch("[data-up]", { start: "top 88%", once: true, onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, duration: .8, stagger: .08, ease: "power3.out" }); } });
  /* dock */
  ["#metiers", "#orientation", "#pouls", "#tarifs"].forEach(function (id) { ScrollTrigger.create({ trigger: id, start: "top 55%", end: "bottom 55%", onToggle: function (s) { var a = $('.dock a[href="' + id + '"]'); if (a) a.setAttribute("aria-current", s.isActive); } }); });

  function bindDynamic() {
    [].concat.apply([], dyn).forEach(function (x) { if (x.targets || x.getChildren) x.revert(); else if (x.kill) x.kill(); }); dyn = [];
    var mm = gsap.matchMedia(); dyn.push(mm);
    mm.add("(min-width:1001px)", function () {
      var tr = $("#track"), dist = function () { return Math.max(0, tr.scrollWidth - tr.parentNode.clientWidth); };
      $(".trackw").classList.add("pinned");
      gsap.to(tr, { x: function () { return (doc.dir === "rtl" ? 1 : -1) * dist(); }, ease: "none", scrollTrigger: { trigger: "#annee", start: "top top", end: function () { return "+=" + dist(); }, pin: true, scrub: .6, invalidateOnRefresh: true } });
      return function () { $(".trackw").classList.remove("pinned"); };
    });
    dyn.push(gsap.fromTo("#caps .cap", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: .8, stagger: .07, ease: "power3.out", clearProps: "transform,opacity", scrollTrigger: { trigger: "#caps", start: "top 85%" } }));
  }
  bindDynamic();
  ready = true;
  var rz, lw = innerWidth; window.addEventListener("resize", function () { if (innerWidth === lw) return; lw = innerWidth; clearTimeout(rz); rz = setTimeout(function () { ScrollTrigger.refresh(); }, 300); });
})();
