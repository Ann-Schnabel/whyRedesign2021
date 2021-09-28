import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Layout, Box } from "../components"
import BackgroundTop from "../images/HeroBackground-01.png"
import BackgroundMiddle from "../images/HeroBackground-02.png"
import BackgroundBottom from "../images/HeroBackground-03.png"

const IndexPage = () => (
  <Layout>
    <Box
      id="heroSection"
      height="100vh"
      width="100vw"
      backgroundColor="#131B41"
      backgroundImage={`url(${BackgroundTop}), url(${BackgroundMiddle}), url(${BackgroundBottom})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      position="relative"
    >
      <h1>HELLO WORLD</h1>
    </Box>
  </Layout>
)

export default IndexPage
