function ProductProperties({ productProperties }) {
  return (
    <div className="bg-light1 p-3 d-flex flex-column gap-2">
      <div className=" font-weight-500 text-primary">Product Properties</div>
      <div>{productProperties}</div>
    </div>
  );
}

export default ProductProperties;
