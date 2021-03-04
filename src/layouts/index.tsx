import React from "react"

import Header from "../components/header"
import { IFriendPayload } from "../hooks/use-get-friends"
import { FriendContext, initActiveFriend } from "../util/contexts"

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

  const [friend, setFriend] = React.useState<null | IFriendPayload>(
    initActiveFriend
  )
  const [theme, setTheme] = React.useState<Theme>("light")
  const ctxVal = { activeFriend: friend, setActiveFriend: setFriend }

  return (
    <FriendContext.Provider value={ctxVal}>
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
    </FriendContext.Provider>
  )
}

export { Layout as default }
