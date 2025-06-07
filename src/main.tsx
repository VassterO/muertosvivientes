import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
import './styles/main.css'

// Obtiene el elemento raíz del DOM donde se montará la aplicación de React.
const rootElement = document.getElementById('root')!
const root = ReactDOM.createRoot(rootElement)

// Renderiza la aplicación principal de React, envuelta en el HashRouter.
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)

// --- Lógica del cargador de página (loader) ---
// Esta lógica asegura que el cargador solo se muestre en conexiones lentas.

const loader = document.getElementById('loader')

// Solo proceder si el elemento del cargador existe en el DOM.
if (loader) {
  // Se crea un temporizador para mostrar el cargador después de 500ms.
  const showLoaderTimeout = setTimeout(() => {
    loader.classList.add('loader--visible')
  }, 500)

  // Cuando la página y todos sus recursos (imágenes, etc.) han terminado de cargar.
  window.addEventListener('load', () => {
    // 1. Se cancela el temporizador. Si la carga fue rápida (<500ms), esto evita que el cargador aparezca.
    clearTimeout(showLoaderTimeout)

    // 2. Se asegura que el cargador se oculte con una transición suave.
    loader.classList.remove('loader--visible')
    loader.classList.add('loader--hidden')

    // 3. Después de que la transición de ocultado termine, se elimina el elemento del DOM para mantenerlo limpio.
    loader.addEventListener('transitionend', () => {
      loader.remove()
    })
  })
}
