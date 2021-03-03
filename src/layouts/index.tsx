import React from "react"
import Header from "../components/header"

type Props = {
  pageContext: {
    layout?: "base"
    [x: string]: any
  }
  [x: string]: any
}

export type Theme = "dark" | "light"

const Layout: React.FC<Props> = props => {
  const {
    pageContext: { layout },
    children,
  } = props

  const [theme, setTheme] = React.useState<Theme>("light")

  return (
    <div className={`wrapper ${theme}`}>
      <Header layout={layout} theme={theme} />
      <div
        className="theme-palette"
        onClick={() => setTheme(t => (t === "dark" ? "light" : "dark"))}
      >
        {theme === "light" ? "Light" : "Dark"} Theme
      </div>
      <div className="container">{children}</div>
    </div>
  )
}

export { Layout as default }
