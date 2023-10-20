import { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  buttonType?: keyof typeof BUTTON_TYPES,
}

const BUTTON_TYPES = {
  google: 'google-sign-in',
  default: 'default',
  inverted: 'inverted'
}

const Button = ({ children, buttonType = 'default', ...buttonProps }: Props) => {
  return (
    <button
      className={`button ${BUTTON_TYPES[buttonType]}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button