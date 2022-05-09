import SignIn from './components/SignIn';
import Chat from './components/Chat';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase.js';

const App: React.VFC = () => {
  const [user] = useAuthState(auth as any);
  return (
    <div>
      {user ? <Chat /> : <SignIn />}
    </div>
  );
}

export default App;
