import React from "react"
import FollowSection from "./components/FollowSection"
import EmailSection from "./components/EmailSection"
import LegalSection from "./components/LegalSection"

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white p-12 min-h-[25em] flex flex-col">
      <div className="flex flex-1 py-10 justify-between flex-wrap gap-10">
        <div className="h-16 w-16">YOUR LOGO</div>

        <EmailSection />

        <FollowSection />
      </div>
      <LegalSection />
    </footer>
  )
}

export default Footer
