import React from "react"

import { useSiteFiles } from "../../hooks/use-site-files"

type Props = Omit<
  React.HTMLAttributes<HTMLImageElement>,
  "src" | "srcset" | "alt"
> & {
  name: string
  directory?: string
}

const Icon: React.FC<Props> = ({ name: iconName, directory = "", ...rest }) => {
  const files = useSiteFiles()

  const icon = files.filter(
    ({ name, relativeDirectory }) =>
      name === iconName && relativeDirectory === directory
  )[0]

  return <img src={icon.publicURL} alt={icon.name} {...rest} />
}

export { Icon as default }
