import React from 'react'
import App from '../App'

export const ssgOptions = {
  slug: 'menu',
  routeUrl: '/menu',
  context: async (children) => {
    const { StaticRouter } = await import('react-router-dom/server')
    const StoreContextProvider = (await import('../Context/StoreContext')).default
    return (
      <StaticRouter location="/menu">
        <StoreContextProvider>{children}</StoreContextProvider>
      </StaticRouter>
    )
  },
}

const MenuPage = () => <App />

export default MenuPage
