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
      minHeight="100vh"
      width="100vw"
      backgroundColor="#131B41"
      backgroundImage={`url(${BackgroundTop}), url(${BackgroundMiddle}), url(${BackgroundBottom})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      pt="90px"
    >
      <Box
        maxWidth="1150px"
        mx="auto"
        pt={[null, null, null, "25px"]}
        pb="100px"
        px={["25px", null, "50px", "25px"]}
      >
        <h1 className="text-white mb-12">
          Your carefully crafted <br />
          business model. <br />
          <span id="h1span">
            Now for <em>everyone.</em>
          </span>
        </h1>
        <p className="text-white max-w-4">
          We Hear You is an accessibility company with a passion for technology.
          We find innovative solutions to problems that have impacted many
          individuals for far too long.
        </p>
      </Box>
    </Box>
  </Layout>
)

export default IndexPage
