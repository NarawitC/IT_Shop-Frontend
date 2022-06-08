function Form({ children, width }) {
  return (
    <div
      className="p-3 py-4 d-flex flex-column gap-3 bg-light1"
      style={{ width: width ? width : 'auto' }}
    >
      {children}
    </div>
  );
}

export default Form;
