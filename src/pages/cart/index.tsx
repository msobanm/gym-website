import React, { useEffect, useState } from "react"
import Breadcrumbs from "../../components/Breadcrumbs"
import CartItem from "./components/CartItem"
import Button from "../../components/Button"

const Cart = () => {
  const [cartSubtotal, setCartSubtotal] = useState("")
  const [couponCode, setCouponCode] = useState("")
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "2 Piece - Embroidered Suit",
      category: "WOMEN",
      color: "Black",
      size: 42,
      price: 9000,
      quantity: 1,
    },
    {
      id: "2",
      name: "2 Piece - Embroidered Suit",
      category: "WOMEN",
      color: "Black",
      size: 42,
      price: 9000,
      quantity: 1,
    },
  ])

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }

  const [subtotal, setSubtotal] = useState(calculateSubtotal())

  // Update subtotal when cartItems change
  useEffect(() => {
    setSubtotal(calculateSubtotal())
  }, [cartItems])

  return (
    <div className="min-h-svh">
      <Breadcrumbs />
      <div className="p-2 lg:p-5 xl:p-10 ">
        <h1 className="text-5xl">Cart</h1>
        <div className="min-w-full flex flex-col gap-5 lg:gap-5 xl:gap-10 py-10 md:px-2 lg:px-2 xl:px-5 lg:flex-row">
          <div className="flex flex-col p-2 shadow-all border border-gray-200 rounded-lg lg:w-3/4">
            <div className="flex p-5 justify-between max-[500px]:hidden">
              <div className="w-3/5">
                <h4 className="text-lg font-medium">Product</h4>
              </div>
              <div className="flex w-2/5 justify-between">
                <h2 className="text-lg font-medium">Price</h2>
                <h2 className="text-lg font-medium">Quantity</h2>
                <h2 className="text-lg font-medium">Total Price</h2>
              </div>
            </div>
            <div className="divide-y">
              {cartItems.map((item) => (
                <CartItem key={item.id} product={item} />
              ))}
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 h-fit shadow-lg bg-gray-50 border border-gray-200 rounded-lg p-5 pb-10 flex flex-col gap-5">
            <h2 className="text-2xl font-semibold">Cart Total</h2>
            <h4 className="text-base flex justify-between">
              Subtotal
              <span className="font-semibold">Rs. {cartSubtotal}</span>
            </h4>
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-full p-2 border border-gray-400 rounded"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />

            <h4 className="text-base flex justify-between">
              Delivery
              <span className="font-semibold">Rs. 250</span>
            </h4>
            <h4 className="text-base flex justify-between">
              Total
              <span className="font-semibold">Rs. 9,000</span>
            </h4>
            <Button type="button" title="Checkout" primary />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
