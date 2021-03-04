import React from "react"

import storage from "./storage"
import { IFriendPayload } from "../hooks/use-get-friends"

export const initActiveFriend = storage.get("__square_friend")

export const cacheActiveFriend = (friend: IFriendPayload) =>
  storage.set("__square_friend", friend)

export const clearActiveFriend = () => storage.delete("__square_friend")

export const initActiveLanguage = storage.get("__square_lang") || "en"

export const FriendContext = React.createContext<{
  activeFriend: null | IFriendPayload
  setActiveFriend: (f: null | IFriendPayload) => void
}>({
  activeFriend: null,
  setActiveFriend: (f: null | IFriendPayload) => {},
})

export const LanguageContext = React.createContext<{
  language: "en" | "fr"
  setLanguage: (l: "en" | "fr") => void
}>({
  language: "en",
  setLanguage: (l: "en" | "fr") => {},
})
