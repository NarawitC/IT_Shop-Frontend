export const checkLocation = (pathname) => {
  const identificationText = pathname.split('/')[2];

  const isHomePage = pathname === '/';
  const isAuthPage = pathname.includes('/auth');
  const isUserPage = pathname.includes('/user');
  const isProductPage = pathname.includes('/product');
  const isOrderCheckoutPage = pathname.includes('/order/checkout');
  const isAdminPage = pathname.includes('/admin');
  const isAdminOrderPage = pathname.includes('/admin/order');
  const isAdminProductPage = pathname.includes('/admin/product');

  return {
    isAuthPage,
    isUserPage,
    isProductPage,
    isOrderCheckoutPage,
    isAdminPage,
    isHomePage,
    identificationText,
    isAdminOrderPage,
    isAdminProductPage,
  };
};
