import { useState, useEffect } from 'react';
import SignOut from './SignOut';
import SendMessage from './SendMessage';
import { auth, db } from '../firebase.js';
import { IconContext } from 'react-icons'
import { GiCutLemon } from 'react-icons/gi';
import { scrollToBottom } from '../helper.js';

const Chat: React.FC = () => {

  //firebaseからデータを取得
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(30)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
    });
    scrollToBottom();
  }, []);

  return (
    <div>
      <header>
        <h1>
          <IconContext.Provider 
            value={{ className: 'limeIcon' }}
          >
            <GiCutLemon />
          </IconContext.Provider>
          Lime
        </h1>
        <h2>{auth.currentUser?.displayName}でログイン中</h2>
        <SignOut />
      </header>
      <div className="msgs">
        {messages.map(({ text, photoURL, uid, createdAt }) => (
          <div className={`${uid === auth.currentUser?.uid ? "taR" : "taL"}`}>
            <div
              key={uid}
              className={`msg ${uid === auth.currentUser?.uid ? "send" : "received"}`}>
                <img src={photoURL} alt="acountPhoto" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
}

export default Chat;