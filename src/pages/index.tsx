import React from "react"
import { PageProps } from "gatsby"

import SEO from "../components/seo"
import Image from "../components/image"
import PageTitle from "../components/page-title"
import UserCard from "../components/card"
import { useGetFriends } from "../hooks/use-get-friends"

type orderType = "Newest" | "Oldest"

const Index: React.FC<PageProps> = () => {
  const [openDropdown, setOpenDropdown] = React.useState<boolean>(false)
  const [order, setOrder] = React.useState<orderType>("Newest")

  const { friends, toggleFavorite, viewFriendDetails } = useGetFriends()

  const sortFriendsList = React.useCallback(
    (order: orderType) => () => {
      setOrder(order)
    },
    []
  )

  const friendsList = React.useMemo(() => {
    const sorted = friends.sort((a, b) => {
      if (a.date > b.date) {
        return order === "Newest" ? -1 : 1
      }

      if (a.date < b.date) {
        return order === "Newest" ? 1 : -1
      }

      return 0
    })

    return sorted
  }, [friends, order])

  return (
    <>
      <SEO title="Friends List" />
      <PageTitle
        title="Friends List"
        extra={
          <div className="landing-extra">
            <Image name="search" directory="icons" />
            <div
              className="sort-items"
              onClick={() => setOpenDropdown(o => !o)}
            >
              <div className="view">
                Sort by: <b>{order} First</b>
              </div>
              <div className="vertical-line" />
              <Image className="icd" name="dropdown" directory="icons" />
              <div className={`dropdown ${openDropdown ? " open" : ""}`}>
                <ul>
                  <li onClick={sortFriendsList("Newest")}>Newest First</li>
                  <li onClick={sortFriendsList("Oldest")}>Oldest First</li>
                </ul>
              </div>
            </div>
            <Image name="filter" directory="icons" />
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
              avatar={<Image name={`${id}`} directory={"avatars"} />}
              bannerName={`${id}`}
              action={
                <div
                  className="card-action"
                  onClick={toggleFavorite(id)}
                  role="button"
                >
                  {following ? (
                    <Image name="dot" directory="icons" className="dot" />
                  ) : null}
                  {following ? "Following" : "Follow"}
                </div>
              }
              onClick={viewFriendDetails(friend)}
            />
          )
        })}
      </div>
    </>
  )
}

export { Index as default }
