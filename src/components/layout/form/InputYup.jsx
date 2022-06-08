import { Controller, useFormContext } from 'react-hook-form';

function InputYup({ name, ...props }) {
  console.log(name);
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => {
          return <input value={value} onChange={onChange} {...props}></input>;
        }}
        name={name}
      />

      {errors[name] && <div className="">{errors[name].message}</div>}
    </div>
  );
}

export default InputYup;
