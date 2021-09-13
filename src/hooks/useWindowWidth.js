import React from "react"

const useWindowWidth = () => {
  const [width, setWidth] = React.useState(window.innerWidth)

  const handleResize = () => setWidth(window.innerWidth)

  React.useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.addEventListener("resize", handleResize)
    }
  })

  return width
}

export { useWindowWidth }
