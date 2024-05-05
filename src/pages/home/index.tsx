import React from "react"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import HeroSection from "./components/hero/HeroSection"
import NewArrivalSection from "./components/carousel/NewArrivalSection"
import ShopSection from "./components/shop/ShopSection"
import ReviewSection from "./components/reviews/ReviewSection"

const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-between min-h-svh">
      <Navbar />
      <HeroSection />
      <NewArrivalSection />
      <ShopSection />
      <ReviewSection />
      <Footer />
    </div>
  )
}

export default Home
