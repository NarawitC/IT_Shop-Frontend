function OrderTopicSection({
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
      className="d-flex px-2 py-2"
      style={{ backgroundColor: backgroundColor ? backgroundColor : '#ffffff' }}
    >
      <div
        className="col-5 ps-5 align-items-center font-size-20 font-weight-500 ms-2"
        style={{ color: textColor }}
      >
        {textCol1}
      </div>
      <div className="col-7 d-flex justify-content-between gap-1 align-items-center">
        <div className="col-3 text-center" style={{ color: textColor }}>
          {textCol2}
        </div>
        <div className="col-2 text-center" style={{ color: textColor }}>
          {textCol3}
        </div>
        <div className="col-3 text-center" style={{ color: textColor }}>
          {textCol4}
        </div>
        {textCol5 ? (
          <div className="flex-fill text-center" style={{ color: textColor }}>
            {textCol5}
          </div>
        ) : null}
      </div>
      {children}
    </div>
  );
}

export default OrderTopicSection;
