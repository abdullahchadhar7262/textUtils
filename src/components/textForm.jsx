import React, { useState } from "react";


export default function TextForm(props) {
  const [Text, setText] = useState("uppercase");
  const [text, settext] = useState("uppercase");
  const [mode, setmode] = useState("light");

  const change = () => {
    let newtext = Text.toUpperCase();
    setText(newtext);

  };
  const changel = () => {
    let newtext = Text.toLowerCase();
    setText(newtext);
   props.showalert("sucess","the given text has been converted to lowercase")
  };

  const cleartext = () => {
    setText("");
    props.showalert("danger","all the text has been deleted")
  };

  const convert = (event) => {
    setText(event.target.value);
  };
  const setcolor = () => {
    if (mode === "light") {
      setmode("dark");
    } else {
      setmode("light");
    }
  };
     const style={
      backgroundColor:"grey"
     }
  return (
    <div>
      <div style={style} className={`bg-${mode} rounded border-warning border  text-${mode === "light" ? "dark" : "light"} p-3`} >
        <div class="mb-3 container rounded ">
          <label for="exampleFormControlTextarea1" className="form-label">
            Enter Your Text TO Convert
          </label>
          <textarea
            class="form-control "
            value={Text}
            onChange={convert}
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
        </div>
        <button className="  btn btn-primary  rounded  my-4 mx-1 " onClick={change}>
          convertToUppercase
        </button>
        <button className="  btn btn-primary rounded" onClick={changel}>
         convertoLowerCase
        </button>
        <button className="  btn btn-danger rounded mx-2" onClick={cleartext}>
          Clearall
        </button>
        <button className={` btn bg-${text===""} rounded m-10`} onClick={setcolor}>
          changeBackground
        </button>
 

        <div className="container">
          <h1>you text summary</h1>
          <p>
            words{Text.split(" ").length-1} and characters{Text.length}
          </p>
          <p>you can read in {0.08 * Text.split(" ").length}</p>
          <h3>preview</h3>
          <p>{Text}</p>
        </div>
      </div>
    </div>
  );
}
