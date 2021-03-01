import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const NotFound: React.FC<{}> = () => {
  return (
    <div className="not-found">
      <SEO title="Not Found" />
      <h1>404</h1>
      <p>
        We've got nothing here. <Link to="/">Go home</Link>
      </p>
    </div>
  )
}

export { NotFound as default }
