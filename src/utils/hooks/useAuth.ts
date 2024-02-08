import { useEffect, useState } from "react"
import { getItem } from "../localStorage"
import { useLocation } from "react-router-dom"
import { localStorageVars } from "../../common/constants"

export default function useAuth() {
  const [isAuth, setIsAuth] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsAuth(!!getItem(localStorageVars.token))
  }, [location])

  return { isAuth }
}
