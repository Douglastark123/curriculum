import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App.tsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider className="h-full">
      <main className="h-full bg-background text-foreground dark">
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>,
)
