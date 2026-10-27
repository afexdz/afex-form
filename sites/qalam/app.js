/* Qalam : contenu FR / AR / EN, prénom en arabe, alphabet, niveau, fuseaux horaires, prix (GSAP + ScrollTrigger + Lenis, en local) */
(function () {
  var doc = document.documentElement;
  var STATIC = doc.classList.contains("static") || !window.gsap || !window.ScrollTrigger;
  if (STATIC) doc.classList.add("static");
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  function L(o) { return o[lang]; }
  var P = { famille: "Hasan Almasi", prof: "Rendy Novantino" };

  var I = {
    fr: { demo0: "Site de démonstration : école fictive, tarifs et horaires donnés à titre d’exemple.", demo1: "Voir les autres modèles", youAre: "Vous êtes à", ckAlgL: "chez le prof, Alger", ckHere: "chez vous", cta1: "Réserver un cours d’essai", cta2: "Tester son niveau",
      mH: "L’arabe et le Coran, en visio, à l’heure de chez vous.", inA: "Une langue de famille,", inB: "apprise à distance.", inP: "Des professeurs en Algérie, un enfant à Paris, Montréal ou Londres : des cours en tête-à-tête ou en duo, à des horaires qui tiennent compte de l’école et du décalage.", f1: "ou en duo de frères et sœurs", f2: "minutes, selon l’âge", f3: "ans, de l’alphabet au Coran",
      s1L: "Pour commencer", s1H: "Écrivez son prénom, on l’écrit en arabe", s1P: "C’est souvent la première chose que les enfants veulent savoir écrire. Tapez un prénom.", nmL: "Prénom de l’enfant", nmNote: "Transcription approximative : le professeur vérifie l’orthographe avec vous au premier cours.", nmDict: "Orthographe usuelle de ce prénom.",
      s2L: "L’alphabet", s2H: "28 lettres, quatre visages chacune", s2P: "En arabe, une lettre change de forme selon sa place dans le mot. Touchez une lettre pour voir ses formes.", forms: ["Seule", "Au début", "Au milieu", "À la fin"], noJoin: "Cette lettre ne s’attache jamais à la suivante.",
      s3L: "Quatre questions", s3H: "Par où commencer avec votre enfant ?", lvlK: "Niveau conseillé", coran: "Coran : ",
      s4L: "À votre heure", s4H: "Les créneaux, convertis pour votre ville", s4P: "Changez de ville dans la colonne : les heures se recalculent. Les créneaux trop tôt ou trop tard chez vous sont grisés.", atAlg: "{h} à Alger", good: "Après l’école", wed: "Mercredi après-midi", we: "Week-end", off: "Trop tard ou trop tôt", school: "Pendant l’école", seats: "{n} places", tzn: "Les professeurs sont à Alger (UTC+1, sans heure d’été). Horaires de votre ville calculés automatiquement.",
      s5L: "Le prix", s5H: "Vous payez les séances, dans votre monnaie", pS: "Séances par semaine", pD: "Durée", pK: "Enfants", perM: "par mois", unit: "Prix d’une séance", count: "{n} séances × 4 semaines", sib: "Frères et sœurs −20 %", free: "Sans engagement, arrêt possible chaque mois",
      s6L: "Gratuit", s6H: "Un premier cours, offert", s6P: "30 minutes avec un professeur pour faire connaissance et confirmer le niveau. Sans paiement ni engagement.", l1: "Prénom de l’enfant", l2: "Âge", l3: "Créneau (heure de chez vous)", l4: "E-mail ou WhatsApp avec indicatif", send: "Réserver le cours d’essai", years: "ans",
      err: "Indiquez le prénom et un e-mail ou un numéro avec indicatif (+33…).", demo: "Démo AFEX Digital : aucun cours n’a été réservé, ce formulaire n’est pas encore connecté.", waT: "Une question ? WhatsApp", waDemo: "Démo AFEX Digital : le numéro WhatsApp n’est pas encore connecté.",
      foot: "© 2026 Qalam, école fictive en ligne.", by: "Site réalisé par", photos: "Photos : Unsplash,", lang: "Langue", famAlt: "Un père lit le Coran avec sa fille, assis par terre", profAlt: "Une enseignante en hijab sourit devant son ordinateur",
      title: "Qalam, l’arabe et le Coran en visio pour les enfants de la diaspora", loc: "fr-FR",
      sec: [["Qalam · قلم", "L’arabe et le Coran, en visio, à l’heure de chez vous.", "Pour les enfants de 5 à 14 ans qui grandissent loin de l’Algérie."], ["01 · Le prénom", "Son prénom, en lettres arabes", "Le premier mot qu’on apprend à écrire."], ["02 · L’alphabet", "Vingt-huit lettres", "Chacune a jusqu’à quatre formes."], ["03 · Le niveau", "Trois niveaux et un parcours Coran", "Un test de quatre questions."], ["04 · Les horaires", "Des cours après l’école, pas la nuit", "Convertis pour votre ville."], ["05 · Le prix", "Pas d’abonnement à l’année", "Dans votre monnaie, au mois."], ["06 · L’essai", "Un premier cours offert", "Trente minutes pour se rencontrer."]],
      idx: ["Le prénom en arabe", "Les 28 lettres", "Le test de niveau", "Les horaires", "Le prix", "Le cours d’essai"] },
    ar: { demo0: "موقع تجريبي: مدرسة وهمية، الأسعار والمواعيد للتوضيح فقط.", demo1: "شاهد النماذج الأخرى", youAre: "أنتم في", ckAlgL: "عند الأستاذ، الجزائر", ckHere: "عندكم", cta1: "احجز حصة تجريبية", cta2: "اختبر مستواه",
      mH: "العربية والقرآن عبر الفيديو، بتوقيت مدينتكم.", inA: "لغة العائلة،", inB: "تُتعلَّم عن بُعد.", inP: "أساتذة في الجزائر وطفل في باريس أو مونتريال أو لندن: حصص فردية أو ثنائية، في مواعيد تراعي المدرسة وفارق التوقيت.", f1: "أو ثنائية للإخوة", f2: "دقيقة حسب السن", f3: "سنة، من الحروف إلى القرآن",
      s1L: "للبداية", s1H: "اكتبوا اسمه، نكتبه بالعربية", s1P: "غالبًا ما يكون أول ما يريد الطفل كتابته. اكتبوا اسمًا.", nmL: "اسم الطفل", nmNote: "كتابة تقريبية: يتحقق الأستاذ من الإملاء معكم في الحصة الأولى.", nmDict: "الكتابة المعتادة لهذا الاسم.",
      s2L: "الحروف", s2H: "28 حرفًا، لكل منها أربعة أشكال", s2P: "في العربية يتغيّر شكل الحرف حسب موضعه في الكلمة. المسوا حرفًا لرؤية أشكاله.", forms: ["منفصل", "في البداية", "في الوسط", "في النهاية"], noJoin: "هذا الحرف لا يتصل بما بعده.",
      s3L: "أربعة أسئلة", s3H: "من أين نبدأ مع طفلكم؟", lvlK: "المستوى المقترح", coran: "القرآن: ",
      s4L: "بتوقيتكم", s4H: "المواعيد محوَّلة إلى مدينتكم", s4P: "غيّروا المدينة في العمود: تُعاد حساب الساعات. المواعيد المبكرة أو المتأخرة عندكم باهتة.", atAlg: "{h} في الجزائر", good: "بعد المدرسة", wed: "مساء الأربعاء", we: "نهاية الأسبوع", off: "متأخر أو مبكر جدًا", school: "وقت المدرسة", seats: "{n} أماكن", tzn: "الأساتذة في الجزائر (UTC+1 بلا توقيت صيفي). تُحسب مواعيد مدينتكم تلقائيًا.",
      s5L: "السعر", s5H: "تدفعون الحصص بعملتكم", pS: "حصص في الأسبوع", pD: "المدة", pK: "الأطفال", perM: "في الشهر", unit: "سعر الحصة", count: "{n} حصص × 4 أسابيع", sib: "الإخوة −20 %", free: "بلا التزام، التوقف ممكن كل شهر",
      s6L: "مجاني", s6H: "حصة أولى مجانية", s6P: "30 دقيقة مع أستاذ للتعارف وتأكيد المستوى. بلا دفع ولا التزام.", l1: "اسم الطفل", l2: "السن", l3: "الموعد (بتوقيتكم)", l4: "البريد أو واتساب مع رمز البلد", send: "احجز الحصة التجريبية", years: "سنة",
      err: "أدخلوا الاسم وبريدًا إلكترونيًا أو رقمًا مع رمز البلد (+33…).", demo: "عرض AFEX Digital: لم تُحجز أي حصة، هذا النموذج غير متصل بعد.", waT: "سؤال؟ واتساب", waDemo: "عرض AFEX Digital: رقم واتساب غير متصل بعد.",
      foot: "© 2026 قلم، مدرسة وهمية عبر الإنترنت.", by: "موقع من إنجاز", photos: "الصور: Unsplash،", lang: "اللغة", famAlt: "أب يقرأ القرآن مع ابنته جالسَين على الأرض", profAlt: "معلّمة بالحجاب تبتسم أمام حاسوبها",
      title: "قلم، العربية والقرآن عبر الفيديو لأطفال الجالية", loc: "ar",
      sec: [["قلم · Qalam", "العربية والقرآن عبر الفيديو، بتوقيت مدينتكم.", "للأطفال من 5 إلى 14 سنة الذين يكبرون بعيدًا عن الجزائر."], ["01 · الاسم", "اسمه بالحروف العربية", "أول كلمة نتعلم كتابتها."], ["02 · الحروف", "ثمانية وعشرون حرفًا", "لكل منها حتى أربعة أشكال."], ["03 · المستوى", "ثلاثة مستويات ومسار للقرآن", "اختبار من أربعة أسئلة."], ["04 · المواعيد", "حصص بعد المدرسة لا في الليل", "محوّلة إلى مدينتكم."], ["05 · السعر", "بلا اشتراك سنوي", "بعملتكم، شهريًا."], ["06 · التجربة", "حصة أولى مجانية", "ثلاثون دقيقة للتعارف."]],
      idx: ["الاسم بالعربية", "الحروف الـ28", "اختبار المستوى", "المواعيد", "السعر", "الحصة التجريبية"] },
    en: { demo0: "Demo website: a fictional school, prices and times are examples.", demo1: "See the other templates", youAre: "You are in", ckAlgL: "teacher’s time, Algiers", ckHere: "your time", cta1: "Book a free trial lesson", cta2: "Check their level",
      mH: "Arabic and the Quran on video, at your local time.", inA: "A family language,", inB: "learned from afar.", inP: "Teachers in Algeria, a child in Paris, Montreal or London: one-to-one or sibling lessons, at times that fit school and the time difference.", f1: "or as a sibling pair", f2: "minutes, by age", f3: "years old, from the alphabet to the Quran",
      s1L: "To start", s1H: "Type their name, we write it in Arabic", s1P: "It’s often the first thing children want to learn to write. Type a first name.", nmL: "Child’s first name", nmNote: "Approximate transcription: the teacher checks the spelling with you in the first lesson.", nmDict: "Usual spelling of this name.",
      s2L: "The alphabet", s2H: "28 letters, four faces each", s2P: "In Arabic, a letter changes shape depending on where it sits in the word. Tap a letter to see its forms.", forms: ["Alone", "Start", "Middle", "End"], noJoin: "This letter never joins the next one.",
      s3L: "Four questions", s3H: "Where should your child start?", lvlK: "Suggested level", coran: "Quran: ",
      s4L: "On your clock", s4H: "Lesson times, converted to your city", s4P: "Change city in the side column and the times update. Slots too early or too late for you are greyed out.", atAlg: "{h} in Algiers", good: "After school", wed: "Wednesday afternoon", we: "Weekend", off: "Too late or too early", school: "During school", seats: "{n} seats", tzn: "Teachers are in Algiers (UTC+1, no daylight saving). Your city’s times are worked out automatically.",
      s5L: "Pricing", s5H: "Pay per lesson, in your currency", pS: "Lessons per week", pD: "Length", pK: "Children", perM: "per month", unit: "Price per lesson", count: "{n} lessons × 4 weeks", sib: "Siblings −20%", free: "No commitment, stop any month",
      s6L: "Free", s6H: "A first lesson, on us", s6P: "30 minutes with a teacher to meet and confirm the level. No payment, no commitment.", l1: "Child’s first name", l2: "Age", l3: "Slot (your local time)", l4: "Email or WhatsApp with country code", send: "Book the trial lesson", years: "years",
      err: "Enter the first name and an email or a number with country code (+44…).", demo: "AFEX Digital demo: no lesson was booked, this form is not connected yet.", waT: "A question? WhatsApp", waDemo: "AFEX Digital demo: the WhatsApp number is not connected yet.",
      foot: "© 2026 Qalam, a fictional online school.", by: "Website by", photos: "Photos: Unsplash,", lang: "Language", famAlt: "A father reading the Quran with his daughter on the floor", profAlt: "A teacher in a hijab smiling at her laptop",
      title: "Qalam, Arabic and Quran on video for diaspora children", loc: "en-GB",
      sec: [["Qalam · قلم", "Arabic and the Quran on video, at your local time.", "For children aged 5 to 14 growing up far from Algeria."], ["01 · The name", "Their name in Arabic letters", "The first word you learn to write."], ["02 · The alphabet", "Twenty-eight letters", "Each with up to four forms."], ["03 · The level", "Three levels and a Quran track", "A four-question test."], ["04 · Times", "Lessons after school, not at night", "Converted to your city."], ["05 · Pricing", "No yearly contract", "In your currency, monthly."], ["06 · The trial", "A first lesson, free", "Thirty minutes to meet."]],
      idx: ["Their name in Arabic", "The 28 letters", "The level test", "Lesson times", "Pricing", "The trial lesson"] }
  };

  var CITIES = [
    ["paris", "Europe/Paris", { fr: "Paris", ar: "باريس", en: "Paris" }, "EUR", 9], ["lyon", "Europe/Paris", { fr: "Lyon", ar: "ليون", en: "Lyon" }, "EUR", 9], ["bruxelles", "Europe/Brussels", { fr: "Bruxelles", ar: "بروكسل", en: "Brussels" }, "EUR", 9],
    ["geneve", "Europe/Zurich", { fr: "Genève", ar: "جنيف", en: "Geneva" }, "CHF", 10], ["londres", "Europe/London", { fr: "Londres", ar: "لندن", en: "London" }, "GBP", 8], ["montreal", "America/Toronto", { fr: "Montréal", ar: "مونتريال", en: "Montreal" }, "CAD", 13],
    ["newyork", "America/New_York", { fr: "New York", ar: "نيويورك", en: "New York" }, "USD", 10], ["dubai", "Asia/Dubai", { fr: "Dubaï", ar: "دبي", en: "Dubai" }, "AED", 36]
  ];
  var BIGL = ["ق", "ن", "ب", "ع", "س", "ف", "م"];
  /* first names: usual Arabic spelling */
  var NAMES = { adam: "آدم", yasmine: "ياسمين", yasmina: "ياسمينة", sarah: "سارة", sara: "سارة", ines: "إيناس", "inès": "إيناس", rayan: "ريان", lina: "لينا", lyna: "لينا", amine: "أمين", nour: "نور", ilyes: "إلياس", ilyas: "إلياس", malik: "مالك", sofia: "صوفيا", yanis: "يانيس", mohamed: "محمد", mohammed: "محمد", ali: "علي", omar: "عمر", aya: "آية", imran: "عمران", hana: "هناء", zakaria: "زكريا", youssef: "يوسف", yusuf: "يوسف", selma: "سلمى", salma: "سلمى", maya: "مايا", nora: "نورة", samy: "سامي", sami: "سامي", karim: "كريم", leila: "ليلى", layla: "ليلى", ibrahim: "إبراهيم", amir: "أمير", mariam: "مريم", maryam: "مريم", khadija: "خديجة", fatima: "فاطمة", hamza: "حمزة", bilal: "بلال", anas: "أنس", idris: "إدريس", soumaya: "سمية", sofiane: "سفيان", nadia: "نادية", rania: "رانيا", assia: "آسيا", mehdi: "مهدي", walid: "وليد", ayoub: "أيوب", nael: "نائل", noah: "نوح", lea: "ليا", "léa": "ليا", emma: "إيما", louis: "لويس", ryad: "رياض", riyad: "رياض", meriem: "مريم", amel: "أمل", yacine: "ياسين", yassine: "ياسين", lilia: "ليليا", wassim: "وسيم", anis: "أنيس", elias: "إلياس", zineb: "زينب", aicha: "عائشة", "aïcha": "عائشة", kenza: "كنزة", rayane: "ريان", islam: "إسلام", amira: "أميرة", jad: "جاد", tarek: "طارق", tariq: "طارق" };
  var PICKS = ["Adam", "Inès", "Rayan", "Lina", "Youssef", "Sofia"];
  function translit(n) {
    var k = n.trim().toLowerCase(); if (!k) return ["", false];
    if (NAMES[k]) return [NAMES[k], true];
    k = k.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z]/g, "");
    var D = [["kh", "خ"], ["gh", "غ"], ["sh", "ش"], ["ch", "ش"], ["th", "ث"], ["dh", "ذ"], ["dj", "ج"], ["ph", "ف"], ["qu", "ك"], ["ou", "و"], ["oo", "و"], ["ee", "ي"], ["ie", "ي"], ["ai", "اي"], ["ay", "اي"], ["ei", "ي"]];
    var S = { b: "ب", c: "ك", d: "د", f: "ف", g: "غ", h: "ه", j: "ج", k: "ك", l: "ل", m: "م", n: "ن", p: "ب", q: "ق", r: "ر", s: "س", t: "ت", v: "ف", w: "و", x: "كس", y: "ي", z: "ز", i: "ي", o: "و", u: "و" };
    var out = "", i = 0;
    while (i < k.length) {
      var two = k.substr(i, 2), hit = null;
      for (var d = 0; d < D.length; d++) if (D[d][0] === two) { hit = D[d][1]; break; }
      if (hit) { out += hit; i += 2; continue; }
      var c = k[i];
      if (c === "a") out += i === 0 ? "أ" : "ا";
      else if (c === "e") out += i === 0 ? "إ" : (i === k.length - 1 ? "" : "ي");
      else if (S[c]) out += (i === 0 && (c === "i" || c === "o" || c === "u")) ? (c === "i" ? "إي" : "أو") : S[c];
      i++;
    }
    out = out.replace(/(.)\1+/g, "$1");
    return [out, false];
  }
  var LETTERS = [["ا", "Alif", 0, "أسد", { fr: "lion", ar: "أسد", en: "lion" }], ["ب", "Bâ", 1, "بيت", { fr: "maison", ar: "بيت", en: "house" }], ["ت", "Tâ", 1, "تفاحة", { fr: "pomme", ar: "تفاحة", en: "apple" }], ["ث", "Thâ", 1, "ثعلب", { fr: "renard", ar: "ثعلب", en: "fox" }], ["ج", "Jîm", 1, "جمل", { fr: "chameau", ar: "جمل", en: "camel" }], ["ح", "Hâ", 1, "حصان", { fr: "cheval", ar: "حصان", en: "horse" }], ["خ", "Khâ", 1, "خبز", { fr: "pain", ar: "خبز", en: "bread" }],
    ["د", "Dâl", 0, "دب", { fr: "ours", ar: "دب", en: "bear" }], ["ذ", "Dhâl", 0, "ذهب", { fr: "or", ar: "ذهب", en: "gold" }], ["ر", "Râ", 0, "رمان", { fr: "grenade", ar: "رمان", en: "pomegranate" }], ["ز", "Zây", 0, "زيتون", { fr: "olive", ar: "زيتون", en: "olive" }], ["س", "Sîn", 1, "سمك", { fr: "poisson", ar: "سمك", en: "fish" }], ["ش", "Shîn", 1, "شمس", { fr: "soleil", ar: "شمس", en: "sun" }], ["ص", "Sâd", 1, "صقر", { fr: "faucon", ar: "صقر", en: "falcon" }],
    ["ض", "Dâd", 1, "ضفدع", { fr: "grenouille", ar: "ضفدع", en: "frog" }], ["ط", "Tâ’", 1, "طائرة", { fr: "avion", ar: "طائرة", en: "plane" }], ["ظ", "Dhâ’", 1, "ظرف", { fr: "enveloppe", ar: "ظرف", en: "envelope" }], ["ع", "‘Ayn", 1, "عين", { fr: "œil", ar: "عين", en: "eye" }], ["غ", "Ghayn", 1, "غيمة", { fr: "nuage", ar: "غيمة", en: "cloud" }], ["ف", "Fâ", 1, "فيل", { fr: "éléphant", ar: "فيل", en: "elephant" }], ["ق", "Qâf", 1, "قمر", { fr: "lune", ar: "قمر", en: "moon" }],
    ["ك", "Kâf", 1, "كتاب", { fr: "livre", ar: "كتاب", en: "book" }], ["ل", "Lâm", 1, "ليمون", { fr: "citron", ar: "ليمون", en: "lemon" }], ["م", "Mîm", 1, "مفتاح", { fr: "clé", ar: "مفتاح", en: "key" }], ["ن", "Nûn", 1, "نجمة", { fr: "étoile", ar: "نجمة", en: "star" }], ["ه", "Hâ’", 1, "هلال", { fr: "croissant de lune", ar: "هلال", en: "crescent" }], ["و", "Wâw", 0, "وردة", { fr: "rose", ar: "وردة", en: "rose" }], ["ي", "Yâ", 1, "يد", { fr: "main", ar: "يد", en: "hand" }]];
  var QUIZ = [
    [{ fr: "Reconnaît-il les lettres arabes ?", ar: "هل يتعرّف على الحروف العربية؟", en: "Do they recognise Arabic letters?" }, [{ fr: "Pas encore", ar: "ليس بعد", en: "Not yet" }, { fr: "Quelques-unes", ar: "بعضها", en: "Some" }, { fr: "Toutes", ar: "كلها", en: "All of them" }]],
    [{ fr: "Lit-il des mots avec les voyelles ?", ar: "هل يقرأ كلمات بالحركات؟", en: "Can they read words with vowel marks?" }, [{ fr: "Non", ar: "لا", en: "No" }, { fr: "Lentement", ar: "ببطء", en: "Slowly" }, { fr: "Oui", ar: "نعم", en: "Yes" }]],
    [{ fr: "À la maison, on parle…", ar: "في البيت نتكلّم…", en: "At home we speak…" }, [{ fr: "Surtout français ou anglais", ar: "الفرنسية أو الإنجليزية غالبًا", en: "Mostly French or English" }, { fr: "Un peu de darija", ar: "قليلًا من الدارجة", en: "Some darija" }, { fr: "Arabe souvent", ar: "العربية غالبًا", en: "Arabic often" }]],
    [{ fr: "Pour le Coran, il connaît…", ar: "من القرآن يحفظ…", en: "From the Quran, they know…" }, [{ fr: "Rien encore", ar: "لا شيء بعد", en: "Nothing yet" }, { fr: "Al-Fâtiha", ar: "الفاتحة", en: "Al-Fatiha" }, { fr: "Plusieurs sourates", ar: "عدة سور", en: "Several surahs" }]]
  ];
  var LEVELS = [
    ["ا", { fr: "Alif : découvrir les lettres", ar: "ألف: اكتشاف الحروف", en: "Alif: discovering the letters" }, { fr: "Les 28 lettres, leurs sons et leurs formes, avec des jeux et des chansons. Environ 4 mois.", ar: "الحروف الـ28 وأصواتها وأشكالها، بالألعاب والأناشيد. حوالي 4 أشهر.", en: "The 28 letters, their sounds and forms, through games and songs. About 4 months." }],
    ["ب", { fr: "Bâ : lire des mots", ar: "باء: قراءة الكلمات", en: "Bâ: reading words" }, { fr: "Les voyelles, les lettres liées, de courtes phrases et un premier vocabulaire de la maison.", ar: "الحركات، الحروف المتصلة، جمل قصيرة ومفردات البيت الأولى.", en: "Vowel marks, joined letters, short sentences and first everyday words." }],
    ["ت", { fr: "Tâ : lire et s’exprimer", ar: "تاء: القراءة والتعبير", en: "Tâ: reading and speaking" }, { fr: "Lecture fluide, petites histoires, et parler de sa journée en arabe avec le professeur.", ar: "قراءة سلسة، قصص قصيرة، والحديث عن يومه بالعربية مع الأستاذ.", en: "Fluent reading, short stories, and talking about their day in Arabic with the teacher." }]
  ];
  var QURAN = [{ fr: "on commence par Al-Fâtiha et les invocations du quotidien.", ar: "نبدأ بالفاتحة وأدعية اليوم.", en: "start with Al-Fatiha and daily supplications." }, { fr: "on révise Al-Fâtiha et on passe aux trois dernières sourates.", ar: "نراجع الفاتحة وننتقل إلى السور الثلاث الأخيرة.", en: "revise Al-Fatiha and move on to the last three surahs." }, { fr: "on suit un plan de mémorisation avec le tajwid de base.", ar: "نتّبع خطة حفظ مع أساسيات التجويد.", en: "follow a memorisation plan with basic tajwid." }];
  /* lesson slots, in Algiers time (weekday 0 = Sunday) */
  var SLOTS = [[3, 14, 0, 4], [3, 17, 30, 2], [1, 18, 30, 5], [4, 18, 30, 3], [6, 10, 0, 1], [6, 15, 0, 6], [0, 11, 0, 4], [2, 23, 0, 5]];

  var lang = "fr", city = 0, cur = 0, letter = 1, answers = [-1, -1, -1, -1], sess = 2, dur = 30, kids = 1, slotSel = -1, ready = false, dyn = [], shownP = 0;
  try { var sv = localStorage.getItem("qalam-lang"); if (I[sv]) lang = sv; var sc = localStorage.getItem("qalam-city"); if (sc && +sc < CITIES.length) city = +sc; } catch (e) {}
  if (city === 0) { try { var tzNow = Intl.DateTimeFormat().resolvedOptions().timeZone; for (var ci = 0; ci < CITIES.length; ci++) if (CITIES[ci][1] === tzNow) { city = ci; break; } } catch (e) {} }
  function fmt(d, o, tz) { o = Object.assign({}, o); if (tz) o.timeZone = tz; try { return new Intl.DateTimeFormat(I[lang].loc === "ar" ? "ar-DZ-u-nu-latn" : I[lang].loc, o).format(d); } catch (e) { return d.toISOString().slice(11, 16); } }
  function hourIn(d, tz) { var p = new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", minute: "2-digit", weekday: "short", hour12: false }).formatToParts(d), o = {}; p.forEach(function (x) { o[x.type] = x.value; }); return { h: +o.hour % 24, m: +o.minute, wd: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(o.weekday) }; }
  function money(v, c) { try { return new Intl.NumberFormat(I[lang].loc === "ar" ? "ar-DZ-u-nu-latn" : I[lang].loc, { style: "currency", currency: c, maximumFractionDigits: 0 }).format(v); } catch (e) { return v + " " + c; } }
  function openWa() { var m = { fr: "Bonjour AFEX Digital, je viens du site de démonstration « " + document.title + " ». Je veux un site comme celui-ci.", ar: "مرحبًا AFEX Digital، أتيت من الموقع التجريبي « " + document.title + " ». أريد موقعًا مثله.", en: "Hello AFEX Digital, I found the demo site “" + document.title + "”. I would like a website like this one." }; window.open("https://wa.me/213550284873?text=" + encodeURIComponent(m[lang] || m.fr), "_blank", "noopener"); }
  function toast(t) { var el = $("#toast"); el.textContent = t; el.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(function () { el.classList.remove("on"); }, 4200); }

  /* the spine follows the section you are reading */
  function setNow(i, anim) {
    cur = i; var s = I[lang].sec[i];
    $("#nowK").textContent = s[0]; $("#nowT").textContent = s[1]; $("#nowP").textContent = s[2];
    $$("#idx a").forEach(function (a, k) { a.setAttribute("aria-current", k + 1 === i); });
    var big = i === 1 ? (translit($("#nm").value)[0].charAt(0) || "ن") : i === 2 ? LETTERS[letter][0] : i === 3 ? (levelOf() >= 0 ? LEVELS[levelOf()][0] : "ع") : BIGL[i];
    $("#bigl").textContent = big;
    if (anim && !STATIC) { gsap.fromTo(".now > *", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: .5, stagger: .06, ease: "power3.out", overwrite: true }); gsap.fromTo("#bigl", { opacity: 0, scale: .9 }, { opacity: 1, scale: 1, duration: .8, ease: "power3.out", overwrite: true }); }
  }
  function renderSpine() {
    var t = I[lang];
    $("#idx").innerHTML = t.idx.map(function (x, i) { return '<li><a href="#' + ["prenom", "lettres", "niveau", "horaires", "prix", "essai"][i] + '">' + x + "</a></li>"; }).join("");
    $("#city").innerHTML = CITIES.map(function (c, i) { return '<option value="' + i + '"' + (i === city ? " selected" : "") + ">" + L(c[2]) + "</option>"; }).join("");
    $("#ckHereL").textContent = t.ckHere;
    tick(); setNow(cur, false);
  }
  function tick() { var n = new Date(); $("#ckHere").textContent = fmt(n, { hour: "2-digit", minute: "2-digit", hour12: false }, CITIES[city][1]); $("#ckAlg").textContent = fmt(n, { hour: "2-digit", minute: "2-digit", hour12: false }, "Africa/Algiers"); }
  /* name */
  function renderName(anim) {
    var t = I[lang], r = translit($("#nm").value), w = r[0];
    $("#nmChips").innerHTML = PICKS.map(function (p) { return '<button type="button">' + p + "</button>"; }).join("");
    $("#nmOut").textContent = w || "…";
    $("#nmSpell").innerHTML = Array.from(w.replace(/\s/g, "")).map(function (c) { return "<i>" + c + "</i>"; }).join("");
    $("#nmNote").textContent = r[1] ? t.nmDict : t.nmNote;
    if (cur === 1) $("#bigl").textContent = w.charAt(0) || "ن";
    if (anim && !STATIC && w) gsap.fromTo("#nmOut", { clipPath: "inset(0 0 0 100%)" }, { clipPath: "inset(0 0 0 0%)", duration: Math.min(1.6, .25 * w.length + .3), ease: "power1.inOut", overwrite: true });
  }
  /* letters */
  function renderLetters() {
    $("#lg").innerHTML = LETTERS.map(function (l, i) { return '<button type="button" data-k="' + i + '" aria-pressed="' + (i === letter) + '" aria-label="' + l[1] + '">' + l[0] + "</button>"; }).join("");
    showLetter(false);
  }
  function showLetter(anim) {
    var t = I[lang], l = LETTERS[letter], c = l[0], j = l[2], T = "ـ";
    var f = [c, j ? c + T : null, j ? T + c + T : null, T + c];
    $("#ld").innerHTML = '<div class="big" lang="ar">' + c + '</div><p style="text-align:center;font-family:var(--h);font-weight:800;font-size:1.3rem;margin-bottom:12px">' + l[1] + '</p><div class="forms">' + f.map(function (x, k) { return '<div class="' + (x ? "" : "na") + '"><b lang="ar">' + (x || "—") + "</b><small>" + t.forms[k] + "</small></div>"; }).join("") + "</div>" + (j ? "" : '<p style="padding:10px 16px;font-size:.84rem;color:var(--ink2);border-top:1px solid var(--line)">' + t.noJoin + "</p>") + '<div class="ex"><b lang="ar">' + l[3] + "</b><span>" + L(l[4]) + "</span></div>";
    if (cur === 2) $("#bigl").textContent = c;
    if (anim && !STATIC) { gsap.from("#ld .big", { scale: .6, opacity: 0, duration: .5, ease: "back.out(2)" }); gsap.from("#ld .forms div", { y: 12, opacity: 0, duration: .35, stagger: .06 }); }
  }
  /* level */
  function levelOf() { if (answers.slice(0, 3).some(function (a) { return a < 0; })) return -1; var s = answers[0] + answers[1] + answers[2] + Math.max(0, answers[3]) * .5; return s < 2 ? 0 : s < 4.5 ? 1 : 2; }
  function renderQuiz() {
    $("#quiz").innerHTML = QUIZ.map(function (q, i) { return '<div class="qq"><span>' + (i + 1) + "</span><div><p>" + L(q[0]) + '</p><div class="opts" role="group">' + q[1].map(function (o, k) { return '<button type="button" data-q="' + i + '" data-a="' + k + '" aria-pressed="' + (answers[i] === k) + '">' + L(o) + "</button>"; }).join("") + "</div></div></div>"; }).join("");
    showLevel(false);
  }
  function showLevel(anim) {
    var t = I[lang], v = levelOf(), box = $("#lvl");
    if (v < 0) { box.hidden = true; return; }
    box.hidden = false; var lv = LEVELS[v];
    box.innerHTML = '<div class="l" lang="ar">' + lv[0] + "</div><div><small>" + t.lvlK + "</small><h3>" + L(lv[1]) + "</h3><p>" + L(lv[2]) + '</p><span class="tr">' + t.coran + L(QURAN[Math.max(0, answers[3])]) + "</span></div>";
    if (cur === 3) $("#bigl").textContent = lv[0];
    if (anim && !STATIC) gsap.fromTo(box, { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: .7, ease: "power3.inOut" });
  }
  /* slots */
  function slotDate(s) { var d = new Date(), base = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1)); while (base.getUTCDay() !== s[0]) base.setUTCDate(base.getUTCDate() + 1); return new Date(Date.UTC(base.getUTCFullYear(), base.getUTCMonth(), base.getUTCDate(), s[1] - 1, s[2])); }
  function slotInfo(s) { var d = slotDate(s), tz = CITIES[city][1], h = hourIn(d, tz), we = h.wd === 0 || h.wd === 6, kind = h.h < 8 || h.h >= 21 ? "off" : we ? "we" : (h.wd === 3 && h.h >= 13 && h.h < 19 && tz.indexOf("Europe") === 0) ? "wed" : h.h < 16 ? "school" : h.h < 20 ? "good" : ""; return { d: d, tz: tz, kind: kind }; }
  function renderSlots() {
    var t = I[lang];
    $("#tz").innerHTML = SLOTS.map(function (s, i) { var x = slotInfo(s); return '<button type="button" class="slot' + (x.kind === "off" || x.kind === "school" ? " off" : "") + '" data-s="' + i + '" aria-pressed="' + (i === slotSel) + '"' + (x.kind === "off" || x.kind === "school" ? " disabled" : "") + "><small>" + fmt(x.d, { weekday: "long" }, x.tz) + '</small><b class="mono">' + fmt(x.d, { hour: "2-digit", minute: "2-digit", hour12: false }, x.tz) + '</b><span class="alg">' + t.atAlg.replace("{h}", fmt(x.d, { weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false }, "Africa/Algiers")) + "</span>" + (x.kind ? '<span class="tag' + (x.kind === "good" || x.kind === "wed" ? " good" : "") + '">' + t[x.kind] + "</span>" : "") + '<span class="alg">' + t.seats.replace("{n}", s[3]) + "</span></button>"; }).join("");
    $("#tzn").textContent = t.tzn;
    $("#slotSel").innerHTML = SLOTS.map(function (s, i) { var x = slotInfo(s); if (x.kind === "off" || x.kind === "school") return ""; return '<option value="' + i + '"' + (i === slotSel ? " selected" : "") + ">" + fmt(x.d, { weekday: "long", hour: "2-digit", minute: "2-digit", hour12: false }, x.tz) + "</option>"; }).join("");
  }
  /* price */
  function price() {
    var t = I[lang], c = CITIES[city], unit = c[4] * (dur === 45 ? 1.4 : 1), month = sess * 4 * unit, extra = (kids - 1) * month * .8, total = Math.round(month + extra);
    $("#pSo").textContent = sess; $("#pKo").textContent = kids;
    $("#pTotS").textContent = t.perM;
    $("#pLines").innerHTML = "<li><span>" + t.unit + "</span><span>" + money(Math.round(unit * 10) / 10, c[3]) + "</span></li><li><span>" + t.count.replace("{n}", sess) + "</span><span>" + money(month, c[3]) + "</span></li>" + (kids > 1 ? "<li><span>" + t.sib + " × " + (kids - 1) + "</span><span>" + money(extra, c[3]) + "</span></li>" : "") + "<li><span>" + t.free + "</span><span></span></li>";
    var el = $("#pTot");
    if (STATIC || !ready) { el.textContent = money(total, c[3]); shownP = total; return; }
    var o = { v: shownP }; gsap.to(o, { v: total, duration: .5, ease: "power3.out", overwrite: true, onUpdate: function () { el.textContent = money(Math.round(o.v), c[3]); }, onComplete: function () { el.textContent = money(total, c[3]); } }); shownP = total;
  }
  function renderForm() {
    var t = I[lang], a = $("#age"), v = a.value || "8", o = "";
    for (var k = 5; k <= 14; k++) o += '<option value="' + k + '"' + (String(k) === v ? " selected" : "") + ">" + k + " " + t.years + "</option>";
    a.innerHTML = o;
  }
  function render() {
    var t = I[lang];
    renderSpine(); renderName(false); renderLetters(); renderQuiz(); renderSlots(); price(); renderForm();
    var names = []; Object.keys(P).forEach(function (k) { if (names.indexOf(P[k]) < 0) names.push(P[k]); });
    $("#credits").textContent = t.photos + " " + names.join(", ") + ".";
  }
  function setLang(l) {
    lang = l; var t = I[l];
    doc.lang = l; doc.dir = l === "ar" ? "rtl" : "ltr"; document.title = t.title;
    $$("[data-i]").forEach(function (e) { if (typeof t[e.dataset.i] === "string") e.textContent = t[e.dataset.i]; });
    $$("[data-alt]").forEach(function (e) { e.alt = t[e.dataset.alt]; });
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.l === l); });
    $(".lang").setAttribute("aria-label", t.lang); $("#msg").textContent = "";
    try { localStorage.setItem("qalam-lang", l); } catch (e) {}
    render();
    if (ready) { bindDynamic(); ScrollTrigger.refresh(); }
  }

  /* events */
  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.l !== lang) setLang(b.dataset.l); }); });
  $("#city").addEventListener("change", function () { city = +this.value; try { localStorage.setItem("qalam-city", city); } catch (e) {} tick(); renderSlots(); price(); if (!STATIC) { gsap.from("#tz .slot b", { y: -10, opacity: 0, duration: .35, stagger: .04 }); gsap.fromTo(".clocks b", { color: "#D2261C" }, { color: "#121212", duration: 1 }); } });
  var nmT; $("#nm").addEventListener("input", function () { clearTimeout(nmT); nmT = setTimeout(function () { renderName(true); }, 180); });
  $("#nmChips").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; $("#nm").value = b.textContent; renderName(true); });
  $("#lg").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; letter = +b.dataset.k; $$("#lg button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); showLetter(true); });
  $("#quiz").addEventListener("click", function (e) { var b = e.target.closest("button[data-q]"); if (!b) return; answers[+b.dataset.q] = +b.dataset.a; $$('#quiz button[data-q="' + b.dataset.q + '"]').forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); showLevel(true); });
  $("#tz").addEventListener("click", function (e) { var b = e.target.closest(".slot"); if (!b || b.disabled) return; slotSel = +b.dataset.s; $$("#tz .slot").forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); $("#slotSel").value = slotSel; });
  $("#pS").addEventListener("input", function () { sess = +this.value; price(); });
  $("#pK").addEventListener("input", function () { kids = +this.value; price(); });
  $("#pD").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; dur = +b.dataset.d; $$("#pD button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); price(); });
  $("#f").addEventListener("submit", function (e) {
    e.preventDefault(); var t = I[lang], c = this.contact.value.trim(), ok = this.kid.value.trim() && (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c) || /^\+\d[\d\s]{7,16}$/.test(c));
    if (!ok) { $("#msg").textContent = t.err; (this.kid.value.trim() ? this.contact : this.kid).focus(); return; }
    $("#msg").textContent = t.demo;
  });
  $("#wa").addEventListener("click", function () { openWa(); });
  $("#wa2").addEventListener("click", function () { openWa(); });

  render();
  setInterval(tick, 20000);
  if (STATIC) return;

  gsap.registerPlugin(ScrollTrigger);
  var lenis = window.Lenis ? new Lenis({ lerp: 0.1 }) : null;
  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach(function (a) { a.addEventListener("click", function (e) { var id = a.getAttribute("href"); if (id.length < 2) return; var el = $(id); if (!el) return; e.preventDefault(); lenis.scrollTo(el, { offset: matchMedia("(max-width: 820px)").matches ? -110 : 0 }); }); });
  }

  /* opening: the ink drop falls, the name writes itself from right to left */
  gsap.from(".spine > *:not(.bigl)", { y: 24, opacity: 0, duration: .8, stagger: .08, ease: "power3.out" });
  gsap.from("#bigl", { opacity: 0, y: 80, duration: 1.4, ease: "power3.out" });
  gsap.fromTo(".intro .ph", { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 1.2, ease: "expo.inOut", delay: .2 });
  ScrollTrigger.batch("[data-up]", { start: "top 90%", once: true, onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, duration: .8, stagger: .08, ease: "power3.out" }); } });

  function bindDynamic() {
    [].concat.apply([], dyn).forEach(function (x) { if (x.targets || x.getChildren) x.revert(); else if (x.kill) x.kill(); }); dyn = [];
    $$("[data-sec]").forEach(function (s) { dyn.push(ScrollTrigger.create({ trigger: s, start: "top 45%", end: "bottom 45%", onToggle: function (st) { if (st.isActive) setNow(+s.dataset.sec, true); } })); });
    dyn.push(ScrollTrigger.create({ trigger: "#prenom", start: "top 60%", once: true, onEnter: function () { renderName(true); } }));
    dyn.push(gsap.fromTo("#lg button", { opacity: 0 }, { opacity: 1, duration: .4, stagger: { each: .02, from: "end" }, scrollTrigger: { trigger: "#lg", start: "top 85%" } }));
    dyn.push(gsap.fromTo("#tz .slot", { opacity: 0, y: 16 }, { opacity: function (i, el) { return el.classList.contains("off") ? .38 : 1; }, y: 0, duration: .5, stagger: .05, clearProps: "opacity,transform", scrollTrigger: { trigger: "#tz", start: "top 85%" } }));
  }
  bindDynamic();
  ready = true;
  price();
  var rz, lw = innerWidth; window.addEventListener("resize", function () { if (innerWidth === lw) return; lw = innerWidth; clearTimeout(rz); rz = setTimeout(function () { ScrollTrigger.refresh(); }, 300); });
})();
