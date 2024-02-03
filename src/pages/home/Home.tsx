import React from "react"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import HeroSection from "./components/HeroSection"

const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-between min-h-svh">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}

export default Home
