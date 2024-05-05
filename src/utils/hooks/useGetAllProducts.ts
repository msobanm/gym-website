import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../../api/getAllProducts"

export const useGetAllProducts = () => {
  const {
    data: products,
    isPending,
    error,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  })

  return { products, isPending, error, isError }
}
