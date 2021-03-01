import React from "react"
import { useSiteFiles } from "../../hooks/use-site-files"

const Logo: React.FC<{}> = () => {
  const files = useSiteFiles()

  const icons = files.filter(
    ({ relativeDirectory }) => relativeDirectory === "icons"
  )

  const getIcon = (iconName: string) =>
    icons.filter(({ name }) => name === iconName)[0]

  return (
    <div className="actions">
      {["user", "chat", "notification", "avatar",].map(name => {
        const icon = getIcon(name)
        return <img key={name} src={icon.publicURL} alt={icon.name} />
      })}
    </div>
  )
}

export { Logo as default }
