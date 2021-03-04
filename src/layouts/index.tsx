import React from "react"

import Header from "../components/header"
import { IFriendPayload } from "../hooks/use-get-friends"
import {
  FriendContext,
  initActiveFriend,
  initActiveLanguage,
  LanguageContext,
} from "../util/contexts"

type Props = {
  pageContext: {
    layout?: "base"
    [x: string]: any
  }
  [x: string]: any
}

export type Theme = "dark" | "light"

const themeName = (lang: "en" | "fr", shade: Theme) => {
  const THEME_DICT = {
    en: {
      light: "Light Theme",
      dark: "Dark Theme",
    },
    fr: {
      light: "Éclairez-les",
      dark: "Thème sombre",
    },
  }
  return THEME_DICT[lang][shade]
}

const Layout: React.FC<Props> = props => {
  const {
    pageContext: { layout },
    children,
  } = props

  const [language, setLanguage] = React.useState<"en" | "fr">(
    initActiveLanguage
  )
  const [friend, setFriend] = React.useState<null | IFriendPayload>(
    initActiveFriend
  )
  const [theme, setTheme] = React.useState<Theme>("light")

  const friendCtxt = { activeFriend: friend, setActiveFriend: setFriend }
  const langCtxt = { language, setLanguage }

  return (
    <LanguageContext.Provider value={langCtxt}>
      <FriendContext.Provider value={friendCtxt}>
        <div className={`wrapper ${theme}`}>
          <Header layout={layout} theme={theme} />
          <div
            className="theme-palette"
            onClick={() => setTheme(t => (t === "dark" ? "light" : "dark"))}
          >
            {themeName(language, theme)}
          </div>
          <div className="container">{children}</div>
        </div>
      </FriendContext.Provider>
    </LanguageContext.Provider>
  )
}

export { Layout as default }
