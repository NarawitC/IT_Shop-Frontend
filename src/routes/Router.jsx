import { Route, Routes, Navigate } from 'react-router-dom';

import { useAuthContext } from '../contexts/AuthContext';
import HeaderAndFooter from '../components/layout/HeaderAndFooter';
import SignInPage from '../pages/auth/SignInPage';
import SignUpPage from '../pages/auth/SignUpPage';
import UserPage from '../pages/user/UserPage';
import HomePage from '../pages/HomePage';
import AllProductPage from '../pages/product/AllProductPage';
import CategoryPage from '../pages/product/CategoryPage';
import SubCategoryPage from '../pages/product/SubCategoryPage';
import ProductPage from '../pages/product/ProductPage';

function Router() {
  const { user } = useAuthContext();
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<HeaderAndFooter></HeaderAndFooter>}>
            <Route path="" element={<HomePage></HomePage>} />
            <Route path="user" element={<UserPage></UserPage>}></Route>
            <Route
              path="/product"
              element={<AllProductPage></AllProductPage>}
            ></Route>
            <Route
              path="/product/category/:categoryId"
              element={<CategoryPage></CategoryPage>}
            ></Route>
            <Route
              path="/product/subCategory/:subCategoryId"
              element={<SubCategoryPage></SubCategoryPage>}
            ></Route>
            <Route
              path="/product/:productId"
              element={<ProductPage></ProductPage>}
            ></Route>
          </Route>
          <Route path="/" element={<Navigate to="/"></Navigate>}></Route>
          <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
        </>
      ) : (
        <Route path="/" element={<HeaderAndFooter></HeaderAndFooter>}>
          <Route path="/auth/signUp" element={<SignUpPage></SignUpPage>} />
          <Route path="/auth/signIn" element={<SignInPage></SignInPage>} />
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
