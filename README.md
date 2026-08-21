# Portfolio — Henikaja David Andrianirina (React + Tailwind + Framer Motion)

Refactorisation complète du portfolio HTML/CSS/JS vanilla vers React (Vite),
avec Tailwind CSS pour le styling et Framer Motion pour toutes les animations.
Contenu, textes, projets, liens et rendu visuel conservés à l'identique.

## Installation

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:5173

## Build de production

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/     # Navbar, Hero, About, Formations, Skills, Projects, Contact, Footer, ...
  hooks/          # useTheme, useTypewriter, useTilt, useActiveSection, useScrollProgress, useAccentCycle
  data/           # projects.js, skills.js — contenu texte/liens/tags
  motionVariants.js  # variantes Framer Motion (remplace AOS)
  index.css       # variables CSS de thème clair/sombre + quelques styles ponctuels
public/
  images/         # captures d'écran de projets + photo, extraites du HTML d'origine
```

## Détails techniques

- **Thème clair/sombre** : classe `dark` togglée sur `<html>`, variables CSS
  reprises depuis la version d'origine et exposées comme couleurs Tailwind
  (`bg-bg`, `text-text-mut`, `border-border`, etc.).
- **Animations au scroll** : `motion.div` avec `whileInView` remplace AOS ;
  chaque carte de grille utilise un délai en cascade (0/100/200/300ms) réinitialisé
  à chaque nouvelle ligne.
- **Machine à écrire du Hero** : hook `useTypewriter` reproduisant les réglages
  Typed.js d'origine (`typeSpeed: 60, backSpeed: 40, backDelay: 2000, startDelay: 500`).
- **Bandeau de compétences (marquee)** : boucle CSS infinie, pause au survol.
- **Carrousel de projets** : défilement horizontal avec boutons précédent/suivant
  et slider de captures d'écran auto-rotatif par carte.
- **Icônes** : `lucide-react` pour les pictogrammes génériques (sécurité, serveur,
  diagnostic, dossier, verrou...), CDN simple-icons pour les logos de technologies
  (PHP, Laravel, Vue.js, Cisco, etc.), comme dans la version d'origine.
