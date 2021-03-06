import { useState } from 'react';
import { Input, Button } from '@mui/material';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase.js';
import { IconContext } from 'react-icons'
import { GiCutLemon } from 'react-icons/gi';

const SignIn: React.FC = () => {
  const [ password, setPassword ] = useState<string>();
  const [ modal, setModal ] = useState<boolean>(false);

  const signInWithGoogle = () => {
    if(process.env.REACT_APP_CHAT_PASS === password){
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }else {
      setModal(true);
    }
  }

  return (
    <div className="topMsg">
      <IconContext.Provider value={{ color: '#32cd32', size: '100px' }}>
        <GiCutLemon />
      </IconContext.Provider>
      <p>チャットアプリ<br />
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
