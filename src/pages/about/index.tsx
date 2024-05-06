import React from "react"

const About = () => {
  return (
    <div className="w-full py-5 grid grid-cols-1 md:grid-cols-2">
      <div className="md:h-full flex flex-col p-5 justify-center items-center gap-5">
        <h1 className="w-1/2 font-bold text-5xl">Hi, we are HABIBIS</h1>
        <p className="w-1/2 md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eaque
          minus, deleniti unde consectetur, inventore dolor suscipit excepturi
          ullam nam sit iste dolores ducimus voluptatum fuga! Consequuntur,
          error eaque. Aperiam.
        </p>
      </div>
      <div className="md:h-full w-full">
        <img src="/img/hug.png" className="w-full md:h-[50em] object-contain" />
      </div>
    </div>
  )
}

export default About
