import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Box } from "../components"

import { useWindowWidth, useWindowScrollTop } from "../hooks"
import flatLogoBlue from "../images/WHY_Logo_Horizontal_Blue-16.png"
import stickerLogoBlue from "../images/WHY_Logo_Sticker_Inverted-15.png"
import flatLogoWhite from "../images/WHY_Logo_Horizontal_White-17.png"
import stickerLogoWhite from "../images/WHY_Logo_Sticker-18.png"

const Nav = () => {
  const scrolled = useWindowScrollTop()
  const windowWidth = useWindowWidth()

  const small = windowWidth < 1000

  return (
    <nav>
      <Box
        className="bg-transition"
        display={small ? "block" : "flex"}
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="1"
        py="2"
        pl="2"
        pr="4"
        justifyContent="space-between"
        alignItems="center"
        bg={scrolled && "white"}
      >
        <Link to="/">
          <img
            src={
              small
                ? scrolled
                  ? flatLogoBlue
                  : flatLogoWhite
                : scrolled
                ? flatLogoBlue
                : stickerLogoBlue
            }
            className="w-40 mx-auto"
            alt="We Hear You Logo"
          />
        </Link>
        {small ? (
          <Box
            bg="white"
            className="box-shadow"
            width="100%"
            position="fixed"
            display="flex"
            bottom="0"
            left="0"
            right="0"
            height="50px"
          >
            <Link
              to="/"
              className="hover:bg-orange-400 bg-orange-600 text-blue-500 w-1/2 font-bold text-center py-3"
            >
              Menu
            </Link>
            <Link
              to="/"
              className="hover:bg-orange-400 bg-orange-500 text-blue-500 w-1/2 font-bold text-center py-3"
            >
              Call to Action
            </Link>
          </Box>
        ) : (
          <Box display="flex" alignItems="center">
            {/* <Link to="/" className="text-white hover:underline mr-8">
              Menu
            </Link>
            <Link to="/" className="text-white hover:underline mr-8">
              Menu
            </Link> */}
            <Link
              to="/"
              className="hover:bg-orange-500 bg-white text-blue-500 font-bold py-2 px-4 rounded"
            >
              <FontAwesomeIcon icon="coffee" />
            </Link>
          </Box>
        )}
      </Box>
    </nav>
  )
}

export { Nav }
