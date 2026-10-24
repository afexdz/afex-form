/* Lamsa : contenu FR / AR / EN et animations (GSAP + ScrollTrigger + SplitText + Lenis, en local) */
(function () {
  var doc = document.documentElement;
  var STATIC = doc.classList.contains("static") || !window.gsap || !window.ScrollTrigger;
  if (STATIC) doc.classList.add("static");
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  function pic(name, w, h, sizes) {
    return '<img src="assets/img/' + name + '-800.webp" srcset="assets/img/' + name + '-800.webp 800w, assets/img/' + name + '-1600.webp 1600w" sizes="' + (sizes || "45vw") + '" width="' + w + '" height="' + h + '" alt="" loading="lazy" decoding="async">';
  }

  var I = {
    fr: { brand: "Lamsa", n1: "Le fil d’or", n2: "Ateliers", n3: "Horaires", cta1: "S’inscrire", cta2: "Voir les ateliers",
      h1: "Un métier entre vos mains.", lede: "Coiffure, esthétique, couture et broderie de Constantine, en groupes réservés aux femmes, avec un diplôme à la fin.",
      bdg: "Groupes de femmes", bdgP: "formatrices, matin ou après-midi",
      fH: "Le fil d’or de Constantine.", fP: "La fetla et le majboud brodent l’or sur le velours de la gandoura et du karakou. À l’atelier, vous apprenez le tracé, le rembourrage et le point, jusqu’à la pièce finie.",
      f1: "Fetla", f1p: "un fil d’or torsadé, posé point par point", f2: "Majboud", f2p: "l’or tendu sur un carton découpé, en relief",
      aH: "Trois ateliers", aP: "Chaque atelier a ses formatrices, son matériel et ses modèles pour s’exercer.",
      lH: "Les tenues de nos traditions", lP: "Karakou, caftan, henné de mariée : les pièces et les gestes que vous apprenez à reproduire.",
      sH: "La semaine à l’institut", sP: "Choisissez le groupe du matin ou de l’après-midi, selon vos journées.",
      note: "Tous les groupes sont encadrés par des formatrices. Garderie possible pour les enfants de 3 à 6 ans, sur demande.",
      cH: "À Constantine, la ville des ponts.", cP: "L’institut est au centre-ville, à quelques minutes du pont Sidi M’Cid, entre la médina et le quartier des tailleurs.",
      c1: "Accueil", c1v: "Du samedi au mercredi, de 8 h 30 à 17 h", c2: "Accès", c2v: "Tramway et téléphérique de Constantine",
      iH: "Réservez votre place", iP: "Laissez vos coordonnées : l’institut vous rappelle pour fixer une visite des ateliers.",
      l1: "Nom complet", l2: "Téléphone", l3: "Formation", l4: "Groupe", send: "Envoyer ma demande",
      foot: "© 2026 Lamsa, institut de beauté et de couture, Constantine.", by: "Site réalisé par", choose: "Choisir",
      err: "Indiquez votre nom et un numéro de téléphone valide.", demo: "Démo AFEX Digital : aucune demande n’a été envoyée, ce formulaire n’est pas encore connecté.",
      lang: "Langue", photos: "Photographies :", title: "Lamsa, institut de coiffure, esthétique et couture à Constantine",
      karakouAlt: "Karakou en velours rouge brodé d’or", bridgeAlt: "Plaque du pont Sidi M’Cid en arabe et en français", bridge2Alt: "Pile du pont Sidi M’Cid au-dessus de Constantine", gorgeAlt: "Les gorges du Rhumel et la vieille ville de Constantine", hennaAlt: "Mains de mariée ornées de henné",
      days: ["Samedi", "Dimanche", "Lundi", "Mardi", "Mercredi"], th: ["Jour", "Matin, 9 h à 12 h", "Après-midi, 13 h 30 à 16 h 30", "Atelier libre"], groups: ["Groupe du matin", "Groupe de l’après-midi"], free: "Pratique encadrée", none: "Fermé" },
    ar: { brand: "لمسة", n1: "الخيط الذهبي", n2: "الورشات", n3: "المواعيد", cta1: "سجّلي الآن", cta2: "اكتشفي الورشات",
      h1: "حرفة بين يديكِ.", lede: "الحلاقة، التجميل، الخياطة والطرز القسنطيني، في أفواج خاصة بالنساء، مع شهادة في النهاية.",
      bdg: "أفواج نسائية", bdgP: "مكوّنات، صباحًا أو مساءً",
      fH: "خيط قسنطينة الذهبي.", fP: "الفتلة والمجبود يطرزان الذهب على قطيفة القندورة والقفطان. في الورشة تتعلّمين الرسم، الحشو والغرزة حتى القطعة النهائية.",
      f1: "الفتلة", f1p: "خيط ذهبي مفتول يوضع غرزة بغرزة", f2: "المجبود", f2p: "ذهب مشدود على كرتون مقصوص، بارز",
      aH: "ثلاث ورشات", aP: "لكل ورشة مكوّناتها وعتادها ونماذجها للتدرّب.",
      lH: "لباس تقاليدنا", lP: "القرقون، القفطان، حناء العروس: القطع والحركات التي تتعلّمين إعادتها.",
      sH: "الأسبوع في المعهد", sP: "اختاري فوج الصباح أو المساء حسب أيامك.",
      note: "كل الأفواج تؤطرها مكوّنات. حضانة ممكنة للأطفال من 3 إلى 6 سنوات عند الطلب.",
      cH: "في قسنطينة، مدينة الجسور.", cP: "يقع المعهد في وسط المدينة، على بعد دقائق من جسر سيدي مسيد، بين المدينة القديمة وحي الخياطين.",
      c1: "الاستقبال", c1v: "من السبت إلى الأربعاء، من 8:30 إلى 17:00", c2: "الوصول", c2v: "الترامواي والمصعد الهوائي بقسنطينة",
      iH: "احجزي مكانك", iP: "اتركي معلوماتك: يتصل بك المعهد لتحديد زيارة للورشات.",
      l1: "الاسم الكامل", l2: "الهاتف", l3: "التكوين", l4: "الفوج", send: "أرسلي طلبي",
      foot: "© 2026 لمسة، معهد التجميل والخياطة، قسنطينة.", by: "موقع من إنجاز", choose: "اختاري",
      err: "أدخلي اسمك ورقم هاتف صحيح.", demo: "عرض AFEX Digital: لم يُرسل أي طلب، هذا النموذج غير متصل بعد.",
      lang: "اللغة", photos: "الصور:", title: "لمسة، معهد الحلاقة والتجميل والخياطة بقسنطينة",
      karakouAlt: "قرقون من القطيفة الحمراء مطرز بالذهب", bridgeAlt: "لافتة جسر سيدي مسيد بالعربية والفرنسية", bridge2Alt: "ركيزة جسر سيدي مسيد فوق قسنطينة", gorgeAlt: "خوانق الرمال والمدينة القديمة بقسنطينة", hennaAlt: "يدا عروس مزينتان بالحناء",
      days: ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء"], th: ["اليوم", "الصباح، 9:00 إلى 12:00", "المساء، 13:30 إلى 16:30", "ورشة حرة"], groups: ["فوج الصباح", "فوج المساء"], free: "تطبيق مؤطَّر", none: "مغلق" },
    en: { brand: "Lamsa", n1: "The gold thread", n2: "Workshops", n3: "Timetable", cta1: "Enrol now", cta2: "See the workshops",
      h1: "A trade in your hands.", lede: "Hairdressing, beauty, sewing and Constantine embroidery, in women-only groups, with a diploma at the end.",
      bdg: "Women-only groups", bdgP: "women trainers, mornings or afternoons",
      fH: "Constantine’s gold thread.", fP: "Fetla and majboud embroider gold onto the velvet of the gandoura and the karakou. In the workshop you learn the tracing, the padding and the stitch, up to the finished piece.",
      f1: "Fetla", f1p: "a twisted gold thread, laid stitch by stitch", f2: "Majboud", f2p: "gold stretched over cut card, in relief",
      aH: "Three workshops", aP: "Each workshop has its own trainers, equipment and models to practise on.",
      lH: "The garments of our traditions", lP: "Karakou, caftan, bridal henna: the pieces and gestures you learn to reproduce.",
      sH: "A week at the institute", sP: "Pick the morning or the afternoon group, to fit your days.",
      note: "Every group is led by women trainers. Childcare for children aged 3 to 6 on request.",
      cH: "In Constantine, the city of bridges.", cP: "The institute is in the city centre, minutes from the Sidi M’Cid bridge, between the old town and the tailors’ quarter.",
      c1: "Opening hours", c1v: "Saturday to Wednesday, 8:30 to 17:00", c2: "Getting here", c2v: "Constantine tramway and cable car",
      iH: "Book your place", iP: "Leave your details: the institute calls you back to arrange a visit of the workshops.",
      l1: "Full name", l2: "Phone", l3: "Course", l4: "Group", send: "Send my request",
      foot: "© 2026 Lamsa, beauty and sewing institute, Constantine.", by: "Website by", choose: "Choose",
      err: "Enter your name and a valid phone number.", demo: "AFEX Digital demo: no request was sent, this form is not connected yet.",
      lang: "Language", photos: "Photographs:", title: "Lamsa, hairdressing, beauty and sewing institute in Constantine",
      karakouAlt: "Red velvet karakou embroidered with gold", bridgeAlt: "Sidi M’Cid bridge plaque in Arabic and French", bridge2Alt: "Sidi M’Cid bridge pylon above Constantine", gorgeAlt: "The Rhumel gorge and the old town of Constantine", hennaAlt: "A bride’s hands decorated with henna",
      days: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"], th: ["Day", "Morning, 9:00 to 12:00", "Afternoon, 13:30 to 16:30", "Open workshop"], groups: ["Morning group", "Afternoon group"], free: "Supervised practice", none: "Closed" }
  };

  var ATS = [
    { key: "coif", img: "makeup2", w: 1600, h: 1067, k: { fr: "Atelier un", ar: "الورشة الأولى", en: "Workshop one" }, t: { fr: "Coiffure", ar: "الحلاقة", en: "Hairdressing" }, d: { fr: "Coupe, couleur, brushing et coiffures de fête, sur de vrais modèles, du premier geste au chignon de mariée.", ar: "القص، الصباغة، التمليس وتسريحات الأعراس، على نماذج حقيقية، من أول حركة إلى شينيون العروس.", en: "Cutting, colour, blow-drying and celebration styles on real models, from the first cut to the bridal updo." },
      c: [[{ fr: "Coiffure, diplôme", ar: "الحلاقة، بشهادة", en: "Hairdressing diploma" }, { fr: "6 mois", ar: "6 أشهر", en: "6 months" }, 60000], [{ fr: "Coiffure de mariée", ar: "تسريحات العروس", en: "Bridal hair" }, { fr: "1 mois", ar: "شهر واحد", en: "1 month" }, 22000], [{ fr: "Soins et lissage", ar: "العناية والتمليس", en: "Care and straightening" }, { fr: "3 semaines", ar: "3 أسابيع", en: "3 weeks" }, 18000]] },
    { key: "esth", img: "makeup", w: 1600, h: 1103, k: { fr: "Atelier deux", ar: "الورشة الثانية", en: "Workshop two" }, t: { fr: "Esthétique", ar: "التجميل", en: "Beauty" }, d: { fr: "Soins du visage, maquillage de mariée pour chaque tenue, henné de fête et onglerie.", ar: "العناية بالوجه، مكياج العروس لكل لباس، حناء الأعراس والأظافر.", en: "Facials, bridal make-up for every outfit, celebration henna and nails." },
      c: [[{ fr: "Esthéticienne, diplôme", ar: "مختصة تجميل، بشهادة", en: "Beauty therapist diploma" }, { fr: "5 mois", ar: "5 أشهر", en: "5 months" }, 55000], [{ fr: "Maquillage de mariée", ar: "مكياج العروس", en: "Bridal make-up" }, { fr: "1 mois", ar: "شهر واحد", en: "1 month" }, 25000], [{ fr: "Henné et ongles", ar: "الحناء والأظافر", en: "Henna and nails" }, { fr: "2 semaines", ar: "أسبوعان", en: "2 weeks" }, 15000]] },
    { key: "cout", img: "tailor", w: 1600, h: 1067, k: { fr: "Atelier trois", ar: "الورشة الثالثة", en: "Workshop three" }, t: { fr: "Couture et broderie", ar: "الخياطة والطرز", en: "Sewing and embroidery" }, d: { fr: "Patronage, coupe et montage, puis la broderie au fil d’or : fetla, majboud, karakou et gandoura.", ar: "الباترون، القص والتركيب، ثم الطرز بالخيط الذهبي: الفتلة، المجبود، القرقون والقندورة.", en: "Pattern making, cutting and assembly, then gold-thread embroidery: fetla, majboud, karakou and gandoura." },
      c: [[{ fr: "Couture, diplôme", ar: "الخياطة، بشهادة", en: "Dressmaking diploma" }, { fr: "6 mois", ar: "6 أشهر", en: "6 months" }, 48000], [{ fr: "Broderie fetla et majboud", ar: "طرز الفتلة والمجبود", en: "Fetla and majboud embroidery" }, { fr: "3 mois", ar: "3 أشهر", en: "3 months" }, 35000], [{ fr: "Karakou et caftan", ar: "القرقون والقفطان", en: "Karakou and caftan" }, { fr: "2 mois", ar: "شهران", en: "2 months" }, 30000]] }
  ];
  var COURSES = []; ATS.forEach(function (a) { a.c.forEach(function (c) { COURSES.push(c); }); });
  var LOOK = [[["caftan", 1600, 2133, { fr: "Caftan algérien", ar: "قفطان جزائري", en: "Algerian caftan" }, { fr: "atelier couture", ar: "ورشة الخياطة", en: "sewing workshop" }], ["henna2", 1600, 1067, { fr: "Henné de mariée", ar: "حناء العروس", en: "Bridal henna" }, { fr: "atelier esthétique", ar: "ورشة التجميل", en: "beauty workshop" }]],
    [["karakou2", 1600, 1600, { fr: "Karakou", ar: "القرقون", en: "Karakou" }, { fr: "broderie au fil d’or", ar: "طرز بالخيط الذهبي", en: "gold-thread embroidery" }]],
    [["caftan2", 1600, 1902, { fr: "Caftan brodé", ar: "قفطان مطرز", en: "Embroidered caftan" }, { fr: "atelier couture", ar: "ورشة الخياطة", en: "sewing workshop" }]]];
  var SCH = [["coif", "esth", "cout"], ["cout", "coif", "esth"], ["esth", "cout", "coif"], ["coif", "esth", "cout"], ["cout", "coif", null]];
  var CREDITS = [["Mouhieddine Kherouatou", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:La_vieille_ville_de_Constantine_et_le_pont_Sidi_Rached.jpg"], ["Benaissa Fatima Zohra", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Une_tenue_Alg%C3%A9rienne_(Karakou).jpg"], ["Fatima-bennama", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Tenue_traditionnelle_alg%C3%A9rienne_%22caftan%22.jpg"], ["Amiraaz19", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Caftan_moderne_alg%C3%A9rien.jpg"], ["Radbenoukref", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Tenue_Alg%C3%A9rienne_traditionnelle_(karakou).jpg"], ["Doultraf", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Henn%C3%A9_de_mariage.jpg"], ["Fidelis Ogunseri", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Makeup_artist.jpg"], ["KelvinJM", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Bride_in_makeup_studio.jpg"], ["Igor Ovsyannykov", "CC0", "https://commons.wikimedia.org/wiki/File:Igor_Ovsyannykov_2017-05-08_(Unsplash).jpg"], ["Bernard Gagnon", "CC BY 4.0", "https://commons.wikimedia.org/wiki/File:Pont_de_Sidi_M%27Cid_01.jpg"], ["Rachid Hamatou", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:View_of_the_Rhumel_Gorge_and_the_Old_Town_of_Constantine,_Algeria.jpg"]];

  var lang = "fr", ready = false, split = null, dyn = [];
  try { var s = localStorage.getItem("lamsa-lang"); if (I[s]) lang = s; } catch (e) {}
  function money(n) { return n.toLocaleString(lang === "ar" ? "ar-DZ" : "fr-FR") + (lang === "ar" ? " دج" : " DA"); }

  function render() {
    var t = I[lang];
    $("#ats").innerHTML = ATS.map(function (a) {
      return '<article class="at"><figure class="rv">' + pic(a.img, a.w, a.h, "(min-width:960px) 45vw, 90vw") + '</figure><div><span class="k">' + a.k[lang] + '</span><h3>' + a.t[lang] + '</h3><p>' + a.d[lang] + '</p><ul>' +
        a.c.map(function (c) { var i = COURSES.indexOf(c); return '<li><span><b>' + c[0][lang] + '</b><small>' + c[1][lang] + '</small></span><span class="pr">' + money(c[2]) + '</span><a href="#inscription" data-k="' + i + '">' + t.choose + '</a></li>'; }).join("") + '</ul></div></article>';
    }).join("");
    $("#cols").innerHTML = LOOK.map(function (col) { return '<div class="col">' + col.map(function (x) { return '<figure class="tile">' + pic(x[0], x[1], x[2], "(min-width:960px) 30vw, 45vw") + '<figcaption><b>' + x[3][lang] + '</b><span>' + x[4][lang] + '</span></figcaption></figure>'; }).join("") + '</div>'; }).join("");
    var cats = {}; ATS.forEach(function (a) { cats[a.key] = a.t[lang]; });
    $("#tbl").innerHTML = '<thead><tr>' + t.th.map(function (h) { return '<th scope="col">' + h + '</th>'; }).join("") + '</tr></thead><tbody>' + t.days.map(function (d, i) { var r = SCH[i]; return '<tr><td>' + d + '</td><td><span class="slot">' + cats[r[0]] + '</span></td><td><span class="slot">' + cats[r[1]] + '</span></td><td class="' + (r[2] ? "" : "off") + '">' + (r[2] ? t.free + ", " + cats[r[2]] : t.none) + '</td></tr>'; }).join("") + '</tbody>';
    $("#sel").innerHTML = COURSES.map(function (c, i) { return '<option value="' + i + '">' + c[0][lang] + '</option>'; }).join("");
    $("#grp").innerHTML = t.groups.map(function (g) { return "<option>" + g + "</option>"; }).join("");
    $("#credits").innerHTML = t.photos + " " + CREDITS.map(function (c) { return '<a href="' + c[2] + '" target="_blank" rel="noopener">' + c[0] + '</a> (' + c[1] + ')'; }).join(", ") + ", Wikimedia Commons.";
  }

  function setLang(l) {
    lang = l; var t = I[l];
    if (split) { split.revert(); split = null; }
    doc.lang = l; doc.dir = l === "ar" ? "rtl" : "ltr"; document.title = t.title;
    $$("[data-i]").forEach(function (e) { e.textContent = t[e.dataset.i]; });
    $$("[data-alt]").forEach(function (e) { e.alt = t[e.dataset.alt]; });
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.l === l); });
    $(".lang").setAttribute("aria-label", t.lang); $("#msg").textContent = "";
    try { localStorage.setItem("lamsa-lang", l); } catch (e) {}
    render();
    if (ready) { bindDynamic(); ScrollTrigger.refresh(); }
  }

  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.l !== lang) setLang(b.dataset.l); }); });
  $("#ats").addEventListener("click", function (e) { var a = e.target.closest("[data-k]"); if (a) $("#sel").value = a.dataset.k; });
  $("#f").addEventListener("submit", function (e) {
    e.preventDefault(); var t = I[lang], ok = this.name.value.trim() && /^0[5-7]\d{8}$/.test(this.tel.value.replace(/\s/g, ""));
    if (!ok) { $("#msg").textContent = t.err; (this.name.value.trim() ? this.tel : this.name).focus(); return; }
    $("#msg").textContent = t.demo;
  });
  var hd = $("#hd");
  function onScroll() { hd.classList.toggle("solid", window.scrollY > window.innerHeight * 0.55); }
  window.addEventListener("scroll", onScroll, { passive: true });

  setLang(lang);
  onScroll();
  if (STATIC) return;

  gsap.registerPlugin(ScrollTrigger, SplitText);
  var lenis = window.Lenis ? new Lenis({ lerp: 0.09 }) : null;
  if (lenis) {
    lenis.on("scroll", function () { ScrollTrigger.update(); onScroll(); });
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach(function (a) { a.addEventListener("click", function (e) { var id = a.getAttribute("href"); if (id.length < 2) return; var el = $(id); if (!el) return; e.preventDefault(); lenis.scrollTo(el, { offset: -70 }); }); });
  }

  function drawable(path) { var len = path.getTotalLength(); gsap.set(path, { strokeDasharray: len, strokeDashoffset: len }); return len; }

  /* ---------- hero ---------- */
  gsap.from("#heroImg", { scale: 1.18, duration: 2.6, ease: "power2.out" });
  gsap.set("#h1", { autoAlpha: 0 });
  document.fonts.ready.then(function () {
    gsap.set("#h1", { autoAlpha: 1 });
    split = SplitText.create("#h1", { type: "lines", mask: "lines", linesClass: "line" });
    gsap.from(split.lines, { yPercent: 115, duration: 1.2, stagger: .14, ease: "power4.out", delay: .3 });
  });
  gsap.from(".hero .row > *", { y: 30, opacity: 0, duration: 1, stagger: .15, delay: .9, ease: "power3.out" });
  drawable($("#heroThread"));
  gsap.to("#heroThread", { strokeDashoffset: 0, duration: 2.8, ease: "power2.inOut", delay: .6 });
  gsap.to("#heroImg", { yPercent: 10, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  /* ---------- the gold thread is embroidered as you scroll ---------- */
  drawable($("#filThread"));
  gsap.to("#filThread", { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: ".fil", start: "top 70%", end: "bottom 60%", scrub: true } });
  gsap.fromTo("#filImg", { scale: 1.3 }, { scale: 1, ease: "none", scrollTrigger: { trigger: ".fil", start: "top bottom", end: "center center", scrub: true } });

  ScrollTrigger.batch("[data-up]", { start: "top 88%", once: true, onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, duration: 1, stagger: .1, ease: "power3.out" }); } });
  $$(".px").forEach(function (im) { gsap.fromTo(im, { yPercent: -12 }, { yPercent: 0, ease: "none", scrollTrigger: { trigger: im.parentNode, start: "top bottom", end: "bottom top", scrub: true } }); });

  /* ---------- parts rebuilt on a language change ---------- */
  function bindDynamic() {
    dyn.forEach(function (x) { if (x.scrollTrigger) x.scrollTrigger.kill(); x.kill(); }); dyn = [];
    $$(".at").forEach(function (at) {
      var fig = $("figure", at), img = $("img", fig);
      dyn.push(gsap.fromTo(fig, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "power3.inOut", scrollTrigger: { trigger: at, start: "top 78%" } }));
      dyn.push(gsap.fromTo(img, { scale: 1.25 }, { scale: 1, duration: 1.8, ease: "power2.out", scrollTrigger: { trigger: at, start: "top 78%" } }));
      dyn.push(gsap.from($$("li", at), { y: 24, opacity: 0, duration: .7, stagger: .08, ease: "power3.out", scrollTrigger: { trigger: $("ul", at), start: "top 85%" } }));
    });
    var speeds = [40, -70, 60];
    $$("#cols .col").forEach(function (c, i) { dyn.push(gsap.fromTo(c, { y: speeds[i] }, { y: -speeds[i], ease: "none", scrollTrigger: { trigger: "#cols", start: "top bottom", end: "bottom top", scrub: true } })); });
    dyn.push(gsap.from("#tbl tbody tr", { x: doc.dir === "rtl" ? 50 : -50, opacity: 0, duration: .8, stagger: .08, ease: "power3.out", scrollTrigger: { trigger: "#tbl", start: "top 80%" } }));
  }
  bindDynamic();
  ready = true;
})();
