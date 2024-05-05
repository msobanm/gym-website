import React from "react"
import SaleItem from "./SaleItem"

const SaleSection = () => {
  const data = [
    {
      id: 1,
      name: "3 Piece - Digital & Paste Printed Embroidered Suit",
      image:
        "https://nishatlinen.com/cdn/shop/files/42401915-_4.jpg?v=1708589488&width=600",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati vitae suscipit et. Quod aperiam illo unde expedita officiis dignissimos. Quasi expedita sed harum numquam iure minus modi voluptate temporibus quaerat.",
      initial_price: 13000,
      final_price: 10000,
      category: "WOMEN",
      rating: 4,
    },
    {
      id: 2,
      name: "2 Piece - Digital Printed Embroidered Suit",
      image:
        "https://nishatlinen.com/cdn/shop/files/42401105-_6.jpg?v=1707301776&width=600",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati vitae suscipit et. Quod aperiam illo unde expedita officiis dignissimos. Quasi expedita sed harum numquam iure minus modi voluptate temporibus quaerat.",
      initial_price: 4500,
      final_price: 3000,
      category: "WOMEN",
      rating: 4,
    },
    {
      id: 3,
      name: "3 Piece - Printed Embroidered Suit",
      image:
        "https://nishatlinen.com/cdn/shop/files/42401158-_2.jpg?v=1706508618&width=600",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati vitae suscipit et. Quod aperiam illo unde expedita officiis dignissimos. Quasi expedita sed harum numquam iure minus modi voluptate temporibus quaerat.",
      initial_price: 9500,
      final_price: 6000,
      category: "WOMEN",
      rating: 4,
    },
    {
      id: 4,
      name: "3 Piece - Gold Paste Printed Embroidered Suit",
      image:
        "https://nishatlinen.com/cdn/shop/files/42401892-_3.jpg?v=1706506285&width=600",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati vitae suscipit et. Quod aperiam illo unde expedita officiis dignissimos. Quasi expedita sed harum numquam iure minus modi voluptate temporibus quaerat.",
      initial_price: 6500,
      final_price: 6000,
      category: "WOMEN",
      rating: 4,
    },
    {
      id: 5,
      name: "3 Piece - Printed Embroidered Suit",
      image:
        "https://nishatlinen.com/cdn/shop/files/42405010-_3.jpg?v=1707213062&width=600",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati vitae suscipit et. Quod aperiam illo unde expedita officiis dignissimos. Quasi expedita sed harum numquam iure minus modi voluptate temporibus quaerat.",
      initial_price: 7500,
      final_price: 6000,
      category: "WOMEN",
      rating: 4,
    },
    {
      id: 6,
      name: "3 Piece - Embroidered Suit",
      image:
        "https://nishatlinen.com/cdn/shop/files/42308043-_3.jpg?v=1707212980&width=600",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati vitae suscipit et. Quod aperiam illo unde expedita officiis dignissimos. Quasi expedita sed harum numquam iure minus modi voluptate temporibus quaerat.",
      initial_price: 10500,
      final_price: 7000,
      category: "WOMEN",
      rating: 4,
    },
    {
      id: 7,
      name: "3 Piece - Printed Embroidered Suit",
      image:
        "https://nishatlinen.com/cdn/shop/files/42401363-_1.jpg?v=1708605097&width=600",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati vitae suscipit et. Quod aperiam illo unde expedita officiis dignissimos. Quasi expedita sed harum numquam iure minus modi voluptate temporibus quaerat.",
      initial_price: 8500,
      final_price: 6000,
      category: "WOMEN",
      rating: 4,
    },
    {
      id: 8,
      name: "2 Piece - Embroidered Suit",
      image:
        "https://nishatlinen.com/cdn/shop/files/42401115-_2.jpg?v=1706339234&width=600",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati vitae suscipit et. Quod aperiam illo unde expedita officiis dignissimos. Quasi expedita sed harum numquam iure minus modi voluptate temporibus quaerat.",
      initial_price: 10500,
      final_price: 9000,
      category: "WOMEN",
      rating: 4,
    },
  ]
  return (
    <div className="p-10">
      <h2 className="text-4xl mb-12 font-serif">SALE</h2>
      <div className="grid gap-y-12 gap-x-2 grid-cols-4">
        {data.map((item, index) => (
          <SaleItem
            key={item.id}
            id={item.id}
            index={index}
            name={item.name}
            image={item.image}
            description={item.description}
            initial_price={item.initial_price}
            final_price={item.final_price}
            category={item.category}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  )
}

export default SaleSection
