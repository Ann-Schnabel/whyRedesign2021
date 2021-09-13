import React from "react"
import { Link } from 'gatsby'

import { useWindowWidth } from "../hooks"
import flatLogo from "../images/WHY_Logo_Horizontal_Blue-16.png"
import stickerLogo from "../images/WHY_Logo_Sticker_Inverted-15.png"

const Nav = () => {
  const windowWidth = useWindowWidth()

  return windowWidth >= 640 ? (
    <div className="p-4">
        <Link to="/"><img className="w-32 rotatedLogo" src={stickerLogo}></img></Link>
    </div>
  ) : (
    <div className="p-4">
        <Link className="" to="/"><img className="w-48" src={flatLogo}></img></Link>
    </div>
  )
}

export { Nav }
