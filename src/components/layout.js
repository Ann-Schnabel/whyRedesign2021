import React from "react"

import { Nav } from "./Nav"

const Layout = ({ children }) => {
  return (
    <div className="max-w-screen-xl">
      {/* <Nav /> */}
      {children}
    </div>
  )
}

export { Layout }
