import axios from "axios"
import { getItem } from "../utils/localStorage"
import { localStorageVars } from "../common/constants"

const API_ENDPOINT = ""

const client = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
})

type Options = {
  signal: number
  useAuthorization: boolean
  headers: {
    [key: string]: string
  }
}

class ApiService {
  static authHeader() {
    const accessToken = getItem(localStorageVars.token)
    if (accessToken == null) return {}
    return { "x-auth-token": accessToken }
  }

  static get(path: string, options: Options, params?: Record<string, any>) {
    const { signal, useAuthorization, headers } = options

    // Add query parameters if provided
    const url = params
      ? `${path}?${new URLSearchParams(params).toString()}`
      : path

    if (useAuthorization) {
      const authHeaders = this.authHeader()
      if (authHeaders["x-auth-token"] != null) {
        headers["x-auth-token"] = authHeaders["x-auth-token"]
      }
    }

    return client({
      method: "GET",
      url,
      headers,
      signal: AbortSignal.timeout(signal),
    })
  }

  static post(
    path: string,
    data: any,
    options: Options,
    params?: Record<string, any>
  ) {
    const { useAuthorization, headers, signal } = options

    // Add query parameters if provided
    const url = params
      ? `${path}?${new URLSearchParams(params).toString()}`
      : path

    if (useAuthorization) {
      const authHeaders = this.authHeader()
      if (authHeaders["x-auth-token"] != null) {
        headers["x-auth-token"] = authHeaders["x-auth-token"]
      }
    }

    return client({
      method: "POST",
      url,
      data,
      headers,
      signal: AbortSignal.timeout(signal),
    })
  }

  static patch(
    path: string,
    data: any,
    options: Options,
    params?: Record<string, any>
  ) {
    const { useAuthorization, headers } = options

    // Add query parameters if provided
    const url = params
      ? `${path}?${new URLSearchParams(params).toString()}`
      : path

    if (useAuthorization) {
      const authHeaders = this.authHeader()
      if (authHeaders["x-auth-token"] != null) {
        headers["x-auth-token"] = authHeaders["x-auth-token"]
      }
    }

    return client({
      method: "PATCH",
      url,
      data,
      headers,
    })
  }
}

client.interceptors.request.use((config) => {
  // do something before executing the request
  // For example tag along the bearer access token to request header or set a cookie
  const requestConfig: any = config
  const { headers } = config
  requestConfig.headers = {
    ...headers,
    "x-auth-token": getItem(localStorageVars.token),
  }

  return requestConfig
})

client.interceptors.response.use(
  (response) => response,
  (error) => {
    /**
     * Do something in case the response returns an error code [3**, 4**, 5**] etc
     * For example, on token expiration retrieve a new access token, retry a failed request etc
     */
    const { response } = error
    // const originalRequest = error.config;
    if (response) {
      if (response.status === 500) {
        // do something here
      } else {
        return Promise.reject(response?.data)
      }
    }

    return Promise.reject(error)
  }
)

export { ApiService }
