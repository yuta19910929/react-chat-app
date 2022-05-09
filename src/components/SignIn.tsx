import { Button } from '@mui/material';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase.js';

const SignIn: React.VFC = () => {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div className="topMsg">
      <p>新しいチャットアプリ！<br />
      LIMEで会話しよう！</p>
      <Button variant="contained" onClick={signInWithGoogle}>
        グーグルでログイン
      </Button>
    </div>
  );
}

export default SignIn;
