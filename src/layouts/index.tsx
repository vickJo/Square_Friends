import React from "react"

const Base: React.FC<{}> = ({ children }) => {
  return (
    <>
      <h4>Base Layout</h4>
      {children}
    </>
  )
}
const Main: React.FC<{}> = ({ children }) => {
  return (
    <>
      <h4>Main Layout</h4>
      {children}
    </>
  )
}

type Props = {
  pageContext: {
    layout?: "base"
    [x: string]: any
  }
  [x: string]: any
}
const Layout: React.FC<Props> = props => {
  const {
    pageContext: { layout },
  } = props

  switch (layout) {
    case "base":
      return <Base {...(props as any)} />
    default:
      return <Main {...(props as any)} />
  }
}

export { Layout as default }
