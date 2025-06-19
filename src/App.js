// import './App.css';
// import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react'
// import { BrowserRouter, Routes,Route, } from 'react-router-dom'
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark Mode has been enabled!" , "success")
    }else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been enabled!" , "success")
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Textform heading="Enter a text to analyze" mode={mode} showAlert={showAlert}/>
      {/* <About/> */}
    </>
  );
}

export default App;
