import { graphql, useStaticQuery } from "gatsby"

type SiteFiles = {
  allFile: {
    nodes: {
      name: string
      publicURL: string
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
          }
        }
      }
    `
  )

  return allFile.nodes
}

export { useSiteFiles }
