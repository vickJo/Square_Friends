import React from "react"
import { Link } from "gatsby"

import Image from "../image"
import LanguageSwitcher from "./language-switcher"
import { useSiteLanguage } from "../../hooks/use-site-language"
import { ThemeType } from "../../layouts"

type Props = {
  layout?: "base"
  theme: ThemeType
}

const Header: React.FC<Props> = ({ layout, theme }) => {
  const { dictionary } = useSiteLanguage()

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <Image name={`logo${theme === "dark" ? "-dark" : ""}`} />
        </Link>
      </div>
      {layout === "base" ? null : (
        <>
          <div className="search">
            <div className="field">
              <input type="text" placeholder={dictionary.search} />
              <div className="icon">
                <Image name="search" directory="icons" />
              </div>
            </div>
          </div>

          <div className="grow" />

          <div className="actions">
            {["user", "chat", "notification", "avatar"].map(name => (
              <Image
                key={name}
                name={name}
                directory={"icons"}
                className={name === "avatar" ? "" : "no-xs"}
              />
            ))}
            <LanguageSwitcher />
          </div>
        </>
      )}
    </div>
  )
}

export { Header as default }
