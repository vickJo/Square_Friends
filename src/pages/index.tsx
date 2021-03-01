import React from "react"
import { graphql, PageProps } from "gatsby"

import SEO from "../components/seo"
import PageTitle from "../components/page-title"

type Props = PageProps & {
  data: {
    allFile: {
      nodes: {
        name: string
        publicURL: string
        relativeDirectory: string
      }[]
    }
  }
}

const Index: React.FC<Props> = ({ ...props }) => {
  return (
    <>
      <SEO title="Friends List" />
      <PageTitle title="Friends List" extra={<div></div>} />
    </>
  )
}

export const PageQuery = graphql`
  query {
    allFile {
      nodes {
        name
        publicURL
        relativeDirectory
      }
    }
  }
`
export { Index as default }
