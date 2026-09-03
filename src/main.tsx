import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/index.css'
import { captureAttributionParams } from './utils/attribution'
import { initializeTracking } from './utils/tracking'

captureAttributionParams()
initializeTracking()

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
