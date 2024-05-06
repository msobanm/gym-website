import React from "react"
import { Link } from "react-router-dom"
import { navList } from "../../../utils/data"

type SidebarProps = {
  nav: boolean
  setNav: (nav: boolean) => void
}

const Sidebar = ({ nav, setNav }: SidebarProps) => {
  return (
    <ul
      className={
        nav
          ? "fixed md:hidden right-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-primary ease-in-out duration-500"
          : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 right-[-100%]"
      }
    >
      {/* Mobile Logo */}
      <h1 className="w-full text-3xl font-bold text-white m-4">Ecommerce</h1>

      {/* Mobile Navigation Items */}
      {navList.map((item) => (
        <Link
          to={item.title === "Home" ? `/` : `${item.title.toLowerCase()}`}
          key={item.title}
          className="h-full"
          onClick={() => setNav(false)}
        >
          <li
            key={item.title}
            className="p-4 text-white relative before:content-[''] before:absolute before:bottom-0 before:border-b before:border-gray-600 before:w-4/5 "
          >
            {item.title}
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default Sidebar
