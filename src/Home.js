import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <img
        className='home__image' 
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=''
         />

         {/* Product id, title, price, rating, image  */}
         <div className='home__row'>
         <Product
            id="12321341"
            title="Redmi 13: Elevate Your Mobile Experience with Powerful Performance and Stunning Visuals!"
            price={12999}
            rating={3}
            image="https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-pro-plus-db-gadgets360-800x600-1673019783.jpg" 
         />
         <Product
            id="12321341"
            title="SwiftPad Pro: Unleash Limitless Possibilities with the Ultimate Portable Companion!"
            price={42000}
            rating={5}
            image="https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipados14_widgets_062220_big.jpg.large.jpg" 
         />
         </div>
         <div className='home__row'>
         <Product
            id="12321341"
            title="The Lean Startup: How constant innovation  Creates opportunities"
            price={349}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81BE7eeKzAL._AC_UF1000,1000_QL80_.jpg" 
         />
         <Product
            id="12321341"
            title="QuickHeat Stainless Steel Electric Kettle: Effortless Boiling for Your Perfect Brew!"
            price={399}
            rating={2}
            image="https://img.tatacliq.com/images/i14/658Wx734H/MP000000020118857_658Wx734H_202311172052131.jpeg" 
         />
         <Product
            id="12321341"
            title="Unleash Your Best Shots: Elevate Your Game with Our Precision-Crafted Cricket Bat!"
            price={1400}
            rating={3}
            image="https://www.brewingcricket.com/cdn/shop/products/image_aacb3d0a-bed1-4265-99c5-5ec95dbf441b_1024x1024.jpg?v=1643292001" 
         />
         </div>
         <div className='home__row'>
         <Product
            id="12321341"
            title="Crystal Clear Brilliance: Explore Entertainment Excellence with Our High-Definition Smart TV!"
            price={64999}
            rating={4}
            image="https://www.hindustantimes.com/ht-img/img/2023/09/26/1600x900/best_TV_in_India_1695736021888_1695736035643.JPG" 
         />
         </div>
         
         {/* Product */}
    </div>
  )
}

export default Home