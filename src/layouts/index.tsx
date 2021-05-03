import React from "react"
import { PageProps } from "gatsby"

import storage from "../util/storage"
import en from "../util/lang/en.json"
import fr from "../util/lang/fr.json"
import { LanguageContext } from "../util/contexts"
import Header from "../components/header"

export type ThemeType = "dark" | "light"

type Props = PageProps & {
  pageContext: PageProps["pageContext"] & {
    layout?: "base"
  }
}

const Layout: React.FC<Props> = ({ pageContext, children }) => {
  const { layout } = pageContext
  const [language, setLanguage] = React.useState<"en" | "fr">(
    () => storage.get("__square_lang") || "en"
  )
  const [theme, setTheme] = React.useState<ThemeType>("light")
  const langCtxtVal = React.useMemo(() => ({ language, setLanguage }), [
    language,
  ])
  const dictionary = React.useMemo(() => {
    return language === "en" ? en : fr
  }, [language])

  return (
    <LanguageContext.Provider value={langCtxtVal}>
      <div className={`wrapper ${theme}`}>
        <Header layout={layout} theme={theme} />
        <div
          className="theme-palette"
          onClick={() => setTheme(t => (t === "dark" ? "light" : "dark"))}
        >
          {dictionary[theme === "dark" ? "darkTheme" : "lightTheme"]}
        </div>
        <div className="container">{children}</div>
      </div>
    </LanguageContext.Provider>
  )
}

export { Layout as default }
