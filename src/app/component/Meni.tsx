import React from "react"

function Meni({ title, address, Icon }) {
  return (
    <a href={address} className="hover:text-amber-500 ">
      <Icon />
      <h1 className="uppercase hidden sm:inline text-sm ">{title}</h1>
    </a>
  )
}

export default Meni
