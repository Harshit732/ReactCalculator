import Display from "./Component/Display";
import Buttons from "./Component/Buttons";
import "./App.css";
import { useState } from "react";

function App() {
  let numlock = [
    "/",
    "*",
    "-",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=","C"
  ];
  

  let [CalValue,setCalValue]= useState("");

  const buttonHandle=(event)=>{
      console.log(event);
     
      const bt=event.target.innerHTML;
      console.log(bt);
      if(bt==='C'){
        setCalValue("");

      }
      else if(bt==='='){
        const result= eval(CalValue);
        setCalValue(result);

      }
      else{

        var newvalue= CalValue + bt;
        console.log(newvalue);
        setCalValue(newvalue);
        

      }
  }

  return (
    <>
      <div className="borderline container">
        <Display disValue={CalValue}></Display>
        <Buttons num={numlock} onButtonClick={buttonHandle}></Buttons>
      </div>
    </>
  );
}

export default App;
