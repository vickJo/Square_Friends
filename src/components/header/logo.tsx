import React from "react"
import { Link } from "gatsby"
import { useSiteFiles } from "../../hooks/use-site-files"

const Logo: React.FC<{}> = () => {
  const files = useSiteFiles()
  const logo = files.filter(({ name }) => name === "logo")[0]

  return (
    <div className="logo">
      <Link to="/">
        <img src={logo.publicURL} alt={logo.name} />
      </Link>
    </div>
  )
}

export { Logo as default }
