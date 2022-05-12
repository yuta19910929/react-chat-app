import { useState, useEffect, useContext } from 'react';
import { AdminFlagContext } from "./providers/AdminFlagProvider";
import { Input, TextField, Button } from '@mui/material';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase.js';
import AlertBox from './AlertBox';

const SignIn: React.VFC = () => {
  const [password, setPassword] = useState();
  const { modal, setModal } = useContext(AdminFlagContext);

  const signInWithGoogle = () => {
    if(process.env.REACT_APP_CHAT_PASS === password){
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }else {
      setModal((prev) => !prev);
      console.log(modal);
    }
  }

  return (
    <div className="topMsg">
      <p>新しいチャットアプリ！<br />
      LIMEで会話しよう！</p>
      <div className="mb30">
        <Input
          id="password"
          placeholder="パスワードを入力"
          type={'password'}
          onChange={(e) => setPassword(e.target.value)} />
      </div>
      <Button
        variant="contained"
        onClick={signInWithGoogle}
      >
        グーグルでログイン
      </Button>
      {modal && <AlertBox />}
    </div>
  );
}

export default SignIn;
