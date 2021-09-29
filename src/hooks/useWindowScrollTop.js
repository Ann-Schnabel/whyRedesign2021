import React from "react"

const isBrowser = typeof window !== "undefined"

const useWindowScrollTop = () => {
  const [scroll, setScroll] = React.useState(false)

  const handleResize = () => setScroll(true)

  React.useEffect(() => {
    if (isBrowser) {
      window.addEventListener("scroll", handleResize)
      return () => {
        window.addEventListener("scroll", handleResize)
      }
    }
  })

  return scroll
}

export { useWindowScrollTop }
