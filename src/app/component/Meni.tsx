import Link from "next/link"
import React from "react"

function Meni({ title, address, Icon }) {
  return (
    <Link href={address} className="hover:text-amber-500 ">
      <Icon />
      <p className="uppercase hidden sm:inline text-sm ">{title}</p>
    </Link>
  )
}

export default Meni
