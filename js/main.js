/* ============================================================
   Rim Ghannam — Portfolio Systèmes & Réseaux
   Navigation, animations, effet machine à écrire, compteurs,
   barres de compétences, onglets d'extraits de code.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- navbar : fond au scroll ---------- */
  const nav = document.getElementById("nav");
  const onScrollNav = () => nav.classList.toggle("is-scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScrollNav, { passive: true });
  onScrollNav();

  /* ---------- menu mobile ---------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );

  /* ---------- lien actif selon la section visible ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const linkFor = (id) => navLinks.querySelector(`a[href="#${id}"]`);
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.querySelectorAll(".nav__link").forEach((l) => l.classList.remove("is-active"));
        const link = linkFor(entry.target.id);
        if (link) link.classList.add("is-active");
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => sectionObserver.observe(s));

  /* ---------- apparitions au scroll ---------- */
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* ---------- effet machine à écrire ---------- */
  const typedEl = document.getElementById("typed");
  const phrases = [
    "Administration Linux & Windows Server",
    "Haute disponibilité : HAProxy · Keepalived · GlusterFS",
    "Réseau & sécurité : Cisco · HPE · Fortinet · Stormshield",
    "Monitoring : Grafana · Loki · PRTG",
    "Automatisation : Bash · Python · Ansible",
  ];
  let pIdx = 0, cIdx = 0, deleting = false;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function typeLoop() {
    const phrase = phrases[pIdx];
    typedEl.textContent = phrase.slice(0, cIdx);
    let delay;
    if (!deleting) {
      cIdx++;
      delay = 45;
      if (cIdx > phrase.length) { deleting = true; delay = 2200; }
    } else {
      cIdx--;
      delay = 22;
      if (cIdx === 0) { deleting = false; pIdx = (pIdx + 1) % phrases.length; delay = 350; }
    }
    setTimeout(typeLoop, delay);
  }
  if (typedEl) {
    if (reduceMotion) typedEl.textContent = phrases[0];
    else typeLoop();
  }

  /* ---------- compteurs animés ---------- */
  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const countObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (reduceMotion) {
          entry.target.textContent = entry.target.dataset.count + (entry.target.dataset.suffix || "");
        } else {
          animateCount(entry.target);
        }
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.6 }
  );
  document.querySelectorAll("[data-count]").forEach((el) => countObserver.observe(el));

  /* ---------- barres de compétences ---------- */
  const barObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.style.width = entry.target.dataset.level + "%";
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.4 }
  );
  document.querySelectorAll(".skill-bar__fill").forEach((el) => barObserver.observe(el));

  /* ---------- onglets des extraits de code ---------- */
  document.querySelectorAll("[data-code-tabs]").forEach((block) => {
    const tabs = block.querySelectorAll(".code-tabs__tab");
    const panels = block.querySelectorAll(".code-tabs__panel");
    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => { t.classList.remove("is-active"); t.setAttribute("aria-selected", "false"); });
        panels.forEach((p) => p.classList.remove("is-active"));
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");
        panels[i].classList.add("is-active");
      });
    });

    const copyBtn = block.querySelector(".code-tabs__copy");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        const active = block.querySelector(".code-tabs__panel.is-active code");
        if (!active) return;
        navigator.clipboard.writeText(active.textContent).then(() => {
          copyBtn.textContent = "copié ✓";
          copyBtn.classList.add("is-copied");
          setTimeout(() => {
            copyBtn.textContent = "copier";
            copyBtn.classList.remove("is-copied");
          }, 1800);
        });
      });
    }
  });

  /* ---------- formulaire de contact ---------- */
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", () => {
      const btn = document.getElementById("sendBtn");
      const txt = document.getElementById("sendBtnText");
      btn.setAttribute("disabled", "true");
      txt.textContent = "Envoi en cours…";
    });
  }

  /* ---------- année du pied de page ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
