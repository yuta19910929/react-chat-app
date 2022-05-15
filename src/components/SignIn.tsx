import { useState } from 'react';
import { Input, Button } from '@mui/material';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase.js';

const SignIn: React.FC = () => {
  const [ password, setPassword ] = useState<string>();
  const [ modal, setModal ] = useState<boolean>(false);

  const signInWithGoogle = () => {
    if(process.env.REACT_APP_CHAT_PASS === password){
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }else {
      setModal(!modal);
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
      </div>
      <Button
        variant="contained"
        onClick={signInWithGoogle}
      >
        グーグルでログイン
      </Button>
      {modal && <div className="mt50"><p>テスト環境のため、パスワードの入力が必要です。<br />
      管理者へお問合せください</p></div>}
    </div>
  );
}

export default SignIn;
