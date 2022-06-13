import { Link } from 'react-router-dom';
function ProductPageBreadcrumb({ category, subCategory, product }) {
  return (
    <div className="d-flex gap-1">
      <Link className="link-text4" to={'/product'}>
        Product
      </Link>
      {category && (
        <Link className="link-text4" to={`/product/category/${category.id}`}>
          &gt; {category.name}
        </Link>
      )}
      {subCategory && (
        <Link
          className="link-text4"
          to={`/product/subCategory/${subCategory.id}`}
        >
          &gt; {subCategory.name}
        </Link>
      )}
      {product && (
        <Link className="link-text4" to={`/product/info/${product.id}`}>
          &gt; {product.name}
        </Link>
      )}
    </div>
  );
}

export default ProductPageBreadcrumb;
