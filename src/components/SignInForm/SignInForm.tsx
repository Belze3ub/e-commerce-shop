import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { ChangeEvent, FormEvent, useState } from 'react';
import {
  createUserDocument,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase';

import './SignInForm.css';
import { FirebaseError } from 'firebase/app';

interface FormFields {
  email: string;
  password: string;
}

const SignInForm = () => {
  const defaultFormFields = {
    email: '',
    password: '',
  };
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);

  const { email, password } = formFields;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const {user} = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      // console.log(user)
      resetFormFields();
    } catch (error) {
      // if (error instanceof FirebaseError) {
      //   switch (error.code) {
      //     case 'auth/wrong-password':
      //       alert('invalid password');
      //       break;
      //     case 'auth/user-not-found':
      //       alert('user not found');
      //       break;
      //     default:
      //       console.log(error)
      //   }
      // }
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/invalid-login-credentials') {
          alert('Wrong email or password');
        }
        console.log(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="signInFormContainer">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit} className="signInForm">
        <FormInput
          label="Email"
          id="signInEmail"
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          id="signInPassword"
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button>Sign in</Button>
          <Button type='button' buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
