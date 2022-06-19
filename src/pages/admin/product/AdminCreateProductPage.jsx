import { useState } from 'react';
import CreateProductFormYup from '../../../components/admin/product/CreateProductFormYup';
import LoadingPage from '../../LoadingPage';

function AdminCreateProductPage() {
  const [isLoading, setIsLoading] = useState(false);
  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="content-default-width mx-auto">
      <CreateProductFormYup setIsLoading={setIsLoading}></CreateProductFormYup>
    </div>
  );
}

export default AdminCreateProductPage;
