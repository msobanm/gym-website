import React, { useState } from "react"
import Breadcrumbs from "../../components/Breadcrumbs"
import CartItem from "./components/CartItem"
import Button from "../../components/Button"

const Cart = () => {
  return (
    <>
      <Breadcrumbs />
      <div className="p-10">
        <h1 className="text-5xl">Cart</h1>
        <div className="min-w-full flex gap-10 py-10 px-5">
          <div className="flex flex-col p-2 shadow-all rounded-lg w-3/4">
            <div className="flex p-5 justify-between">
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
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
          </div>
          <div className="w-1/4 h-fit shadow-lg bg-secondary-2 rounded-lg p-5 pb-10 flex flex-col gap-5">
            <h2 className="text-3xl font-semibold">Cart Total</h2>
            <h4 className="text-lg flex justify-between">
              Subtotal <span className="font-semibold">Rs. 9,000</span>
            </h4>
            <h4 className="text-lg flex justify-between">
              Discount <span className="font-semibold">Rs. 9,000</span>
            </h4>
            <h4 className="text-lg flex justify-between">
              Total <span className="font-semibold">Rs. 9,000</span>
            </h4>
            <Button type="button" title="Checkout" primary />
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
