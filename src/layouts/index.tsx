import React from "react"
import BaseLayout from "./base"
import MainLayout from "./main"

type Props = {
  pageContext: {
    layout?: "base"
    [x: string]: any
  }
  [x: string]: any
}

const Layout: React.FC<Props> = props => {
  const {
    pageContext: { layout },
  } = props

  switch (layout) {
    case "base":
      return <BaseLayout {...(props as any)} />
    default:
      return <MainLayout {...(props as any)} />
  }
}

export { Layout as default }
