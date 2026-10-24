/* Bara’im : contenu FR / AR / EN et animations (GSAP + ScrollTrigger + Lenis, en local) */
(function () {
  var doc = document.documentElement;
  var STATIC = doc.classList.contains("static") || !window.gsap || !window.ScrollTrigger;
  if (STATIC) doc.classList.add("static");
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  function img(name, w, h, sizes, cls) {
    return '<img' + (cls ? ' class="' + cls + '"' : '') + ' src="assets/img/' + name + '-800.webp" srcset="assets/img/' + name + '-800.webp 800w, assets/img/' + name + '-1600.webp 1600w" sizes="' + (sizes || "40vw") + '" width="' + w + '" height="' + h + '" alt="" loading="lazy" decoding="async">';
  }
  var DIM = { jardin: [1600, 1067], paint: [1600, 1064], blocks: [1600, 2133], blocks2: [1600, 2133], alpha: [1600, 1200], reader: [1600, 900], eating: [1600, 1071], slide: [1600, 2133], toddler: [1600, 2400], drawing: [1448, 1024] };

  var I = {
    fr: { brand: "Bara’im", n1: "Sections", n2: "La journée", n3: "Menu", n4: "Inscription", h1a: "Ici, chaque enfant pousse", h1b: "à son rythme.",
      lede: "Une crèche et un préscolaire bilingues à Alger, de 3 mois à 5 ans : on joue, on parle arabe et français, on mange bien, et vous recevez les photos de la journée.",
      cta1: "Inscrire mon enfant", cta2: "Voir une journée", ag1: "3 à 18 mois", ag2: "18 mois à 3 ans", ag3: "3 à 5 ans",
      sH: "Quatre sections, une seule pousse", sP: "Votre enfant grandit d’une section à l’autre, avec la même équipe et les mêmes repères.",
      aH: "Deux alphabets dès la petite section", aP: "Chaque lettre a son mot, en arabe et en français. Touchez une carte pour la retourner.", aHint: "Les grands apprennent à écrire leur prénom dans les deux langues.",
      dH: "Une journée à Bara’im", mH: "Le menu de la semaine", mP: "Cuisiné sur place chaque matin, sans piment, adapté à l’âge. Les allergies sont notées à l’inscription.",
      pH: "Chaque soir, la journée de votre enfant", pP: "Un message sur WhatsApp à 17 h : ce qu’il a mangé, s’il a bien dormi, et une photo de l’atelier du jour.",
      p1: "Le repas, et combien il en a mangé", p2: "L’heure et la durée de la sieste", p3: "Une photo de l’activité du jour",
      gH: "Une sortie par mois au Jardin d’Essai", gP: "Pour les moyens et les grands : les palmiers, les bassins et les grands arbres du Hamma, à dix minutes de la crèche, accompagnés de deux éducatrices pour huit enfants.",
      iH: "Réservez une visite", iP: "Venez voir la crèche avec votre enfant. On vous rappelle pour fixer l’heure.", l1: "Votre nom", l2: "Téléphone", l3: "Prénom de l’enfant", l4: "Section", send: "Demander une visite",
      foot: "© 2026 Bara’im, crèche et préscolaire, Alger.", by: "Site réalisé par", photos: "Photographies :", lang: "Langue", daysL: "Jours de la semaine", sample: "Exemple de message",
      err: "Indiquez votre nom et un numéro de téléphone valide.", demo: "Démo AFEX Digital : aucune demande n’a été envoyée, ce formulaire n’est pas encore connecté.",
      title: "Bara’im, crèche et préscolaire bilingue à Alger",
      paintAlt: "Un enfant montre ses mains couvertes de peinture verte", eatingAlt: "Des enfants déjeunent à la crèche", jardinAlt: "Les palmiers et le bassin du Jardin d’Essai du Hamma à Alger", drawingAlt: "Un dessin d’enfant au crayon",
      st: ["Entrée", "Plat", "Dessert"], days: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu."] },
    ar: { brand: "براعم", n1: "الأقسام", n2: "اليوم", n3: "قائمة الطعام", n4: "التسجيل", h1a: "هنا، كل طفل ينمو", h1b: "على إيقاعه.",
      lede: "روضة وتحضيري مزدوج اللغة في الجزائر العاصمة، من 3 أشهر إلى 5 سنوات: نلعب، نتكلم العربية والفرنسية، نأكل جيدًا، وتصلكم صور اليوم.",
      cta1: "سجّل طفلك", cta2: "شاهد يومًا عندنا", ag1: "من 3 إلى 18 شهرًا", ag2: "من 18 شهرًا إلى 3 سنوات", ag3: "من 3 إلى 5 سنوات",
      sH: "أربعة أقسام، برعم واحد", sP: "يكبر طفلك من قسم إلى آخر مع نفس الفريق ونفس المعالم.",
      aH: "أبجديتان منذ القسم الصغير", aP: "لكل حرف كلمته بالعربية والفرنسية. المس البطاقة لتقلبها.", aHint: "يتعلّم الكبار كتابة أسمائهم باللغتين.",
      dH: "يوم في براعم", mH: "قائمة طعام الأسبوع", mP: "يُطهى في عين المكان كل صباح، بلا فلفل حار، ومناسب للسن. تُسجَّل الحساسيات عند التسجيل.",
      pH: "كل مساء، يوم طفلك", pP: "رسالة على واتساب على الساعة 17:00: ماذا أكل، هل نام جيدًا، وصورة من ورشة اليوم.",
      p1: "الوجبة وكم أكل منها", p2: "وقت القيلولة ومدّتها", p3: "صورة من نشاط اليوم",
      gH: "خرجة كل شهر إلى حديقة التجارب", gP: "للمتوسطين والكبار: نخيل وأحواض وأشجار الحامة الكبيرة، على بعد عشر دقائق من الروضة، برفقة مربّيتين لكل ثمانية أطفال.",
      iH: "احجز زيارة", iP: "تعالوا لرؤية الروضة مع طفلكم. نتصل بكم لتحديد الموعد.", l1: "اسمك", l2: "الهاتف", l3: "اسم الطفل", l4: "القسم", send: "اطلب زيارة",
      foot: "© 2026 براعم، روضة وتحضيري، الجزائر.", by: "موقع من إنجاز", photos: "الصور:", lang: "اللغة", daysL: "أيام الأسبوع", sample: "مثال على رسالة",
      err: "أدخل اسمك ورقم هاتف صحيح.", demo: "عرض AFEX Digital: لم يُرسل أي طلب، هذا النموذج غير متصل بعد.",
      title: "براعم، روضة وتحضيري مزدوج اللغة بالجزائر",
      paintAlt: "طفل يُري يديه المغطاتين بالطلاء الأخضر", eatingAlt: "أطفال يتناولون الغداء في الروضة", jardinAlt: "نخيل وحوض حديقة التجارب بالحامة في الجزائر", drawingAlt: "رسم طفل بقلم التلوين",
      st: ["مقبلات", "طبق رئيسي", "تحلية"], days: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"] },
    en: { brand: "Bara’im", n1: "Groups", n2: "The day", n3: "Menu", n4: "Enrol", h1a: "Here, every child grows", h1b: "at their own pace.",
      lede: "A bilingual nursery and preschool in Algiers, from 3 months to 5 years: we play, speak Arabic and French, eat well, and you get photos of the day.",
      cta1: "Enrol my child", cta2: "See a day here", ag1: "3 to 18 months", ag2: "18 months to 3 years", ag3: "3 to 5 years",
      sH: "Four groups, one growing bud", sP: "Your child moves from one group to the next with the same team and the same routines.",
      aH: "Two alphabets from the youngest group", aP: "Every letter has its word, in Arabic and in French. Tap a card to flip it.", aHint: "The oldest learn to write their name in both languages.",
      dH: "A day at Bara’im", mH: "This week’s menu", mP: "Cooked on site every morning, never spicy, suited to each age. Allergies are noted at enrolment.",
      pH: "Every evening, your child’s day", pP: "A WhatsApp message at 17:00: what they ate, how they slept, and a photo from the day’s activity.",
      p1: "The meal, and how much they ate", p2: "Nap time and how long it lasted", p3: "A photo of the day’s activity",
      gH: "A monthly outing to the Jardin d’Essai", gP: "For the middle and older groups: the palms, ponds and great trees of El Hamma, ten minutes from the nursery, with two carers for eight children.",
      iH: "Book a visit", iP: "Come and see the nursery with your child. We call you back to set a time.", l1: "Your name", l2: "Phone", l3: "Child’s first name", l4: "Group", send: "Request a visit",
      foot: "© 2026 Bara’im, nursery and preschool, Algiers.", by: "Website by", photos: "Photographs:", lang: "Language", daysL: "Days of the week", sample: "Sample message",
      err: "Enter your name and a valid phone number.", demo: "AFEX Digital demo: no request was sent, this form is not connected yet.",
      title: "Bara’im, bilingual nursery and preschool in Algiers",
      paintAlt: "A child shows hands covered in green paint", eatingAlt: "Children having lunch at the nursery", jardinAlt: "Palms and the pond of the Jardin d’Essai du Hamma in Algiers", drawingAlt: "A child’s crayon drawing",
      st: ["Starter", "Main", "Dessert"], days: ["Sun", "Mon", "Tue", "Wed", "Thu"] }
  };

  var STAGES = [
    { img: "toddler", bg: "var(--peachL)", cls: "", t: { fr: "Les bourgeons", ar: "البراعم", en: "The buds" }, a: { fr: "3 à 18 mois", ar: "من 3 إلى 18 شهرًا", en: "3 to 18 months" }, d: { fr: "Un coin calme, des repas et des siestes au rythme de chaque bébé.", ar: "ركن هادئ، وجبات وقيلولة على إيقاع كل رضيع.", en: "A quiet corner, meals and naps at each baby’s own rhythm." }, l: { fr: ["Une éducatrice pour quatre bébés", "Éveil sensoriel et comptines", "Carnet de biberons et de sommeil"], ar: ["مربّية لكل أربعة رضّع", "إيقاظ حسي وأناشيد", "دفتر للرضاعة والنوم"], en: ["One carer for four babies", "Sensory play and nursery rhymes", "A bottle and sleep log"] } },
    { img: "blocks", bg: "var(--pistaL)", cls: "b2", t: { fr: "Les pousses", ar: "البراعم الصغيرة", en: "The shoots" }, a: { fr: "18 mois à 3 ans", ar: "من 18 شهرًا إلى 3 سنوات", en: "18 months to 3 years" }, d: { fr: "Marcher, parler, partager : on construit, on chante, on apprend la propreté.", ar: "المشي، الكلام، المشاركة: نبني، نغني ونتعلّم النظافة.", en: "Walking, talking, sharing: building, singing and potty training." }, l: { fr: ["Jeux de construction et motricité", "Premiers mots en deux langues", "Apprentissage de la propreté"], ar: ["ألعاب البناء والحركة", "أولى الكلمات باللغتين", "تعلّم النظافة"], en: ["Building games and motor skills", "First words in two languages", "Potty training"] } },
    { img: "reader", bg: "var(--skyL)", cls: "b3", t: { fr: "Les branches", ar: "الأغصان", en: "The branches" }, a: { fr: "3 à 4 ans", ar: "من 3 إلى 4 سنوات", en: "3 to 4 years" }, d: { fr: "Histoires, dessin, nombres : la curiosité devient un plaisir d’apprendre.", ar: "قصص، رسم، أعداد: يصبح الفضول متعة للتعلّم.", en: "Stories, drawing, numbers: curiosity becomes the joy of learning." }, l: { fr: ["Lecture d’histoires chaque jour", "Ateliers peinture et pâte à modeler", "Comptines en arabe et en français"], ar: ["قراءة القصص كل يوم", "ورشات الرسم والعجين", "أناشيد بالعربية والفرنسية"], en: ["Story time every day", "Painting and modelling clay", "Rhymes in Arabic and French"] } },
    { img: "alpha", bg: "var(--sunL)", cls: "", t: { fr: "Les fleurs", ar: "الأزهار", en: "The flowers" }, a: { fr: "4 à 5 ans, préscolaire", ar: "من 4 إلى 5 سنوات، تحضيري", en: "4 to 5 years, preschool" }, d: { fr: "Le préscolaire : lettres, chiffres et autonomie, pour entrer à l’école en confiance.", ar: "التحضيري: الحروف، الأرقام والاستقلالية، لدخول المدرسة بثقة.", en: "Preschool: letters, numbers and independence, to start school with confidence." }, l: { fr: ["Lettres arabes et françaises", "Premiers calculs et formes", "Préparation à la première année"], ar: ["الحروف العربية والفرنسية", "أولى العمليات والأشكال", "التحضير للسنة الأولى"], en: ["Arabic and French letters", "First sums and shapes", "Getting ready for first grade"] } }
  ];
  var LETTERS = [["أ", "أرنب", "A", { fr: "Avion", en: "Apple" }], ["ب", "بطة", "B", { fr: "Ballon", en: "Ball" }], ["ت", "تفاحة", "C", { fr: "Chat", en: "Cat" }], ["ج", "جمل", "D", { fr: "Dauphin", en: "Dolphin" }], ["ح", "حصان", "E", { fr: "Étoile", en: "Egg" }], ["خ", "خروف", "F", { fr: "Fleur", en: "Fish" }], ["د", "دب", "G", { fr: "Girafe", en: "Goat" }], ["س", "سمكة", "H", { fr: "Hibou", en: "Hat" }]];
  var COLORS = ["var(--peach)", "var(--pista)", "var(--sky)", "var(--sun)"];
  var DAY = [
    { h: 7.5, time: "07:30", img: "toddler", t: { fr: "Accueil", ar: "الاستقبال", en: "Welcome" }, d: { fr: "Les parents déposent, on se dit bonjour, petit déjeuner pour ceux qui arrivent tôt.", ar: "يوصل الأولياء أطفالهم، نُلقي التحية، وفطور لمن يصل مبكرًا.", en: "Drop-off, hellos, and breakfast for early arrivals." } },
    { h: 9, time: "09:00", img: "blocks2", t: { fr: "Ateliers", ar: "الورشات", en: "Activities" }, d: { fr: "Construction, peinture, lettres : un atelier par groupe, en arabe ou en français.", ar: "بناء، رسم، حروف: ورشة لكل فوج بالعربية أو الفرنسية.", en: "Building, painting, letters: one activity per group, in Arabic or French." } },
    { h: 11.5, time: "11:30", img: "eating", t: { fr: "Déjeuner", ar: "الغداء", en: "Lunch" }, d: { fr: "Un repas complet cuisiné le matin même, à table, tous ensemble.", ar: "وجبة كاملة مطهوة صباح اليوم نفسه، على المائدة معًا.", en: "A full meal cooked that morning, at the table, together." } },
    { h: 13, time: "13:00", img: "drawing", t: { fr: "Sieste", ar: "القيلولة", en: "Nap" }, d: { fr: "Lumière tamisée, doudou, et une éducatrice qui veille.", ar: "إضاءة خافتة، دمية النوم، ومربّية تسهر.", en: "Dimmed lights, a comforter, and a carer keeping watch." } },
    { h: 15.5, time: "15:30", img: "slide", t: { fr: "Jeux dehors", ar: "اللعب في الخارج", en: "Outdoor play" }, d: { fr: "La cour, le toboggan, puis un goûter de fruits.", ar: "الساحة، الزحليقة، ثم لمجة من الفواكه.", en: "The yard, the slide, then a fruit snack." } },
    { h: 17, time: "17:00", img: "paint", t: { fr: "Retour à la maison", ar: "العودة إلى البيت", en: "Home time" }, d: { fr: "Le message du jour part aux parents, et on se dit à demain.", ar: "تُرسل رسالة اليوم للأولياء، ونقول إلى الغد.", en: "The day’s message goes to parents, and we say see you tomorrow." } }
  ];
  var MENU = [
    { fr: ["Soupe de légumes", "Couscous au poulet", "Compote de pommes"], ar: ["حساء الخضر", "كسكسي بالدجاج", "مربى التفاح"], en: ["Vegetable soup", "Chicken couscous", "Apple compote"] },
    { fr: ["Chorba douce au frik", "Purée et poisson blanc", "Yaourt nature"], ar: ["شوربة فريك خفيفة", "بطاطا مهروسة وسمك أبيض", "ياغورت طبيعي"], en: ["Mild frik chorba", "Mash and white fish", "Plain yoghurt"] },
    { fr: ["Salade de carottes", "Lentilles et riz", "Orange"], ar: ["سلطة الجزر", "عدس وأرز", "برتقالة"], en: ["Carrot salad", "Lentils and rice", "Orange"] },
    { fr: ["Velouté de courgettes", "Tajine de légumes et viande hachée", "Flan au lait"], ar: ["حساء الكوسة", "طاجين الخضر واللحم المفروم", "فلان بالحليب"], en: ["Courgette soup", "Vegetable and mince tagine", "Milk custard"] },
    { fr: ["Hrira douce", "M’hadjeb aux légumes", "Banane"], ar: ["حريرة خفيفة", "محاجب بالخضر", "موزة"], en: ["Mild hrira", "Vegetable m’hadjeb", "Banana"] }
  ];
  var FEED = [{ img: "drawing", t: { fr: "Lina a dessiné sa maman à l’atelier, et elle a fini tout son couscous.", ar: "رسمت لينا أمها في الورشة، وأكلت كل الكسكسي.", en: "Lina drew her mum in the workshop, and finished all her couscous." }, time: "17:02" }, { img: "blocks", t: { fr: "Sieste de 13 h 05 à 14 h 40. Une grande tour construite avec Adam ce matin.", ar: "قيلولة من 13:05 إلى 14:40. برج كبير بناه مع آدم هذا الصباح.", en: "Nap from 13:05 to 14:40. A tall tower built with Adam this morning." }, time: "17:05" }];
  var CREDITS = [["Sabi sabrwina", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Jardin_d%27essai_du_Hamma,_Alger_,_Alg%C3%A9rie.jpg"], ["Ingvar Kjøllesdal", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Paint_on_hands.jpg"], ["Ragesoss", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Child_playing_with_unit_blocks.jpeg"], ["Ragesoss", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Two_sets_of_wooden_unit_blocks.jpeg"], ["Bobjgalindo", "CC BY 4.0", "https://commons.wikimedia.org/wiki/File:A_pile_of_alphabet_wooden_blocks.jpg"], ["Maulanifk", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Today_a_reader,_tomorrow_a_leader.jpg"], ["U.S. Department of Agriculture", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:United_States_children_eating_at_day_care.jpg"], ["Adoscam", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Playground_for_children_with_slide_and_toboggan_%C3%A0_Cotonou-B%C3%A9nin.jpg"], ["MIKI Yoshihito", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:A_toddler_explores_the_wetlands,_Japan;_August_2020_(02).jpg"], ["My daughter Teresa", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Child_drawing_age_3_crayon_on_paper.jpg"]];

  var lang = "fr", day = 0, cur = 0, ready = false, dyn = [];
  try { var s = localStorage.getItem("baraim-lang"); if (I[s]) lang = s; } catch (e) {}

  function buildTicks() {
    var g = "";
    for (var i = 0; i < 12; i++) { var a = i * 30 * Math.PI / 180, x1 = 200 + Math.sin(a) * 172, y1 = 200 - Math.cos(a) * 172, x2 = 200 + Math.sin(a) * (i % 3 ? 160 : 150), y2 = 200 - Math.cos(a) * (i % 3 ? 160 : 150); g += '<line x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '" stroke="#3A2E39" stroke-width="' + (i % 3 ? 4 : 8) + '" stroke-linecap="round"/>'; }
    $("#ticks").innerHTML = g;
  }
  function setDay(i) {
    cur = i;
    $$("#acts2 li").forEach(function (li, k) { li.classList.toggle("on", k === i); });
    $$("#clockPh img").forEach(function (im, k) { im.classList.toggle("on", k === i); });
    if (STATIC || !window.gsap) $("#hand").setAttribute("transform", "rotate(" + (DAY[i].h % 12) * 30 + " 200 200)");
  }
  function renderMenu() {
    var t = I[lang], m = MENU[day][lang], cols = ["var(--peachL)", "var(--pistaL)", "var(--sunL)"];
    $$("#days button").forEach(function (b, k) { b.setAttribute("aria-pressed", k === day); });
    $("#plate").innerHTML = m.map(function (x, k) { return '<div><i style="background:' + cols[k] + '">' + (k + 1) + '</i><span><small>' + t.st[k] + '</small><b>' + x + '</b></span></div>'; }).join("");
  }
  function render() {
    var t = I[lang];
    $("#stages").innerHTML = STAGES.map(function (x, i) {
      var d = DIM[x.img];
      return '<div class="stage"><article class="card"><span class="age" style="background:' + x.bg + '">' + x.a[lang] + '</span><h3>' + x.t[lang] + '</h3><p>' + x.d[lang] + '</p><ul>' + x.l[lang].map(function (y) { return "<li>" + y + "</li>"; }).join("") + '</ul></article><div class="blob ' + x.cls + '">' + img(x.img, d[0], d[1], "(min-width:960px) 35vw, 90vw") + '</div><span class="leafnode" aria-hidden="true">' + (i + 1) + '</span></div>';
    }).join("");
    $("#letters").innerHTML = LETTERS.map(function (l, i) { var c = COLORS[i % 4]; return '<button type="button" class="lc" aria-label="' + l[0] + " " + l[1] + ", " + l[2] + " " + (l[3][lang === "en" ? "en" : "fr"]) + '"><span class="in"><span class="f ar"><b>' + l[0] + '</b><span lang="ar">' + l[1] + '</span></span><span class="f fr" style="background:' + c + '"><b>' + l[2] + '</b><span>' + l[3][lang === "en" ? "en" : "fr"] + '</span></span></span></button>'; }).join("");
    $("#clockPh").innerHTML = DAY.map(function (x, i) { var d = DIM[x.img]; return img(x.img, d[0], d[1], "300px", i === cur ? "on" : ""); }).join("");
    $("#acts2").innerHTML = DAY.map(function (x, i) { return '<li data-s="' + i + '"><time>' + x.time + '</time><div><h3>' + x.t[lang] + '</h3><p>' + x.d[lang] + '</p></div></li>'; }).join("");
    setDay(cur);
    $("#days").setAttribute("aria-label", t.daysL);
    $("#days").innerHTML = t.days.map(function (d, k) { return '<button type="button" data-d="' + k + '">' + d + '</button>'; }).join("");
    renderMenu();
    $("#feed").innerHTML = FEED.map(function (f) { var d = DIM[f.img]; return '<article class="note"><header><span>' + t.sample + '</span><span>' + f.time + '</span></header>' + img(f.img, d[0], d[1], "420px") + '<p>' + f.t[lang] + '</p></article>'; }).join("");
    $("#sel").innerHTML = STAGES.map(function (x) { return "<option>" + x.t[lang] + ", " + x.a[lang] + "</option>"; }).join("");
    $("#credits").innerHTML = t.photos + " " + CREDITS.map(function (c) { return '<a href="' + c[2] + '" target="_blank" rel="noopener">' + c[0] + '</a> (' + c[1] + ')'; }).join(", ") + ", Wikimedia Commons.";
  }
  function setLang(l) {
    lang = l; var t = I[l];
    doc.lang = l; doc.dir = l === "ar" ? "rtl" : "ltr"; document.title = t.title;
    $$("[data-i]").forEach(function (e) { e.textContent = t[e.dataset.i]; });
    $$("[data-alt]").forEach(function (e) { e.alt = t[e.dataset.alt]; });
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.l === l); });
    $(".lang").setAttribute("aria-label", t.lang); $("#msg").textContent = "";
    try { localStorage.setItem("baraim-lang", l); } catch (e) {}
    render();
    if (ready) { bindDynamic(); ScrollTrigger.refresh(); }
  }

  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.l !== lang) setLang(b.dataset.l); }); });
  $("#letters").addEventListener("click", function (e) { var c = e.target.closest(".lc"); if (c) c.classList.toggle("flip"); });
  $("#days").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; day = +b.dataset.d; renderMenu(); if (!STATIC) gsap.from("#plate div", { x: doc.dir === "rtl" ? -30 : 30, opacity: 0, duration: .45, stagger: .07, ease: "back.out(2)" }); });
  $("#acts2").addEventListener("click", function (e) { var li = e.target.closest("li"); if (li && !matchMedia("(min-width: 961px)").matches) setDay(+li.dataset.s); });
  $("#f").addEventListener("submit", function (e) {
    e.preventDefault(); var t = I[lang], ok = this.name.value.trim() && /^0[5-7]\d{8}$/.test(this.tel.value.replace(/\s/g, ""));
    if (!ok) { $("#msg").textContent = t.err; (this.name.value.trim() ? this.tel : this.name).focus(); return; }
    $("#msg").textContent = t.demo;
  });

  buildTicks();
  setLang(lang);
  if (STATIC) { $$(".lc").forEach(function () {}); return; }

  gsap.registerPlugin(ScrollTrigger);
  var lenis = window.Lenis ? new Lenis({ lerp: 0.1 }) : null;
  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach(function (a) { a.addEventListener("click", function (e) { var id = a.getAttribute("href"); if (id.length < 2) return; var el = $(id); if (!el) return; e.preventDefault(); lenis.scrollTo(el, { offset: -80 }); }); });
  }

  /* ---------- hero: blob, bubbles that pop, a swoosh under the words ---------- */
  gsap.from("#heroBlob", { scale: .6, opacity: 0, duration: 1.2, ease: "elastic.out(1, .6)", delay: .1 });
  gsap.from(".hero h1, .hero p, .hero .acts, .hero .ages", { y: 40, opacity: 0, duration: .8, stagger: .1, ease: "back.out(1.6)", delay: .2 });
  gsap.from(".bub", { scale: 0, rotation: -12, duration: .7, stagger: .18, ease: "back.out(2.4)", delay: .8 });
  gsap.to(".bub, .dot", { y: -10, duration: 2.2, ease: "sine.inOut", yoyo: true, repeat: -1, stagger: { each: .4, from: "random" } });
  var sw = $("#swoosh"), swl = sw.getTotalLength(); gsap.set(sw, { strokeDasharray: swl, strokeDashoffset: swl });
  gsap.to(sw, { strokeDashoffset: 0, duration: 1, ease: "power2.out", delay: 1 });
  ScrollTrigger.batch("[data-up]", { start: "top 88%", once: true, onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, scale: 1, duration: .9, stagger: .1, ease: "back.out(1.4)" }); } });

  function bindDynamic() {
    dyn.forEach(function (x) { if (x.scrollTrigger) x.scrollTrigger.kill(); if (x.kill) x.kill(); }); dyn = [];
    var wide = matchMedia("(min-width: 961px)").matches;
    /* the shoot grows down the page, a leaf at each group */
    if (wide) {
      var grow = $("#grow"), svg = $("#stemSvg"), h = grow.offsetHeight, wv = 120, d = "M60 0";
      svg.setAttribute("viewBox", "0 0 " + wv + " " + h);
      for (var y = 0; y < h; y += 160) { d += " C " + (y % 320 ? 100 : 20) + " " + (y + 50) + ", " + (y % 320 ? 20 : 100) + " " + (y + 110) + ", 60 " + Math.min(h, y + 160); }
      var stem = $("#stem"); stem.setAttribute("d", d); var len = stem.getTotalLength();
      gsap.set(stem, { strokeDasharray: len, strokeDashoffset: len });
      dyn.push(gsap.to(stem, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: grow, start: "top 70%", end: "bottom 60%", scrub: true } }));
    }
    $$(".stage").forEach(function (st, i) {
      var left = (i % 2 === 0) !== (doc.dir === "rtl");
      dyn.push(gsap.from($(".card", st), { x: left ? -80 : 80, opacity: 0, rotation: left ? -3 : 3, duration: 1, ease: "back.out(1.4)", scrollTrigger: { trigger: st, start: "top 78%" } }));
      dyn.push(gsap.from($(".blob", st), { scale: .7, opacity: 0, duration: 1.1, ease: "elastic.out(1, .7)", scrollTrigger: { trigger: st, start: "top 78%" } }));
      dyn.push(gsap.from($(".leafnode", st), { scale: 0, rotation: -90, duration: .7, ease: "back.out(3)", scrollTrigger: { trigger: st, start: "top 60%" } }));
    });
    /* the letters flip in a wave, then come back */
    var cards = $$("#letters .lc");
    dyn.push(ScrollTrigger.create({ trigger: "#letters", start: "top 70%", once: true, onEnter: function () {
      cards.forEach(function (c, i) { setTimeout(function () { c.classList.add("flip"); }, i * 140); setTimeout(function () { c.classList.remove("flip"); }, 1600 + i * 140); });
    } }));
    /* the clock hand follows the day */
    if (wide) {
      var steps = DAY.length - 1, hand = $("#hand");
      gsap.set(hand, { rotation: DAY[0].h % 12 * 30, svgOrigin: "200 200" });
      var tl = gsap.timeline({ scrollTrigger: { trigger: "#journee", start: "top top", end: "+=" + (steps * 420), pin: true, scrub: .6, snap: { snapTo: 1 / steps, duration: .4 },
        onUpdate: function (st) { var i = Math.round(st.progress * steps); if (i !== cur) setDay(i); } } });
      DAY.slice(1).forEach(function (x, i) { tl.to(hand, { rotation: (x.h % 12) * 30 + (x.h >= 12 && DAY[i].h < 12 ? 0 : 0), duration: 1, ease: "power1.inOut", svgOrigin: "200 200" }); });
      dyn.push(tl);
    } else { gsap.set("#hand", { rotation: DAY[cur].h % 12 * 30, svgOrigin: "200 200" }); }
  }
  bindDynamic();
  ready = true;
  var rz; window.addEventListener("resize", function () { clearTimeout(rz); rz = setTimeout(function () { bindDynamic(); ScrollTrigger.refresh(); }, 300); });
})();
