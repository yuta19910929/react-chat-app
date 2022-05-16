import { useState } from 'react';
import { db } from '../firebase.js';
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import { Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { scrollToBottom } from '../helper.js';

const SendMessage: React.FC = () => {

  const [message, setMessage] = useState<string>("");

  //サインインしているかチェックする為現在のユーザー情報を取得
  const auth = getAuth();
  const user = auth.currentUser;

  const sendMessage = (e: any) =>{
    if(message === ""){
      //メッセージ欄になにもない場合
    } else{
      e.preventDefault();
      //サインインしている状態であればデータを送信
      if (user) {
        //firebaseへデータを送信
        const { uid, photoURL } = auth.currentUser;
        db.collection("messages").add({
          text: message,
          photoURL,
          uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      } else {
        //サインアウト状態
      }
      setMessage("");
      scrollToBottom();
    }
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder="メッセージを入力"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
            value={message} />
          <SendIcon
            onClick={sendMessage} />
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
