import React from "react"

import SEO from "../components/seo"
import PageTitle from "../components/page-title"

const Index: React.FC<{}> = () => {
  return (
    <>
      <SEO title="Friends List" />
      <PageTitle title="Friends List" extra={<div></div>} />
    </>
  )
}

export { Index as default }
