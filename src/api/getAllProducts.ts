import { ApiService } from "../services/ApiService"
import { API } from "../common/apiEndPoints"

export const getAllProducts = async ({
  category,
  minPrice,
  maxPrice,
  stock,
  sort,
}: {
  category?: string
  minPrice?: number
  maxPrice?: number
  stock?: boolean
  sort?: string
}) => {
  try {
    const response = await ApiService.get(
      `${API.products.get}`, // Make sure this URL is correct
      {
        signal: 15000,
        useAuthorization: false,
        headers: {},
      }
      // {
      //   category: category || "All",
      //   minPrice: minPrice ?? 0, // Set minimum price to 0 if undefined
      //   maxPrice: maxPrice ?? 10000, // Set a large max price if undefined
      //   inStock: stock ? "true" : "", // Convert boolean to string for query
      //   sort: sort || "", // Sort parameter (priceAsc, priceDesc, newest, oldest)
      // }
    )
    const { data } = response
    return data
  } catch (err) {
    console.error(err)
  }
}
