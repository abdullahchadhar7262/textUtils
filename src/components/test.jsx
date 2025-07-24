import React from 'react'
import { useState } from 'react'

export default function Test() {
 let [mode,setmode] = useState("white")
  let [text,settext] = useState("white")



     const style={
        height:"100vh",
        width:"100vw",
        backgroundColor:mode,
        color:text
     }

     const Mode =()=>{
     if(mode==="black"){
           setmode("white")
          btntext()
     }
     else{
        btntext()
        setmode("black")
     }
     }

     const  btntext= ()=>{
        if(mode==="white")
        settext("white")

       else{
        settext("black")
       }

     }
  return (
    <div>
        <div style={style}>  
              <button onClick={Mode} className='btn btn-dark'>{text}Mode</button>
              <p>what is you name</p>
         </div>
     
    </div>
  )
}
