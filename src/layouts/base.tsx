import React from "react"
import Header from "../components/header"

const BaseLayout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Header layout="base" />
      <div className="container">{children}</div>
    </>
  )
}

export { BaseLayout as default }
