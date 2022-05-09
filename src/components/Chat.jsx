import { useState, useEffect } from 'react';
import SignOut from './SignOut';
import SendMessage from './SendMessage';
import { auth, db } from '../firebase.js';

const Chat = () => {

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
    .orderBy("createdAt")
    .limit(50)
    .onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div>
      <header>
        <h1>Lime</h1>
        <h2>{auth.currentUser.displayName}でログイン</h2>
        <SignOut />
      </header>
      <div className="msgs">
        {messages.map(({id, text, photoURL, uid}) =>(
          <div key={id} className={`msg ${uid == auth.currentUser.uid ? "send" : "received"}`}>
            <img src={photoURL} alt=""/ >
            <p>{text}</p>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
}

export default Chat;
