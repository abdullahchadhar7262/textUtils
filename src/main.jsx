import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Bootapp from './index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bootapp/>

  </StrictMode>,
)
