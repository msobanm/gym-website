export function discountCalculator(initial: number, final: number) {
  const discount = ((initial - final) / initial) * 100
  const roundedDiscount = Math.round(discount)
  return roundedDiscount
}
