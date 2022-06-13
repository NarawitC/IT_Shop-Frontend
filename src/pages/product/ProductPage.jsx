import { useParams } from 'react-router-dom';

function ProductPage() {
  const { productId } = useParams();
  return <div>ProductPage</div>;
}

export default ProductPage;
