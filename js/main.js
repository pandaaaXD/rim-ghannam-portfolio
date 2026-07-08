/* ============================================================
   Rim Ghannam — Portfolio Systèmes & Réseaux
   i18n FR/EN, navigation, animations, machine à écrire,
   compteurs, barres de compétences, onglets d'extraits de code.
   ============================================================ */

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ============================================================
     i18n — Français / English
     (le HTML est écrit en français ; les deux langues sont ici)
     ============================================================ */
  const I18N = {
    fr: {
      "nav.home": "Accueil",
      "nav.projects": "Projets",
      "nav.skills": "Compétences",
      "nav.path": "Parcours",
      "nav.contact": "Contact",

      "hero.eyebrow": "Disponible en CDI dès septembre 2026",
      "hero.title": "Rim <span class=\"gradient-text\">Ghannam</span><br /> Technicienne <em>Systèmes &amp; Réseaux</em>",
      "hero.summary": "3 ans d'expérience en alternance chez un hébergeur de données de santé (HDS) certifié ISO 27001. À l'aise aussi bien sur Linux que Windows Server, du ticketing aux projets d'infrastructure : haute disponibilité, cœur de réseau, monitoring et automatisation.",
      "btn.projects": "Voir mes projets",
      "btn.cv": "Télécharger mon CV",
      "btn.contact": "Me contacter",
      "stat.years": "ans d'alternance systèmes &amp; réseaux",
      "stat.support": "support &amp; gestion d'incidents",
      "stat.hds": "environnement HDS certifié",
      "term.hire": "./recruter_rim.sh",

      "proj.title": "Projets réalisés",
      "proj.sub": "Des projets d'infrastructure menés en production, en environnement hébergeur de données de santé (HDS, ISO 27001) chez Groupe CEGI.",
      "proj.note": "// les extraits de configuration ci-dessous sont anonymisés et reconstitués à partir de projets réels — aucune donnée client ni adresse de production.",
      "tag.infra": "PROJET INFRA",
      "tag.auto": "AUTOMATISATION",
      "tag.perso": "PROJET PERSO",
      "date.cegi": "Groupe CEGI · alternance",
      "date.ongoing": "en continu",
      "code.copy": "copier",
      "code.copied": "copié ✓",

      "glpi.title": "GLPI haute disponibilité (ITSM / CMDB + Ticketing)",
      "glpi.role": "Déploiement de bout en bout — architecture, installation, mise en production",
      "glpi.desc": "Déploiement d'une plateforme GLPI entièrement redondée sur 11 VM Debian (Hyper-V / SCVMM) : répartition de charge HAProxy + Keepalived (VIP), serveurs web Nginx/PHP, cluster MariaDB Galera (3 nœuds + arbitre garbd), stockage répliqué GlusterFS et SSO Microsoft Entra ID.",
      "diag.bar": "// schéma de l'infra en production",
      "diag.title": "Architecture GLPI — Haute Disponibilité (Production)",
      "diag.sub": "Réseau 192.168.0.0/24 · 11 VM Hyper-V / SCVMM (Debian)",
      "diag.users": "Utilisateurs",
      "diag.https": "Accès HTTPS",
      "diag.sso": "Authentification unique (SSO)",
      "diag.vip": "VIP (adresse virtuelle)",
      "diag.lb": "Répartition de charge — HAProxy 3.0.11 + Keepalived (VRRP)",
      "diag.ha1sub": "HAProxy + Keepalived (actif)",
      "diag.ha2sub": "HAProxy + Keepalived (secours)",
      "diag.web": "Serveurs web — Nginx + PHP 8.3 · GLPI 11.0.7",
      "diag.db": "Base de données — MariaDB Galera Cluster",
      "diag.garbd": "192.168.0.5 · garbd (arbitre / quorum)",
      "diag.dbnote": "réplication synchrone · écriture sur un nœud à la fois",
      "diag.storage": "Stockage partagé — GlusterFS (config/ · files/ · marketplace/)",
      "diag.fsnote": "volume répliqué entre les 3 nœuds (monté sur les serveurs web)",
      "diag.footer1": "Passerelle : 192.168.0.254   ·   DNS : 8.8.8.8   ·   Sous-réseau : 192.168.0.0/24",
      "diag.footer2": "Noms d'hôtes anonymisés (rôles génériques)",
      "glpi.i1": "<strong>Zéro point de défaillance unique</strong> : chaque brique (web, BDD, fichiers, load balancer) est redondée",
      "glpi.i2": "<strong>Bascule automatique</strong> : VIP Keepalived (VRRP) — la panne d'un nœud est transparente pour les utilisateurs",
      "glpi.i3": "<strong>Outil critique</strong> : le ticketing et l'inventaire de toute l'entreprise reposent sur cette plateforme",

      "net.title": "Modernisation du cœur de réseau du datacenter",
      "net.role": "Remplacement de switches obsolètes — préparation, configuration, migration",
      "net.desc": "Participation à la modernisation du cœur de réseau du datacenter : remplacement des commutateurs obsolètes, préparation des configurations (VLAN, agrégats de liens, spanning-tree) et migration des liaisons en limitant l'impact sur la production.",
      "net.i1": "<strong>Datacenter en production</strong> : migration préparée et jouée avec fenêtres de maintenance maîtrisées",
      "net.i2": "<strong>Configurations reproductibles</strong> : templates de config préparés et vérifiés avant chaque bascule",
      "net.i3": "<strong>Multi-constructeurs</strong> : environnement Cisco / HPE, firewalls Fortinet &amp; Stormshield en périphérie",

      "mon.title": "NOC — supervision centralisée Grafana (PRTG · ELK · Loki)",
      "mon.role": "Conception &amp; maintenance du NOC — dashboards, chaînes de données, scripts",
      "mon.desc": "Construction d'un NOC restitué dans Grafana pour superviser un parc hébergé multi-clients, avec deux usages complémentaires : un mur TV en mode kiosk qui montre l'état de santé applicatif global en temps réel (logs IIS / applicatifs via ELK — disponibilité, erreurs, SLA), et des dashboards d'investigation par client construits sur PRTG (CPU / RAM / disque par rôle serveur). La disponibilité synthétique est mesurée par des scripts Bash qui poussent vers Loki.",
      "mon.i1": "<strong>Le mur = coup d'œil</strong> : santé applicative globale depuis ELK, découpée en deux écrans qui tournent en playlist kiosk (30 s) — vert = tout va bien, rouge = on creuse",
      "mon.i2": "<strong>Le dashboard client = investigation</strong> : template PRTG multi-clients (via proxy Nginx) — CPU / RAM / disque par rôle serveur, rechargé sur le parc d'un client via une variable auto-remplie",
      "mon.i3": "<strong>Contrainte respectée</strong> : pipeline de logs intouchable → enrichissement par runtime fields dans les index templates Elasticsearch, qui survivent aux rollovers ILM",
      "mon.i4": "<strong>Parc multi-clients</strong> : serveurs classés par conventions de nommage (type d'infra × rôle) qui alimentent les dashboards templatisés",
      "mon.shot1": "// le mur TV (vue d'ensemble) — SLA depuis Loki, erreurs applicatives depuis ELK : vert = OK, rouge = on creuse",
      "mon.shot2": "// le dashboard client (investigation) — métriques PRTG : CPU / RAM / disque par serveur et par rôle (VDA Citrix, fichiers, SQL)",

      "auto.title": "Automatisation &amp; plans de continuité (PCA / PRA)",
      "auto.role": "Scripts Bash / Python, playbooks Ansible, participation aux PCA/PRA",
      "auto.desc": "Automatisation des tâches récurrentes d'administration (déploiement de configurations, vérifications de sauvegardes) avec Bash, Python et Ansible, et participation aux plans de continuité et de reprise d'activité — un enjeu central chez un hébergeur de données de santé.",
      "auto.i1": "<strong>Moins d'erreurs manuelles</strong> : les configurations passent par des playbooks reproductibles",
      "auto.i2": "<strong>Sauvegardes vérifiées</strong> : contrôles automatisés plutôt que « on croise les doigts »",
      "auto.i3": "<strong>Culture PCA/PRA</strong> : procédures de reprise documentées et testées",

      "web.title": "Développement web &amp; portfolio",
      "web.role": "HTML / CSS / JavaScript · Node.js · React",
      "web.desc": "En parallèle de l'infra, je développe des projets web — dont ce portfolio, codé à la main sans framework ni build. C'est aussi ce qui me rend à l'aise pour administrer des serveurs web (IIS, Apache/Nginx) : je sais ce qui tourne dessus.",
      "web.i1": "<strong>Ce site</strong> : HTML / CSS / JS purs, responsive, déployé sur GitHub Pages",
      "web.i2": "<strong>Code visible</strong> : sources publiées sur mon GitHub",

      "skills.title": "Compétences",
      "skills.sub": "Systèmes, réseau, sécurité, automatisation — le quotidien d'une technicienne infra.",
      "group.os": "Systèmes &amp; OS",
      "group.net": "Réseau &amp; Sécurité",
      "group.auto": "Automatisation &amp; Supervision",
      "group.dev": "Dev / Web &amp; Outils",
      "skill.virt": "Virtualisation (Hyper-V, Citrix)",
      "skill.ha": "Stockage &amp; HA (GlusterFS, HAProxy)",
      "skill.switch": "Switching Cisco / HPE (VLAN, LACP)",
      "skill.fw": "Firewalls Fortinet / Stormshield",
      "skill.cyber": "Cybersécurité (BUT parcours cyber)",
      "skill.docs": "Documentation &amp; procédures",
      "langs.title": "// langues",
      "lang.fr": "Français — C2",
      "lang.en": "Anglais — C2",
      "lang.ar": "Arabe — langue natale",
      "value.adapt.t": "Adaptabilité",
      "value.adapt.d": "Linux le matin, Windows Server l'après-midi, un incident réseau entre les deux.",
      "value.team.t": "Travail d'équipe",
      "value.team.d": "Trois ans en équipe infra : passations, astreintes, documentation partagée.",
      "value.patience.t": "Patience",
      "value.patience.d": "Indispensable au support N1/N2 — et pour diagnostiquer une panne intermittente.",
      "value.rigor.t": "Rigueur",
      "value.rigor.d": "Un environnement HDS certifié ISO 27001 ne laisse pas de place à l'à-peu-près.",

      "path.title": "Expérience &amp; Formation",
      "path.sub": "Trois ans d'alternance en production, un BUT orienté cybersécurité.",
      "tag.exp": "EXPÉRIENCE",
      "tag.edu": "FORMATION",
      "exp.date": "sept. 2023 — aujourd'hui",
      "exp.title": "Technicienne Systèmes &amp; Réseaux — Alternance",
      "exp.role": "Groupe CEGI · hébergeur de données de santé (HDS), certifié ISO 27001",
      "exp.i1": "Déploiement d'un <strong>GLPI haute disponibilité</strong> (GlusterFS, MariaDB, HAProxy + Keepalived)",
      "exp.i2": "<strong>Modernisation du cœur de réseau</strong> du datacenter : remplacement et configuration de switches",
      "exp.i3": "Mise en place d'un <strong>NOC Grafana</strong> fédérant ELK, Loki et PRTG",
      "exp.i4": "<strong>Support client N1/N2</strong> : ticketing et gestion des incidents",
      "exp.i5": "Administration <strong>Windows Server</strong> (ADDS, IIS, RDS) et <strong>Linux</strong>",
      "exp.i6": "Participation aux <strong>plans de continuité et de reprise d'activité</strong> (PCA/PRA)",
      "but.date": "diplôme : sept. 2026",
      "but.title": "BUT Réseaux &amp; Télécommunications — Parcours Cybersécurité",
      "but.role": "I.U.T. de Clermont-Ferrand (63) · Bac+3 en alternance",
      "but.desc": "Bachelor Universitaire de Technologie : réseaux, systèmes, téléphonie et cybersécurité — mené en alternance, donc appliqué en entreprise au fur et à mesure.",
      "bac.date": "juillet 2021",
      "bac.title": "Baccalauréat scientifique",
      "bac.role": "Shouf National College (SNC) — Liban",
      "hobbies.title": "// en dehors de l'infra",
      "hobby.guitar": "Guitare &amp; chant — 7 ans",
      "hobby.piano": "Piano — conservatoire, 2 ans",
      "hobby.gym": "Musculation — 1,5 an",

      "contact.title": "Contact",
      "contact.sub": "Un poste de technicienne / administratrice systèmes &amp; réseaux ? Parlons-en.",
      "contact.lead": "Je recherche un CDI de technicienne / administratrice systèmes &amp; réseaux, disponible dès septembre 2026 — basée à Clermont-Ferrand.",
      "contact.ping": "<span class=\"t-ok\">64 bytes</span> reçus — temps de réponse : <span class=\"t-ok\">&lt; 24h</span>",
      "social.cv": "CV (PDF)",
      "form.name": "Nom",
      "form.email": "Email",
      "form.message": "Message",
      "ph.name": "Votre nom",
      "ph.email": "vous@entreprise.fr",
      "ph.message": "Parlez-moi du poste ou du projet…",
      "btn.send": "Envoyer",
      "btn.sending": "Envoi en cours…",
      "footer.text": "Rim Ghannam — codé à la main, comme tout ce que j'administre.",

      "roles": [
        "Administration Linux & Windows Server",
        "Haute disponibilité : HAProxy · Keepalived · GlusterFS",
        "Réseau & sécurité : Cisco · HPE · Fortinet · Stormshield",
        "NOC : Grafana · ELK · Loki · PRTG",
        "Automatisation : Bash · Python · Ansible",
      ],
    },

    en: {
      "nav.home": "Home",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.path": "Background",
      "nav.contact": "Contact",

      "hero.eyebrow": "Available for a permanent role from September 2026",
      "hero.title": "Rim <span class=\"gradient-text\">Ghannam</span><br /> IT <em>Systems &amp; Network</em> Technician",
      "hero.summary": "3 years of work-study experience at a certified healthcare data host (HDS, ISO 27001). Equally at home on Linux and Windows Server, from ticketing to infrastructure projects: high availability, core networking, monitoring and automation.",
      "btn.projects": "View my projects",
      "btn.cv": "Download my CV",
      "btn.contact": "Contact me",
      "stat.years": "years of hands-on systems &amp; network experience",
      "stat.support": "support &amp; incident management",
      "stat.hds": "certified healthcare-data environment",
      "term.hire": "./hire_rim.sh",

      "proj.title": "Projects",
      "proj.sub": "Infrastructure projects delivered in production, in a certified healthcare data hosting environment (HDS, ISO 27001) at Groupe CEGI.",
      "proj.note": "// the configuration excerpts below are anonymised and reconstructed from real projects — no client data, no production addresses.",
      "tag.infra": "INFRA PROJECT",
      "tag.auto": "AUTOMATION",
      "tag.perso": "PERSONAL PROJECT",
      "date.cegi": "Groupe CEGI · work-study",
      "date.ongoing": "ongoing",
      "code.copy": "copy",
      "code.copied": "copied ✓",

      "glpi.title": "Highly available GLPI (ITSM / CMDB + Ticketing)",
      "glpi.role": "End-to-end deployment — architecture, installation, go-live",
      "glpi.desc": "Deployed a fully redundant GLPI platform across 11 Debian VMs (Hyper-V / SCVMM): HAProxy + Keepalived load balancing (VIP), Nginx/PHP web servers, a MariaDB Galera cluster (3 nodes + garbd arbiter), GlusterFS replicated storage and Microsoft Entra ID SSO.",
      "diag.bar": "// production infrastructure diagram",
      "diag.title": "GLPI Architecture — High Availability (Production)",
      "diag.sub": "Network 192.168.0.0/24 · 11 Hyper-V / SCVMM VMs (Debian)",
      "diag.users": "Users",
      "diag.https": "HTTPS access",
      "diag.sso": "Single sign-on (SSO)",
      "diag.vip": "VIP (virtual address)",
      "diag.lb": "Load balancing — HAProxy 3.0.11 + Keepalived (VRRP)",
      "diag.ha1sub": "HAProxy + Keepalived (active)",
      "diag.ha2sub": "HAProxy + Keepalived (standby)",
      "diag.web": "Web servers — Nginx + PHP 8.3 · GLPI 11.0.7",
      "diag.db": "Database — MariaDB Galera Cluster",
      "diag.garbd": "192.168.0.5 · garbd (arbiter / quorum)",
      "diag.dbnote": "synchronous replication · writes on one node at a time",
      "diag.storage": "Shared storage — GlusterFS (config/ · files/ · marketplace/)",
      "diag.fsnote": "volume replicated across the 3 nodes (mounted on the web servers)",
      "diag.footer1": "Gateway: 192.168.0.254   ·   DNS: 8.8.8.8   ·   Subnet: 192.168.0.0/24",
      "diag.footer2": "Hostnames anonymised (generic roles)",
      "glpi.i1": "<strong>No single point of failure</strong>: every layer (web, database, files, load balancer) is redundant",
      "glpi.i2": "<strong>Automatic failover</strong>: Keepalived VIP (VRRP) — a node failure is transparent to users",
      "glpi.i3": "<strong>Business-critical tool</strong>: the whole company's ticketing and inventory run on this platform",

      "net.title": "Datacenter core network modernisation",
      "net.role": "Replacing end-of-life switches — preparation, configuration, migration",
      "net.desc": "Took part in modernising the datacenter's core network: replacing obsolete switches, preparing configurations (VLANs, link aggregation, spanning-tree) and migrating links while minimising impact on production.",
      "net.i1": "<strong>Live datacenter</strong>: migration planned and executed within controlled maintenance windows",
      "net.i2": "<strong>Repeatable configurations</strong>: config templates prepared and verified before each cutover",
      "net.i3": "<strong>Multi-vendor</strong>: Cisco / HPE environment, Fortinet &amp; Stormshield firewalls at the edge",

      "mon.title": "NOC — centralised monitoring with Grafana (PRTG · ELK · Loki)",
      "mon.role": "Designed &amp; maintain the NOC — dashboards, data pipelines, scripts",
      "mon.desc": "Built a NOC rendered in Grafana to monitor a multi-tenant hosted fleet, with two complementary uses: a TV wall in kiosk mode showing global application health in real time (IIS / application logs via ELK — availability, errors, SLA), and per-client investigation dashboards built on PRTG (CPU / RAM / disk per server role). Synthetic availability is measured by Bash scripts pushing to Loki.",
      "mon.i1": "<strong>The wall = at a glance</strong>: global application health from ELK, split across two screens rotating in a kiosk playlist (30 s) — green means all good, red means dig in",
      "mon.i2": "<strong>The client dashboard = investigation</strong>: multi-tenant PRTG template (through an Nginx proxy) — CPU / RAM / disk per server role, reloaded onto a client's fleet via an auto-filled variable",
      "mon.i3": "<strong>Constraint honoured</strong>: the log pipeline couldn't be touched → enrichment via runtime fields in Elasticsearch index templates, surviving ILM rollovers",
      "mon.i4": "<strong>Multi-tenant fleet</strong>: servers classified by naming conventions (infra type × role) feeding the templated dashboards",
      "mon.shot1": "// the TV wall (overview) — SLA from Loki, application errors from ELK: green = OK, red = dig in",
      "mon.shot2": "// the client dashboard (investigation) — PRTG metrics: CPU / RAM / disk per server and per role (Citrix VDA, file, SQL)",

      "auto.title": "Automation &amp; business continuity (BCP / DRP)",
      "auto.role": "Bash / Python scripts, Ansible playbooks, BCP/DRP involvement",
      "auto.desc": "Automated recurring administration tasks (configuration rollout, backup checks) with Bash, Python and Ansible, and took part in business continuity and disaster recovery planning — a core concern for a healthcare data host.",
      "auto.i1": "<strong>Fewer manual errors</strong>: configurations go through repeatable playbooks",
      "auto.i2": "<strong>Verified backups</strong>: automated checks instead of crossing fingers",
      "auto.i3": "<strong>BCP/DRP culture</strong>: recovery procedures documented and tested",

      "web.title": "Web development &amp; portfolio",
      "web.role": "HTML / CSS / JavaScript · Node.js · React",
      "web.desc": "Alongside infrastructure work, I build web projects — including this portfolio, hand-coded with no framework and no build step. It's also what makes me comfortable administering web servers (IIS, Apache/Nginx): I know what runs on them.",
      "web.i1": "<strong>This site</strong>: pure HTML / CSS / JS, responsive, deployed on GitHub Pages",
      "web.i2": "<strong>Code in the open</strong>: sources published on my GitHub",

      "skills.title": "Skills",
      "skills.sub": "Systems, networking, security, automation — an infrastructure technician's daily toolkit.",
      "group.os": "Systems &amp; OS",
      "group.net": "Network &amp; Security",
      "group.auto": "Automation &amp; Monitoring",
      "group.dev": "Dev / Web &amp; Tools",
      "skill.virt": "Virtualisation (Hyper-V, Citrix)",
      "skill.ha": "Storage &amp; HA (GlusterFS, HAProxy)",
      "skill.switch": "Cisco / HPE switching (VLAN, LACP)",
      "skill.fw": "Fortinet / Stormshield firewalls",
      "skill.cyber": "Cybersecurity (degree track)",
      "skill.docs": "Documentation &amp; procedures",
      "langs.title": "// languages",
      "lang.fr": "French — C2",
      "lang.en": "English — C2",
      "lang.ar": "Arabic — native",
      "value.adapt.t": "Adaptability",
      "value.adapt.d": "Linux in the morning, Windows Server in the afternoon, a network incident in between.",
      "value.team.t": "Teamwork",
      "value.team.d": "Three years on an infrastructure team: handovers, on-call duty, shared documentation.",
      "value.patience.t": "Patience",
      "value.patience.d": "Essential for L1/L2 support — and for diagnosing an intermittent fault.",
      "value.rigor.t": "Rigour",
      "value.rigor.d": "A certified ISO 27001 healthcare environment leaves no room for \"close enough\".",

      "path.title": "Experience &amp; Education",
      "path.sub": "Three years of work-study in production, a bachelor's degree focused on cybersecurity.",
      "tag.exp": "EXPERIENCE",
      "tag.edu": "EDUCATION",
      "exp.date": "Sept. 2023 — present",
      "exp.title": "IT Systems &amp; Network Technician — Work-study",
      "exp.role": "Groupe CEGI · certified healthcare data host (HDS, ISO 27001)",
      "exp.i1": "Deployed a <strong>highly available GLPI</strong> (GlusterFS, MariaDB, HAProxy + Keepalived)",
      "exp.i2": "<strong>Core network modernisation</strong> of the datacenter: switch replacement and configuration",
      "exp.i3": "Built a <strong>Grafana NOC</strong> federating ELK, Loki and PRTG",
      "exp.i4": "<strong>L1/L2 customer support</strong>: ticketing and incident management",
      "exp.i5": "<strong>Windows Server</strong> (ADDS, IIS, RDS) and <strong>Linux</strong> administration",
      "exp.i6": "Involved in <strong>business continuity and disaster recovery planning</strong> (BCP/DRP)",
      "but.date": "graduating Sept. 2026",
      "but.title": "Bachelor's degree in Networks &amp; Telecommunications — Cybersecurity track",
      "but.role": "I.U.T. de Clermont-Ferrand, France · 3-year degree, work-study",
      "but.desc": "University Bachelor of Technology (BUT): networks, systems, telephony and cybersecurity — completed as a work-study programme, so applied on the job as I learned.",
      "bac.date": "July 2021",
      "bac.title": "Scientific Baccalaureate (high-school diploma)",
      "bac.role": "Shouf National College (SNC) — Lebanon",
      "hobbies.title": "// outside the server room",
      "hobby.guitar": "Guitar &amp; singing — 7 years",
      "hobby.piano": "Piano — conservatory, 2 years",
      "hobby.gym": "Weight training — 1.5 years",

      "contact.title": "Contact",
      "contact.sub": "Hiring a systems &amp; network technician / administrator? Let's talk.",
      "contact.lead": "I'm looking for a permanent systems & network technician / administrator role, available from September 2026 — based in Clermont-Ferrand, France.",
      "contact.ping": "<span class=\"t-ok\">64 bytes</span> received — response time: <span class=\"t-ok\">&lt; 24h</span>",
      "social.cv": "Resume (PDF)",
      "form.name": "Name",
      "form.email": "Email",
      "form.message": "Message",
      "ph.name": "Your name",
      "ph.email": "you@company.com",
      "ph.message": "Tell me about the role or project…",
      "btn.send": "Send",
      "btn.sending": "Sending…",
      "footer.text": "Rim Ghannam — hand-coded, like everything I administer.",

      "roles": [
        "Linux & Windows Server administration",
        "High availability: HAProxy · Keepalived · GlusterFS",
        "Network & security: Cisco · HPE · Fortinet · Stormshield",
        "NOC: Grafana · ELK · Loki · PRTG",
        "Automation: Bash · Python · Ansible",
      ],
    },
  };

  let currentLang = "fr";
  const t = (key) => (I18N[currentLang] && I18N[currentLang][key]) || I18N.fr[key] || key;

  const langToggle = document.getElementById("langToggle");

  const applyLang = (lang) => {
    if (!I18N[lang]) lang = "fr";
    currentLang = lang;
    document.documentElement.lang = lang;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    if (langToggle) {
      langToggle.setAttribute("data-lang", lang);
      langToggle.setAttribute("aria-checked", lang === "fr" ? "true" : "false");
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const val = I18N[lang][el.dataset.i18n];
      if (val != null) el.innerHTML = val;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const val = I18N[lang][el.dataset.i18nPh];
      if (val != null) el.setAttribute("placeholder", val);
    });

    document.dispatchEvent(new CustomEvent("langchanged"));
  };

  if (langToggle) {
    langToggle.addEventListener("click", () => applyLang(currentLang === "fr" ? "en" : "fr"));
  }

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
  const revealEls = document.querySelectorAll(".reveal");
  if (prefersReducedMotion) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
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
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* ---------- effet machine à écrire (sensible à la langue) ---------- */
  const typedEl = document.getElementById("typed");
  if (typedEl) {
    if (prefersReducedMotion) {
      typedEl.textContent = t("roles")[0];
      document.addEventListener("langchanged", () => { typedEl.textContent = t("roles")[0]; });
    } else {
      let pIdx = 0, cIdx = 0, deleting = false;
      const typeLoop = () => {
        const list = t("roles");
        const phrase = list[pIdx % list.length];
        typedEl.textContent = phrase.slice(0, Math.max(0, cIdx));
        let delay;
        if (!deleting) {
          cIdx++;
          delay = 45;
          if (cIdx > phrase.length) { deleting = true; delay = 2200; }
        } else {
          cIdx--;
          delay = 22;
          if (cIdx === 0) { deleting = false; pIdx = (pIdx + 1) % list.length; delay = 350; }
        }
        setTimeout(typeLoop, delay);
      };
      typeLoop();
    }
  }

  /* ---------- compteurs animés ---------- */
  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    if (prefersReducedMotion) { el.textContent = target + suffix; return; }
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
        animateCount(entry.target);
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
        tabs.forEach((t2) => { t2.classList.remove("is-active"); t2.setAttribute("aria-selected", "false"); });
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
          copyBtn.textContent = t("code.copied");
          copyBtn.classList.add("is-copied");
          setTimeout(() => {
            copyBtn.textContent = t("code.copy");
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
      txt.textContent = t("btn.sending");
    });
  }

  /* ---------- année du pied de page ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- langue initiale ----------
     français par défaut ; anglais si choisi précédemment
     ou si le navigateur n'est pas francophone. */
  let initial = "fr";
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "fr") initial = saved;
    else if (!(navigator.language || "").toLowerCase().startsWith("fr")) initial = "en";
  } catch (e) {}
  applyLang(initial);
})();
