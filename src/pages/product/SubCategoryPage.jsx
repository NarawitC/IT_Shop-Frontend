import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProductBySubProductId } from '../../api/user/product';
import { getSubCategoryById } from '../../api/user/subCategory';
import AllProductCardsLayout from '../../components/layout/product/AllProductCardsLayout';
import ProductCard from '../../components/product/ProductCard';
import ProductPageBreadcrumb from '../../components/product/ProductPageBreadcrumb';

function SubCategoryPage() {
  const { subCategoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [subCategory, setSubCategory] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { products },
      } = await getProductBySubProductId(subCategoryId);
      setProducts(products);
      const {
        data: { subCategory },
      } = await getSubCategoryById(subCategoryId);
      setSubCategory(subCategory);
    };
    fetchData();
  }, [subCategoryId]);

  return (
    <div className="content-default-width mx-auto d-flex flex-column gap-2">
      <ProductPageBreadcrumb
        category={subCategory.Category}
        subCategory={subCategory}
      ></ProductPageBreadcrumb>
      <AllProductCardsLayout>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product}></ProductCard>;
        })}
      </AllProductCardsLayout>
    </div>
  );
}

export default SubCategoryPage;
