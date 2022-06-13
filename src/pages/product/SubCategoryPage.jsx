import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProductBySubProductId } from '../../api/user/product';
import { getSubCategoryById } from '../../api/user/subCategory';
import AllProductCardsLayout from '../../components/layout/product/AllProductCardsLayout';
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
    <div className="content-default-width mx-auto">
      <ProductPageBreadcrumb
        category={subCategory.Category}
        subCategory={subCategory}
      ></ProductPageBreadcrumb>
      <AllProductCardsLayout>
        {products.map((product) => {
          return <div key={product.id}>{product.name}</div>;
        })}
      </AllProductCardsLayout>
    </div>
  );
}

export default SubCategoryPage;
