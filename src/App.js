import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [sliderValue, setSliderValue] = useState(0);
  const [message, setmessage] = useState()
  const [ddate,setdate]=useState(new Date())
  // date
const currentDate = new Date();
const day = currentDate.getDay();
const month = currentDate.getMonth();
const date = currentDate.getDate();
const year = currentDate.getFullYear();


function dateHandler() {
  const dateFormate = ddate.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const newDate = new Date(ddate)
  if (number == 0) {
    return dateFormate
  } else {
    newDate.setDate(newDate.getDate() + number);
    const newFormatedDate = newDate.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
    return newFormatedDate
  }}

const days = ["Sun", "Mon", "Tue","Wed", "Thu","Fri","Sat"]
const months = ["Jan","Feb" ,"March","Apr" ,"May","Jun", "July","Agust","Sep","Oct","Nov","Dec"]

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
   
  };

  // input k andr k liye 
  const [number, setNumber] = useState(sliderValue);

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
    
  };
  // .....
  // inreament function bana  rha hu value ko + btn pe
  function increamentHandler() {
    if (sliderValue === 0) {
      setNumber(0);
      setmessage("please increase the slider number value")
    } else {
      var newnumvalue = Number(number) + Number(sliderValue);
      setNumber(newnumvalue);
      
    }
  }
    // decreament function bana  rha hu value ko + btn pe

    function decreamentHandler() {
      if (sliderValue === 0 || number===0) {
        setNumber(0);

      }
       else {
        var newnumvalue = Number(number) - Number(sliderValue);
        setNumber(newnumvalue);
        
      }
    }
    
 
  


  return (
    <div className="App">
      <div className='container'>
        <h2>Date counter</h2>
        <h3>{sliderValue}</h3>
        <input className='mySlider'
          type="range"
          min="0"
          max="10"
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <p className='message'>{message}</p>
        <div className='numberDiv'>
          <button className='decreament' onClick={decreamentHandler}>-</button>
          <input
            type="number"
            value={number}
            onChange={handleNumberChange}
          />
          <button className='increament' onClick={increamentHandler}>+</button></div>
        {
           ((number == "0") || (number == "")) ?
           (<h3>Today is {days[day]} {months[month]} {date} {year}</h3>) :
           (<h3>{number} days from {dateHandler()}</h3>)
        }

      </div>
    </div>
  );
}

export default App;
