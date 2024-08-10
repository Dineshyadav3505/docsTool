import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "next-themes";
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <ThemeProvider attribute="class" >
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
