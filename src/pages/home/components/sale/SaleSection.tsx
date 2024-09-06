import React from "react"
import SaleItem from "./SaleItem"
import { data } from "../../../../utils/data"

const SaleSection = () => {
  return (
    <div className="p-10">
      <h2 className="text-4xl mb-12 font-bold">SALE</h2>
      <div className="grid gap-y-12 gap-x-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item) => (
          <SaleItem
            key={item.id}
            id={item.id}
            index={item.id}
            name={item.name}
            image={item.image}
            facts={item.facts}
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
