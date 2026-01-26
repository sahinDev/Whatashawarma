import React from 'react'
import App from '../App'

export const ssgOptions = {
  slug: 'contact',
  routeUrl: '/contact',
  context: async (children) => {
    const { StaticRouter } = await import('react-router-dom/server')
    const StoreContextProvider = (await import('../Context/StoreContext')).default
    return (
      <StaticRouter location="/contact">
        <StoreContextProvider>{children}</StoreContextProvider>
      </StaticRouter>
    )
  },
}

const ContactPage = () => <App />

export default ContactPage
