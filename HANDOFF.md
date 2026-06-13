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
    Intro.jsx             # hero "MY PORTFOLIO" + START; glitch FX; tilt 3D di pagina
    Stats.jsx             # profilo (nome->glitch swap), bio, skills, CTA CONTATTAMI + icone GitHub/LinkedIn
    Quests.jsx            # esperienze come "quest" (lista Panel)
    Achievements.jsx      # formazione; STESSO layout di Quests (lista, pill UNLOCKED) — niente più grid/HexIcon
    Gallery.jsx           # tab Game/Graphic/Website; card keyboard-accessibili; modale in portal
    SiegeCore.jsx         # case study completo; VectorPage.jsx (legacy, rotta /projects/vector)
  styles/
    tokens.css            # design token (--accent, --accent-text #ff4047 per testo piccolo AA, --panel, --line, font, --clip-cut, --frame-pad 18px)
    hud.css               # tutto lo shell + pagine HUD + glitch + 3D buttons + responsive <900px
    siegecore.css         # case study SiegeCore + RotationDemo FX
    style.css             # SOLO legacy SiegeCore/Vector detail (scoped .siegecore-page)
```

## Funzionalità implementate

- **Shell HUD persistente**: solo l'Outlet anima al cambio rotta (fade+slide+blur). Route `/projects/*` = "finestra PC": niente nav, header ridotto a titolo `*.EXE` + 3 window controls (`_ □ ×`) ora con `title` tooltip; il `×` (`.hud-winctl__close`) fa hover rosso pieno e torna a home (`navigate("/")`, anche via **Esc** globale di `useTabKeys`). **QuickTips e bottone BACK rimossi.**
- **Intro**: glitch CSS sul titolo (2 layer cromatici rosso/ciano con slice `clip-path` su loop sfasati), flicker readouts, tear line; bottone **START** = SVG trapezio con ali glow. **Tilt 3D di pagina**: mousemove su `.intro` (throttle rAF) ruota ogni elemento `[data-tilt]` verso il puntatore rispetto al proprio centro (clamp ±½ elemento; `data-tilt` = moltiplicatore intensità). CSS vars `--rx/--ry` consumate dalla regola `.tilt-3d` (`perspective()` inline) o dal wrapper del bottone (`preserve-3d`, label a `translateZ(30px)`); i layer glitch del titolo flottano a `translateZ(30/14px)`.
- **Stats**: click sul nome → burst glitch one-shot + swap nome↔`tommiconlai`, colore accent, foto `just_me.jpg`↔`me_alias.jpg` (stesso burst, layer tintati via filter). Hint shimmer periodico sul nome originale. **CTA primaria `.profile-card__cta` "CONTATTAMI"** (rosso pieno + glow + press 3D, mailto) = azione-obiettivo; le icone contatto sotto sono solo GitHub/LinkedIn (email promossa a CTA, Portfolio escluso).
- **Gallery**: card = `role="button"` tabIndex 0 (apri con click o Enter/Space, focus ring rosso); **modale in `createPortal(document.body)`** (il wrapper di rotta ha `filter` inline = containing block per `fixed`), niente bottone ×, angoli 90° (no `clip-path`), si chiude su click-backdrop o **Esc** (con `stopPropagation` per non far scattare l'Esc→home globale); focus entra nella modale all'apertura e torna alla card alla chiusura. Tab a 44px (touch target). Item senza immagine = stato HUD **`// NO_SIGNAL`** voluto (scanline + brackets + titolo), non blocco colorato. Kicker di pagina portano dati reali (`// PROJECT_ARCHIVE · N FILES`, ecc.).
- **Achievements** ora identica a **Quests**: lista `.quest-list` di Panel, top-row titolo + pill `UNLOCKED` (stile done) + data, riga org. Niente più grid/HexIcon/icone lucide.
- **SiegeCore case study**: hero+chips, intro, **RotationDemo** (danno ruota la carta 90°, griglia 3×3 evidenzia mosse; dirs base W/N/E; FX SVG: slash danno, ring cura, shatter+feTurbulence distruzione), 4 fazioni, processo design, set icone, galleria (board/leader/unit/structure), stato+CTA mailto. Sezione "Anatomia della Carta" rimossa.
- **Bottoni 3D**: hover = rotateX su cerniera bordo basso + ombra; active = press. Su `.hud-tab .gallery-tab .rotdemo__btn .btn-cta .profile-card__cta`.
- **Mobile** (<900px): nav scrollabile con tab attiva auto-centrata (`scrollIntoView` + padding `calc(50vw - 70px)`), fix overlap intro/quests.
- **A11y**: `prefers-reduced-motion` rispettato ovunque (FX nascosti/istantanei), focus-visible, aria-label/aria-live. Testo rosso piccolo usa **`--accent-text` (#ff4047)** non `--accent` → WCAG AA ≥4.5:1 (page-head, panel__label, ruoli, gmodal__meta, ecc.); `--accent` resta per fill/bordi/glow. Gallery card e tab navigabili da tastiera; modale con focus-trap base.
- **Performance**: PNG pesanti ricompressi in place (palette quantization + downscale, ~4.7MB risparmiati — Yinger_Rofrien 2.3MB→196KB); gallery thumbnail `loading="lazy"` + `decoding="async"`. Asset orfani `card-anatomy-*` (sezione rimossa) + relativi export/CSS eliminati.
- Vecchio sito (HomePage/CVPage/ProjectsPage/Header/Footer/CookieBanner) **eliminato**; CSS morto rimosso (−1381 righe).

## Convenzioni

- `motion` importato come `Motion` (`import { motion as Motion }`) — workaround eslint `no-unused-vars` (config senza `jsx-uses-vars`).
- Meta/SEO: React 19 hoista `<title>`/`<meta>` inline nelle pagine; fallback in `index.html` (OG + Twitter card).
- Contenuti solo in `data/profile.js`, pagine = layout.
- TODO reali marcati `// TODO [INPUT GABRIELE]` o `// TODO(gabriele):` — mai inventare quei contenuti.
- Commit in inglese, convenzionali; CookieBanner non più montato (verificare se serve compliance).
- **Testo rosso piccolo** (≤~0.9rem) usa `var(--accent-text)`, non `var(--accent)` (contrasto AA). Fill/bordi/glow restano `--accent`.
- `eslint.config.js` ignora `dist`, `.github/skills`, `.claude/skills` (tooling skill vendored, non lintare).
- Nomi file asset **minuscoli** (es. `ideacasa_logo.png`): il deploy gh-pages gira su Linux **case-sensitive**, un import con case sbagliato passa in dev Windows ma rompe in produzione.

## Design docs & skill installate (questa sessione)

- **`PRODUCT.md`** (root) + **`DESIGN.md`** (root, formato Stitch: token + 6 sezioni, North Star "Combat HUD") generati con `/impeccable init`. `DESIGN.md` ora include token `alert-red-text #ff4047`.
- **`.impeccable/`**: `live/config.json` (live mode Vite), `design.json` (sidecar: tonal ramp, componenti, narrativa), `critique/*.md` (snapshot critique, **trend 32 → 35**, P1/P2 chiusi).
- **Skill installate**: `impeccable` (UI design/critique) in `.github/skills` (tracciato) + `.claude/skills` (gitignored); 13 taste-skill (`npx skills add`) in `.agents/skills` (**gitignored**). Slash tipo `/impeccable critique` funzionano dopo riavvio Claude Code.

## TODO aperti (INPUT GABRIELE nel codice)

- `og:image` 1200×630 in `/public` + URL in `index.html`; immagine hero SiegeCore + suo `og:image`.
- Colori esatti 4 fazioni SiegeCore (Frost=ciano ok, altri 3 segnaposto).
- Foto playtest/prototipo per "Processo di design"; sell sheet PDF (`/assets/Siegecore_SellSheet_IT.pdf`, bottone nascosto finché manca).
- Gallery tab **Graphic = FATTO** (loghi reali Ideacasa/Progetto Danza/Velvet Sin). Tab **Website** ancora placeholder `NO_SIGNAL` (Portfolio React, Chillart Studio) → mancano screenshot dei 2 siti.
- **Rotte dettaglio Graphic non esistono**: gli item Graphic puntano tutti a `/projects/vector` (workaround). Se servono pagine dedicate (`/projects/ideacasa`, …), crearle in `App.jsx` come VectorPage.
- CV/PDF scaricabile (la CTA copre solo l'email).
- URL Behance; verificare date quests.

## Gotchas

- **Cache vite stale dopo operazioni git** (checkout/revert/cherry-pick): moduli vecchi serviti → `rm -rf node_modules/.vite` + riavvio dev server.
- `gh` CLI **non installato** → niente PR da terminale (installare con `winget install GitHub.cli`).
- `lucide-react` ha rimosso le icone brand → GitHub/LinkedIn mappate su Code2/Briefcase in `Stats.jsx` (icona generica, label testuale salva la riconoscibilità).
- `dist/` è tracciato nel repo (deploy gh-pages); `node_modules` parzialmente tracciato da prima del .gitignore — non committare il churn. `npm install` può sporcare `node_modules/.package-lock.json` (tracciato): ripristinarlo con `git checkout -- node_modules/.package-lock.json`.
- **PowerShell + `git commit -m`**: gli here-string `@'...'@` con `"` o `()` interni si rompono (PowerShell li passa a git come arg separati → `pathspec did not match`). Usare `git commit -F <file>` con il messaggio su file.
- **Immagini**: niente tool tipo `sharp`/`magick` installati di default. Per ricompressioni one-off: `npm install sharp --no-save` (resta in `node_modules` gitignored, niente churn tracciato), poi script + rimuovi. `Yinger_Rofrien.png` già ricompresso 2.3MB→196KB.
- Tentativo "pannelli ottagonali con maniglie" **revertato** su richiesta (commit `8b79a9a`, revert `188d111`) — i pannelli attuali sono rettangolari con taglio piccolo (`--clip-cut`) e tick rosso.

## Comandi

```bash
npm run dev      # dev server (porta 5173)
npm run build    # build produzione
npm run lint     # eslint
npm run deploy   # gh-pages da dist/
```
