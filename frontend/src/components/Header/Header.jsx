import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './Header.css'
// import pizzaWebsite from '../../assets/pizzaWebsite.webp'

const Header = () => {
    return (
    <section className="hero">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="hero-swiper"
      >
        <SwiperSlide>
            <div className='header'>
                <div className='header-contents'>
                    <h2>Order your favorite shawarma and pizza here!</h2>
                    <p>Welcome to What A Shawarma, where the flavors of shawarma and pizza unite! Indulge in our perfectly crafted shawarma, available as a sandwich, wrap, or bowl, or savor our signature pizzas, topped with options like pepperoni, cheese, vegetables,and succulent shawarma meat – even customize with half-and-half combinations like pepperoni and beef for the best of both worlds.</p>
                    <a href="#explore-menu"><button>View Menu</button></a>
                </div>
            </div>
        </SwiperSlide>
        {/* <SwiperSlide>
            <div className="hero-slide slide-2">
                <img
                  className="slide-media"
                  src={pizzaWebsite}
                  alt="Fresh pizza preparation"
                  loading="lazy"
                  decoding="async"
                />
            </div>
        </SwiperSlide> */}
      </Swiper>
    </section>
    )
}

export default Header
