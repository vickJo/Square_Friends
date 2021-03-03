import React from "react"
import Data from "../data/friendsList.json"

type FriendPayload = {
  id: number
  name: string
  social: string
  bio: string
  date: string
  following: boolean
}

function useGetFriends() {
  const getData = (): FriendPayload[] => {
    const cachedData = window.localStorage.getItem("__square_friends")

    if (cachedData) {
      return JSON.parse(cachedData)
    }

    const data = Data.map(friend => ({ ...friend, following: false }))
    window.localStorage.setItem("__square_friends", JSON.stringify(data))
    return data
  }

  const [friends, setFriends] = React.useState(getData())

  const toggleFavorite = React.useCallback(
    (friendId: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()

      setFriends(data =>
        data.map(f =>
          f.id === friendId ? { ...f, following: !f.following } : f
        )
      )
    },
    []
  )

  React.useEffect(() => {
    window.localStorage.setItem("__square_friends", JSON.stringify(friends))
  }, [friends])

  return {
    friends,
    toggleFavorite,
  }
}

export { useGetFriends }
