import React from "react"

export const LanguageContext = React.createContext<{
  language: "en" | "fr"
  setLanguage: (lang: "en" | "fr") => void
}>({
  language: "en",
  setLanguage: () => {},
})
