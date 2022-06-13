import { useEffect, useState } from 'react';
import { getAllProductInfo } from '../../api/user/product';
import AllProductCardsLayout from '../../components/layout/product/AllProductCardsLayout';
import ProductPageBreadcrumb from '../../components/product/ProductPageBreadcrumb';

function AllProductPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllProductInfo();
      setProducts(result.data.products);
    };
    fetchData();
  }, []);
  return (
    <div className="content-default-width mx-auto">
      <ProductPageBreadcrumb></ProductPageBreadcrumb>
      <AllProductCardsLayout>
        {products.map((product) => {
          return <div key={product.id}>{product.name}</div>;
        })}
      </AllProductCardsLayout>
    </div>
  );
}

export default AllProductPage;
