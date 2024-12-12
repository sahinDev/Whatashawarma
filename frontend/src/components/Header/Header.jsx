import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Order your favorite shawarma and pizza here!</h2>
                <p>Welcome to What A Shawarma, where the flavors of shawarma and pizza unite! Indulge in our perfectly crafted shawarma, available as a sandwich, wrap, or bowl, or savor our signature pizzas, topped with options like pepperoni, cheese, vegetables,and succulent shawarma meat – even customize with half-and-half combinations like pepperoni and beef for the best of both worlds.</p>
                <a href="#explore-menu"><button>View Menu</button></a>
            </div>
        </div>
    )
}

export default Header
