import React from "react"
import { navList } from "./utils/navList"
import { Link } from "react-router-dom"
import Icons from "./components/Icons"

const Navbar = () => {
  return (
    <nav className="bg-white h-[56px] pt-2 fixed z-50 w-full">
      <div className="px-8 grid grid-cols-3 items-center content-center">
        <ul className="flex gap-8 h-full items-center">
          {navList.map((item) => (
            <Link
              to={item.title === "Home" ? `/` : `${item.title.toLowerCase()}`}
              key={item.title}
              className="h-full"
            >
              <li className="flex items-center px-4 text-primary cursor-pointer border-b-4 border-transparent hover:border-secondary h-full transition duration-100 ease-in-out">
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
        <Link
          to={`/`}
          className="h-12 w-12 justify-self-center cursor-pointer pb-2"
        >
          <img src="/logo.png" className="h-full w-full object-contain" />
        </Link>
        <Icons />
      </div>
    </nav>
  )
}

export default Navbar
