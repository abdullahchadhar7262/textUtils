import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import TextForm from "./components/textForm";
// import About from "./components/about";
import Alert from "./components/alert";

function Bootapp() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState("");

  const showalert = (type, message) => {
    setalert({ msg: message, type: type });

    // Clear alert after 2 seconds
    setTimeout(() => setalert(""), 2000);
  };

  const SetMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("success", "You have enabled dark mode");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("success", "You have enabled light mode");
    }
  };

  const greenishmode = () => {
    if (mode === "dark" || mode === "light") {
      setmode("success");
      document.body.style.backgroundColor = "#20c997";
      document.title = "Dilawar Chadhar";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Abdullah Chadhar";
    }
  };

  return (
    <div>
                <Navbar title="Textutils" about="About" mode={mode} greenishmode={greenishmode}SetMode={SetMode}/>
      <Alert alert={alert} />
    <TextForm showalert={showalert} />
    
    </div>


    // <BrowserRouter>
    //   <Navbar
    //     title="Textutils"
    //     about="About"
    //     mode={mode}
    //     greenishmode={greenishmode}
    //     SetMode={SetMode}
    //   />
    //   <Alert alert={alert} />

    //   <div className="container my-3">
    //     <Routes>
    //       <Route path="/" element={<TextForm showalert={showalert} />} />
    //       <Route path="/about" element={<About />} />
    //        <Route exact path="/TextUtils"element={<TextForm showalert={showalert} />}/>
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
}

export default Bootapp;
