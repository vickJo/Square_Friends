import React from "react"
import { Link } from "gatsby"

const NotFound: React.FC<{}> = () => {
  return (
    <>
      <h1>404</h1>
      <p>
        Page does not exist. <Link to="/">Go home</Link>
      </p>
    </>
  )
}

export default NotFound
