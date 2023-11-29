import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
 import{
   BrowserRouter as Router,
   Routes,
   Route,
  Link
 }from "react-router-dom";



function App() {
  const [mode, setMode]=useState('light');
  const [alert,setAlert]=useState(null);
   const showAlert =(message,type)=>
  {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Darkmode has been enabled","success");
      document.title="Textutils-Darkmode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Lightmode has been enabled","success");
      document.title="Textutils-Lightmode";
    }
  }
  return (
   <>
  <Router>
   <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/> 

   <div className="container my-3">
    <Routes> 
      <Route exact path='/' element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>}></Route>
   
       <Route exact path="/about" element={<About mode={mode} />} ></Route>
      
    
  </Routes> 
  
    {/*<About/>*/}
   </div>
    </Router> 
   </>
  );
}

export default App;
