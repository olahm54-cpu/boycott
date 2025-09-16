const translations = {
  en: {
    logo: "Boycott Now",
    nav: { home: "Home", list: "Boycott List", research: "Research", action: "Take Action", about: "About" },
    hero: {
      title: "Your Money = Your Voice",
      text: "Together, we can stop funding injustice by making better choices. Boycotting works when we act as one.",
      btn: "See Boycott List"
    },
    cards: {
      c1t: "Who We Boycott", c1p: "Global brands tied to harmful practices.",
      c2t: "Why It Matters", c2p: "Every purchase is a vote for the world we want.",
      c3t: "What You Can Do", c3p: "Choose alternatives, spread the word, take action."
    },
    footer: "© 2025 Boycott Now. All rights reserved."
  },
  ar: {
    logo: "قاطع الآن",
    nav: { home: "الرئيسية", list: "قائمة المقاطعة", research: "الأدلة", action: "اتخذ إجراء", about: "من نحن" },
    hero: {
      title: "مالك = صوتك",
      text: "معًا يمكننا وقف تمويل الظلم من خلال اختيارات أفضل. المقاطعة تنجح عندما نتحد.",
      btn: "شاهد قائمة المقاطعة"
    },
    cards: {
      c1t: "من نقاطع", c1p: "شركات عالمية مرتبطة بممارسات ضارة.",
      c2t: "لماذا يهم", c2p: "كل عملية شراء هي تصويت للعالم الذي نريده.",
      c3t: "ما يمكنك فعله", c3p: "اختر البدائل، انشر الوعي، واتخذ إجراء."
    },
    footer: "© ٢٠٢٥ قاطع الآن. جميع الحقوق محفوظة."
  }
};

function setLanguage(lang) {
  const t = translations[lang];

  // Logo + Nav
  document.getElementById("site-logo").textContent = t.logo;
  document.getElementById("nav-home").textContent = t.nav.home;
  document.getElementById("nav-list").textContent = t.nav.list;
  document.getElementById("nav-research").textContent = t.nav.research;
  document.getElementById("nav-action").textContent = t.nav.action;
  document.getElementById("nav-about").textContent = t.nav.about;

  // Hero
  document.getElementById("hero-title").textContent = t.hero.title;
  document.getElementById("hero-text").textContent = t.hero.text;
  document.getElementById("hero-btn").textContent = t.hero.btn;

  // Cards
  document.getElementById("card1-title").textContent = t.cards.c1t;
  document.getElementById("card1-text").textContent = t.cards.c1p;
  document.getElementById("card2-title").textContent = t.cards.c2t;
  document.getElementById("card2-text").textContent = t.cards.c2p;
  document.getElementById("card3-title").textContent = t.cards.c3t;
  document.getElementById("card3-text").textContent = t.cards.c3p;

  // Footer
  document.getElementById("footer-text").textContent = t.footer;

  // Text direction
  document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
}
