import React from "react"
import { Link } from "gatsby"
import { useSiteFiles } from "../hooks/use-site-files"

type Props = {
  layout?: "base"
}

const Header: React.FC<Props> = ({ layout }) => {
  const files = useSiteFiles()
  const logo = files.filter(({ name }) => name === "logo")[0]

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo.publicURL} alt={logo.name} />
        </Link>
      </div>

      {layout === "base" ? null : (
        <>
          <div></div>
        </>
      )}
    </div>
  )
}

export { Header as default }
