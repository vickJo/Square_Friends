const storage = {
  get: (key: string) => {
    if (typeof window === "undefined") {
      return null
    }

    const serialized = window.localStorage.getItem(key)
    return serialized ? JSON.parse(serialized) : null
  },

  set: (key: string, payload: any) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(payload))
    }
  },

  delete: (key: string) => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(key)
    }
  },

  clear: () => {
    if (typeof window !== "undefined") {
      window.localStorage.clear()
    }
  },
}

export default storage
