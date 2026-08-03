import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import './styles/mockups.css'
import './styles/calling.css'
import './styles/messaging.css'
import './styles/status.css'
import './styles/pages.css'
import './styles/apps.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
