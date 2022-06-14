import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api/user/product';

import ProductMainDisplay from '../../components/product/ProductMainDisplay';
import ProductProperties from '../../components/product/ProductProperties';
import ProductAddToCartSection from '../../components/product/ProductAddToCartSection';

function ProductInfoPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { product },
      } = await getProductById(productId);
      setProduct(product);
    };
    fetchData();
  }, [productId]);
  return (
    <div className="content-default-width mx-auto d-flex justify-content-between gap-5">
      <div className="col-8 d-flex flex-column gap-3">
        <ProductMainDisplay product={product}></ProductMainDisplay>
        <ProductProperties
          productProperties={product.properties}
        ></ProductProperties>
      </div>
      <div className="col-4 ">
        <ProductAddToCartSection product={product}></ProductAddToCartSection>
      </div>
    </div>
  );
}

export default ProductInfoPage;
