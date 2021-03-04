import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { useSiteLanguage } from "../hooks/use-site-language"

const NotFound: React.FC<{}> = () => {
  const { dictionary } = useSiteLanguage()

  return (
    <div className="not-found">
      <SEO title={dictionary.notFoundSeo} />
      <h1>404</h1>
      <p>
        {dictionary.nothingHere}. <Link to="/">{dictionary.goHome}</Link>
      </p>
    </div>
  )
}

export { NotFound as default }
