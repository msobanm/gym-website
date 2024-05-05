import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "./footer/Footer"
import Navbar from "./navbar/Navbar"

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[65px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
