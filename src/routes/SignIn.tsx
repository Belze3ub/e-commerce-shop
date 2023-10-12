import { createUserDocument, signInWithGooglePopup } from "../utils/firebase"

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocument(user);
  }
  return (
    <>
      <h1>Sign In with Google</h1>
      <button onClick={logGoogleUser}>Log in with Google</button>
    </>
  );
}

export default SignIn