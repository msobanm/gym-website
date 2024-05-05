import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/footer/Footer"

const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-between min-h-svh">
      <Navbar />
      <Footer />
    </div>
  )
}

export default Home
