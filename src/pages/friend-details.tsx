import React from "react"
import { Link, PageProps } from "gatsby"

import SEO from "../components/seo"
import Image from "../components/image"
import { useSiteFiles } from "../hooks/use-site-files"
import { clearActiveFriend, FriendContext } from "../util/contexts"
import { useSiteLanguage } from "../hooks/use-site-language"

const FriendDetails: React.FC<PageProps> = () => {
  const { dictionary } = useSiteLanguage()
  const files = useSiteFiles()
  const { activeFriend: friend, setActiveFriend } = React.useContext(
    FriendContext
  )

  React.useEffect(() => {
    return () => {
      clearActiveFriend()
      setActiveFriend(null)
    }
  }, [])

  if (!friend) {
    return null
  }

  const cover = files.filter(
    file => +file.name === friend.id && file.relativeDirectory === "covers"
  )[0]

  return (
    <div className="friend-details">
      <SEO title="Friend Details" />

      <div className="go-back">
        <Link to="/">{dictionary.homeBackLink}</Link>
      </div>

      {!friend ? null : (
        <>
          <div className="images">
            <div
              className="cover"
              style={{
                background: `url(${cover?.publicURL}) #ccc`,
                backgroundSize: "cover",
              }}
            />
            <Image
              className="avatar"
              name={`${friend.id}`}
              directory={`avatars`}
            />
          </div>

          <div className="profile">
            <h2>{friend.name}</h2>
            <p>{friend.social}</p>
            <span>Connected on: {new Date(friend.date).toUTCString()}</span>
          </div>

          <div className="divider" />

          <div className="bio">
            <h2>{dictionary.bio}</h2>
            <p>{friend.bio}</p>
          </div>
        </>
      )}
    </div>
  )
}

export { FriendDetails as default }
