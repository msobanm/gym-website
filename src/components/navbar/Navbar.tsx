import React from "react"
import { navList } from "./utils/navList"
import { Link } from "react-router-dom"
import Icons from "./components/Icons"

const Navbar = () => {
  return (
    <nav className="bg-white p-2 fixed z-50 w-full">
      <div className="container mx-auto grid grid-cols-3 items-center content-center">
        <ul className="flex gap-12">
          {navList.map((item) => (
            <li className="text-primary cursor-pointer" key={item.title}>
              <Link
                to={item.title === "Home" ? `/` : `${item.title.toLowerCase()}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link to={`/`} className="h-12 w-12 justify-self-center cursor-pointer">
          <img src="/logo.png" className="h-full w-full object-contain" />
        </Link>
        <Icons />
      </div>
    </nav>
  )
}

export default Navbar
