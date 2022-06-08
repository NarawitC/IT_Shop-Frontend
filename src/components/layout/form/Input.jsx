function Input({ text, inputType, defaultValue, setState }) {
  return (
    <div className="col d-flex flex-column gap-2">
      <label
        htmlFor={`${text}Input`}
        className="font-text-primary font-weight-500 ms-2"
      >
        {text}
      </label>
      <input
        type={inputType ? inputType : 'text'}
        className="form-control"
        id={`${text}Input`}
        placeholder={text}
        onChange={(e) => setState(e.target.value)}
        defaultValue={defaultValue ? defaultValue : ''}
      />
    </div>
  );
}

export default Input;

export const InputTextArea = ({ text, setState }) => {
  return (
    <div className="col d-flex flex-column gap-2">
      <label
        htmlFor={`${text}Input`}
        className="font-text-primary font-weight-500 ms-2"
      >
        {text}
      </label>
      <textarea
        className="form-control"
        id={`${text}Input`}
        placeholder={text}
        onChange={(e) => setState(e.target.value)}
        rows={5}
      />
    </div>
  );
};
