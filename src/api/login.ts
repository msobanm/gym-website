import { ApiService } from "../services/ApiService"
import { API } from "../common/apiEndPoints"

export const login = async <T>(data: T) => {
  let token
  let authUserState

  try {
    const res = await ApiService.post(
      API.auth.login,
      { ...data, expiresInMins: 3600 },
      {
        signal: 15000,
        useAuthorization: false,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    ;({ token, ...authUserState } = res.data)
  } catch (error) {
    console.log(error)
  }

  return { token, authUserState }
}
