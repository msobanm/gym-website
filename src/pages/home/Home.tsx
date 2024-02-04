import React from "react"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import HeroSection from "./components/HeroSection"
import NewArrivalSection from "./components/NewArrivalSection"
import ShopSection from "./components/ShopSection"
import ReviewSection from "./components/ReviewSection"

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
