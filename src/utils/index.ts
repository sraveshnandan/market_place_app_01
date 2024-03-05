interface IcalculatePresentage {
  (oldPrice: number, newPrice: number): number;
}
export const calculatePresentage: IcalculatePresentage = (
  oldPrice,
  newPrice
) => {
  const discount = oldPrice - newPrice;
  const unit = oldPrice / 100;
  const percentage = Number(discount/unit).toFixed(2)
  return percentage;
};
