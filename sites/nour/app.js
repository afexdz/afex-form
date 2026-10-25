/* Nour : contenu FR / AR / EN, emploi du temps, parcours, tarifs, places (GSAP + ScrollTrigger + Lenis, en local) */
(function () {
  var doc = document.documentElement;
  var STATIC = doc.classList.contains("static") || !window.gsap || !window.ScrollTrigger;
  if (STATIC) doc.classList.add("static");
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  var P = { coranmain: [961, "Masjid MABA"], lecture: [720, "Andri Helmansyah"], mere: [1024, "Bayan Al Quran Academy"], pere: [820, "Hasan Almasi"], mushaf: [961, "Masjid MABA"], enfants: [853, "Aldin Nasrun"], sourire: [1920, "NADER AYMAN"], sourire2: [1994, "NADER AYMAN"], groupe: [853, "Mochammad Hafidz"], dua: [849, "Raka Dwi Wicaksana"], chrea: [853, "Mezidi Zineb"], chrea2: [853, "Mezidi Zineb"], calame: [853, "Oussama Abouchatir"], science: [960, "YY TEOH"], microscope: [1760, "Anna Khromova"], prisme: [1920, "Silvana Carlos"], vitraux: [2276, "Marjan Samuel-Bredewold"], roses2: [850, "Al Soot"], rose: [1920, "Gabriel Martin"], tapis: [804, "Anna Khromova"], cerceaux: [906, "Anna Khromova"], gym: [853, "Patricia Prudente"], roue: [1510, "Brooke Balentine"], oranges: [853, "Philippe Gauthier"], dessin: [853, "Kelly Sikkema"], ecrire: [853, "Santi Vedrí"], ecrire2: [960, "Rewired Digital"], lanterne: [853, "Ján Čorba"], lanterne3: [792, "Craig Manners"], the: [853, "AmirHadi Manavi Moghadam"] };
  function img(n, sizes, w) { return '<img src="assets/img/' + n + '-640.webp" srcset="assets/img/' + n + '-640.webp 640w, assets/img/' + n + '-1280.webp 1280w" sizes="' + (sizes || "33vw") + '" width="1280" height="' + P[n][0] + '" alt="" loading="lazy" decoding="async">'; }
  function cur() { return lang === "ar" ? "دج" : "DA"; }
  function da(n) { return "⁦" + n.toLocaleString("fr-FR").replace(/ | /g, " ") + "⁩"; }
  var STAR = '<svg width="18" height="18" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 2l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="currentColor"/></svg>';

  var I = {
    fr: { demo0: "Site de démonstration : jardin d’enfants fictif, tarifs et places donnés à titre d’exemple.", demo1: "Voir les autres modèles",
      brand: "Nour", brandS: "Éveil et Coran, Blida", n1: "Emploi du temps", n2: "Le Coran", n3: "Tarifs", n4: "Places", n5: "Blida", cta0: "Vérifier une place",
      kick: "Jardin d’enfants, 3 à 6 ans, Blida", h1a: "Grandir", h1b: "dans la lumière.", lede: "L’éveil, la langue arabe, le Coran et les bonnes manières, avec le français et les sciences. Des petits groupes, une équipe douce et patiente.",
      cta1: "Vérifier une place", cta2: "Voir l’emploi du temps", se1: "ans, en trois sections", se2: "enfants au plus par groupe", se3: "à 16 h 30, dimanche au jeudi",
      pi1: "Coran et valeurs", pi1p: "Mémoriser les courtes sourates, apprendre le respect et le partage.", pi2: "Langue arabe", pi2p: "Lettres, sons et premiers mots, à l’oral puis à l’écrit.", pi3: "Français et sciences", pi3p: "Comptines, curiosité, petites expériences pour comprendre le monde.", pi4: "Motricité et arts", pi4p: "Gym, danse des cerceaux, dessin et calligraphie.",
      ttK: "La semaine type", ttH: "L’emploi du temps, section par section", ttP: "Choisissez la section de votre enfant. Touchez une case pour voir ce qui s’y passe, ou une matière pour la repérer dans la semaine.",
      days: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu."],
      hzK: "Le parcours de mémorisation", hzH: "Sourate après sourate, à son rythme", hzP: "Une séance courte chaque matin, par la répétition et l’écoute, avec une enseignante diplômée. Aucune pression : on avance quand l’enfant est prêt.", hzN: "Chaque mois, vous recevez la fiche de suivi de votre enfant : sourates révisées, invocations apprises, et ce qu’on travaille ensuite.",
      gaK: "Une journée chez Nour", gaH: "Apprendre, bouger, s’émerveiller",
      prK: "Tarifs 2026-2027", prH: "Comparez les formules", sib: "J’inscris un deuxième enfant (−15 %)", perM: "par mois", choose: "Choisir", prN: "Tarifs de démonstration, par mois. Inscription annuelle : 10 000 DA, tenue et fournitures comprises.",
      chK: "Places disponibles", chH: "Y a-t-il une place pour votre enfant ?", chP: "Choisissez la section et la rentrée : la réponse s’affiche tout de suite, avec la liste d’attente si c’est complet.", fSec: "Section", fWhen: "Rentrée",
      when: [["En cours d’année", "Dès le mois prochain"], ["Septembre 2027", "Pré-inscriptions ouvertes"]], vOk: "place(s) disponible(s)", vOkP: "On vous rappelle sous 48 h pour la visite.", vWait: "Liste d’attente", vWaitP: "Position estimée : {n}. On vous appelle dès qu’une place se libère.",
      book: "Réserver cette place", waitB: "M’inscrire sur la liste d’attente", l1: "Votre nom", l2: "Téléphone",
      err: "Indiquez votre nom et un numéro valide.", demo: "Démo AFEX Digital : aucune demande n’a été envoyée, ce formulaire n’est pas encore connecté.",
      blK: "Blida, la ville des roses", blH: "Entre les roses et les cèdres de Chréa", blP: "Le jardin d’enfants est à deux pas du centre. Au printemps, sortie aux roseraies ; en hiver, une journée à Chréa pour voir la neige ; en avril, la cueillette des oranges de la Mitidja.",
      blC: ["Les roseraies au printemps", "Chréa en hiver", "Les orangers de la Mitidja", "La rose de Blida", "Les cèdres de Chréa"],
      fqK: "Questions", fqH: "Ce que les parents demandent", foA: "Jardin d’enfants fictif, éveil et Coran, Blida.", foH: "Horaires", foHV: "Dimanche au jeudi, 8 h à 16 h 30", foC: "Contact", foCV: "WhatsApp et téléphone : numéro de démonstration",
      foot: "© 2026 Nour, jardin d’enfants fictif.", by: "Site réalisé par", photos: "Photos : Unsplash,", lang: "Langue", waDemo: "Démo AFEX Digital : le numéro WhatsApp n’est pas encore connecté.",
      heroAlt: "Des enfants lisent ensemble, assis par terre", enfAlt: "Un groupe d’enfants assis sur des marches", title: "Nour, jardin d’enfants éveil et Coran à Blida" },
    ar: { demo0: "موقع تجريبي: روضة وهمية، الأسعار والأماكن للتوضيح فقط.", demo1: "شاهد النماذج الأخرى",
      brand: "نور", brandS: "إيقاظ وقرآن، البليدة", n1: "استعمال الزمن", n2: "القرآن", n3: "الأسعار", n4: "الأماكن", n5: "البليدة", cta0: "تحقّق من مكان",
      kick: "روضة أطفال، من 3 إلى 6 سنوات، البليدة", h1a: "نكبر", h1b: "في النور.", lede: "الإيقاظ، اللغة العربية، القرآن والأخلاق، مع الفرنسية والعلوم. أفواج صغيرة وفريق لطيف وصبور.",
      cta1: "تحقّق من مكان", cta2: "شاهد استعمال الزمن", se1: "سنوات، في ثلاثة أقسام", se2: "طفلًا على الأكثر في الفوج", se3: "إلى 16:30، من الأحد إلى الخميس",
      pi1: "القرآن والقيم", pi1p: "حفظ قصار السور، وتعلّم الاحترام والمشاركة.", pi2: "اللغة العربية", pi2p: "الحروف والأصوات وأولى الكلمات، شفهيًا ثم كتابةً.", pi3: "الفرنسية والعلوم", pi3p: "أناشيد وفضول وتجارب صغيرة لفهم العالم.", pi4: "الحركة والفنون", pi4p: "رياضة، رقص بالأطواق، رسم وخط عربي.",
      ttK: "الأسبوع النموذجي", ttH: "استعمال الزمن، قسمًا قسمًا", ttP: "اختر قسم طفلك. المس خانة لترى ما يجري فيها، أو مادة لتجدها في الأسبوع.",
      days: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"],
      hzK: "مسار الحفظ", hzH: "سورة بعد سورة، على إيقاعه", hzP: "حصة قصيرة كل صباح، بالتكرار والاستماع، مع معلّمة متخرّجة. بلا ضغط: نتقدّم عندما يكون الطفل مستعدًا.", hzN: "كل شهر تصلكم بطاقة متابعة طفلكم: السور المراجَعة، الأدعية المحفوظة، وما سنعمل عليه بعدها.",
      gaK: "يوم في نور", gaH: "نتعلّم، نتحرّك، ونندهش",
      prK: "أسعار 2026-2027", prH: "قارن بين الصيغ", sib: "أسجّل طفلًا ثانيًا (−15 %)", perM: "في الشهر", choose: "اختيار", prN: "أسعار تجريبية شهرية. التسجيل السنوي: 10 000 دج، يشمل المئزر واللوازم.",
      chK: "الأماكن المتاحة", chH: "هل يوجد مكان لطفلك؟", chP: "اختر القسم والدخول: يظهر الجواب فورًا، مع قائمة الانتظار إن كان ممتلئًا.", fSec: "القسم", fWhen: "الدخول",
      when: [["خلال السنة", "ابتداءً من الشهر القادم"], ["سبتمبر 2027", "التسجيل المسبق مفتوح"]], vOk: "مكان متاح", vOkP: "نتصل بكم خلال 48 ساعة لتحديد الزيارة.", vWait: "قائمة الانتظار", vWaitP: "الترتيب التقريبي: {n}. نتصل بكم فور توفّر مكان.",
      book: "احجز هذا المكان", waitB: "سجّلني في قائمة الانتظار", l1: "اسمك", l2: "الهاتف",
      err: "أدخل اسمك ورقمًا صحيحًا.", demo: "عرض AFEX Digital: لم يُرسل أي طلب، هذا النموذج غير متصل بعد.",
      blK: "البليدة، مدينة الورود", blH: "بين الورود وأرز الشريعة", blP: "الروضة على بعد خطوات من وسط المدينة. في الربيع خرجة إلى حدائق الورود، وفي الشتاء يوم في الشريعة لرؤية الثلج، وفي أفريل جني برتقال متيجة.",
      blC: ["حدائق الورود في الربيع", "الشريعة في الشتاء", "برتقال متيجة", "وردة البليدة", "أرز الشريعة"],
      fqK: "أسئلة", fqH: "ما يسأل عنه الأولياء", foA: "روضة وهمية للإيقاظ والقرآن، البليدة.", foH: "التوقيت", foHV: "من الأحد إلى الخميس، من 8:00 إلى 16:30", foC: "الاتصال", foCV: "واتساب والهاتف: رقم تجريبي",
      foot: "© 2026 نور، روضة وهمية.", by: "موقع من إنجاز", photos: "الصور: Unsplash،", lang: "اللغة", waDemo: "عرض AFEX Digital: رقم واتساب غير متصل بعد.",
      heroAlt: "أطفال يقرؤون معًا جالسين على الأرض", enfAlt: "مجموعة أطفال جالسين على الدرج", title: "نور، روضة إيقاظ وقرآن في البليدة" },
    en: { demo0: "Demo website: a fictional kindergarten, prices and places are examples.", demo1: "See the other templates",
      brand: "Nour", brandS: "Early learning and Quran, Blida", n1: "Timetable", n2: "Quran", n3: "Fees", n4: "Places", n5: "Blida", cta0: "Check a place",
      kick: "Kindergarten, ages 3 to 6, Blida", h1a: "Growing up", h1b: "in the light.", lede: "Early learning, Arabic, the Quran and good manners, with French and science. Small groups and a gentle, patient team.",
      cta1: "Check a place", cta2: "See the timetable", se1: "years, in three sections", se2: "children at most per group", se3: "to 16:30, Sunday to Thursday",
      pi1: "Quran and values", pi1p: "Learning the short surahs by heart, respect and sharing.", pi2: "Arabic", pi2p: "Letters, sounds and first words, spoken then written.", pi3: "French and science", pi3p: "Rhymes, curiosity and small experiments to understand the world.", pi4: "Movement and arts", pi4p: "Gym, hoop dance, drawing and calligraphy.",
      ttK: "A typical week", ttH: "The timetable, section by section", ttP: "Pick your child’s section. Tap a slot to see what happens, or a subject to spot it across the week.",
      days: ["Sun", "Mon", "Tue", "Wed", "Thu"],
      hzK: "The memorisation path", hzH: "Surah after surah, at their own pace", hzP: "A short session each morning, through repetition and listening, with a qualified teacher. No pressure: we move on when the child is ready.", hzN: "Every month you get your child’s progress sheet: surahs revised, supplications learned, and what comes next.",
      gaK: "A day at Nour", gaH: "Learning, moving, wondering",
      prK: "Fees 2026-2027", prH: "Compare the plans", sib: "I’m enrolling a second child (−15%)", perM: "per month", choose: "Choose", prN: "Demo prices, per month. Yearly registration: 10,000 DA, uniform and supplies included.",
      chK: "Places available", chH: "Is there a place for your child?", chP: "Pick the section and start date: the answer shows straight away, with the waiting list if it’s full.", fSec: "Section", fWhen: "Start",
      when: [["During the year", "From next month"], ["September 2027", "Pre-registration open"]], vOk: "place(s) available", vOkP: "We call you back within 48 hours for a visit.", vWait: "Waiting list", vWaitP: "Estimated position: {n}. We call as soon as a place opens.",
      book: "Reserve this place", waitB: "Join the waiting list", l1: "Your name", l2: "Phone",
      err: "Enter your name and a valid number.", demo: "AFEX Digital demo: no request was sent, this form is not connected yet.",
      blK: "Blida, the city of roses", blH: "Between the roses and the cedars of Chréa", blP: "The kindergarten is a short walk from the centre. In spring we visit the rose gardens; in winter, a day at Chréa to see the snow; in April, orange picking in the Mitidja.",
      blC: ["Rose gardens in spring", "Chréa in winter", "Mitidja orange groves", "The Blida rose", "The cedars of Chréa"],
      fqK: "Questions", fqH: "What parents ask", foA: "A fictional early-learning and Quran kindergarten, Blida.", foH: "Hours", foHV: "Sunday to Thursday, 8:00 to 16:30", foC: "Contact", foCV: "WhatsApp and phone: demo number",
      foot: "© 2026 Nour, a fictional kindergarten.", by: "Website by", photos: "Photos: Unsplash,", lang: "Language", waDemo: "AFEX Digital demo: the WhatsApp number is not connected yet.",
      heroAlt: "Children reading together, sitting on the floor", enfAlt: "A group of children sitting on steps", title: "Nour, early learning and Quran kindergarten in Blida" }
  };

  var SUBJ = {
    coran: { c: "#F3D9A0", img: "mere", t: { fr: "Coran", ar: "القرآن", en: "Quran" }, d: { fr: "Écoute, répétition et révision des sourates, en petit cercle, avec les invocations du jour.", ar: "استماع وتكرار ومراجعة السور في حلقة صغيرة، مع أدعية اليوم.", en: "Listening, repeating and revising surahs in a small circle, with the day’s supplications." } },
    arabe: { c: "#CFE6DF", img: "calame", t: { fr: "Arabe", ar: "العربية", en: "Arabic" }, d: { fr: "Les lettres avec leurs sons, puis les mots ; le tracé à la main, la lecture d’albums.", ar: "الحروف بأصواتها ثم الكلمات؛ الكتابة باليد وقراءة القصص.", en: "Letters with their sounds, then words; tracing by hand and picture books." } },
    francais: { c: "#D9E4F7", img: "ecrire2", t: { fr: "Français", ar: "الفرنسية", en: "French" }, d: { fr: "Comptines, vocabulaire du quotidien et petites histoires, à l’oral surtout.", ar: "أناشيد ومفردات يومية وقصص قصيرة، شفهيًا بالأساس.", en: "Rhymes, everyday words and short stories, mostly spoken." } },
    maths: { c: "#E2EED3", img: "ecrire", t: { fr: "Nombres", ar: "الأعداد", en: "Numbers" }, d: { fr: "Compter, comparer, trier : les mathématiques avec des objets avant le papier.", ar: "العدّ والمقارنة والفرز: الرياضيات بالأشياء قبل الورق.", en: "Counting, comparing, sorting: maths with objects before paper." } },
    sciences: { c: "#E8DDF5", img: "science", t: { fr: "Sciences", ar: "العلوم", en: "Science" }, d: { fr: "La lumière, l’eau, les plantes : une petite expérience par semaine, en blouse blanche.", ar: "الضوء والماء والنباتات: تجربة صغيرة كل أسبوع بالمئزر الأبيض.", en: "Light, water, plants: one small experiment a week, in a white coat." } },
    motricite: { c: "#F8D3DA", img: "cerceaux", t: { fr: "Motricité", ar: "الحركة", en: "Movement" }, d: { fr: "Gym douce, cerceaux, équilibre, dans la salle ou dans la cour.", ar: "رياضة خفيفة، أطواق، توازن، في القاعة أو الساحة.", en: "Gentle gym, hoops and balance, indoors or in the yard." } },
    arts: { c: "#FBE4C8", img: "dessin", t: { fr: "Arts", ar: "الفنون", en: "Arts" }, d: { fr: "Dessin, peinture, et initiation à la calligraphie arabe pour les grands.", ar: "رسم، تلوين، وتمهيد للخط العربي للكبار.", en: "Drawing, painting, and a first taste of Arabic calligraphy for the oldest." } },
    calme: { c: "#EEE8DB", img: "tapis", t: { fr: "Temps calme", ar: "وقت هادئ", en: "Quiet time" }, d: { fr: "Repos pour les petits, histoire lue pour les autres, après le déjeuner.", ar: "راحة للصغار وقصة مقروءة للآخرين بعد الغداء.", en: "Rest for the youngest, a story for the others, after lunch." } }
  };
  var TIMES = ["08:30", "09:30", "10:45", "13:30", "14:45"];
  var SECS = [
    { t: { fr: "Petite section", ar: "القسم الصغير", en: "Little section" }, a: { fr: "3 à 4 ans", ar: "3 إلى 4 سنوات", en: "3 to 4" }, g: [["coran", "coran", "coran", "coran", "coran"], ["arabe", "francais", "arabe", "francais", "arabe"], ["motricite", "arts", "sciences", "motricite", "arts"], ["calme", "calme", "calme", "calme", "calme"], ["arts", "maths", "motricite", "maths", "francais"]], free: [2, 8] },
    { t: { fr: "Moyenne section", ar: "القسم المتوسط", en: "Middle section" }, a: { fr: "4 à 5 ans", ar: "4 إلى 5 سنوات", en: "4 to 5" }, g: [["coran", "coran", "coran", "coran", "coran"], ["arabe", "maths", "arabe", "francais", "arabe"], ["sciences", "motricite", "francais", "sciences", "motricite"], ["calme", "arts", "calme", "arts", "calme"], ["maths", "francais", "motricite", "arabe", "arts"]], free: [0, 5], wait: 3 },
    { t: { fr: "Grande section", ar: "القسم التحضيري", en: "Preschool" }, a: { fr: "5 à 6 ans", ar: "5 إلى 6 سنوات", en: "5 to 6" }, g: [["coran", "coran", "coran", "coran", "coran"], ["arabe", "arabe", "maths", "arabe", "maths"], ["francais", "sciences", "francais", "maths", "francais"], ["arts", "motricite", "arabe", "sciences", "motricite"], ["maths", "arts", "sciences", "francais", "arts"]], free: [1, 0], wait: 6 }
  ];
  var STOPS = [
    { lv: 0, s: [["Al-Fâtiha", "الفاتحة", "Al-Fatiha"], ["An-Nâs", "الناس", "An-Nas"], ["Al-Falaq", "الفلق", "Al-Falaq"], ["Al-Ikhlâs", "الإخلاص", "Al-Ikhlas"]], p: { fr: "Et les invocations du repas et du coucher.", ar: "وأدعية الطعام والنوم.", en: "Plus the supplications for meals and bedtime." } },
    { lv: 1, s: [["Al-Masad", "المسد", "Al-Masad"], ["An-Nasr", "النصر", "An-Nasr"], ["Al-Kâfirûn", "الكافرون", "Al-Kafirun"], ["Al-Kawthar", "الكوثر", "Al-Kawthar"]], p: { fr: "Et les invocations pour entrer et sortir de la maison.", ar: "وأدعية دخول البيت والخروج منه.", en: "Plus the supplications for leaving and entering home." } },
    { lv: 2, s: [["Al-Mâ‘ûn", "الماعون", "Al-Ma’un"], ["Quraysh", "قريش", "Quraysh"], ["Al-Fîl", "الفيل", "Al-Fil"], ["Al-‘Asr", "العصر", "Al-Asr"]], p: { fr: "Et la lecture des lettres liées, pour lire bientôt seul.", ar: "وقراءة الحروف المتصلة، ليقرأ قريبًا بنفسه.", en: "Plus reading joined letters, to read alone soon." } },
    { lv: 3, s: [], t: { fr: "La fête du Coran", ar: "حفل القرآن", en: "The Quran celebration" }, p: { fr: "En juin, chaque enfant récite ce qu’il a appris devant sa famille, sans classement.", ar: "في جوان، يتلو كل طفل ما حفظه أمام عائلته، بلا ترتيب.", en: "In June, each child recites what they learned in front of their family, with no ranking." } }
  ];
  var MQ = [["groupe", "science", "cerceaux", "dessin", "sourire", "calame", "gym", "microscope"], ["dua", "prisme", "roue", "ecrire", "sourire2", "pere", "tapis", "vitraux", "ecrire2"]];
  var PLANS = [
    { t: { fr: "Matinée", ar: "الصباح", en: "Mornings" }, h: { fr: "8 h – 12 h", ar: "8:00 – 12:00", en: "8:00 – 12:00" }, p: 14000 },
    { hot: true, t: { fr: "Journée", ar: "اليوم الكامل", en: "Full day" }, h: { fr: "8 h – 16 h 30", ar: "8:00 – 16:30", en: "8:00 – 16:30" }, p: 22000 },
    { t: { fr: "Journée et transport", ar: "اليوم والنقل", en: "Full day and transport" }, h: { fr: "Ramassage matin et soir", ar: "نقل صباحًا ومساءً", en: "Pick-up and drop-off" }, p: 27500 }
  ];
  var ROWS = [
    [{ fr: "Coran et langue arabe", ar: "القرآن واللغة العربية", en: "Quran and Arabic" }, [1, 1, 1]],
    [{ fr: "Français, nombres et sciences", ar: "الفرنسية والأعداد والعلوم", en: "French, numbers and science" }, [{ fr: "2 fois par semaine", ar: "مرتان في الأسبوع", en: "Twice a week" }, 1, 1]],
    [{ fr: "Motricité et arts", ar: "الحركة والفنون", en: "Movement and arts" }, [{ fr: "1 fois par semaine", ar: "مرة في الأسبوع", en: "Once a week" }, 1, 1]],
    [{ fr: "Déjeuner chaud préparé sur place", ar: "غداء ساخن يُحضّر في عين المكان", en: "Hot lunch made on site" }, [0, 1, 1]],
    [{ fr: "Temps calme et histoire", ar: "وقت هادئ وقصة", en: "Quiet time and a story" }, [0, 1, 1]],
    [{ fr: "Transport matin et soir", ar: "النقل صباحًا ومساءً", en: "Morning and evening transport" }, [0, 0, 1]],
    [{ fr: "Fiche de suivi mensuelle", ar: "بطاقة متابعة شهرية", en: "Monthly progress sheet" }, [1, 1, 1]],
    [{ fr: "Fête du Coran de fin d’année", ar: "حفل القرآن لنهاية السنة", en: "End-of-year Quran celebration" }, [1, 1, 1]]
  ];
  var BLG = ["roses2", "chrea", "oranges", "rose", "chrea2"];
  var EVENTS = [
    ["lanterne3", { fr: "Ramadan", ar: "رمضان", en: "Ramadan" }, { fr: "Lanternes en papier, contes du soir et un goûter partagé avant les vacances.", ar: "فوانيس ورقية، حكايات المساء، ولمجة مشتركة قبل العطلة.", en: "Paper lanterns, evening tales and a shared snack before the holidays." }, { fr: "Chaque année", ar: "كل سنة", en: "Every year" }],
    ["the", { fr: "L’Aïd", ar: "العيد", en: "Eid" }, { fr: "Tenues traditionnelles, gâteaux de la maison et photos de groupe.", ar: "لباس تقليدي، حلويات البيت وصور جماعية.", en: "Traditional outfits, homemade cakes and group photos." }, { fr: "Deux fois par an", ar: "مرتين في السنة", en: "Twice a year" }],
    ["groupe", { fr: "La fête du Coran", ar: "حفل القرآن", en: "The Quran celebration" }, { fr: "Chaque enfant récite devant sa famille, en tenue blanche.", ar: "يتلو كل طفل أمام عائلته باللباس الأبيض.", en: "Each child recites in front of their family, dressed in white." }, { fr: "En juin", ar: "في جوان", en: "In June" }]
  ];
  var FAQ = [
    [{ fr: "Mon enfant doit-il déjà connaître des sourates ?", ar: "هل يجب أن يحفظ طفلي سورًا من قبل؟", en: "Does my child need to know any surahs already?" }, { fr: "Non. On commence par l’écoute et Al-Fâtiha, puis chacun avance à son rythme. Ce qui compte, c’est qu’il aime venir.", ar: "لا. نبدأ بالاستماع وبالفاتحة، ثم يتقدّم كل طفل على إيقاعه. المهم أن يحب المجيء.", en: "No. We start with listening and Al-Fatiha, then each child goes at their own pace. What matters is that they enjoy coming." }],
    [{ fr: "Comment se passe la mémorisation sans pression ?", ar: "كيف يكون الحفظ بلا ضغط؟", en: "How is memorising done without pressure?" }, { fr: "Des séances de 20 minutes, en petit cercle, par la répétition et le chant. Pas de classement ni de punition : on félicite chaque progrès.", ar: "حصص من 20 دقيقة في حلقة صغيرة، بالتكرار والإنشاد. بلا ترتيب ولا عقاب: نشجّع كل تقدّم.", en: "20-minute sessions in a small circle, through repetition and chanting. No ranking or punishment: every step forward is praised." }],
    [{ fr: "Les cours de français et de sciences sont-ils sérieux ?", ar: "هل دروس الفرنسية والعلوم جدّية؟", en: "Are French and science taken seriously?" }, { fr: "Oui. Le programme suit le préscolaire officiel, avec le français dès la petite section et une expérience scientifique chaque semaine.", ar: "نعم. يتبع البرنامج التحضيري الرسمي، مع الفرنسية من القسم الصغير وتجربة علمية كل أسبوع.", en: "Yes. The programme follows the official preschool curriculum, with French from the first section and a science experiment every week." }],
    [{ fr: "Qui sont les enseignantes ?", ar: "من هن المعلّمات؟", en: "Who are the teachers?" }, { fr: "Des éducatrices diplômées en petite enfance, et une enseignante de Coran titulaire d’une ijâza pour les séances de mémorisation.", ar: "مربّيات متخرّجات في الطفولة المبكرة، ومعلّمة قرآن حاصلة على إجازة لحصص الحفظ.", en: "Carers qualified in early childhood, and a Quran teacher holding an ijaza for the memorisation sessions." }],
    [{ fr: "Et pendant le Ramadan ?", ar: "وفي رمضان؟", en: "What about Ramadan?" }, { fr: "Les horaires passent de 8 h 30 à 15 h, le déjeuner est maintenu pour les enfants.", ar: "يصبح التوقيت من 8:30 إلى 15:00، ويبقى الغداء مقدّمًا للأطفال.", en: "Hours become 8:30 to 15:00, and lunch is still served to the children." }],
    [{ fr: "Puis-je assister à une séance ?", ar: "هل يمكنني حضور حصة؟", en: "Can I sit in on a session?" }, { fr: "Oui, le premier jeudi du mois, sur rendez-vous. Vous verrez comment se passe la matinée.", ar: "نعم، أول خميس من كل شهر، بموعد. سترون كيف يمرّ الصباح.", en: "Yes, on the first Thursday of the month, by appointment. You will see how the morning goes." }]
  ];

  var lang = "fr", sec = 0, cell = [0, 0], filt = null, sib = false, csec = 0, when = 0, ready = false, dyn = [], shown = [0, 0, 0];
  try { var sv = localStorage.getItem("nour-lang"); if (I[sv]) lang = sv; } catch (e) {}
  function L(o) { return o[lang]; }
  function toast(t) { var el = $("#toast"); el.textContent = t; el.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(function () { el.classList.remove("on"); }, 4200); }

  /* timetable */
  function renderTT() {
    var t = I[lang];
    $("#ttTabs").innerHTML = SECS.map(function (s, i) { return '<button type="button" role="tab" aria-selected="' + (i === sec) + '" tabindex="' + (i === sec ? 0 : -1) + '" data-s="' + i + '">' + L(s.t) + " · " + L(s.a) + "</button>"; }).join("");
    $("#legend").innerHTML = Object.keys(SUBJ).map(function (k) { return '<button type="button" data-k="' + k + '" aria-pressed="' + (!filt || filt === k) + '"><i style="background:' + SUBJ[k].c + '"></i>' + L(SUBJ[k].t) + "</button>"; }).join("");
    renderGrid();
  }
  function renderGrid() {
    var t = I[lang], g = SECS[sec].g, h = '<span></span>' + t.days.map(function (d) { return '<span class="hd">' + d + "</span>"; }).join("");
    g.forEach(function (row, r) { h += '<span class="tm">' + TIMES[r] + "</span>" + row.map(function (k, d) { return '<button type="button" class="cell' + (filt && filt !== k ? " dim" : "") + '" style="--c:' + SUBJ[k].c + '" data-r="' + r + '" data-d="' + d + '" aria-pressed="' + (cell[0] === r && cell[1] === d) + '">' + L(SUBJ[k].t) + "<small>" + TIMES[r] + "</small></button>"; }).join(""); });
    $("#grid").innerHTML = h;
    renderDet(false);
  }
  function renderDet(anim) {
    var t = I[lang], k = SECS[sec].g[cell[0]][cell[1]], s = SUBJ[k];
    $("#det").innerHTML = img(s.img, "(min-width:900px) 35vw, 92vw") + '<div class="bd"><small>' + t.days[cell[1]] + " · " + TIMES[cell[0]] + "</small><h3>" + L(s.t) + "</h3><p>" + L(s.d) + "</p></div>";
    if (anim && !STATIC) { gsap.fromTo("#det img", { clipPath: "circle(0% at 50% 50%)" }, { clipPath: "circle(75% at 50% 50%)", duration: .8, ease: "expo.out" }); gsap.from("#det .bd > *", { y: 14, opacity: 0, duration: .45, stagger: .05 }); }
  }
  /* hifz path */
  function renderStops() {
    var t = I[lang], li = lang === "ar" ? 1 : lang === "en" ? 2 : 0;
    $("#stops").innerHTML = STOPS.map(function (s) { var hd = s.t ? L(s.t) : L(SECS[s.lv].t); return '<article class="stop"><span class="lv">' + (s.t ? "★" : L(SECS[s.lv].a)) + "</span><h3>" + hd + "</h3>" + (s.s.length ? "<ul>" + s.s.map(function (x) { return '<li lang="' + (li === 1 ? "ar" : "") + '">' + x[li] + "</li>"; }).join("") + "</ul>" : "") + "<p>" + L(s.p) + "</p></article>"; }).join("");
    drawPath();
  }
  function drawPath() {
    var box = $(".path"), svg = $("#pathSvg"), st = $$("#stops .stop"); if (!st.length) return;
    var b = box.getBoundingClientRect(), pts = st.map(function (e) { var r = e.getBoundingClientRect(); return [r.left - b.left + r.width / 2, r.top - b.top + 12]; });
    svg.setAttribute("viewBox", "0 0 " + b.width + " " + b.height);
    var d = "M" + pts[0][0] + " " + pts[0][1];
    for (var i = 1; i < pts.length; i++) { var p = pts[i - 1], q = pts[i], my = Math.min(p[1], q[1]) - 40; d += " C " + p[0] + " " + my + ", " + q[0] + " " + my + ", " + q[0] + " " + q[1]; }
    $("#pathL").setAttribute("d", d);
  }
  function renderMQ() {
    $("#mq").innerHTML = MQ.map(function (r) { var f = r.map(function (n) { return "<figure>" + img(n, "320px") + "</figure>"; }).join(""); return '<div class="row">' + f + f + "</div>"; }).join("");
  }
  /* pricing */
  function renderTbl() {
    var t = I[lang], ck = '<svg class="yes" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" aria-label="✓"><path d="M5 12l5 5 9-10"/></svg>', no = '<svg class="no" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-label="–"><path d="M6 12h12"/></svg>';
    var h = "<thead><tr><th></th>" + PLANS.map(function (p) { return '<th class="' + (p.hot ? "hot" : "") + '"><h3>' + L(p.t) + "</h3><small>" + L(p.h) + "</small></th>"; }).join("") + "</tr></thead><tbody>";
    h += "<tr><td></td>" + PLANS.map(function (p, i) { return '<td class="' + (p.hot ? "hot" : "") + '"><p class="pr"><span data-n="' + i + '">' + da(price(i)) + "</span> " + cur() + "<small>" + t.perM + "</small></p></td>"; }).join("") + "</tr>";
    h += ROWS.map(function (r) { return "<tr><td>" + L(r[0]) + "</td>" + r[1].map(function (v, i) { return '<td class="' + (PLANS[i].hot ? "hot" : "") + '">' + (v === 1 ? ck : v === 0 ? no : "<small>" + L(v) + "</small>") + "</td>"; }).join("") + "</tr>"; }).join("");
    h += "</tbody><tfoot><tr><td></td>" + PLANS.map(function (p, i) { return '<td><a class="btn ' + (p.hot ? "g" : "nt") + '" href="#places">' + t.choose + "</a></td>"; }).join("") + "</tr></tfoot>";
    $("#tbl").innerHTML = h; shown = PLANS.map(function (_, i) { return price(i); });
  }
  function price(i) { return Math.round(PLANS[i].p * (sib ? .85 : 1) / 100) * 100; }
  function updPrices() {
    PLANS.forEach(function (_, i) { var el = $('[data-n="' + i + '"]'), v = price(i); if (STATIC) { el.textContent = da(v); return; } var o = { v: shown[i] }; gsap.to(o, { v: v, duration: .6, ease: "power3.out", onUpdate: function () { el.textContent = da(Math.round(o.v / 100) * 100); } }); shown[i] = v; });
  }
  /* place checker */
  function renderChk() {
    var t = I[lang];
    $("#oSec").innerHTML = SECS.map(function (s, i) { return '<button type="button" data-s="' + i + '" aria-pressed="' + (i === csec) + '">' + L(s.t) + "<small>" + L(s.a) + "</small></button>"; }).join("");
    $("#oWhen").innerHTML = t.when.map(function (w, i) { return '<button type="button" data-w="' + i + '" aria-pressed="' + (i === when) + '">' + w[0] + "<small>" + w[1] + "</small></button>"; }).join("");
    verdict(false);
  }
  function verdict(anim) {
    var t = I[lang], s = SECS[csec], n = s.free[when], v = $("#verdict");
    if (n) { v.className = "verdict ok"; v.innerHTML = "<b>" + n + "</b><span><strong>" + t.vOk + "</strong>" + t.vOkP + "</span>"; }
    else { var pos = (s.wait || 2) + (when ? 2 : 0); v.className = "verdict wait"; v.innerHTML = "<b>" + pos + "</b><span><strong>" + t.vWait + "</strong>" + t.vWaitP.replace("{n}", pos) + "</span>"; }
    $("#send").textContent = n ? t.book : t.waitB;
    if (anim && !STATIC) gsap.fromTo(v, { scale: .94, opacity: .3 }, { scale: 1, opacity: 1, clearProps: "transform,opacity", duration: .5, ease: "back.out(2)" });
  }
  function renderBlida() {
    var t = I[lang];
    $("#blg").innerHTML = BLG.map(function (n, i) { return "<figure>" + img(n, i ? "25vw" : "45vw") + "<figcaption>" + t.blC[i] + "</figcaption></figure>"; }).join("");
    $("#ev").innerHTML = EVENTS.map(function (e) { return "<article>" + img(e[0], "(min-width:900px) 33vw, 92vw") + '<div class="bd"><small>' + L(e[3]) + "</small><h3>" + L(e[1]) + "</h3><p>" + L(e[2]) + "</p></div></article>"; }).join("");
  }
  function renderFaq() {
    $("#faqL").innerHTML = FAQ.map(function (f, i) { return "<details" + (i === 0 ? " open" : "") + "><summary>" + L(f[0]) + '<i aria-hidden="true">' + STAR + "</i></summary><p>" + L(f[1]) + "</p></details>"; }).join("");
  }
  function render() {
    var t = I[lang];
    renderTT(); renderStops(); renderMQ(); renderTbl(); renderChk(); renderBlida(); renderFaq();
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
    try { localStorage.setItem("nour-lang", l); } catch (e) {}
    render();
    if (ready) { bindDynamic(); ScrollTrigger.refresh(); }
  }

  /* events */
  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.l !== lang) setLang(b.dataset.l); }); });
  $("#ttTabs").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; sec = +b.dataset.s; $$("#ttTabs button").forEach(function (x) { x.setAttribute("aria-selected", x === b); x.tabIndex = x === b ? 0 : -1; }); renderGrid(); if (!STATIC) gsap.fromTo("#grid .cell", { scale: .6, opacity: 0 }, { scale: 1, opacity: 1, clearProps: "transform,opacity", duration: .45, stagger: { each: .015, grid: [5, 5], from: "start" }, ease: "back.out(2)" }); });
  $("#legend").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; filt = filt === b.dataset.k ? null : b.dataset.k; $$("#legend button").forEach(function (x) { x.setAttribute("aria-pressed", !filt || filt === x.dataset.k); }); $$("#grid .cell").forEach(function (c) { c.classList.toggle("dim", !!filt && SECS[sec].g[+c.dataset.r][+c.dataset.d] !== filt); }); });
  $("#grid").addEventListener("click", function (e) { var b = e.target.closest(".cell"); if (!b) return; cell = [+b.dataset.r, +b.dataset.d]; $$("#grid .cell").forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); renderDet(true); });
  $("#sib").addEventListener("click", function () { sib = !sib; this.setAttribute("aria-checked", sib); updPrices(); });
  $("#oSec").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; csec = +b.dataset.s; $$("#oSec button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); verdict(true); });
  $("#oWhen").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; when = +b.dataset.w; $$("#oWhen button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); verdict(true); });
  $("#f").addEventListener("submit", function (e) {
    e.preventDefault(); var t = I[lang], ok = this.name.value.trim() && /^0[5-7]\d{8}$/.test(this.tel.value.replace(/\s/g, ""));
    if (!ok) { $("#msg").textContent = t.err; (this.name.value.trim() ? this.tel : this.name).focus(); return; }
    $("#msg").textContent = t.demo;
  });
  $("#waf").addEventListener("click", function () { toast(I[lang].waDemo); });
  var hdr = document.querySelector("header");
  function menu(open) { hdr.classList.toggle("open", open); $("#menuB").setAttribute("aria-expanded", open); if (window.lenis) { } }
  $("#menuB").addEventListener("click", function () { menu(!hdr.classList.contains("open")); });
  $$("#mnav a").forEach(function (a) { a.addEventListener("click", function () { menu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && hdr.classList.contains("open")) { menu(false); $("#menuB").focus(); } });

  render();
  window.addEventListener("load", drawPath);
  if (STATIC) return;

  gsap.registerPlugin(ScrollTrigger);
  var lenis = window.Lenis ? new Lenis({ lerp: 0.09 }) : null;
  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach(function (a) { a.addEventListener("click", function (e) { var id = a.getAttribute("href"); if (id.length < 2) return; var el = $(id); if (!el) return; e.preventDefault(); lenis.scrollTo(el, { offset: id === "#top" ? 0 : -76 }); }); });
  }

  /* hero: a pool of light that follows the pointer, or drifts on its own */
  var shade = $("#shade"), light = { x: 70, y: 40, r: 120 }, idle = true;
  function paint() { shade.style.setProperty("--x", light.x + "%"); shade.style.setProperty("--y", light.y + "%"); shade.style.setProperty("--r", light.r + "px"); }
  gsap.to(light, { r: Math.max(320, innerWidth * .28), duration: 2.2, ease: "power2.out", onUpdate: paint });
  var drift = gsap.to(light, { x: 30, y: 55, duration: 6, ease: "sine.inOut", yoyo: true, repeat: -1, onUpdate: paint, delay: .8 });
  if (matchMedia("(hover: hover)").matches) $("#hero").addEventListener("pointermove", function (e) { if (idle) { drift.pause(); idle = false; } var r = this.getBoundingClientRect(); gsap.to(light, { x: (e.clientX - r.left) / r.width * 100, y: (e.clientY - r.top) / r.height * 100, duration: .9, ease: "power3.out", overwrite: "auto", onUpdate: paint }); });
  gsap.from(".hero .orn, .hero h1 > *, .hero p, .hero .acts", { y: 40, opacity: 0, filter: "blur(10px)", duration: 1.2, stagger: .12, ease: "power3.out", delay: .3 });
  gsap.from(".seal > div", { x: doc.dir === "rtl" ? -40 : 40, opacity: 0, duration: .9, stagger: .12, ease: "power3.out", delay: .9 });
  gsap.from(".hero .ph img", { scale: 1.15, duration: 2.6, ease: "power2.out" });
  ScrollTrigger.batch("[data-up]", { start: "top 88%", once: true, onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1, stagger: .1, ease: "power3.out" }); } });

  /* two rows of photos drifting in opposite directions */
  var rows = $$("#mq .row"), mqT = [];
  function startMQ() { mqT.forEach(function (x) { x.kill(); }); mqT = []; rows = $$("#mq .row"); rows.forEach(function (r, i) { var dir = (i ? 1 : -1) * (doc.dir === "rtl" ? -1 : 1); gsap.set(r, { xPercent: dir < 0 ? 0 : -50 }); mqT.push(gsap.to(r, { xPercent: dir < 0 ? -50 : 0, duration: 46 + i * 8, ease: "none", repeat: -1 })); r.onmouseenter = function () { mqT[i].timeScale(.15); }; r.onmouseleave = function () { mqT[i].timeScale(1); }; }); }

  function bindDynamic() {
    [].concat.apply([], dyn).forEach(function (x) { if (x.targets || x.getChildren) x.revert(); else if (x.kill) x.kill(); }); dyn = [];
    dyn.push(gsap.from(".pil > .w > div", { y: 30, opacity: 0, duration: .8, stagger: .1, ease: "power3.out", scrollTrigger: { trigger: ".pil", start: "top 90%" } }));
    dyn.push(gsap.fromTo("#grid .cell", { scale: .6, opacity: 0 }, { scale: 1, opacity: 1, duration: .5, stagger: { each: .02, from: "start" }, ease: "back.out(2)", scrollTrigger: { trigger: "#grid", start: "top 80%" } }));
    drawPath();
    var pl = $("#pathL"), len = pl.getTotalLength();
    gsap.set(pl, { strokeDasharray: "6 8", strokeDashoffset: 0 });
    dyn.push(gsap.fromTo(".path .line", { clipPath: doc.dir === "rtl" ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0%)", ease: "none", scrollTrigger: { trigger: ".path", start: "top 75%", end: "bottom 60%", scrub: .6 } }));
    dyn.push(gsap.from("#stops .stop", { y: 60, opacity: 0, filter: "blur(8px)", duration: 1, stagger: .18, ease: "power3.out", scrollTrigger: { trigger: "#stops", start: "top 80%" } }));
    dyn.push(gsap.from("#tbl tbody tr", { x: doc.dir === "rtl" ? 30 : -30, opacity: 0, duration: .5, stagger: .05, ease: "power3.out", scrollTrigger: { trigger: "#tbl", start: "top 80%" } }));
    dyn.push(gsap.from("#blg figure", { clipPath: "inset(100% 0 0 0)", duration: 1.3, stagger: .12, ease: "expo.inOut", scrollTrigger: { trigger: "#blg", start: "top 80%" } }));
    dyn.push(gsap.from("#ev article", { y: 60, opacity: 0, duration: 1, stagger: .12, ease: "power3.out", scrollTrigger: { trigger: "#ev", start: "top 85%" } }));
    startMQ();
  }
  bindDynamic();
  ready = true;
  var rz, lw = innerWidth; window.addEventListener("resize", function () { if (innerWidth === lw) return; lw = innerWidth; clearTimeout(rz); rz = setTimeout(function () { drawPath(); ScrollTrigger.refresh(); }, 300); });
})();
