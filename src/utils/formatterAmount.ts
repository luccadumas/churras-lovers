export const formatterAmount = (amount: number) => {
  const newAmount = String(amount).replace(/\./g, ',').replace(',', '.');

  console.log('newAmount', newAmount)
  return newAmount;
}
