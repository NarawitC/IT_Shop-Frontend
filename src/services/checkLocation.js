export const checkLocation = (pathname) => {
  const identificationText = pathname.split('/')[2];

  const isHomePage = pathname === '/';
  const isAuthPage = pathname.includes('/auth');
  const isUserPage = pathname.includes('/user');
  const isProductPage = pathname.includes('/product');
  const isOrderPage = pathname.includes('/order');
  const isAdminPage = pathname.includes('/admin');

  return {
    isAuthPage,
    isUserPage,
    isProductPage,
    isOrderPage,
    isAdminPage,
    isHomePage,
    identificationText,
  };
};
