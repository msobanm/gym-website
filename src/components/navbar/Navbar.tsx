import React, { useState } from "react"
import { navList } from "../../utils/data"
import { Link } from "react-router-dom"
import Icons from "./components/Icons"
import SidebarIcon from "./components/SidebarIcon"
import Sidebar from "./components/Sidebar"

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false)

  return (
    <nav className="bg-white h-[56px] pt-2 fixed z-50 w-full">
      <div className="px-2 lg:px-8 grid grid-cols-3 items-center content-center">
        <ul className="max-[700px]:hidden flex gap-0 xl:gap-8 h-full items-center mb-0">
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
        <SidebarIcon nav={nav} setNav={setNav} />
        <Link
          to={`/`}
          className="h-12 w-12 justify-self-center cursor-pointer pb-2"
        >
          <img src="/logo.png" className="h-full w-full object-contain" />
        </Link>
        <div className="justify-self-end">
          <Icons />
        </div>
      </div>
      <Sidebar nav={nav} setNav={setNav} />
    </nav>
  )
}

export default Navbar
