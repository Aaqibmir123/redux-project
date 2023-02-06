import { Fragment, useEffect } from 'react';

import Userexpenses from './components/Userexpenses';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/authslice';
import { toggleTheme } from "./store/darkModeSlice";

function App() {
  const Authctx = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.mode);

  useEffect(() => {
    if (localStorage.getItem('token') && !Authctx) {
      dispatch(authActions.login(localStorage.getItem('token')));

    }

  }, []);


  return (
    
  <div style={{ background: mode ? 'black' : 'white',  height: '100vh',
  width:'100%',position: 'absolute' }}>
    
      <Header />
      <div>
        <button onClick={() => dispatch(toggleTheme())}>Dark Mode</button>
      </div>
      {!Authctx && <Auth />}
      {Authctx && <UserProfile />}
      {Authctx && <Userexpenses />}
      
    </div>
  );
}

export default App;

