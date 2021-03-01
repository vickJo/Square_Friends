import React from "react"

type Props = {
  title: string
  extra?: JSX.Element
}
const PageTitle: React.FC<Props> = ({ title, extra }) => {
  return (
    <div className="page-title">
      <div className="title">
        <h2>{title}</h2>
      </div>
      {extra ? <div className="extra">{extra}</div> : null}
    </div>
  )
}

export { PageTitle as default }
