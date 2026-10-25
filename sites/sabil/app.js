/* Sabil : contenu FR / AR / EN, compte à rebours, pôles, calendrier des concours, épreuve blanche, plan de révision, vrai ou faux, tarifs, séance d'essai (GSAP + ScrollTrigger + Lenis, en local) */
(function () {
  var doc = document.documentElement;
  var STATIC = doc.classList.contains("static") || !window.gsap || !window.ScrollTrigger;
  if (STATIC) doc.classList.add("static");
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  function L(o) { return o[lang]; }
  function T(fr, ar, en) { return { fr: fr, ar: ar, en: en }; }
  var P = { batna: [853, "Thomas Marquize"], ville: [1920, "Thomas Marquize"], arc: [914, "Djamil Kabar"], timgad: [853, "Ondrej Bocek"], diplome: [1920, "Mohamed Benziane"], revision: [853, "Muhammad Haikal Sjukri"], lecture: [853, "Fotos"], biblio: [853, "Syaiful Lil M"], mezzanine: [960, "Yazid N"], classe: [853, "Fajar Herlambang STUDIO"], salle: [720, "Ivan Aleksic"], examen: [602, "Bima Rahmanda"], labo: [853, "Haseeb Modi"], poste: [853, "Poddar Group of Institutions"] };
  function img(n, sizes) { var big = n === "diplome" || n === "batna" || n === "examen"; return '<img src="assets/img/' + n + '-640.webp" srcset="assets/img/' + n + '-640.webp 640w, assets/img/' + n + '-1280.webp 1280w' + (big ? ", assets/img/" + n + "-1920.webp 1920w" : "") + '" sizes="' + (sizes || "50vw") + '" width="1280" height="' + P[n][0] + '" alt="" loading="lazy" decoding="async">'; }
  function cur() { return lang === "ar" ? "دج" : "DA"; }
  function da(n) { return "⁦" + Math.round(n).toLocaleString("fr-FR").replace(/ | /g, " ") + "⁩ " + cur(); }
  function pad(n) { return String(n).padStart(2, "0"); }

  var CONC = [
    { k: "fp", t: T("Fonction publique", "الوظيفة العمومية", "Civil service"), mo: [2, 3, 9, 10], d: 40, sub: T(["Culture générale", "Rédaction administrative", "Droit administratif", "QCM et logique"], ["الثقافة العامة", "التحرير الإداري", "القانون الإداري", "أسئلة متعددة ومنطق"], ["General knowledge", "Administrative writing", "Administrative law", "MCQ and logic"]) },
    { k: "en", t: T("Éducation nationale", "التربية الوطنية", "National education"), mo: [5, 6], d: 250, sub: T(["Culture générale", "Pédagogie", "Psychologie de l’enfant", "Spécialité"], ["الثقافة العامة", "علوم التربية", "علم نفس الطفل", "التخصص"], ["General knowledge", "Teaching methods", "Child psychology", "Subject specialism"]) },
    { k: "dc", t: T("Doctorat", "الدكتوراه", "Doctorate"), mo: [9, 10], d: 30, sub: T(["Méthodologie", "Spécialité", "Lecture d’articles", "Entretien"], ["المنهجية", "التخصص", "قراءة المقالات", "المقابلة"], ["Methodology", "Specialism", "Reading papers", "Interview"]) },
    { k: "pm", t: T("Paramédical", "شبه الطبي", "Paramedical"), mo: [7, 8], d: 290, sub: T(["Biologie", "Culture générale", "Français", "QCM"], ["البيولوجيا", "الثقافة العامة", "الفرنسية", "أسئلة متعددة"], ["Biology", "General knowledge", "French", "MCQ"]) },
    { k: "sr", t: T("Sûreté et protection civile", "الأمن والحماية المدنية", "Police and civil defence"), mo: [0, 1, 4], d: 95, sub: T(["Culture générale", "Rédaction", "Logique", "Entretien"], ["الثقافة العامة", "التحرير", "المنطق", "المقابلة"], ["General knowledge", "Writing", "Logic", "Interview"]) }
  ];
  function C(t, d, h, p, tags) { return { t: t, d: d, h: h, p: p, tags: tags }; }
  var POLES = [
    { img: "revision", t: T("Concours", "المسابقات", "Exams"), cap: T("Épreuves blanches chaque vendredi matin", "امتحانات تجريبية كل جمعة صباحًا", "Mock exams every Friday morning"), list: [
      C(T("Fonction publique : administration, APC, wilaya", "الوظيفة العمومية: الإدارة، البلدية، الولاية", "Civil service: administration, town hall, province"), T("Culture générale, rédaction administrative, droit administratif et QCM.", "الثقافة العامة، التحرير الإداري، القانون الإداري والأسئلة المتعددة.", "General knowledge, administrative writing, administrative law and MCQs."), T("3 mois · 8 h par semaine", "3 أشهر · 8 سا أسبوعيًا", "3 months · 8 h a week"), 6000, ["fp"]),
      C(T("Éducation nationale : primaire, moyen, secondaire", "التربية الوطنية: ابتدائي، متوسط، ثانوي", "National education: primary to secondary"), T("Culture générale, sciences de l’éducation, psychologie de l’enfant et spécialité.", "الثقافة العامة، علوم التربية، علم نفس الطفل والتخصص.", "General knowledge, education science, child psychology and your subject."), T("3 mois · 10 h par semaine", "3 أشهر · 10 سا أسبوعيًا", "3 months · 10 h a week"), 7000, ["en"]),
      C(T("Concours de doctorat", "مسابقة الدكتوراه", "Doctoral entrance exam"), T("Méthodologie, épreuves de spécialité, lecture d’articles et entretien.", "المنهجية، اختبارات التخصص، قراءة المقالات والمقابلة.", "Methodology, specialist papers, reading articles and the interview."), T("2 mois · 6 h par semaine", "شهران · 6 سا أسبوعيًا", "2 months · 6 h a week"), 8000, ["dc"]),
      C(T("Concours paramédicaux", "مسابقات شبه الطبي", "Paramedical exams"), T("Biologie, culture générale, français et QCM chronométrés.", "البيولوجيا، الثقافة العامة، الفرنسية وأسئلة موقوتة.", "Biology, general knowledge, French and timed MCQs."), T("2 mois · 8 h par semaine", "شهران · 8 سا أسبوعيًا", "2 months · 8 h a week"), 6000, ["pm"]),
      C(T("Sûreté nationale et protection civile", "الأمن الوطني والحماية المدنية", "Police and civil defence"), T("Culture générale, rédaction, logique et préparation à l’entretien.", "الثقافة العامة، التحرير، المنطق والتحضير للمقابلة.", "General knowledge, writing, logic and interview practice."), T("6 semaines · 6 h par semaine", "6 أسابيع · 6 سا أسبوعيًا", "6 weeks · 6 h a week"), 5000, ["sr"])] },
    { img: "labo", t: T("Informatique", "الإعلام الآلي", "Computing"), cap: T("Un poste par stagiaire, 16 places", "حاسوب لكل متربص، 16 مكانًا", "One computer per trainee, 16 seats"), list: [
      C(T("Bureautique : Word, Excel, PowerPoint", "المكتبية: Word وExcel وPowerPoint", "Office: Word, Excel, PowerPoint"), T("Tout ce qu’on demande dans un bureau, du courrier au tableau de suivi.", "كل ما يُطلب في المكتب، من الرسالة إلى جدول المتابعة.", "Everything an office asks for, from letters to tracking sheets."), T("6 semaines · 4 h par semaine", "6 أسابيع · 4 سا أسبوعيًا", "6 weeks · 4 h a week"), 4500, []),
      C(T("Passeport numérique", "جواز السفر الرقمي", "Digital passport"), T("Une attestation de compétences informatiques à joindre à votre dossier.", "شهادة كفاءات في الإعلام الآلي تضيفها إلى ملفك.", "A computer skills certificate to add to your file."), T("2 mois · 4 h par semaine", "شهران · 4 سا أسبوعيًا", "2 months · 4 h a week"), 5000, []),
      C(T("Initiation au développement web", "مدخل إلى تطوير المواقع", "Intro to web development"), T("HTML, CSS et un premier site en ligne à la fin du module.", "HTML وCSS وأول موقع على الإنترنت في نهاية الوحدة.", "HTML, CSS and your first live website by the end."), T("3 mois · 6 h par semaine", "3 أشهر · 6 سا أسبوعيًا", "3 months · 6 h a week"), 7500, []),
      C(T("Design graphique : Canva et Photoshop", "التصميم الغرافيكي: Canva وPhotoshop", "Graphic design: Canva and Photoshop"), T("Affiches, publications et retouche photo pour les commerces et les associations.", "ملصقات، منشورات وتعديل الصور للمحلات والجمعيات.", "Posters, posts and photo editing for shops and associations."), T("2 mois · 4 h par semaine", "شهران · 4 سا أسبوعيًا", "2 months · 4 h a week"), 6000, [])] },
    { img: "lecture", t: T("Langues", "اللغات", "Languages"), cap: T("Test de niveau gratuit à l’inscription", "اختبار مستوى مجاني عند التسجيل", "Free placement test on sign-up"), list: [
      C(T("Français, du A1 au C1", "الفرنسية، من A1 إلى C1", "French, A1 to C1"), T("Groupes par niveau, oral et écrit, préparation aux épreuves de français des concours.", "أفواج حسب المستوى، شفهي وكتابي، تحضير لاختبارات الفرنسية في المسابقات.", "Groups by level, speaking and writing, prep for the French papers in exams."), T("Par niveau · 6 h par semaine", "حسب المستوى · 6 سا أسبوعيًا", "Per level · 6 h a week"), 4000, []),
      C(T("Anglais, du A1 au C1", "الإنجليزية، من A1 إلى C1", "English, A1 to C1"), T("Conversation, grammaire et anglais pour le doctorat et le travail.", "المحادثة، القواعد والإنجليزية للدكتوراه والعمل.", "Conversation, grammar and English for doctoral studies and work."), T("Par niveau · 6 h par semaine", "حسب المستوى · 6 سا أسبوعيًا", "Per level · 6 h a week"), 4000, []),
      C(T("Tamazight : lire et écrire en tifinagh", "الأمازيغية: القراءة والكتابة بتيفيناغ", "Tamazight: reading and writing in Tifinagh"), T("Pour les Chaouis et tous ceux qui veulent écrire la langue des Aurès.", "للشاوية ولكل من يريد كتابة لغة الأوراس.", "For Chaoui speakers and anyone who wants to write the language of the Aurès."), T("3 mois · 3 h par semaine", "3 أشهر · 3 سا أسبوعيًا", "3 months · 3 h a week"), 3000, []),
      C(T("Rédaction administrative en arabe et en français", "التحرير الإداري بالعربية والفرنسية", "Administrative writing in Arabic and French"), T("Lettres, rapports, procès-verbaux : l’épreuve qui fait la différence à l’écrit.", "الرسائل، التقارير، المحاضر: الاختبار الذي يصنع الفارق في الكتابي.", "Letters, reports, minutes: the paper that makes the difference."), T("6 semaines · 4 h par semaine", "6 أسابيع · 4 سا أسبوعيًا", "6 weeks · 4 h a week"), 4000, [])] }
  ];
  var Q = [
    [T("Le 1er novembre 1954 marque…", "يمثّل الفاتح من نوفمبر 1954…", "1 November 1954 marks…"), [T("le déclenchement de la Révolution", "اندلاع الثورة التحريرية", "the start of the Revolution"), T("l’indépendance", "الاستقلال", "independence"), T("le congrès de la Soummam", "مؤتمر الصومام", "the Soummam congress"), T("les accords d’Évian", "اتفاقيات إيفيان", "the Évian accords")], 0, T("Le 1er novembre 1954 est le déclenchement de la guerre de libération.", "الفاتح من نوفمبر 1954 هو تاريخ اندلاع ثورة التحرير.", "1 November 1954 is when the war of liberation began.")],
    [T("Complétez : 2, 6, 12, 20, 30, …", "أكمل: 2، 6، 12، 20، 30، …", "Complete: 2, 6, 12, 20, 30, …"), [T("40", "40", "40"), T("42", "42", "42"), T("36", "36", "36"), T("44", "44", "44")], 1, T("Les écarts augmentent de 2 : +4, +6, +8, +10, puis +12.", "الفروق تزيد بـ 2: ‎+4، ‎+6، ‎+8، ‎+10، ثم ‎+12.", "The gaps grow by 2: +4, +6, +8, +10, then +12.")],
    [T("Le site romain de Timgad se trouve dans la wilaya de…", "يقع موقع تيمقاد الروماني في ولاية…", "The Roman site of Timgad is in the province of…"), [T("Sétif", "سطيف", "Sétif"), T("Tébessa", "تبسة", "Tébessa"), T("Batna", "باتنة", "Batna"), T("Khenchela", "خنشلة", "Khenchela")], 2, T("Timgad est à une trentaine de kilomètres de Batna.", "تيمقاد على بعد نحو ثلاثين كيلومترًا من باتنة.", "Timgad is about thirty kilometres from Batna.")],
    [T("Un prix passe de 2 000 DA à 2 500 DA. La hausse est de…", "يرتفع سعر من 2000 دج إلى 2500 دج. نسبة الزيادة…", "A price goes from 2,000 DA to 2,500 DA. The rise is…"), [T("20 %", "20 %", "20%"), T("50 %", "50 %", "50%"), T("25 %", "25 %", "25%"), T("15 %", "15 %", "15%")], 2, T("500 sur 2 000, c’est un quart : 25 %.", "500 من 2000 تساوي الربع: 25 %.", "500 out of 2,000 is a quarter: 25%.")],
    [T("Un synonyme de « pérenne » est…", "مرادف كلمة « دائم » هو…", "A synonym of “lasting” is…"), [T("passager", "عابر", "brief"), T("durable", "مستمر", "enduring"), T("rapide", "سريع", "quick"), T("coûteux", "مكلف", "costly")], 1, T("Pérenne veut dire qui dure longtemps.", "الدائم هو ما يستمر طويلًا.", "Lasting means something that goes on for a long time.")],
    [T("Dans une administration, un procès-verbal est…", "في الإدارة، المحضر هو…", "In an administration, minutes are…"), [T("une facture", "فاتورة", "an invoice"), T("une sanction", "عقوبة", "a penalty"), T("un contrat de travail", "عقد عمل", "a work contract"), T("un compte rendu officiel", "تقرير رسمي مكتوب", "an official written record")], 3, T("Le procès-verbal consigne officiellement ce qui a été dit ou constaté.", "المحضر يدوّن رسميًا ما قيل أو ما تمت معاينته.", "Minutes officially record what was said or observed.")],
    [T("Tous les A sont B. Aucun B n’est C. Donc…", "كل A هي B. ولا B هي C. إذن…", "All A are B. No B is C. So…"), [T("aucun A n’est C", "لا A هي C", "no A is C"), T("tous les C sont A", "كل C هي A", "all C are A"), T("certains A sont C", "بعض A هي C", "some A are C"), T("on ne peut rien dire", "لا يمكن الاستنتاج", "nothing can be said")], 0, T("Si A est dans B et que B ne touche jamais C, A ne touche jamais C.", "إذا كانت A داخل B وB لا تلتقي مع C، فـ A لا تلتقي مع C.", "If A sits inside B and B never meets C, A never meets C.")],
    [T("La Constitution algérienne est adoptée par…", "يُصادَق على الدستور الجزائري عن طريق…", "Algeria’s constitution is adopted by…"), [T("décret ministériel", "مرسوم وزاري", "ministerial decree"), T("référendum", "الاستفتاء", "referendum"), T("arrêté du wali", "قرار الوالي", "a governor’s order"), T("vote de l’APC", "تصويت المجلس البلدي", "a town council vote")], 1, T("Les constitutions algériennes ont été adoptées par référendum populaire.", "اعتُمدت الدساتير الجزائرية عن طريق الاستفتاء الشعبي.", "Algeria’s constitutions have been adopted by popular referendum.")]
  ];
  var VF = [
    [T("Il faut du piston pour réussir un concours.", "لا تنجح في المسابقة إلا بالمعريفة.", "You need connections to pass an exam."), 0, T("L’écrit se joue sur votre copie : méthode, culture générale et entraînement chronométré. C’est là qu’on peut faire la différence.", "الكتابي يُحسم على ورقتك: المنهجية والثقافة العامة والتدرّب الموقوت. هنا يصنع الفارق.", "The written paper is decided on your script: method, general knowledge and timed practice. That’s where you can make the difference.")],
    [T("La culture générale, ça ne se révise pas.", "الثقافة العامة لا تُراجَع.", "General knowledge can’t be revised."), 0, T("Les mêmes thèmes reviennent : histoire de l’Algérie, institutions, économie, actualité. Des fiches et des QCM réguliers suffisent à progresser.", "تتكرر نفس المحاور: تاريخ الجزائر، المؤسسات، الاقتصاد، الأحداث. البطاقات والأسئلة المنتظمة كافية للتقدّم.", "The same themes come back: Algerian history, institutions, economy, current affairs. Regular notes and MCQs are enough to improve.")],
    [T("On peut préparer un concours en travaillant.", "يمكن التحضير للمسابقة مع العمل.", "You can prepare while working."), 1, T("Oui : cours du soir de 17 h 30 à 20 h et groupes du samedi, avec les épreuves blanches en ligne.", "نعم: دروس مسائية من 17:30 إلى 20:00 وأفواج السبت، مع امتحانات تجريبية عبر الإنترنت.", "Yes: evening classes 17:30–20:00 and Saturday groups, with mock exams online.")],
    [T("Il faut attendre l’annonce officielle pour commencer.", "يجب انتظار الإعلان الرسمي للبدء.", "Wait for the official notice before starting."), 0, T("Entre l’annonce et l’épreuve, il reste souvent quelques semaines. Ceux qui ont commencé avant arrivent prêts.", "بين الإعلان والاختبار غالبًا بضعة أسابيع فقط. من بدأ قبلها يصل جاهزًا.", "There are often only a few weeks between the notice and the exam. Those who started earlier arrive ready.")],
    [T("Une attestation d’informatique peut aider le dossier.", "شهادة الإعلام الآلي قد تفيد الملف.", "A computer certificate can help your file."), 1, T("Pour beaucoup de postes, c’est un plus. Vérifiez toujours les pièces demandées dans l’arrêté d’ouverture.", "في كثير من المناصب هي إضافة. تحقّق دائمًا من الوثائق المطلوبة في قرار الفتح.", "For many posts it’s a plus. Always check the documents listed in the official notice.")],
    [T("Les cours de langues commencent par un test.", "دروس اللغات تبدأ باختبار.", "Language classes start with a test."), 1, T("Un test de niveau gratuit de 30 minutes, puis un groupe à votre niveau.", "اختبار مستوى مجاني لمدة 30 دقيقة، ثم فوج حسب مستواك.", "A free 30-minute placement test, then a group at your level.")]
  ];

  var I = {
    fr: { brand: "Sabil", brandS: "Prépa concours · Batna", demo0: "Site de démonstration, école fictive.", demo1: "Autres modèles", n1: "Formations", n2: "Calendrier", n3: "Épreuve blanche", n4: "Tarifs", cta: "Séance d’essai",
      h1: "Le concours se prépare. <span>Pas la veille.</span>", hP: "Fonction publique, Éducation nationale, doctorat : méthode, culture générale et épreuves blanches chaque semaine, à Batna. Plus un pôle informatique et un pôle langues.", hB1: "Passer l’épreuve blanche", hB2: "Réserver une séance d’essai",
      cdL: "Compte à rebours jusqu’au concours", dd: "jours", dh: "heures", dm: "min", ds: "sec", cdN: "Date indicative pour la démo. Les vraies dates sont fixées par l’arrêté d’ouverture du concours.",
      pH: "Trois pôles, une seule école.", pP: "Préparez votre concours, ajoutez l’attestation d’informatique ou le niveau de langue qui fera la différence dans votre dossier.", month: "/ mois", choose: "Choisir",
      kH: "L’année des concours.", kP: "Les périodes où chaque famille de concours ouvre d’habitude. Touchez une étiquette pour lancer son compte à rebours.", months: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], calN: "Périodes habituelles, à titre indicatif.",
      bH: "L’épreuve blanche, maintenant.", bP: "Huit questions de culture générale, de logique et de langue, en quatre minutes. Comme le vendredi matin à l’école, mais en ligne.", tmL: "temps restant",
      rules: ["8 questions, 2,5 points chacune", "Pas de retour en arrière", "La correction s’affiche à la fin", "Seuil indicatif : 10 sur 20"], start: "Commencer l’épreuve", qOf: "Question {i} sur 8", next: "Question suivante", finish: "Voir ma note", sc: "Votre note", sc1: "Très bon niveau. Il reste à tenir le rythme sur une vraie épreuve de 3 heures.", sc2: "Une bonne base. Avec 8 semaines de méthode, la moyenne est à portée.", sc3: "C’est un début. Le groupe du samedi est fait pour reprendre les bases.", again: "Recommencer", ess: "Réserver une séance d’essai", timeUp: "Temps écoulé !",
      intro: "Prêt ? Le chrono démarre à la première question. Pas de calculatrice, pas de téléphone : comme le jour J.",
      lH: "Votre plan de révision.", lP: "Choisissez le concours, la date et le temps dont vous disposez : on répartit les matières semaine par semaine.", lC: "Concours", lD: "Date de l’épreuve", lHrs: "Heures par semaine", hW: "{n} h", wk: "Semaine {n}", last: "Dernière ligne droite", lastS: ["Épreuve blanche complète", "Fiches de révision", "Repos la veille"], sum: "{w} semaines · {h} heures de travail", print: "Imprimer le plan", tooShort: "Moins de 2 semaines : on se concentre sur les épreuves blanches.",
      vH: "Vrai ou faux ?", vP: "Ce qu’on entend au café sur les concours. Retournez les cartes.", flip: "Touchez pour retourner", tr: "VRAI", fa: "FAUX",
      tH: "Un prix clair, chaque mois.", tP: "Les packs s’adaptent à votre concours. Payez au mois ou au trimestre, la séance d’essai est offerte.", bills: ["Au mois", "Au trimestre −10 %"], per: ["/ mois", "/ trimestre"],
      packs: [["Essentiel", "Une préparation concours", ["Cours et méthode", "Épreuve blanche chaque semaine", "Fiches de culture générale"]], ["Concours +", "Concours et informatique", ["Tout l’Essentiel", "Bureautique ou passeport numérique", "Suivi individuel mensuel"]], ["Complet", "Concours, informatique et langue", ["Tout Concours +", "Un cours de langue au choix", "Simulation d’entretien oral"]]], best: "Le plus choisi", pick: "Choisir ce pack",
      eH: "Venez essayer, c’est offert.", eP: "Une séance de 90 minutes dans le vrai groupe, puis un entretien pour choisir la bonne formule.", f1: "Prénom et nom", f2: "Téléphone", f3: "Pôle", f4: "Concours visé", fNone: "Pas de concours", f5: "Créneau d’essai", send: "Réserver ma séance", err: "Indiquez votre nom et un numéro valide (05, 06 ou 07).", demo: "Démo AFEX Digital : aucune réservation n’a été envoyée, ce formulaire n’est pas encore connecté.",
      wH: "À Batna, près de l’université", wP: "Adresse de démonstration. Samedi → jeudi, 8 h – 20 h. Cours du soir et du samedi pour les salariés.",
      foA: "Sabil, école fictive", foAd: "Préparation aux concours, informatique et langues, Batna.", foP: "Pôles", foPv: "Concours · Informatique · Langues", foH: "Horaires", foHv: "Samedi → jeudi, 8 h – 20 h.", foC: "Contact", foCv: "Téléphone et WhatsApp : numéro de démonstration.",
      foot: "© 2026 Sabil, école fictive.", by: "Site réalisé par", photos: "Photos : Unsplash,", waDemo: "Démo AFEX Digital : le numéro WhatsApp n’est pas encore connecté.", lang: "Langue",
      heroAlt: "Une diplômée en toge le jour de la remise des diplômes", villeAlt: "Batna vue depuis les hauteurs", arcAlt: "L’arc de Trajan à Timgad", title: "Sabil, préparation aux concours à Batna", loc: "fr-FR" },
    ar: { brand: "سبيل", brandS: "تحضير المسابقات · باتنة", demo0: "موقع تجريبي، مدرسة وهمية.", demo1: "نماذج أخرى", n1: "التكوينات", n2: "الرزنامة", n3: "الامتحان التجريبي", n4: "الأسعار", cta: "حصة تجريبية",
      h1: "المسابقة تُحضَّر. <span>لا في الليلة الأخيرة.</span>", hP: "الوظيفة العمومية، التربية الوطنية، الدكتوراه: منهجية وثقافة عامة وامتحانات تجريبية كل أسبوع في باتنة. مع قطب للإعلام الآلي وقطب للغات.", hB1: "اجتز الامتحان التجريبي", hB2: "احجز حصة تجريبية",
      cdL: "العدّ التنازلي حتى المسابقة", dd: "يوم", dh: "ساعة", dm: "دقيقة", ds: "ثانية", cdN: "تاريخ تقريبي للعرض. التواريخ الحقيقية يحددها قرار فتح المسابقة.",
      pH: "ثلاثة أقطاب، مدرسة واحدة.", pP: "حضّر مسابقتك، وأضف شهادة الإعلام الآلي أو مستوى اللغة الذي يصنع الفارق في ملفك.", month: "/ شهريًا", choose: "اختر",
      kH: "سنة المسابقات.", kP: "الفترات التي تُفتح فيها عادة كل عائلة من المسابقات. المس بطاقة لتشغيل عدّها التنازلي.", months: ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], calN: "فترات معتادة، على سبيل الإشارة.",
      bH: "الامتحان التجريبي، الآن.", bP: "ثمانية أسئلة في الثقافة العامة والمنطق واللغة، في أربع دقائق. مثل صباح الجمعة في المدرسة، لكن عبر الإنترنت.", tmL: "الوقت المتبقي",
      rules: ["8 أسئلة، 2,5 نقطة لكل سؤال", "لا رجوع إلى الخلف", "التصحيح يظهر في النهاية", "العتبة التقريبية: 10 من 20"], start: "ابدأ الامتحان", qOf: "السؤال {i} من 8", next: "السؤال التالي", finish: "اعرض علامتي", sc: "علامتك", sc1: "مستوى جيد جدًا. يبقى الحفاظ على الإيقاع في اختبار حقيقي من 3 ساعات.", sc2: "قاعدة جيدة. مع 8 أسابيع من المنهجية، المعدل في المتناول.", sc3: "هذه بداية. فوج السبت مخصص لاستعادة الأساسيات.", again: "أعد", ess: "احجز حصة تجريبية", timeUp: "انتهى الوقت!",
      intro: "مستعد؟ يبدأ العدّاد مع السؤال الأول. لا آلة حاسبة ولا هاتف: كما في يوم الامتحان.",
      lH: "برنامج مراجعتك.", lP: "اختر المسابقة والتاريخ والوقت المتاح: نوزّع المواد أسبوعًا بأسبوع.", lC: "المسابقة", lD: "تاريخ الاختبار", lHrs: "ساعات في الأسبوع", hW: "{n} سا", wk: "الأسبوع {n}", last: "المرحلة الأخيرة", lastS: ["امتحان تجريبي كامل", "بطاقات المراجعة", "راحة قبل يوم الامتحان"], sum: "{w} أسابيع · {h} ساعة عمل", print: "اطبع البرنامج", tooShort: "أقل من أسبوعين: نركّز على الامتحانات التجريبية.",
      vH: "صحيح أم خطأ؟", vP: "ما يُقال في المقهى عن المسابقات. اقلب البطاقات.", flip: "المس للقلب", tr: "صحيح", fa: "خطأ",
      tH: "سعر واضح كل شهر.", tP: "الباقات تتكيّف مع مسابقتك. ادفع شهريًا أو فصليًا، والحصة التجريبية مجانية.", bills: ["شهريًا", "فصليًا −10 %"], per: ["/ شهريًا", "/ فصليًا"],
      packs: [["الأساسي", "تحضير مسابقة واحدة", ["دروس ومنهجية", "امتحان تجريبي كل أسبوع", "بطاقات الثقافة العامة"]], ["مسابقة +", "مسابقة وإعلام آلي", ["كل الأساسي", "المكتبية أو جواز السفر الرقمي", "متابعة فردية شهرية"]], ["الكامل", "مسابقة، إعلام آلي ولغة", ["كل مسابقة +", "درس لغة حسب اختيارك", "محاكاة المقابلة الشفهية"]]], best: "الأكثر اختيارًا", pick: "اختر هذه الباقة",
      eH: "تعال وجرّب، مجانًا.", eP: "حصة من 90 دقيقة في الفوج الحقيقي، ثم مقابلة لاختيار الصيغة المناسبة.", f1: "الاسم واللقب", f2: "الهاتف", f3: "القطب", f4: "المسابقة المستهدفة", fNone: "بدون مسابقة", f5: "موعد التجربة", send: "احجز حصتي", err: "أدخل اسمك ورقمًا صحيحًا (05 أو 06 أو 07).", demo: "عرض AFEX Digital: لم يُرسل أي حجز، هذا النموذج غير متصل بعد.",
      wH: "في باتنة، قرب الجامعة", wP: "عنوان للعرض. من السبت إلى الخميس، 8:00 – 20:00. دروس مسائية ويوم السبت للعمّال.",
      foA: "سبيل، مدرسة وهمية", foAd: "تحضير المسابقات، الإعلام الآلي واللغات، باتنة.", foP: "الأقطاب", foPv: "المسابقات · الإعلام الآلي · اللغات", foH: "التوقيت", foHv: "من السبت إلى الخميس، 8:00 – 20:00.", foC: "الاتصال", foCv: "الهاتف وواتساب: رقم تجريبي.",
      foot: "© 2026 سبيل، مدرسة وهمية.", by: "موقع من إنجاز", photos: "الصور: Unsplash،", waDemo: "عرض AFEX Digital: رقم واتساب غير متصل بعد.", lang: "اللغة",
      heroAlt: "متخرّجة بلباس التخرّج يوم تسليم الشهادات", villeAlt: "باتنة من المرتفعات", arcAlt: "قوس تراجان في تيمقاد", title: "سبيل، تحضير المسابقات في باتنة", loc: "ar-DZ" },
    en: { brand: "Sabil", brandS: "Exam prep · Batna", demo0: "Demo website, fictional school.", demo1: "Other templates", n1: "Courses", n2: "Calendar", n3: "Mock exam", n4: "Fees", cta: "Free trial",
      h1: "Exams are prepared. <span>Not the night before.</span>", hP: "Civil service, national education, doctorate: method, general knowledge and weekly mock exams in Batna. Plus a computing hub and a languages hub.", hB1: "Take the mock exam", hB2: "Book a free trial class",
      cdL: "Countdown to the exam", dd: "days", dh: "hours", dm: "min", ds: "sec", cdN: "Demo date only. Real dates are set by each exam’s official notice.",
      pH: "Three hubs, one school.", pP: "Prepare your exam, then add the computer certificate or language level that makes your file stand out.", month: "/ month", choose: "Choose",
      kH: "The exam year.", kP: "When each family of exams usually opens. Tap a label to start its countdown.", months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], calN: "Usual periods, for guidance only.",
      bH: "The mock exam, right now.", bP: "Eight questions on general knowledge, logic and language, in four minutes. Like Friday morning at school, but online.", tmL: "time left",
      rules: ["8 questions, 2.5 points each", "No going back", "Answers shown at the end", "Guide pass mark: 10 out of 20"], start: "Start the exam", qOf: "Question {i} of 8", next: "Next question", finish: "See my mark", sc: "Your mark", sc1: "Very good level. Now hold the pace over a real 3-hour paper.", sc2: "A good base. With 8 weeks of method, a pass is within reach.", sc3: "It’s a start. The Saturday group is made for rebuilding the basics.", again: "Try again", ess: "Book a free trial class", timeUp: "Time’s up!",
      intro: "Ready? The clock starts at the first question. No calculator, no phone: just like exam day.",
      lH: "Your revision plan.", lP: "Pick the exam, the date and the time you have: we spread the subjects week by week.", lC: "Exam", lD: "Exam date", lHrs: "Hours per week", hW: "{n} h", wk: "Week {n}", last: "Final stretch", lastS: ["Full mock exam", "Revision notes", "Rest the day before"], sum: "{w} weeks · {h} hours of work", print: "Print the plan", tooShort: "Under 2 weeks: we focus on mock exams.",
      vH: "True or false?", vP: "What you hear in cafés about exams. Flip the cards.", flip: "Tap to flip", tr: "TRUE", fa: "FALSE",
      tH: "A clear price, every month.", tP: "Packs fit your exam. Pay monthly or per term, and the trial class is free.", bills: ["Monthly", "Per term −10%"], per: ["/ month", "/ term"],
      packs: [["Essential", "One exam prep", ["Classes and method", "A mock exam every week", "General knowledge notes"]], ["Exam +", "Exam and computing", ["Everything in Essential", "Office skills or digital passport", "Monthly one-to-one review"]], ["Complete", "Exam, computing and a language", ["Everything in Exam +", "One language course", "Mock oral interview"]]], best: "Most chosen", pick: "Choose this pack",
      eH: "Come and try, it’s free.", eP: "A 90-minute class in the real group, then a chat to pick the right plan.", f1: "Full name", f2: "Phone", f3: "Hub", f4: "Target exam", fNone: "No exam", f5: "Trial slot", send: "Book my class", err: "Enter your name and a valid number (05, 06 or 07).", demo: "AFEX Digital demo: no booking was sent, this form is not connected yet.",
      wH: "In Batna, near the university", wP: "Demo address. Saturday → Thursday, 8:00 – 20:00. Evening and Saturday classes for working people.",
      foA: "Sabil, a fictional school", foAd: "Exam prep, computing and languages, Batna.", foP: "Hubs", foPv: "Exams · Computing · Languages", foH: "Hours", foHv: "Saturday → Thursday, 8:00 – 20:00.", foC: "Contact", foCv: "Phone and WhatsApp: demo number.",
      foot: "© 2026 Sabil, a fictional school.", by: "Website by", photos: "Photos: Unsplash,", waDemo: "AFEX Digital demo: the WhatsApp number is not connected yet.", lang: "Language",
      heroAlt: "A graduate in her gown on graduation day", villeAlt: "Batna seen from the hills", arcAlt: "Trajan’s arch in Timgad", title: "Sabil, exam preparation in Batna", loc: "en-GB" }
  };
  var PRICE = [6000, 9500, 12500];

  var lang = "fr", cdK = 0, pole = 0, qi = -1, ansA = [], left = 240, qT = null, picked = null, planK = 0, planDate = null, hrs = 8, bill = 0, slot = 0, ready = false, dyn = [];
  try { var sv = localStorage.getItem("sabil-lang"); if (I[sv]) lang = sv; } catch (e) {}
  var now0 = new Date();
  function target(k) { var d = new Date(now0); d.setDate(d.getDate() + CONC[k].d); d.setHours(8, 0, 0, 0); return d; }
  function fmt(d, o) { try { return new Intl.DateTimeFormat(lang === "ar" ? "ar-DZ-u-nu-latn" : I[lang].loc, o).format(d); } catch (e) { return d.toDateString(); } }
  function iso(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function toast(t) { var el = $("#toast"); el.textContent = t; el.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(function () { el.classList.remove("on"); }, 4200); }
  function go(s) { var el = $(s); if (!el) return; if (lenis) lenis.scrollTo(el, { offset: -90 }); else el.scrollIntoView(); }

  /* countdown */
  function renderCdSel() { $("#cdSel").innerHTML = CONC.map(function (c, i) { return '<option value="' + i + '"' + (i === cdK ? " selected" : "") + ">" + L(c.t) + " · " + fmt(target(i), { day: "numeric", month: "long", year: "numeric" }) + "</option>"; }).join(""); }
  function tick() { var s = Math.max(0, Math.floor((target(cdK) - new Date()) / 1000)); $("#dD").textContent = pad(Math.floor(s / 86400)); $("#dH").textContent = pad(Math.floor(s % 86400 / 3600)); $("#dM").textContent = pad(Math.floor(s % 3600 / 60)); $("#dS").textContent = pad(s % 60); }
  function setCd(k) { cdK = k; $("#cdSel").value = k; tick(); if (!STATIC) gsap.fromTo(".digits b", { y: -14, opacity: 0 }, { y: 0, opacity: 1, duration: .4, stagger: .05, clearProps: "transform,opacity" }); }

  /* poles */
  function renderPoles(anim) {
    var t = I[lang], p = POLES[pole];
    $("#seg").innerHTML = POLES.map(function (x, i) { return '<button type="button" role="tab" data-p="' + i + '" aria-selected="' + (i === pole) + '">' + L(x.t) + "</button>"; }).join("");
    $("#pane").innerHTML = '<figure class="ph">' + img(p.img, "(min-width:1060px) 36vw, 92vw") + "<figcaption><b>" + L(p.t) + "</b>" + L(p.cap) + '</figcaption></figure><div class="courses">' + p.list.map(function (c, i) { return '<article class="course"><h3>' + L(c.t) + "</h3><p>" + L(c.d) + '</p><div class="tags"><span>' + L(c.h) + '</span></div><div class="pr"><b>' + da(c.p) + "</b><small>" + t.month + '</small><br><a class="btn v" href="#essai" data-pick="' + pole + "," + i + '">' + t.choose + "</a></div></article>"; }).join("") + "</div>";
    if (anim && !STATIC) gsap.fromTo("#pane .course, #pane .ph", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: .5, stagger: .06, ease: "power3.out", clearProps: "transform,opacity" });
  }
  /* calendar */
  function renderYear() {
    var t = I[lang], m0 = now0.getMonth();
    $("#year").innerHTML = t.months.map(function (m, i) { return '<div class="mo' + (i === m0 ? " now" : "") + '"><small>' + m + "</small>" + CONC.map(function (c, k) { return c.mo.indexOf(i) > -1 ? '<button type="button" class="chip ' + c.k + '" data-cd="' + k + '">' + L(c.t) + "</button>" : ""; }).join("") + "</div>"; }).join("");
    $("#calnote").innerHTML = CONC.map(function (c) { return '<span><i class="' + c.k + '"></i>' + L(c.t) + "</span>"; }).join("") + "<span>· " + t.calN + "</span>";
  }
  /* mock exam */
  function renderRules() { $("#rules").innerHTML = I[lang].rules.map(function (r) { return "<li>" + r + "</li>"; }).join(""); }
  function renderSheet() {
    var t = I[lang], s = $("#sheet");
    if (qi < 0) { s.innerHTML = '<div class="top"><span>' + t.n3 + '</span><span class="mono">0 / 8</span></div><h3>' + t.bH + "</h3><p style=\"color:var(--ink2);max-width:52ch\">" + t.intro + '</p><div class="nx"><span></span><button type="button" class="btn v" id="qStart">' + t.start + "</button></div>"; return; }
    if (qi >= Q.length) {
      var good = ansA.filter(function (a, k) { return a === Q[k][2]; }).length, note = good * 2.5;
      s.innerHTML = '<div class="score"><div class="big">' + String(note).replace(".", lang === "en" ? "." : ",") + "<small>/20</small></div><div><small style=\"color:var(--ink2)\">" + t.sc + '</small><p style="font-size:1.1rem;margin-top:6px">' + (note >= 15 ? t.sc1 : note >= 10 ? t.sc2 : t.sc3) + '</p></div></div><ol class="corr">' + Q.map(function (q, k) { var ok = ansA[k] === q[2]; return '<li><b style="background:' + (ok ? "var(--limeD)" : "var(--red)") + '">' + (ok ? "✓" : "✕") + "</b><span><strong>" + L(q[1][q[2]]) + "</strong> · " + L(q[3]) + "</span></li>"; }).join("") + '</ol><div class="nx"><button type="button" class="btn o" id="qAgain">' + t.again + '</button><a class="btn v" href="#essai">' + t.ess + "</a></div>";
      return;
    }
    var q = Q[qi], a = ansA[qi];
    s.innerHTML = '<div class="top"><span>' + t.qOf.replace("{i}", qi + 1) + '</span><span class="mono">' + (qi + 1) + ' / 8</span></div><div class="qbar"><i style="width:' + (qi / 8 * 100) + '%"></i></div><h3>' + L(q[0]) + '</h3><div class="ans">' + q[1].map(function (o, k) { var cls = a === undefined ? "" : k === q[2] ? "ok" : k === a ? "ko" : ""; return '<button type="button" data-a="' + k + '" class="' + cls + '"' + (a === undefined ? "" : " disabled") + ">" + L(o) + "</button>"; }).join("") + '</div><div class="nx"><span style="color:var(--ink2);font-size:.92rem">' + (a === undefined ? "" : L(q[3])) + "</span>" + (a === undefined ? "" : '<button type="button" class="btn v" id="qNext">' + (qi === 7 ? t.finish : t.next) + "</button>") + "</div>";
  }
  function startExam() { qi = 0; ansA = []; left = 240; renderSheet(); clearInterval(qT); drawTimer(); qT = setInterval(function () { left--; drawTimer(); if (left <= 0) { clearInterval(qT); toast(I[lang].timeUp); qi = Q.length; renderSheet(); } }, 1000); }
  function drawTimer() { $("#tm").textContent = Math.floor(left / 60) + ":" + pad(left % 60); $("#timer").classList.toggle("low", left <= 30); }
  /* plan */
  function renderPctl() {
    var t = I[lang]; if (!planDate) planDate = iso(target(0));
    $("#pctl").innerHTML = '<label>' + t.lC + '<select id="plK">' + CONC.map(function (c, i) { return '<option value="' + i + '"' + (i === planK ? " selected" : "") + ">" + L(c.t) + "</option>"; }).join("") + "</select></label><label>" + t.lD + '<input type="date" id="plD" value="' + planDate + '" min="' + iso(now0) + '"></label><label>' + t.lHrs + ' <output id="hrO">' + t.hW.replace("{n}", hrs) + '</output><input type="range" id="plH" min="4" max="20" step="1" value="' + hrs + '"></label><button type="button" class="btn o" id="plPrint">' + t.print + "</button>";
  }
  function renderPlan() {
    var t = I[lang], d = new Date(planDate + "T08:00:00"), days = Math.max(0, Math.ceil((d - now0) / 864e5)), w = Math.min(20, Math.max(1, Math.ceil(days / 7))), sub = L(CONC[planK].sub), html = "";
    $("#hrO").textContent = t.hW.replace("{n}", hrs);
    for (var i = 0; i < w; i++) {
      var st = new Date(now0); st.setDate(st.getDate() + i * 7);
      if (i === w - 1) html += '<div class="wk last"><small>' + fmt(st, { day: "numeric", month: "short" }) + "</small><b>" + t.last + "</b>" + t.lastS.map(function (x) { return "<span>" + x + "</span>"; }).join("") + "</div>";
      else { var a = sub[i % sub.length], b = sub[(i + 1) % sub.length], ha = Math.ceil(hrs * .6); html += '<div class="wk"><small>' + t.wk.replace("{n}", i + 1) + " · " + fmt(st, { day: "numeric", month: "short" }) + "</small><b>" + a + "</b><span>" + a + " · " + t.hW.replace("{n}", ha) + "</span><span>" + b + " · " + t.hW.replace("{n}", hrs - ha) + "</span>" + ((i + 1) % 3 === 0 ? "<span>" + t.n3 + "</span>" : "") + "</div>"; }
    }
    $("#weeks").innerHTML = html;
    $("#psum").innerHTML = "<b>" + t.sum.replace("{w}", w).replace("{h}", w * hrs) + "</b><span>" + (w < 2 ? t.tooShort : L(CONC[planK].t) + " · " + fmt(d, { day: "numeric", month: "long", year: "numeric" })) + "</span>";
  }
  /* vrai faux */
  function renderVF() { var t = I[lang]; $("#vf").innerHTML = VF.map(function (v, i) { return '<div class="card"><button type="button" aria-pressed="false" data-vf="' + i + '"><span class="f"><b>« ' + L(v[0]) + ' »</b><small>' + t.flip + '</small></span><span class="b"><span class="tag ' + (v[1] ? "t" : "x") + '">' + (v[1] ? t.tr : t.fa) + "</span><p>" + L(v[2]) + "</p></span></button></div>"; }).join(""); }
  /* tarifs */
  function renderPacks() {
    var t = I[lang];
    $("#billSeg").innerHTML = t.bills.map(function (b, i) { return '<button type="button" data-bill="' + i + '" aria-pressed="' + (i === bill) + '" aria-selected="' + (i === bill) + '">' + b + "</button>"; }).join("");
    $("#packs").innerHTML = t.packs.map(function (p, i) { var pr = bill ? PRICE[i] * 3 * .9 : PRICE[i]; return '<article class="pack' + (i === 1 ? " hi" : "") + '">' + (i === 1 ? '<span class="best">' + t.best + "</span>" : "") + "<h3>" + p[0] + "</h3><span>" + p[1] + '</span><div class="p"><b data-pr="' + i + '">' + da(pr) + "</b> <small>" + t.per[bill] + "</small></div><ul>" + p[2].map(function (x) { return '<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg>' + x + "</li>"; }).join("") + '</ul><a class="btn ' + (i === 1 ? "l" : "v") + '" href="#essai">' + t.pick + "</a></article>"; }).join("");
  }
  /* form */
  function slots() { var out = [], d = new Date(now0); d.setHours(12, 0, 0, 0); while (out.length < 6) { d.setDate(d.getDate() + 1); if (d.getDay() === 5) continue; out.push([new Date(d), out.length % 2 ? "17:30" : "10:00"]); } return out; }
  function renderForm() {
    var t = I[lang], f = $("#f"), keep = f.elements.length ? { name: f.name.value, tel: f.tel.value } : null, sl = slots();
    f.innerHTML = '<div class="r2"><label>' + t.f1 + '<input name="name" autocomplete="name"></label><label>' + t.f2 + '<input name="tel" type="tel" inputmode="tel" placeholder="05 / 06 / 07 …" autocomplete="tel"></label></div><div class="r2"><label>' + t.f3 + '<select name="pole">' + POLES.map(function (p, i) { return '<option value="' + i + '"' + (picked && picked[0] === i ? " selected" : "") + ">" + L(p.t) + "</option>"; }).join("") + "</select></label><label>" + t.f4 + '<select name="conc"><option value="">' + t.fNone + "</option>" + CONC.map(function (c, i) { return '<option value="' + i + '"' + (i === cdK ? " selected" : "") + ">" + L(c.t) + "</option>"; }).join("") + '</select></label></div><div><b style="display:block;font-size:.94rem;margin-bottom:8px">' + t.f5 + '</b><div class="slots" id="slots">' + sl.map(function (s, i) { return '<button type="button" data-slot="' + i + '" aria-pressed="' + (i === slot) + '">' + fmt(s[0], { weekday: "short", day: "numeric", month: "short" }) + '<b dir="ltr">' + s[1] + "</b></button>"; }).join("") + '</div></div><button class="btn v" type="submit">' + t.send + '</button><p id="msg" role="status"></p>';
    if (keep) { f.name.value = keep.name; f.tel.value = keep.tel; }
  }

  function render() {
    var t = I[lang];
    $("#h1").innerHTML = t.h1;
    renderCdSel(); tick(); renderPoles(false); renderYear(); renderRules(); renderSheet(); drawTimer(); renderPctl(); renderPlan(); renderVF(); renderPacks(); renderForm();
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
    try { localStorage.setItem("sabil-lang", l); } catch (e) {}
    render();
    if (ready) { bindDynamic(); ScrollTrigger.refresh(); }
  }

  /* events */
  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.l !== lang) setLang(b.dataset.l); }); });
  $("#cdSel").addEventListener("change", function () { setCd(+this.value); });
  $("#seg").addEventListener("click", function (e) { var b = e.target.closest("[data-p]"); if (b && +b.dataset.p !== pole) { pole = +b.dataset.p; renderPoles(true); if (ready) ScrollTrigger.refresh(); } });
  $("#year").addEventListener("click", function (e) { var b = e.target.closest("[data-cd]"); if (b) { setCd(+b.dataset.cd); go(".hero"); } });
  $("#sheet").addEventListener("click", function (e) {
    if (e.target.closest("#qStart") || e.target.closest("#qAgain")) { startExam(); return; }
    var a = e.target.closest("[data-a]"); if (a && !a.disabled) { ansA[qi] = +a.dataset.a; renderSheet(); return; }
    if (e.target.closest("#qNext")) { qi++; if (qi >= Q.length) clearInterval(qT); renderSheet(); if (!STATIC) gsap.fromTo("#sheet h3, #sheet .ans, #sheet .score", { x: doc.dir === "rtl" ? -24 : 24, opacity: 0 }, { x: 0, opacity: 1, duration: .4, clearProps: "transform,opacity" }); }
  });
  $("#pctl").addEventListener("input", function (e) { if (e.target.id === "plH") hrs = +e.target.value; if (e.target.id === "plD" && e.target.value) planDate = e.target.value; renderPlan(); });
  $("#pctl").addEventListener("change", function (e) { if (e.target.id === "plK") { planK = +e.target.value; planDate = iso(target(planK)); $("#plD").value = planDate; renderPlan(); } });
  $("#pctl").addEventListener("click", function (e) { if (e.target.id === "plPrint") window.print(); });
  $("#vf").addEventListener("click", function (e) { var b = e.target.closest("[data-vf]"); if (b) b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") !== "true"); });
  $("#billSeg").addEventListener("click", function (e) { var b = e.target.closest("[data-bill]"); if (!b) return; bill = +b.dataset.bill; renderPacks(); if (!STATIC) gsap.fromTo("#packs [data-pr]", { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: .35, stagger: .05, clearProps: "transform,opacity" }); });
  document.addEventListener("click", function (e) { var b = e.target.closest("[data-pick]"); if (!b) return; picked = b.dataset.pick.split(",").map(Number); var s = $("#f [name=pole]"); if (s) s.value = picked[0]; });
  $("#f").addEventListener("click", function (e) { var b = e.target.closest("[data-slot]"); if (!b) return; slot = +b.dataset.slot; $$("#slots button").forEach(function (x) { x.setAttribute("aria-pressed", +x.dataset.slot === slot); }); });
  $("#f").addEventListener("submit", function (e) { e.preventDefault(); var f = e.target, t = I[lang], m = $("#msg"); if (!f.name.value.trim() || !/^0[5-7]\d{8}$/.test(f.tel.value.replace(/\s/g, ""))) { m.textContent = t.err; m.className = "err"; (f.name.value.trim() ? f.tel : f.name).focus(); return; } m.className = ""; m.textContent = t.demo; });
  $("#waf").addEventListener("click", function () { toast(I[lang].waDemo); });

  var lenis = null;
  setLang(lang);
  setInterval(tick, 1000);
  if (STATIC) return;

  gsap.registerPlugin(ScrollTrigger);
  lenis = window.Lenis ? new Lenis({ lerp: 0.1 }) : null;
  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    document.addEventListener("click", function (e) { var a = e.target.closest('a[href^="#"]'); if (!a || e.defaultPrevented) return; var id = a.getAttribute("href"); if (id.length < 2 || !$(id)) return; e.preventDefault(); lenis.scrollTo($(id), { offset: -90 }); });
  }
  gsap.from(".hero h1, .hero p, .hero .acts", { y: 40, opacity: 0, duration: 1, stagger: .1, ease: "power3.out" });
  gsap.from(".hv .ph", { clipPath: "inset(100% 0 0 0 round 28px)", duration: 1.3, ease: "power3.inOut" });
  gsap.from(".cdc", { y: 50, opacity: 0, duration: 1, delay: .6, ease: "power3.out" });
  ScrollTrigger.batch("[data-up]", { start: "top 88%", once: true, onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, duration: .8, stagger: .08, ease: "power3.out" }); } });

  function bindDynamic() {
    [].concat.apply([], dyn).forEach(function (x) { if (x.targets || x.getChildren) x.revert(); else if (x.kill) x.kill(); }); dyn = [];
    dyn.push(gsap.fromTo("#year .mo", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .5, stagger: .04, ease: "power2.out", clearProps: "transform,opacity", scrollTrigger: { trigger: "#year", start: "top 85%" } }));
    dyn.push(gsap.fromTo("#vf .card", { y: 40, opacity: 0, rotation: function (i) { return i % 2 ? 3 : -3; } }, { y: 0, opacity: 1, rotation: 0, duration: .7, stagger: .08, ease: "power3.out", clearProps: "transform,opacity", scrollTrigger: { trigger: "#vf", start: "top 85%" } }));
    dyn.push(gsap.fromTo("#packs .pack", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: .7, stagger: .1, ease: "power3.out", clearProps: "opacity,transform", scrollTrigger: { trigger: "#packs", start: "top 85%" } }));
  }
  bindDynamic();
  ready = true;
  var rz, lw = innerWidth; window.addEventListener("resize", function () { if (innerWidth === lw) return; lw = innerWidth; clearTimeout(rz); rz = setTimeout(function () { ScrollTrigger.refresh(); }, 300); });
})();
