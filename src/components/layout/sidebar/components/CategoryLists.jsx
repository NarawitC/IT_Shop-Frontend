import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import SubCategoryLists from './SubCategoryLists';
import { ChevronDownIcon } from '../../../icon/icon';
import { getAllCategoryInfo } from '../../../../api/user/category';

function CategoryLists() {
  // const categories = ['Notebook', 'Computer', 'Headphone', 'Accessories'];
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await getAllCategoryInfo();
      setCategories(data.categories);
    };
    fetchCategories();
  }, []);

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
              <Link
                className="link-text2"
                to={'/product/category/' + category.id}
              >
                {category.name}
              </Link>
              <button
                className="btn-dark-i"
                data-bs-toggle="collapse"
                data-bs-target={`#navbarToggleExternalContent${category.id}`}
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <ChevronDownIcon style={{ fontSize: '1rem' }}></ChevronDownIcon>
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
