import React from "react"

const About = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2">
      <div className="h-full flex flex-col justify-center items-center gap-5">
        <h1 className="font-bold md:text-4xl lg:text-5xl">
          Hi, we are HABIBIS
        </h1>
        <p className="w-1/2 text-center md:text-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eaque
          minus, deleniti unde consectetur, inventore dolor suscipit excepturi
          ullam nam sit iste dolores ducimus voluptatum fuga! Consequuntur,
          error eaque. Aperiam.
        </p>
      </div>
      <div className="w-full">
        <img src="/img/hug.png" className="w-full h-full object-contain" />
      </div>
    </div>
  )
}

export default About
