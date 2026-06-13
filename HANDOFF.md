# Handoff — Portfolio gabrieletomasso.it

> Riassunto di sessione per riprendere il lavoro in una chat nuova.
> Repo: `Tommiconlai/Portfolio` · branch di lavoro: `main` · deploy: gh-pages (`npm run deploy`).

## Progetto

Portfolio personale di **Gabriele "Tommi" Tomasso** (`tommiconlai`) — UI/UX designer, developer, game designer. SPA **React 19 + Vite 7** con `HashRouter` (react-router-dom 7), `framer-motion`, `lucide-react`. Lingua contenuti: italiano. UI in stile **game-HUD sci-fi** (palette rosso `#E5232B` su dark, font Chakra Petch / Rajdhani / Share Tech Mono).

## Architettura

```
src/
  App.jsx                 # router: / = Intro (no shell), resto dentro <Layout>
  data/profile.js         # TUTTI i contenuti (identity, contacts, skills, bio, quests, achievements, gallery)
  hooks/useTabKeys.js     # NAV_ORDER (stats/quests/achievements/gallery) + Esc -> hero
  components/
    Layout.jsx            # shell persistente; AnimatePresence sull'Outlet; windowMode su /projects/*
    HudFrame.jsx          # cornice fissa, brackets, scanline; ::before maschera il gutter esterno
    HudHeader.jsx         # header; in windowMode = barra finestra "SIEGECORE.EXE" + _ □ ×
    HudNav.jsx            # tab bottom; su mobile scrolla e auto-centra la tab attiva
    Panel.jsx, HexIcon.jsx, IconItem.jsx, ScrollToTop.jsx
    RotationDemo.jsx      # demo interattiva SiegeCore (CSS puro, no dep)
  pages/
    Intro.jsx             # hero "MY PORTFOLIO" + START; glitch FX; tilt 3D
    Stats.jsx             # profilo (nome cliccabile -> glitch swap alias+foto), bio, skills, contatti
    Quests.jsx, Achievements.jsx, Gallery.jsx (tab Game/Graphic/Website + modale)
    SiegeCore.jsx         # case study completo; VectorPage.jsx (legacy)
  styles/
    tokens.css            # design token (--accent, --panel, --line, font, --clip-cut, --frame-pad 18px)
    hud.css               # tutto lo shell + pagine HUD + glitch + 3D buttons + responsive <900px
    siegecore.css         # case study SiegeCore + RotationDemo FX
    style.css             # SOLO legacy SiegeCore/Vector detail (scoped .siegecore-page)
```

## Funzionalità implementate

- **Shell HUD persistente**: solo l'Outlet anima al cambio rotta (fade+slide+blur). Route `/projects/*` = "finestra PC": niente nav, header ridotto a titolo `*.EXE` + 3 window controls.
- **Intro**: glitch CSS sul titolo (2 layer cromatici rosso/ciano con slice `clip-path` su loop sfasati), flicker readouts, tear line; bottone **START** = SVG trapezio con ali glow. **Tilt 3D di pagina**: mousemove su `.intro` (throttle rAF) ruota ogni elemento `[data-tilt]` verso il puntatore rispetto al proprio centro (clamp ±½ elemento; `data-tilt` = moltiplicatore intensità). CSS vars `--rx/--ry` consumate dalla regola `.tilt-3d` (`perspective()` inline) o dal wrapper del bottone (`preserve-3d`, label a `translateZ(30px)`); i layer glitch del titolo flottano a `translateZ(30/14px)`.
- **Stats**: click sul nome → burst glitch one-shot + swap nome↔`tommiconlai`, colore accent, foto `just_me.jpg`↔`me_alias.jpg` (stesso burst, layer tintati via filter). Hint shimmer periodico sul nome originale.
- **SiegeCore case study**: hero+chips, intro, **RotationDemo** (danno ruota la carta 90°, griglia 3×3 evidenzia mosse; dirs base W/N/E; FX SVG: slash danno, ring cura, shatter+feTurbulence distruzione), 4 fazioni, processo design, set icone, galleria (board/leader/unit/structure), stato+CTA mailto. Sezione "Anatomia della Carta" rimossa.
- **Bottoni 3D**: hover = rotateX su cerniera bordo basso + ombra; active = press. Su `.hud-tab .gallery-tab .rotdemo__btn .btn-cta`.
- **Mobile** (<900px): nav scrollabile con tab attiva auto-centrata (`scrollIntoView` + padding `calc(50vw - 70px)`), fix overlap intro/quests.
- **A11y**: `prefers-reduced-motion` rispettato ovunque (FX nascosti/istantanei), focus-visible, aria-label/aria-live.
- Vecchio sito (HomePage/CVPage/ProjectsPage/Header/Footer/CookieBanner) **eliminato**; CSS morto rimosso (−1381 righe).

## Convenzioni

- `motion` importato come `Motion` (`import { motion as Motion }`) — workaround eslint `no-unused-vars` (config senza `jsx-uses-vars`).
- Meta/SEO: React 19 hoista `<title>`/`<meta>` inline nelle pagine; fallback in `index.html` (OG + Twitter card).
- Contenuti solo in `data/profile.js`, pagine = layout.
- TODO reali marcati `// TODO [INPUT GABRIELE]` o `// TODO(gabriele):` — mai inventare quei contenuti.
- Commit in inglese, convenzionali; CookieBanner non più montato (verificare se serve compliance).

## TODO aperti (INPUT GABRIELE nel codice)

- `og:image` 1200×630 in `/public` + URL in `index.html`; immagine hero SiegeCore + suo `og:image`.
- Colori esatti 4 fazioni SiegeCore (Frost=ciano ok, altri 3 segnaposto).
- Foto playtest/prototipo per "Processo di design"; sell sheet PDF (`/assets/Siegecore_SellSheet_IT.pdf`, bottone nascosto finché manca).
- Gallery: immagini per tab Graphic (loghi) e Website (Portfolio React, Chillart Studio senza immagine).
- URL Behance; verificare date quests.

## Gotchas

- **Cache vite stale dopo operazioni git** (checkout/revert/cherry-pick): moduli vecchi serviti → `rm -rf node_modules/.vite` + riavvio dev server.
- `gh` CLI **non installato** → niente PR da terminale (installare con `winget install GitHub.cli`).
- `lucide-react` ha rimosso le icone brand → GitHub/LinkedIn mappate su Code2/Briefcase in `Stats.jsx`.
- Asset pesante: `Yinger_Rofrien.png` 2.3MB (da comprimere).
- `dist/` è tracciato nel repo (deploy gh-pages); `node_modules` parzialmente tracciato da prima del .gitignore — non committare il churn.
- Tentativo "pannelli ottagonali con maniglie" **revertato** su richiesta (commit `8b79a9a`, revert `188d111`) — i pannelli attuali sono rettangolari con taglio piccolo (`--clip-cut`) e tick rosso.

## Comandi

```bash
npm run dev      # dev server (porta 5173)
npm run build    # build produzione
npm run lint     # eslint
npm run deploy   # gh-pages da dist/
```
