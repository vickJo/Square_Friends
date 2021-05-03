import React from "react"
import { LanguageContext } from "../../util/contexts"
import storage from "../../util/storage"

const LanguageSwicher: React.FC = () => {
  const { setLanguage, language } = React.useContext(LanguageContext)

  React.useEffect(() => {
    storage.set("__square_lang", language)
  }, [language])

  return (
    <div className="lang-switcher">
      <span
        className={language === "en" ? "on" : ""}
        onClick={() => setLanguage("en")}
      >
        EN
      </span>

      <span
        className={language === "fr" ? "on" : ""}
        onClick={() => setLanguage("fr")}
      >
        FR
      </span>
    </div>
  )
}

export { LanguageSwicher as default }
