import { graphql, useStaticQuery } from "gatsby"

type SiteMetadata = {
  site: {
    siteMetadata: {
      description: string
      title: string
    }
  }
}

function useSiteMetadata() {
  const { site } = useStaticQuery<SiteMetadata>(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            description
            title
          }
        }
      }
    `
  )

  return site.siteMetadata
}

export { useSiteMetadata }
