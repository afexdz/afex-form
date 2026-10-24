/* Yasmine Montessori : contenu FR / AR / EN et animations (GSAP + ScrollTrigger + Lenis, en local) */
(function () {
  var doc = document.documentElement;
  var STATIC = doc.classList.contains("static") || !window.gsap || !window.ScrollTrigger;
  if (STATIC) doc.classList.add("static");
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  function img(name, w, h, sizes) {
    return '<img src="assets/img/' + name + '-800.webp" srcset="assets/img/' + name + '-800.webp 800w, assets/img/' + name + '-1600.webp 1600w" sizes="' + (sizes || "40vw") + '" width="' + w + '" height="' + h + '" alt="" loading="lazy" decoding="async">';
  }

  var I = {
    fr: { brand: "Yasmine", n1: "L’ambiance", n2: "Le programme", n3: "La journée", n4: "Admission", h1a: "Aide-moi", h1b: "à faire seul.",
      lede: "Une maison des enfants Montessori à Oran, de 18 mois à 6 ans. Petits groupes, matériel en bois, et du temps pour aller au bout de chaque chose.",
      cta1: "Réserver une observation", cta2: "Entrer dans la classe", f1b: "12", f1: "enfants par ambiance", f2b: "2", f2: "éducatrices formées", f3b: "3 h", f3: "de travail libre le matin",
      towerCap: "La tour rose : dix cubes, du plus grand au plus petit.",
      eH: "Une classe pensée à sa hauteur", eP: "Rien n’est posé au hasard. Touchez les points pour voir ce que l’enfant y trouve.",
      dH: "Cinq domaines, un seul enfant", dP: "Le programme Montessori des 3 à 6 ans, en arabe et en français.",
      lH: "Le doigt apprend la lettre avant le crayon", lP: "Avec les lettres rugueuses, l’enfant suit le tracé du doigt dans le sens de l’écriture et dit le son à voix haute. En arabe de droite à gauche, en français de gauche à droite.",
      sp1: "ي : le son « i »", sp2: "y : comme Yasmine",
      cH: "Une journée sans sonnerie", cP: "Le matin, un long cycle de travail libre. Personne n’interrompt un enfant concentré.",
      oH: "Pas de notes, un carnet d’observation", oP: "L’éducatrice note ce qui a été présenté à votre enfant, ce qu’il travaille et ce qu’il maîtrise. Vous le recevez chaque mois, et on en parle ensemble.",
      bName: "Exemple de carnet : Yanis, 4 ans", bMonth: "Mars", th0: "Matériel", th1: "Présenté", th2: "En travail", th3: "Maîtrisé", bLeg: "Exemple fictif, pour montrer le format.",
      orH: "Une maison d’Oran, persiennes ouvertes sur la mer", orP: "Sous Santa Cruz, une vieille maison oranaise aux volets bleus, transformée en école : trois ambiances, un patio et un jardin.",
      paH: "Le jasmin du patio a donné son nom à l’école", pa1: "Chaque enfant a sa plante à arroser.", pa2: "Le potager du jardin donne les tomates et la menthe du goûter.", pa3: "On mange dehors dès que le temps le permet.",
      aH: "Venez observer une matinée", s1: "Une observation", s1p: "Vous passez une heure dans la classe avec votre enfant, en silence, pour voir comment on y travaille.", s2: "Un entretien", s2p: "On parle de ses habitudes, de son sommeil, de ses langues à la maison.", s3: "Une adaptation douce", s3p: "Deux semaines progressives, d’une heure à la journée complète, avec vous au début.",
      l1: "Votre nom", l2: "Téléphone", l3: "Âge de l’enfant", l4: "Matinée souhaitée", send: "Demander une observation",
      foot: "© 2026 Yasmine Montessori, Oran.", by: "Site réalisé par", photos: "Photographies :", lang: "Langue",
      err: "Indiquez votre nom et un numéro de téléphone valide.", demo: "Démo AFEX Digital : aucune demande n’a été envoyée, ce formulaire n’est pas encore connecté.",
      title: "Yasmine Montessori, crèche Montessori à Oran",
      sandAlt: "La main d’un enfant suit une lettre rugueuse rose", roomAlt: "Une classe Montessori avec étagères basses, petites tables et tapis", insetsAlt: "Un plateau d’encastrements métalliques rose et bleu", phonoAlt: "Des enfants composent des mots avec l’alphabet mobile", scAlt: "La chapelle de Santa Cruz au-dessus de la baie d’Oran", jasAlt: "Des boutons de jasmin blanc dans le feuillage", watAlt: "Un enfant arrose des plants de tomates avec un arrosoir",
      ages: ["18 mois à 3 ans (Nido)", "3 à 6 ans (Maison des enfants)"], days: ["Dimanche matin", "Lundi matin", "Mardi matin", "Mercredi matin", "Jeudi matin"] },
    ar: { brand: "ياسمين", n1: "الفضاء", n2: "البرنامج", n3: "اليوم", n4: "القبول", h1a: "ساعدني", h1b: "لأفعل ذلك بنفسي.",
      lede: "بيت أطفال مونتيسوري في وهران، من 18 شهرًا إلى 6 سنوات. أفواج صغيرة، أدوات خشبية، ووقت كافٍ لإتمام كل عمل.",
      cta1: "احجز حصة ملاحظة", cta2: "ادخل إلى القسم", f1b: "12", f1: "طفلًا في كل قسم", f2b: "2", f2: "مربّيتان مكوَّنتان", f3b: "3 سا", f3: "من العمل الحر صباحًا",
      towerCap: "البرج الوردي: عشرة مكعبات، من الأكبر إلى الأصغر.",
      eH: "قسم مصمَّم على مقاس الطفل", eP: "لا شيء موضوع صدفة. المس النقاط لترى ما يجده الطفل هناك.",
      dH: "خمسة مجالات، طفل واحد", dP: "برنامج مونتيسوري من 3 إلى 6 سنوات، بالعربية والفرنسية.",
      lH: "الإصبع يتعلّم الحرف قبل القلم", lP: "مع الحروف الخشنة، يتتبّع الطفل شكل الحرف بإصبعه في اتجاه الكتابة وينطق صوته. بالعربية من اليمين إلى اليسار، وبالفرنسية من اليسار إلى اليمين.",
      sp1: "ي: صوت «ي»", sp2: "y: مثل ياسمين",
      cH: "يوم بلا جرس", cP: "في الصباح، دورة طويلة من العمل الحر. لا أحد يقاطع طفلًا مركّزًا.",
      oH: "لا علامات، بل دفتر ملاحظة", oP: "تدوّن المربّية ما قُدِّم لطفلك، وما يشتغل عليه، وما أتقنه. يصلك كل شهر ونتحدّث عنه معًا.",
      bName: "مثال دفتر: يانيس، 4 سنوات", bMonth: "مارس", th0: "الأداة", th1: "قُدِّمت", th2: "قيد العمل", th3: "أُتقنت", bLeg: "مثال وهمي لعرض الشكل فقط.",
      orH: "بيت وهراني، نوافذه مفتوحة على البحر", orP: "تحت سانتا كروز، بيت وهراني قديم بنوافذ زرقاء تحوّل إلى مدرسة: ثلاثة أقسام، فناء وحديقة.",
      paH: "ياسمين الفناء أعطى المدرسة اسمها", pa1: "لكل طفل نبتته التي يسقيها.", pa2: "يعطينا بستان الحديقة الطماطم والنعناع للمجة.", pa3: "نأكل في الخارج كلما سمح الطقس.",
      aH: "تعالوا لملاحظة صباح عندنا", s1: "حصة ملاحظة", s1p: "تقضون ساعة في القسم مع طفلكم، في هدوء، لتروا كيف نعمل.", s2: "مقابلة", s2p: "نتحدّث عن عاداته ونومه واللغات التي يسمعها في البيت.", s3: "تكيّف هادئ", s3p: "أسبوعان تدريجيان، من ساعة إلى يوم كامل، بحضوركم في البداية.",
      l1: "اسمك", l2: "الهاتف", l3: "سن الطفل", l4: "الصباح المفضَّل", send: "اطلب حصة ملاحظة",
      foot: "© 2026 ياسمين مونتيسوري، وهران.", by: "موقع من إنجاز", photos: "الصور:", lang: "اللغة",
      err: "أدخل اسمك ورقم هاتف صحيح.", demo: "عرض AFEX Digital: لم يُرسل أي طلب، هذا النموذج غير متصل بعد.",
      title: "ياسمين مونتيسوري، روضة مونتيسوري في وهران",
      sandAlt: "يد طفل تتبّع حرفًا خشنًا ورديًا", roomAlt: "قسم مونتيسوري برفوف منخفضة وطاولات صغيرة وبساط", insetsAlt: "صينية أشكال معدنية وردية وزرقاء", phonoAlt: "أطفال يركّبون كلمات بالحروف المتحركة", scAlt: "كنيسة سانتا كروز فوق خليج وهران", jasAlt: "براعم ياسمين بيضاء بين الأوراق", watAlt: "طفل يسقي شتلات الطماطم بمرشّة",
      ages: ["من 18 شهرًا إلى 3 سنوات (نيدو)", "من 3 إلى 6 سنوات (بيت الأطفال)"], days: ["صباح الأحد", "صباح الاثنين", "صباح الثلاثاء", "صباح الأربعاء", "صباح الخميس"] },
    en: { brand: "Yasmine", n1: "The classroom", n2: "Curriculum", n3: "The day", n4: "Admissions", h1a: "Help me", h1b: "to do it myself.",
      lede: "A Montessori children’s house in Oran, from 18 months to 6 years. Small groups, wooden materials, and time to finish every task.",
      cta1: "Book an observation", cta2: "Step into the classroom", f1b: "12", f1: "children per classroom", f2b: "2", f2: "trained guides", f3b: "3 h", f3: "of free work each morning",
      towerCap: "The pink tower: ten cubes, from largest to smallest.",
      eH: "A classroom built at their height", eP: "Nothing is there by chance. Tap the dots to see what a child finds there.",
      dH: "Five areas, one child", dP: "The Montessori curriculum for ages 3 to 6, in Arabic and French.",
      lH: "The finger learns the letter before the pencil", lP: "With sandpaper letters, the child traces each letter in the direction it is written and says its sound aloud. Arabic right to left, French left to right.",
      sp1: "ي: the “ee” sound", sp2: "y: as in Yasmine",
      cH: "A day without bells", cP: "In the morning, one long work cycle. Nobody interrupts a child who is concentrating.",
      oH: "No grades, an observation notebook", oP: "The guide records what has been presented to your child, what they are working on and what they have mastered. You get it every month, and we talk it through.",
      bName: "Sample notebook: Yanis, 4", bMonth: "March", th0: "Material", th1: "Presented", th2: "Practising", th3: "Mastered", bLeg: "A made-up example, to show the format.",
      orH: "An Oran house, shutters open to the sea", orP: "Below Santa Cruz, an old Oran house with blue shutters, turned into a school: three classrooms, a patio and a garden.",
      paH: "The patio jasmine gave the school its name", pa1: "Every child has a plant to water.", pa2: "The garden gives the tomatoes and mint for the afternoon snack.", pa3: "We eat outside whenever the weather allows.",
      aH: "Come and observe a morning", s1: "An observation", s1p: "You spend an hour in the classroom with your child, quietly, to see how we work.", s2: "A conversation", s2p: "We talk about their habits, their sleep and the languages spoken at home.", s3: "A gentle settling-in", s3p: "Two gradual weeks, from one hour to a full day, with you there at first.",
      l1: "Your name", l2: "Phone", l3: "Child’s age", l4: "Preferred morning", send: "Request an observation",
      foot: "© 2026 Yasmine Montessori, Oran.", by: "Website by", photos: "Photographs:", lang: "Language",
      err: "Enter your name and a valid phone number.", demo: "AFEX Digital demo: no request was sent, this form is not connected yet.",
      title: "Yasmine Montessori, Montessori nursery in Oran",
      sandAlt: "A child’s hand traces a pink sandpaper letter", roomAlt: "A Montessori classroom with low shelves, small tables and a rug", insetsAlt: "A tray of pink and blue metal insets", phonoAlt: "Children building words with the moveable alphabet", scAlt: "Santa Cruz chapel above the bay of Oran", jasAlt: "White jasmine buds among the leaves", watAlt: "A child waters tomato plants with a watering can",
      ages: ["18 months to 3 years (Nido)", "3 to 6 years (Children’s House)"], days: ["Sunday morning", "Monday morning", "Tuesday morning", "Wednesday morning", "Thursday morning"] }
  };

  var PINS = [
    { x: 72, y: 66, t: { fr: "Étagères basses", ar: "رفوف منخفضة", en: "Low shelves" }, d: { fr: "Chaque activité a sa place sur un plateau. L’enfant la choisit seul, et la range après.", ar: "لكل نشاط مكانه على صينية. يختاره الطفل بنفسه ويعيده بعد ذلك.", en: "Every activity sits on its own tray. The child picks it alone, and puts it back after." } },
    { x: 26, y: 56, t: { fr: "Des tables à sa taille", ar: "طاولات على مقاسه", en: "Tables their size" }, d: { fr: "Des chaises qu’il porte lui-même : il décide où il travaille.", ar: "كراسٍ يحملها بنفسه: هو من يقرّر أين يعمل.", en: "Chairs light enough to carry: they decide where to work." } },
    { x: 50, y: 82, t: { fr: "Le tapis de travail", ar: "بساط العمل", en: "The work rug" }, d: { fr: "Il déroule son tapis, et cet espace devient le sien. Les autres en font le tour.", ar: "يبسط بساطه فيصبح ذلك المكان مكانه. والآخرون يمرّون حوله.", en: "They unroll a rug and that space becomes theirs. Others walk around it." } },
    { x: 91, y: 44, t: { fr: "Les plantes de la classe", ar: "نباتات القسم", en: "Classroom plants" }, d: { fr: "Les enfants les arrosent et les nettoient à tour de rôle.", ar: "يسقيها الأطفال وينظّفونها بالتناوب.", en: "Children take turns to water and clean them." } }
  ];
  var DOMS = [
    { img: "washing", d: [1600, 1068], t: { fr: "Vie pratique", ar: "الحياة العملية", en: "Practical life" }, p: { fr: "Se laver les mains, verser l’eau, plier, balayer : les gestes de la maison, pour gagner en autonomie et en concentration.", ar: "غسل اليدين، صبّ الماء، الطيّ، الكنس: حركات البيت لاكتساب الاستقلالية والتركيز.", en: "Washing hands, pouring water, folding, sweeping: everyday tasks that build independence and focus." } },
    { img: "tower", d: [1600, 1200], t: { fr: "Sensoriel", ar: "الحسي", en: "Sensorial" }, p: { fr: "La tour rose, l’escalier marron, les cylindres : comparer, classer, ranger du plus grand au plus petit.", ar: "البرج الوردي، الدرج البني، الأسطوانات: المقارنة والتصنيف والترتيب من الأكبر إلى الأصغر.", en: "The pink tower, the brown stair, the cylinders: comparing, sorting, ordering from largest to smallest." } },
    { img: "phono", d: [1600, 1200], t: { fr: "Langage", ar: "اللغة", en: "Language" }, p: { fr: "Les sons d’abord, puis les lettres rugueuses et l’alphabet mobile, en arabe et en français.", ar: "الأصوات أولًا، ثم الحروف الخشنة والأبجدية المتحركة، بالعربية والفرنسية.", en: "Sounds first, then sandpaper letters and the moveable alphabet, in Arabic and French." } },
    { img: "beads", d: [1600, 2390], t: { fr: "Mathématiques", ar: "الرياضيات", en: "Maths" }, p: { fr: "Les perles dorées : une perle, une barre de dix, un carré de cent, un cube de mille, à tenir dans la main.", ar: "اللآلئ الذهبية: لؤلؤة، عصا من عشرة، مربّع من مئة، مكعّب من ألف، تُمسك باليد.", en: "Golden beads: one bead, a bar of ten, a square of a hundred, a cube of a thousand, all held in the hand." } },
    { img: "pinmap", d: [1600, 1600], t: { fr: "Culture", ar: "الثقافة", en: "Culture" }, p: { fr: "Cartes puzzle, continents, plantes et animaux : l’Algérie d’abord, puis le reste du monde.", ar: "خرائط تركيبية، قارات، نباتات وحيوانات: الجزائر أولًا ثم بقية العالم.", en: "Puzzle maps, continents, plants and animals: Algeria first, then the rest of the world." } }
  ];
  var CYCLE = [
    { time: "08:00", c: "var(--woodL)", t: { fr: "Accueil", ar: "الاستقبال", en: "Arrival" }, p: { fr: "On se dit bonjour, on range son manteau seul.", ar: "نتبادل التحية ونعلّق المعطف بأنفسنا.", en: "Hellos, and hanging up one’s own coat." } },
    { time: "08:30", c: "var(--pink)", long: true, t: { fr: "Cycle de travail libre", ar: "دورة العمل الحر", en: "Free work cycle" }, p: { fr: "Trois heures : chaque enfant choisit son activité, l’éducatrice présente du nouveau matériel à un ou deux enfants à la fois.", ar: "ثلاث ساعات: يختار كل طفل نشاطه، وتقدّم المربّية أداة جديدة لطفل أو اثنين في كل مرة.", en: "Three hours: each child chooses their work, and the guide presents new material to one or two children at a time." } },
    { time: "11:30", c: "var(--sage)", t: { fr: "Regroupement", ar: "التجمّع", en: "Circle time" }, p: { fr: "Une histoire, une chanson en arabe ou en français.", ar: "قصة وأنشودة بالعربية أو الفرنسية.", en: "A story, a song in Arabic or French." } },
    { time: "12:00", c: "var(--wood)", t: { fr: "Repas", ar: "الغداء", en: "Lunch" }, p: { fr: "Les enfants mettent la table et se servent seuls.", ar: "يضع الأطفال المائدة ويخدمون أنفسهم.", en: "Children set the table and serve themselves." } },
    { time: "13:00", c: "var(--seaL)", t: { fr: "Repos", ar: "الراحة", en: "Rest" }, p: { fr: "Sieste pour les petits, lecture calme pour les grands.", ar: "قيلولة للصغار وقراءة هادئة للكبار.", en: "Naps for the little ones, quiet reading for the older." } },
    { time: "15:00", c: "var(--sea)", t: { fr: "Jardin et départ", ar: "الحديقة والمغادرة", en: "Garden and home" }, p: { fr: "Arrosage, goûter au patio, puis les parents arrivent jusqu’à 16 h 30.", ar: "السقي، لمجة في الفناء، ثم يأتي الأولياء حتى 16:30.", en: "Watering, snack in the patio, then parents arrive until 16:30." } }
  ];
  var OBS = [
    [{ fr: "Tour rose", ar: "البرج الوردي", en: "Pink tower" }, 3],
    [{ fr: "Verser l’eau", ar: "صبّ الماء", en: "Pouring water" }, 3],
    [{ fr: "Lettres rugueuses ب ت ث", ar: "الحروف الخشنة ب ت ث", en: "Sandpaper letters ب ت ث" }, 2],
    [{ fr: "Lettres rugueuses a b c", ar: "الحروف الخشنة a b c", en: "Sandpaper letters a b c" }, 2],
    [{ fr: "Perles dorées", ar: "اللآلئ الذهبية", en: "Golden beads" }, 1],
    [{ fr: "Carte de l’Afrique", ar: "خريطة إفريقيا", en: "Map of Africa" }, 1]
  ];
  var CREDITS = [["Lisa Maruna", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Sandpaper_letters.jpg"], ["Natalie Choi", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:A_Montessori_Classroom_at_Qingdao_Amerasia_International_School_.jpg"], ["Shixart1985", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Child_washes_hands_under_running_water_in_modern_kitchen_sink.jpg"], ["MattThePuppetGuy", "domaine public", "https://commons.wikimedia.org/wiki/File:BrownStairsAndPinkTower2.JPG"], ["Brooksgerber", "domaine public", "https://commons.wikimedia.org/wiki/File:MontessoriPhonograms.JPG"], ["Clematytedusud", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Montessori_Materiel_(golden_beads)_Wi_School.jpg"], ["Ctmontessori", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Montessori_Pin_Map.jpg"], ["Syrupisbetterthanjelly", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Montessori_Metal_Insets_Tray.jpg"], ["R hakka", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Vue_sur_Oran_-_Chapelle_de_Santa-Cruz.jpg"], ["Billjones94", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Arabian_jasmine_(Jasminum_sambac)_buds_captured_in_morning.jpg"], ["Shixart1985", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Child_waters_tomato_plants_with_orange_watering_can_in_garden.jpg"]];

  var lang = "fr", pin = 0, dom = 0, ready = false, dyn = [];
  try { var s = localStorage.getItem("yasmine-lang"); if (I[s]) lang = s; } catch (e) {}

  /* the pink tower: ten cubes, sizes 1 to 10 */
  function buildTower() {
    var tw = $("#tower"), h = tw.offsetHeight || 400, sizes = [], total = 0;
    for (var i = 10; i >= 1; i--) { sizes.push(i); total += i; }
    var u = h * .94 / total, b = 0, html = "";
    sizes.forEach(function (n) {
      var sz = n * u;
      html += '<div class="cube" style="--s:' + sz.toFixed(1) + 'px;--b:' + b.toFixed(1) + 'px"><i class="fr">' + (n > 2 ? n : "") + '</i><i class="bk"></i><i class="rt"></i><i class="lf"></i><i class="tp"></i><i class="bt"></i></div>';
      b += sz;
    });
    tw.innerHTML = html;
  }
  function showPin(i) {
    pin = i; var p = PINS[i];
    $$("#pins .pin").forEach(function (b, k) { b.setAttribute("aria-pressed", k === i); });
    $("#note").innerHTML = "<h3>" + p.t[lang] + "</h3><p>" + p.d[lang] + "</p>";
    if (!STATIC) gsap.from("#note > *", { y: 14, opacity: 0, duration: .5, stagger: .06, ease: "power3.out" });
  }
  function openDom(i) {
    dom = i;
    $("#doms").style.setProperty("--cols", DOMS.map(function (_, k) { return k === i ? "2.6fr" : "1fr"; }).join(" "));
    $$("#doms .dom").forEach(function (b, k) { b.setAttribute("aria-expanded", k === i); });
  }
  function render() {
    var t = I[lang];
    $("#pins").innerHTML = PINS.map(function (p, i) { return '<button type="button" class="pin" style="left:' + p.x + '%;top:' + p.y + '%" aria-label="' + p.t[lang] + '" aria-pressed="false">' + (i + 1) + '</button>'; }).join("");
    showPin(pin);
    $("#doms").innerHTML = DOMS.map(function (d, i) { return '<button type="button" class="dom" data-k="' + i + '" aria-expanded="false">' + img(d.img, d.d[0], d.d[1], "(min-width:960px) 50vw, 92vw") + '<span class="in"><span class="k">0' + (i + 1) + '</span><h3>' + d.t[lang] + '</h3><p>' + d.p[lang] + '</p></span></button>'; }).join("");
    openDom(dom);
    $("#bar").style.setProperty("--n", CYCLE.length + 1);
    $("#bar").innerHTML = CYCLE.map(function (c) { return '<div class="seg' + (c.long ? " long" : "") + '" style="--c:' + c.c + '"><time>' + c.time + '</time><h3>' + c.t[lang] + '</h3><p>' + c.p[lang] + '</p></div>'; }).join("");
    $("#obsRows").innerHTML = OBS.map(function (r) { return "<tr><td>" + r[0][lang] + "</td>" + [1, 2, 3].map(function (k) { return '<td><span class="dot' + (r[1] >= k ? " on" : "") + '" aria-label="' + (r[1] >= k ? "✓" : "–") + '"></span></td>'; }).join("") + "</tr>"; }).join("");
    $("#sel").innerHTML = t.ages.map(function (a) { return "<option>" + a + "</option>"; }).join("");
    $("#sel2").innerHTML = t.days.map(function (a) { return "<option>" + a + "</option>"; }).join("");
    $("#credits").innerHTML = t.photos + " " + CREDITS.map(function (c) { return '<a href="' + c[2] + '" target="_blank" rel="noopener">' + c[0] + '</a> (' + c[1] + ')'; }).join(", ") + ", Wikimedia Commons.";
  }
  function setLang(l) {
    lang = l; var t = I[l];
    doc.lang = l; doc.dir = l === "ar" ? "rtl" : "ltr"; document.title = t.title;
    $$("[data-i]").forEach(function (e) { e.textContent = t[e.dataset.i]; });
    $$("[data-alt]").forEach(function (e) { e.alt = t[e.dataset.alt]; });
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.l === l); });
    $(".lang").setAttribute("aria-label", t.lang); $("#msg").textContent = "";
    try { localStorage.setItem("yasmine-lang", l); } catch (e) {}
    render();
    if (ready) { bindDynamic(); ScrollTrigger.refresh(); }
  }

  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.l !== lang) setLang(b.dataset.l); }); });
  $("#pins").addEventListener("click", function (e) { var b = e.target.closest(".pin"); if (b) showPin($$("#pins .pin").indexOf(b)); });
  $("#doms").addEventListener("click", function (e) { var b = e.target.closest(".dom"); if (b) openDom(+b.dataset.k); });
  $("#doms").addEventListener("mouseover", function (e) { var b = e.target.closest(".dom"); if (b && matchMedia("(hover: hover)").matches && +b.dataset.k !== dom) openDom(+b.dataset.k); });
  $("#f").addEventListener("submit", function (e) {
    e.preventDefault(); var t = I[lang], ok = this.name.value.trim() && /^0[5-7]\d{8}$/.test(this.tel.value.replace(/\s/g, ""));
    if (!ok) { $("#msg").textContent = t.err; (this.name.value.trim() ? this.tel : this.name).focus(); return; }
    $("#msg").textContent = t.demo;
  });

  buildTower();
  setLang(lang);
  if (STATIC) return;

  gsap.registerPlugin(ScrollTrigger);
  var lenis = window.Lenis ? new Lenis({ lerp: 0.09 }) : null;
  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach(function (a) { a.addEventListener("click", function (e) { var id = a.getAttribute("href"); if (id.length < 2) return; var el = $(id); if (!el) return; e.preventDefault(); lenis.scrollTo(el, { offset: -72 }); }); });
  }

  /* hero: the photo opens like a drawer, then the tower is built cube by cube */
  var tower = $("#tower");
  gsap.from(".stage3d .ph", { clipPath: "inset(0 0 100% 0)", duration: 1.3, ease: "expo.inOut" });
  gsap.from(".hero h1 > span, .hero .lead, .hero .acts, .facts div", { y: 30, opacity: 0, duration: 1, stagger: .09, ease: "power3.out", delay: .2 });
  gsap.from("#tower .cube", { y: -520, opacity: 0, duration: .75, stagger: .13, ease: "bounce.out", delay: .6 });
  gsap.fromTo(tower, { "--ry": "-70deg" }, { "--ry": "-32deg", duration: 2.4, ease: "power2.out", delay: .6 });
  gsap.to(tower, { "--ry": "38deg", ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: .8 } });
  if (matchMedia("(hover: hover)").matches) {
    $(".hero").addEventListener("pointermove", function (e) { gsap.to(tower, { "--rx": (-16 + (e.clientY / innerHeight - .5) * -14) + "deg", duration: .8, ease: "power3.out", overwrite: "auto" }); });
  }
  ScrollTrigger.batch("[data-up]", { start: "top 88%", once: true, onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, duration: 1, stagger: .1, ease: "power3.out" }); } });

  function bindDynamic() {
    dyn.forEach(function (x) { if (x.scrollTrigger) x.scrollTrigger.kill(); if (x.kill) x.kill(); }); dyn = [];
    var wide = matchMedia("(min-width: 961px)").matches;
    /* pins pop one after the other */
    dyn.push(gsap.from("#pins .pin", { scale: 0, duration: .6, stagger: .15, ease: "back.out(2.4)", scrollTrigger: { trigger: ".room", start: "top 65%" } }));
    /* the five panels rise in */
    dyn.push(gsap.from("#doms .dom", { y: 80, opacity: 0, duration: 1, stagger: .08, ease: "power3.out", scrollTrigger: { trigger: "#doms", start: "top 80%" } }));
    /* sandpaper letters: the outline is traced, then the sand appears */
    ["#tA", "#tB"].forEach(function (id, i) {
      var tx = $(id);
      gsap.set(tx, { strokeDasharray: 1400, strokeDashoffset: 1400, fillOpacity: 0 });
      dyn.push(gsap.timeline({ scrollTrigger: { trigger: ".cards", start: "top 80%", end: "bottom 45%", scrub: .6 } })
        .to(tx, { strokeDashoffset: 0, duration: 1, ease: "none", delay: i * .15 })
        .to(tx, { fillOpacity: 1, duration: .5 }));
    });
    /* the work cycle fills in, hour by hour */
    var segs = $$("#bar .seg");
    gsap.set(segs, { "--p": 0 });
    dyn.push(gsap.to(segs, { "--p": 1, stagger: .4, ease: "none", scrollTrigger: { trigger: "#bar", start: wide ? "top 80%" : "top 85%", end: wide ? "bottom 50%" : "bottom 70%", scrub: .5 } }));
    /* notebook dots get filled in */
    dyn.push(gsap.from("#obsRows .dot.on", { scale: 0, duration: .45, stagger: .07, ease: "back.out(3)", scrollTrigger: { trigger: ".book", start: "top 70%" } }));
    /* Oran: the blue shutters open */
    dyn.push(gsap.to(".slats i", { scaleY: 0, stagger: { each: .08, from: "end" }, ease: "power2.inOut", scrollTrigger: { trigger: ".oran", start: "top 75%", end: "top 10%", scrub: .6 } }));
    dyn.push(gsap.from(".oran .txt h2, .oran .txt p", { y: 40, opacity: 0, stagger: .12, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".oran", start: "top 20%" } }));
    dyn.push(gsap.fromTo(".oran .shot img", { scale: 1.15 }, { scale: 1, ease: "none", scrollTrigger: { trigger: ".oran", start: "top bottom", end: "bottom top", scrub: true } }));
    /* patio: the tall jasmine photo drifts against the wide one */
    if (wide) dyn.push(gsap.fromTo(".patio .tall", { y: 60 }, { y: -60, ease: "none", scrollTrigger: { trigger: ".patio", start: "top bottom", end: "bottom top", scrub: true } }));
  }
  bindDynamic();
  ready = true;
  var rz, lw = innerWidth; window.addEventListener("resize", function () { if (innerWidth === lw) return; lw = innerWidth; clearTimeout(rz); rz = setTimeout(function () { buildTower(); bindDynamic(); ScrollTrigger.refresh(); }, 300); });
})();
