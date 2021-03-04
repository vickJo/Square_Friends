import React from "react"

import storage from "./storage"
import { IFriendPayload } from "../hooks/use-get-friends"

const STORAGE_KEY = "__square_friend"

export const initActiveFriend = () => storage.get(STORAGE_KEY)

export const cacheActiveFriend = (friend: IFriendPayload) =>
  storage.set(STORAGE_KEY, friend)

export const clearActiveFriend = () => storage.delete(STORAGE_KEY)

export const FriendContext = React.createContext<{
  activeFriend: null | IFriendPayload
  setActiveFriend: (f: null | IFriendPayload) => void
}>({
  activeFriend: initActiveFriend(),
  setActiveFriend: (f: null | IFriendPayload) => {},
})
