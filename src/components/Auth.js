import classes from './Auth.module.css';
import {authActions} from '../store/authslice';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
const Auth = () => {
   const dispatch =useDispatch();
    const emailRef = useRef();
    const passwordRef = useRef();
    
  const loginHandler=(e)=>{
    const enterdedEmail = emailRef.current.value;
    const enterdPassword = passwordRef.current.value;
    // 
    e.preventDefault();
    let url= 
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAgs87SFNNhZ1bqnMLpJbkcggMhWmDsZ1w';
    fetch(url,{
      method:'POST',
      body:JSON.stringify({
       email: enterdedEmail,
        password:enterdPassword
      }),
      headers: {
        'Content-Type':'application/json'
      }
    }).then((res)=>{
      if(res.ok){
        return res.json();
      }
    }).then((data)=>{
      console.log(data);
      dispatch(authActions.login(data.idToken));
      localStorage.setItem('token', state.token);
    }).catch((error)=>{
      console.log(error.message);
    })

    
  }

  
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passwordRef}/>
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
