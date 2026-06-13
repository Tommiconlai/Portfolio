---
name: Portfolio Gabriele Tomasso
description: Portfolio game-HUD sci-fi — rosso allerta su nero, glitch e telemetria.
colors:
  bg: "#0a0a0d"
  bg-elevated: "#101015"
  panel: "#14141a"
  line: "#2a2a32"
  line-bright: "#3a3a44"
  ink: "#e8e8ee"
  ink-dim: "#8a8a96"
  alert-red: "#E5232B"
  alert-red-text: "#ff4047"
  alert-red-deep: "#7a1418"
  signal-cyan: "#00e5ff"
typography:
  display:
    fontFamily: "Chakra Petch, Bebas Neue, sans-serif"
    fontSize: "clamp(2.8rem, 9vw, 7rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.1em"
  headline:
    fontFamily: "Chakra Petch, Bebas Neue, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.22em"
  body:
    fontFamily: "Rajdhani, Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Share Tech Mono, Courier New, monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.15em"
rounded:
  none: "0px"
spacing:
  xs: "0.4rem"
  sm: "0.8rem"
  md: "1.25rem"
  lg: "2rem"
  xl: "3rem"
components:
  panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.25rem"
  tab-ghost:
    backgroundColor: "{colors.bg-elevated}"
    textColor: "{colors.ink-dim}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "10px 18px"
  tab-active:
    backgroundColor: "{colors.alert-red}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "10px 18px"
  card:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0px"
  modal:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "2rem"
---

# Design System: Portfolio Gabriele Tomasso

## 1. Overview

**Creative North Star: "Combat HUD"**

Il sistema è l'overlay di mira di un gioco sci-fi: nero quasi assoluto solcato da una sola frequenza rossa d'allerta, telemetria mono che scorre negli angoli, brackets e tick che incorniciano ogni modulo, un velo di scanline e glitch cromatici che ricordano che stai guardando uno schermo, non una pagina. Niente è "decorato": tutto è strumentazione. I pannelli sono moduli di un'interfaccia, le tab sono comandi fisici, le finestre di dettaglio sono `*.EXE` con i loro controlli `_ □ ×`.

L'identità rifiuta categoricamente il portfolio-a-griglia anonimo (la lastra Behance/Dribbble di card tutte uguali): qui l'interfaccia stessa è una prova di mestiere, non un contenitore neutro. Rifiuta anche il template SaaS pulito, il pastello, e il look istituzionale senza voce. Il rosso non è un accento "carino": è un segnale d'allerta usato con parsimonia, e la sua rarità è ciò che lo rende forte.

La densità è alta ma ordinata: gerarchia spietata pensata per chi (recruiter) ha cinque secondi. Il colpo d'occhio dà subito ruolo e qualità; il dettaglio premia chi resta.

**Key Characteristics:**
- Fondo nero `#0a0a0d`, una sola frequenza rossa `#E5232B`, ciano `#00e5ff` solo come disturbo di segnale.
- Angoli a 90° o smussati a 45° via `clip-path`; **mai** raggi arrotondati.
- Tipografia tripla: display condensato, body tecnico, mono per la telemetria.
- Profondità data dal **glow rosso**, non da ombre morbide. Superfici piatte a riposo.
- Movimento come segnale: glitch, tilt 3D, scanline, tear — sempre con alternativa `reduced-motion`.

## 2. Colors: La Palette Allerta

Monocromia fredda e scura interrotta da un unico rosso d'emergenza; il ciano esiste solo come artefatto di glitch, mai come secondo colore di brand.

### Primary
- **Alert Red** (`#E5232B`): la frequenza del sistema. Tab attiva, bordi in focus, tick dei pannelli, CTA, glow. Usata su ≤15% di superficie: è un segnale, non una tinta di sfondo.
- **Alert Red Text** (`#ff4047`): variante più chiara **solo per testo piccolo** rosso su dark (label mono, kicker, ruoli). Garantisce AA ≥4.5:1 dove `#E5232B` scende a ~4.1:1. Non usarla per fill/bordi/glow — lì resta `#E5232B`.
- **Alert Red Deep** (`#7a1418`): rosso spento per fill di stato, gradienti di fallback, hover affondati.

