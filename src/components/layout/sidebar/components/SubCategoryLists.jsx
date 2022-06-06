import { Link } from 'react-router-dom';

function SubCategoryLists({ category }) {
  let subCategories;
  switch (category) {
    case 'Notebook':
      subCategories = ['Working', 'Gaming'];
      break;
    case 'Computer':
      subCategories = ['Monitor', 'Computer set'];
      break;
    case 'Headphone':
      subCategories = ['True wireless', 'In-ear'];
      break;
    case 'Accessories':
      subCategories = ['Light bar', 'Footstool'];
      break;

    default:
      break;
  }

  return (
    <>
      <div className="">

      </div>
      <div>
        <ul className="collapse" id={`navbarToggleExternalContent${category}`}>
          {subCategories.map((subCategory, idx) => {
            return (
              <li key={idx}>
                <Link className="link-text2" to={`/${category}/${subCategory}`}>
                  {subCategory}
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
