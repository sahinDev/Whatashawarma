import React from 'react'
import App from '../App'

export const ssgOptions = {
  slug: 'specials',
  routeUrl: '/specials',
  context: async (children) => {
    const { StaticRouter } = await import('react-router-dom/server')
    const StoreContextProvider = (await import('../Context/StoreContext')).default
    return (
      <StaticRouter location="/specials">
        <StoreContextProvider>{children}</StoreContextProvider>
      </StaticRouter>
    )
  },
}

const SpecialsPage = () => <App />

export default SpecialsPage
