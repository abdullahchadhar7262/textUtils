import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

   const add = (num)=>{
    setCount(()=>{
          count=num;
    })
   }

  return (
    <div className="web">
      <div className="calculator">
        <div className="screen"><p>{count}</p></div>

        <div className="btns">
          <div className="numericbutton" >
            <div className="one">
              <button  onClick={add(1)} >1</button  >
              <button onclick="">2</button>
              <button  onclick="" >3</button   >
            </div>
            <div className="two">
              <button  onclick="" >4</button   >
              <button  onclick="" >5</button   >
              <button  onclick="" >6</button   >
            </div>
            <div className="three">
              <button  onclick="" >7</button   >
              <button  onclick="" >8</button   >
              <button  onclick="" >9</button   >
            </div>
            <div className="three">
              <button  onclick="" >0</button   >
              <button  onclick="" >=</button   >
              <button  onclick="" >00</button   >
            </div>
          </div>
          <div className="operators">
            <div><button  onclick="" >*</button ></div>
            <di><button  onclick="" >/</button   > </di>
            <div> <button  onclick="" >+</button   ></div>
            <div><button  onclick="" >-</button ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
