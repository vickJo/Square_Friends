import React from "react"
import { navigate } from "gatsby"

import { cacheActiveFriend, FriendContext } from "../util/contexts"
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

function useGetFriends() {
  const { setActiveFriend } = React.useContext(FriendContext)

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

  const viewFriendDetails = React.useCallback(
    (friend: IFriendPayload) => () => {
      setActiveFriend(friend)
      cacheActiveFriend(friend)
      navigate("/friend-details")
    },
    []
  )

  React.useEffect(() => {
    storage.set(STORAGE_KEY, friends)
  }, [friends])

  return { friends, toggleFavorite, viewFriendDetails }
}

export { useGetFriends }
