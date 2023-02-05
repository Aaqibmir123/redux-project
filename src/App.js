import { Fragment, useEffect } from 'react';

import Userexpenses from './components/Userexpenses';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/authslice';
import Conditonal from './components/Conditonal';

function App() {
  const Authctx =  useSelector((state) => state.auth. isAuthenticated);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(localStorage.getItem('token' ) && !Authctx){
      dispatch(authActions.login(localStorage.getItem('token')));
      
    }

  },[]);

  return (
    <Fragment>
      <Header />
      {!Authctx &&  <Auth />}
      {Authctx && <UserProfile />}
      {Authctx && <Userexpenses />}
      {Authctx && <Conditonal/>}
      
    
      
    </Fragment>
  );
}

export default App;