import React from "react"
import { IFriendPayload } from "../hooks/use-get-friends"

const STORAGE_KEY = "__square_friend"

export const initActiveFriend = () => {
  if (typeof window === "undefined") {
    return null
  }
  const cache = window.localStorage.getItem(STORAGE_KEY)
  return cache ? JSON.parse(cache) : null
}

export const cacheActiveFriend = (friend: IFriendPayload) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(friend))
  }
}

export const clearActiveFriend = () => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(STORAGE_KEY)
  }
}

export const AppContext = React.createContext<{
  activeFriend: null | IFriendPayload
  setActiveFriend: (f: null | IFriendPayload) => void
}>({
  activeFriend: initActiveFriend(),
  setActiveFriend: (f: null | IFriendPayload) => {},
})
