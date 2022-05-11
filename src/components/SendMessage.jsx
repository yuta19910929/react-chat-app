import { useState } from 'react';
import { db, auth } from '../firebase.js';
import firebase from 'firebase/compat/app';
import { Input} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { scrollToBottom } from '../helper.js';

const SendMessage = () => {
  const [message, setMessage] = useState("");

  //firebaseへデータを送信
  const sendMessage = (e) =>{
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessage("");
    scrollToBottom();
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
            onChange={(e) => setMessage(e.target.value)}
            value={message} />
          <SendIcon
            onClick={sendMessage} />
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
