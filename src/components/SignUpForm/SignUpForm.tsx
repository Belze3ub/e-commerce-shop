import { ChangeEvent, FormEvent, useState } from 'react';
import './SignUpForm.css';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
} from '../../utils/firebase';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { FirebaseError } from 'firebase/app';

interface FormFields {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log('password do not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // console.log(user);
      await createUserDocument(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/email-already-in-use') {
          alert('Email already in use');
        }
      }
      console.log(error);
    }
  };

  return (
    <div className="signUpFormContainer">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className="signUpForm">
        <FormInput
          label="Name"
          id="displayName"
          type="text"
          name="displayName"
          value={displayName}
          required
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          id="email"
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          id="password"
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />
        <FormInput
          label="Confirm Password"
          id='confirmPassword'
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
          onChange={handleChange}
        />
        <Button>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
