import './App.css';
import {useState } from 'react'; 
import pic1 from '#bts #bangtan #sweet_.jpg';
function ToMyApp(){
  const[bgColor,setBgColor]=useState("lightblue");
  const changeBackground=()=>{
    const colors=["lightblue","purple","orange","green"];
    const randomColor=colors[Math.floor(Math.random()*colors.length)];
    setBgColor(randomColor);

    alert('the current background color is '+bgColor)
  }
  return(
    <div className='container' style={{backgroundColor:bgColor}}>
      <h1 className="title">hello elsa to my app with little more style </h1>
      <p className="subtitle">you did it </p>
      <button className='btn'onClick={changeBackground}>click me </button>
    </div>
  )
}
export default ToMyApp;

