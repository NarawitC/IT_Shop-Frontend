import { Link } from 'react-router-dom';

import ITShop from '../logo/ITShop';
import CategoryLists from './components/CategoryLists';

function Category() {
  return (
    <div className="me-1">
      <button
        className="btn-white-i"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <div
        className="offcanvas offcanvas-start"
        style={{ width: '275px' }}
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        data-bs-scroll="true"
      >
        <div className="offcanvas-header d-flex justify-content-end align-items-start">
          <div className="d-flex flex-column me-3 ">
            <div>
              <ITShop color={'blue'}></ITShop>
            </div>

            <div className="bg-gray1 " style={{ height: '1px' }}></div>
          </div>
          <button
            className=" btn-dark-i "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div style={{ padding: '0 1.5rem' }}>
          <CategoryLists></CategoryLists>
        </div>
      </div>
    </div>
  );
}

export default Category;
