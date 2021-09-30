import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

import { Box } from "../components"

import { useWindowWidth, useWindowScrollTop } from "../hooks"
import flatLogoBlue from "../images/WHY_Logo_Horizontal_Blue-16.png"
import stickerLogoBlue from "../images/WHY_Logo_Sticker_Inverted-15.png"
import flatLogoWhite from "../images/WHY_Logo_Horizontal_White-17.png"
import stickerLogoWhite from "../images/WHY_Logo_Sticker-18.png"

const Nav = () => {
  return (
    <nav>
      <Box
        id="navContainer"
        display="flex"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="1"
        py="3"
        pl="4"
        pr="4"
        alignItems="center"
        width="100%"
        className="bg-blue-500"
      >
        <Box>
          <Link to="/">
            <img
              src={flatLogoWhite}
              className="w-60 mx-auto"
              alt="We Hear You Logo"
            />
          </Link>
        </Box>
        <Box display="flex" width="250px" justifyContent="space-between" className="fixedMobileNav" overflow="visible">
          <a target="_blank" rel="noreferrer" href="https://facebook.com">
            <FaInstagram className="hover:bg-orange-500 bg-white text-blue-500 p-4 rounded-full box-shadow text-3xl box-content" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://facebook.com">
            <FaTwitter className="hover:bg-orange-500 bg-white text-blue-500 p-4 rounded-full box-shadow text-3xl box-content" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://facebook.com">
            <FaFacebookF className="hover:bg-orange-500 bg-white text-blue-500 p-4 rounded-full box-shadow text-3xl box-content" />
          </a>
        </Box>
      </Box>
    </nav>
  )
}

export { Nav }
