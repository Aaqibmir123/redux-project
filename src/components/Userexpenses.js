import React, { useEffect, useState } from 'react'
import classes from './UserProfile.module.css';
import { useRef } from 'react';
import { informationSlice } from "../store/informationslice";

import { useDispatch, useSelector } from 'react-redux';
const Userexpenses = () => {

  const dispatch = useDispatch();
  // const [data,setdata] = useState([]);
  const data = useSelector((state) => state.userData.data);
  const Addmoneryref = useRef();
  const Adddescref = useRef();
  const addcatagoerref = useRef();

  useEffect(() => {
    getuserData();
  }, [])

  const submithandler = (e) => {
    
    e.preventDefault();
    const EnterdMoneyValue = Addmoneryref.current.value;
    const EnterDescfvalue = Adddescref.current.value;
    const EnteredCatagoryvalue = addcatagoerref.current.value;
    // console.log(EnterdMoneyValue, EnterDescfvalue, EnteredCatagoryvalue);


    // setexpense((preState) => {
    //   return [...preState,
    //   { money: EnterdMoneyValue, Desc: EnterDescfvalue, Catagory: EnteredCatagoryvalue }]

    // })


    //use firebase

    let url = "https://expense-tracker-f1216-default-rtdb.firebaseio.com/expenses.json";
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        EnterdMoneyValue,
        EnterDescfvalue,
        EnteredCatagoryvalue
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if (res.ok) {

        return res.json();
      }
    }).then((data) => {

      const userData = {
        EnterdMoneyValue,
        EnterDescfvalue,
        EnteredCatagoryvalue,
        id: data.name
      }
      console.log(userData);
      dispatch(informationSlice.edit(userData))

    })


  }

  function getuserData() {
    fetch('https://expense-tracker-f1216-default-rtdb.firebaseio.com/expenses.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      }).then((datas) => {
        // console.log(datas);
        const result = [];
        for (let key in datas) {
          result.push(datas[key]);

        }
        dispatch(informationSlice.refresh(result));
        // console.log(result);

      })
  }


  return (
    <main className={classes.profile}>
      <form >
        <label htmlFor=''>Add Money</label>
        <input type='text' ref={Addmoneryref} placeholder="Add Money" /><br />
        <label htmlFor=''>Add Desc</label>
        <input type='text' ref={Adddescref} placeholder="Desc" /><br />
        <label htmlFor=''>Catagory</label>
        <select ref={addcatagoerref} >
          <option >Food</option>
          <option >Petrol</option>
          <option >Salary</option>
          <option >Car</option>
        </select>
        <br /><br />
        <button onClick={submithandler}>Add Expenses</button>


      </form>
      <ul>
        {data.map((items) => {
          return (
            <li key={Math.random()}>
              {items.EnterdMoneyValue} {items.EnterDescfvalue} {items.EnteredCatagoryvalue}
            </li>
          )
        })}

      </ul>
    </main>
  )
}

export default Userexpenses;