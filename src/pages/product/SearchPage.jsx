import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductBySearchText } from '../../api/user/product';
import AllProductCardsLayout from '../../components/layout/product/AllProductCardsLayout';
import ProductPageBreadcrumb from '../../components/product/ProductPageBreadcrumb';
import ProductCard from '../../components/product/ProductCard';

function SearchPage() {
  const { searchText } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { products },
      } = await getProductBySearchText(searchText);
      setProducts(products);
    };
    fetchData();
  }, [searchText]);

  return (
    <div className="content-default-width mx-auto d-flex flex-column gap-2">
      <ProductPageBreadcrumb searchText={searchText}></ProductPageBreadcrumb>
      <AllProductCardsLayout>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product}></ProductCard>;
        })}
      </AllProductCardsLayout>
    </div>
  );
}

export default SearchPage;
