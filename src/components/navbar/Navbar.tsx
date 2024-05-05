import React from "react"
import { navList } from "./utils/navList"
import { icons } from "./utils/icons"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-white p-4 fixed z-50 w-full">
      <div className="container mx-auto grid grid-cols-3 items-center content-center">
        <ul className="flex gap-12">
          {navList.map((item) => (
            <li className="text-primary cursor-pointer" key={item.title}>
              <Link to={`${item.title.toLowerCase()}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <Link to={`/`} className="h-12 w-12 justify-self-center cursor-pointer">
          <img src="/logo.png" className="h-full w-full object-contain" />
        </Link>
        <div className="flex gap-10 justify-self-end">
          {icons.map((icon, i) => (
            <div
              key={i}
              className="hover:bg-gray-300 cursor-pointer p-2 rounded-full transition duration-200 ease-in-out"
            >
              <icon.icon className="h-6 w-6" />
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
