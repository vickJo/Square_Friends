import React from "react"
import { PageProps } from "gatsby"

import SEO from "../components/seo"
import PageTitle from "../components/page-title"

const FriendDetails: React.FC<PageProps> = props => {
  return (
    <>
      <SEO title="Friend Details" />
      <PageTitle title="Friend Details" />
    </>
  )
}

export { FriendDetails as default }
