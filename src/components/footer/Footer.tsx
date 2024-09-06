import React from "react"
import FollowSection from "./components/FollowSection"
import EmailSection from "./components/EmailSection"
import LegalSection from "./components/LegalSection"

const Footer = () => {
  return (
    <footer className="bg-black text-white p-12 min-h-[25em] flex flex-col">
      <div className="flex flex-1 py-10 justify-between flex-wrap gap-10">
        <div className="h-36 w-36 justify-self-center cursor-pointer">
          <img src="/logo_white.png" className="h-full w-full object-contain" />
        </div>

        {/* <EmailSection /> */}

        <FollowSection />
      </div>
      <LegalSection />
    </footer>
  )
}

export default Footer
