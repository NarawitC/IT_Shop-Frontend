export const checkLocation = (pathname) => {
  const identificationText = pathname.split('/')[2];

  const isHomePage = pathname === '/';
  const isAuthPage = pathname.includes('/auth');
  const isProfilePage = pathname.includes('/profile');
  const isProductPage = pathname.includes('/product');
  const isOrderPage = pathname.includes('/order');
  const isAdminPage = pathname.includes('/admin');

  return {
    isAuthPage,
    isProfilePage,
    isProductPage,
    isOrderPage,
    isAdminPage,
    isHomePage,
    identificationText,
  };
};
