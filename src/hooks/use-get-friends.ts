import React from "react"
import Data from "../data/friendsList.json"

const STORAGE_KEY = "__square_friends"

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
    const data = Data.map(friend => ({ ...friend, following: false }))
    
    if (!window) {
      return data;
    }

    const cachedData = window.localStorage.getItem(STORAGE_KEY)

    if (cachedData) {
      return JSON.parse(cachedData)
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
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
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(friends))
  }, [friends])

  return {
    friends,
    toggleFavorite,
  }
}

export { useGetFriends }
