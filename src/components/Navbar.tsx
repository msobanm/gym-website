import React from "react"
import { CiUser, CiShoppingCart } from "react-icons/ci"
import { navList } from "../utils/navList"

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto grid grid-cols-3 content-center">
        <ul className="flex gap-12">
          {navList.map((item) => (
            <li className="text-primary cursor-pointer" key={item.title}>
              {item.title}
            </li>
          ))}
        </ul>
        <div className="text-primary font-bold text-xl justify-self-center cursor-pointer">
          Your Logo
        </div>
        <div className="flex gap-10 justify-self-end">
          <CiUser className="h-6 w-6 cursor-pointer" />
          <CiShoppingCart className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
