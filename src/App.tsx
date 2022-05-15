import Chat from './components/Chat';
import SignIn from './components/SignIn';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase.js';

const App: React.FC = () => {
  const [user] = useAuthState(auth as any);
  return (
      <div>
        {user ? <Chat /> : <SignIn />}
      </div>
  );
}

export default App;
