import React from 'react'
import Headers from '../../Components/Header/Header'
import Footer from '../../Components/footer/Footer'
import Hero from '../../Components/Hero/Hero'
import RestaurantMenu from '../../Components/ui/RestorantMenue'
import HowToUse from '../../Components/ui/HowToUse'
import Review from '../../Components/ui/Review'

const Homepage = () => {
  return (
    <>
    < Hero />
    <RestaurantMenu />
    <HowToUse />
    <Review />
    </>
  )
}

export default Homepage