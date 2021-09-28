import React from "react"
import { Link } from "gatsby"

import { Box } from "../components"

import { useWindowWidth } from "../hooks"
import flatLogoBlue from "../images/WHY_Logo_Horizontal_Blue-16.png"
import stickerLogoBlue from "../images/WHY_Logo_Sticker_Inverted-15.png"
import flatLogoWhite from "../images/WHY_Logo_Horizontal_White-17.png"
import stickerLogoWhite from "../images/WHY_Logo_Sticker-18.png"

const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false)
  const windowWidth = useWindowWidth()

  return (
    <Box
      display="flex"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1"
      p="2"
    >
      <Link>
        <img src={stickerLogoBlue} class="w-40" alt="We Hear You Logo" />
      </Link>
      <Box>
        <Link to="/" >Menu</Link>
        <Link to="/" >Menu</Link>
        <Link to="/" className="transition-colorsborder-white border hover:bg-white text-white hover:text-blue-500 font-bold py-2 px-4 rounded">
          Call to Action
        </Link>
      </Box>
    </Box>
  )
}

export { Nav }
