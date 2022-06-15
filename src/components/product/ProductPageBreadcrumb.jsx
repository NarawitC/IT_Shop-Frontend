import { Link } from 'react-router-dom';
function ProductPageBreadcrumb({ category, subCategory, product, searchText }) {
  return (
    <div className="d-flex gap-1 ms-3">
      <Link className="link-text4" to={'/product'}>
        All product
    </Link>
      {searchText && (
        <Link className="link-text4" to={`/product/searchText/${searchText}`}>
          / {searchText}
        </Link>
      )}
      {category && (
        <Link className="link-text4" to={`/product/category/${category.id}`}>
          / {category.name}
        </Link>
      )}
      {subCategory && (
        <Link
          className="link-text4"
          to={`/product/subCategory/${subCategory.id}`}
        >
          / {subCategory.name}
        </Link>
      )}
      {product && (
        <Link className="link-text4" to={`/product/info/${product.id}`}>
          / {product.name}
        </Link>
      )}
    </div>
  );
}

export default ProductPageBreadcrumb;
