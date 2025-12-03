# Akash Simon — Portfolio (Vite + React)

This repository is an auto-generated Vite + React portfolio for **Akash Simon**, built to be deployed to **GitHub Pages**.

## What's included
- Vite + React app
- React-i18next translations (EN/DE/FR)
- Components: Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer
- Netlify-compatible contact form
- Favicons and manifest for PWA
- Logos and icons (SVG)
- CV (from uploaded file)

## Notes
- Content was taken from the uploaded CV: "Tutedude Dashboard.pdf". See project assets for the included CV. fileciteturn0file0
- Replace `homepage` in package.json and `base` in vite.config.js with your GitHub Pages repo path: `https://<GITHUB_USERNAME>.github.io/<REPO_NAME>/`.
- To run locally:
  1. `npm install`
  2. `npm run dev`
- To build:
  - `npm run build`
- To deploy to GitHub Pages:
  1. Install gh-pages (`npm i -D gh-pages`)
  2. Set `homepage` in package.json and `base` in vite.config.js
  3. `npm run build && npm run deploy`

## PWA & Favicon
Favicons placed in `public/favicons/`. The manifest references them.

## Localization
Flags are referenced using `import.meta.env.BASE_URL + 'favicons/flag-gb.png'` so they work when hosted on GitHub Pages.

## Contact form
The contact form is Netlify-compatible (uses `data-netlify="true"`). To use it, deploy to Netlify and enable form handling.

