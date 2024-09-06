type AnyObject = { [key: string]: any }

export function discountCalculator(initial: number, final: number) {
  const discount = ((initial - final) / initial) * 100
  const roundedDiscount = Math.round(discount)
  return roundedDiscount
}

export function totalPriceCalculator(price: number, quantity: number) {
  const total = price * quantity
  return total
}

export function getRandomObjects(arr: AnyObject[], num = 4) {
  // Shuffle the array using the Fisher-Yates algorithm
  const shuffled = arr.slice().sort(() => 0.5 - Math.random())

  // Get the first 'num' elements from the shuffled array
  return shuffled.slice(0, num)
}
