import React from 'react'
import Headers from '../../Components/Header/Header'
import Footer from '../../Components/footer/Footer'
import Hero from '../../Components/Hero/Hero'
import RestaurantMenu from '../../Components/ui/RestorantMenue'
import HowToUse from '../../Components/ui/HowToUse'

const Homepage = () => {
  return (
    <>
    <Headers />
    < Hero />
    <RestaurantMenu />
    <HowToUse />
   {/* <Footer /> */}
    </>
  )
}

export default Homepage