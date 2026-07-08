# Rim Ghannam — Portfolio Systèmes & Réseaux

Portfolio orienté recruteur, construit à partir de mon CV : les **projets d'infrastructure réalisés en alternance** (Groupe CEGI, environnement HDS certifié ISO 27001) sont mis en avant, avec des **extraits de configuration anonymisés** pour illustrer les compétences.

HTML / CSS / JS purs — aucun build, déployable directement sur GitHub Pages.

**Bilingue (français / anglais)** — un interrupteur EN/FR dans la barre de navigation traduit tout le site. Le choix est mémorisé entre les visites, et les visiteurs non francophones voient l'anglais automatiquement. Pour modifier les textes, éditer le dictionnaire `I18N` en haut de `js/main.js` (chaque élément traduisible porte un attribut `data-i18n` dans `index.html`).

## Contenu

- **Projets** : GLPI haute disponibilité (GlusterFS, MariaDB, HAProxy + Keepalived), modernisation du cœur de réseau du datacenter, stack de monitoring Grafana / Loki / PRTG, automatisation & PCA/PRA, dev web.
- **Compétences** : systèmes & OS, réseau & sécurité, automatisation, dev/web + langues et savoir-être.
- **Parcours** : alternance Groupe CEGI, BUT R&T parcours Cybersécurité (IUT Clermont-Ferrand), bac scientifique.
- **Contact** : formulaire (FormSubmit), email, téléphone, LinkedIn, GitHub, CV téléchargeable.

## Structure

```
index.html        # site une page (héro, projets, compétences, parcours, contact)
css/style.css     # thème sombre, animations, responsive
js/main.js        # nav, apparitions au scroll, machine à écrire, onglets de code
assets/cv/Rim-Ghannam-CV.pdf   # CV lié aux boutons de téléchargement
```

> Les extraits de code affichés sur le site sont reconstitués et anonymisés à partir de projets réels — aucune donnée client ni adresse de production.

## Aperçu local

```
python3 -m http.server 8000
# ouvrir http://localhost:8000
```

## Déploiement GitHub Pages

Settings → Pages → Deploy from branch → sélectionner la branche, dossier racine. Le fichier `.nojekyll` est déjà présent.
