import React from "react"

import Logo from "./logo"
import Search from "./search"
import Actions from "./actions"

type Props = {
  layout?: "base"
}

const Header: React.FC<Props> = ({ layout }) => {
  return (
    <div className="header">
      <Logo />
      {layout === "base" ? null : (
        <>
          <Search />
          <div className="grow" />
          <Actions />
        </>
      )}
    </div>
  )
}

export { Header as default }
