import React from "react"

const HeroSection: React.FC = () => {
  return (
    <div className="bg-cover bg-center h-screen flex items-center text-white bg-[url('/img/background.jpg')]">
      <div className="container mx-auto text-left">
        <h1 className="text-4xl text-primary md:text-6xl font-bold mb-4">
          Your Headline Goes Here
        </h1>
        <p className="text-lg text-primary md:text-xl mb-6">
          A short description of your product or brand.
        </p>
        <button className="bg-secondary text-white px-6 py-3 rounded hover:bg-secondary-2 focus:outline-none transition duration-200 ease-in-out shadow-md">
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default HeroSection
