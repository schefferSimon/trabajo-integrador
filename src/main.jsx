import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Routerr } from './router/router.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routerr/>

  </StrictMode>,
)
