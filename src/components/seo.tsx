import React from "react"
import { Helmet } from "react-helmet"

import { useSiteMetadata } from "../hooks/use-site-metadata"

type Props = {
  title: string
  description?: string
}

const SEO: React.FC<Props> = ({ title, description }) => {
  const { title: siteTitle, description: siteDesc } = useSiteMetadata()
  const metaDescription = description || siteDesc

  return (
    <Helmet
      title={title}
      titleTemplate={`${siteTitle} - %s`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:name",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          name: "twitter:name",
          content: title,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
      ]}
    />
  )
}

export { SEO as default }
