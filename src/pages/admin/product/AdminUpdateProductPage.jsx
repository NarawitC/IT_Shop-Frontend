import { useState } from 'react';
import UpdateProductFormYup from '../../../components/admin/product/UpdateProductFormYup';
import LoadingPage from '../../LoadingPage';
function AdminCreateProductPage() {
  const [isLoading, setIsLoading] = useState(false);
  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="content-default-width mx-auto">
      <UpdateProductFormYup setIsLoading={setIsLoading}></UpdateProductFormYup>
    </div>
  );
}

export default AdminCreateProductPage;
