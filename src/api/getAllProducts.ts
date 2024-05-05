import { ApiService } from "../services/ApiService"
import { API } from "../common/apiEndPoints"

export const getAllProducts = async () => {
  try {
    const response = await ApiService.get(API.products.get, {
      signal: 15000,
      useAuthorization: false,
      headers: {},
    })
    const { data } = response
    return data
  } catch (err) {
    console.error(err)
  }
}
