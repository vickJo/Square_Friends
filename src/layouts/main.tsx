import React from "react"
import Header from "../components/header"

const MainLayout: React.FC<{}> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">{children}</div>
    </div>
  )
}

export { MainLayout as default }
