import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppWrapper } from './context/appContext.tsx'
import { Toaster } from './components/ui/sonner.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AppWrapper>
      <App />
      <Toaster />
    </AppWrapper>
  </BrowserRouter>
)
