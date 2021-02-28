import React from "react"
import { Link } from "gatsby"

const NotFound: React.FC<{}> = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>
        We've got nothing here. <Link to="/">Go home</Link>
      </p>
    </div>
  )
}

export { NotFound as default }
