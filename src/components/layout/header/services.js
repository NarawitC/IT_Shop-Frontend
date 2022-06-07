export const checkLocation = (location) => {
  let auth = false;
  let order = false;
  let admin = false;

  const pathname = location.pathname;
  const isHomePage = pathname === '/';
  const isAuthPage = pathname.includes('/auth');
  const isProfilePage = pathname.includes('/profile');
  const isCartPage = pathname.includes('/cart');
  const isProductPage = pathname.includes('/product');
  const isSearchPage = pathname.includes('/search');
  const isAdminPage = pathname.includes('/admin');
  const isAdminProductsPage = pathname.includes('/admin/products');
  const isAdminOrdersPage = pathname.includes('/admin/orders');
  const isAdminUsersPage = pathname.includes('/admin/users');
  const isAdminCategoriesPage = pathname.includes('/admin/categories');
  const isAdminBrandsPage = pathname.includes('/admin/brands');
  const isAdminReviewsPage = pathname.includes('/admin/reviews');
  const isAdminOrdersPage2 = pathname.includes('/admin/orders/');
  const isAdminUsersPage2 = pathname.includes('/admin/users/');
  const isAdminCategoriesPage2 = pathname.includes('/admin/categories/');
  const isAdminBrandsPage2 = pathname.includes('/admin/brands/');
  const isAdminReviewsPage2 = pathname.includes('/admin/reviews/');
  const isAdminProductPage = pathname.includes('/admin/product/');
  const isAdminProductPage2 = pathname.includes('/admin/product/edit/');
  const isAdminProductPage3 = pathname.includes('/admin/product/delete/');
  const isAdminProductPage4 = pathname.includes('/admin/product/add/');
  const isAdminProductPage5 = pathname.includes('/admin/product/add/');
  const isAdminProductPage6 = pathname.includes('/admin/product/add/');
  const isAdminProductPage7 = pathname.includes('/admin/product/add/');

  return;
};
