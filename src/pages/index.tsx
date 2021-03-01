import React from "react"
import { graphql, PageProps } from "gatsby"

import SEO from "../components/seo"
import PageTitle from "../components/page-title"
import Icon from "../components/icon"

type DataProps = {
  allFile: {
    nodes: {
      name: string
      publicURL: string
      relativeDirectory: string
    }[]
  }
}

const Index: React.FC<PageProps<DataProps>> = ({ data }) => {
  return (
    <>
      <SEO title="Friends List" />
      <PageTitle
        title="Friends List"
        extra={
          <div className="landing-extra">
            <Icon name="search" directory="icons" />
            <div className="sort-items">
              <div className="view">
                Sort by: <b>Newest First</b>
              </div>
              <div className="divider" />
              <Icon name="dropdown" directory="icons" />
            </div>
            <Icon name="filter" directory="icons" />
          </div>
        }
      />
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