### Secondary
- **Signal Cyan** (`#00e5ff`): esclusivamente artefatto. Layer di glitch cromatico sul titolo, linea di tear, aberrazione su hover. Non compare mai come colore "buono" di UI.

### Neutral
- **Void** (`#0a0a0d`): il fondo. Lo schermo spento su cui tutto galleggia.
- **Void Elevated** (`#101015`): superfici di secondo livello, fill di icone/fallback.
- **Panel** (`#14141a`, spesso translucido `rgba(18,18,24,0.82)`): il materiale dei moduli HUD.
- **Line** (`#2a2a32`) / **Line Bright** (`#3a3a44`): bordi e divisori; il bright segna i moduli più importanti (modale, finestre).
- **Ink** (`#e8e8ee`): testo primario.
- **Ink Dim** (`#8a8a96`): testo secondario, label mono, stati a riposo.

### Named Rules
**The One Frequency Rule.** C'è un solo colore vivo nel sistema: il rosso. Se una schermata ha bisogno di un "secondo accento", la risposta è peso, dimensione o mono — non un'altra tinta. Il ciano non conta: è rumore, non colore.

**The Glow-Not-Gray Rule.** Testo grigio su fondo rosso è proibito (si slava). Su superfici colorate usa una tinta più scura dello stesso rosso o una trasparenza dell'inchiostro, mai `--ink-dim` piatto.

## 3. Typography

**Display Font:** Chakra Petch (fallback Bebas Neue, sans-serif)
**Body Font:** Rajdhani (fallback Inter, sans-serif)
**Label/Mono Font:** Share Tech Mono (fallback Courier New, monospace)

**Character:** un trio da plancia di comando. Chakra Petch è squadrato e tecnico per i titoli; Rajdhani è stretto e leggibile per il corpo; Share Tech Mono fa la telemetria — codici, stati, readout. La coppia non è mai due sans uguali: contrasto su asse (display condensato + mono a larghezza fissa).

### Hierarchy
- **Display** (700, `clamp(2.8rem, 9vw, 7rem)`, lh 1, tracking 0.1em): hero della Intro ("MY PORTFOLIO"), in maiuscolo, con glitch.
- **Headline** (700, 1.3rem, tracking 0.22em): titoli di pagina/header, maiuscolo spaziato.
- **Title** (700, ~1.15rem, tracking 0.04em): titoli di modulo (quest, achievement, card).
- **Body** (500, 1rem, lh 1.5): testo Rajdhani. Tetto riga 65–75ch.
- **Label** (400, 0.72rem, tracking 0.15em, MAIUSCOLO): Share Tech Mono per readout, breadcrumb, label dei pannelli (`[ PROFILE ]`), stati.

### Named Rules
**The Telemetry Rule.** Tutto ciò che è "macchina" (codici, date, stati, breadcrumb, label di modulo) è in Share Tech Mono maiuscolo spaziato. Tutto ciò che è "umano" (bio, descrizioni) è in Rajdhani. Non mescolare i due ruoli.

## 4. Elevation

Sistema **piatto a riposo, illuminato in risposta**. Non ci sono ombre morbide ambientali: la profondità è data dal glow rosso e dall'inclinazione 3D. Una scanline radiale copre l'intera shell per ricordare lo schermo. I moduli stanno sullo stesso piano del fondo, separati da bordi sottili e da un tick rosso, non da drop-shadow.

### Shadow Vocabulary
- **Glow** (`box-shadow / drop-shadow: 0 0 12–18px rgba(229,35,43,0.35)`): alone rosso su elementi in focus/hover. È l'unica "ombra" di brand.
- **Glow Strong** (`… rgba(229,35,43,0.6)`): hover di CTA e elementi caldi.
- **Lift 3D** (`0 8px 14px rgba(0,0,0,0.45), 0 0 14px var(--glow)`): solo sui bottoni fisici quando si inclinano in hover.

