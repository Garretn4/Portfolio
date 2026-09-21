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

- **Automation & Lead Systems** — lead-pool, fex-quoter, dialer, fb-calendly-skeleton, CommSync
- **Trading & Quant** — binance-triangular-arbitrage, Quant
- **Infrastructure & Networking** — ArxSpec, pi-stack, home-automation-lab, Personal-OS
- **GovCon & Compliance Tools** — Capture Filter, CBOM Register
- **Notion Widgets** — notionCalendar, notionWeather, notionSidebar

Each card carries the year of the work and, where the repo has a real suite, its
automated test count (`def test_`, `it(`/`test(`, and `func Test` cases). Private projects can show a pre-blurred screenshot from
`assets/images/projects/<name>.webp`; the blur is baked into the file so the
served image never contains readable data.

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
