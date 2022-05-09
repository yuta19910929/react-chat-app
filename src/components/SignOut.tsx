import { Button } from '@mui/material';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase.js';

const SignOut: React.VFC = () => {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div>
      <Button variant="contained" onClick={() => auth.signOut()}>
        サインアウト
      </Button>
    </div>
  );
}

export default SignOut;
