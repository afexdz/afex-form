/* Moutafawiq : contenu FR / AR / EN, exercice de démonstration, niveaux, simulateur de moyenne, espace parents, direct, tarifs (GSAP + ScrollTrigger + Lenis, en local) */
(function () {
  var doc = document.documentElement;
  var STATIC = doc.classList.contains("static") || !window.gsap || !window.ScrollTrigger;
  if (STATIC) doc.classList.add("static");
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  var P = { feuille: [960, "Annie Spratt"], pense: [720, "Vitaly Gariev"], lunettes: [720, "Vitaly Gariev"], fille: [853, "Tong Nguyen van"], tablette: [853, "Patricia Prudente"], cahier: [720, "Vitaly Gariev"], visio: [853, "Thomas Park"], casque: [853, "Thomas Park"], laptop: [720, "Vitaly Gariev"], live: [960, "YY TEOH"], eleve: [720, "Vitaly Gariev"], parent: [720, "Vitaly Gariev"], main: [851, "Rohit Farmer"], hijab: [853, "Mufid Majnun"], duo: [853, "Fotos"], tableau: [720, "Vitaly Gariev"], enfant: [1036, "Carl Jorgensen"], amies: [720, "Vitaly Gariev"] };
  function img(n, sizes) { return '<img src="assets/img/' + n + '-640.webp" srcset="assets/img/' + n + '-640.webp 640w, assets/img/' + n + '-1280.webp 1280w" sizes="' + (sizes || "33vw") + '" width="1280" height="' + P[n][0] + '" alt="" loading="lazy" decoding="async">'; }
  function L(o) { return o[lang]; }
  function cur() { return lang === "ar" ? "دج" : "DA"; }
  function da(n) { return "⁦" + n.toLocaleString("fr-FR").replace(/ | /g, " ") + "⁩"; }
  function nb(n, d) { var s = n.toFixed(d === undefined ? 2 : d); return lang === "en" ? s : s.replace(".", ","); }
  var CK = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg>';

  var I = {
    fr: { fqPh: "Rechercher une question (paiement, téléphone, profs…)", fqNone: "Aucune question ne correspond. Écrivez-nous sur WhatsApp.", help: "Besoin d’aide ?", fcol: ["Niveaux", "Outils", "Aide"], flinks: [["Primaire", "#niveaux"], ["5e année", "#niveaux"], ["BEM", "#niveaux"], ["Simulateur de moyenne", "#moyenne"], ["Espace parents", "#parents"], ["Cours en direct", "#direct"], ["Questions fréquentes", "#faq"], ["Tarifs", "#tarifs"], ["Essai gratuit", "#essai"]], demo0: "Site de démonstration : plateforme fictive, tarifs et places donnés à titre d’exemple.", demo1: "Voir les autres modèles",
      brand: "Moutafawiq", n1: "Niveaux", n2: "Simulateur", n3: "Parents", n4: "En direct", n5: "Tarifs", cta0: "7 jours gratuits",
      kick: "Programme algérien, du primaire au BEM", h1a: "15 minutes par jour", h1b: "pour réussir.", lede: "Des exercices qui se corrigent tout seuls, des vidéos courtes, le suivi des notes pour les parents et des cours en direct le week-end. Pour le primaire, l’examen de 5e et le BEM.",
      cta1: "Essayer 7 jours gratuits", cta2: "Simuler ma moyenne", streakL: "Série de jours",
      subjQ: ["Maths", "Arabe", "Français"], qOf: "Question {n} sur 3", good: "Bravo ! +10 XP", bad: "Pas tout à fait.", next: "Suivante", again: "Recommencer", done: "Série terminée : {n} sur 3. Dans l’appli, il y a plus de 4 000 exercices comme celui-ci.",
      lvK: "Tout le programme", lvH: "Choisissez le niveau de votre enfant", lvP: "Chaque matière est découpée en chapitres, avec une vidéo, des exercices corrigés et un petit test à la fin.",
      chap: "chapitres", exs: "exercices", vids: "vidéos", exT: "Examen de fin de cycle", exNone: "Pas d’examen officiel cette année", exNoneP: "On consolide les bases avec un test à la fin de chaque chapitre, et un bilan chaque trimestre.", ex5: "Examen de 5e année", exB: "Brevet (BEM)", exP: "Date indicative : juin 2027. Examens blancs chaque mois à partir de janvier.", d: "jours", h: "heures", m: "min",
      smK: "Simulateur", smH: "Combien faut-il pour être admis ?", smP: "Glissez les notes : la moyenne se calcule avec les coefficients, et on vous dit si c’est suffisant.", ex: ["Examen de 5e", "BEM"], coef: "coef.",
      annual: "Moyenne annuelle", examAvg: "Moyenne de l’examen", final: "Moyenne finale", ok: "Admis", ko: "Pas encore", res5: "Notes sur 10. Passage en 1re année moyenne avec une moyenne finale de 5/10 ou plus (examen et moyenne annuelle). Coefficients indicatifs.", resB: "Notes sur 20. La moyenne finale réunit l’examen et la moyenne annuelle ; 10/20 suffit. Coefficients indicatifs.",
      paK: "Espace parents", paH: "Vous voyez où il en est, chaque semaine", paP: "Les notes des tests, les chapitres à revoir et le temps passé. Et une alerte quand quelque chose coince.", chT: "Les notes du trimestre", chS: "Exemple : élève de 4AM", exN: "Données d’exemple pour montrer l’espace parents.", wkT: "À revoir cette semaine", tmT: "Temps de révision", alert: "Aucune révision depuis 3 jours en sciences physiques. Un rappel a été envoyé.", tri: ["Trim. 1", "Trim. 2", "Trim. 3"], wd: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"], mn: "min",
      liK: "Cours en direct", liH: "Le week-end, un prof en direct", liP: "Vendredi et samedi, des classes de 30 élèves au plus. Votre enfant pose ses questions à l’écrit ou au micro.", lf: ["Tous", "5e année", "BEM"], fri: "Vendredi", sat: "Samedi", seats: "{n} places sur 30", book: "Réserver", booked: "Réservé", live: "DIRECT",
      prK: "Tarifs", prH: "Un abonnement, toutes les matières", per: ["Au mois", "Au trimestre"], save: "−15 %", perM: "DA / mois", hot: "Le plus choisi", choose: "Commencer l’essai", payL: "Paiement :", pay3: "Carte Edahabia", pay4: "CIB",
      trK: "Sans carte, sans engagement", trH: "7 jours pour essayer", trP: "Créez le compte de votre enfant : tous les exercices et un cours en direct sont ouverts pendant une semaine.", fWho: "Je suis", who: ["Un parent", "Un élève"], l1: "Votre nom", l2: "Téléphone", l3: "Niveau de l’enfant", send: "Créer le compte d’essai",
      err: "Indiquez votre nom et un numéro valide.", demo: "Démo AFEX Digital : aucun compte n’a été créé, ce formulaire n’est pas encore connecté.", bookDemo: "Démo : la place est marquée, mais aucune réservation réelle n’est envoyée.",
      fqK: "Questions", fqH: "Les parents nous demandent", foA: "Plateforme fictive de soutien scolaire en ligne, Algérie.", foH: "Assistance", foHV: "Tous les jours, 9 h à 21 h", foC: "Contact", foCV: "WhatsApp et téléphone : numéro de démonstration",
      foot: "© 2026 Moutafawiq, plateforme fictive.", by: "Site réalisé par", photos: "Photos : Unsplash,", lang: "Langue", waDemo: "Démo AFEX Digital : le numéro WhatsApp n’est pas encore connecté.",
      duoAlt: "Deux élèves lisent ensemble un cahier", parentAlt: "Un père aide son fils devant l’ordinateur", title: "Moutafawiq, soutien scolaire en ligne du primaire au BEM" },
    ar: { fqPh: "ابحث عن سؤال (الدفع، الهاتف، الأساتذة…)", fqNone: "لا يوجد سؤال مطابق. راسلنا على واتساب.", help: "تحتاج مساعدة؟", fcol: ["المستويات", "الأدوات", "المساعدة"], flinks: [["الابتدائي", "#niveaux"], ["السنة الخامسة", "#niveaux"], ["الشهادة", "#niveaux"], ["محاكي المعدّل", "#moyenne"], ["فضاء الأولياء", "#parents"], ["الدروس المباشرة", "#direct"], ["الأسئلة الشائعة", "#faq"], ["الأسعار", "#tarifs"], ["التجربة المجانية", "#essai"]], demo0: "موقع تجريبي: منصة وهمية، الأسعار والأماكن للتوضيح فقط.", demo1: "شاهد النماذج الأخرى",
      brand: "متفوّق", n1: "المستويات", n2: "المحاكي", n3: "الأولياء", n4: "مباشر", n5: "الأسعار", cta0: "7 أيام مجانًا",
      kick: "البرنامج الجزائري، من الابتدائي إلى شهادة التعليم المتوسط", h1a: "15 دقيقة يوميًا", h1b: "للنجاح.", lede: "تمارين تُصحَّح تلقائيًا، فيديوهات قصيرة، متابعة النقاط للأولياء ودروس مباشرة نهاية الأسبوع. للابتدائي وامتحان السنة الخامسة وشهادة التعليم المتوسط.",
      cta1: "جرّب 7 أيام مجانًا", cta2: "احسب معدّلي", streakL: "أيام متتالية",
      subjQ: ["رياضيات", "عربية", "فرنسية"], qOf: "السؤال {n} من 3", good: "أحسنت! +10 نقاط", bad: "ليس تمامًا.", next: "التالي", again: "أعد", done: "انتهت السلسلة: {n} من 3. في التطبيق أكثر من 4 000 تمرين مثل هذا.",
      lvK: "كل البرنامج", lvH: "اختر مستوى طفلك", lvP: "كل مادة مقسّمة إلى فصول، مع فيديو وتمارين مصحّحة واختبار قصير في النهاية.",
      chap: "فصلًا", exs: "تمرينًا", vids: "فيديو", exT: "امتحان نهاية الطور", exNone: "لا يوجد امتحان رسمي هذه السنة", exNoneP: "نرسّخ الأساسيات باختبار في نهاية كل فصل وحصيلة كل ثلاثي.", ex5: "امتحان السنة الخامسة", exB: "شهادة التعليم المتوسط", exP: "تاريخ تقريبي: جوان 2027. امتحانات تجريبية كل شهر ابتداءً من جانفي.", d: "يوم", h: "ساعة", m: "دقيقة",
      smK: "المحاكي", smH: "كم يلزم للنجاح؟", smP: "حرّك النقاط: يُحسب المعدّل بالمعاملات، ونخبرك إن كان كافيًا.", ex: ["امتحان الخامسة", "شهادة التعليم المتوسط"], coef: "معامل",
      annual: "المعدّل السنوي", examAvg: "معدّل الامتحان", final: "المعدّل النهائي", ok: "ناجح", ko: "ليس بعد", res5: "النقاط على 10. الانتقال إلى السنة الأولى متوسط بمعدّل نهائي 5/10 أو أكثر (الامتحان والمعدّل السنوي). معاملات تقريبية.", resB: "النقاط على 20. يجمع المعدّل النهائي بين الامتحان والمعدّل السنوي؛ 10/20 تكفي. معاملات تقريبية.",
      paK: "فضاء الأولياء", paH: "ترون مستواه كل أسبوع", paP: "نقاط الاختبارات، الفصول التي يجب مراجعتها والوقت المستغرق. وتنبيه عندما يتعثّر شيء ما.", chT: "نقاط الثلاثي", chS: "مثال: تلميذ في الرابعة متوسط", exN: "بيانات للتوضيح فقط.", wkT: "للمراجعة هذا الأسبوع", tmT: "وقت المراجعة", alert: "لا مراجعة منذ 3 أيام في العلوم الفيزيائية. أُرسل تذكير.", tri: ["ف 1", "ف 2", "ف 3"], wd: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"], mn: "د",
      liK: "دروس مباشرة", liH: "في نهاية الأسبوع، أستاذ على المباشر", liP: "الجمعة والسبت، أقسام من 30 تلميذًا على الأكثر. يطرح طفلك أسئلته كتابةً أو بالميكروفون.", lf: ["الكل", "السنة الخامسة", "الشهادة"], fri: "الجمعة", sat: "السبت", seats: "{n} أماكن من 30", book: "احجز", booked: "محجوز", live: "مباشر",
      prK: "الأسعار", prH: "اشتراك واحد لكل المواد", per: ["شهري", "ثلاثي"], save: "−15 %", perM: "دج / الشهر", hot: "الأكثر اختيارًا", choose: "ابدأ التجربة", payL: "الدفع:", pay3: "بطاقة الذهبية", pay4: "CIB",
      trK: "بلا بطاقة وبلا التزام", trH: "7 أيام للتجربة", trP: "أنشئ حساب طفلك: كل التمارين ودرس مباشر مفتوحة لمدة أسبوع.", fWho: "أنا", who: ["وليّ", "تلميذ"], l1: "اسمك", l2: "الهاتف", l3: "مستوى الطفل", send: "أنشئ حساب التجربة",
      err: "أدخل اسمك ورقمًا صحيحًا.", demo: "عرض AFEX Digital: لم يُنشأ أي حساب، هذا النموذج غير متصل بعد.", bookDemo: "عرض: عُلّم المكان، لكن لم يُرسل أي حجز فعلي.",
      fqK: "أسئلة", fqH: "يسألنا الأولياء", foA: "منصة وهمية للدعم المدرسي عبر الإنترنت، الجزائر.", foH: "المساعدة", foHV: "كل يوم، من 9:00 إلى 21:00", foC: "الاتصال", foCV: "واتساب والهاتف: رقم تجريبي",
      foot: "© 2026 متفوّق، منصة وهمية.", by: "موقع من إنجاز", photos: "الصور: Unsplash،", lang: "اللغة", waDemo: "عرض AFEX Digital: رقم واتساب غير متصل بعد.",
      duoAlt: "تلميذتان تقرآن دفترًا معًا", parentAlt: "أب يساعد ابنه أمام الحاسوب", title: "متفوّق، الدعم المدرسي عبر الإنترنت من الابتدائي إلى الشهادة" },
    en: { fqPh: "Search a question (payment, phone, teachers…)", fqNone: "No matching question. Message us on WhatsApp.", help: "Need help?", fcol: ["Levels", "Tools", "Help"], flinks: [["Primary", "#niveaux"], ["5th year", "#niveaux"], ["BEM", "#niveaux"], ["Average simulator", "#moyenne"], ["Parents’ space", "#parents"], ["Live classes", "#direct"], ["FAQ", "#faq"], ["Pricing", "#tarifs"], ["Free trial", "#essai"]], demo0: "Demo website: a fictional platform, prices and places are examples.", demo1: "See the other templates",
      brand: "Moutafawiq", n1: "Levels", n2: "Simulator", n3: "Parents", n4: "Live", n5: "Pricing", cta0: "7 days free",
      kick: "Algerian curriculum, primary to BEM", h1a: "15 minutes a day", h1b: "to succeed.", lede: "Self-marking exercises, short videos, grade tracking for parents and live weekend classes. For primary school, the 5th-year exam and the BEM.",
      cta1: "Try 7 days free", cta2: "Simulate my average", streakL: "Day streak",
      subjQ: ["Maths", "Arabic", "French"], qOf: "Question {n} of 3", good: "Well done! +10 XP", bad: "Not quite.", next: "Next", again: "Start again", done: "Set finished: {n} of 3. The app has over 4,000 exercises like this.",
      lvK: "The whole curriculum", lvH: "Pick your child’s level", lvP: "Every subject is split into chapters, each with a video, corrected exercises and a short test at the end.",
      chap: "chapters", exs: "exercises", vids: "videos", exT: "End-of-cycle exam", exNone: "No official exam this year", exNoneP: "We strengthen the basics with a test after each chapter and a review every term.", ex5: "5th-year exam", exB: "BEM certificate", exP: "Indicative date: June 2027. Mock exams every month from January.", d: "days", h: "hours", m: "min",
      smK: "Simulator", smH: "How much do you need to pass?", smP: "Slide the marks: the average is weighted by coefficient, and we tell you if it’s enough.", ex: ["5th-year exam", "BEM"], coef: "coef.",
      annual: "Annual average", examAvg: "Exam average", final: "Final average", ok: "Pass", ko: "Not yet", res5: "Marks out of 10. Moving up to middle school needs a final average of 5/10 or more (exam plus annual average). Indicative coefficients.", resB: "Marks out of 20. The final average combines the exam and the annual average; 10/20 is enough. Indicative coefficients.",
      paK: "Parents’ space", paH: "See where they stand, every week", paP: "Test marks, chapters to review and time spent. And an alert when something gets stuck.", chT: "This term’s marks", chS: "Example: 4AM pupil", exN: "Sample data to show the parents’ space.", wkT: "To review this week", tmT: "Revision time", alert: "No physics revision for 3 days. A reminder was sent.", tri: ["Term 1", "Term 2", "Term 3"], wd: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], mn: "min",
      liK: "Live classes", liH: "At the weekend, a live teacher", liP: "Friday and Saturday, classes of 30 pupils at most. Your child asks questions in the chat or on the mic.", lf: ["All", "5th year", "BEM"], fri: "Friday", sat: "Saturday", seats: "{n} of 30 seats", book: "Book", booked: "Booked", live: "LIVE",
      prK: "Pricing", prH: "One subscription, every subject", per: ["Monthly", "Termly"], save: "−15%", perM: "DA / month", hot: "Most chosen", choose: "Start the trial", payL: "Payment:", pay3: "Edahabia card", pay4: "CIB",
      trK: "No card, no commitment", trH: "7 days to try", trP: "Create your child’s account: every exercise and one live class are open for a week.", fWho: "I am", who: ["A parent", "A pupil"], l1: "Your name", l2: "Phone", l3: "Child’s level", send: "Create the trial account",
      err: "Enter your name and a valid number.", demo: "AFEX Digital demo: no account was created, this form is not connected yet.", bookDemo: "Demo: the seat is marked, but no real booking is sent.",
      fqK: "Questions", fqH: "Parents ask us", foA: "A fictional online tutoring platform, Algeria.", foH: "Support", foHV: "Every day, 9:00 to 21:00", foC: "Contact", foCV: "WhatsApp and phone: demo number",
      foot: "© 2026 Moutafawiq, a fictional platform.", by: "Website by", photos: "Photos: Unsplash,", lang: "Language", waDemo: "AFEX Digital demo: the WhatsApp number is not connected yet.",
      duoAlt: "Two pupils reading a notebook together", parentAlt: "A father helps his son at the computer", title: "Moutafawiq, online tutoring from primary to BEM" }
  };

  /* demo questions: maths and French are written in their language; Arabic questions stay in Arabic */
  var QS = [
    [{ q: { fr: "Combien font les 3/4 de 120 ?", ar: "كم يساوي 3/4 من 120؟", en: "What is 3/4 of 120?" }, a: ["80", "90", "100", "60"], c: 1, e: { fr: "120 ÷ 4 = 30, puis 30 × 3 = 90.", ar: "120 ÷ 4 = 30، ثم 30 × 3 = 90.", en: "120 ÷ 4 = 30, then 30 × 3 = 90." }, lv: "5AP" },
     { q: { fr: "Un cartable coûte 2 400 DA, soldé à −25 %. Nouveau prix ?", ar: "محفظة ثمنها 2 400 دج، بتخفيض 25 %. ما ثمنها الجديد؟", en: "A school bag costs 2,400 DA with 25% off. New price?" }, a: ["1 800", "2 000", "600", "1 900"], c: 0, e: { fr: "25 % de 2 400 = 600, donc 2 400 − 600 = 1 800 DA.", ar: "25 % من 2 400 = 600، إذن 2 400 − 600 = 1 800 دج.", en: "25% of 2,400 = 600, so 2,400 − 600 = 1,800 DA." }, lv: "1AM" },
     { q: { fr: "Résous : 2x + 6 = 20", ar: "حلّ المعادلة: 2x + 6 = 20", en: "Solve: 2x + 6 = 20" }, a: ["x = 7", "x = 13", "x = 8", "x = 10"], c: 0, e: { fr: "2x = 20 − 6 = 14, donc x = 7.", ar: "2x = 20 − 6 = 14، إذن x = 7.", en: "2x = 20 − 6 = 14, so x = 7." }, lv: "4AM" }],
    [{ q: { fr: "ما جمع كلمة «كتاب»؟", ar: "ما جمع كلمة «كتاب»؟", en: "ما جمع كلمة «كتاب»؟" }, a: ["كُتُب", "كاتبون", "مكتبة", "كتابات"], c: 0, e: { fr: "« كتب » est le pluriel brisé de « كتاب ».", ar: "«كُتُب» جمع تكسير لكلمة «كتاب».", en: "“كتب” is the broken plural of “كتاب”." }, lv: "3AP", ar: true },
     { q: { fr: "ما إعراب «الطالبُ» في: الطالبُ مجتهدٌ؟", ar: "ما إعراب «الطالبُ» في: الطالبُ مجتهدٌ؟", en: "ما إعراب «الطالبُ» في: الطالبُ مجتهدٌ؟" }, a: ["مبتدأ مرفوع", "خبر مرفوع", "فاعل مرفوع", "مفعول به"], c: 0, e: { fr: "La phrase est nominale : le premier nom est le مبتدأ.", ar: "الجملة اسمية: الاسم الأول مبتدأ مرفوع بالضمة.", en: "It’s a nominal sentence: the first noun is the مبتدأ." }, lv: "1AM", ar: true },
     { q: { fr: "ما ضدّ كلمة «طويل»؟", ar: "ما ضدّ كلمة «طويل»؟", en: "ما ضدّ كلمة «طويل»؟" }, a: ["قصير", "عريض", "كبير", "بعيد"], c: 0, e: { fr: "« طويل » (long) a pour contraire « قصير » (court).", ar: "ضدّ «طويل» هو «قصير».", en: "“طويل” (long) is the opposite of “قصير” (short)." }, lv: "2AP", ar: true }],
    [{ q: { fr: "Le pluriel de « un cheval » :", ar: "Le pluriel de « un cheval » :", en: "Le pluriel de « un cheval » :" }, a: ["des chevals", "des chevaux", "des chevaus", "des chevalx"], c: 1, e: { fr: "Les noms en -al font leur pluriel en -aux.", ar: "الأسماء المنتهية بـ -al تُجمع بـ -aux.", en: "Nouns ending in -al take -aux in the plural." }, lv: "4AP", fr: true },
     { q: { fr: "« Finir » au présent avec « nous » :", ar: "« Finir » au présent avec « nous » :", en: "« Finir » au présent avec « nous » :" }, a: ["nous finons", "nous finissons", "nous finirons", "nous finissions"], c: 1, e: { fr: "Verbe du 2e groupe : nous finissons.", ar: "فعل من المجموعة الثانية: nous finissons.", en: "2nd-group verb: nous finissons." }, lv: "5AP", fr: true },
     { q: { fr: "Lequel est un adjectif ?", ar: "Lequel est un adjectif ?", en: "Lequel est un adjectif ?" }, a: ["rapidement", "rapide", "rapidité", "courir"], c: 1, e: { fr: "« Rapide » décrit un nom : c’est un adjectif.", ar: "«rapide» يصف اسمًا: إنه صفة.", en: "“Rapide” describes a noun: it’s an adjective." }, lv: "2AM", fr: true }]
  ];
  var LV = ["1AP", "2AP", "3AP", "4AP", "5AP", "1AM", "2AM", "3AM", "4AM"];
  var SUB = {
    ar: [{ fr: "Arabe", ar: "اللغة العربية", en: "Arabic" }, "#3346D3", "ع"], ma: [{ fr: "Mathématiques", ar: "الرياضيات", en: "Maths" }, "#FF7A1A", "∑"], fr: [{ fr: "Français", ar: "الفرنسية", en: "French" }, "#1FBF75", "Fr"], en: [{ fr: "Anglais", ar: "الإنجليزية", en: "English" }, "#9B5CF6", "En"],
    is: [{ fr: "Éducation islamique", ar: "التربية الإسلامية", en: "Islamic studies" }, "#0E9AA7", "ت"], sc: [{ fr: "Éveil scientifique", ar: "التربية العلمية", en: "Science" }, "#F2545B", "⚗"], ph: [{ fr: "Sciences physiques", ar: "العلوم الفيزيائية", en: "Physics" }, "#F2545B", "φ"], sn: [{ fr: "Sciences naturelles", ar: "العلوم الطبيعية", en: "Natural sciences" }, "#1C9C5A", "✿"], hg: [{ fr: "Histoire-géographie", ar: "التاريخ والجغرافيا", en: "History-geography" }, "#B07A12", "⌖"]
  };
  function subjectsOf(i) { if (i < 2) return ["ar", "ma", "is", "sc"]; if (i < 5) return ["ar", "ma", "fr", "en", "is", "sc", "hg"]; return ["ar", "ma", "fr", "en", "ph", "sn", "hg", "is"]; }
  var EXAMS = {
    0: { subj: [["ar", 1], ["ma", 1], ["fr", 1]], max: 10, pass: 5, def: [7, 6, 5], ann: 6.4 },
    1: { subj: [["ar", 5], ["ma", 4], ["fr", 3], ["en", 2], ["hg", 3], ["is", 2], ["ph", 2], ["sn", 2]], max: 20, pass: 10, def: [12, 9, 11, 13, 10, 14, 8, 11], ann: 10.8 }
  };
  var CHART = { ma: [9.5, 11, 12.5], ar: [12, 12.5, 14], fr: [10, 9, 11.5], ph: [8, 9.5, 9] };
  var WEAK = [[{ fr: "Physique : l’électricité", ar: "الفيزياء: الكهرباء", en: "Physics: electricity" }, 35, "#F2545B"], [{ fr: "Maths : le théorème de Thalès", ar: "الرياضيات: مبرهنة طاليس", en: "Maths: Thales’ theorem" }, 55, "#FF7A1A"], [{ fr: "Français : le discours indirect", ar: "الفرنسية: الكلام غير المباشر", en: "French: reported speech" }, 70, "#1FBF75"]];
  var WEEK = [25, 40, 15, 0, 35, 60, 45];
  var LIVE = [
    { d: 0, t: "10:00", lv: 0, s: "ma", img: "visio", left: 7 }, { d: 0, t: "14:00", lv: 1, s: "ma", img: "laptop", left: 3 }, { d: 0, t: "16:30", lv: 1, s: "ar", img: "hijab", left: 12 },
    { d: 1, t: "10:00", lv: 0, s: "fr", img: "casque", left: 9 }, { d: 1, t: "14:00", lv: 1, s: "ph", img: "live", left: 2 }, { d: 1, t: "16:30", lv: 1, s: "en", img: "main", left: 15 }
  ];
  var PLANS = [
    { t: { fr: "Essentiel", ar: "الأساسي", en: "Essential" }, f4: { fr: "Pour réviser chaque jour", ar: "للمراجعة كل يوم", en: "For daily revision" }, p: 1500, l: { fr: ["Tous les exercices corrigés", "Vidéos des chapitres", "Espace parents"], ar: ["كل التمارين المصحّحة", "فيديوهات الفصول", "فضاء الأولياء"], en: ["All corrected exercises", "Chapter videos", "Parents’ space"] } },
    { hot: true, t: { fr: "Réussite", ar: "النجاح", en: "Success" }, f4: { fr: "Le plus complet", ar: "الأكثر شمولًا", en: "The most complete" }, p: 2900, l: { fr: ["Tout l’Essentiel", "2 cours en direct par semaine", "Replays des cours", "Alertes aux parents"], ar: ["كل ما في الأساسي", "درسان مباشران أسبوعيًا", "إعادة الدروس", "تنبيهات للأولياء"], en: ["Everything in Essential", "2 live classes a week", "Class replays", "Parent alerts"] } },
    { t: { fr: "Objectif examen", ar: "هدف الامتحان", en: "Exam goal" }, f4: { fr: "5e année ou BEM", ar: "الخامسة أو الشهادة", en: "5th year or BEM" }, p: 3900, l: { fr: ["Toute la formule Réussite", "Un examen blanc par mois", "Copies corrigées par un professeur", "Plan de révision jusqu’à juin"], ar: ["كل صيغة النجاح", "امتحان تجريبي كل شهر", "أوراق يصحّحها أستاذ", "خطة مراجعة حتى جوان"], en: ["Everything in Success", "One mock exam a month", "Papers marked by a teacher", "Revision plan until June"] } }
  ];
  var FAQ = [
    [{ fr: "Le contenu suit-il le programme officiel ?", ar: "هل المحتوى يتبع البرنامج الرسمي؟", en: "Does it follow the official curriculum?" }, { fr: "Oui, chapitre par chapitre, du 1AP au 4AM, avec le même vocabulaire que les manuels scolaires.", ar: "نعم، فصلًا بفصل، من السنة الأولى ابتدائي إلى الرابعة متوسط، بنفس مصطلحات الكتب المدرسية.", en: "Yes, chapter by chapter from 1AP to 4AM, using the textbooks’ vocabulary." }],
    [{ fr: "Mon enfant peut-il l’utiliser sur téléphone ?", ar: "هل يمكن لطفلي استعماله على الهاتف؟", en: "Can my child use it on a phone?" }, { fr: "Oui, sur téléphone, tablette ou ordinateur. Les vidéos se règlent en qualité basse pour économiser la connexion.", ar: "نعم، على الهاتف أو اللوحة أو الحاسوب. يمكن خفض جودة الفيديو لتوفير الأنترنت.", en: "Yes, on a phone, tablet or computer. Videos can be set to low quality to save data." }],
    [{ fr: "Combien de temps par jour ?", ar: "كم من الوقت يوميًا؟", en: "How much time per day?" }, { fr: "15 à 20 minutes suffisent : une vidéo courte et une série d’exercices. Les séries de jours encouragent la régularité.", ar: "15 إلى 20 دقيقة تكفي: فيديو قصير وسلسلة تمارين. الأيام المتتالية تشجّع على الانتظام.", en: "15 to 20 minutes is enough: a short video and a set of exercises. Day streaks encourage regularity." }],
    [{ fr: "Qui sont les professeurs des cours en direct ?", ar: "من هم أساتذة الدروس المباشرة؟", en: "Who teaches the live classes?" }, { fr: "Des enseignants en exercice dans le primaire et le moyen, qui préparent aussi les examens blancs.", ar: "أساتذة يمارسون التدريس في الابتدائي والمتوسط، ويحضّرون أيضًا الامتحانات التجريبية.", en: "Practising primary and middle-school teachers, who also prepare the mock exams." }],
    [{ fr: "Puis-je avoir plusieurs enfants sur un compte ?", ar: "هل يمكن تسجيل عدة أطفال في حساب واحد؟", en: "Can I have several children on one account?" }, { fr: "Oui, jusqu’à trois profils par compte parent, chacun avec son niveau et son suivi. Le deuxième profil est à −30 %.", ar: "نعم، حتى ثلاثة ملفات لكل حساب وليّ، لكل واحد مستواه ومتابعته. الملف الثاني بتخفيض 30 %.", en: "Yes, up to three profiles per parent account, each with its own level and tracking. The second profile is 30% off." }],
    [{ fr: "Comment payer ?", ar: "كيف أدفع؟", en: "How do I pay?" }, { fr: "Par BaridiMob, virement CCP, carte Edahabia ou CIB. Pas d’engagement : vous arrêtez quand vous voulez.", ar: "عبر بريدي موب، تحويل CCP، البطاقة الذهبية أو CIB. بلا التزام: توقّف متى شئت.", en: "By BaridiMob, CCP transfer, Edahabia or CIB card. No commitment: stop whenever you like." }]
  ];

  var lang = "fr", qs = 0, qi = 0, score = 0, xp = 120, streak = 3, lv = 8, exT = 1, marks = {}, annual = {}, chS = "ma", lf = 0, per = 0, who = 0, booked = {}, ready = false, dyn = [], shown = [0, 0, 0], gShown = 0;
  try { var sv = localStorage.getItem("moutafawiq-lang"); if (I[sv]) lang = sv; } catch (e) {}
  [0, 1].forEach(function (k) { marks[k] = EXAMS[k].def.slice(); annual[k] = EXAMS[k].ann; });
  var EXAM_DATE = new Date(2027, 5, 1, 8, 0, 0);
  function openWa() { var m = { fr: "Bonjour AFEX Digital, je viens du site de démonstration « " + document.title + " ». Je veux un site comme celui-ci.", ar: "مرحبًا AFEX Digital، أتيت من الموقع التجريبي « " + document.title + " ». أريد موقعًا مثله.", en: "Hello AFEX Digital, I found the demo site “" + document.title + "”. I would like a website like this one." }; window.open("https://wa.me/213657944090?text=" + encodeURIComponent(m[lang] || m.fr), "_blank", "noopener"); }
  function toast(t) { var el = $("#toast"); el.textContent = t; el.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(function () { el.classList.remove("on"); }, 4200); }

  /* the demo quiz */
  function renderQuiz() {
    var t = I[lang];
    $("#qtabs").innerHTML = t.subjQ.map(function (s, i) { return '<button type="button" role="tab" aria-selected="' + (i === qs) + '" data-s="' + i + '">' + s + "</button>"; }).join("");
    showQ();
  }
  function showQ() {
    var t = I[lang], q = QS[qs][qi];
    $("#qbar").style.transform = "scaleX(" + ((qi + 1) / 3) + ")";
    var qd = $("#qq"); qd.innerHTML = "<small>" + t.qOf.replace("{n}", qi + 1) + " · " + q.lv + "</small><span" + (q.ar ? ' lang="ar" dir="rtl" style="display:block"' : q.fr ? ' lang="fr" dir="ltr" style="display:block"' : "") + ">" + L(q.q) + "</span>";
    $("#qa").innerHTML = q.a.map(function (a, i) { return '<button type="button" data-a="' + i + '"' + (q.ar ? ' lang="ar"' : "") + ">" + a + "</button>"; }).join("");
    $("#qfb").className = "fb"; $("#qfb").innerHTML = "";
    if (!STATIC) gsap.from("#qa button", { y: 14, opacity: 0, duration: .35, stagger: .05, ease: "power2.out" });
  }
  function answer(i) {
    var t = I[lang], q = QS[qs][qi], btns = $$("#qa button"), ok = i === q.c;
    btns.forEach(function (b, k) { b.disabled = true; if (k === q.c) b.classList.add("ok"); else if (k === i) b.classList.add("ko"); });
    var last = qi === 2;
    if (ok) { score++; xp += 10; $("#xp").textContent = xp; confetti(); if (!STATIC) gsap.fromTo(".xp", { scale: 1.5 }, { scale: 1, duration: .5, ease: "back.out(3)" }); }
    else { $("#qz").classList.remove("shake"); void $("#qz").offsetWidth; $("#qz").classList.add("shake"); }
    var fb = $("#qfb"); fb.className = "fb " + (ok ? "ok" : "ko");
    fb.innerHTML = "<span>" + (ok ? t.good : t.bad + " " + L(q.e)) + '</span><button type="button" id="qNext">' + (last ? t.again : t.next) + "</button>";
    if (last) { setTimeout(function () { if (!fb.isConnected) return; fb.firstChild.textContent = t.done.replace("{n}", score); if (score === 3) { streak++; $("#streakN").textContent = streak; if (!STATIC) gsap.fromTo("#streak", { scale: 1.4, rotation: -20 }, { scale: 1, rotation: -6, duration: .6, ease: "back.out(3)" }); } }, 1400); }
  }
  function confetti() {
    if (STATIC) return; var box = $("#conf"), cols = ["#D7F75B", "#FF7A1A", "#3346D3", "#1FBF75", "#F2545B"], html = "";
    for (var k = 0; k < 26; k++) html += '<i style="left:50%;top:40%;background:' + cols[k % 5] + '"></i>';
    box.innerHTML = html;
    $$("i", box).forEach(function (p) { gsap.fromTo(p, { x: 0, y: 0, rotation: 0, opacity: 1 }, { x: gsap.utils.random(-220, 220), y: gsap.utils.random(-200, 80), rotation: gsap.utils.random(-360, 360), opacity: 0, duration: gsap.utils.random(.8, 1.4), ease: "power3.out" }); });
  }
  /* levels */
  function renderLevels() {
    $("#lvtabs").innerHTML = LV.map(function (l, i) { return (i === 5 ? '<span class="sep" aria-hidden="true"></span>' : "") + '<button type="button" data-l="' + i + '" aria-pressed="' + (i === lv) + '">' + l + "</button>"; }).join("");
    showLevel(false);
  }
  function showLevel(anim) {
    var t = I[lang], ss = subjectsOf(lv);
    $("#subs").innerHTML = ss.map(function (k, j) { var s = SUB[k], ch = 6 + ((lv * 3 + j * 5) % 7), ex = ch * (18 + (lv + j) % 9), pr = 20 + ((lv * 13 + j * 17) % 70); return '<div class="sb"><i style="background:' + s[1] + '">' + s[2] + "</i><span><b>" + L(s[0]) + "</b><small>" + ch + " " + t.chap + " · " + ex + " " + t.exs + " · " + ch + " " + t.vids + '</small></span><div class="pg"><span style="background:' + s[1] + ";transform:scaleX(" + (pr / 100) + ')"></span></div></div>'; }).join("");
    var e = $("#exam"), has = lv === 4 || lv === 8;
    e.innerHTML = has ? "<small style=\"color:var(--lime);font-weight:700\">" + t.exT + "</small><h3>" + (lv === 4 ? t.ex5 : t.exB) + '</h3><div class="cdn" id="cdn"><div><b>0</b><span>' + t.d + "</span></div><div><b>0</b><span>" + t.h + "</span></div><div><b>0</b><span>" + t.m + "</span></div></div><p>" + t.exP + '</p><div class="img">' + img(lv === 4 ? "fille" : "tableau", "40vw") + "</div>"
      : "<small style=\"color:var(--lime);font-weight:700\">" + LV[lv] + "</small><h3>" + t.exNone + "</h3><p>" + t.exNoneP + '</p><div class="img">' + img(lv < 5 ? "enfant" : "eleve", "40vw") + "</div>";
    tickExam();
    if (anim && !STATIC) { gsap.from("#subs .sb", { y: 20, opacity: 0, duration: .4, stagger: .04, ease: "power2.out" }); gsap.from("#subs .pg span", { scaleX: 0, duration: .8, stagger: .04, ease: "power3.out" }); gsap.from("#exam > *", { y: 16, opacity: 0, duration: .45, stagger: .06 }); }
  }
  function tickExam() { var c = $("#cdn"); if (!c) return; var ms = Math.max(0, EXAM_DATE - new Date()), v = [Math.floor(ms / 864e5), Math.floor(ms / 36e5) % 24, Math.floor(ms / 6e4) % 60]; $$("b", c).forEach(function (b, i) { b.textContent = v[i]; }); }
  /* average simulator */
  function renderSim() {
    var t = I[lang];
    $("#exSeg").innerHTML = t.ex.map(function (x, i) { return '<button type="button" data-e="' + i + '" aria-pressed="' + (i === exT) + '">' + x + "</button>"; }).join("");
    var E = EXAMS[exT], m = marks[exT];
    $("#marks").innerHTML = E.subj.map(function (s, i) { return '<div class="mk"><span>' + L(SUB[s[0]][0]) + "</span><small>" + t.coef + " " + s[1] + '</small><div class="v"><input type="range" min="0" max="' + E.max + '" step="0.5" value="' + m[i] + '" data-k="' + i + '" aria-label="' + L(SUB[s[0]][0]) + '"><b>' + nb(m[i], 1) + "</b></div></div>"; }).join("") +
      '<div class="mk" style="background:rgba(215,247,91,.16)"><span>' + t.annual + '</span><small></small><div class="v"><input type="range" min="0" max="' + E.max + '" step="0.1" value="' + annual[exT] + '" data-k="ann" aria-label="' + t.annual + '"><b>' + nb(annual[exT], 1) + "</b></div></div>";
    calcAvg();
  }
  function calcAvg() {
    var t = I[lang], E = EXAMS[exT], m = marks[exT], sw = 0, sc = 0;
    E.subj.forEach(function (s, i) { sw += s[1]; sc += m[i] * s[1]; });
    var ex = sc / sw, fin = (ex + annual[exT]) / 2, pass = fin >= E.pass;
    $("#avgOn").textContent = "/ " + E.max;
    $("#ann").innerHTML = "<div style=\"display:flex;justify-content:space-between\"><span>" + t.examAvg + "</span><span>" + nb(ex) + "</span></div><div style=\"display:flex;justify-content:space-between\"><span>" + t.annual + "</span><span>" + nb(annual[exT]) + "</span></div><div style=\"display:flex;justify-content:space-between;border-top:1px solid var(--line);padding-top:6px\"><span>" + t.final + "</span><span>" + nb(fin) + "</span></div>";
    var v = $("#verd"); v.className = "verdict " + (pass ? "ok" : "ko"); v.textContent = pass ? t.ok : t.ko;
    $("#resP").textContent = exT ? t.resB : t.res5;
    var arc = $("#arc"), off = 326.7 * (1 - fin / E.max);
    arc.setAttribute("stroke", pass ? "#1FBF75" : "#F2545B");
    if (STATIC || !ready) { arc.style.strokeDashoffset = off; $("#avg").textContent = nb(fin); gShown = fin; return; }
    gsap.to(arc, { strokeDashoffset: off, duration: .6, ease: "power3.out", overwrite: true });
    var o = { v: gShown }; gsap.to(o, { v: fin, duration: .6, ease: "power3.out", overwrite: true, onUpdate: function () { $("#avg").textContent = nb(o.v); } }); gShown = fin;
  }
  /* parents dashboard */
  function renderDash() {
    var t = I[lang];
    $("#stabs").innerHTML = Object.keys(CHART).map(function (k) { return '<button type="button" data-s="' + k + '" aria-pressed="' + (k === chS) + '">' + L(SUB[k][0]) + "</button>"; }).join("");
    drawChart(false);
    $("#weak").innerHTML = WEAK.map(function (w) { return "<li><div><span>" + L(w[0]) + "</span><b>" + w[1] + ' %</b></div><span class="b"><i style="background:' + w[2] + ";transform:scaleX(" + (w[1] / 100) + ')"></i></span></li>'; }).join("");
    var mx = Math.max.apply(null, WEEK);
    $("#week").innerHTML = WEEK.map(function (v, i) { return '<div><small>' + (v ? v + " " + t.mn : "–") + '</small><i class="' + (v >= 30 ? "on" : "") + '" style="height:' + Math.max(4, v / mx * 80) + 'px"></i><small>' + t.wd[i] + "</small></div>"; }).join("");
  }
  function drawChart(anim) {
    var t = I[lang], d = CHART[chS], col = SUB[chS][1], W = 560, H = 240, px = function (i) { return 60 + i * 210; }, py = function (v) { return 200 - v / 20 * 180; };
    var g = "";
    [0, 5, 10, 15, 20].forEach(function (v) { g += '<line x1="40" x2="540" y1="' + py(v) + '" y2="' + py(v) + '" stroke="#E2E5F5"/><text x="30" y="' + (py(v) + 4) + '" text-anchor="end" font-size="12" fill="#565C86" font-family="Albert Sans, sans-serif">' + v + "</text>"; });
    g += '<line x1="40" x2="540" y1="' + py(10) + '" y2="' + py(10) + '" stroke="#F2545B" stroke-dasharray="4 6"/>';
    var pts = d.map(function (v, i) { return px(i) + "," + py(v); }).join(" ");
    g += '<polygon points="' + px(0) + "," + py(0) + " " + pts + " " + px(2) + "," + py(0) + '" fill="' + col + '" opacity=".12"/>';
    g += '<polyline id="cl" points="' + pts + '" fill="none" stroke="' + col + '" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>';
    g += d.map(function (v, i) { return '<circle cx="' + px(i) + '" cy="' + py(v) + '" r="8" fill="#fff" stroke="' + col + '" stroke-width="4"/><text x="' + px(i) + '" y="' + (py(v) - 16) + '" text-anchor="middle" font-size="15" font-weight="700" fill="#0F1442" font-family="Albert Sans, sans-serif">' + nb(v, 1) + '</text><text x="' + px(i) + '" y="228" text-anchor="middle" font-size="13" fill="#565C86" font-family="Albert Sans, Vazirmatn, sans-serif">' + t.tri[i] + "</text>"; }).join("");
    $("#chart").innerHTML = g;
    if (anim && !STATIC) { var l = $("#cl"), len = l.getTotalLength(); gsap.fromTo(l, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: .9, ease: "power2.out" }); gsap.from("#chart circle", { scale: 0, transformOrigin: "50% 50%", duration: .4, stagger: .12, ease: "back.out(3)", delay: .3 }); }
  }
  /* live classes */
  function renderLive() {
    var t = I[lang];
    $("#lf").innerHTML = t.lf.map(function (x, i) { return '<button type="button" data-f="' + i + '" aria-pressed="' + (i === lf) + '">' + x + "</button>"; }).join("");
    $("#days").innerHTML = [0, 1].map(function (d) { return '<div class="day"><h3>' + (d ? t.sat : t.fri) + "</h3>" + LIVE.map(function (c, i) { if (c.d !== d) return ""; var left = c.left - (booked[i] ? 1 : 0); return '<article class="cls" data-lv="' + c.lv + '"' + (lf && c.lv !== lf - 1 ? " hidden" : "") + '><div class="ph">' + img(c.img, "96px") + "<em>" + t.live + '</em></div><div><time>' + c.t + "</time><b>" + L(SUB[c.s][0]) + "</b><small>" + (c.lv ? "BEM · 4AM" : "5AP") + '</small><p class="seats' + (left < 5 ? " low" : "") + '">' + t.seats.replace("{n}", left) + '</p></div><button type="button" data-c="' + i + '" aria-pressed="' + !!booked[i] + '">' + (booked[i] ? t.booked : t.book) + "</button></article>"; }).join("") + "</div>"; }).join("");
  }
  /* pricing */
  function price(i) { return Math.round(PLANS[i].p * (per ? .85 : 1) / 50) * 50; }
  function renderPlans() {
    var t = I[lang];
    $("#perSeg").innerHTML = t.per.map(function (p, i) { return '<button type="button" data-p="' + i + '" aria-pressed="' + (i === per) + '">' + p + (i ? "<em>" + t.save + "</em>" : "") + "</button>"; }).join("");
    $("#plans").innerHTML = PLANS.map(function (p, i) { return '<article class="plan' + (p.hot ? " hot" : "") + '">' + (p.hot ? '<span class="tg">' + t.hot + "</span>" : "") + "<h3>" + L(p.t) + '</h3><p class="for">' + L(p.f4) + '</p><p class="pr"><span data-n="' + i + '">' + da(price(i)) + "</span> <small>" + t.perM + "</small></p><ul>" + L(p.l).map(function (x) { return "<li>" + CK + "<span>" + x + "</span></li>"; }).join("") + '</ul><a class="btn ' + (p.hot ? "l" : "b") + '" href="#essai">' + t.choose + "</a></article>"; }).join("");
    shown = PLANS.map(function (_, i) { return price(i); });
  }
  function updPlans() {
    $$("#perSeg button").forEach(function (b) { b.setAttribute("aria-pressed", +b.dataset.p === per); });
    PLANS.forEach(function (_, i) { var el = $('[data-n="' + i + '"]'), v = price(i); if (STATIC) { el.textContent = da(v); return; } var o = { v: shown[i] }; gsap.to(o, { v: v, duration: .6, ease: "power3.out", onUpdate: function () { el.textContent = da(Math.round(o.v / 50) * 50); } }); shown[i] = v; });
  }
  function renderForm() {
    var t = I[lang], sel = $("#lvSel"), v = sel.value;
    $("#who").innerHTML = t.who.map(function (w, i) { return '<button type="button" data-w="' + i + '" aria-pressed="' + (i === who) + '">' + w + "</button>"; }).join("");
    sel.innerHTML = LV.map(function (l, i) { return '<option value="' + i + '"' + (String(i) === (v || "8") ? " selected" : "") + ">" + l + (i === 4 ? " · " + t.ex5 : i === 8 ? " · BEM" : "") + "</option>"; }).join("");
  }
  /* help centre: type to filter the questions */
  function renderFaq() {
    var t = I[lang], q = ($("#fqS") && $("#fqS").value) || "";
    $("#faqL").innerHTML = '<label class="search"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg><input id="fqS" type="search" placeholder="' + t.fqPh + '" aria-label="' + t.fqPh + '"></label><div id="fqList">' + FAQ.map(function (f, i) { return "<details" + (i === 0 ? " open" : "") + "><summary>" + L(f[0]) + '<i aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M5 12h14"/></svg></i></summary><p>' + L(f[1]) + "</p></details>"; }).join("") + '</div><p class="none" id="fqNone" hidden>' + t.fqNone + "</p>";
    $("#fqS").value = q; filterFaq();
  }
  function filterFaq() { var q = $("#fqS").value.trim().toLowerCase(), n = 0; $$("#fqList details").forEach(function (d) { var hit = !q || d.textContent.toLowerCase().indexOf(q) > -1; d.hidden = !hit; if (hit) n++; if (q && hit) d.open = true; }); $("#fqNone").hidden = n > 0; }
  function render() {
    var t = I[lang];
    $("#fcols").innerHTML = t.fcol.map(function (c, i) { return "<div><b>" + c + "</b>" + t.flinks.slice(i * 3, i * 3 + 3).map(function (l) { return '<a href="' + l[1] + '">' + l[0] + "</a>"; }).join("") + "</div>"; }).join("");
    $("#wafT").textContent = t.help;
    renderQuiz(); renderLevels(); renderSim(); renderDash(); renderLive(); renderPlans(); renderForm(); renderFaq();
    var names = []; Object.keys(P).forEach(function (k) { if (names.indexOf(P[k][1]) < 0) names.push(P[k][1]); });
    $("#credits").textContent = t.photos + " " + names.join(", ") + ".";
  }
  function setLang(l) {
    lang = l; var t = I[l];
    doc.lang = l; doc.dir = l === "ar" ? "rtl" : "ltr"; document.title = t.title;
    $$("[data-i]").forEach(function (e) { if (typeof t[e.dataset.i] === "string") e.textContent = t[e.dataset.i]; });
    $$("[data-alt]").forEach(function (e) { e.alt = t[e.dataset.alt]; });
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.l === l); });
    $(".lang").setAttribute("aria-label", t.lang); $("#msg").textContent = "";
    try { localStorage.setItem("moutafawiq-lang", l); } catch (e) {}
    render();
    if (ready) { bindDynamic(); ScrollTrigger.refresh(); }
  }

  /* events */
  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.l !== lang) setLang(b.dataset.l); }); });
  $("#qtabs").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; qs = +b.dataset.s; qi = 0; score = 0; $$("#qtabs button").forEach(function (x) { x.setAttribute("aria-selected", x === b); }); showQ(); });
  $("#qa").addEventListener("click", function (e) { var b = e.target.closest("button"); if (b && !b.disabled) answer(+b.dataset.a); });
  $("#qfb").addEventListener("click", function (e) { if (!e.target.closest("#qNext")) return; if (qi === 2) { qi = 0; score = 0; } else qi++; showQ(); });
  $("#lvtabs").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; lv = +b.dataset.l; $$("#lvtabs button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); showLevel(true); });
  $("#exSeg").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; exT = +b.dataset.e; renderSim(); if (!STATIC) gsap.from("#marks .mk", { x: doc.dir === "rtl" ? 20 : -20, opacity: 0, duration: .35, stagger: .04 }); });
  $("#marks").addEventListener("input", function (e) { var r = e.target; if (r.type !== "range") return; var v = +r.value; if (r.dataset.k === "ann") annual[exT] = v; else marks[exT][+r.dataset.k] = v; r.nextElementSibling.textContent = nb(v, 1); calcAvg(); });
  $("#stabs").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; chS = b.dataset.s; $$("#stabs button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); drawChart(true); });
  $("#lf").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; lf = +b.dataset.f; $$("#lf button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); $$("#days .cls").forEach(function (c) { c.hidden = lf && +c.dataset.lv !== lf - 1; }); });
  $("#days").addEventListener("click", function (e) { var b = e.target.closest("button[data-c]"); if (!b) return; var i = +b.dataset.c; booked[i] = !booked[i]; renderLive(); if (booked[i]) toast(I[lang].bookDemo); });
  $("#perSeg").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; per = +b.dataset.p; updPlans(); });
  $("#who").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; who = +b.dataset.w; $$("#who button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); });
  $("#f").addEventListener("submit", function (e) {
    e.preventDefault(); var t = I[lang], ok = this.name.value.trim() && /^0[5-7]\d{8}$/.test(this.tel.value.replace(/\s/g, ""));
    if (!ok) { $("#msg").textContent = t.err; (this.name.value.trim() ? this.tel : this.name).focus(); return; }
    $("#msg").textContent = t.demo;
  });
  $("#waf").addEventListener("click", function () { openWa(); });
  $("#faqL").addEventListener("input", function (e) { if (e.target.id === "fqS") filterFaq(); });

  render();
  setInterval(tickExam, 30000);
  if (STATIC) return;

  gsap.registerPlugin(ScrollTrigger);
  var lenis = window.Lenis ? new Lenis({ lerp: 0.1 }) : null;
  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach(function (a) { a.addEventListener("click", function (e) { var id = a.getAttribute("href"); if (id.length < 2) return; var el = $(id); if (!el) return; e.preventDefault(); lenis.scrollTo(el, { offset: id === "#top" ? 0 : -76 }); }); });
  }

  /* hero: words pop, the photo grows, the quiz card slides up like an app */
  gsap.from(".hero .chip, .hero h1 > span, .hero p, .hero .acts, .levels span", { y: 30, opacity: 0, duration: .7, stagger: .05, ease: "back.out(1.7)", delay: .1 });
  gsap.from(".photo", { scale: .6, borderRadius: "50%", opacity: 0, duration: 1.1, ease: "expo.out", delay: .2 });
  gsap.from("#qz", { y: 120, opacity: 0, rotation: 3, duration: 1, ease: "back.out(1.3)", delay: .5 });
  gsap.from("#streak", { scale: 0, rotation: -40, duration: .7, ease: "back.out(2.5)", delay: 1.1 });
  ScrollTrigger.batch("[data-up]", { start: "top 88%", once: true, onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, duration: .9, stagger: .1, ease: "power3.out" }); } });

  function bindDynamic() {
    [].concat.apply([], dyn).forEach(function (x) { if (x.targets || x.getChildren) x.revert(); else if (x.kill) x.kill(); }); dyn = [];
    dyn.push(gsap.fromTo("#subs .sb", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .6, stagger: .05, ease: "power3.out", scrollTrigger: { trigger: "#subs", start: "top 85%" } }));
    dyn.push(ScrollTrigger.create({ trigger: "#chart", start: "top 80%", once: true, onEnter: function () { drawChart(true); } }));
    dyn.push(gsap.fromTo("#week i", { scaleY: 0 }, { scaleY: 1, duration: .7, stagger: .06, ease: "back.out(2)", scrollTrigger: { trigger: "#week", start: "top 90%" } }));
    dyn.push(gsap.fromTo("#weak i", { scaleX: 0 }, { scaleX: function (i) { return WEAK[i][1] / 100; }, duration: .9, stagger: .1, ease: "power3.out", scrollTrigger: { trigger: "#weak", start: "top 90%" } }));
    dyn.push(gsap.fromTo("#plans .plan", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: .8, stagger: .1, ease: "back.out(1.3)", clearProps: "transform,opacity", scrollTrigger: { trigger: "#plans", start: "top 85%" } }));
    dyn.push(gsap.fromTo("#days .cls", { x: function (i) { return (i % 2 ? 1 : -1) * 40; }, opacity: 0 }, { x: 0, opacity: 1, duration: .6, stagger: .06, ease: "power3.out", clearProps: "transform,opacity", scrollTrigger: { trigger: "#days", start: "top 85%" } }));
  }
  bindDynamic();
  ready = true;
  var rz, lw = innerWidth; window.addEventListener("resize", function () { if (innerWidth === lw) return; lw = innerWidth; clearTimeout(rz); rz = setTimeout(function () { ScrollTrigger.refresh(); }, 300); });
})();