### Named Rules
**The Flat-Until-Touched Rule.** Le superfici sono piatte. Profondità e ombra compaiono solo come risposta a uno stato (hover, focus, tilt). Un'ombra a riposo è un bug, non uno stile.

## 5. Components

### Buttons
- **Shape:** spigolo vivo a 90° (`border-radius: 0`). I bottoni sono "tasti fisici".
- **Tab / Ghost:** fondo `--bg-elevated`, testo `--ink-dim` mono, bordo `--line`. Hover = inclinazione 3D (`rotateX(13deg)` con cerniera sul bordo basso) + glow; active = affonda (`rotateX(20deg) scale(0.98)`).
- **Tab attiva:** fondo `--accent` pieno, testo bianco, glow.
- **CTA (`.btn-cta`):** stessa famiglia fisica 3D, usata per i call-to-action (mailto, OPEN_PROJECT).
- **START (Intro):** caso speciale — sagoma SVG a trapezio con ali laterali glow, tilt 3D che segue il puntatore, label su piano Z rialzato.

### Cards / Containers (Panel)
- **Corner Style:** retto, con smusso a 45° di 12px su due angoli via `clip-path` (`--clip-cut`). Mai arrotondato.
- **Background:** `--panel` (translucido) o `--panel-solid` per moduli pieni.
- **Border:** 1px `--line`; tick/bracket rosso come marcatore d'angolo.
- **Shadow Strategy:** nessuna a riposo (vedi Elevation).
- **Internal Padding:** `--sp-md` (1.25rem).
- **Label:** ogni modulo ha un'etichetta mono tipo `[ PROFILE ]` / `QUEST_01`.

### Inputs / Fields
Il sito è in sola lettura: nessun form di input. (Unico campo "interattivo": link mailto.)

### Navigation
- **Bottom nav** fissa, tab mono maiuscole (`01 STATS`, `02 QUESTS`, …), tab attiva rossa. Bottoni fisici 3D.
- **Mobile (<900px):** nav scrollabile orizzontale, tab attiva auto-centrata; readout e tip ridotti/nascosti.
- **Header:** breadcrumb `CV / GABRIELE_TOMASSO`, titolo pagina centrato, barra di progresso skew, window controls `_ □ ×`. Su `/projects/*` diventa barra finestra `*.EXE`.

### Signature Component — Glitch Title
Titolo a tre layer sovrapposti: base + due cloni cromatici (rosso/ciano) che si aprono a fette via `clip-path` su loop sfasati, con scossone occasionale. È la firma del sistema; appare nella Intro e, in variante one-shot, sul nome nella pagina Stats.

## 6. Do's and Don'ts

### Do:
- **Do** tenere il rosso `#E5232B` sotto il ~15% della superficie: è un segnale d'allerta, non un colore di sfondo.
- **Do** usare spigoli a 90° o smussi a 45° (`clip-path`) per ogni contenitore.
- **Do** mettere in Share Tech Mono maiuscolo tutto ciò che è "telemetria" (codici, date, stati, label di modulo).
- **Do** dare profondità con il glow rosso e il tilt 3D, lasciando le superfici piatte a riposo.
- **Do** fornire un'alternativa `prefers-reduced-motion` per ogni FX (glitch, tilt, scanline, tear).
- **Do** garantire contrasto WCAG AA: attenzione a `--ink-dim` (`#8a8a96`) su nero per testo piccolo.

### Don't:
- **Don't** trasformare il portfolio in una **griglia Behance/Dribbble** di card identiche e anonime: l'interfaccia è parte del lavoro.
- **Don't** introdurre un secondo colore di brand. Il ciano è solo glitch; tutto il resto è rosso, nero, grigio.
- **Don't** usare `border-radius` arrotondati: rompono l'identità HUD.
- **Don't** mettere ombre morbide ambientali a riposo; la profondità è una risposta a uno stato.
- **Don't** scrivere testo grigio su fondo rosso (si slava): usa un rosso più scuro o una trasparenza dell'inchiostro.
- **Don't** scadere nel template SaaS pulito, nel pastello o nel look istituzionale senza voce.
