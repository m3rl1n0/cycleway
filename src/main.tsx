import React from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/index.css'
import App from '@/app/App'

const root = document.getElementById('root')!
createRoot(root).render(<App />)
