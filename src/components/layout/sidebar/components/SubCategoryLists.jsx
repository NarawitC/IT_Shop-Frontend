import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSubCategoryByCategoryId } from '../../../../api/user/subCategory';

function SubCategoryLists({ categoryId }) {
  // let subCategories;
  // switch (category) {
  //   case 'Notebook':
  //     subCategories = ['Working', 'Gaming'];
  //     break;
  //   case 'Computer':
  //     subCategories = ['Monitor', 'Computer set'];
  //     break;
  //   case 'Headphone':
  //     subCategories = ['True wireless', 'In-ear'];
  //     break;
  //   case 'Accessories':
  //     subCategories = ['Light bar', 'Footstool'];
  //     break;

  //   default:
  //     break;
  // }
  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    const fetchSubCategories = async () => {
      const {
        data: { subCategories },
      } = await getSubCategoryByCategoryId(categoryId);
      setSubCategories(subCategories);
    };
    fetchSubCategories();
  }, [categoryId]);

  return (
    <>
      <div className=""></div>
      <div>
        <ul
          className="collapse"
          id={`navbarToggleExternalContent${categoryId}`}
        >
          {subCategories.map((subCategory, idx) => {
            return (
              <li key={idx}>
                <Link
                  className="link-text2"
                  to={`/product/subCategory/${subCategory.id}`}
                >
                  {subCategory.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default SubCategoryLists;
