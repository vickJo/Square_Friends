import { graphql, useStaticQuery } from "gatsby"

type SiteFiles = {
  allFile: {
    nodes: {
      name: string
      publicURL: string
      relativeDirectory: string
    }[]
  }
}

function useSiteFiles() {
  const { allFile } = useStaticQuery<SiteFiles>(
    graphql`
      query siteFiles {
        allFile {
          nodes {
            name
            publicURL
            relativeDirectory
          }
        }
      }
    `
  )

  return allFile.nodes
}

export { useSiteFiles }
