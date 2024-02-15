import { useEffect, useState } from "react"

const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true)
    }

    const handleOffline = () => {
      setIsOnline(false)
    }

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      removeEventListener("online", handleOnline)
      removeEventListener("offline", handleOffline)
    }
  }, [])

  return isOnline
}

export default useIsOnline
