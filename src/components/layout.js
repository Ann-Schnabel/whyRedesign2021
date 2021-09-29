import React from "react"

import { Nav } from "./Nav"
import { Box } from "./StyledSystem"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  )
}

export { Layout }
