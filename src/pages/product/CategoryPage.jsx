import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByCategoryId } from '../../api/user/product';
function CategoryPage() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getProductByCategoryId(categoryId);
      setProducts(result.data.products);
    };
    fetchData();
  }, [categoryId]);

  return (
    <div className="content-default-width mx-auto">
      {products.map((product) => {
        return <div key={product.id}>{product.name}</div>;
      })}
    </div>
  );
}

export default CategoryPage;
