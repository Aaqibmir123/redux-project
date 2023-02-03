import { createStore } from 'redux';


const intialvalue ={counter: 0, showtoggle:true};

const counterReducer = (state = intialvalue, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 5,
      showtoggle:state.showtoggle
    };
  }


if(action.type === 'increaseby5'){
  return{
    counter:state.counter + action.amount,
    showtoggle:state.showtoggle
  }
}
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 5,
      showtoggle:state.showtoggle
    };
  }

  if(action.type ==='toggle'){
    return{
      showtoggle:!state.showtoggle,
     counter:state.showtoggle
    }
  }

  return state;
};

const Store = createStore(counterReducer);
export default Store;





