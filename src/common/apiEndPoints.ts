const _url = "http://localhost:3000"

export const BASE_URL = `${_url}/api`

export const API = {
  products: {
    get: `${BASE_URL}/products/`,
  },
  auth: {
    login: `https://dummyjson.com/auth/login`,
  },
}
