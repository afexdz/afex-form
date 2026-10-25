/* Marsa : contenu FR / AR / EN, conteneurs-formations, droits et taxes, Incoterms, tableau des départs, déclaration d'inscription (GSAP + ScrollTrigger + Lenis, en local) */
(function () {
  var doc = document.documentElement;
  var STATIC = doc.classList.contains("static") || !window.gsap || !window.ScrollTrigger;
  if (STATIC) doc.classList.add("static");
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  function L(o) { return o[lang]; }
  function T(fr, ar, en) { return { fr: fr, ar: ar, en: en }; }
  var P = { port: [960, "Ismet BELAOUEDJ"], baie: [1920, "kheedaj"], darse: [854, "Ismet BELAOUEDJ"], navire: [853, "Ismet BELAOUEDJ"], silo: [853, "Ismet BELAOUEDJ"], grue: [1916, "Sorin Basangeac"], parc: [854, "CHUTTERSNAP"], chargement: [720, "Daniel Miksha"], mur: [961, "Richard Williams"], large: [852, "Venti Views"], quai: [853, "Foto K."], bureau: [1920, "Mesa Photo"], etudiantes: [1915, "SMKN 1 Gantar"], contrat: [853, "Amina Atar"], tampon: [853, "Markus Spiske"], camion: [832, "Bernd Dittrich"], poste: [720, "litoon dev"] };
  function img(n, sizes) { var big = n === "port" || n === "mur" || n === "large"; return '<img src="assets/img/' + n + '-640.webp" srcset="assets/img/' + n + '-640.webp 640w, assets/img/' + n + '-1280.webp 1280w' + (big ? ", assets/img/" + n + "-1920.webp 1920w" : "") + '" sizes="' + (sizes || "50vw") + '" width="1280" height="' + P[n][0] + '" alt="" loading="lazy" decoding="async">'; }
  function cur() { return lang === "ar" ? "دج" : "DA"; }
  function num(n) { return "⁦" + Math.round(n).toLocaleString("fr-FR").replace(/ | /g, " ") + "⁩"; }
  function da(n) { return num(n) + " " + cur(); }

  /* signal flags */
  var FL = {
    M: '<rect width="60" height="40" fill="#1E6E8C"/><path d="M0 0L60 40M60 0L0 40" stroke="#fff" stroke-width="8"/>',
    A: '<rect width="30" height="40" fill="#fff"/><path d="M30 0H60L46 20L60 40H30Z" fill="#1E6E8C"/>',
    R: '<rect width="60" height="40" fill="#C8492A"/><path d="M30 0V40M0 20H60" stroke="#F2C230" stroke-width="8"/>',
    S: '<rect width="60" height="40" fill="#fff"/><rect x="20" y="12" width="20" height="16" fill="#1E6E8C"/>'
  };
  function flags(w) { return "MARSA".split("").map(function (c) { return '<svg width="' + w + '" height="' + Math.round(w * 2 / 3) + '" viewBox="0 0 60 40">' + FL[c] + "</svg>"; }).join(""); }
  $("#logoFlags").innerHTML = flags(16);
  $("#fflags").innerHTML = flags(120);

  var C = [
    { col: "#C8492A", code: "MRSU 210417 3", img: "tampon", t: T("Déclarant en douane", "مصرّح جمركي", "Customs declarant"), m: 4, h: 160, p: 65000, niv: T("Bac", "بكالوريا", "Baccalaureate"), nx: 14, left: 7,
      mod: T(["Code des douanes et réglementation des changes", "Tarif douanier et nomenclature SH", "Valeur en douane, origine et espèce tarifaire", "Déclaration sur le système informatique des douanes", "Régimes suspensifs : admission temporaire, entrepôt"], ["قانون الجمارك وتنظيم الصرف", "التعريفة الجمركية ونظام التسمية المنسّق", "القيمة لدى الجمارك، المنشأ والنوع التعريفي", "التصريح على النظام المعلوماتي للجمارك", "الأنظمة الموقِفة: القبول المؤقت، المستودع"], ["Customs code and exchange rules", "Customs tariff and HS nomenclature", "Customs value, origin and classification", "Filing on the customs IT system", "Suspensive regimes: temporary admission, bonded warehouse"]),
      job: T("Commissionnaires en douane agréés, services import des entreprises", "الوكلاء المعتمدون لدى الجمارك، مصالح الاستيراد في المؤسسات", "Licensed customs brokers, company import departments") },
    { col: "#1E6E8C", code: "MRSU 384102 7", img: "contrat", t: T("Transitaire", "عون عبور", "Freight forwarder"), m: 3, h: 120, p: 55000, niv: T("Bac", "بكالوريا", "Baccalaureate"), nx: 21, left: 2,
      mod: T(["Le rôle du transitaire dans la chaîne", "Le dossier d’import : facture, domiciliation, B/L, certificat d’origine", "Port, compagnie maritime, banque : qui fait quoi", "Enlèvement, livraison et surestaries"], ["دور عون العبور في السلسلة", "ملف الاستيراد: الفاتورة، التوطين، سند الشحن، شهادة المنشأ", "الميناء، الشركة البحرية، البنك: من يفعل ماذا", "رفع البضاعة، التسليم وغرامات التأخير"], ["The forwarder’s role in the chain", "The import file: invoice, bank domiciliation, B/L, certificate of origin", "Port, shipping line, bank: who does what", "Collection, delivery and demurrage"]),
      job: T("Sociétés de transit, transporteurs, importateurs", "شركات العبور، الناقلون، المستوردون", "Forwarding firms, carriers, importers") },
    { col: "#F2C230", ink: 1, code: "MRSU 902215 0", img: "bureau", t: T("Commerce international et import-export", "التجارة الدولية والاستيراد والتصدير", "International trade and import-export"), m: 3, h: 120, p: 60000, niv: T("Bac", "بكالوريا", "Baccalaureate"), nx: 28, left: 11,
      mod: T(["Les Incoterms 2020 dans un contrat", "Domiciliation bancaire, remise et crédit documentaires", "Registre du commerce et activité d’importation", "Négocier avec un fournisseur étranger", "Calculer un prix de revient import"], ["الإنكوترمز 2020 في العقد", "التوطين البنكي، التحصيل والاعتماد المستندي", "السجل التجاري ونشاط الاستيراد", "التفاوض مع مورّد أجنبي", "حساب سعر التكلفة عند الاستيراد"], ["Incoterms 2020 in a contract", "Bank domiciliation, documentary collection and credit", "Trade register and import licences", "Negotiating with a foreign supplier", "Working out a landed cost"]),
      job: T("Services achats et import, PME exportatrices", "مصالح الشراء والاستيراد، المؤسسات المصدّرة", "Purchasing and import teams, exporting SMEs") },
    { col: "#2E7D5B", code: "MRSU 117730 5", img: "navire", t: T("Agent maritime et shipping", "وكيل بحري وشحن", "Shipping agent"), m: 2, h: 80, p: 45000, niv: T("3e AS", "الثالثة ثانوي", "Final year of secondary"), nx: 35, left: 9,
      mod: T(["Navires et conteneurs : 20’, 40’, reefer", "Connaissement et manifeste", "Consignation et escale d’un navire", "Surestaries et restitution des conteneurs"], ["السفن والحاويات: 20 و40 قدمًا والمبرّدة", "سند الشحن والبيان", "التوكيل البحري ورسوّ السفينة", "غرامات التأخير وإرجاع الحاويات"], ["Ships and containers: 20’, 40’, reefer", "Bill of lading and manifest", "Ship agency and port calls", "Demurrage and container returns"]),
      job: T("Consignataires, compagnies maritimes, agences de ligne", "الوكلاء البحريون، الشركات البحرية، وكالات الخطوط", "Ship agents, shipping lines, liner agencies") },
    { col: "#6B7280", code: "MRSU 650981 2", img: "parc", t: T("Logistique portuaire", "اللوجستيك المينائي", "Port logistics"), m: 2, h: 80, p: 42000, niv: T("3e AS", "الثالثة ثانوي", "Final year of secondary"), nx: 49, left: 0,
      mod: T(["L’organisation d’un terminal à conteneurs", "Codes, plan de parc et pointage", "État des conteneurs et réserves", "Sécurité sur le quai"], ["تنظيم محطة الحاويات", "الرموز، مخطط الساحة والعدّ", "حالة الحاويات والتحفّظات", "السلامة على الرصيف"], ["How a container terminal is organised", "Codes, yard plan and tallying", "Container condition and reservations", "Safety on the quay"]),
      job: T("Terminaux, ports secs, zones logistiques", "المحطات، الموانئ الجافة، المناطق اللوجستية", "Terminals, dry ports, logistics zones") },
    { col: "#14161A", code: "MRSU 443096 8", img: "etudiantes", t: T("Anglais du commerce maritime", "الإنجليزية للتجارة البحرية", "English for shipping"), m: 2, h: 60, p: 28000, niv: T("3e AS", "الثالثة ثانوي", "Final year of secondary"), nx: 56, left: 14,
      mod: T(["Le vocabulaire du port et du shipping", "Lire une facture et un B/L en anglais", "Écrire à un fournisseur ou à une compagnie", "Les appels téléphoniques et les visios"], ["مفردات الميناء والشحن", "قراءة فاتورة وسند شحن بالإنجليزية", "مراسلة مورّد أو شركة", "المكالمات الهاتفية والاجتماعات عن بعد"], ["Port and shipping vocabulary", "Reading an invoice and a B/L in English", "Writing to a supplier or a line", "Phone and video calls"]),
      job: T("Tous les métiers du transit et de l’import", "كل مهن العبور والاستيراد", "Every forwarding and import job") }
  ];
  var WIL = ["Oran", "Aïn Témouchent", "Mostaganem", "Sidi Bel Abbès", "Tlemcen", "Mascara", "Relizane", "Chlef"];
  var INC = { EXW: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], FCA: [1, 1, 1, 0, 0, 0, 0, 0, 0, 2], FOB: [1, 1, 1, 1, 0, 0, 0, 0, 0, 3], CFR: [1, 1, 1, 1, 1, 0, 0, 0, 0, 3], CIF: [1, 1, 1, 1, 1, 1, 0, 0, 0, 3], DAP: [1, 1, 1, 1, 1, 1, 1, 0, 1, 8], DDP: [1, 1, 1, 1, 1, 1, 1, 1, 1, 8] };
  var RATE = 150;

  var I = {
    fr: { brand: "Marsa", demo0: "Site de démonstration, école fictive.", demo1: "Autres modèles", n1: "Formations", n2: "Droits et taxes", n3: "Incoterms", n4: "Départs", n5: "Guichet", cta: "S’inscrire",
      h1: "Du quai au <em>bureau de douane.</em>", hP: "Transit, douane et commerce international, appris à Oran face au port : déclarations, Incoterms, connaissements, avec des praticiens du métier.", hB1: "Voir les formations", hB2: "Calculer des droits",
      blT: "Connaissement · B/L", blA: "Chargé à", blAv: "Votre ville", blB: "Déchargé à", blC: "Marchandise", blCv: "Un métier qui recrute", blD: "Conteneur", blN: "Prochain départ",
      tH: "Le terminal des formations.", tP: "Six conteneurs, six métiers du port. Ouvrez les portes pour voir ce qu’il y a dedans : programme, durée, niveau, prix.",
      open: "Ouvrir", kv: ["Durée", "Volume", "Niveau", "Prix"], mo: "{n} mois", hrs: "{n} h", jobs: "Débouchés :", book: "Réserver ce départ", inst: "ou 3 × {p}",
      xH: "Combien coûte un conteneur dédouané ?", xP: "L’exercice que nos déclarants font cent fois : de la facture du fournisseur aux droits et taxes payés à Oran.",
      xFob: "Valeur de la marchandise (FOB, en €)", xFret: "Fret maritime jusqu’à Oran (€)", xCat: "Taux de droits de douane", cats: [["5 %", "matières premières"], ["15 %", "produits semi-finis"], ["30 %", "produits finis"]], xTva: "Taux de TVA", tvas: [["19 %", "taux normal"], ["9 %", "taux réduit"]],
      rT: "Bordereau de liquidation · exercice", rIns: "Assurance (0,5 %)", rCif: "Valeur en douane (CAF)", rCifS: "(FOB + fret + assurance) × {r} DA", rDd: "Droits de douane", rTva: "TVA", rTvaS: "sur valeur CAF + droits", rTot: "Droits et taxes à payer", rCost: "Coût de la marchandise dédouanée", lg: ["Marchandise CAF", "Droits", "TVA"],
      rNote: "Exercice pédagogique : taux simplifiés et taux de change de démonstration (1 € = {r} DA). Les vrais calculs ajoutent d’autres taxes selon le produit.",
      iH: "Qui paie quoi ? Les Incoterms.", iP: "Choisissez un Incoterm : chaque étape du voyage prend la couleur de celui qui la paie, et le drapeau montre où le risque passe à l’acheteur.", kS: "Vendeur (le fournisseur étranger)", kB: "Acheteur (l’importateur algérien)", risk: "Risque transféré",
      steps: ["Emballage", "Transport vers le port", "Dédouanement export", "Chargement à bord", "Fret maritime", "Assurance", "Déchargement à Oran", "Dédouanement import", "Livraison au magasin"],
      idesc: { EXW: "À l’usine : le vendeur prépare la marchandise, l’acheteur organise et paie tout le reste, depuis le quai du fournisseur.", FCA: "Le vendeur remet la marchandise dédouanée export au transporteur choisi par l’acheteur.", FOB: "Le vendeur paie jusqu’au chargement à bord du navire. Fret, assurance et import sont pour l’acheteur.", CFR: "Le vendeur paie aussi le fret jusqu’à Oran, mais le risque passe à l’acheteur dès que la marchandise est à bord.", CIF: "Comme CFR, avec en plus l’assurance payée par le vendeur. Le risque passe toujours à bord.", DAP: "Le vendeur livre jusqu’au magasin de l’acheteur. L’acheteur paie seulement le dédouanement import et les droits.", DDP: "Le vendeur s’occupe de tout, droits et taxes compris. L’acheteur reçoit la marchandise prête." },
      bH: "Prochains départs.", bP: "Toutes les sessions des trois prochains mois. Touchez une ligne pour réserver.", bc: ["Formation", "Départ", "Durée", "Salle", "Statut"], st: { ok: "À L’HEURE", go: "EMBARQUEMENT", last: "{n} PLACES", full: "COMPLET" },
      pH: "Où vous travaillerez ensuite.", pP: "Le port d’Oran, les zones logistiques et les entreprises d’import de l’Ouest cherchent des gens qui connaissent les documents.",
      ports: [["Commissionnaires en douane", "déclarations, liquidation, suivi des dossiers"], ["Compagnies et agences maritimes", "escales, manifestes, conteneurs"], ["Services import", "achats, domiciliation, prix de revient"], ["Terminaux et ports secs", "parc, pointage, sécurité"], ["Transport et logistique", "enlèvement, livraison, entreposage"]],
      dH: "Votre déclaration d’inscription.", dP: "Remplissez les cases comme un vrai déclarant. L’accueil vous rappelle sous 48 heures pour le test de niveau.",
      dT: "Déclaration d’inscription", dN: "Formulaire D-MRS · exemplaire stagiaire", d1: "Déclarant : prénom et nom", d2: "Téléphone", d3: "Régime : formation choisie", d4: "Wilaya de résidence", d5: "Niveau d’études", d6: "Horaire", nivs: ["3e AS", "Bac", "Licence", "Master et plus"], hrs2: ["Jour", "Soir", "Week-end"], d7: "Situation", sits: ["Étudiant", "Salarié", "Demandeur d’emploi"], other: "Autre wilaya",
      send: "Déposer la déclaration", stamp: "DÉMO · NON TRANSMIS", err: "Case 1 et case 2 obligatoires : indiquez votre nom et un numéro valide (05, 06 ou 07).", demo: "Démo AFEX Digital : aucune inscription n’a été envoyée, ce formulaire n’est pas encore connecté.",
      qH: "Au guichet.", qP: "Les questions qu’on nous pose chaque jour à l’accueil.", qN: "Numéro appelé", qC: "Pas trouvé votre réponse ? Écrivez-nous sur WhatsApp, un conseiller vous répond aux heures d’ouverture.", waT: "Écrire sur WhatsApp",
      F: [["Faut-il le bac pour devenir déclarant en douane ?", "Oui, pour cette formation nous demandons le bac. Pour l’agent maritime, la logistique portuaire et l’anglais, la 3e année secondaire suffit."], ["Est-ce que la formation suffit pour ouvrir un bureau de commissionnaire ?", "Non. L’agrément de commissionnaire en douane est délivré par l’administration des douanes selon ses propres conditions. Notre formation vous prépare au métier et aux postes en entreprise."], ["Les cours sont-ils pratiques ?", "Oui : vraies factures, vrais connaissements anonymisés, exercices de liquidation et visites encadrées des zones portuaires quand elles sont autorisées."], ["Peut-on payer en plusieurs fois ?", "Oui, en 3 tranches sans frais. Les salariés envoyés par leur entreprise peuvent avoir une convention et une facture."], ["Y a-t-il des cours du soir ?", "Oui, de 17 h 30 à 20 h, trois soirs par semaine, pour ceux qui travaillent déjà."], ["Que contient le dossier ?", "2 photos, une copie de la CNI, l’extrait de naissance 12S, une copie du dernier diplôme et les frais de dossier de 2 000 DA."]],
      foA: "École de transit, de douane et de commerce international fictive, Oran.", foH: "Horaires", foHv: "Samedi → jeudi, 8 h 30 – 17 h. Cours du soir 17 h 30 – 20 h.", foL: "Adresse", foLv: "Front de mer, Oran (adresse de démonstration).", foC: "Contact", foCv: "Téléphone et WhatsApp : numéro de démonstration.",
      foot: "© 2026 Marsa, école fictive.", by: "Site réalisé par", photos: "Photos : Unsplash,", waDemo: "Démo AFEX Digital : le numéro WhatsApp n’est pas encore connecté.", lang: "Langue", heroAlt: "Le port d’Oran, ses silos et la montagne du Murdjadjo", title: "Marsa, école de transit et de douane à Oran", loc: "fr-FR" },
    ar: { brand: "مرسى", demo0: "موقع تجريبي، مدرسة وهمية.", demo1: "نماذج أخرى", n1: "التكوينات", n2: "الحقوق والرسوم", n3: "الإنكوترمز", n4: "الانطلاقات", n5: "الشبّاك", cta: "سجّل",
      h1: "من الرصيف إلى <em>مكتب الجمارك.</em>", hP: "العبور والجمارك والتجارة الدولية، تتعلّمها في وهران قبالة الميناء: التصاريح، الإنكوترمز، سندات الشحن، مع ممارسين في المهنة.", hB1: "شاهد التكوينات", hB2: "احسب الحقوق",
      blT: "سند الشحن · B/L", blA: "شُحن من", blAv: "مدينتك", blB: "يُفرغ في", blC: "البضاعة", blCv: "مهنة مطلوبة", blD: "الحاوية", blN: "الانطلاقة القادمة",
      tH: "محطة التكوينات.", tP: "ست حاويات، ست مهن في الميناء. افتح الأبواب لترى ما بداخلها: البرنامج، المدة، المستوى، السعر.",
      open: "افتح", kv: ["المدة", "الحجم الساعي", "المستوى", "السعر"], mo: "{n} أشهر", hrs: "{n} سا", jobs: "مجالات العمل:", book: "احجز هذه الانطلاقة", inst: "أو 3 × {p}",
      xH: "كم تكلّف حاوية بعد الجمركة؟", xP: "التمرين الذي يعيده مصرّحونا مئة مرة: من فاتورة المورّد إلى الحقوق والرسوم المدفوعة في وهران.",
      xFob: "قيمة البضاعة (FOB، باليورو)", xFret: "الشحن البحري حتى وهران (يورو)", xCat: "نسبة الحقوق الجمركية", cats: [["5 %", "مواد أولية"], ["15 %", "منتجات نصف مصنّعة"], ["30 %", "منتجات نهائية"]], xTva: "نسبة الرسم على القيمة المضافة", tvas: [["19 %", "النسبة العادية"], ["9 %", "النسبة المخفّضة"]],
      rT: "كشف التصفية · تمرين", rIns: "التأمين (0,5 %)", rCif: "القيمة لدى الجمارك (CAF)", rCifS: "(FOB + الشحن + التأمين) × {r} دج", rDd: "الحقوق الجمركية", rTva: "الرسم على القيمة المضافة", rTvaS: "على القيمة CAF + الحقوق", rTot: "الحقوق والرسوم المستحقّة", rCost: "تكلفة البضاعة بعد الجمركة", lg: ["البضاعة CAF", "الحقوق", "الرسم"],
      rNote: "تمرين بيداغوجي: نسب مبسّطة وسعر صرف للعرض (1 يورو = {r} دج). الحسابات الحقيقية تضيف رسومًا أخرى حسب المنتج.",
      iH: "من يدفع ماذا؟ الإنكوترمز.", iP: "اختر مصطلحًا: كل مرحلة من الرحلة تأخذ لون من يدفعها، والعَلَم يبيّن أين ينتقل الخطر إلى المشتري.", kS: "البائع (المورّد الأجنبي)", kB: "المشتري (المستورد الجزائري)", risk: "انتقال الخطر",
      steps: ["التغليف", "النقل إلى الميناء", "الجمركة عند التصدير", "الشحن على السفينة", "الشحن البحري", "التأمين", "التفريغ في وهران", "الجمركة عند الاستيراد", "التسليم إلى المخزن"],
      idesc: { EXW: "في المصنع: البائع يجهّز البضاعة، والمشتري ينظّم ويدفع كل الباقي من رصيف المورّد.", FCA: "البائع يسلّم البضاعة مجمركة للتصدير إلى الناقل الذي يختاره المشتري.", FOB: "البائع يدفع حتى الشحن على السفينة. الشحن البحري والتأمين والاستيراد على المشتري.", CFR: "البائع يدفع أيضًا الشحن حتى وهران، لكن الخطر ينتقل إلى المشتري بمجرد وضع البضاعة على السفينة.", CIF: "مثل CFR مع تأمين يدفعه البائع. الخطر ينتقل دائمًا على متن السفينة.", DAP: "البائع يسلّم حتى مخزن المشتري. المشتري يدفع فقط الجمركة عند الاستيراد والحقوق.", DDP: "البائع يتكفّل بكل شيء، بما في ذلك الحقوق والرسوم. المشتري يستلم البضاعة جاهزة." },
      bH: "الانطلاقات القادمة.", bP: "كل الدورات في الأشهر الثلاثة القادمة. المس سطرًا للحجز.", bc: ["التكوين", "الانطلاق", "المدة", "القاعة", "الحالة"], st: { ok: "في الموعد", go: "صعود", last: "{n} أماكن", full: "ممتلئ" },
      pH: "أين ستعمل بعدها.", pP: "ميناء وهران والمناطق اللوجستية ومؤسسات الاستيراد في الغرب تبحث عن من يعرف الوثائق.",
      ports: [["الوكلاء لدى الجمارك", "التصاريح، التصفية، متابعة الملفات"], ["الشركات والوكالات البحرية", "الرسوّ، البيانات، الحاويات"], ["مصالح الاستيراد", "الشراء، التوطين، سعر التكلفة"], ["المحطات والموانئ الجافة", "الساحة، العدّ، السلامة"], ["النقل واللوجستيك", "الرفع، التسليم، التخزين"]],
      dH: "تصريح التسجيل الخاص بك.", dP: "املأ الخانات كمصرّح حقيقي. يتصل بك الاستقبال خلال 48 ساعة لاختبار المستوى.",
      dT: "تصريح التسجيل", dN: "استمارة D-MRS · نسخة المتربص", d1: "المصرّح: الاسم واللقب", d2: "الهاتف", d3: "النظام: التكوين المختار", d4: "ولاية الإقامة", d5: "المستوى الدراسي", d6: "التوقيت", nivs: ["الثالثة ثانوي", "بكالوريا", "ليسانس", "ماستر فما فوق"], hrs2: ["صباحًا", "مساءً", "نهاية الأسبوع"], d7: "الوضعية", sits: ["طالب", "عامل", "طالب عمل"], other: "ولاية أخرى",
      send: "أودع التصريح", stamp: "عرض · لم يُرسل", err: "الخانتان 1 و2 إلزاميتان: أدخل اسمك ورقمًا صحيحًا (05 أو 06 أو 07).", demo: "عرض AFEX Digital: لم يُرسل أي تسجيل، هذا النموذج غير متصل بعد.",
      qH: "عند الشبّاك.", qP: "الأسئلة التي تُطرح علينا كل يوم في الاستقبال.", qN: "الرقم المنادى", qC: "لم تجد جوابك؟ راسلنا على واتساب، يجيبك مستشار في أوقات العمل.", waT: "راسلنا على واتساب",
      F: [["هل البكالوريا ضرورية لتصبح مصرّحًا جمركيًا؟", "نعم، نطلب البكالوريا لهذا التكوين. للوكيل البحري واللوجستيك المينائي والإنجليزية تكفي الثالثة ثانوي."], ["هل يكفي التكوين لفتح مكتب وكيل لدى الجمارك؟", "لا. اعتماد الوكيل لدى الجمارك تمنحه إدارة الجمارك وفق شروطها. تكويننا يحضّرك للمهنة ولمناصب العمل في المؤسسات."], ["هل الدروس تطبيقية؟", "نعم: فواتير حقيقية وسندات شحن مجهولة الهوية، تمارين تصفية وزيارات مؤطّرة للمناطق المينائية عند الترخيص."], ["هل يمكن الدفع بالتقسيط؟", "نعم، على 3 أقساط بلا مصاريف. العمال المرسلون من مؤسستهم يمكنهم الحصول على اتفاقية وفاتورة."], ["هل توجد دروس مسائية؟", "نعم، من 17:30 إلى 20:00 ثلاث أمسيات في الأسبوع، لمن يعمل."], ["ماذا يتضمّن الملف؟", "صورتان، نسخة من بطاقة التعريف، شهادة الميلاد 12S، نسخة من آخر شهادة، ومصاريف الملف 2 000 دج."]],
      foA: "مدرسة وهمية للعبور والجمارك والتجارة الدولية، وهران.", foH: "التوقيت", foHv: "من السبت إلى الخميس، 8:30 – 17:00. دروس مسائية 17:30 – 20:00.", foL: "العنوان", foLv: "الواجهة البحرية، وهران (عنوان للعرض).", foC: "الاتصال", foCv: "الهاتف وواتساب: رقم تجريبي.",
      foot: "© 2026 مرسى، مدرسة وهمية.", by: "موقع من إنجاز", photos: "الصور: Unsplash،", waDemo: "عرض AFEX Digital: رقم واتساب غير متصل بعد.", lang: "اللغة", heroAlt: "ميناء وهران وصوامعه وجبل مرجاجو", title: "مرسى، مدرسة العبور والجمارك في وهران", loc: "ar-DZ" },
    en: { brand: "Marsa", demo0: "Demo website, fictional school.", demo1: "Other templates", n1: "Courses", n2: "Duties", n3: "Incoterms", n4: "Departures", n5: "Help desk", cta: "Enrol",
      h1: "From the quay to the <em>customs office.</em>", hP: "Freight, customs and international trade, learned in Oran facing the port: declarations, Incoterms, bills of lading, taught by people who do the job.", hB1: "See the courses", hB2: "Work out duties",
      blT: "Bill of lading · B/L", blA: "Loaded at", blAv: "Your town", blB: "Discharged at", blC: "Goods", blCv: "A job that’s hiring", blD: "Container", blN: "Next departure",
      tH: "The course terminal.", tP: "Six containers, six port careers. Open the doors to see what’s inside: programme, length, level, price.",
      open: "Open", kv: ["Length", "Hours", "Level", "Price"], mo: "{n} months", hrs: "{n} h", jobs: "Where you work:", book: "Book this departure", inst: "or 3 × {p}",
      xH: "What does a cleared container cost?", xP: "The exercise our declarants do a hundred times: from the supplier’s invoice to the duties and taxes paid in Oran.",
      xFob: "Goods value (FOB, in €)", xFret: "Sea freight to Oran (€)", xCat: "Customs duty rate", cats: [["5%", "raw materials"], ["15%", "semi-finished goods"], ["30%", "finished goods"]], xTva: "VAT rate", tvas: [["19%", "standard rate"], ["9%", "reduced rate"]],
      rT: "Duty assessment · exercise", rIns: "Insurance (0.5%)", rCif: "Customs value (CIF)", rCifS: "(FOB + freight + insurance) × {r} DA", rDd: "Customs duty", rTva: "VAT", rTvaS: "on CIF value + duty", rTot: "Duties and taxes due", rCost: "Cost of the cleared goods", lg: ["CIF goods", "Duty", "VAT"],
      rNote: "Teaching exercise: simplified rates and a demo exchange rate (€1 = {r} DA). Real assessments add other taxes depending on the product.",
      iH: "Who pays for what? Incoterms.", iP: "Pick an Incoterm: each leg of the journey takes the colour of whoever pays for it, and the flag shows where risk passes to the buyer.", kS: "Seller (the foreign supplier)", kB: "Buyer (the Algerian importer)", risk: "Risk passes",
      steps: ["Packing", "Haulage to port", "Export clearance", "Loading on board", "Sea freight", "Insurance", "Unloading in Oran", "Import clearance", "Delivery to warehouse"],
      idesc: { EXW: "At the factory: the seller gets the goods ready, the buyer arranges and pays for everything from the supplier’s dock.", FCA: "The seller hands the export-cleared goods to the carrier chosen by the buyer.", FOB: "The seller pays up to loading on board. Freight, insurance and import are the buyer’s.", CFR: "The seller also pays freight to Oran, but risk passes to the buyer once the goods are on board.", CIF: "Like CFR, plus insurance paid by the seller. Risk still passes on board.", DAP: "The seller delivers to the buyer’s warehouse. The buyer only pays import clearance and duties.", DDP: "The seller handles everything, duties and taxes included. The buyer receives the goods ready." },
      bH: "Next departures.", bP: "Every session over the next three months. Tap a row to book.", bc: ["Course", "Departs", "Length", "Room", "Status"], st: { ok: "ON TIME", go: "BOARDING", last: "{n} SEATS", full: "FULL" },
      pH: "Where you’ll work next.", pP: "The port of Oran, logistics zones and importers across the west need people who know the paperwork.",
      ports: [["Customs brokers", "declarations, assessments, file follow-up"], ["Shipping lines and agencies", "port calls, manifests, containers"], ["Import departments", "purchasing, bank domiciliation, landed cost"], ["Terminals and dry ports", "yard, tallying, safety"], ["Transport and logistics", "collection, delivery, storage"]],
      dH: "Your enrolment declaration.", dP: "Fill in the boxes like a real declarant. Reception calls you back within 48 hours for the placement test.",
      dT: "Enrolment declaration", dN: "Form D-MRS · trainee copy", d1: "Declarant: full name", d2: "Phone", d3: "Regime: chosen course", d4: "Province", d5: "Education", d6: "Schedule", nivs: ["Final year of secondary", "Baccalaureate", "Bachelor’s", "Master’s or higher"], hrs2: ["Daytime", "Evening", "Weekend"], d7: "Status", sits: ["Student", "Employee", "Job seeker"], other: "Other province",
      send: "File the declaration", stamp: "DEMO · NOT SENT", err: "Boxes 1 and 2 are required: enter your name and a valid number (05, 06 or 07).", demo: "AFEX Digital demo: no enrolment was sent, this form is not connected yet.",
      qH: "At the desk.", qP: "The questions reception gets every day.", qN: "Now serving", qC: "Didn’t find your answer? Message us on WhatsApp, an adviser replies during opening hours.", waT: "Message us on WhatsApp",
      F: [["Do I need the baccalaureate to become a customs declarant?", "Yes, for this course we ask for the baccalaureate. For shipping agent, port logistics and English, the final year of secondary is enough."], ["Is the course enough to open a customs brokerage?", "No. The customs broker licence is granted by the customs administration under its own conditions. Our course prepares you for the job and for company roles."], ["Are the classes practical?", "Yes: real invoices, anonymised real bills of lading, assessment exercises and supervised visits to port areas when allowed."], ["Can I pay in instalments?", "Yes, in 3 instalments with no fees. Employees sent by their company can get an agreement and an invoice."], ["Are there evening classes?", "Yes, 17:30 to 20:00, three evenings a week, for people already working."], ["What goes in the file?", "2 photos, a copy of your ID card, birth certificate 12S, a copy of your latest diploma and the 2,000 DA file fee."]],
      foA: "A fictional freight, customs and trade school, Oran.", foH: "Hours", foHv: "Saturday → Thursday, 8:30 – 17:00. Evening classes 17:30 – 20:00.", foL: "Address", foLv: "Seafront, Oran (demo address).", foC: "Contact", foCv: "Phone and WhatsApp: demo number.",
      foot: "© 2026 Marsa, a fictional school.", by: "Website by", photos: "Photos: Unsplash,", waDemo: "AFEX Digital demo: the WhatsApp number is not connected yet.", lang: "Language", heroAlt: "The port of Oran, its silos and Murdjadjo mountain", title: "Marsa, freight and customs school in Oran", loc: "en-GB" }
  };
  var PORTS = ["tampon", "navire", "contrat", "quai", "camion"];

  var lang = "fr", sel = 0, opened = [0], fob = 20000, fret = 2500, cat = 1, tva = 0, inc = "FOB", ready = false, dyn = [], heroK = 0, heroT = null, qn = 1;
  try { var sv = localStorage.getItem("marsa-lang"); if (I[sv]) lang = sv; } catch (e) {}
  var today = new Date(); today.setHours(12, 0, 0, 0);
  function startOf(c) { var d = new Date(today); d.setDate(d.getDate() + c.nx); while (d.getDay() === 5) d.setDate(d.getDate() + 1); return d; }
  function fmt(d, o) { try { return new Intl.DateTimeFormat(lang === "ar" ? "ar-DZ-u-nu-latn" : I[lang].loc, o).format(d); } catch (e) { return d.toDateString(); } }
  function toast(t) { var el = $("#toast"); el.textContent = t; el.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(function () { el.classList.remove("on"); }, 4200); }
  function go(s) { var el = $(s); if (!el) return; if (lenis) lenis.scrollTo(el, { offset: -80 }); else el.scrollIntoView(); }

  /* split flap */
  var CH = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  function flap(el, text) {
    if (lang === "ar" || STATIC) { el.textContent = text; return; }
    text = text.toUpperCase();
    el.innerHTML = text.split("").map(function (c) { return '<i class="' + (c === " " ? "sp" : "") + '">' + (c === " " ? "&nbsp;" : c) + "</i>"; }).join("");
    el.setAttribute("aria-label", text);
    $$("i", el).forEach(function (s, k) { var fin = text[k]; if (fin === " ") return; var n = 4 + Math.floor(Math.random() * 6), j = 0; s.textContent = CH[Math.floor(Math.random() * CH.length)]; setTimeout(function tick() { if (j++ < n) { s.textContent = CH[Math.floor(Math.random() * CH.length)]; setTimeout(tick, 45); } else s.textContent = fin; }, k * 22); });
  }
  function heroFlap() { var c = C[heroK % C.length]; flap($("#heroFlap"), L(c.t) + " · " + fmt(startOf(c), { day: "numeric", month: "short" })); }

  /* terminal */
  function renderStack() {
    var t = I[lang];
    $("#stack").innerHTML = C.map(function (c, i) { var on = opened.indexOf(i) > -1; return '<button type="button" class="ctn" style="--c:' + c.col + (c.ink ? ";color:#14161A" : "") + '" data-c="' + i + '" aria-pressed="' + on + '" aria-label="' + t.open + " : " + L(c.t) + '"><span class="inside"><small dir="ltr">' + c.code + "</small><b>" + L(c.t) + '</b></span><span class="dr dl"></span><span class="dr drr"></span><span class="code">' + c.code + '</span><span class="ttl">' + L(c.t) + "</span></button>"; }).join("");
  }
  function renderManif() {
    var t = I[lang], c = C[sel];
    $("#manif").innerHTML = '<div class="ph">' + img(c.img, "(min-width:1060px) 40vw, 92vw") + '</div><div class="bd"><small class="mono" dir="ltr" style="color:var(--rust)">' + c.code + "</small><h3>" + L(c.t) + '</h3><div class="kv"><div><small>' + t.kv[0] + "</small><b>" + t.mo.replace("{n}", c.m) + "</b></div><div><small>" + t.kv[1] + "</small><b>" + t.hrs.replace("{n}", c.h) + "</b></div><div><small>" + t.kv[2] + "</small><b>" + L(c.niv) + "</b></div><div><small>" + t.kv[3] + "</small><b>" + da(c.p) + '</b></div></div><ol class="mods">' + L(c.mod).map(function (m, k) { return "<li><span>" + String(k + 1).padStart(2, "0") + "</span>" + m + "</li>"; }).join("") + '</ol><p class="jobs"><b>' + t.jobs + "</b> " + L(c.job) + '</p><a class="btn rust" href="#inscription" data-book="' + sel + '">' + t.book + '</a> <small class="mono" style="color:var(--ink2);margin-inline-start:10px">' + t.inst.replace("{p}", da(Math.ceil(c.p / 300) * 100)) + "</small></div>";
  }
  /* calculator */
  function renderCin() {
    var t = I[lang];
    $("#cin").innerHTML = '<div class="row"><label>' + t.xFob + '<input type="number" id="fob" min="0" step="500" value="' + fob + '" inputmode="numeric"></label><label>' + t.xFret + '<input type="number" id="fret" min="0" step="100" value="' + fret + '" inputmode="numeric"></label></div><div><span style="display:block;font-size:.92rem;color:#C9CCD3;margin-bottom:8px">' + t.xCat + '</span><div class="chips" id="cats">' + t.cats.map(function (c, i) { return '<button type="button" data-cat="' + i + '" aria-pressed="' + (i === cat) + '">' + c[0] + "<small>" + c[1] + "</small></button>"; }).join("") + '</div></div><div><span style="display:block;font-size:.92rem;color:#C9CCD3;margin-bottom:8px">' + t.xTva + '</span><div class="chips" id="tvas">' + t.tvas.map(function (c, i) { return '<button type="button" data-tva="' + i + '" aria-pressed="' + (i === tva) + '">' + c[0] + "<small>" + c[1] + "</small></button>"; }).join("") + "</div></div>";
  }
  function renderRcpt() {
    var t = I[lang], ins = (fob + fret) * .005, cif = (fob + fret + ins) * RATE, dd = cif * [.05, .15, .3][cat], tv = (cif + dd) * [.19, .09][tva], tot = dd + tv, all = cif + tot;
    $("#rcpt").innerHTML = "<h3>" + t.rT + '</h3><div class="ln"><span>' + t.rIns + "</span><b>" + num(ins) + ' €</b></div><div class="ln"><span>' + t.rCif + "<small>" + t.rCifS.replace("{r}", RATE) + "</small></span><b>" + da(cif) + '</b></div><div class="ln"><span>' + t.rDd + " (" + t.cats[cat][0] + ")</span><b>" + da(dd) + '</b></div><div class="ln"><span>' + t.rTva + " (" + t.tvas[tva][0] + ")<small>" + t.rTvaS + "</small></span><b>" + da(tv) + '</b></div><div class="tot"><span>' + t.rTot + "</span><b>" + da(tot) + '</b></div><div class="bar" aria-hidden="true"><i style="flex-grow:' + cif + ';background:var(--sea)"></i><i style="flex-grow:' + dd + ';background:var(--rust)"></i><i style="flex-grow:' + tv + ';background:var(--sig)"></i></div><div class="legend"><span><i style="background:var(--sea)"></i>' + t.lg[0] + '</span><span><i style="background:var(--rust)"></i>' + t.lg[1] + '</span><span><i style="background:var(--sig)"></i>' + t.lg[2] + '</span></div><div class="ln" style="margin-top:10px;border-bottom:0"><span>' + t.rCost + "</span><b>" + da(all) + '</b></div><p class="note">' + t.rNote.replace("{r}", RATE) + "</p>";
  }
  /* incoterms */
  function renderInco(anim) {
    var t = I[lang], r = INC[inc];
    $("#terms").innerHTML = Object.keys(INC).map(function (k) { return '<button type="button" data-inc="' + k + '" aria-pressed="' + (k === inc) + '">' + k + "</button>"; }).join("");
    $("#terms").setAttribute("aria-label", t.n3);
    if (!$("#chain .st")) $("#chain").innerHTML = '<div class="risk"><small></small></div>' + t.steps.map(function (s, i) { return '<div class="st"><span>' + String(i + 1).padStart(2, "0") + "</span>" + s + "</div>"; }).join("");
    $$("#chain .st").forEach(function (el, i) { el.lastChild.textContent = t.steps[i]; el.classList.toggle("s", !!r[i]); el.classList.toggle("rk", i === r[9]); });
    var rk = $("#chain .risk"); rk.querySelector("small").textContent = t.risk; rk.style.left = doc.dir === "rtl" ? "auto" : (r[9] / 9 * 100) + "%"; rk.style.right = doc.dir === "rtl" ? (r[9] / 9 * 100) + "%" : "auto";
    $("#idesc").innerHTML = "<b>" + inc + "</b> · " + t.idesc[inc];
    if (anim && !STATIC) gsap.fromTo("#idesc", { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .4, clearProps: "transform,opacity" });
  }
  /* board */
  function status(c) { return !c.left ? "full" : c.left <= 3 ? "last" : c.nx <= 21 ? "go" : "ok"; }
  function renderBoard() {
    var t = I[lang], rows = C.map(function (c, i) { return { c: c, i: i, d: startOf(c) }; });
    C.forEach(function (c, i) { var d = startOf(c); d.setDate(d.getDate() + 49); while (d.getDay() === 5) d.setDate(d.getDate() + 1); rows.push({ c: c, i: i, d: d, again: 1 }); });
    rows = rows.filter(function (r) { return (r.d - today) / 864e5 < 92; }).sort(function (a, b) { return a.d - b.d; });
    $("#board").innerHTML = '<div class="brow h"><span>' + t.bc[0] + '</span><span class="c2">' + t.bc[1] + '</span><span class="c3">' + t.bc[2] + '</span><span class="c4">' + t.bc[3] + "</span><span>" + t.bc[4] + "</span></div>" + rows.map(function (r, k) { var s = r.again ? "ok" : status(r.c); return '<button type="button" class="brow" data-book="' + r.i + '"' + (s === "full" ? " disabled" : "") + '><span class="fl" data-fl="' + L(r.c.t).replace(/"/g, "") + '">' + L(r.c.t) + '</span><span class="c2 mono">' + fmt(r.d, { weekday: "short", day: "numeric", month: "short" }) + '</span><span class="c3 mono">' + t.mo.replace("{n}", r.c.m) + '</span><span class="c4 mono" dir="ltr">' + ["A1", "A2", "B1", "B2", "C1", "C2"][r.i] + '</span><span class="stt ' + s + '">' + t.st[s].replace("{n}", r.c.left) + "</span></button>"; }).join("");
  }
  function flapBoard() { $$("#board .fl").forEach(function (el, k) { setTimeout(function () { flap(el, el.dataset.fl); }, k * 90); }); }
  /* ports */
  function renderPorts() { var t = I[lang]; $("#ports").innerHTML = t.ports.map(function (p, i) { return "<figure>" + img(PORTS[i], i === 0 ? "(min-width:1060px) 50vw, 100vw" : "(min-width:1060px) 25vw, 50vw") + "<figcaption><b>" + p[0] + "</b><small>" + p[1] + "</small></figcaption></figure>"; }).join(""); }
  /* form */
  function renderForm() {
    var t = I[lang], f = $("#f"), keep = f.elements.length ? { name: f.name.value, tel: f.tel.value } : null;
    var radios = function (name, arr) { return '<div class="radios">' + arr.map(function (x, i) { return '<label><input type="radio" name="' + name + '" value="' + i + '"' + (i ? "" : " checked") + ">" + x + "</label>"; }).join("") + "</div>"; };
    f.innerHTML = '<div class="dtop"><b>' + t.dT + "</b><span>" + t.dN + '</span><span class="flags" aria-hidden="true">' + flags(18) + '</span></div><div class="dgrid"><div class="box s2"><label for="fn"><i>1</i>' + t.d1 + '</label><input id="fn" name="name" autocomplete="name"></div><div class="box s2"><label for="ft"><i>2</i>' + t.d2 + '</label><input id="ft" name="tel" type="tel" inputmode="tel" placeholder="05 / 06 / 07 …" autocomplete="tel"></div><div class="box s2"><label for="fj"><i>3</i>' + t.d3 + '</label><select id="fj" name="job">' + C.map(function (c, i) { return '<option value="' + i + '"' + (i === sel ? " selected" : "") + (c.left ? "" : " disabled") + ">" + L(c.t) + "</option>"; }).join("") + '</select></div><div class="box"><label for="fw"><i>4</i>' + t.d4 + '</label><select id="fw" name="wil">' + WIL.map(function (w) { return "<option>" + w + "</option>"; }).join("") + "<option>" + t.other + '</option></select></div><div class="box"><label for="fv"><i>5</i>' + t.d5 + '</label><select id="fv" name="niv">' + t.nivs.map(function (n, i) { return '<option value="' + i + '"' + (i === 1 ? " selected" : "") + ">" + n + "</option>"; }).join("") + '</select></div><fieldset class="box s2"><legend><i>6</i>' + t.d6 + "</legend>" + radios("hr", t.hrs2) + '</fieldset><fieldset class="box s2"><legend><i>7</i>' + t.d7 + "</legend>" + radios("sit", t.sits) + '</fieldset></div><div class="dfoot"><p id="msg" role="status"></p><button class="btn rust" type="submit">' + t.send + '</button></div><div class="stampd" id="stampd" aria-hidden="true">' + t.stamp + "</div>";
    if (keep) { f.name.value = keep.name; f.tel.value = keep.tel; }
  }
  function renderFaq() { var t = I[lang]; $("#tickets").innerHTML = t.F.map(function (f, i) { return '<li><button type="button" aria-expanded="false" aria-controls="q' + i + '" data-q="' + i + '"><span class="n" dir="ltr">A-' + String(i + 1).padStart(2, "0") + "</span><span>" + f[0] + '</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button><div class="a" id="q' + i + '" hidden>' + f[1] + "</div></li>"; }).join(""); }
  function selectC(i) { sel = i; if (opened.indexOf(i) < 0) opened.push(i); renderManif(); $$("#stack .ctn").forEach(function (b, k) { b.setAttribute("aria-pressed", opened.indexOf(k) > -1); }); var s = $("#fj"); if (s) s.value = i; }

  function render() {
    var t = I[lang];
    $("#h1").innerHTML = t.h1;
    renderStack(); renderManif(); renderCin(); renderRcpt(); $("#chain").innerHTML = ""; renderInco(false); renderBoard(); renderPorts(); renderForm(); renderFaq(); heroFlap();
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
    try { localStorage.setItem("marsa-lang", l); } catch (e) {}
    render();
    if (ready) { bindDynamic(); ScrollTrigger.refresh(); }
  }

  /* events */
  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.l !== lang) setLang(b.dataset.l); }); });
  $("#stack").addEventListener("click", function (e) { var b = e.target.closest(".ctn"); if (!b) return; selectC(+b.dataset.c); if (innerWidth < 1060) go("#manif"); });
  $("#cin").addEventListener("input", function (e) { if (e.target.id === "fob") fob = Math.max(0, +e.target.value || 0); if (e.target.id === "fret") fret = Math.max(0, +e.target.value || 0); renderRcpt(); });
  $("#cin").addEventListener("click", function (e) { var c = e.target.closest("[data-cat]"), v = e.target.closest("[data-tva]"); if (c) cat = +c.dataset.cat; if (v) tva = +v.dataset.tva; if (c || v) { $$("#cats button").forEach(function (b) { b.setAttribute("aria-pressed", +b.dataset.cat === cat); }); $$("#tvas button").forEach(function (b) { b.setAttribute("aria-pressed", +b.dataset.tva === tva); }); renderRcpt(); } });
  $("#terms").addEventListener("click", function (e) { var b = e.target.closest("[data-inc]"); if (b) { inc = b.dataset.inc; renderInco(true); } });
  document.addEventListener("click", function (e) { var b = e.target.closest("[data-book]"); if (!b || b.disabled) return; e.preventDefault(); selectC(+b.dataset.book); go("#inscription"); setTimeout(function () { var n = $("#fn"); if (n) n.focus({ preventScroll: true }); }, 900); });
  $("#tickets").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; var on = b.getAttribute("aria-expanded") !== "true"; b.setAttribute("aria-expanded", on); $("#" + b.getAttribute("aria-controls")).hidden = !on; if (on) { qn = +b.dataset.q + 1; $("#qnum").textContent = "A-" + String(qn).padStart(2, "0"); if (!STATIC) gsap.fromTo("#qnum", { scale: 1.3, color: "#fff" }, { scale: 1, color: "#F2C230", duration: .5, clearProps: "transform,color" }); } if (ready) ScrollTrigger.refresh(); });
  $("#f").addEventListener("change", function (e) { if (e.target.name === "job") { sel = +e.target.value; renderManif(); } });
  $("#f").addEventListener("submit", function (e) { e.preventDefault(); var f = e.target, t = I[lang], m = $("#msg"); if (!f.name.value.trim() || !/^0[5-7]\d{8}$/.test(f.tel.value.replace(/\s/g, ""))) { m.textContent = t.err; m.className = "err"; (f.name.value.trim() ? f.tel : f.name).focus(); return; } m.className = ""; m.textContent = t.demo; $("#stampd").classList.add("on"); });
  $("#waf").addEventListener("click", function () { toast(I[lang].waDemo); });
  $("#qwa").addEventListener("click", function () { toast(I[lang].waDemo); });

  var lenis = null;
  setLang(lang);
  if (STATIC) return;

  gsap.registerPlugin(ScrollTrigger);
  lenis = window.Lenis ? new Lenis({ lerp: 0.1 }) : null;
  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    document.addEventListener("click", function (e) { var a = e.target.closest('a[href^="#"]'); if (!a || e.defaultPrevented) return; var id = a.getAttribute("href"); if (id.length < 2 || !$(id)) return; e.preventDefault(); lenis.scrollTo($(id), { offset: -70 }); });
  }
  heroT = setInterval(function () { heroK++; heroFlap(); }, 4200);
  gsap.from(".hero h1, .hero p, .hero .acts", { y: 40, opacity: 0, duration: 1, stagger: .1, ease: "power3.out" });
  gsap.from(".bl", { y: 60, rotation: 3, opacity: 0, duration: 1.1, delay: .3, ease: "power3.out" });
  gsap.fromTo(".hero > img", { scale: 1.12 }, { scale: 1, duration: 2.2, ease: "power2.out" });
  gsap.to(".hero > img", { yPercent: 12, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  ScrollTrigger.batch("[data-up]", { start: "top 88%", once: true, onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, duration: .8, stagger: .08, ease: "power3.out" }); } });

  function bindDynamic() {
    [].concat.apply([], dyn).forEach(function (x) { if (x.targets || x.getChildren) x.revert(); else if (x.kill) x.kill(); }); dyn = [];
    dyn.push(gsap.fromTo("#stack .ctn", { y: -120, opacity: 0 }, { y: 0, opacity: 1, duration: .9, stagger: { each: .12, from: "end" }, ease: "bounce.out", clearProps: "transform,opacity", scrollTrigger: { trigger: "#stack", start: "top 80%" } }));
    dyn.push(ScrollTrigger.create({ trigger: "#board", start: "top 80%", once: true, onEnter: flapBoard }));
    dyn.push(gsap.fromTo("#ports figure", { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", duration: 1, stagger: .1, ease: "power3.inOut", clearProps: "clipPath", scrollTrigger: { trigger: "#ports", start: "top 80%" } }));
    dyn.push(gsap.fromTo("#chain .st", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .5, stagger: .05, clearProps: "transform,opacity", scrollTrigger: { trigger: "#chain", start: "top 85%" } }));
  }
  bindDynamic();
  ready = true;
  var rz, lw = innerWidth; window.addEventListener("resize", function () { if (innerWidth === lw) return; lw = innerWidth; clearTimeout(rz); rz = setTimeout(function () { ScrollTrigger.refresh(); }, 300); });
})();
