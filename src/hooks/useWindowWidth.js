import React from "react"

const isBrowser = typeof window !== "undefined"

const useWindowWidth = () => {
  const [width, setWidth] = React.useState(isBrowser && window.innerWidth)

  const handleResize = () => setWidth(window.innerWidth)

  React.useEffect(() => {
    if (isBrowser) {
      window.addEventListener("resize", handleResize)
      return () => {
        window.addEventListener("resize", handleResize)
      }
    }
  })

  return width
}

export { useWindowWidth }
