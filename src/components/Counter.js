import classes from './Counter.module.css';
import { useDispatch, useSelector} from "react-redux";

const Counter = () => {

 const dispatch =  useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state =>state.showtoggle);

  const incrementHandler=()=>{
    dispatch({type:'increment'});
  }


  const Increase=()=>{
    dispatch({type:'increaseby5',amount:5});
  }
  const decrementHandler=()=>{
    dispatch({type:'decrement'});
  }
  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
  };

  

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={Increase}>increaseby5</button>
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );


  };

export default Counter;


//How to make button blur in css