import React from "react"

import Icon from "../icon"

const Search: React.FC<{}> = () => {
  return (
    <div className="search">
      <div className="field">
        <input type="text" placeholder="Search" />
        <div className="icon">
          <Icon name="search" directory="icons" />
        </div>
      </div>
    </div>
  )
}

export { Search as default }
