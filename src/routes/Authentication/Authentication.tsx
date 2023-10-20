import SignInForm from '../../components/SignInForm/SignInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

import './Authentication.css'

const Authentication = () => {
  return (
    <div className="auth-container">
      {/* <h1>Sign In with Google</h1>
      <button onClick={logGoogleUser}>Log in with Google</button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
