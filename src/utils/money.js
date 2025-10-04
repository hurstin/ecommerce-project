export function formatMoney(amountCent) {
  return ` $${(amountCent.priceCents / 100).toFixed(2)}`;
}
