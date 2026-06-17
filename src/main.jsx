import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import './styles/tokens.css'
import './styles/style.css'
import './styles/hud.css'
import App from './App.jsx'

// reducedMotion="user": framer rispetta prefers-reduced-motion (anima solo
// opacity, salta transform/blur/sweep) senza dover gestirlo pannello per pannello.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </StrictMode>,
)
