---
description: Deploy to GitHub Pages (workflow automatico)
---

# Deploy to GitHub Pages

Il tuo progetto è configurato con **GitHub Actions** per il deploy automatico su GitHub Pages con il dominio personalizzato **gabrieletomasso.it**.

## ✅ Come Funziona

Ogni volta che fai `git push` sul branch `main`, GitHub Actions:
1. Installa automaticamente le dipendenze npm
2. Fa il build del progetto con Vite
3. Pubblica il contenuto su GitHub Pages
4. Il sito è disponibile su https://gabrieletomasso.it

## 📝 Workflow Standard (Cosa Fare)

### 1. Modifica il codice
Lavora normalmente sui tuoi file React, CSS, ecc.

### 2. Testa localmente (opzionale ma consigliato)
```bash
// turbo
npm run dev
```
Apri http://localhost:5173 per vedere le modifiche in tempo reale.

### 3. Commit le modifiche
```bash
// turbo
git add .
git commit -m "Descrizione delle modifiche"
```

### 4. Push al repository
```bash
// turbo
git push origin main
```

### 5. Verifica il deploy
1. Vai su GitHub → repository "Portfolio" → tab "Actions"
2. Troverai il workflow "Deploy to GitHub Pages" in esecuzione
3. Attendi che completi (icona verde ✓)
4. Attendi 1-2 minuti per la propagazione DNS
5. Apri https://gabrieletomasso.it per verificare le modifiche

## ⚠️ Cosa NON Fare

**NON usare `npm run deploy`** - questo comando usa `gh-pages` che pubblica su un branch separato e crea conflitti con GitHub Actions. Il deploy è completamente automatico tramite GitHub Actions.

## 🔧 Configurazione Attuale

- **File di configurazione**: `.github/workflows/deploy.yml`
- **Base path**: `/` (root, per il dominio personalizzato)
- **Router**: HashRouter (compatibile con GitHub Pages)
- **Dominio personalizzato**: gabrieletomasso.it (configurato tramite CNAME)

## 🐛 Risoluzione Problemi

### Pagina bianca dopo il deploy
- **Causa**: Probabilmente il `base` path in `vite.config.js` è errato
- **Soluzione**: Assicurati che in `vite.config.js` ci sia `base: '/'` (NON `base: '/Portfolio/'`)

### Il workflow GitHub Actions fallisce
1. Controlla i log nella tab Actions su GitHub
2. Verifica che il `package.json` abbia tutti gli script necessari
3. Assicurati che non ci siano errori di build locali (`npm run build`)

### Le modifiche non appaiono sul sito
1. Controlla che il workflow Actions sia completato con successo
2. Svuota la cache del browser (Ctrl+F5 o Cmd+Shift+R)
3. Attendi qualche minuto per la propagazione DNS
