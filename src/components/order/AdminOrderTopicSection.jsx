function AdminOrderTopicSection({
  children,
  textCol1,
  textCol2,
  textCol3,
  textCol4,
  textCol5,
  backgroundColor,
  textColor,
}) {
  return (
    <div
      className="d-flex px-2 py-2 text-center align-items-center justify-content-between"
      style={{ backgroundColor: backgroundColor ? backgroundColor : '#ffffff' }}
    >
      <div className="col-2 text-center" style={{ color: textColor }}>
        {textCol1}
      </div>

      <div className="col-3 text-center " style={{ color: textColor }}>
        {textCol2}
      </div>
      <div className="col-2 text-center" style={{ color: textColor }}>
        {textCol3}
      </div>
      <div className="col-2 text-center" style={{ color: textColor }}>
        {textCol4}
      </div>
      <div className="col-2 text-center" style={{ color: textColor }}>
        {textCol4}
      </div>

      {children}
    </div>
  );
}

export default AdminOrderTopicSection;
