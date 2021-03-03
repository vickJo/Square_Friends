import React from "react"
import { navigate, PageProps } from "gatsby"

import SEO from "../components/seo"
import Icon from "../components/icon"
import PageTitle from "../components/page-title"
import UserCard from "../components/card"
import { useGetFriends } from "../hooks/use-get-friends"

const Index: React.FC<PageProps> = props => {
  const { friends, toggleFavorite } = useGetFriends()

  const handleViewFriendDetails = React.useCallback(
    (id: number) => () => {
      navigate(`/friend-details/${id}`)
    },
    []
  )

  const friendsList = friends

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

      <div className="card-container">
        {friendsList.map(friend => {
          const { id, name, social, bio, following } = friend

          return (
            <UserCard
              key={id}
              title={name}
              subtitle={social}
              description={bio}
              avatar={<Icon name={`${id}`} directory={"avatars"} />}
              bannerName={`${id}`}
              action={
                <div
                  className={`card-action ${following ? "active" : ""}`}
                  onClick={toggleFavorite(id)}
                >
                  {following ? "Following" : "Follow"}
                </div>
              }
              onClick={handleViewFriendDetails(id)}
            />
          )
        })}
      </div>
    </>
  )
}

export { Index as default }
