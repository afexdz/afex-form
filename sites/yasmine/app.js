/* Yasmine Montessori : contenu FR / AR / EN, outils et animations (GSAP + ScrollTrigger + Flip + Lenis, en local) */
(function () {
  var doc = document.documentElement;
  var STATIC = doc.classList.contains("static") || !window.gsap || !window.ScrollTrigger;
  if (STATIC) doc.classList.add("static");
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  var P = { lacage: [853, "Haseeb Modi"], etagere: [853, "Carrie Allen"], encastrement: [853, "Compagnons"], cuisine: [853, "Camila Mofsovich"], boulier: [1920, "luis arias"], pierres: [853, "Compagnons"], tablier: [1920, "Jonathan Borba"], classe: [853, "Camila Mofsovich"], coquillages: [1707, "Reem Alja’ad"], escargot: [1917, "Paige Cody"], cactus: [853, "Ján Čorba"], elephants: [915, "Geoff Oliver"], panier: [853, "Jason Leung"], chiffres: [829, "Susan Holt Simpson"], livres: [853, "Jason Leung"], formes: [853, "Angie Dutton"], arrosoir: [1920, "Jonathan Borba"], planter: [853, "Daisy D"], mains: [853, "Ana Jovanovski"], pelle: [853, "Christopher Luther"], pelle2: [853, "Christopher Luther"], baie: [818, "Brahim Abderrahman"], santacruz: [853, "Islam Fersaoui"], arcades: [1707, "abderrahmane chablaoui"], lecture: [851, "Michał Parzuchowski"], album: [853, "Ben Mullins"], plateau: [854, "Paige Cody"], arrosoir2: [854, "Filip Urban"], tasse: [1919, "krakenimages"] };
  function img(n, sizes) { return '<img src="assets/img/' + n + '-640.webp" srcset="assets/img/' + n + '-640.webp 640w, assets/img/' + n + '-1280.webp 1280w" sizes="' + (sizes || "33vw") + '" width="1280" height="' + P[n][0] + '" alt="" loading="lazy" decoding="async">'; }
  function da(n) { return "\u2066" + n.toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " ") + "\u2069"; }
  var CHECK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg>';
  var ARROW = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>';

  var I = {
    fr: { demo0: "Site de démonstration : école fictive, tarifs et places donnés à titre d’exemple.", demo1: "Voir les autres modèles",
      brand: "Yasmine", brandS: "École Montessori, Oran", n1: "Ambiances", n2: "Le matériel", n3: "Tarifs", n4: "Nous trouver", n5: "Questions", cta0: "Portes ouvertes",
      kick: "Maison des enfants, de 18 mois à 6 ans", h1a: "Aide-moi", h1b: "à faire seul.", lede: "Une école Montessori à Oran : des ambiances préparées, du vrai matériel en bois, trois langues, et des éducatrices formées à la pédagogie.",
      cta1: "Trouver l’ambiance de mon enfant", cta2: "Voir les tarifs", tkT: "Portes ouvertes", tkGo: "Réserver ma place", cdD: "jours", cdH: "heures", cdM: "min", cdS: "sec",
      fa1: "enfants au plus par ambiance", fa2: "de travail libre chaque matin", fa3: "langues : arabe, français, anglais", fa4: "avec patio et potager",
      fiK: "En 10 secondes", fiH: "Quelle ambiance pour votre enfant ?", fiP: "Indiquez sa date de naissance : on vous dit dans quelle ambiance il entre, quand, à quel prix et s’il reste de la place.", fiL: "Date de naissance de l’enfant",
      months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
      rAge: "{y} an(s) et {m} mois aujourd’hui", rNow: "Entrée possible dès maintenant", rFrom: "Entrée possible à partir de {d}", rPlaces: "{n} places libres cette année", rWait: "Liste d’attente ouverte", rFromP: "à partir de", perM: "DA / mois",
      rYoung: "Encore un peu tôt", rYoungP: "Notre première ambiance accueille dès 18 mois. Inscrivez-vous sur la liste : on vous rappelle trois mois avant.", rOld: "Prêt pour l’école", rOldP: "À 6 ans, votre enfant entre en première année. Notre programme s’arrête à la fin de la Casa.", rGo: "Réserver une visite",
      amK: "Les ambiances", amH: "Trois espaces, préparés pour chaque âge", spEff: "Effectif", spAd: "Adultes", spHrs: "Horaires", spLg: "Langues", amGo: "Voir les tarifs de cette ambiance",
      maK: "Sur nos étagères", maH: "Le matériel, pièce par pièce", maP: "Chaque objet a un but précis. Filtrez par domaine pour voir ce que votre enfant manipule.", all: "Tout",
      doms: { pratique: "Vie pratique", sensoriel: "Sensoriel", langage: "Langage", maths: "Mathématiques", culture: "Culture" }, from: "Dès",
      prK: "Tarifs 2026-2027", prH: "Des formules simples, sans frais cachés", per: ["Mensuel", "Trimestriel"], save: "−5 %", hot: "Le plus choisi", choose: "Choisir et visiter", trim: "soit {n} DA par trimestre",
      prN: "Tarifs de démonstration. Inscription annuelle : 15 000 DA, matériel et assurance compris. Repas préparés sur place inclus dans la journée.",
      gaK: "Vie pratique", gaH: "Le potager, la cuisine, l’arrosoir", gaP: "Les gestes du quotidien sont des leçons à part entière. Chez nous, les enfants plantent, arrosent, versent et rangent eux-mêmes.",
      gl: [["Le potager", "Tomates, menthe et fèves, semées et récoltées par les enfants."], ["La cuisine", "Le mercredi, les grands préparent le goûter de toute l’école."], ["Prendre soin", "Arroser les plantes, nourrir l’escargot de la classe, ranger son plateau."]],
      orK: "Oran", orH: "Une école à l’ombre de Santa Cruz", orP: "Une maison oranaise rénovée, entre le front de mer et le Murdjadjo. Les grands sortent une fois par mois : marché, port, jardin.", w1: "La baie, depuis le Murdjadjo", w2: "Les arcades de Santa Cruz",
      adK1: "Quartier", ad1: "Centre-ville, Oran (adresse fictive)", adK2: "Horaires", ad2: "Dimanche au jeudi, 7 h 30 à 17 h 30", adK3: "Accès", ad3: "Tramway et parking devant l’école", adK4: "Visites", ad4: "Sur rendez-vous, et un samedi par mois",
      odK: "Portes ouvertes", odH: "Venez voir une ambiance en vrai", odP: "Une heure pour visiter, poser vos questions aux éducatrices et laisser votre enfant toucher le matériel. Places limitées par créneau.",
      odDate: "Samedi {d} : choisissez un créneau", left: "{n} places restantes", full: "Complet", ad: "Adultes", ch: "Enfants", l1: "Votre nom", l2: "Téléphone", send: "Réserver mes places",
      err: "Choisissez un créneau, indiquez votre nom et un numéro valide.", errCap: "Il ne reste pas assez de places sur ce créneau.", demo: "Démo AFEX Digital : aucune place n’a été réservée, ce formulaire n’est pas encore connecté.",
      fqK: "Questions", fqH: "Ce que les parents nous demandent", foA: "École Montessori fictive à Oran, de 18 mois à 6 ans.", foC: "Contact", foCV: "WhatsApp et téléphone : numéro de démonstration",
      foot: "© 2026 Yasmine Montessori, école fictive.", by: "Site réalisé par", photos: "Photos : Unsplash,", wa: "Une question ?", waDemo: "Démo AFEX Digital : le numéro WhatsApp de l’école n’est pas encore connecté.", lang: "Langue",
      heroAlt: "Un enfant devant une étagère Montessori, un plateau dans les mains", tablierAlt: "Une petite fille en tablier dans la cuisine de l’école", scAlt: "La chapelle de Santa Cruz au-dessus d’Oran", baieAlt: "La baie d’Oran vue du Murdjadjo", arcAlt: "Les arcades de Santa Cruz", classeAlt: "Une salle avec petites tables et coin cuisine", title: "Yasmine Montessori, école Montessori à Oran", loc: "fr-FR" },
    ar: { demo0: "موقع تجريبي: مدرسة وهمية، الأسعار والأماكن للتوضيح فقط.", demo1: "شاهد النماذج الأخرى",
      brand: "ياسمين", brandS: "مدرسة مونتيسوري، وهران", n1: "الفضاءات", n2: "الأدوات", n3: "الأسعار", n4: "موقعنا", n5: "أسئلة", cta0: "الأبواب المفتوحة",
      kick: "بيت الأطفال، من 18 شهرًا إلى 6 سنوات", h1a: "ساعدني", h1b: "لأفعلها بنفسي.", lede: "مدرسة مونتيسوري في وهران: فضاءات مهيّأة، أدوات خشبية حقيقية، ثلاث لغات، ومربّيات مكوَّنات في هذه البيداغوجيا.",
      cta1: "اعرف فضاء طفلك", cta2: "شاهد الأسعار", tkT: "الأبواب المفتوحة", tkGo: "احجز مكانك", cdD: "أيام", cdH: "ساعات", cdM: "دقائق", cdS: "ثوانٍ",
      fa1: "طفلًا على الأكثر في كل فضاء", fa2: "من العمل الحر كل صباح", fa3: "لغات: العربية، الفرنسية، الإنجليزية", fa4: "مع فناء وبستان",
      fiK: "في 10 ثوانٍ", fiH: "أي فضاء يناسب طفلك؟", fiP: "أدخل تاريخ ميلاده: نخبرك بالفضاء الذي يدخله، ومتى، وبأي سعر، وهل بقيت أماكن.", fiL: "تاريخ ميلاد الطفل",
      months: ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
      rAge: "{y} سنة و{m} شهر اليوم", rNow: "الدخول ممكن من الآن", rFrom: "الدخول ممكن ابتداءً من {d}", rPlaces: "{n} أماكن شاغرة هذه السنة", rWait: "قائمة الانتظار مفتوحة", rFromP: "ابتداءً من", perM: "دج / الشهر",
      rYoung: "ما زال الوقت مبكرًا", rYoungP: "يستقبل فضاؤنا الأول الأطفال من 18 شهرًا. سجّل في القائمة ونتصل بك قبل ثلاثة أشهر.", rOld: "جاهز للمدرسة", rOldP: "في سن 6 سنوات يدخل طفلك السنة الأولى. برنامجنا ينتهي مع نهاية بيت الأطفال.", rGo: "احجز زيارة",
      amK: "الفضاءات", amH: "ثلاثة فضاءات مهيّأة لكل سن", spEff: "العدد", spAd: "الكبار", spHrs: "التوقيت", spLg: "اللغات", amGo: "شاهد أسعار هذا الفضاء",
      maK: "على رفوفنا", maH: "الأدوات، قطعة قطعة", maP: "لكل أداة هدف محدّد. صنّف حسب المجال لترى ما يستعمله طفلك.", all: "الكل",
      doms: { pratique: "الحياة العملية", sensoriel: "الحسي", langage: "اللغة", maths: "الرياضيات", culture: "الثقافة" }, from: "من",
      prK: "أسعار 2026-2027", prH: "صيغ بسيطة، بلا مصاريف خفية", per: ["شهري", "فصلي"], save: "−5 %", hot: "الأكثر اختيارًا", choose: "اختر وزرنا", trim: "أي {n} دج للفصل",
      prN: "أسعار تجريبية. التسجيل السنوي: 15 000 دج، يشمل الأدوات والتأمين. الوجبات المطهوة في عين المكان مشمولة في اليوم الكامل.",
      gaK: "الحياة العملية", gaH: "البستان، المطبخ، المرشّة", gaP: "حركات الحياة اليومية دروس قائمة بذاتها. عندنا، يزرع الأطفال ويسقون ويصبّون ويرتّبون بأنفسهم.",
      gl: [["البستان", "طماطم ونعناع وفول، يزرعها الأطفال ويجنونها."], ["المطبخ", "يوم الأربعاء يحضّر الكبار لمجة المدرسة كلها."], ["العناية", "سقي النباتات، إطعام حلزون القسم، وترتيب الصينية."]],
      orK: "وهران", orH: "مدرسة في ظل سانتا كروز", orP: "بيت وهراني مُرمَّم بين الواجهة البحرية والمرجاجو. يخرج الكبار مرة في الشهر: السوق، الميناء، الحديقة.", w1: "الخليج من المرجاجو", w2: "أقواس سانتا كروز",
      adK1: "الحي", ad1: "وسط المدينة، وهران (عنوان وهمي)", adK2: "التوقيت", ad2: "من الأحد إلى الخميس، من 7:30 إلى 17:30", adK3: "الوصول", ad3: "الترامواي وموقف أمام المدرسة", adK4: "الزيارات", ad4: "بموعد، وسبت في كل شهر",
      odK: "الأبواب المفتوحة", odH: "تعالوا لرؤية فضاء على الطبيعة", odP: "ساعة للزيارة وطرح أسئلتكم على المربّيات وترك طفلكم يلمس الأدوات. أماكن محدودة في كل موعد.",
      odDate: "السبت {d}: اختر موعدًا", left: "{n} أماكن متبقية", full: "ممتلئ", ad: "كبار", ch: "أطفال", l1: "اسمك", l2: "الهاتف", send: "احجز أماكني",
      err: "اختر موعدًا وأدخل اسمك ورقمًا صحيحًا.", errCap: "لا تكفي الأماكن المتبقية في هذا الموعد.", demo: "عرض AFEX Digital: لم يُحجز أي مكان، هذا النموذج غير متصل بعد.",
      fqK: "أسئلة", fqH: "ما يسألنا عنه الأولياء", foA: "مدرسة مونتيسوري وهمية في وهران، من 18 شهرًا إلى 6 سنوات.", foC: "الاتصال", foCV: "واتساب والهاتف: رقم تجريبي",
      foot: "© 2026 ياسمين مونتيسوري، مدرسة وهمية.", by: "موقع من إنجاز", photos: "الصور: Unsplash،", wa: "سؤال؟", waDemo: "عرض AFEX Digital: رقم واتساب المدرسة غير متصل بعد.", lang: "اللغة",
      heroAlt: "طفل أمام رفّ مونتيسوري يحمل صينية", tablierAlt: "طفلة بمئزر في مطبخ المدرسة", scAlt: "كنيسة سانتا كروز فوق وهران", baieAlt: "خليج وهران من المرجاجو", arcAlt: "أقواس سانتا كروز", classeAlt: "قاعة بطاولات صغيرة وركن مطبخ", title: "ياسمين مونتيسوري، مدرسة مونتيسوري في وهران", loc: "ar-DZ" },
    en: { demo0: "Demo website: a fictional school, prices and places are examples.", demo1: "See the other templates",
      brand: "Yasmine", brandS: "Montessori school, Oran", n1: "Classrooms", n2: "Materials", n3: "Fees", n4: "Find us", n5: "Questions", cta0: "Open day",
      kick: "Children’s house, 18 months to 6 years", h1a: "Help me", h1b: "to do it myself.", lede: "A Montessori school in Oran: prepared classrooms, real wooden materials, three languages, and guides trained in the method.",
      cta1: "Find my child’s classroom", cta2: "See the fees", tkT: "Open day", tkGo: "Book my place", cdD: "days", cdH: "hours", cdM: "min", cdS: "sec",
      fa1: "children at most per classroom", fa2: "of free work every morning", fa3: "languages: Arabic, French, English", fa4: "with a patio and vegetable garden",
      fiK: "In 10 seconds", fiH: "Which classroom for your child?", fiP: "Enter their date of birth: we tell you which classroom they join, when, the price and whether places are left.", fiL: "Child’s date of birth",
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      rAge: "{y} year(s) and {m} month(s) today", rNow: "Can start now", rFrom: "Can start from {d}", rPlaces: "{n} places free this year", rWait: "Waiting list open", rFromP: "from", perM: "DA / month",
      rYoung: "A little early", rYoungP: "Our first classroom takes children from 18 months. Join the list and we call you three months before.", rOld: "Ready for school", rOldP: "At 6, your child starts first grade. Our programme ends with the Casa.", rGo: "Book a visit",
      amK: "The classrooms", amH: "Three spaces, prepared for each age", spEff: "Group size", spAd: "Adults", spHrs: "Hours", spLg: "Languages", amGo: "See this classroom’s fees",
      maK: "On our shelves", maH: "The materials, piece by piece", maP: "Every object has a precise purpose. Filter by area to see what your child works with.", all: "All",
      doms: { pratique: "Practical life", sensoriel: "Sensorial", langage: "Language", maths: "Maths", culture: "Culture" }, from: "From",
      prK: "Fees 2026-2027", prH: "Simple plans, no hidden costs", per: ["Monthly", "Termly"], save: "−5%", hot: "Most chosen", choose: "Choose and visit", trim: "that is {n} DA per term",
      prN: "Demo prices. Yearly registration: 15,000 DA, materials and insurance included. Meals cooked on site are included in the full day.",
      gaK: "Practical life", gaH: "The garden, the kitchen, the watering can", gaP: "Everyday tasks are lessons in their own right. Here, children plant, water, pour and tidy up themselves.",
      gl: [["The vegetable patch", "Tomatoes, mint and broad beans, sown and picked by the children."], ["The kitchen", "On Wednesdays the oldest make the snack for the whole school."], ["Taking care", "Watering plants, feeding the class snail, putting their tray away."]],
      orK: "Oran", orH: "A school in the shadow of Santa Cruz", orP: "A restored Oran house between the seafront and the Murdjadjo. The oldest go out once a month: market, harbour, gardens.", w1: "The bay from the Murdjadjo", w2: "The arcades of Santa Cruz",
      adK1: "Area", ad1: "City centre, Oran (made-up address)", adK2: "Hours", ad2: "Sunday to Thursday, 7:30 to 17:30", adK3: "Getting here", ad3: "Tram and parking outside", adK4: "Visits", ad4: "By appointment, and one Saturday a month",
      odK: "Open day", odH: "Come and see a classroom for real", odP: "An hour to look around, ask the guides your questions and let your child handle the materials. Limited places per slot.",
      odDate: "Saturday {d}: pick a slot", left: "{n} places left", full: "Full", ad: "Adults", ch: "Children", l1: "Your name", l2: "Phone", send: "Book my places",
      err: "Pick a slot, enter your name and a valid number.", errCap: "There are not enough places left in this slot.", demo: "AFEX Digital demo: no place was booked, this form is not connected yet.",
      fqK: "Questions", fqH: "What parents ask us", foA: "A fictional Montessori school in Oran, 18 months to 6 years.", foC: "Contact", foCV: "WhatsApp and phone: demo number",
      foot: "© 2026 Yasmine Montessori, a fictional school.", by: "Website by", photos: "Photos: Unsplash,", wa: "A question?", waDemo: "AFEX Digital demo: the school’s WhatsApp number is not connected yet.", lang: "Language",
      heroAlt: "A child at a Montessori shelf holding a tray", tablierAlt: "A little girl in an apron in the school kitchen", scAlt: "Santa Cruz chapel above Oran", baieAlt: "The bay of Oran seen from the Murdjadjo", arcAlt: "The arcades of Santa Cruz", classeAlt: "A room with small tables and a play kitchen", title: "Yasmine Montessori, Montessori school in Oran", loc: "en-GB" }
  };

  var AMB = [
    { id: "nido", imgs: ["tasse", "panier", "encastrement"], age: { fr: "18 mois à 3 ans", ar: "من 18 شهرًا إلى 3 سنوات", en: "18 months to 3 years" }, t: { fr: "Le Nido", ar: "النيدو", en: "The Nido" },
      d: { fr: "Un espace calme pour marcher, manipuler et parler. Tout est à hauteur d’enfant : le miroir, l’étagère, le petit évier pour se laver les mains seul.", ar: "فضاء هادئ للمشي والتعامل مع الأشياء والكلام. كل شيء على مستوى الطفل: المرآة، الرف، والمغسلة الصغيرة ليغسل يديه بنفسه.", en: "A calm space to walk, handle things and talk. Everything is at child height: the mirror, the shelf, the little sink for washing hands alone." },
      sp: [{ fr: "8 enfants", ar: "8 أطفال", en: "8 children" }, { fr: "2 éducatrices", ar: "مربّيتان", en: "2 guides" }, { fr: "7 h 30 à 17 h 30", ar: "من 7:30 إلى 17:30", en: "7:30 to 17:30" }, { fr: "Arabe et français", ar: "العربية والفرنسية", en: "Arabic and French" }] },
    { id: "casa", imgs: ["plateau", "boulier", "lecture"], age: { fr: "3 à 6 ans", ar: "من 3 إلى 6 سنوات", en: "3 to 6 years" }, t: { fr: "La Casa", ar: "بيت الأطفال", en: "The Casa" },
      d: { fr: "La maison des enfants : trois âges mélangés, cinq domaines, et un long cycle de travail le matin. Les grands montrent aux petits ce qu’ils ont appris.", ar: "بيت الأطفال: ثلاث أعمار مختلطة، خمسة مجالات، ودورة عمل طويلة صباحًا. يُري الكبار الصغار ما تعلّموه.", en: "The children’s house: three mixed ages, five areas and a long morning work cycle. The older ones show the younger what they have learned." },
      sp: [{ fr: "12 enfants", ar: "12 طفلًا", en: "12 children" }, { fr: "2 éducatrices", ar: "مربّيتان", en: "2 guides" }, { fr: "7 h 30 à 17 h 30", ar: "من 7:30 إلى 17:30", en: "7:30 to 17:30" }, { fr: "Arabe, français, anglais", ar: "العربية، الفرنسية، الإنجليزية", en: "Arabic, French, English" }] },
    { id: "atelier", imgs: ["arrosoir", "pelle", "mains"], age: { fr: "Tous les âges", ar: "كل الأعمار", en: "All ages" }, t: { fr: "Atelier et jardin", ar: "الورشة والحديقة", en: "Workshop and garden" },
      d: { fr: "Le patio, le potager et la cuisine : là où l’on plante, cuisine et répare. Chaque groupe y passe au moins une heure par jour.", ar: "الفناء والبستان والمطبخ: هنا نزرع ونطبخ ونصلح. يقضي كل فوج ساعة على الأقل يوميًا.", en: "The patio, the vegetable patch and the kitchen: where we plant, cook and fix things. Each group spends at least an hour a day there." },
      sp: [{ fr: "6 enfants à la fois", ar: "6 أطفال في كل مرة", en: "6 children at a time" }, { fr: "1 éducatrice", ar: "مربّية واحدة", en: "1 guide" }, { fr: "Chaque après-midi", ar: "كل مساء", en: "Every afternoon" }, { fr: "Arabe et français", ar: "العربية والفرنسية", en: "Arabic and French" }] }
  ];
  var ITEMS = [
    ["lacage", "pratique", { fr: "Planche de laçage", ar: "لوحة الربط", en: "Lacing board" }, { fr: "Prépare les doigts à nouer, boutonner, écrire.", ar: "تهيّئ الأصابع للعقد والتزرير والكتابة.", en: "Gets fingers ready to tie, button and write." }, "2+"],
    ["encastrement", "sensoriel", { fr: "Encastrements", ar: "ألواح التركيب", en: "Inset puzzles" }, { fr: "Reconnaître les formes et les replacer.", ar: "التعرّف على الأشكال وإعادتها إلى مكانها.", en: "Recognising shapes and fitting them back." }, "18m+"],
    ["boulier", "maths", { fr: "Boulier", ar: "المعداد", en: "Abacus" }, { fr: "Compter, ajouter, voir les dizaines.", ar: "العدّ والجمع ورؤية العشرات.", en: "Counting, adding, seeing tens." }, "3+"],
    ["tablier", "pratique", { fr: "Cuisine des enfants", ar: "مطبخ الأطفال", en: "Children’s kitchen" }, { fr: "Éplucher, verser, servir le goûter.", ar: "التقشير والصبّ وتقديم اللمجة.", en: "Peeling, pouring, serving the snack." }, "3+"],
    ["formes", "sensoriel", { fr: "Formes et couleurs", ar: "الأشكال والألوان", en: "Shapes and colours" }, { fr: "Trier, empiler, comparer.", ar: "الفرز والتكديس والمقارنة.", en: "Sorting, stacking, comparing." }, "18m+"],
    ["livres", "langage", { fr: "Bibliothèque de classe", ar: "مكتبة القسم", en: "Class library" }, { fr: "Albums en arabe, français et anglais.", ar: "قصص بالعربية والفرنسية والإنجليزية.", en: "Picture books in Arabic, French and English." }, "18m+"],
    ["chiffres", "maths", { fr: "Cubes de chiffres", ar: "مكعبات الأرقام", en: "Number blocks" }, { fr: "Associer le chiffre à la quantité.", ar: "ربط الرقم بالكمية.", en: "Matching numeral and quantity." }, "3+"],
    ["coquillages", "culture", { fr: "Plateau de la mer", ar: "صينية البحر", en: "Sea tray" }, { fr: "Coquillages et pierres ramassés à Aïn El Turck.", ar: "أصداف وحجارة من عين الترك.", en: "Shells and stones from Aïn El Turck." }, "3+"],
    ["cactus", "sensoriel", { fr: "Cactus d’équilibre", ar: "صبّار التوازن", en: "Balancing cactus" }, { fr: "Concentration et précision du geste.", ar: "التركيز ودقة الحركة.", en: "Focus and steady hands." }, "3+"],
    ["album", "langage", { fr: "Lecture à deux", ar: "القراءة معًا", en: "Reading together" }, { fr: "Les grands lisent aux petits.", ar: "الكبار يقرؤون للصغار.", en: "The older read to the younger." }, "4+"],
    ["elephants", "culture", { fr: "Animaux d’Afrique", ar: "حيوانات إفريقيا", en: "African animals" }, { fr: "Nommer, classer, situer sur la carte.", ar: "التسمية والتصنيف والتحديد على الخريطة.", en: "Naming, sorting, finding on the map." }, "3+"],
    ["panier", "sensoriel", { fr: "Panier de blocs", ar: "سلة المكعبات", en: "Block basket" }, { fr: "Construire, ranger, recommencer.", ar: "البناء والترتيب والبدء من جديد.", en: "Build, tidy, start again." }, "18m+"],
    ["pierres", "langage", { fr: "Dessin libre", ar: "الرسم الحر", en: "Free drawing" }, { fr: "Tenir le crayon, raconter son dessin.", ar: "إمساك القلم وحكي الرسم.", en: "Holding the pencil, telling the story." }, "2+"],
    ["escargot", "culture", { fr: "Coin nature", ar: "ركن الطبيعة", en: "Nature corner" }, { fr: "Observer, nourrir, dessiner ce qu’on voit.", ar: "الملاحظة والإطعام ورسم ما نرى.", en: "Watch, feed, draw what you see." }, "3+"],
    ["etagere", "pratique", { fr: "L’étagère du Nido", ar: "رف النيدو", en: "The Nido shelf" }, { fr: "Un objet par case, à portée de main.", ar: "شيء واحد في كل خانة، في متناول اليد.", en: "One object per cubby, within reach." }, "18m+"],
    ["cuisine", "pratique", { fr: "Le coin maison", ar: "ركن البيت", en: "The home corner" }, { fr: "Mettre la table, laver, ranger.", ar: "وضع المائدة والغسل والترتيب.", en: "Setting the table, washing up, tidying." }, "2+"]
  ];
  var PLANS = [
    { t: { fr: "Matinée", ar: "الصباح", en: "Mornings" }, h: { fr: "7 h 30 à 12 h 30", ar: "من 7:30 إلى 12:30", en: "7:30 to 12:30" }, p: [28000, 25000],
      f: { fr: ["Cycle de travail du matin", "Collation de 10 h", "Carnet d’observation mensuel"], ar: ["دورة العمل الصباحية", "لمجة الساعة 10", "دفتر ملاحظة شهري"], en: ["Morning work cycle", "10:00 snack", "Monthly observation notebook"] } },
    { hot: true, t: { fr: "Journée", ar: "اليوم الكامل", en: "Full day" }, h: { fr: "7 h 30 à 17 h 30", ar: "من 7:30 إلى 17:30", en: "7:30 to 17:30" }, p: [38000, 34000],
      f: { fr: ["Tout de la matinée", "Déjeuner cuisiné sur place", "Sieste ou temps calme", "Atelier jardin l’après-midi"], ar: ["كل ما في الصباح", "غداء مطهو في عين المكان", "قيلولة أو وقت هادئ", "ورشة الحديقة مساءً"], en: ["Everything in Mornings", "Lunch cooked on site", "Nap or quiet time", "Garden workshop in the afternoon"] } },
    { t: { fr: "Journée plus", ar: "اليوم الكامل بلس", en: "Full day plus" }, h: { fr: "7 h 30 à 17 h 30", ar: "من 7:30 إلى 17:30", en: "7:30 to 17:30" }, p: [42000, 39000],
      f: { fr: ["Tout de la journée", "Anglais en petit groupe, 3 fois par semaine", "Sortie mensuelle dans Oran", "Rendez-vous parents chaque trimestre"], ar: ["كل ما في اليوم الكامل", "الإنجليزية في فوج صغير، 3 مرات أسبوعيًا", "خرجة شهرية في وهران", "لقاء مع الأولياء كل فصل"], en: ["Everything in Full day", "English in small groups, 3 times a week", "Monthly outing in Oran", "Parent meeting every term"] } }
  ];
  var FREE = [2, 3];
  var SLOTS = [["10:00", 12, 9], ["11:00", 12, 12], ["12:00", 12, 5]];
  var FAQ = [
    [{ fr: "C’est quoi, concrètement, une ambiance Montessori ?", ar: "ما هو فضاء مونتيسوري بالتحديد؟", en: "What is a Montessori classroom, really?" }, { fr: "Une classe où tout est à la taille de l’enfant et rangé sur des étagères ouvertes. Il choisit son activité, travaille aussi longtemps qu’il veut, puis la range. L’éducatrice observe et présente du nouveau matériel au bon moment.", ar: "قسم كل ما فيه على مقاس الطفل ومرتّب على رفوف مفتوحة. يختار نشاطه ويعمل عليه قدر ما يشاء ثم يرتّبه. تلاحظ المربّية وتقدّم أداة جديدة في الوقت المناسب.", en: "A room where everything is child-sized and kept on open shelves. The child picks an activity, works as long as they like, then puts it away. The guide observes and introduces new material at the right moment." }],
    [{ fr: "Mon enfant va-t-il apprendre à lire et compter ?", ar: "هل سيتعلّم طفلي القراءة والحساب؟", en: "Will my child learn to read and count?" }, { fr: "Oui, à son rythme. Beaucoup d’enfants de la Casa lisent des mots simples en arabe et en français avant 6 ans, et comptent jusqu’à mille avec les perles.", ar: "نعم، على إيقاعه. كثير من أطفال بيت الأطفال يقرؤون كلمات بسيطة بالعربية والفرنسية قبل 6 سنوات، ويعدّون حتى الألف باللآلئ.", en: "Yes, at their pace. Many Casa children read simple words in Arabic and French before 6, and count to a thousand with the beads." }],
    [{ fr: "Et s’il ne fait que la même activité ?", ar: "وإذا كرّر النشاط نفسه دائمًا؟", en: "What if they only do the same activity?" }, { fr: "La répétition fait partie de l’apprentissage. Quand l’enfant maîtrise, l’éducatrice lui présente l’étape suivante. Le carnet d’observation vous montre ce progrès chaque mois.", ar: "التكرار جزء من التعلّم. عندما يتقن الطفل، تقدّم له المربّية الخطوة التالية. يُريكم دفتر الملاحظة هذا التقدّم كل شهر.", en: "Repetition is part of learning. Once the child masters it, the guide shows the next step. The observation notebook shows you that progress every month." }],
    [{ fr: "Il ne parle qu’arabe à la maison, est-ce un problème ?", ar: "لا يتكلّم إلا العربية في البيت، هل هذا مشكل؟", en: "They only speak Arabic at home, is that a problem?" }, { fr: "Pas du tout. Chaque ambiance a une éducatrice arabophone et une francophone. Les enfants passent naturellement d’une langue à l’autre en quelques mois.", ar: "إطلاقًا. في كل فضاء مربّية تتكلّم العربية وأخرى الفرنسية. ينتقل الأطفال طبيعيًا من لغة إلى أخرى في بضعة أشهر.", en: "Not at all. Each classroom has one Arabic-speaking and one French-speaking guide. Children switch naturally within a few months." }],
    [{ fr: "Faut-il être propre pour entrer à la Casa ?", ar: "هل يجب أن يكون نظيفًا لدخول بيت الأطفال؟", en: "Do they need to be potty trained for the Casa?" }, { fr: "C’est préférable, mais on accompagne la fin de l’apprentissage avec vous. Au Nido, les couches sont acceptées.", ar: "يُفضَّل ذلك، لكننا نرافق نهاية التعلّم معكم. في النيدو، الحفاظات مقبولة.", en: "Ideally, but we help finish the process with you. Nappies are fine in the Nido." }],
    [{ fr: "Comment se passe l’inscription ?", ar: "كيف يتم التسجيل؟", en: "How does enrolment work?" }, { fr: "Une visite, un entretien avec la directrice, puis deux semaines d’adaptation. L’inscription annuelle est de 15 000 DA.", ar: "زيارة، ثم مقابلة مع المديرة، ثم أسبوعان للتكيّف. التسجيل السنوي 15 000 دج.", en: "A visit, a talk with the head, then two settling-in weeks. Yearly registration is 15,000 DA." }]
  ];
  var GM = ["arrosoir", "planter", "mains", "pelle2", "arrosoir2"];

  var lang = "fr", amb = 1, dom = "all", ambP = 1, per = 0, slot = -1, na = 1, nc = 1, ready = false, dyn = [], prices = [0, 0, 0];
  try { var sv = localStorage.getItem("yasmine-lang"); if (I[sv]) lang = sv; } catch (e) {}
  var now = new Date();
  var OD = (function () { var d = new Date(now); d.setHours(10, 0, 0, 0); d.setDate(d.getDate() + ((6 - d.getDay() + 7) % 7) + 7); return d; })();
  function fmt(d, o) { try { return new Intl.DateTimeFormat(I[lang].loc, o).format(d); } catch (e) { return d.toDateString(); } }
  function toast(t) { var el = $("#toast"); el.textContent = t; el.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(function () { el.classList.remove("on"); }, 4200); }

  function tick() {
    var ms = Math.max(0, OD - new Date()), v = [Math.floor(ms / 864e5), Math.floor(ms / 36e5) % 24, Math.floor(ms / 6e4) % 60, Math.floor(ms / 1e3) % 60];
    $$("#cd b").forEach(function (b, i) { var s = (v[i] < 10 ? "0" : "") + v[i]; if (b.textContent !== s) b.textContent = s; });
  }
  function renderFinder() {
    var t = I[lang], bm = $("#bm"), by = $("#by"), m0 = bm.value ? +bm.value : 2, y0 = by.value ? +by.value : now.getFullYear() - 3;
    bm.innerHTML = t.months.map(function (m, i) { return '<option value="' + i + '"' + (i === m0 ? " selected" : "") + ">" + m + "</option>"; }).join("");
    var ys = ""; for (var y = now.getFullYear(); y >= now.getFullYear() - 7; y--) ys += '<option value="' + y + '"' + (y === y0 ? " selected" : "") + ">" + y + "</option>";
    by.innerHTML = ys;
    findRes(false);
  }
  function findRes(anim) {
    var t = I[lang], m = +$("#bm").value, y = +$("#by").value;
    var months = (now.getFullYear() - y) * 12 + (now.getMonth() - m), a, html;
    if (months < 15 || months >= 72) {
      var young = months < 15;
      html = '<div class="ph">' + img(young ? "etagere" : "lecture", "150px") + '</div><div><small>' + (months < 0 ? "" : t.rAge.replace("{y}", Math.floor(Math.max(0, months) / 12)).replace("{m}", Math.max(0, months) % 12)) + "</small><h3>" + (young ? t.rYoung : t.rOld) + "</h3><p>" + (young ? t.rYoungP : t.rOldP) + '</p><a class="btn dark" href="#portes" style="margin-top:16px">' + t.rGo + ARROW + "</a></div>";
    } else {
      a = months < 36 ? 0 : 1;
      var start = months < 18 ? new Date(y, m + 18, 1) : null, A = AMB[a];
      html = '<div class="ph">' + img(A.imgs[0], "150px") + "</div><div><small>" + t.rAge.replace("{y}", Math.floor(months / 12)).replace("{m}", months % 12) + "</small><h3>" + A.t[lang] + "</h3><ul><li>" + A.age[lang] + "</li><li>" + (start ? t.rFrom.replace("{d}", fmt(start, { month: "long", year: "numeric" })) : t.rNow) + "</li><li>" + (FREE[a] ? t.rPlaces.replace("{n}", FREE[a]) : t.rWait) + '</li></ul><p class="p"><small>' + t.rFromP + "</small> " + da(PLANS[0].p[a]) + " <small>" + t.perM + "</small></p></div>";
      ambP = a;
    }
    var r = $("#res"); r.innerHTML = html;
    if (anim && !STATIC) { gsap.fromTo("#res .ph", { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: .7, ease: "expo.out" }); gsap.from("#res > div:last-child > *", { y: 16, opacity: 0, duration: .5, stagger: .05, ease: "power3.out" }); }
  }
  function renderTabs() {
    $("#tabs").innerHTML = AMB.map(function (a, i) { return '<button type="button" role="tab" id="tab' + i + '" aria-selected="' + (i === amb) + '" aria-controls="amb" tabindex="' + (i === amb ? 0 : -1) + '">' + a.t[lang] + "</button>"; }).join("");
    renderAmb(false);
  }
  function renderAmb(anim) {
    var t = I[lang], a = AMB[amb], lb = [t.spEff, t.spAd, t.spHrs, t.spLg];
    $("#amb").setAttribute("aria-labelledby", "tab" + amb);
    $("#amb").innerHTML = '<div class="mos">' + a.imgs.map(function (n, i) { return "<div>" + img(n, i ? "25vw" : "45vw") + "</div>"; }).join("") + '</div><div><span class="age">' + a.age[lang] + "</span><h3>" + a.t[lang] + "</h3><p>" + a.d[lang] + '</p><div class="spec">' + a.sp.map(function (s, i) { return "<div><small>" + lb[i] + "</small><b>" + s[lang] + "</b></div>"; }).join("") + "</div>" + (amb < 2 ? '<a class="btn line" href="#tarifs" data-amb="' + amb + '">' + t.amGo + ARROW + "</a>" : "") + "</div>";
    if (anim && !STATIC) {
      gsap.fromTo("#amb .mos div", { clipPath: doc.dir === "rtl" ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0%)", duration: .9, stagger: .1, ease: "expo.inOut" });
      gsap.fromTo("#amb .mos img", { scale: 1.2 }, { scale: 1, duration: 1.4, ease: "expo.out" });
      gsap.from("#amb > div:last-child > *", { y: 24, opacity: 0, duration: .6, stagger: .06, ease: "power3.out", delay: .2 });
    }
  }
  function renderShop() {
    var t = I[lang], c = { all: ITEMS.length };
    ITEMS.forEach(function (x) { c[x[1]] = (c[x[1]] || 0) + 1; });
    $("#chips").innerHTML = ["all", "pratique", "sensoriel", "langage", "maths", "culture"].map(function (d) { return '<button type="button" data-d="' + d + '" aria-pressed="' + (d === dom) + '">' + (d === "all" ? t.all : t.doms[d]) + " (" + c[d] + ")</button>"; }).join("");
    $("#shelf").innerHTML = ITEMS.map(function (x) { return '<article class="item" data-d="' + x[1] + '"' + (dom !== "all" && x[1] !== dom ? " hidden" : "") + '><div class="ph">' + img(x[0], "(min-width:1080px) 25vw, 50vw") + '</div><div class="bd"><small>' + t.doms[x[1]] + "</small><h3>" + x[2][lang] + "</h3><p>" + x[3][lang] + '</p><span class="ag">' + t.from + " " + x[4].replace("m", lang === "ar" ? " شهرًا" : lang === "en" ? " months" : " mois") + "</span></div></article>"; }).join("");
  }
  function filter(d) {
    if (d === dom) return; dom = d;
    $$("#chips button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.d === d); });
    var items = $$("#shelf .item"), st = !STATIC && window.Flip ? Flip.getState(items) : null;
    items.forEach(function (x) { x.hidden = d !== "all" && x.dataset.d !== d; });
    if (st) Flip.from(st, { duration: .6, ease: "power3.inOut", absolute: true, onEnter: function (e) { return gsap.fromTo(e, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: .5, stagger: .04 }); }, onLeave: function (e) { return gsap.to(e, { opacity: 0, scale: .9, duration: .3 }); }, onComplete: function () { ScrollTrigger.refresh(); } });
  }
  function renderPricing() {
    var t = I[lang];
    $("#segA").innerHTML = AMB.slice(0, 2).map(function (a, i) { return '<button type="button" data-a="' + i + '" aria-pressed="' + (i === ambP) + '">' + a.t[lang] + "</button>"; }).join("");
    $("#segP").innerHTML = t.per.map(function (p, i) { return '<button type="button" data-p="' + i + '" aria-pressed="' + (i === per) + '">' + p + (i ? "<em>" + t.save + "</em>" : "") + "</button>"; }).join("");
    $("#plans").innerHTML = PLANS.map(function (p, i) { return '<article class="plan' + (p.hot ? " hot" : "") + '">' + (p.hot ? '<span class="badge">' + t.hot + "</span>" : "") + "<h3>" + p.t[lang] + '</h3><p class="hrs">' + p.h[lang] + '</p><p class="price"><span data-n="' + i + '">0</span> <small>' + t.perM + '</small></p><p class="hrs tr" data-tr="' + i + '"></p><ul>' + p.f[lang].map(function (f) { return "<li>" + CHECK + "<span>" + f + "</span></li>"; }).join("") + '</ul><a class="btn ' + (p.hot ? "terra" : "line") + '" href="#portes">' + t.choose + ARROW + "</a></article>"; }).join("");
    prices = [0, 0, 0]; updPrices(false);
  }
  function updPrices(anim) {
    var t = I[lang];
    PLANS.forEach(function (p, i) {
      var v = Math.round(p.p[ambP] * (per ? .95 : 1) / 100) * 100, el = $('[data-n="' + i + '"]'), tr = $('[data-tr="' + i + '"]');
      tr.textContent = per ? t.trim.replace("{n}", da(v * 3)) : " ";
      if (!anim || STATIC) { el.textContent = da(v); prices[i] = v; return; }
      var o = { v: prices[i] }; gsap.to(o, { v: v, duration: .7, ease: "power3.out", onUpdate: function () { el.textContent = da(Math.round(o.v / 100) * 100); } }); prices[i] = v;
    });
    $$("#segA button").forEach(function (b) { b.setAttribute("aria-pressed", +b.dataset.a === ambP); });
    $$("#segP button").forEach(function (b) { b.setAttribute("aria-pressed", +b.dataset.p === per); });
  }
  function renderGarden() {
    var t = I[lang];
    $("#gl").innerHTML = t.gl.map(function (g, i) { return "<li><b>0" + (i + 1) + "</b><span><strong>" + g[0] + "</strong><br>" + g[1] + "</span></li>"; }).join("");
    $("#gm").innerHTML = GM.map(function (n, i) { return '<div class="' + "abcde"[i] + '">' + img(n, "30vw") + "</div>"; }).join("");
  }
  function renderOD() {
    var t = I[lang];
    $("#tkD").textContent = fmt(OD, { weekday: "long", day: "numeric", month: "long" });
    $("#odDate").textContent = t.odDate.replace("{d}", fmt(OD, { day: "numeric", month: "long" }));
    $("#slots").innerHTML = SLOTS.map(function (s, i) { var left = s[1] - s[2]; return '<button type="button" class="slot" data-s="' + i + '" aria-pressed="' + (i === slot) + '"' + (left ? "" : " disabled") + "><b>" + s[0] + "</b><small>" + (left ? t.left.replace("{n}", left) : t.full) + '</small><span class="bar"><i style="transform:scaleX(' + (s[2] / s[1]).toFixed(2) + ')"></i></span></button>'; }).join("");
  }
  function renderFaq() {
    $("#faqL").innerHTML = FAQ.map(function (f, i) { return "<details" + (i === 0 ? " open" : "") + "><summary>" + f[0][lang] + '<i aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M12 5v14M5 12h14"/></svg></i></summary><p>' + f[1][lang] + "</p></details>"; }).join("");
  }
  function render() {
    var t = I[lang];
    renderFinder(); renderTabs(); renderShop(); renderPricing(); renderGarden(); renderOD(); renderFaq(); tick();
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
    try { localStorage.setItem("yasmine-lang", l); } catch (e) {}
    render();
    if (ready) { bindDynamic(); ScrollTrigger.refresh(); }
  }

  /* events */
  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.l !== lang) setLang(b.dataset.l); }); });
  $("#bm").addEventListener("change", function () { findRes(true); updPrices(true); });
  $("#by").addEventListener("change", function () { findRes(true); updPrices(true); });
  $("#tabs").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; var i = $$("#tabs button").indexOf(b); if (i === amb) return; amb = i; $$("#tabs button").forEach(function (x, k) { x.setAttribute("aria-selected", k === i); x.tabIndex = k === i ? 0 : -1; }); renderAmb(true); });
  $("#tabs").addEventListener("keydown", function (e) { var bs = $$("#tabs button"), i = bs.indexOf(document.activeElement), rtl = doc.dir === "rtl"; if (i < 0) return; var n = e.key === (rtl ? "ArrowLeft" : "ArrowRight") ? 1 : e.key === (rtl ? "ArrowRight" : "ArrowLeft") ? -1 : 0; if (!n) return; e.preventDefault(); var k = (i + n + bs.length) % bs.length; bs[k].focus(); bs[k].click(); });
  $("#amb").addEventListener("click", function (e) { var a = e.target.closest("[data-amb]"); if (a) { ambP = +a.dataset.amb; updPrices(true); } });
  $("#chips").addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) filter(b.dataset.d); });
  $("#segA").addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) { ambP = +b.dataset.a; updPrices(true); } });
  $("#segP").addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) { per = +b.dataset.p; updPrices(true); } });
  $("#slots").addEventListener("click", function (e) { var b = e.target.closest(".slot"); if (!b || b.disabled) return; slot = +b.dataset.s; $$("#slots .slot").forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); });
  $("#f").addEventListener("click", function (e) { var b = e.target.closest(".step button"); if (!b) return; if (b.dataset.k === "a") na = Math.min(3, Math.max(1, na + +b.dataset.v)); else nc = Math.min(3, Math.max(0, nc + +b.dataset.v)); $("#na").textContent = na; $("#nc").textContent = nc; });
  $("#f").addEventListener("submit", function (e) {
    e.preventDefault(); var t = I[lang], okTel = /^0[5-7]\d{8}$/.test(this.tel.value.replace(/\s/g, ""));
    if (slot < 0 || !this.name.value.trim() || !okTel) { $("#msg").textContent = t.err; if (slot >= 0) (this.name.value.trim() ? this.tel : this.name).focus(); return; }
    if (na + nc > SLOTS[slot][1] - SLOTS[slot][2]) { $("#msg").textContent = t.errCap; return; }
    $("#msg").textContent = t.demo;
  });
  $("#waf").addEventListener("click", function () { toast(I[lang].waDemo); });

  render();
  setInterval(tick, 1000);
  if (STATIC) return;

  gsap.registerPlugin(ScrollTrigger, Flip);
  var lenis = window.Lenis ? new Lenis({ lerp: 0.09 }) : null;
  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach(function (a) { a.addEventListener("click", function (e) { var id = a.getAttribute("href"); if (id.length < 2) return; var el = $(id); if (!el) return; e.preventDefault(); lenis.scrollTo(el, { offset: id === "#top" ? 0 : -76 }); }); });
  }

  /* hero: the photo opens from the centre, the words rise, the ticket swings in */
  gsap.fromTo("#heroBg", { clipPath: "inset(14% 22% 14% 22%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.6, ease: "expo.inOut" });
  gsap.fromTo("#heroBg img", { scale: 1.3 }, { scale: 1, duration: 2.2, ease: "expo.out" });
  gsap.from(".hero .kicker, .hero h1 span, .hero p, .hero .acts", { y: 50, opacity: 0, duration: 1.1, stagger: .1, ease: "expo.out", delay: .7 });
  gsap.from(".ticket", { y: 60, rotation: doc.dir === "rtl" ? -4 : 4, opacity: 0, duration: 1, ease: "back.out(1.5)", delay: 1.2 });
  gsap.to("#heroBg img", { yPercent: 12, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  /* facts count up */
  $$(".facts b").forEach(function (b) { var m = b.textContent.match(/^(\d+)(.*)$/); if (!m) return; var o = { v: 0 }; gsap.to(o, { v: +m[1], duration: 1.6, ease: "power2.out", scrollTrigger: { trigger: ".facts", start: "top 90%" }, onUpdate: function () { b.textContent = Math.round(o.v) + m[2]; } }); });
  ScrollTrigger.batch("[data-up]", { start: "top 88%", once: true, onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, duration: 1, stagger: .1, ease: "power3.out" }); } });

  function bindDynamic() {
    [].concat.apply([], dyn).forEach(function (x) { if (x.targets || x.getChildren) x.revert(); else if (x.kill) x.kill(); }); dyn = [];
    var wide = matchMedia("(min-width: 901px)").matches;
    dyn.push(gsap.fromTo(".fimg img", { scale: 1.25 }, { scale: 1, ease: "none", scrollTrigger: { trigger: ".finder", start: "top bottom", end: "bottom top", scrub: true } }));
    dyn.push(gsap.fromTo("#amb .mos div", { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 1.2, stagger: .12, ease: "expo.inOut", scrollTrigger: { trigger: "#amb", start: "top 75%" } }));
    dyn.push(ScrollTrigger.batch("#shelf .item", { start: "top 92%", once: true, onEnter: function (els) { gsap.fromTo(els, { y: 60, opacity: 0, rotation: function (i) { return i % 2 ? 1.5 : -1.5; } }, { y: 0, opacity: 1, rotation: 0, duration: .9, stagger: .07, ease: "power3.out" }); } }));
    dyn.push(gsap.from("#plans .plan", { y: 70, opacity: 0, duration: 1, stagger: .12, ease: "power3.out", scrollTrigger: { trigger: "#plans", start: "top 82%" } }));
    if (wide) $$("#gm div").forEach(function (d, i) { dyn.push(gsap.fromTo(d, { y: [50, -20, 80, 20, -40][i] }, { y: [-30, 30, -40, -30, 30][i], ease: "none", scrollTrigger: { trigger: ".garden", start: "top bottom", end: "bottom top", scrub: true } })); });
    dyn.push(gsap.fromTo("#oranImg", { yPercent: -6 }, { yPercent: 6, ease: "none", scrollTrigger: { trigger: ".oran", start: "top bottom", end: "bottom top", scrub: true } }));
    dyn.push(gsap.from(".oran h2, .oran p, .where figure", { y: 50, opacity: 0, duration: 1.1, stagger: .12, ease: "expo.out", scrollTrigger: { trigger: ".oran .txt", start: "top 85%" } }));
    dyn.push(gsap.from("#slots .bar i", { scaleX: 0, duration: 1.2, stagger: .15, ease: "power3.out", scrollTrigger: { trigger: "#slots", start: "top 85%" } }));
  }
  bindDynamic();
  ready = true;
  updPrices(false);
  var rz, lw = innerWidth; window.addEventListener("resize", function () { if (innerWidth === lw) return; lw = innerWidth; clearTimeout(rz); rz = setTimeout(function () { bindDynamic(); ScrollTrigger.refresh(); }, 300); });
})();
