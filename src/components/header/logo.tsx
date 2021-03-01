import React from "react"
import { Link } from "gatsby"

import Image from "../icon"

const Logo: React.FC<{}> = () => {
  return (
    <div className="logo">
      <Link to="/">
        <Image name="logo" />
      </Link>
    </div>
  )
}

export { Logo as default }
