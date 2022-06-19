import AllOrderLayout from '../../../../components/layout/order/layout/AllOrderLayout';
import OrderListLayout from '../../../../components/layout/orderItem/layout/OrderListLayout';
import AdminOrderTopicSection from '../../../../components/order/AdminOrderTopicSection';
import { useAdminOrderContext } from '../../../../contexts/admin/AdminOrderContext';
import { getAllProductInfo } from '../../../../api/user/product';
import { useEffect, useState } from 'react';
import AdminProductRow from '../../../../components/layout/product/AdminProductRow';
import Button from '../../../../components/button/Button';
import { useNavigate } from 'react-router-dom';

function AdminProductPage() {
  const navigate = useNavigate();
  const { pendingOrders } = useAdminOrderContext();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { products },
      } = await getAllProductInfo();
      setProducts(products);
    };
    fetchData();
  }, []);
  const handleCreateProductButton = () => {
    navigate('/admin/product/createProduct');
  };

  return (
    <div className="d-flex flex-column gap-3">
      <div className="align-self-end w-25">
        <Button
          className={'my-btn-primary'}
          onClick={handleCreateProductButton}
        >
          Create new product
        </Button>
      </div>
      <AllOrderLayout>
        <AdminOrderTopicSection
          backgroundColor={'#43464e'}
          textColor={'#ffffff'}
          textCol1={'Product id'}
          textCol2={'Quantity'}
          textCol3={'Price'}
          textCol4={'Edit'}
        ></AdminOrderTopicSection>
        <OrderListLayout>
          {products.map((product) => (
            <AdminProductRow
              key={product.id}
              product={product}
            ></AdminProductRow>
          ))}
        </OrderListLayout>
      </AllOrderLayout>
    </div>
  );
}

export default AdminProductPage;
