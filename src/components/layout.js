import React from "react"

import { Nav } from "./Nav"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="max-w-screen-xl">{children}</div>
    </>
  )
}

export { Layout }
