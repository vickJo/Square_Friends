import React from "react"

import { useSiteFiles } from "../../hooks/use-site-files"

type Props = React.HTMLAttributes<HTMLDivElement> & {
  bannerName: string
  title: string
  subtitle: string
  description: string
  avatar: JSX.Element
  action: JSX.Element
}
const Card: React.FC<Props> = ({
  bannerName,
  title,
  subtitle,
  description,
  avatar,
  action,
  ...rest
}) => {
  const files = useSiteFiles()

  const cover = files.filter(
    file => file.name === bannerName && file.relativeDirectory === "covers"
  )[0]

  return (
    <div className="card" {...rest}>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: "59.35%",
          borderRadius: "15px 15px 0px 0px",
          background: `url(${cover?.publicURL}) #ccc`,
          backgroundSize: "cover",
        }}
      />
      <div className="avatar">{avatar}</div>
      <div className="profile">
        <h2>{title}</h2>
        <h5>{subtitle}</h5>
        <p>{description}</p>
      </div>
      <div className="action">{action}</div>
    </div>
  )
}

export { Card as default }
