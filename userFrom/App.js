
import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import './App.css';
function App(){
  // for username 
  const[userInput,setInput]=useState('');
// for password & toggle
  const[Inputvalue,setInputValue]=useState('');
  const[password,setPassword]=useState(false);
  // for button
  const[click,setclick]=useState('click me');


   // for username
  const handleUsername= (event) =>{
    setInput(event.target.value);
  };

  // for password & toggle
  const togglePasswordVisibility= () => {
    setPassword(!password);
  }

  const handleChange= (event) =>{
    setInputValue(event.target.value);
  };

  // for button
  const handleClick= () => {
    setclick('button clicked');
  }

  return(
    <div className="input-container">
      <form>

      <input
      className="custom-input"
      type="text"
      value={userInput}
      onChange={handleUsername}
      placeholder="enter username.."
      />
      <input 
      className="custom-password"
      type={password ? "text" :"password"}
      value={Inputvalue}
      onChange={handleChange}
      placeholder="enter password..."
      />

     <FontAwesomeIcon
      icon={password? faEyeSlash:faEye}
      onClick={togglePasswordVisibility}
      className="eye-icon"
      />
      <input
      type="button"
      value={click}
      onClick={handleClick}
      className="btn"
      />
      </form><br></br>
      <a href="#" target="blank" className="a">forgot password</a>
    </div>
  );
}
export default App;