import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByCategoryId } from '../../api/user/product';
import AllProductCardsLayout from '../../components/layout/product/AllProductCardsLayout';
import ProductPageBreadcrumb from '../../components/product/ProductPageBreadcrumb';
import { getCategoryById } from '../../api/user/category';

function CategoryPage() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { products },
      } = await getProductByCategoryId(categoryId);
      setProducts(products);
      const {
        data: { category },
      } = await getCategoryById(categoryId);
      setCategory(category);
    };
    fetchData();
  }, [categoryId]);

  return (
    <div className="content-default-width mx-auto">
      <ProductPageBreadcrumb category={category}></ProductPageBreadcrumb>
      <AllProductCardsLayout>
        {products.map((product) => {
          return <div key={product.id}>{product.name}</div>;
        })}
      </AllProductCardsLayout>
    </div>
  );
}

export default CategoryPage;
