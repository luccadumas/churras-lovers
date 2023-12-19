export const formatterAmount = (amount: number) => {
  const newAmount = String(amount).replace(/\./g, ',').replace(',', '.');

  return newAmount;
}
