import React from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

type SidebarIconProps = {
  nav: boolean
  setNav: (nav: boolean) => void
}

const SidebarIcon = ({ nav, setNav }: SidebarIconProps) => {
  function handleNav() {
    setNav(!nav)
  }

  return (
    <div onClick={handleNav} className="block md:hidden pb-2">
      {nav ? (
        <AiOutlineClose color="black" size={20} />
      ) : (
        <AiOutlineMenu color="black" size={20} />
      )}
    </div>
  )
}

export default SidebarIcon
