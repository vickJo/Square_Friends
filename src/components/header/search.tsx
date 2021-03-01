import React from "react"
import { useSiteFiles } from "../../hooks/use-site-files"

const Search: React.FC<{}> = () => {
  const files = useSiteFiles()

  const searchIcon = files.filter(
    ({ relativeDirectory, name }) =>
      relativeDirectory === "icons" && name === "search"
  )[0]

  return (
    <div className="search">
      <div className="field">
        <input type="text" placeholder="Search" />
        <div className="icon">
          <img src={searchIcon.publicURL} alt={searchIcon.name} />
        </div>
      </div>
    </div>
  )
}

export { Search as default }
