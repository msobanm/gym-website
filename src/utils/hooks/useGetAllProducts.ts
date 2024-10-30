import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../../api/getAllProducts"

export const useGetAllProducts = (filters: {
  category?: string
  minPrice?: number
  maxPrice?: number
  stock?: boolean
  sort?: string
}) => {
  const {
    data: products,
    isPending,
    error,
    isError,
  } = useQuery({
    queryKey: ["products", filters],
    queryFn: () => getAllProducts(filters),
  })

  return { products, isPending, error, isError }
}
