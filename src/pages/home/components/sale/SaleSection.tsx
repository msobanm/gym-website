import React from "react"
import SaleItem from "./SaleItem"

const SaleSection = () => {
  const data = [
    {
      name: "3 Piece - Digital & Paste Printed Embroidered Suit",
      image:
        "https://nishatlinen.com/cdn/shop/files/42401915-_4.jpg?v=1708589488&width=600",
      initial_price: 13000,
      final_price: 10000,
    },
    {
      name: "2 Piece - Digital Printed Embroidered Suit",
      image:
        "https://nishatlinen.com/cdn/shop/files/42401105-_6.jpg?v=1707301776&width=600",
      initial_price: 4500,
      final_price: 3000,
    },
    {
      name: "3 Piece - Printed Embroidered Suit",
      image:
        "https://nishatlinen.com/cdn/shop/files/42401158-_2.jpg?v=1706508618&width=600",
      initial_price: 9500,
      final_price: 6000,
    },
    {
      name: "3 Piece - Gold Paste Printed Embroidered Suit",
      image:
        "https://nishatlinen.com/cdn/shop/files/42401892-_3.jpg?v=1706506285&width=600",
      initial_price: 6500,
      final_price: 6000,
    },
    {
      name: "3 Piece - Printed Embroidered Suit",
      image:
        "https://nishatlinen.com/cdn/shop/files/42405010-_3.jpg?v=1707213062&width=600",
      initial_price: 7500,
      final_price: 6000,
    },
    {
      name: "3 Piece - Embroidered Suit",
      image:
        "https://nishatlinen.com/cdn/shop/files/42308043-_3.jpg?v=1707212980&width=600",
      initial_price: 10500,
      final_price: 7000,
    },
    {
      name: "3 Piece - Printed Embroidered Suit",
      image:
        "https://nishatlinen.com/cdn/shop/files/42401363-_1.jpg?v=1708605097&width=600",
      initial_price: 8500,
      final_price: 6000,
    },
    {
      name: "2 Piece - Embroidered Suit",
      image:
        "https://nishatlinen.com/cdn/shop/files/42401115-_2.jpg?v=1706339234&width=600",
      initial_price: 10500,
      final_price: 9000,
    },
  ]
  return (
    <div className="p-10">
      <h2 className="text-4xl mb-12 font-serif">SALE</h2>
      <div className="grid gap-y-12 gap-x-2 grid-cols-4">
        {data.map((item, index) => (
          <SaleItem
            key={index}
            index={index}
            name={item.name}
            path={item.image}
            initial_price={item.initial_price}
            final_price={item.final_price}
          />
        ))}
      </div>
    </div>
  )
}

export default SaleSection
