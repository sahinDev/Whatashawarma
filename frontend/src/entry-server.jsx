import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import StoreContextProvider from './Context/StoreContext'
import App from './App'

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </StaticRouter>
  )
}
