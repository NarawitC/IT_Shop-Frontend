export const calculateDeliveryPrice = () => {
  const deliveryPrice = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
  return deliveryPrice;
};
