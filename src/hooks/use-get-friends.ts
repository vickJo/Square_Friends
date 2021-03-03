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
  const [friends, setFriends] = React.useState<FriendPayload[]>(() => {
    if (typeof window === "undefined") {
      return Data
    }

    const cache = window.localStorage.getItem(STORAGE_KEY)

    if (cache) {
      return JSON.parse(cache)
    }

    const data = Data.map(user => ({ ...user, following: false }))
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    return data
  })

  const toggleFavorite = React.useCallback(
    (id: number) => (ev: React.MouseEvent<HTMLDivElement>) => {
      ev.stopPropagation()

      setFriends(data =>
        data.map(f => (f.id === id ? { ...f, following: !f.following } : f))
      )
    },
    []
  )

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(friends))
    }
  }, [friends])

  return { friends, toggleFavorite }
}

export { useGetFriends }
