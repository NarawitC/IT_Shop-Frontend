function Counter({ onClickDecrease, onClickIncrease, state = 0 }) {
  return (
    <div
      className="d-flex align-items-center "
      style={{
        width: '130px',
        border: '2px solid #0057e4',
      }}
    >
      <button
        disabled={!state}
        style={{ width: '30px' }}
        onClick={onClickDecrease}
        className="font-weight-500 font-size-20"
      >
        -
      </button>
      <div
        className="flex-fill text-center font-size-20"
        style={{
          borderLeft: '2px solid #0057e4',
          borderRight: '2px solid #0057e4',
        }}
      >
        {state}
      </div>
      <button
        style={{ width: '30px' }}
        onClick={onClickIncrease}
        className="font-weight-500 font-size-20 "
      >
        +
      </button>
    </div>
  );
}

export default Counter;
