import { Button } from '@mui/material';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase.js';

const SignOut: React.FC = () => {

  return (
    <div>
      <Button 
        variant="contained" 
        onClick={() => auth.signOut()}
        size="small" >
        サインアウト
      </Button>
    </div>
  );
}

export default SignOut;