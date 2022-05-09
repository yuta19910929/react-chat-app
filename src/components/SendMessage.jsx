import { useState, useEffect } from 'react';
import { db, auth } from '../firebase.js';
import firebase from 'firebase/compat/app';
import { Input} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const SendMessage = () => {
  const [message, setMessage] = useState("");

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
          <SendIcon />
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
