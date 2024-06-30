import React from "react"
import Meni from "./Meni"
import { AiFillHome } from "react-icons/ai"
import { BsFillInfoCircleFill } from "react-icons/bs"
import Link from "next/link"
import Darkmode from "./Darkmode"
function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <Meni title="Home" address="/" Icon={AiFillHome} />
        <Meni title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        <Darkmode />
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-md">
            IMDB
          </span>
          <span className="text-xl hidden sm:inline">clone</span>
        </Link>
      </div>
    </div>
  )
}

export default Header
