import React from "react"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import HeroSection from "./components/hero/HeroSection"
import NewArrivalSection from "./components/carousel/NewArrivalSection"
import ShopSection from "./components/shop/ShopSection"
import ReviewSection from "./components/reviews/ReviewSection"
import VideoPlayerSection from "./components/videoplayer/VideoPlayerSection"

const Home = () => {
  return (
    <div className="flex flex-col justify-between min-h-svh">
      <Navbar />
      <HeroSection />
      <NewArrivalSection />
      <ShopSection />
      <VideoPlayerSection />
      <ReviewSection />
      <Footer />
    </div>
  )
}

export default Home
