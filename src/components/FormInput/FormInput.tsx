import './FormInput.css'
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormInput = ({label, ...inputProps} : Props) => {
  return (
    <div className="label-input-group">
      <input
        className={`${inputProps.value ? 'active' : ''} form-input`}
        {...inputProps}
      />
      {label && <label htmlFor={inputProps.id} className="form-label">{label}</label>}
    </div>
  );
};

export default FormInput;
