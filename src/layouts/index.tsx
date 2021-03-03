import React from "react"
import Header from "../components/header"

type Props = {
  pageContext: {
    layout?: "base"
    [x: string]: any
  }
  [x: string]: any
}

type Theme = "dark" | "light"

const Layout: React.FC<Props> = props => {
  const {
    pageContext: { layout },
    children,
  } = props

  const [theme, setTheme] = React.useState<Theme>("light")

  return (
    <div className={`wrapper ${theme}`}>
      <Header layout={layout} />
      <div className="container">{children}</div>
    </div>
  )
}

export { Layout as default }
