/* Ghazal Kids : contenu FR / AR / EN, sentier, badges, sac, carte, carnet, tarifs (GSAP + ScrollTrigger + Lenis, en local) */
(function () {
  var doc = document.documentElement;
  var STATIC = doc.classList.contains("static") || !window.gsap || !window.ScrollTrigger;
  if (STATIC) doc.classList.add("static");
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  var P = { mansourah: [960, "Halima Bouchouicha"], arcs: [1920, "Mohammed el Amine Mohammedi"], fleur: [853, "Hichem Meghachou"], vallee: [746, "Kat Med"], camp: [811, "Hichem Meghachou"], hamac: [853, "Alexandr Podvalny"], arbres: [960, "Annie Spratt"], mousse: [853, "Markus Spiske"], branche: [1707, "Annie Spratt"], pins: [1920, "Klara Kulikova"], sentier: [1920, "Mieke Campbell"], fille: [1792, "Kyle Nieber"], flaque: [1919, "Nathan Dumlao"], saut: [853, "Chris McIntosh"], bottes2: [853, "Markus Spiske"], bottes: [1920, "Joe Lee"], jumelles: [1920, "Jen Theodore"], jumelles2: [853, "David Carpenter"], jumelles3: [853, "Jen Theodore"], jumelles4: [1694, "Anna Khromova"], grimpe: [1923, "Joey Huang"], grimpe2: [1920, "Anna Khromova"], suspendu: [960, "Annie Spratt"], groupe: [1917, "Emanuel Turbuc"], panier: [1920, "Jesse Cortez"], feuilles: [865, "Scott Webb"], rire: [2275, "Tao Yuan"], feuilles2: [960, "Matt Arnold"], course: [1920, "Alsu Vershinina"], couronne: [853, "Jessie Maxwell"], feuille: [1920, "Nataliee Shell"], potager: [1920, "CDC"] };
  function img(n, sizes) { return '<img src="assets/img/' + n + '-640.webp" srcset="assets/img/' + n + '-640.webp 640w, assets/img/' + n + '-1280.webp 1280w" sizes="' + (sizes || "33vw") + '" width="1280" height="' + P[n][0] + '" alt="" loading="lazy" decoding="async">'; }
  function cur() { return lang === "ar" ? "دج" : "DA"; }
  function da(n) { return "⁦" + n.toLocaleString("fr-FR").replace(/ | /g, " ") + "⁩"; }
  function L(o) { return o[lang]; }
  var CK = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg>';
  var GAZ = '<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="56" fill="#F2C14E" stroke="#22372B" stroke-width="5"/><path d="M45 26c3 10 6 16 12 22M75 26c-3 10-6 16-12 22M48 52c0-6 24-6 24 0 0 16-6 30-12 36-6-6-12-20-12-36z" stroke="#22372B" stroke-width="5" fill="#E4682C" stroke-linecap="round" stroke-linejoin="round"/><circle cx="54" cy="60" r="3.5" fill="#22372B"/><circle cx="66" cy="60" r="3.5" fill="#22372B"/></svg>';

  var I = {
    fr: { demo0: "Site de démonstration : crèche fictive, tarifs et places donnés à titre d’exemple.", demo1: "Voir les autres modèles",
      brand: "Ghazal Kids", n1: "La journée", n2: "Badges", n3: "Le sac", n4: "Sorties", n5: "Tarifs", cta0: "Matinée découverte",
      kick: "Crèche nature, Tlemcen · 2 à 6 ans", h1a: "Dehors,", h1b: "c’est notre classe.", lede: "Chez Ghazal Kids, les enfants passent la moitié de la journée dehors : jardin, forêt, flaques. Ils grimpent, observent, plantent, et rentrent les joues roses.",
      cta1: "Réserver une matinée découverte", cta2: "Préparer le sac", st1: "dehors chaque jour", st2: "un adulte pour six", st3: "de jardin et de bois", c1: "La sieste au hamac", c2: "Qui a vu le geai ?", c3: "Jour de pluie",
      trK: "Le sentier de la journée", trH: "Une journée, comme une balade", trP: "Faites défiler : la petite gazelle suit le chemin des enfants, de l’arrivée au jardin jusqu’au retour des parents.",
      bdK: "À gagner pendant l’année", bdH: "Les badges nature", bdP: "Chaque enfant a son carnet. Quand il réussit un défi, il gagne le badge cousu sur son sac. Touchez un badge pour voir comment le gagner.", how: "Pour le gagner",
      sgK: "Pas de mauvais temps", sgH: "Seulement le mauvais équipement", sgP: "Choisissez la saison et la météo : on vous donne la liste exacte du sac de votre enfant. Cochez au fur et à mesure, ou imprimez-la.", sgS: "La saison", sgW: "La météo du jour",
      seasons: ["Automne", "Hiver", "Printemps", "Été"], weathers: ["Soleil", "Pluie", "Froid et vent"], bagT: "Le sac de {s}, {w}", ready: "prêts", stays: "reste à la crèche", print: "Imprimer la liste",
      soK: "Une sortie par mois", soH: "La carte de nos sorties à Tlemcen", soP: "En minibus avec les éducatrices, pour les 4 à 6 ans. Touchez un repère sur la carte.", home: "Ghazal Kids",
      nbK: "Feuilletez", nbH: "Le carnet de terrain", prev: "Page précédente", next: "Page suivante",
      tfK: "Tarifs 2026-2027", tfH: "Choisissez votre billet", bill: ["Au mois", "À l’année"], save: "−10 %", perM: "DA / mois", perY: "soit {n} DA pour l’année", hot: "Le plus pris", take: "Prendre ce billet",
      tfN: "Tarifs de démonstration. Inscription : 9 000 DA par an, avec le carnet nature, la gourde et le sac brodé.",
      dcK: "Gratuit, sans engagement", dcH: "Venez passer une matinée dehors avec nous", dcP: "Votre enfant rejoint un groupe de 9 h à 11 h 30, vous restez avec nous ou vous revenez le chercher. Prévoyez des bottes !",
      fD: "Choisissez une matinée", fA: "Âge de l’enfant", ageO: "{n} ans · groupe des {g}", gS: "Faons", gB: "Gazelles", left: "{n} places", full: "Complet", l1: "Votre nom", l2: "Téléphone", send: "Réserver la matinée",
      err: "Choisissez une matinée, puis indiquez votre nom et un numéro valide.", demo: "Démo AFEX Digital : aucune réservation n’a été faite, ce formulaire n’est pas encore connecté.",
      fqK: "Questions", fqH: "Les parents se demandent", foA: "Crèche nature fictive, Tlemcen, de 2 à 6 ans.", foH: "Horaires", foHV: "Dimanche au jeudi, 7 h 30 à 17 h", foC: "Contact", foCV: "WhatsApp et téléphone : numéro de démonstration",
      foot: "© 2026 Ghazal Kids, crèche fictive.", by: "Site réalisé par", photos: "Photos : Unsplash,", lang: "Langue", waDemo: "Démo AFEX Digital : le numéro WhatsApp n’est pas encore connecté.",
      hamacAlt: "Des enfants dans un hamac au milieu des pins", jumAlt: "Un enfant regarde dans des jumelles", flaqueAlt: "Un enfant en bottes saute dans une flaque", groupeAlt: "Des enfants assis dans l’herbe pendant une sortie",
      title: "Ghazal Kids, crèche nature et jeu à Tlemcen", loc: "fr-FR" },
    ar: { demo0: "موقع تجريبي: روضة وهمية، الأسعار والأماكن للتوضيح فقط.", demo1: "شاهد النماذج الأخرى",
      brand: "غزال كيدز", n1: "اليوم", n2: "الشارات", n3: "الحقيبة", n4: "الخرجات", n5: "الأسعار", cta0: "صباح استكشافي",
      kick: "روضة الطبيعة، تلمسان · من 2 إلى 6 سنوات", h1a: "في الخارج،", h1b: "هناك قسمنا.", lede: "في غزال كيدز يقضي الأطفال نصف اليوم في الخارج: حديقة، غابة، برك ماء. يتسلّقون، يلاحظون، يزرعون، ويعودون بخدود وردية.",
      cta1: "احجز صباحًا استكشافيًا", cta2: "حضّر الحقيبة", st1: "في الخارج كل يوم", st2: "مربٍّ لكل ستة", st3: "حديقة وغابة", c1: "قيلولة في الأرجوحة", c2: "من رأى الطائر؟", c3: "يوم ممطر",
      trK: "مسار اليوم", trH: "يوم مثل نزهة", trP: "مرّر للأسفل: يتبع الغزال الصغير طريق الأطفال، من الوصول إلى الحديقة حتى عودة الأولياء.",
      bdK: "تُكسب خلال السنة", bdH: "شارات الطبيعة", bdP: "لكل طفل دفتره. عندما ينجح في تحدٍّ، ينال الشارة المخيطة على حقيبته. المس شارة لترى كيف تُكسب.", how: "لكسبها",
      sgK: "لا يوجد طقس سيئ", sgH: "بل تجهيز سيئ فقط", sgP: "اختر الفصل والطقس: نعطيك القائمة الدقيقة لحقيبة طفلك. ضع علامة على ما جهّزته، أو اطبعها.", sgS: "الفصل", sgW: "طقس اليوم",
      seasons: ["الخريف", "الشتاء", "الربيع", "الصيف"], weathers: ["مشمس", "ممطر", "بارد وعاصف"], bagT: "حقيبة {s}، {w}", ready: "جاهزة", stays: "تبقى في الروضة", print: "اطبع القائمة",
      soK: "خرجة كل شهر", soH: "خريطة خرجاتنا في تلمسان", soP: "بالحافلة مع المربّيات، للأطفال من 4 إلى 6 سنوات. المس علامة على الخريطة.", home: "غزال كيدز",
      nbK: "تصفّح", nbH: "دفتر الميدان", prev: "الصفحة السابقة", next: "الصفحة التالية",
      tfK: "أسعار 2026-2027", tfH: "اختر تذكرتك", bill: ["شهري", "سنوي"], save: "−10 %", perM: "دج / الشهر", perY: "أي {n} دج للسنة", hot: "الأكثر اختيارًا", take: "خذ هذه التذكرة",
      tfN: "أسعار تجريبية. التسجيل: 9 000 دج سنويًا، مع دفتر الطبيعة والقارورة والحقيبة المطرّزة.",
      dcK: "مجاني وبلا التزام", dcH: "تعالوا لقضاء صباح في الخارج معنا", dcP: "ينضم طفلكم إلى فوج من 9:00 إلى 11:30، تبقون معنا أو تعودون لأخذه. لا تنسوا الأحذية المطاطية!",
      fD: "اختر صباحًا", fA: "سن الطفل", ageO: "{n} سنوات · فوج {g}", gS: "الخشوف", gB: "الغزلان", left: "{n} أماكن", full: "ممتلئ", l1: "اسمك", l2: "الهاتف", send: "احجز الصباح",
      err: "اختر صباحًا، ثم أدخل اسمك ورقمًا صحيحًا.", demo: "عرض AFEX Digital: لم يُحجز شيء، هذا النموذج غير متصل بعد.",
      fqK: "أسئلة", fqH: "يتساءل الأولياء", foA: "روضة طبيعة وهمية، تلمسان، من 2 إلى 6 سنوات.", foH: "التوقيت", foHV: "من الأحد إلى الخميس، من 7:30 إلى 17:00", foC: "الاتصال", foCV: "واتساب والهاتف: رقم تجريبي",
      foot: "© 2026 غزال كيدز، روضة وهمية.", by: "موقع من إنجاز", photos: "الصور: Unsplash،", lang: "اللغة", waDemo: "عرض AFEX Digital: رقم واتساب غير متصل بعد.",
      hamacAlt: "أطفال في أرجوحة بين أشجار الصنوبر", jumAlt: "طفل ينظر بالمنظار", flaqueAlt: "طفل بحذاء مطاطي يقفز في بركة", groupeAlt: "أطفال جالسون على العشب في خرجة",
      title: "غزال كيدز، روضة الطبيعة واللعب في تلمسان", loc: "ar-DZ" },
    en: { demo0: "Demo website: a fictional nursery, prices and places are examples.", demo1: "See the other templates",
      brand: "Ghazal Kids", n1: "The day", n2: "Badges", n3: "The bag", n4: "Outings", n5: "Fees", cta0: "Taster morning",
      kick: "Nature nursery, Tlemcen · ages 2 to 6", h1a: "Outdoors", h1b: "is our classroom.", lede: "At Ghazal Kids, children spend half the day outside: garden, woods, puddles. They climb, watch, plant, and come home with rosy cheeks.",
      cta1: "Book a taster morning", cta2: "Pack the bag", st1: "outside every day", st2: "one adult for six", st3: "of garden and woods", c1: "Nap in the hammock", c2: "Who spotted the jay?", c3: "Rainy day",
      trK: "The day’s trail", trH: "A day, like a walk", trP: "Scroll down: the little gazelle follows the children’s path, from arriving in the garden to parents coming back.",
      bdK: "To earn during the year", bdH: "The nature badges", bdP: "Every child has a notebook. When they complete a challenge, they earn the badge sewn on their bag. Tap a badge to see how to earn it.", how: "To earn it",
      sgK: "No bad weather", sgH: "Only the wrong clothes", sgP: "Pick the season and the weather: we give you the exact list for your child’s bag. Tick as you go, or print it.", sgS: "Season", sgW: "Today’s weather",
      seasons: ["Autumn", "Winter", "Spring", "Summer"], weathers: ["Sunny", "Rainy", "Cold and windy"], bagT: "The {s} bag, {w}", ready: "ready", stays: "stays at the nursery", print: "Print the list",
      soK: "One outing a month", soH: "The map of our Tlemcen outings", soP: "By minibus with the carers, for ages 4 to 6. Tap a marker on the map.", home: "Ghazal Kids",
      nbK: "Flip through", nbH: "The field notebook", prev: "Previous page", next: "Next page",
      tfK: "Fees 2026-2027", tfH: "Pick your ticket", bill: ["Monthly", "Yearly"], save: "−10%", perM: "DA / month", perY: "that is {n} DA for the year", hot: "Most taken", take: "Take this ticket",
      tfN: "Demo prices. Registration: 9,000 DA a year, with the nature notebook, water bottle and embroidered bag.",
      dcK: "Free, no commitment", dcH: "Come and spend a morning outside with us", dcP: "Your child joins a group from 9:00 to 11:30; stay with us or come back to collect them. Bring wellies!",
      fD: "Pick a morning", fA: "Child’s age", ageO: "{n} years · {g} group", gS: "Fawns", gB: "Gazelles", left: "{n} places", full: "Full", l1: "Your name", l2: "Phone", send: "Book the morning",
      err: "Pick a morning, then enter your name and a valid number.", demo: "AFEX Digital demo: nothing was booked, this form is not connected yet.",
      fqK: "Questions", fqH: "Parents wonder", foA: "A fictional nature nursery, Tlemcen, ages 2 to 6.", foH: "Hours", foHV: "Sunday to Thursday, 7:30 to 17:00", foC: "Contact", foCV: "WhatsApp and phone: demo number",
      foot: "© 2026 Ghazal Kids, a fictional nursery.", by: "Website by", photos: "Photos: Unsplash,", lang: "Language", waDemo: "AFEX Digital demo: the WhatsApp number is not connected yet.",
      hamacAlt: "Children in a hammock among pine trees", jumAlt: "A child looking through binoculars", flaqueAlt: "A child in wellies jumping in a puddle", groupeAlt: "Children sitting in the grass on an outing",
      title: "Ghazal Kids, nature and play nursery in Tlemcen", loc: "en-GB" }
  };

  var TRAIL = [
    ["07:30", "panier", { fr: "Arrivée au jardin", ar: "الوصول إلى الحديقة", en: "Arrival in the garden" }, { fr: "On pose le sac, on enfile les bottes.", ar: "نضع الحقيبة ونلبس الأحذية المطاطية.", en: "Bags down, wellies on." }],
    ["09:00", "groupe", { fr: "Le cercle sous l’olivier", ar: "الحلقة تحت الزيتونة", en: "Circle under the olive tree" }, { fr: "Le temps qu’il fait, le défi du jour.", ar: "حالة الطقس وتحدّي اليوم.", en: "Today’s weather and challenge." }],
    ["09:45", "mousse", { fr: "Exploration", ar: "الاستكشاف", en: "Exploring" }, { fr: "Dans le bois : traces, mousses, insectes.", ar: "في الغابة: آثار، طحالب، حشرات.", en: "In the woods: tracks, moss, insects." }],
    ["11:30", "potager", { fr: "Potager", ar: "البستان", en: "Vegetable patch" }, { fr: "Arroser, récolter, laver les légumes.", ar: "السقي والجني وغسل الخضر.", en: "Watering, picking, washing vegetables." }],
    ["12:15", "rire", { fr: "Déjeuner dehors", ar: "الغداء في الخارج", en: "Lunch outside" }, { fr: "Sous la tonnelle quand il fait beau.", ar: "تحت العريشة عندما يكون الطقس جميلًا.", en: "Under the arbour when it’s fine." }],
    ["13:15", "hamac", { fr: "Sieste et contes", ar: "قيلولة وحكايات", en: "Nap and stories" }, { fr: "Au calme, dans la cabane ou au hamac.", ar: "بهدوء في الكوخ أو الأرجوحة.", en: "Quietly, in the cabin or the hammock." }],
    ["15:00", "grimpe", { fr: "Grimper, construire", ar: "التسلّق والبناء", en: "Climb and build" }, { fr: "Cabanes de branches, parcours dans les arbres.", ar: "أكواخ من الأغصان ومسار بين الأشجار.", en: "Branch dens and a tree trail." }],
    ["16:30", "course", { fr: "Les parents arrivent", ar: "وصول الأولياء", en: "Parents arrive" }, { fr: "On raconte sa journée en courant vers eux.", ar: "نحكي يومنا ونحن نركض نحوهم.", en: "We tell our day running towards them." }]
  ];
  var ICON = { sprout: '<path d="M12 21v-9M12 12c0-4-3-6-7-6 0 4 3 6 7 6zM12 10c0-4 3-6 7-6 0 4-3 6-7 6z"/>', peak: '<path d="M2 20l7-12 4 6 3-4 6 10z"/><path d="M9 8l2 3"/>', bino: '<circle cx="7" cy="15" r="4"/><circle cx="17" cy="15" r="4"/><path d="M7 11V6h3l1 5M17 11V6h-3l-1 5"/>', drop: '<path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11z"/>', tree: '<path d="M12 22v-6M12 2l6 9h-3l4 5H5l4-5H6z"/>', leaf: '<path d="M5 19C5 9 12 4 20 4c0 8-5 15-15 15zM5 19l8-8"/>' };
  var BADGES = [
    ["sprout", "#A9CF8F", "potager", { fr: "Petit jardinier", ar: "البستاني الصغير", en: "Little gardener" }, { fr: "Il a semé, arrosé et récolté sa propre plante.", ar: "زرع نبتته وسقاها وجناها بنفسه.", en: "They sowed, watered and picked their own plant." }, { fr: ["Semer une graine", "L’arroser 10 jours", "Goûter sa récolte"], ar: ["زرع بذرة", "سقيها 10 أيام", "تذوّق المحصول"], en: ["Sow a seed", "Water it for 10 days", "Taste the harvest"] }],
    ["peak", "#F4A47A", "grimpe2", { fr: "Grimpeur", ar: "المتسلّق", en: "Climber" }, { fr: "Il monte seul jusqu’à la cabane de l’arbre, en sécurité.", ar: "يصعد وحده إلى كوخ الشجرة بأمان.", en: "They reach the tree den alone, safely." }, { fr: ["Le petit muret", "L’échelle de corde", "La cabane de l’arbre"], ar: ["الجدار الصغير", "سلّم الحبل", "كوخ الشجرة"], en: ["The low wall", "The rope ladder", "The tree den"] }],
    ["bino", "#9ACBE6", "jumelles4", { fr: "Ami des oiseaux", ar: "صديق الطيور", en: "Bird friend" }, { fr: "Il reconnaît cinq oiseaux du jardin et leur chant.", ar: "يتعرّف على خمسة طيور من الحديقة وتغريدها.", en: "They know five garden birds and their songs." }, { fr: ["Le moineau et le merle", "Le geai et la mésange", "Le chardonneret"], ar: ["الدوري والشحرور", "القيق والقرقف", "الحسّون"], en: ["Sparrow and blackbird", "Jay and tit", "Goldfinch"] }],
    ["drop", "#F2C14E", "bottes", { fr: "Roi de la pluie", ar: "ملك المطر", en: "Rain champion" }, { fr: "Il sort par tous les temps et s’habille tout seul.", ar: "يخرج في كل طقس ويلبس وحده.", en: "Out in all weathers, and dresses alone." }, { fr: ["Mettre ses bottes seul", "Fermer son imperméable", "Mesurer la pluie"], ar: ["لبس الحذاء وحده", "غلق معطف المطر", "قياس المطر"], en: ["Put on wellies alone", "Zip the raincoat", "Measure the rain"] }],
    ["tree", "#7FB58F", "arbres", { fr: "Gardien des arbres", ar: "حارس الأشجار", en: "Tree keeper" }, { fr: "Il connaît le chêne, le pin d’Alep et l’olivier.", ar: "يعرف البلوط والصنوبر الحلبي والزيتون.", en: "They know the oak, Aleppo pine and olive." }, { fr: ["Reconnaître 3 feuilles", "Mesurer un tronc", "Adopter un arbre"], ar: ["التعرّف على 3 أوراق", "قياس جذع", "تبنّي شجرة"], en: ["Spot 3 leaves", "Measure a trunk", "Adopt a tree"] }],
    ["leaf", "#E9B97D", "couronne", { fr: "Artiste nature", ar: "فنان الطبيعة", en: "Nature artist" }, { fr: "Il crée une œuvre avec ce qu’il trouve dehors.", ar: "يصنع عملًا فنيًا مما يجده في الخارج.", en: "They make art from what they find outside." }, { fr: ["Une couronne de feuilles", "Un tableau de cailloux", "Une exposition"], ar: ["تاج من الأوراق", "لوحة من الحصى", "معرض"], en: ["A leaf crown", "A pebble picture", "An exhibition"] }]
  ];
  var IT = {
    gourde: { fr: "Gourde d’eau marquée à son nom", ar: "قارورة ماء باسمه", en: "Named water bottle" }, change: { fr: "Change complet dans un sac", ar: "ملابس احتياطية كاملة في كيس", en: "Full change of clothes in a bag" }, bottes: { fr: "Bottes de pluie", ar: "حذاء مطاطي", en: "Wellies", s: 1 },
    casquette: { fr: "Casquette ou chapeau", ar: "قبعة", en: "Cap or sun hat" }, creme: { fr: "Crème solaire (mise le matin)", ar: "واقي الشمس (يُوضع صباحًا)", en: "Sun cream (put on in the morning)" }, manches: { fr: "T-shirt léger à manches longues", ar: "قميص خفيف بأكمام طويلة", en: "Light long-sleeved top" }, lunettes: { fr: "Lunettes de soleil", ar: "نظارات شمسية", en: "Sunglasses" },
    bonnet: { fr: "Bonnet", ar: "قبعة صوفية", en: "Woolly hat" }, gants: { fr: "Gants", ar: "قفازات", en: "Gloves" }, couche: { fr: "Sous-couche chaude", ar: "طبقة داخلية دافئة", en: "Warm base layer" }, polaire: { fr: "Polaire", ar: "سترة صوفية", en: "Fleece" }, polaireL: { fr: "Polaire légère", ar: "سترة خفيفة", en: "Light fleece" },
    pantPluie: { fr: "Pantalon de pluie", ar: "سروال للمطر", en: "Rain trousers", s: 1 }, kway: { fr: "Veste imperméable", ar: "معطف مطر", en: "Waterproof jacket" }, chaussettes: { fr: "Deuxième paire de chaussettes", ar: "زوج جوارب إضافي", en: "Spare pair of socks" }, tour: { fr: "Tour de cou", ar: "واقي الرقبة", en: "Neck warmer" }
  };
  var SEASON = [["polaireL", "pantPluie"], ["bonnet", "gants", "couche", "polaire"], ["polaireL", "casquette"], ["casquette", "creme", "manches"]];
  var WEATHER = [["casquette", "lunettes"], ["kway", "pantPluie", "chaussettes"], ["tour", "bonnet", "gants"]];
  var SPOTS = [
    { x: 330, y: 205, img: "vallee", n: { fr: "Plateau de Lalla Setti", ar: "هضبة لالة ستي", en: "Lalla Setti plateau" }, m: { fr: "Avril", ar: "أفريل", en: "April" }, d: { fr: "Pique-nique, cerfs-volants et la vue sur toute la ville.", ar: "نزهة، طائرات ورقية، ومنظر على كل المدينة.", en: "Picnic, kites and a view over the whole city." }, t: "15 min" },
    { x: 610, y: 165, img: "sentier", n: { fr: "Sentier des cascades d’El Ourit", ar: "مسار شلالات الوريط", en: "El Ourit falls trail" }, m: { fr: "Mai", ar: "ماي", en: "May" }, d: { fr: "Une courte marche jusqu’à l’eau, on écoute la cascade.", ar: "مشي قصير حتى الماء، ونستمع إلى الشلال.", en: "A short walk to the water, listening to the falls." }, t: "20 min" },
    { x: 150, y: 330, img: "mansourah", n: { fr: "Remparts de Mansourah", ar: "أسوار المنصورة", en: "Mansourah ramparts" }, m: { fr: "Novembre", ar: "نوفمبر", en: "November" }, d: { fr: "Chasse au trésor au pied du minaret, histoire de la ville.", ar: "بحث عن الكنز عند المئذنة، وحكاية المدينة.", en: "Treasure hunt by the minaret, the city’s story." }, t: "10 min" },
    { x: 120, y: 120, img: "pins", n: { fr: "Forêt de Hafir", ar: "غابة حفير", en: "Hafir forest" }, m: { fr: "Octobre", ar: "أكتوبر", en: "October" }, d: { fr: "Cabanes de branches, champignons et glands de chêne-liège.", ar: "أكواخ من الأغصان، فطر، وثمار بلوط الفلين.", en: "Branch dens, mushrooms and cork-oak acorns." }, t: "35 min" },
    { x: 560, y: 440, img: "potager", n: { fr: "La ferme pédagogique", ar: "المزرعة البيداغوجية", en: "The teaching farm" }, m: { fr: "Mars", ar: "مارس", en: "March" }, d: { fr: "Nourrir les chèvres, planter les fèves.", ar: "إطعام الماعز وزرع الفول.", en: "Feeding goats and planting broad beans." }, t: "25 min" },
    { x: 470, y: 260, img: "arcs", n: { fr: "La vieille ville", ar: "المدينة القديمة", en: "The old town" }, m: { fr: "Février", ar: "فيفري", en: "February" }, d: { fr: "Les arcades, le marché aux épices, un thé à la menthe.", ar: "الأقواس، سوق التوابل، وشاي بالنعناع.", en: "Arcades, the spice market and mint tea." }, t: "10 min" }
  ];
  var HOME = { x: 400, y: 340 };
  var PAGES = [
    [{ fr: "Automne : la grande bataille de feuilles", ar: "الخريف: معركة الأوراق الكبرى", en: "Autumn: the great leaf battle" }, ["feuilles", "rire", "feuilles2", "couronne"]],
    [{ fr: "Les jours de pluie", ar: "أيام المطر", en: "Rainy days" }, ["flaque", "saut", "bottes2", "bottes"]],
    [{ fr: "Observer sans bruit", ar: "نلاحظ بصمت", en: "Watching quietly" }, ["jumelles2", "jumelles3", "mousse", "feuille"]],
    [{ fr: "Grimper toujours plus haut", ar: "نتسلّق أعلى فأعلى", en: "Climbing ever higher" }, ["grimpe", "suspendu", "branche", "arbres"]],
    [{ fr: "Le potager du printemps", ar: "بستان الربيع", en: "The spring vegetable patch" }, ["potager", "panier", "fille", "course"]],
    [{ fr: "La nuit au camp des grands", ar: "ليلة مخيّم الكبار", en: "The big kids’ camp night" }, ["camp", "sentier", "pins", "fleur"]]
  ];
  var TIX = [
    { t: { fr: "Matinées nature", ar: "صباحات الطبيعة", en: "Nature mornings" }, h: { fr: "7 h 30 – 12 h 30", ar: "7:30 – 12:30", en: "7:30 – 12:30" }, p: 18000, f: { fr: ["2 h dehors chaque matin", "Collation du jardin", "Carnet et badges"], ar: ["ساعتان في الخارج كل صباح", "لمجة من الحديقة", "الدفتر والشارات"], en: ["2 hours outside every morning", "Garden snack", "Notebook and badges"] } },
    { hot: true, t: { fr: "Plein air", ar: "الهواء الطلق", en: "Open air" }, h: { fr: "7 h 30 – 17 h", ar: "7:30 – 17:00", en: "7:30 – 17:00" }, p: 26000, f: { fr: ["4 h dehors chaque jour", "Déjeuner cuisiné sur place", "Sieste au calme", "Carnet et badges"], ar: ["4 ساعات في الخارج يوميًا", "غداء مطهو في عين المكان", "قيلولة هادئة", "الدفتر والشارات"], en: ["4 hours outside every day", "Lunch cooked on site", "Quiet nap", "Notebook and badges"] } },
    { t: { fr: "Explorateur", ar: "المستكشف", en: "Explorer" }, h: { fr: "7 h 30 – 17 h + sorties", ar: "7:30 – 17:00 + خرجات", en: "7:30 – 17:00 + outings" }, p: 30000, f: { fr: ["Tout du billet Plein air", "Une sortie par mois à Tlemcen", "Nuit au camp en juin (dès 5 ans)", "Club du mercredi après-midi"], ar: ["كل ما في تذكرة الهواء الطلق", "خرجة شهرية في تلمسان", "ليلة مخيّم في جوان (من 5 سنوات)", "نادي الأربعاء مساءً"], en: ["Everything in Open air", "A monthly outing in Tlemcen", "Camp night in June (age 5+)", "Wednesday afternoon club"] } }
  ];
  var FAQ = [
    [{ fr: "Et s’il pleut ?", ar: "وإذا أمطرت؟", en: "What if it rains?" }, { fr: "On sort quand même, bien équipés ! Seuls l’orage et le vent fort nous gardent à l’intérieur, dans la grande salle vitrée.", ar: "نخرج رغم ذلك، بتجهيز جيد! وحدهما العاصفة والرياح القوية تبقياننا في الداخل، في القاعة الزجاجية الكبيرة.", en: "We still go out, well equipped! Only storms and strong wind keep us in, in the big glass room." }],
    [{ fr: "Et quand il fait froid à Tlemcen ?", ar: "وعندما يبرد الطقس في تلمسان؟", en: "And when it’s cold in Tlemcen?" }, { fr: "En hiver, les sorties sont plus courtes et plus actives. On rentre se réchauffer avec une boisson chaude toutes les heures.", ar: "في الشتاء تكون الخرجات أقصر وأكثر حركة. ندخل للتدفئة بمشروب ساخن كل ساعة.", en: "In winter, outings are shorter and more active. We go in to warm up with a hot drink every hour." }],
    [{ fr: "Est-ce sûr de grimper aux arbres ?", ar: "هل التسلّق آمن؟", en: "Is tree climbing safe?" }, { fr: "Les arbres et le parcours sont vérifiés chaque semaine, un adulte reste au pied, et l’équipe est formée aux premiers secours.", ar: "تُفحص الأشجار والمسار كل أسبوع، ويبقى مربٍّ في الأسفل، والفريق مكوَّن في الإسعافات الأولية.", en: "Trees and the trail are checked weekly, an adult stays at the bottom, and the team is first-aid trained." }],
    [{ fr: "Les petits de 2 ans sortent-ils aussi ?", ar: "هل يخرج الصغار ذوو السنتين أيضًا؟", en: "Do the 2-year-olds go out too?" }, { fr: "Oui, dans le jardin clôturé, à leur rythme. Les sorties en minibus sont réservées aux 4 à 6 ans.", ar: "نعم، في الحديقة المسيّجة وعلى إيقاعهم. الخرجات بالحافلة للأطفال من 4 إلى 6 سنوات فقط.", en: "Yes, in the fenced garden, at their pace. Minibus outings are for ages 4 to 6 only." }],
    [{ fr: "Et les insectes, les tiques ?", ar: "والحشرات والقراد؟", en: "What about insects and ticks?" }, { fr: "Pantalons longs dans les bois, et une vérification rapide au retour. On vous prévient au moindre doute.", ar: "سراويل طويلة في الغابة، وفحص سريع عند العودة. نعلمكم عند أدنى شك.", en: "Long trousers in the woods and a quick check on return. We tell you at the slightest doubt." }],
    [{ fr: "Mon enfant va-t-il salir ses vêtements ?", ar: "هل سيتّسخ لباس طفلي؟", en: "Will my child get dirty?" }, { fr: "Oui, et c’est bon signe ! C’est pour ça qu’on demande un change complet, et que les bottes et le pantalon de pluie restent chez nous.", ar: "نعم، وهذه علامة جيدة! لهذا نطلب ملابس احتياطية، ويبقى الحذاء المطاطي وسروال المطر عندنا.", en: "Yes, and that’s a good sign! That’s why we ask for a full change, and wellies and rain trousers stay with us." }]
  ];

  var lang = "fr", badge = 0, season = 0, wthr = 0, spot = 0, page = 0, bill = 0, date = -1, ready = false, dyn = [], shown = [0, 0, 0];
  var mon = new Date().getMonth(); season = mon >= 8 && mon <= 10 ? 0 : mon === 11 || mon <= 1 ? 1 : mon <= 4 ? 2 : 3;
  try { var sv = localStorage.getItem("ghazal-lang"); if (I[sv]) lang = sv; } catch (e) {}
  var DATES = (function () { var out = [], d = new Date(); d.setHours(12, 0, 0, 0); d.setDate(d.getDate() + 1); while (out.length < 3) { if (d.getDay() === 3) out.push(new Date(d)); d.setDate(d.getDate() + 1); } return out; })();
  var DLEFT = [3, 0, 5];
  function fmt(d, o) { try { return new Intl.DateTimeFormat(I[lang].loc, o).format(d); } catch (e) { return d.toDateString(); } }
  function openWa() { var m = { fr: "Bonjour AFEX Digital, je viens du site de démonstration « " + document.title + " ». Je veux un site comme celui-ci.", ar: "مرحبًا AFEX Digital، أتيت من الموقع التجريبي « " + document.title + " ». أريد موقعًا مثله.", en: "Hello AFEX Digital, I found the demo site “" + document.title + "”. I would like a website like this one." }; window.open("https://wa.me/213657944090?text=" + encodeURIComponent(m[lang] || m.fr), "_blank", "noopener"); }
  function toast(t) { var el = $("#toast"); el.textContent = t; el.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(function () { el.classList.remove("on"); }, 4200); }

  /* trail */
  var tPts = [];
  function renderTrail() {
    var st = $("#stage"), rtl = doc.dir === "rtl";
    $("#trailList").innerHTML = TRAIL.map(function (s) { return '<div class="stn"><div class="pic">' + img(s[1], "84px") + "</div><div><time>" + s[0] + "</time><h3>" + L(s[2]) + "</h3><p>" + L(s[3]) + "</p></div></div>"; }).join("");
    $$("#stage .stn, #stage .walker").forEach(function (e) { e.remove(); });
    var w = st.offsetWidth || 1200, h = st.offsetHeight || 600, n = TRAIL.length;
    tPts = TRAIL.map(function (_, i) { var fx = .06 + i * (.88 / (n - 1)); return [(rtl ? 1 - fx : fx) * w, (i % 2 ? .56 : .43) * h]; });
    var d = "M" + tPts[0][0] + " " + tPts[0][1];
    for (var i = 1; i < n; i++) { var a = tPts[i - 1], b = tPts[i], mx = (a[0] + b[0]) / 2; d += " C " + mx + " " + a[1] + ", " + mx + " " + b[1] + ", " + b[0] + " " + b[1]; }
    $("#trailSvg").setAttribute("viewBox", "0 0 " + w + " " + h);
    $("#trailSvg").innerHTML = '<path d="' + d + '" fill="none" stroke="rgba(241,230,208,.35)" stroke-width="4" stroke-dasharray="2 12" stroke-linecap="round"/><path id="trP" d="' + d + '" fill="none" stroke="#F2C14E" stroke-width="5" stroke-linecap="round"/>' + tPts.map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="9" fill="#22372B" stroke="#F2C14E" stroke-width="4"/>'; }).join("");
    var html = TRAIL.map(function (s, i) { var p = tPts[i], below = i % 2 === 1; return '<div class="stn' + (below ? "" : " up") + '" style="left:' + p[0] + "px;top:" + (below ? p[1] + 20 : p[1] - 20) + 'px"><div class="pic">' + img(s[1], "76px") + "</div><time>" + s[0] + "</time><h3>" + L(s[2]) + "</h3><p>" + L(s[3]) + "</p></div>"; }).join("");
    st.insertAdjacentHTML("beforeend", html + '<div class="walker" id="walker">' + GAZ + "</div>");
    setWalk(STATIC ? 1 : 0);
  }
  function setWalk(pr) {
    var path = $("#trP"); if (!path) return; var len = path.getTotalLength(), p = path.getPointAtLength(len * pr);
    path.style.strokeDasharray = len; path.style.strokeDashoffset = len * (1 - pr);
    $("#walker").style.transform = "translate(" + p.x + "px," + p.y + "px)";
    var n = TRAIL.length; $$("#stage .stn").forEach(function (s, i) { s.classList.toggle("on", pr >= i / (n - 1) - .02); });
  }
  /* badges */
  function renderBadges() {
    $("#badgesG").innerHTML = BADGES.map(function (b, i) { return '<button type="button" class="badge" style="--c:' + b[1] + '" data-b="' + i + '" aria-pressed="' + (i === badge) + '"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICON[b[0]] + "</svg><b>" + L(b[3]) + "</b></span></button>"; }).join("");
    showBadge(false);
  }
  function showBadge(anim) {
    var t = I[lang], b = BADGES[badge];
    $("#bcard").innerHTML = '<div class="im">' + img(b[2], "(min-width:900px) 40vw, 92vw") + "</div><h3>" + L(b[3]) + "</h3><p>" + L(b[4]) + '</p><p style="margin-top:12px;font-weight:700">' + t.how + "</p><ul>" + L(b[5]).map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>";
    if (anim && !STATIC) { gsap.fromTo("#bcard", { rotation: -3, scale: .96 }, { rotation: 0, scale: 1, duration: .6, ease: "back.out(2)" }); gsap.fromTo("#bcard .im", { clipPath: "circle(0% at 50% 50%)" }, { clipPath: "circle(80% at 50% 50%)", duration: .8, ease: "expo.out" }); }
  }
  /* bag */
  function renderBag() {
    var t = I[lang];
    $("#seasons").innerHTML = t.seasons.map(function (s, i) { return '<button type="button" data-s="' + i + '" aria-pressed="' + (i === season) + '">' + s + "</button>"; }).join("");
    $("#weather").innerHTML = t.weathers.map(function (s, i) { return '<button type="button" data-w="' + i + '" aria-pressed="' + (i === wthr) + '">' + s + "</button>"; }).join("");
    buildList(false);
  }
  function buildList(anim) {
    var t = I[lang], keys = ["gourde", "change", "bottes"].concat(SEASON[season], WEATHER[wthr]), seen = {};
    keys = keys.filter(function (k) { if (seen[k]) return false; seen[k] = 1; return !(season === 3 && (k === "bonnet" || k === "gants")); });
    $("#bagList").innerHTML = "<h3>" + t.bagT.replace("{s}", t.seasons[season].toLowerCase()).replace("{w}", t.weathers[wthr].toLowerCase()) + '</h3><div class="meter"><span><i id="meterI" style="transform:scaleX(0)"></i></span><b id="meterB">0 / ' + keys.length + " " + t.ready + '</b></div><div class="items">' + keys.map(function (k) { return '<label><input type="checkbox"><span>' + L(IT[k]) + "</span>" + (IT[k].s ? "<small>" + t.stays + "</small>" : "") + "</label>"; }).join("") + '</div><button type="button" class="btn s" id="printB">' + t.print + "</button>";
    if (anim && !STATIC) gsap.from("#bagList .items label", { x: doc.dir === "rtl" ? 20 : -20, opacity: 0, duration: .35, stagger: .04, ease: "power2.out" });
  }
  function meter() { var all = $$("#bagList .items input"), on = all.filter(function (c) { return c.checked; }).length; $("#meterI").style.transform = "scaleX(" + (on / all.length) + ")"; $("#meterB").textContent = on + " / " + all.length + " " + I[lang].ready; }
  /* map */
  function renderMap() {
    var s = '<rect width="800" height="600" fill="#E9DCC0"/>';
    s += '<g fill="none" stroke="#D2BF98" stroke-width="1.5">' + [0, 1, 2, 3, 4, 5].map(function (k) { return '<ellipse cx="' + (180 + k * 6) + '" cy="' + (150 + k * 4) + '" rx="' + (160 - k * 24) + '" ry="' + (100 - k * 15) + '"/>'; }).join("") + [0, 1, 2, 3].map(function (k) { return '<ellipse cx="620" cy="180" rx="' + (130 - k * 28) + '" ry="' + (80 - k * 17) + '"/>'; }).join("") + "</g>";
    s += '<path d="M0 470 C 150 430, 260 520, 400 480 S 650 420, 800 470" fill="none" stroke="#9ACBE6" stroke-width="14" stroke-linecap="round"/>';
    s += '<g fill="#7FB58F" stroke="#22372B" stroke-width="2">' + [[90, 90], [130, 70], [160, 110], [70, 140], [200, 80], [580, 120], [620, 100], [660, 140], [700, 110]].map(function (p) { return '<path d="M' + p[0] + " " + (p[1] - 18) + " l12 24 h-24z\"/>"; }).join("") + "</g>";
    s += '<g fill="#F1E6D0" stroke="#22372B" stroke-width="2">' + [[380, 300], [420, 290], [450, 310], [400, 260], [470, 280], [360, 330], [500, 300]].map(function (p) { return '<rect x="' + p[0] + '" y="' + p[1] + '" width="26" height="20" rx="3"/>'; }).join("") + "</g>";
    s += '<g id="routes" fill="none" stroke="#E4682C" stroke-width="3" stroke-dasharray="6 6"></g>';
    s += '<g transform="translate(' + HOME.x + " " + HOME.y + ')"><circle r="26" fill="#22372B"/><g transform="translate(-20 -20) scale(.333)">' + GAZ.replace(/<\/?svg[^>]*>/g, "") + "</g></g>";
    s += SPOTS.map(function (p, i) { return '<g class="pin" data-p="' + i + '" tabindex="0" role="button" aria-label="' + L(p.n) + '" transform="translate(' + p.x + " " + p.y + ')"><circle class="r" r="' + (i === spot ? 20 : 14) + '" fill="' + (i === spot ? "#E4682C" : "#F2C14E") + '" stroke="#22372B" stroke-width="3"/><text y="5" text-anchor="middle" font-family="Lexend, sans-serif" font-weight="700" font-size="13" fill="#22372B">' + (i + 1) + "</text></g>"; }).join("");
    $("#mapSvg").innerHTML = s;
    $("#spots").innerHTML = SPOTS.map(function (p, i) { return '<button type="button" data-p="' + i + '" aria-pressed="' + (i === spot) + '">' + (i + 1) + ". " + L(p.n) + "</button>"; }).join("");
    showSpot(false);
  }
  function showSpot(anim) {
    var p = SPOTS[spot];
    $$("#mapSvg .pin").forEach(function (g, i) { var c = $("circle", g); c.setAttribute("r", i === spot ? 20 : 14); c.setAttribute("fill", i === spot ? "#E4682C" : "#F2C14E"); });
    $$("#spots button").forEach(function (b, i) { b.setAttribute("aria-pressed", i === spot); });
    var mx = (p.x + HOME.x) / 2, my = Math.min(p.y, HOME.y) - 60;
    $("#routes").innerHTML = '<path id="rte" d="M' + HOME.x + " " + HOME.y + " Q" + mx + " " + my + " " + p.x + " " + p.y + '"/>';
    $("#spot").innerHTML = '<div class="im">' + img(p.img, "(min-width:900px) 38vw, 92vw") + '</div><div class="bd"><small>' + L(p.m) + "</small><h3>" + L(p.n) + "</h3><p>" + L(p.d) + '</p><div class="meta"><span>' + p.t + "</span><span>" + (lang === "ar" ? "من 4 إلى 6 سنوات" : lang === "en" ? "Ages 4–6" : "4 à 6 ans") + "</span></div></div>";
    if (!STATIC) { var r = $("#rte"), len = r.getTotalLength(); gsap.fromTo(r, { strokeDashoffset: len, strokeDasharray: "6 6" }, { strokeDashoffset: 0, duration: 1, ease: "power2.out" }); if (anim) gsap.from("#spot .bd > *", { y: 14, opacity: 0, duration: .45, stagger: .05 }); }
  }
  /* notebook */
  function pageHtml(k) { var pg = PAGES[k]; return '<div class="pg"><h3>' + L(pg[0]) + "</h3>" + pg[1].map(function (n) { return '<figure class="ph tape"><div>' + img(n, "22vw") + "</div></figure>"; }).join("") + "</div>"; }
  function renderNB(dir) {
    var sp = $("#spread"), t = I[lang];
    $("#nbC").textContent = "\u2066" + (page + 1) + " / 3\u2069";
    $("#nbP").disabled = page === 0; $("#nbN").disabled = page === 2;
    $("#nbP").setAttribute("aria-label", t.prev); $("#nbN").setAttribute("aria-label", t.next);
    if (!dir || STATIC || matchMedia("(max-width: 900px)").matches) { sp.innerHTML = pageHtml(page * 2) + pageHtml(page * 2 + 1); if (dir && !STATIC) gsap.from("#spread .pg", { opacity: 0, y: 20, duration: .4, stagger: .08 }); return; }
    var pages = $$(".pg", sp), rtl = doc.dir === "rtl", turning = dir > 0 ? pages[rtl ? 0 : 1] : pages[rtl ? 1 : 0];
    turning.style.transformOrigin = (dir > 0) !== rtl ? "left center" : "right center";
    gsap.to(turning, { rotationY: (dir > 0) !== rtl ? -100 : 100, duration: .55, ease: "power2.in", onComplete: function () { sp.innerHTML = pageHtml(page * 2) + pageHtml(page * 2 + 1); var np = $$(".pg", sp)[(dir > 0) !== rtl ? 0 : 1]; np.style.transformOrigin = (dir > 0) !== rtl ? "right center" : "left center"; gsap.from(np, { rotationY: (dir > 0) !== rtl ? 100 : -100, duration: .55, ease: "power2.out" }); } });
  }
  /* tickets */
  function renderTix() {
    var t = I[lang];
    $("#bill").innerHTML = t.bill.map(function (b, i) { return '<button type="button" data-b="' + i + '" aria-pressed="' + (i === bill) + '">' + b + (i ? "<em>" + t.save + "</em>" : "") + "</button>"; }).join("");
    $("#tix").innerHTML = TIX.map(function (x, i) { return '<article class="tk' + (x.hot ? " hot" : "") + '"><div class="top"><small>' + (x.hot ? t.hot : L(x.h)) + "</small><h3>" + L(x.t) + '</h3><p class="pr"><span data-n="' + i + '">' + da(price(i)) + "</span> <small>" + t.perM + '</small></p><p style="font-size:.85rem;min-height:1.4em" data-y="' + i + '">' + (bill ? t.perY.replace("{n}", da(price(i) * 12)) : (x.hot ? L(x.h) : "")) + "</p></div><ul>" + L(x.f).map(function (f) { return "<li>" + CK + "<span>" + f + "</span></li>"; }).join("") + '</ul><a class="btn ' + (x.hot ? "o" : "p") + '" href="#decouverte">' + t.take + "</a></article>"; }).join("");
    shown = TIX.map(function (_, i) { return price(i); });
  }
  function price(i) { return Math.round(TIX[i].p * (bill ? .9 : 1) / 100) * 100; }
  function updTix() {
    var t = I[lang];
    $$("#bill button").forEach(function (b) { b.setAttribute("aria-pressed", +b.dataset.b === bill); });
    TIX.forEach(function (x, i) {
      var el = $('[data-n="' + i + '"]'), v = price(i); $('[data-y="' + i + '"]').textContent = bill ? t.perY.replace("{n}", da(v * 12)) : (x.hot ? L(x.h) : "");
      if (STATIC) { el.textContent = da(v); return; } var o = { v: shown[i] }; gsap.to(o, { v: v, duration: .6, ease: "power3.out", onUpdate: function () { el.textContent = da(Math.round(o.v / 100) * 100); } }); shown[i] = v;
    });
  }
  /* taster mornings */
  function renderDisc() {
    var t = I[lang];
    $("#dates").innerHTML = DATES.map(function (d, i) { return '<button type="button" class="dt" data-d="' + i + '" aria-pressed="' + (i === date) + '"' + (DLEFT[i] ? "" : " disabled") + "><small>" + fmt(d, { weekday: "long" }) + "</small><b>" + d.getDate() + "</b><small>" + fmt(d, { month: "short" }) + "</small><em>" + (DLEFT[i] ? t.left.replace("{n}", DLEFT[i]) : t.full) + "</em></button>"; }).join("");
    ageOut();
  }
  function ageOut() { var t = I[lang], n = +$("#ageR").value; $("#ageO").textContent = t.ageO.replace("{n}", n).replace("{g}", n <= 3 ? t.gS : t.gB); }
  /* questions pinned in a row like notes in the field notebook */
  function renderFaq() {
    $("#faqL").innerHTML = '<div class="qcards">' + FAQ.map(function (f, i) { return '<article class="qc tape" style="--r:' + [-2, 1.5, -1, 2, -1.5, 1][i] + 'deg"><h3>' + L(f[0]) + "</h3><p>" + L(f[1]) + "</p></article>"; }).join("") + "</div>";
  }
  function render() {
    var t = I[lang];
    renderTrail(); renderBadges(); renderBag(); renderMap(); renderNB(0); renderTix(); renderDisc(); renderFaq();
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
    try { localStorage.setItem("ghazal-lang", l); } catch (e) {}
    render();
    if (ready) { bindDynamic(); ScrollTrigger.refresh(); }
  }

  /* events */
  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.l !== lang) setLang(b.dataset.l); }); });
  $("#badgesG").addEventListener("click", function (e) { var b = e.target.closest(".badge"); if (!b) return; badge = +b.dataset.b; $$("#badgesG .badge").forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); showBadge(true); });
  $("#seasons").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; season = +b.dataset.s; $$("#seasons button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); buildList(true); });
  $("#weather").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; wthr = +b.dataset.w; $$("#weather button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); buildList(true); });
  $("#bagList").addEventListener("change", meter);
  $("#bagList").addEventListener("click", function (e) { if (e.target.closest("#printB")) window.print(); });
  function pickSpot(i) { if (i === spot) return; spot = i; showSpot(true); }
  $("#mapSvg").addEventListener("click", function (e) { var g = e.target.closest(".pin"); if (g) pickSpot(+g.dataset.p); });
  $("#mapSvg").addEventListener("keydown", function (e) { var g = e.target.closest(".pin"); if (g && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); pickSpot(+g.dataset.p); } });
  $("#spots").addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) pickSpot(+b.dataset.p); });
  $("#nbP").addEventListener("click", function () { if (page > 0) { page--; renderNB(-1); } });
  $("#nbN").addEventListener("click", function () { if (page < 2) { page++; renderNB(1); } });
  $("#bill").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; bill = +b.dataset.b; updTix(); });
  $("#dates").addEventListener("click", function (e) { var b = e.target.closest(".dt"); if (!b || b.disabled) return; date = +b.dataset.d; $$("#dates .dt").forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); });
  $("#ageR").addEventListener("input", ageOut);
  $("#f").addEventListener("submit", function (e) {
    e.preventDefault(); var t = I[lang], ok = date >= 0 && this.name.value.trim() && /^0[5-7]\d{8}$/.test(this.tel.value.replace(/\s/g, ""));
    if (!ok) { $("#msg").textContent = t.err; if (date >= 0) (this.name.value.trim() ? this.tel : this.name).focus(); return; }
    $("#msg").textContent = t.demo;
  });
  $("#waf").addEventListener("click", function () { openWa(); });

  render();
  if (STATIC) return;

  gsap.registerPlugin(ScrollTrigger);
  var lenis = window.Lenis ? new Lenis({ lerp: 0.1 }) : null;
  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach(function (a) { a.addEventListener("click", function (e) { var id = a.getAttribute("href"); if (id.length < 2) return; var el = $(id); if (!el) return; e.preventDefault(); lenis.scrollTo(el, { offset: id === "#top" ? 0 : -78 }); }); });
  }

  /* hero: words drop in like stamps, photos land on the table, follow the pointer a little */
  gsap.from(".hero .tag, .hero h1 > span, .hero p, .hero .acts", { y: 40, opacity: 0, duration: .8, stagger: .1, ease: "back.out(1.8)", delay: .1 });
  gsap.from(".stamp", { scale: 2.2, opacity: 0, rotation: -30, duration: .5, stagger: .15, ease: "power4.in", delay: .7 });
  gsap.from("#col .ph", { y: -300, opacity: 0, rotation: function (i) { return [-25, 20, -15][i]; }, duration: 1, stagger: .15, ease: "back.out(1.2)", delay: .3 });
  gsap.from(".gaz", { scale: 0, rotation: -90, duration: .8, ease: "back.out(2.5)", delay: 1.2 });
  gsap.to(".gaz", { y: -10, rotation: 4, duration: 1.4, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 2 });
  if (matchMedia("(hover: hover)").matches) $(".hero").addEventListener("pointermove", function (e) { var x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5; $$("#col .ph").forEach(function (p, i) { gsap.to(p, { x: x * (i + 1) * 14, y: y * (i + 1) * 10, duration: .8, ease: "power3.out", overwrite: "auto" }); }); });
  ScrollTrigger.batch("[data-up]", { start: "top 88%", once: true, onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, rotation: 0, duration: .9, stagger: .1, ease: "back.out(1.5)" }); } });

  function bindDynamic() {
    [].concat.apply([], dyn).forEach(function (x) { if (x.targets || x.getChildren) x.revert(); else if (x.kill) x.kill(); }); dyn = [];
    if (matchMedia("(min-width: 901px)").matches) {
      setWalk(0);
      dyn.push(ScrollTrigger.create({ trigger: "#sentier", start: "top 76px", end: "+=1600", pin: true, scrub: true, onUpdate: function (s) { setWalk(s.progress); } }));
    }
    dyn.push(gsap.fromTo("#badgesG .badge", { scale: 0, rotation: -60 }, { scale: 1, rotation: 0, duration: .7, stagger: .08, ease: "back.out(2)", clearProps: "transform", scrollTrigger: { trigger: "#badgesG", start: "top 80%" } }));
    dyn.push(gsap.fromTo("#mapSvg .pin circle", { scale: 0, transformOrigin: "50% 50%" }, { scale: 1, duration: .6, stagger: .08, ease: "back.out(3)", scrollTrigger: { trigger: "#mapSvg", start: "top 80%" } }));
    dyn.push(gsap.fromTo("#tix .tk", { y: 80, rotation: function (i) { return [-4, 2, 5][i]; }, opacity: 0 }, { y: 0, rotation: 0, opacity: 1, duration: .9, stagger: .12, ease: "back.out(1.4)", scrollTrigger: { trigger: "#tix", start: "top 85%" } }));
    dyn.push(gsap.fromTo("#spread", { rotationX: 20, y: 60, opacity: 0, transformPerspective: 1600 }, { rotationX: 0, y: 0, opacity: 1, duration: 1.1, ease: "power3.out", clearProps: "transform", scrollTrigger: { trigger: "#spread", start: "top 85%" } }));
  }
  bindDynamic();
  ready = true;
  var rz, lw = innerWidth; window.addEventListener("resize", function () { if (innerWidth === lw) return; lw = innerWidth; clearTimeout(rz); rz = setTimeout(function () { renderTrail(); bindDynamic(); ScrollTrigger.refresh(); }, 300); });
})();
