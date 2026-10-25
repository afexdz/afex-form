/* Wijha : contenu FR / AR / EN, destination qui change toute la page, examen, niveau, écrit chronométré, cours en direct, dossier, tarifs, test gratuit (GSAP + ScrollTrigger + Lenis, en local) */
(function () {
  var doc = document.documentElement;
  var STATIC = doc.classList.contains("static") || !window.gsap || !window.ScrollTrigger;
  if (STATIC) doc.classList.add("static");
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  function L(o) { return o[lang]; }
  function T(fr, ar, en) { return { fr: fr, ar: ar, en: en }; }
  var P = { paris: [1920, "cyril mzn"], montreal: [853, "Marc-Olivier Jodoin"], londres: [1920, "Sabrina Mazzeo"], berlin: [853, "Florian Wehde"], etudiante: [1921, "Malak"], ecoute: [1920, "Yanik"], aeroport: [867, "Artur Tumasjan"], panneau: [852, "Anete Lūsiņa"] };
  function img(n, sizes) { return '<img src="assets/img/' + n + '-640.webp" srcset="assets/img/' + n + '-640.webp 640w, assets/img/' + n + '-1280.webp 1280w, assets/img/' + n + '-1920.webp 1920w" sizes="' + (sizes || "50vw") + '" width="1280" height="' + P[n][0] + '" alt="" loading="lazy" decoding="async">'; }
  function cur() { return lang === "ar" ? "دج" : "DA"; }
  function da(n) { return "⁦" + Math.round(n).toLocaleString("fr-FR").replace(/ | /g, " ") + "⁩ " + cur(); }
  var LV = ["A1", "A2", "B1", "B2", "C1", "C2"];

  var D = [
    { k: "fr", img: "paris", acc: "#2F5BFF", accT: "#FFFFFF", flag: ["#2F5BFF", "#FFFFFF", "#E0242A"], n: T("France", "فرنسا", "France"), ex: "TCF", exL: T("TCF tout public ou DELF", "TCF العام أو DELF", "TCF or DELF"), tl: "fr", tg: 3, mult: 1,
      parts: [[T("Compréhension orale", "الفهم الشفهي", "Listening"), 35, T("39 questions", "39 سؤالًا", "39 questions")], [T("Compréhension écrite", "الفهم الكتابي", "Reading"), 60, T("39 questions", "39 سؤالًا", "39 questions")], [T("Expression écrite", "التعبير الكتابي", "Writing"), 60, T("3 tâches", "3 مهام", "3 tasks")], [T("Expression orale", "التعبير الشفهي", "Speaking"), 12, T("3 tâches", "3 مهام", "3 tasks")]],
      desc: T("Pour une licence ou un master en France, la procédure Études en France demande souvent un niveau B2.", "للالتحاق بالليسانس أو الماستر في فرنسا، كثيرًا ما تطلب إجراءات « الدراسة في فرنسا » مستوى B2.", "For a bachelor’s or master’s in France, the Études en France process often asks for B2."),
      where: T("Instituts français en Algérie", "المعاهد الفرنسية في الجزائر", "Instituts français in Algeria"), valid: T("2 ans", "سنتان", "2 years"),
      todo: [[T("Compte Études en France", "حساب « الدراسة في فرنسا »", "Études en France account"), T("Créer le dossier en ligne et choisir les formations", "إنشاء الملف عبر الإنترنت واختيار التكوينات", "Create the online file and choose courses")], [T("Test de langue", "اختبار اللغة", "Language test"), T("TCF ou DELF, au niveau demandé", "TCF أو DELF بالمستوى المطلوب", "TCF or DELF at the required level")], [T("Lettres de motivation", "رسائل التحفيز", "Cover letters"), T("Une par formation, relues avec un professeur", "رسالة لكل تكوين، يراجعها أستاذ", "One per course, reviewed by a teacher")], [T("Entretien pédagogique", "المقابلة البيداغوجية", "Interview"), T("Préparé en simulation avec nous", "نحضّرها معكم بالمحاكاة", "Rehearsed with us")], [T("Justificatif de ressources", "إثبات الموارد المالية", "Proof of funds"), T("Selon le montant demandé pour le visa", "حسب المبلغ المطلوب للتأشيرة", "As required for the visa")], [T("Demande de visa étudiant", "طلب التأشيرة الطلابية", "Student visa application"), T("Rendez-vous et dépôt du dossier", "الموعد وإيداع الملف", "Appointment and file submission")]] },
    { k: "ca", img: "montreal", acc: "#E0242A", accT: "#FFFFFF", flag: ["#E0242A", "#FFFFFF", "#E0242A"], n: T("Canada", "كندا", "Canada"), ex: "TCF·TEF", exL: T("TCF Canada ou TEF Canada", "TCF كندا أو TEF كندا", "TCF Canada or TEF Canada"), tl: "fr", tg: 3, mult: 1.1,
      parts: [[T("Compréhension orale", "الفهم الشفهي", "Listening"), 35, T("39 questions", "39 سؤالًا", "39 questions")], [T("Compréhension écrite", "الفهم الكتابي", "Reading"), 60, T("39 questions", "39 سؤالًا", "39 questions")], [T("Expression écrite", "التعبير الكتابي", "Writing"), 60, T("3 tâches", "3 مهام", "3 tasks")], [T("Expression orale", "التعبير الشفهي", "Speaking"), 12, T("3 tâches", "3 مهام", "3 tasks")]],
      desc: T("Au Québec comme ailleurs au Canada, le niveau demandé dépend de l’établissement : B2 est un objectif sûr.", "في كيبك كما في باقي كندا، يتوقف المستوى المطلوب على المؤسسة: B2 هدف آمن.", "In Quebec and elsewhere in Canada, the level depends on the institution: B2 is a safe target."),
      where: T("Centres agréés en Algérie", "مراكز معتمدة في الجزائر", "Approved centres in Algeria"), valid: T("2 ans", "سنتان", "2 years"),
      todo: [[T("Admission d’un établissement", "قبول من مؤسسة", "Letter of acceptance"), T("Établissement désigné pour les étudiants étrangers", "مؤسسة معتمدة لاستقبال الطلبة الأجانب", "From a designated institution")], [T("Test de langue", "اختبار اللغة", "Language test"), T("TCF ou TEF Canada, ou IELTS pour l’anglais", "TCF أو TEF كندا، أو IELTS للإنجليزية", "TCF or TEF Canada, or IELTS for English")], [T("CAQ pour le Québec", "شهادة CAQ لكيبك", "CAQ for Quebec"), T("Certificat d’acceptation du Québec", "شهادة القبول في كيبك", "Quebec acceptance certificate")], [T("Preuve de fonds", "إثبات الأموال", "Proof of funds"), T("Frais de scolarité et de séjour", "مصاريف الدراسة والإقامة", "Tuition and living costs")], [T("Demande de permis d’études", "طلب تصريح الدراسة", "Study permit application"), T("En ligne, avec lettre d’explication", "عبر الإنترنت مع رسالة توضيحية", "Online, with a letter of explanation")], [T("Données biométriques", "البيانات البيومترية", "Biometrics"), T("Rendez-vous au centre de collecte", "موعد في مركز الجمع", "Appointment at the collection centre")]] },
    { k: "uk", img: "londres", acc: "#0B2A6F", accT: "#FFFFFF", flag: ["#0B2A6F", "#FFFFFF", "#C8102E"], n: T("Royaume-Uni", "المملكة المتحدة", "United Kingdom"), ex: "IELTS", exL: T("IELTS Academic", "IELTS الأكاديمي", "IELTS Academic"), tl: "en", tg: 3, mult: 1.15,
      parts: [[T("Listening", "الاستماع", "Listening"), 30, T("4 parties", "4 أجزاء", "4 parts")], [T("Reading", "القراءة", "Reading"), 60, T("3 textes", "3 نصوص", "3 texts")], [T("Writing", "الكتابة", "Writing"), 60, T("2 tâches", "مهمتان", "2 tasks")], [T("Speaking", "المحادثة", "Speaking"), 14, T("entretien", "مقابلة", "interview")]],
      desc: T("Les universités britanniques demandent en général 6.0 à 6.5 en IELTS, soit un niveau proche du B2.", "الجامعات البريطانية تطلب عادة 6.0 إلى 6.5 في IELTS، أي مستوى قريبًا من B2.", "UK universities usually ask for IELTS 6.0 to 6.5, close to B2."),
      where: T("British Council et centres partenaires", "المجلس الثقافي البريطاني ومراكز شريكة", "British Council and partner centres"), valid: T("2 ans", "سنتان", "2 years"),
      todo: [[T("Offre d’une université et CAS", "عرض جامعة وCAS", "University offer and CAS"), T("Le CAS est délivré par l’université", "تصدر الجامعة وثيقة CAS", "The university issues the CAS")], [T("Test d’anglais", "اختبار الإنجليزية", "English test"), T("IELTS, ou IELTS UKVI si l’université le demande", "IELTS أو IELTS UKVI إذا طلبته الجامعة", "IELTS, or IELTS UKVI if required")], [T("Personal statement", "رسالة شخصية", "Personal statement"), T("Rédigée et corrigée avec nous", "نكتبها ونصحّحها معكم", "Written and edited with us")], [T("Preuve de fonds", "إثبات الأموال", "Proof of funds"), T("Relevés bancaires sur la durée demandée", "كشوف بنكية للمدة المطلوبة", "Bank statements for the required period")], [T("Demande de visa Student", "طلب تأشيرة الطالب", "Student visa application"), T("En ligne, avec le numéro CAS", "عبر الإنترنت برقم CAS", "Online, with the CAS number")], [T("Rendez-vous biométrie", "موعد البيومترية", "Biometrics appointment"), T("Au centre de demande de visa", "في مركز طلب التأشيرات", "At the visa application centre")]] },
    { k: "de", img: "berlin", acc: "#F2B300", accT: "#111111", flag: ["#111111", "#DD0000", "#FFCE00"], n: T("Allemagne", "ألمانيا", "Germany"), ex: "Goethe", exL: T("Goethe-Zertifikat B1", "شهادة غوته B1", "Goethe-Zertifikat B1"), tl: "de", tg: 2, mult: 1.1,
      parts: [[T("Lesen", "القراءة", "Lesen (reading)"), 65, T("5 parties", "5 أجزاء", "5 parts")], [T("Hören", "الاستماع", "Hören (listening)"), 40, T("4 parties", "4 أجزاء", "4 parts")], [T("Schreiben", "الكتابة", "Schreiben (writing)"), 60, T("3 parties", "3 أجزاء", "3 parts")], [T("Sprechen", "المحادثة", "Sprechen (speaking)"), 15, T("à deux", "بالثنائي", "in pairs")]],
      desc: T("Le B1 ouvre l’Ausbildung et le Studienkolleg. Pour étudier en allemand à l’université, visez B2 à C1.", "مستوى B1 يفتح التكوين المهني (Ausbildung) والسنة التحضيرية. للدراسة بالألمانية في الجامعة، استهدف B2 إلى C1.", "B1 opens Ausbildung and Studienkolleg. For a German-taught degree, aim for B2 to C1."),
      where: T("Goethe-Institut et centres partenaires", "معهد غوته ومراكز شريكة", "Goethe-Institut and partner centres"), valid: T("Sans date limite officielle", "بدون تاريخ انتهاء رسمي", "No official expiry"),
      todo: [[T("Admission ou Studienkolleg", "القبول أو السنة التحضيرية", "Admission or Studienkolleg"), T("Zulassung de l’université ou de l’école", "قبول من الجامعة أو المدرسة", "Zulassung from the university or school")], [T("Certificat d’allemand", "شهادة الألمانية", "German certificate"), T("Goethe, telc ou TestDaF selon le niveau", "غوته أو telc أو TestDaF حسب المستوى", "Goethe, telc or TestDaF by level")], [T("Compte bloqué", "الحساب المجمّد", "Blocked account"), T("Sperrkonto pour la première année", "Sperrkonto للسنة الأولى", "Sperrkonto for the first year")], [T("Assurance maladie", "التأمين الصحي", "Health insurance"), T("Valable dès l’arrivée", "سارٍ منذ الوصول", "Valid from arrival")], [T("Traductions certifiées", "الترجمات المعتمدة", "Certified translations"), T("Diplômes et relevés de notes", "الشهادات وكشوف النقاط", "Diplomas and transcripts")], [T("Rendez-vous visa", "موعد التأشيرة", "Visa appointment"), T("Dossier complet à l’ambassade", "ملف كامل في السفارة", "Full file at the embassy")]] }
  ];
  var PROMPTS = {
    fr: [{ tag: "TCF · Tâche 3 · 120 à 180 mots", min: 120, max: 180, mins: 30, p: "Certains pensent qu’étudier à l’étranger est la meilleure façon de préparer sa carrière. D’autres préfèrent rester dans leur pays. Donnez votre opinion avec des exemples." }, { tag: "TCF · Tâche 2 · 60 à 120 mots", min: 60, max: 120, mins: 20, p: "Vous venez d’arriver dans une nouvelle ville pour vos études. Écrivez un message à un ami pour lui raconter votre première semaine." }],
    en: [{ tag: "IELTS · Writing Task 2 · 250 words minimum", min: 250, max: 0, mins: 40, p: "Some people believe that studying abroad is the best way to prepare for a career. To what extent do you agree or disagree?" }, { tag: "IELTS · Writing Task 2 · 250 words minimum", min: 250, max: 0, mins: 40, p: "Many universities now offer their courses online. Do the advantages of this outweigh the disadvantages?" }],
    de: [{ tag: "Goethe B1 · Schreiben Teil 1 · ca. 80 Wörter", min: 70, max: 100, mins: 20, p: "Sie haben am Wochenende eine neue Stadt besucht. Schreiben Sie einer Freundin: Wo waren Sie? Was hat Ihnen gefallen? Wann treffen Sie sich wieder?" }, { tag: "Goethe B1 · Schreiben Teil 2 · ca. 80 Wörter", min: 70, max: 100, mins: 25, p: "Im Fernsehen gab es eine Diskussion: Sollen junge Leute im Ausland studieren? Schreiben Sie Ihre Meinung." }]
  };

  var I = {
    fr: { brand: "wijha", demo0: "Site de démonstration, plateforme fictive.", demo1: "Autres modèles", n1: "L’examen", n2: "Mon niveau", n3: "S’entraîner", n4: "En direct", n5: "Dossier", n6: "Tarifs", cta: "Test de niveau gratuit",
      h1: ["Votre langue.", "Votre visa.", "Votre départ."], hP: "Préparez le TCF, l’IELTS ou le Goethe-Zertifikat depuis chez vous, en cours du soir en direct. Choisissez d’abord où vous voulez étudier.", hB: "Estimer mon niveau", destL: "Destination",
      exFor: "Pour étudier en {d}, vous passerez :", eH: "Ce qui vous attend le jour J.", min: "min", info: ["Niveau visé", "Où le passer", "Validité"], exDisc: "Formats et niveaux donnés à titre indicatif. Vérifiez toujours les exigences de votre établissement et du centre d’examen.",
      lH: "Où en êtes-vous ?", lP: "Placez chaque curseur sur ce que vous savez faire aujourd’hui. On compare avec le niveau visé et on calcule le temps de préparation.",
      can: ["Je comprends des mots isolés.", "Je comprends des phrases simples du quotidien.", "Je me débrouille sur des sujets familiers.", "Je suis à l’aise sur des sujets variés, avec quelques fautes.", "Je m’exprime avec aisance et précision.", "Presque comme un natif."],
      now: "Votre niveau", goal: "Niveau visé", time: "Préparation", wk: "{n} semaines", ready: "Prêt", verdict: ["Vous avez déjà le niveau visé : on passe directement aux épreuves blanches.", "Il vous manque {g} niveau(x). À 6 heures par semaine, comptez {w} semaines, soit un examen possible vers {m}."],
      wH: "Entraînez-vous à l’écrit.", wP: "Un vrai sujet du format de votre examen. Lancez le chrono et écrivez : le compteur vous dit quand vous avez assez de mots.", wGo: "Lancer le chrono", wStop: "Arrêter", wNew: "Autre sujet", words: "mots sur {n}", ph: "Écrivez ici, dans la langue de l’examen…",
      ck: ["Assez de mots ({n} minimum)", "Pas plus de {n} mots", "Au moins deux paragraphes", "Dans le temps ({n} min)"],
      dH: "Les cours en direct, le soir.", dP: "À l’heure d’Alger, après le travail ou l’université. Chaque cours est enregistré si vous le ratez.", days: ["Samedi", "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"], rest: "Repos", mock: "Examen blanc", corr: "Correction des écrits", grammar: "Grammaire et vocabulaire", replay: "Rediffusion", liveN: ["12 élèves par groupe au maximum", "Rediffusion pendant 30 jours", "Professeur dédié à votre examen"], liveT: "Démo : le lien du cours est envoyé après l’inscription.",
      oH: "Votre dossier, case par case.", oP: "Les grandes étapes pour partir en {d}. Cochez au fur et à mesure : votre progression reste enregistrée sur cet appareil.", oDisc: "Liste indicative. Les démarches changent : vérifiez toujours sur les sites officiels de l’ambassade et des établissements.",
      tH: "Trois formules, un objectif.", tP: "Prix pour la préparation {e}. Paiement en deux fois possible, par CCP ou virement.",
      plans: [["Express", "8 semaines", ["2 cours en direct par semaine", "1 examen blanc", "Correction de 4 écrits"]], ["Intensif", "16 semaines", ["5 cours en direct par semaine", "Un examen blanc chaque mois", "Correction illimitée des écrits", "Simulation d’oral"]], ["Intensif + dossier", "16 semaines", ["Toute la formule Intensif", "Lettres de motivation relues", "Préparation de l’entretien", "Suivi du dossier étape par étape"]]], best: "Le plus choisi", choose: "Choisir",
      qH: "Questions avant le départ.", qP: "Ce que les familles nous demandent le plus souvent.",
      F: [["Les cours sont-ils vraiment en direct ?", "Oui, avec un professeur et 12 élèves au maximum. Chaque séance est enregistrée et reste disponible 30 jours."], ["Quel matériel faut-il ?", "Un téléphone suffit pour suivre. Pour l’écrit, un ordinateur est plus confortable. Prévoyez des écouteurs pour l’oral."], ["Est-ce que vous m’inscrivez à l’examen ?", "Non : l’inscription se fait auprès du centre officiel, et les frais d’examen ne sont pas compris. Nous vous expliquons la démarche pas à pas."], ["Garantissez-vous le visa ?", "Non, personne ne peut le garantir. Nous préparons la langue et un dossier complet, la décision appartient au consulat."], ["Comment payer ?", "Par CCP, BaridiMob ou virement, en une ou deux fois."], ["Et si je rate un cours ?", "Vous le regardez en rediffusion et vous posez vos questions au professeur dans le groupe."]],
      iH: "Commencez par le test gratuit.", iP: "30 minutes en ligne avec un professeur, puis un plan de préparation adapté à votre destination.", steps: ["Vous laissez votre numéro", "Un professeur vous appelle pour le test", "Vous recevez votre plan de préparation"],
      l1: "Prénom et nom", l2: "Téléphone (WhatsApp)", l3: "Destination", l4: "Moment préféré", slots: ["En semaine, le soir", "Le samedi matin"], est: "Niveau estimé : {l}", send: "Réserver mon test gratuit", err: "Indiquez votre nom et un numéro valide (05, 06 ou 07).", demo: "Démo AFEX Digital : aucune réservation n’a été envoyée, ce formulaire n’est pas encore connecté.",
      bon: "Bon départ.", foA: "Plateforme fictive de préparation aux examens de langue pour les étudiants algériens.", foE: "Examens", foH: "Cours en direct", foHv: "Dimanche → jeudi, 19 h – 22 h, heure d’Alger.", foC: "Contact", foCv: "WhatsApp : numéro de démonstration.", foot: "© 2026 Wijha, plateforme fictive.", by: "Site réalisé par", photos: "Photos : Unsplash,", waT: "Un conseiller", waDemo: "Démo AFEX Digital : le numéro WhatsApp n’est pas encore connecté.", lang: "Langue",
      faceAlt: "Une étudiante en hijab avec un casque, souriante", panAlt: "Un voyageur devant le tableau des départs", aeroAlt: "Des voyageurs dans un terminal d’aéroport au coucher du soleil", title: "Wijha, langues pour étudier à l’étranger", loc: "fr-FR", txtL: "Votre texte" },
    ar: { brand: "وجهة", demo0: "موقع تجريبي، منصة وهمية.", demo1: "نماذج أخرى", n1: "الامتحان", n2: "مستواي", n3: "تدرّب", n4: "مباشر", n5: "الملف", n6: "الأسعار", cta: "اختبار مستوى مجاني",
      h1: ["لغتك.", "تأشيرتك.", "رحلتك."], hP: "حضّر TCF أو IELTS أو شهادة غوته من بيتك، في دروس مسائية مباشرة. اختر أولًا أين تريد الدراسة.", hB: "قدّر مستواي", destL: "الوجهة",
      exFor: "للدراسة في {d}، ستجتاز:", eH: "ما ينتظرك يوم الامتحان.", min: "د", info: ["المستوى المستهدف", "أين تجتازه", "الصلاحية"], exDisc: "الصيغ والمستويات للإشارة فقط. تحقّق دائمًا من شروط مؤسستك ومركز الامتحان.",
      lH: "أين وصلت؟", lP: "ضع كل مؤشر على ما تستطيع فعله اليوم. نقارن بالمستوى المستهدف ونحسب مدة التحضير.",
      can: ["أفهم كلمات منفصلة.", "أفهم جملًا بسيطة من الحياة اليومية.", "أتدبّر أمري في المواضيع المألوفة.", "مرتاح في مواضيع متنوعة مع بعض الأخطاء.", "أعبّر بطلاقة ودقة.", "تقريبًا كالناطق الأصلي."],
      now: "مستواك", goal: "المستوى المستهدف", time: "التحضير", wk: "{n} أسبوعًا", ready: "جاهز", verdict: ["لديك المستوى المستهدف: ننتقل مباشرة إلى الامتحانات التجريبية.", "ينقصك {g} مستوى. بـ 6 ساعات أسبوعيًا، احسب {w} أسبوعًا، أي امتحان ممكن حوالي {m}."],
      wH: "تدرّب على الكتابة.", wP: "موضوع حقيقي بصيغة امتحانك. شغّل المؤقت واكتب: العدّاد يخبرك متى تكفي الكلمات.", wGo: "شغّل المؤقت", wStop: "أوقف", wNew: "موضوع آخر", words: "كلمة من {n}", ph: "اكتب هنا بلغة الامتحان…",
      ck: ["كلمات كافية ({n} على الأقل)", "لا أكثر من {n} كلمة", "فقرتان على الأقل", "في الوقت ({n} د)"],
      dH: "دروس مباشرة في المساء.", dP: "بتوقيت الجزائر، بعد العمل أو الجامعة. كل درس مسجّل إن فاتك.", days: ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"], rest: "راحة", mock: "امتحان تجريبي", corr: "تصحيح الكتابات", grammar: "القواعد والمفردات", replay: "إعادة", liveN: ["12 طالبًا في الفوج على الأكثر", "إعادة البث لمدة 30 يومًا", "أستاذ مخصّص لامتحانك"], liveT: "عرض: يُرسل رابط الدرس بعد التسجيل.",
      oH: "ملفك، خانة بخانة.", oP: "المراحل الكبرى للسفر إلى {d}. ضع علامة كلما تقدّمت: يبقى تقدّمك محفوظًا على هذا الجهاز.", oDisc: "قائمة للإشارة. الإجراءات تتغيّر: تحقّق دائمًا من المواقع الرسمية للسفارة والمؤسسات.",
      tH: "ثلاث صيغ، هدف واحد.", tP: "الأسعار لتحضير {e}. يمكن الدفع على مرتين، عبر CCP أو تحويل بنكي.",
      plans: [["سريع", "8 أسابيع", ["درسان مباشران في الأسبوع", "امتحان تجريبي واحد", "تصحيح 4 كتابات"]], ["مكثّف", "16 أسبوعًا", ["5 دروس مباشرة في الأسبوع", "امتحان تجريبي كل شهر", "تصحيح غير محدود للكتابات", "محاكاة الشفهي"]], ["مكثّف + ملف", "16 أسبوعًا", ["كل الصيغة المكثّفة", "مراجعة رسائل التحفيز", "التحضير للمقابلة", "متابعة الملف خطوة بخطوة"]]], best: "الأكثر اختيارًا", choose: "اختر",
      qH: "أسئلة قبل السفر.", qP: "ما تسألنا عنه العائلات أكثر.",
      F: [["هل الدروس مباشرة فعلًا؟", "نعم، مع أستاذ و12 طالبًا على الأكثر. كل حصة مسجّلة وتبقى متاحة 30 يومًا."], ["ما المعدّات اللازمة؟", "الهاتف يكفي للمتابعة. للكتابة، الحاسوب أريح. جهّز سمّاعات للشفهي."], ["هل تسجّلونني في الامتحان؟", "لا: التسجيل يتم لدى المركز الرسمي، ومصاريف الامتحان غير مشمولة. نشرح لك الخطوات واحدة بواحدة."], ["هل تضمنون التأشيرة؟", "لا، لا أحد يستطيع ضمانها. نحضّر اللغة وملفًا كاملًا، والقرار للقنصلية."], ["كيف أدفع؟", "عبر CCP أو BaridiMob أو تحويل بنكي، مرة أو مرتين."], ["وإن فاتني درس؟", "تشاهده مسجّلًا وتطرح أسئلتك على الأستاذ في المجموعة."]],
      iH: "ابدأ بالاختبار المجاني.", iP: "30 دقيقة عبر الإنترنت مع أستاذ، ثم برنامج تحضير مناسب لوجهتك.", steps: ["تترك رقمك", "يتصل بك أستاذ للاختبار", "تستلم برنامج تحضيرك"],
      l1: "الاسم واللقب", l2: "الهاتف (واتساب)", l3: "الوجهة", l4: "الوقت المفضّل", slots: ["أيام الأسبوع مساءً", "السبت صباحًا"], est: "المستوى المقدّر: {l}", send: "احجز اختباري المجاني", err: "أدخل اسمك ورقمًا صحيحًا (05 أو 06 أو 07).", demo: "عرض AFEX Digital: لم يُرسل أي حجز، هذا النموذج غير متصل بعد.",
      bon: "رحلة موفّقة.", foA: "منصة وهمية للتحضير لامتحانات اللغة للطلبة الجزائريين.", foE: "الامتحانات", foH: "دروس مباشرة", foHv: "من الأحد إلى الخميس، 19:00 – 22:00 بتوقيت الجزائر.", foC: "الاتصال", foCv: "واتساب: رقم تجريبي.", foot: "© 2026 وجهة، منصة وهمية.", by: "موقع من إنجاز", photos: "الصور: Unsplash،", waT: "مستشار", waDemo: "عرض AFEX Digital: رقم واتساب غير متصل بعد.", lang: "اللغة",
      faceAlt: "طالبة محجّبة مبتسمة تضع سماعات", panAlt: "مسافر أمام لوحة الرحلات", aeroAlt: "مسافرون في قاعة مطار عند الغروب", title: "وجهة، اللغات للدراسة في الخارج", loc: "ar-DZ", txtL: "نصّك" },
    en: { brand: "wijha", demo0: "Demo website, fictional platform.", demo1: "Other templates", n1: "The exam", n2: "My level", n3: "Practise", n4: "Live", n5: "Paperwork", n6: "Fees", cta: "Free level test",
      h1: ["Your language.", "Your visa.", "Your departure."], hP: "Prepare for the TCF, IELTS or Goethe-Zertifikat from home, with live evening classes. First, choose where you want to study.", hB: "Estimate my level", destL: "Destination",
      exFor: "To study in {d}, you will take:", eH: "What to expect on the day.", min: "min", info: ["Target level", "Where to take it", "Validity"], exDisc: "Formats and levels for guidance only. Always check what your institution and test centre require.",
      lH: "Where are you now?", lP: "Set each slider to what you can do today. We compare it with your target and work out the prep time.",
      can: ["I understand single words.", "I understand simple everyday sentences.", "I get by on familiar topics.", "I’m at ease on varied topics, with a few mistakes.", "I express myself fluently and precisely.", "Almost like a native speaker."],
      now: "Your level", goal: "Target", time: "Prep time", wk: "{n} weeks", ready: "Ready", verdict: ["You already have the target level: straight to mock exams.", "You are {g} level(s) away. At 6 hours a week, allow {w} weeks, so an exam around {m}."],
      wH: "Practise your writing.", wP: "A real task in your exam’s format. Start the clock and write: the counter tells you when you have enough words.", wGo: "Start the clock", wStop: "Stop", wNew: "Another task", words: "words of {n}", ph: "Write here, in the exam language…",
      ck: ["Enough words ({n} minimum)", "No more than {n} words", "At least two paragraphs", "Within time ({n} min)"],
      dH: "Live classes, in the evening.", dP: "On Algiers time, after work or university. Every class is recorded in case you miss it.", days: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], rest: "Rest", mock: "Mock exam", corr: "Writing feedback", grammar: "Grammar and vocabulary", replay: "Replay", liveN: ["12 students per group at most", "Replays for 30 days", "A teacher for your exam"], liveT: "Demo: the class link is sent after you enrol.",
      oH: "Your paperwork, box by box.", oP: "The main steps to study in {d}. Tick as you go: your progress is saved on this device.", oDisc: "Indicative list. Procedures change: always check the official embassy and institution websites.",
      tH: "Three plans, one goal.", tP: "Prices for {e} preparation. Pay in two instalments by CCP or bank transfer.",
      plans: [["Express", "8 weeks", ["2 live classes a week", "1 mock exam", "Feedback on 4 essays"]], ["Intensive", "16 weeks", ["5 live classes a week", "A mock exam every month", "Unlimited writing feedback", "Mock speaking test"]], ["Intensive + file", "16 weeks", ["Everything in Intensive", "Cover letters reviewed", "Interview preparation", "Step-by-step file follow-up"]]], best: "Most chosen", choose: "Choose",
      qH: "Questions before you go.", qP: "What families ask us most often.",
      F: [["Are classes really live?", "Yes, with a teacher and at most 12 students. Each session is recorded and stays available for 30 days."], ["What equipment do I need?", "A phone is enough to follow. A computer is more comfortable for writing. Bring headphones for speaking."], ["Do you register me for the exam?", "No: you register with the official centre, and exam fees are not included. We walk you through it step by step."], ["Do you guarantee the visa?", "No, nobody can. We prepare the language and a complete file; the decision is the consulate’s."], ["How do I pay?", "By CCP, BaridiMob or bank transfer, in one or two instalments."], ["What if I miss a class?", "Watch the replay and ask the teacher your questions in the group."]],
      iH: "Start with the free test.", iP: "30 minutes online with a teacher, then a prep plan for your destination.", steps: ["Leave your number", "A teacher calls you for the test", "You get your prep plan"],
      l1: "Full name", l2: "Phone (WhatsApp)", l3: "Destination", l4: "Best time", slots: ["Weekday evenings", "Saturday morning"], est: "Estimated level: {l}", send: "Book my free test", err: "Enter your name and a valid number (05, 06 or 07).", demo: "AFEX Digital demo: no booking was sent, this form is not connected yet.",
      bon: "Safe travels.", foA: "A fictional language exam prep platform for Algerian students.", foE: "Exams", foH: "Live classes", foHv: "Sunday → Thursday, 19:00 – 22:00 Algiers time.", foC: "Contact", foCv: "WhatsApp: demo number.", foot: "© 2026 Wijha, a fictional platform.", by: "Website by", photos: "Photos: Unsplash,", waT: "Talk to us", waDemo: "AFEX Digital demo: the WhatsApp number is not connected yet.", lang: "Language",
      faceAlt: "A smiling student in a hijab wearing headphones", panAlt: "A traveller in front of the departures board", aeroAlt: "Travellers in an airport terminal at sunset", title: "Wijha, languages for studying abroad", loc: "en-GB", txtL: "Your text" }
  };
  var BASE = [24000, 42000, 58000];
  var LIVE = [[1, "19:00", 0], [2, "20:30", 2], [3, "19:00", "g"], [4, "20:30", 3], [5, "19:00", "m"], [0, "10:00", "c"]];

  var lang = "fr", di = 0, sk = [1, 1, 1, 1], pi = 0, wT = null, wS = 0, slot = 0, ready = false, dyn = [];
  try { var sv = localStorage.getItem("wijha-lang"); if (I[sv]) lang = sv; var sd = +localStorage.getItem("wijha-dest"); if (D[sd]) di = sd; } catch (e) {}
  function toast(t) { var el = $("#toast"); el.textContent = t; el.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(function () { el.classList.remove("on"); }, 4200); }
  function fmt(d, o) { try { return new Intl.DateTimeFormat(lang === "ar" ? "ar-DZ-u-nu-latn" : I[lang].loc, o).format(d); } catch (e) { return d.toDateString(); } }
  function dest() { return D[di]; }

  /* hero */
  function renderDests() {
    var t = I[lang];
    $("#dests").setAttribute("aria-label", t.destL);
    $("#dests").innerHTML = D.map(function (d, i) { return '<button type="button" class="dest" data-d="' + i + '" aria-pressed="' + (i === di) + '">' + img(d.img, "(min-width:1060px) 24vw, 46vw") + '<span class="bar" aria-hidden="true">' + d.flag.map(function (c) { return '<i style="background:' + c + '"></i>'; }).join("") + '</span><span class="ok" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5 9-10"/></svg></span><span class="tx"><b>' + L(d.n) + "</b><span>" + L(d.exL) + "</span></span></button>"; }).join("");
  }
  function theme() { doc.style.setProperty("--acc", dest().acc); doc.style.setProperty("--accT", dest().accT); }
  /* exam */
  function renderExam() {
    var t = I[lang], d = dest(), tot = d.parts.reduce(function (a, p) { return a + p[1]; }, 0);
    $("#exFor").textContent = t.exFor.replace("{d}", L(d.n));
    $("#exName").textContent = d.ex;
    $("#exDesc").textContent = L(d.desc);
    $("#parts").innerHTML = d.parts.map(function (p) { return '<div class="part" style="flex-grow:' + p[1] + '"><span class="mn">' + p[1] + " " + t.min + "</span><div><b>" + L(p[0]) + "</b><br><small>" + L(p[2]) + "</small></div></div>"; }).join("");
    $("#exinfo").innerHTML = '<div><small>' + t.info[0] + "</small><b>" + LV[d.tg] + "</b></div><div><small>" + t.info[1] + "</small><b>" + L(d.where) + "</b></div><div><small>" + t.info[2] + "</small><b>" + L(d.valid) + "</b></div>";
  }
  /* level */
  function renderSliders() {
    var t = I[lang], d = dest();
    $("#sliders").innerHTML = d.parts.map(function (p, i) { return '<div class="sl"><label for="sk' + i + '"><span>' + L(p[0]) + '</span><output id="so' + i + '">' + LV[sk[i]] + '</output></label><input type="range" id="sk' + i + '" min="0" max="5" step="1" value="' + sk[i] + '" data-sk="' + i + '"><small id="sc' + i + '">' + t.can[sk[i]] + "</small></div>"; }).join("");
  }
  function level() { return Math.floor(sk.reduce(function (a, b) { return a + b; }, 0) / 4); }
  function renderLadder() {
    var t = I[lang], d = dest(), me = level(), gap = Math.max(0, d.tg - me), w = gap * 10, when = new Date(); when.setDate(when.getDate() + w * 7);
    $("#ladder").innerHTML = '<div class="rungs" aria-hidden="true">' + LV.map(function (l, i) { return '<div class="rung' + (i === me ? " me" : "") + (i === d.tg ? " tg" : "") + '" style="height:' + (30 + i * 14) + '%">' + l + "</div>"; }).join("") + '</div><div class="lsum"><div><small>' + t.now + "</small><b>" + LV[me] + "</b></div><div><small>" + t.goal + "</small><b>" + LV[d.tg] + "</b></div><div><small>" + t.time + "</small><b>" + (gap ? t.wk.replace("{n}", w) : t.ready) + '</b></div></div><p class="verdict">' + (gap ? t.verdict[1].replace("{g}", gap).replace("{w}", w).replace("{m}", fmt(when, { month: "long", year: "numeric" })) : t.verdict[0]) + "</p>";
    var e = $("#fEst"); if (e) e.textContent = t.est.replace("{l}", LV[me]);
  }
  /* writing */
  function prompt() { return PROMPTS[dest().tl][pi % 2]; }
  function renderPrompt() { var p = prompt(); $("#prompt").innerHTML = '<small dir="ltr">' + p.tag + '</small><p dir="ltr" lang="' + dest().tl + '">' + p.p + "</p>"; $("#txt").setAttribute("lang", dest().tl); $("#txt").setAttribute("dir", "ltr"); $("#txt").placeholder = I[lang].ph; $("#txt").setAttribute("aria-label", I[lang].txtL); renderCount(); }
  function words() { var v = $("#txt").value.trim(); return v ? v.split(/\s+/).length : 0; }
  function renderCount() {
    var t = I[lang], p = prompt(), n = words(), paras = $("#txt").value.split(/\n\s*\n/).filter(function (x) { return x.trim(); }).length, inTime = wS <= p.mins * 60;
    $("#wc").textContent = n; $("#wcT").textContent = t.words.replace("{n}", p.min);
    $("#ringFg").style.strokeDashoffset = 477.5 * (1 - Math.min(1, n / p.min));
    var c = [[n >= p.min, t.ck[0].replace("{n}", p.min)]]; if (p.max) c.push([n > 0 && n <= p.max, t.ck[1].replace("{n}", p.max)]); c.push([paras >= 2, t.ck[2]]); c.push([wS > 0 && inTime, t.ck[3].replace("{n}", p.mins)]);
    $("#checks").innerHTML = c.map(function (x) { return '<li class="' + (x[0] ? "on" : "") + '"><i>' + (x[0] ? "✓" : "") + "</i>" + x[1] + "</li>"; }).join("");
  }
  function drawW() { $("#wtm").textContent = Math.floor(wS / 60) + ":" + String(wS % 60).padStart(2, "0"); }
  function stopW() { clearInterval(wT); wT = null; $("#wGo").textContent = I[lang].wGo; }
  /* live */
  function renderWeek() {
    var t = I[lang], d = dest();
    $("#week").innerHTML = t.days.map(function (day, i) {
      var s = LIVE.filter(function (l) { return l[0] === i; });
      if (i === 6) return '<div class="day off"><small>' + day + "</small><span style=\"color:var(--ink2)\">" + t.rest + "</span></div>";
      return '<div class="day"><small>' + day + "</small>" + s.map(function (l) { var name = l[2] === "g" ? t.grammar : l[2] === "m" ? t.mock : l[2] === "c" ? t.corr : L(d.parts[l[2]][0]); return '<button type="button" class="live' + (l[2] === "c" ? " r" : "") + '" data-live="1"><b dir="ltr">' + l[1] + "</b>" + name + "</button>"; }).join("") + (i === 0 ? '<button type="button" class="live r" data-live="1"><b dir="ltr">11:30</b>' + t.replay + "</button>" : "") + "</div>";
    }).join("");
    $("#wknote").innerHTML = t.liveN.map(function (x) { return '<span><span class="dot" aria-hidden="true"></span> ' + x + "</span>"; }).join("");
  }
  /* dossier */
  function doneKey() { return "wijha-todo-" + dest().k; }
  function getDone() { try { return JSON.parse(localStorage.getItem(doneKey()) || "[]"); } catch (e) { return []; } }
  function renderTodo() {
    var t = I[lang], d = dest(), done = getDone();
    $("#oP").textContent = t.oP.replace("{d}", L(d.n));
    $("#todo").innerHTML = d.todo.map(function (x, i) { return '<li><label><input type="checkbox" data-td="' + i + '"' + (done.indexOf(i) > -1 ? " checked" : "") + "><span><b>" + L(x[0]) + "</b><small>" + L(x[1]) + "</small></span></label></li>"; }).join("");
    renderProg();
  }
  function renderProg() { var n = $$("#todo input:checked").length, all = dest().todo.length; $("#progI").style.width = (n / all * 100) + "%"; $("#progB").textContent = n + "/" + all; }
  /* plans */
  function renderPlans() {
    var t = I[lang], d = dest();
    $("#tP").textContent = t.tP.replace("{e}", L(d.exL));
    $("#plans").innerHTML = t.plans.map(function (p, i) { return '<article class="plan' + (i === 1 ? " hi" : "") + '"><small>' + (i === 1 ? t.best : p[1]) + "</small><h3>" + p[0] + '</h3><div class="pr">' + da(Math.round(BASE[i] * d.mult / 500) * 500) + "</div>" + (i === 1 ? "<small>" + p[1] + "</small>" : "") + "<ul>" + p[2].map(function (x) { return "<li>" + x + "</li>"; }).join("") + '</ul><a class="btn ' + (i === 1 ? "k" : "a") + '" href="#test">' + t.choose + "</a></article>"; }).join("");
  }
  function renderFaq() { $("#qs").innerHTML = I[lang].F.map(function (f) { return "<details><summary>" + f[0] + "</summary><p>" + f[1] + "</p></details>"; }).join(""); }
  function renderForm() {
    var t = I[lang], f = $("#f"), keep = f.elements.length ? { name: f.name.value, tel: f.tel.value } : null;
    $("#steps3").innerHTML = t.steps.map(function (s) { return "<li>" + s + "</li>"; }).join("");
    f.innerHTML = '<div class="r2"><label>' + t.l1 + '<input name="name" autocomplete="name"></label><label>' + t.l2 + '<input name="tel" type="tel" inputmode="tel" placeholder="05 / 06 / 07 …" autocomplete="tel"></label></div><div class="r2"><label>' + t.l3 + '<select name="dest" id="fDest">' + D.map(function (d, i) { return '<option value="' + i + '"' + (i === di ? " selected" : "") + ">" + L(d.n) + " · " + d.ex + "</option>"; }).join("") + "</select></label><label>" + t.l4 + '<select name="slot">' + t.slots.map(function (s, i) { return '<option value="' + i + '">' + s + "</option>"; }).join("") + '</select></label></div><p id="fEst" style="font-weight:700"></p><button class="btn k" type="submit">' + t.send + '</button><p id="msg" role="status"></p>';
    if (keep) { f.name.value = keep.name; f.tel.value = keep.tel; }
  }
  function setDest(i, anim) {
    di = i; try { localStorage.setItem("wijha-dest", i); } catch (e) {}
    theme(); $$("#dests .dest").forEach(function (b, k) { b.setAttribute("aria-pressed", k === i); });
    renderExam(); renderSliders(); renderLadder(); pi = 0; stopW(); wS = 0; drawW(); renderPrompt(); renderWeek(); renderTodo(); renderPlans(); var s = $("#fDest"); if (s) s.value = i;
    if (anim && !STATIC) { gsap.fromTo("#exName", { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .6, ease: "power3.out", clearProps: "transform,opacity" }); gsap.fromTo("#parts .part", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .5, stagger: .06, clearProps: "transform,opacity" }); }
    if (ready) ScrollTrigger.refresh();
  }

  function render() {
    var t = I[lang];
    $("#h1").innerHTML = t.h1.map(function (x) { return "<span>" + x + "</span>"; }).join("");
    renderDests(); renderFaq(); renderForm(); setDest(di, false);
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
    try { localStorage.setItem("wijha-lang", l); } catch (e) {}
    render();
    if (ready) { bindDynamic(); ScrollTrigger.refresh(); }
  }

  /* events */
  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.l !== lang) setLang(b.dataset.l); }); });
  $("#dests").addEventListener("click", function (e) { var b = e.target.closest("[data-d]"); if (b && +b.dataset.d !== di) setDest(+b.dataset.d, true); });
  $("#sliders").addEventListener("input", function (e) { var i = e.target.dataset.sk; if (i === undefined) return; sk[+i] = +e.target.value; $("#so" + i).textContent = LV[sk[+i]]; $("#sc" + i).textContent = I[lang].can[sk[+i]]; renderLadder(); });
  $("#txt").addEventListener("input", renderCount);
  $("#wGo").addEventListener("click", function () { if (wT) { stopW(); renderCount(); return; } this.textContent = I[lang].wStop; wT = setInterval(function () { wS++; drawW(); if (wS % 5 === 0) renderCount(); }, 1000); $("#txt").focus(); });
  $("#wNew").addEventListener("click", function () { pi++; stopW(); wS = 0; drawW(); renderPrompt(); });
  $("#week").addEventListener("click", function (e) { if (e.target.closest("[data-live]")) toast(I[lang].liveT); });
  $("#todo").addEventListener("change", function () { var done = $$("#todo input:checked").map(function (x) { return +x.dataset.td; }); try { localStorage.setItem(doneKey(), JSON.stringify(done)); } catch (e) {} renderProg(); });
  $("#f").addEventListener("change", function (e) { if (e.target.id === "fDest") setDest(+e.target.value, true); });
  $("#f").addEventListener("submit", function (e) { e.preventDefault(); var f = e.target, t = I[lang], m = $("#msg"); if (!f.name.value.trim() || !/^0[5-7]\d{8}$/.test(f.tel.value.replace(/\s/g, ""))) { m.textContent = t.err; m.className = "err"; (f.name.value.trim() ? f.tel : f.name).focus(); return; } m.className = ""; m.textContent = t.demo; });
  $("#waf").addEventListener("click", function () { toast(I[lang].waDemo); });

  var lenis = null;
  setLang(lang);
  if (STATIC) return;

  gsap.registerPlugin(ScrollTrigger);
  lenis = window.Lenis ? new Lenis({ lerp: 0.1 }) : null;
  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    document.addEventListener("click", function (e) { var a = e.target.closest('a[href^="#"]'); if (!a || e.defaultPrevented) return; var id = a.getAttribute("href"); if (id.length < 2 || !$(id)) return; e.preventDefault(); lenis.scrollTo($(id), { offset: -72 }); });
  }
  gsap.from("#h1 span", { yPercent: 60, opacity: 0, duration: 1, stagger: .12, ease: "power4.out" });
  gsap.from(".face", { scale: .6, opacity: 0, duration: 1, delay: .3, ease: "back.out(1.6)" });
  gsap.from(".hsub > *", { y: 24, opacity: 0, duration: .8, delay: .4, stagger: .1 });
  ScrollTrigger.batch("[data-up]", { start: "top 88%", once: true, onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, duration: .8, stagger: .08, ease: "power3.out" }); } });
  gsap.to(".fh img", { yPercent: -12, ease: "none", scrollTrigger: { trigger: "footer", start: "top bottom", end: "bottom bottom", scrub: true } });

  function bindDynamic() {
    [].concat.apply([], dyn).forEach(function (x) { if (x.targets || x.getChildren) x.revert(); else if (x.kill) x.kill(); }); dyn = [];
    dyn.push(gsap.fromTo("#dests .dest", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: .9, stagger: .08, ease: "power3.out", delay: .5, clearProps: "transform,opacity" }));
    dyn.push(gsap.fromTo("#week .day", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .5, stagger: .05, clearProps: "transform,opacity", scrollTrigger: { trigger: "#week", start: "top 85%" } }));
    dyn.push(gsap.fromTo("#plans .plan", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: .7, stagger: .1, clearProps: "transform,opacity", scrollTrigger: { trigger: "#plans", start: "top 85%" } }));
  }
  bindDynamic();
  ready = true;
  var rz, lw = innerWidth; window.addEventListener("resize", function () { if (innerWidth === lw) return; lw = innerWidth; clearTimeout(rz); rz = setTimeout(function () { ScrollTrigger.refresh(); }, 300); });
})();
