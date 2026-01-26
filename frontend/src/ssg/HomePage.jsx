import React from 'react'
import App from '../App'

export const ssgOptions = {
  slug: 'index',
  routeUrl: '/',
  context: async (children) => {
    const { StaticRouter } = await import('react-router-dom/server')
    const StoreContextProvider = (await import('../Context/StoreContext')).default
    return (
      <StaticRouter location="/">
        <StoreContextProvider>{children}</StoreContextProvider>
      </StaticRouter>
    )
  },
}

const HomePage = () => <App />

export default HomePage
