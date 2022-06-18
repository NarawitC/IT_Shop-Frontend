import { Route, Routes, Navigate } from 'react-router-dom';

import { useAuthContext } from '../contexts/AuthContext';
import { useAdminAuthContext } from '../contexts/admin/AdminAuthContext';
import HeaderAndFooter from '../components/layout/HeaderAndFooter';
import SignInPage from '../pages/auth/SignInPage';
import SignUpPage from '../pages/auth/SignUpPage';
import SignUpCompletedPage from '../pages/auth/SignUpCompletedPage';
import UserPage from '../pages/user/UserPage';
import UserInfoUpdatedPage from '../pages/user/UserInfoUpdatedPage';
import HomePage from '../pages/HomePage';

import AllProductPage from '../pages/product/AllProductPage';
import CategoryPage from '../pages/product/CategoryPage';
import SubCategoryPage from '../pages/product/SubCategoryPage';
import ProductInfoPage from '../pages/product/ProductInfoPage';
import SearchPage from '../pages/product/SearchPage';

import OrderCheckoutPage from '../pages/order/OrderCheckoutPage';
import OrderPlaceOrderPage from '../pages/order/OrderPlaceOrderPage';
import OrderPaymentPage from '../pages/order/OrderPaymentPage';
import OrderCompletedPage from '../pages/order/OrderCompletedPage';

import JustAdmin from '../components/layout/JustAdmin';
import AdminSignInPage from '../pages/admin/auth/AdminSignInPage';
import AdminCreateProductPage from '../pages/admin/product/AdminCreateProductPage';
import CreateProductCompletedPage from '../pages/admin/product/CreateProductCompletedPage';
import AdminUpdateProductPage from '../pages/admin/product/AdminUpdateProductPage';
import UpdateProductCompletedPage from '../pages/admin/product/UpdateProductCompletedPage';

import { useLocation } from 'react-router-dom';
function Router() {
  const location = useLocation();
  const { user } = useAuthContext();
  const { admin } = useAdminAuthContext();
  // console.log(location.pathname);
  return (
    <Routes>
      {user || admin ? (
        <>
          {user && (
            <>
              (
              <Route path="/" element={<HeaderAndFooter></HeaderAndFooter>}>
                <Route path="" element={<HomePage></HomePage>} />
                <Route path="user" element={<UserPage></UserPage>}></Route>
                <Route
                  path="user/infoUpdated"
                  element={<UserInfoUpdatedPage></UserInfoUpdatedPage>}
                ></Route>
                <Route path="product" element={<AllProductPage />}></Route>
                <Route
                  path="/product/category/:categoryId"
                  element={<CategoryPage></CategoryPage>}
                ></Route>
                <Route
                  path="/product/subCategory/:subCategoryId"
                  element={<SubCategoryPage></SubCategoryPage>}
                ></Route>
                <Route
                  path="/product/searchText/:searchText"
                  element={<SearchPage></SearchPage>}
                ></Route>
                <Route
                  path="/product/info/:productId"
                  element={<ProductInfoPage></ProductInfoPage>}
                ></Route>
                <Route
                  path="/order/checkout"
                  element={<OrderCheckoutPage></OrderCheckoutPage>}
                ></Route>
                <Route
                  path="/order/placeOrder"
                  element={<OrderPlaceOrderPage></OrderPlaceOrderPage>}
                ></Route>
                <Route
                  path="/order/payment"
                  element={<OrderPaymentPage></OrderPaymentPage>}
                ></Route>
                <Route
                  path="/order/completed"
                  element={<OrderCompletedPage></OrderCompletedPage>}
                ></Route>
              </Route>
              <Route path="/" element={<Navigate to="/"></Navigate>}></Route>
              <Route path="*" element={<Navigate to="/"></Navigate>}></Route>)
            </>
          )}
          {admin && (
            <>
              <Route
                path="/admin"
                element={<HeaderAndFooter></HeaderAndFooter>}
              >
                <Route
                  path="product/createProduct"
                  element={<AdminCreateProductPage></AdminCreateProductPage>}
                ></Route>
                <Route
                  path="product/updateProduct/:productId"
                  element={<AdminUpdateProductPage></AdminUpdateProductPage>}
                ></Route>
                <Route
                  path="product/createProduct/completed"
                  element={
                    <CreateProductCompletedPage></CreateProductCompletedPage>
                  }
                ></Route>
                <Route
                  path="product/updateProduct/completed"
                  element={
                    <UpdateProductCompletedPage></UpdateProductCompletedPage>
                  }
                ></Route>
              </Route>
              <Route
                path=""
                element={<Navigate to="/admin"></Navigate>}
              ></Route>
              <Route
                path="*"
                element={<Navigate to="/admin"></Navigate>}
              ></Route>
            </>
          )}
        </>
      ) : (
        <Route path="/" element={<HeaderAndFooter></HeaderAndFooter>}>
          <Route path="/auth/signUp" element={<SignUpPage></SignUpPage>} />
          <Route
            path="/auth/signUpCompleted"
            element={<SignUpCompletedPage></SignUpCompletedPage>}
          />
          <Route path="/auth/signIn" element={<SignInPage></SignInPage>} />
          <Route path="/admin" element={<JustAdmin></JustAdmin>}>
            <Route
              path="auth/signIn"
              element={<AdminSignInPage></AdminSignInPage>}
            />
          </Route>
          <Route
            path="/"
            element={<Navigate to="/auth/signIn"></Navigate>}
          ></Route>
          <Route
            path="*"
            element={<Navigate to="/auth/signIn"></Navigate>}
          ></Route>
        </Route>
      )}
    </Routes>
  );
}
export default Router;
