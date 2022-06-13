import { useEffect, useState } from 'react';
import { getAllProductInfo } from '../../api/user/product';
import AllProductCardsLayout from '../../components/layout/product/AllProductCardsLayout';
import ProductPageBreadcrumb from '../../components/product/ProductPageBreadcrumb';
import ProductCard from '../../components/product/ProductCard';

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
    <div className="content-default-width mx-auto d-flex flex-column gap-2">
      <ProductPageBreadcrumb></ProductPageBreadcrumb>
      <AllProductCardsLayout>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product}></ProductCard>;
        })}
      </AllProductCardsLayout>
    </div>
  );
}

export default AllProductPage;
