import React from "react"
import Header from "../components/header"

const BaseLayout: React.FC<{}> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header layout="base" />
      <div className="container">{children}</div>
    </div>
  )
}

export { BaseLayout as default }
