import React from "react"

import Icon from "../icon"

const Actions: React.FC<{}> = () => {
  return (
    <div className="actions">
      {["user", "chat", "notification", "avatar"].map(name => (
        <Icon
          key={name}
          name={name}
          directory={"icons"}
          className={name === "avatar" ? "" : "no-xs"}
        />
      ))}
    </div>
  )
}

export { Actions as default }
