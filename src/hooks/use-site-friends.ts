import React from "react"

import Data from "../data/friendsList.json"
import storage from "../util/storage"

const STORAGE_KEY = "__square_friends"

export interface IFriendPayload {
  id: number
  name: string
  social: string
  bio: string
  date: string
  following: boolean
}

function useSiteFriends() {
  const [friends, setFriends] = React.useState<IFriendPayload[]>(() => {
    const cachedData = storage.get(STORAGE_KEY)

    if (cachedData) {
      return cachedData
    }

    const data = Data.map(user => ({ ...user, following: false }))
    storage.set(STORAGE_KEY, data)
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

  const getFriend = (friendId: string) => {
    return friends.filter(({ id }) => id === +friendId)[0]
  }

  React.useEffect(() => {
    storage.set(STORAGE_KEY, friends)
  }, [friends])

  return { friends, toggleFavorite, getFriend }
}

export { useSiteFriends }
