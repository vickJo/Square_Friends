import React from "react"
import { navigate, PageProps } from "gatsby"

import SEO from "../components/seo"
import Image from "../components/image"
import PageTitle from "../components/page-title"
import UserCard from "../components/card"
import { useSiteFriends } from "../hooks/use-site-friends"
import { useSiteLanguage } from "../hooks/use-site-language"

const Index: React.FC<PageProps> = () => {
  const { dictionary } = useSiteLanguage()
  const { friends, toggleFavorite } = useSiteFriends()
  const [openDropdown, setOpenDropdown] = React.useState<boolean>(false)
  const [order, setOrder] = React.useState<"Newest" | "Oldest">("Newest")

  const sortFriendsList = React.useCallback(
    (order: "Newest" | "Oldest") => () => {
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
      <SEO title={dictionary.indexSeo} />
      <PageTitle
        title={dictionary.homeTitle}
        extra={
          <div className="landing-extra">
            <Image name="search" directory="icons" />
            <div
              className="sort-items"
              onClick={() => setOpenDropdown(o => !o)}
            >
              <div className="view">
                {dictionary.sortBy}:{" "}
                <b>
                  {order === "Newest"
                    ? dictionary.newestSort
                    : dictionary.oldestSort}
                </b>
              </div>
              <div className="vertical-line" />
              <Image className="icd" name="dropdown" directory="icons" />
              <div className={`dropdown ${openDropdown ? " open" : ""}`}>
                <ul>
                  <li onClick={sortFriendsList("Newest")}>
                    {dictionary.newestSort}
                  </li>
                  <li onClick={sortFriendsList("Oldest")}>
                    {dictionary.oldestSort}
                  </li>
                </ul>
              </div>
            </div>
            <Image name="filter" directory="icons" />
          </div>
        }
      />

      <div className="card-container">
        {friendsList.map(friend => (
          <UserCard
            key={friend.id}
            title={friend.name}
            subtitle={friend.social}
            description={friend.bio}
            avatar={<Image name={`${friend.id}`} directory={"avatars"} />}
            bannerName={`${friend.id}`}
            action={
              <div
                className="card-action"
                onClick={toggleFavorite(friend.id)}
                role="button"
              >
                {friend.following ? (
                  <Image name="dot" directory="icons" className="dot" />
                ) : null}
                {friend.following ? dictionary.following : dictionary.follow}
              </div>
            }
            onClick={() => navigate(`/friend-details/${friend.id}`)}
          />
        ))}
      </div>
    </>
  )
}

export { Index as default }
