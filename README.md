# Stephen Ombuya — Portfolio Website

> A modern, multi-page portfolio built with React, TypeScript, and Tailwind CSS — deployed to GitHub Pages via GitHub Actions.

[![Deploy to GitHub Pages](https://github.com/stephenombuya/stephenombuya.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/stephenombuya/stephenombuya.github.io/actions/workflows/deploy.yml)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-D97706)](https://www.gnu.org/licenses/gpl-3.0)

<div>

  <!-- Repository Analytics -->
![GitHub repo size](https://img.shields.io/github/repo-size/stephenombuya/stephenombuya.github.io)
![GitHub language count](https://img.shields.io/github/languages/count/stephenombuya/stephenombuya.github.io)
![GitHub top language](https://img.shields.io/github/languages/top/stephenombuya/stephenombuya.github.io)
![GitHub last commit](https://img.shields.io/github/last-commit/stephenombuya/stephenombuya.github.io)
![GitHub contributors](https://img.shields.io/github/contributors/stephenombuya/stephenombuya.github.io)

</div>

![Portfolio Preview](./src/assets/images/portfolio-preview.png)




## Live Site

**[stephenombuya.github.io](https://stephenombuya.github.io)**

---

## Overview

This portfolio is my primary professional web presence — a fully type-safe MPA that showcases projects, skills, and services. The site itself is designed to demonstrate front-end engineering quality: scroll-triggered animations, a refined dark editorial aesthetic, responsive layout from 320 px to 4K, and a sub-60 second deploy pipeline from `git push` to live.

---

## Features

| Feature | Details |
|---|---|
|  Dark editorial theme | Obsidian background, amber accents, Cormorant Garamond + DM Sans typography |
|  Scroll animations | `IntersectionObserver`-powered fade-up reveals with staggered delays |
|  Fully responsive | Mobile-first Tailwind grid, adaptive from 320 px upward |
|  Type-safe | Strict TypeScript across all components, hooks, and interfaces |
|  Fast builds | Vite with tree-shaking; ~55 KB gzipped JS after build |
|  Automated deploys | GitHub Actions builds and publishes on every push to `main` |
|  Contact form | Mailto-based — zero backend, zero API keys |
|  Accessible | Semantic HTML, ARIA labels on icon-only controls, keyboard-navigable |

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| UI Framework | React | 18.3 |
| Language | TypeScript | 5.5 |
| Styling | Tailwind CSS | 3.4 |
| Build Tool | Vite | 5.4 |
| Icons | Lucide React | 0.383 |
| CSS Processing | PostCSS + Autoprefixer | 8.4 |
| Hosting | GitHub Pages | — |
| CI/CD | GitHub Actions | — |

---

## Project Structure

<details>
<summary>Click to expand</summary>

```
stephenombuya.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD pipeline
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky nav + scroll-spy + mobile menu
│   │   ├── Hero.tsx            # Landing section with staggered mount animations
│   │   ├── About.tsx           # Bio, skills matrix, education & experience timelines
│   │   ├── Projects.tsx        # Featured + compact project card grids
│   │   ├── Services.tsx        # Services, testimonials & FAQ accordion
│   │   ├── Contact.tsx         # Contact info panel + mailto form
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── useScrollAnimation.ts   # IntersectionObserver hook
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css               # Global styles, Tailwind layers, animation system
├── index.html                  # HTML shell with Google Fonts + SEO meta tags
├── vite.config.ts
├── tailwind.config.js          # Design tokens: fonts, colours, keyframes
├── tsconfig.json               # Strict mode TypeScript
├── postcss.config.js
└── package.json
```

</details>

---

## Getting Started

### Prerequisites

- **Node.js** 18 LTS or higher — `node --version`
- **npm** 9 or higher — `npm --version`

### Setup

```bash
# 1. Clone the repo
git clone https://github.com/stephenombuya/stephenombuya.github.io.git
cd stephenombuya.github.io

# 2. Install dependencies
npm install

# 3. Start the dev server (http://localhost:5173)
npm run dev
```

### Available Scripts

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Type-check + production bundle → dist/
npm run preview   # Serve the production build locally
```

> **Tip:** Always run `npm run build && npm run preview` before pushing to catch any production-only issues.

---

## Deployment

The repository ships with a GitHub Actions workflow that deploys automatically on every push to `main`.

### One-time GitHub Pages setup

1. Push the project to your `username/username.github.io` repository on the `main` branch
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Push to `main` — the workflow handles the rest in ~60–90 seconds

### How the pipeline works

```
push to main
    └── build job
        ├── actions/checkout@v4
        ├── actions/setup-node@v4  (Node 20, npm cache)
        ├── npm ci
        ├── npm run build
        └── upload dist/ as Pages artifact
    └── deploy job
        └── actions/deploy-pages@v4  →  https://stephenombuya.github.io
```

> **Note:** If you fork this for a project page (`username.github.io/repo-name`) rather than a user site, update `base` in `vite.config.ts` to `"/repo-name/"` — otherwise assets will 404.

---

## Customisation

<details>
<summary>Updating personal info</summary>

| What | File | Where |
|---|---|---|
| Name, tagline, bio | `src/components/Hero.tsx` | JSX text content |
| Social links | `src/components/Hero.tsx` | Social links array |
| Bio text | `src/components/About.tsx` | Bio paragraphs |
| Quick facts (location, email, hobbies) | `src/components/About.tsx` | Quick facts array |
| CV link | `src/components/About.tsx` | `href` on Download CV |
| Contact email | `src/components/Contact.tsx` | `mailto:` in `handleSubmit` |

</details>

<details>
<summary>Adding a project</summary>

Open `src/components/Projects.tsx` and add an entry to the `projects` array:

```ts
{
  title: "My New Project",
  description: "A concise 1–2 sentence description of what it does and why it matters.",
  stack: ["React", "TypeScript", "Node.js"],
  github: "https://github.com/stephenombuya/my-new-project",
  demo: "https://my-project.vercel.app",
  image: "https://images.unsplash.com/photo-XXXXXXX?w=600&q=80&auto=format",
  featured: false,   // true → large overlay card in the top row
  tag: "Full-Stack",
},
```

</details>

<details>
<summary>Updating skills</summary>

Edit the constant arrays at the top of `src/components/About.tsx`:

```ts
const languages = ['Java', 'Python', 'TypeScript', /* add yours */]
const webTech   = ['Spring Boot', 'React', /* add yours */]
const constructs = ['RESTful APIs', 'CI/CD', /* add yours */]
```

The tag grid reflows automatically.

</details>

<details>
<summary>Changing the accent colour</summary>

Edit the `amber` tokens in `tailwind.config.js`:

```js
colors: {
  amber: {
    glow: '#your-hex',   // buttons, borders, highlights
    soft: '#your-hex',   // hover state
    muted: '#your-hex',  // subdued variant
  },
}
```

Then update the `background` in the `.text-gradient` utility in `src/index.css` to match.

</details>

---

---

## Roadmap

- [ ] Add `sitemap.xml` and `robots.txt` for improved SEO
- [ ] Swap `mailto:` fallback for Formspree / EmailJS
- [ ] Dark / light mode toggle
- [ ] Blog section for technical writing

---

## License

This project is licensed under the **GNU General Public License v3.0** — see [LICENSE](./LICENSE) for full terms. You're free to use, study, and distribute the code, provided derivative works remain open source under the same licence.

---

## Contact

**Stephen Ombuya** — Software Engineer, Nairobi, Kenya

[![GitHub](https://img.shields.io/badge/GitHub-stephenombuya-181717?logo=github)](https://github.com/stephenombuya)
[![Email](https://img.shields.io/badge/Email-michiekaombuya%40gmail.com-EA4335?logo=gmail&logoColor=white)](mailto:michiekaombuya@gmail.com)
