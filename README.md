# Portfolio — Garret Nelson

My personal portfolio, rebuilt as a React + Vite single-page app with a modern dark theme.

**Live:** https://garretn4.github.io/Portfolio/

## Stack

- **React 19** + **TypeScript**
- **Vite** for build/dev
- Hand-written CSS (design tokens, glassmorphism, scroll-reveal animations)
- Deployed to **GitHub Pages** via GitHub Actions

## Featured work

Projects are grouped by theme and pulled from my GitHub:

- **Automation & Lead Systems** — lead-pool, dialer, fb-calendly-skeleton, CommSync
- **Trading & Quant** — binance-triangular-arbitrage, Quant
- **Infrastructure & Hardware** — pi-stack, home-automation-lab, Personal-OS
- **Notion Widgets** — notionCalendar, notionWeather, notionSidebar

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages. In the repo settings, set
**Settings → Pages → Source** to **GitHub Actions** (one-time setup).

## Contact

Garret Nelson · garrettoddnelson@gmail.com · [github.com/Garretn4](https://github.com/Garretn4)

## License

[MIT](https://choosealicense.com/licenses/mit/)
