import { Link } from 'react-router-dom';

import SubCategoryLists from './SubCategoryLists';
function CategoryLists() {
  const categories = ['Notebook', 'Computer', 'Headphone', 'Accessories'];
  return (
    <ul className="px-0">
      <div className="d-flex justify-content-center my-3">
        <Link
          className="link-text2"
          style={{ textDecoration: 'underline' }}
          to="/"
        >
          All Product
        </Link>
      </div>
      {categories.map((category, idx) => {
        return (
          <div key={idx} className="py-2">
            <li className="d-flex justify-content-between">
              <Link className="link-text2" to={'/product/' + category}>
                {category}
              </Link>
              <button
                className="btn-dark-i"
                data-bs-toggle="collapse"
                data-bs-target={`#navbarToggleExternalContent${category}`}
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i
                  className="fa-solid fa-chevron-down"
                  style={{ fontSize: '1rem' }}
                ></i>
              </button>
            </li>
            <SubCategoryLists key={idx} category={category}></SubCategoryLists>
          </div>
        );
      })}
    </ul>
  );
}

export default CategoryLists;
