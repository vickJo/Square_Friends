import React from "react"
import { LanguageContext } from "../util/contexts"
import en from "../util/lang/en.json"
import fr from "../util/lang/fr.json"

function useSiteLanguage() {
  const { language } = React.useContext(LanguageContext)

  return {
    dictionary: language === "en" ? en : fr,
  }
}

export { useSiteLanguage }
