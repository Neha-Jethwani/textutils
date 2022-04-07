
import { useState } from 'react';

import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import {
  BrowserRouter,
  Routes,
  Route
  
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const togglemode = () =>{
    console.log("click");
    if (mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#15315c';
      showAlert("Dark Mode Enabled","success");
     // document.title="dark mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled","success");
     // document.title="light mode";
    }
  }

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  
  return (
    <>
   <BrowserRouter>
    <Navbar title="TextUtils" listname1="Home" listname2="About us" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    {/*<div className="container my-3">
           <Textarea heading="Enter the text" mode={mode} showAlert={showAlert}/>
  </div>*/}

    {/*<About/>*/}
    <div className="container my-3">
    <Routes>

         
          <Route exact path="/" element={<Textarea heading="Enter the text" mode={mode} showAlert={showAlert}/>} />
         
           
          <Route exact path="/about" element={<About mode={mode} />} />
           {/* <About />
          </Route>
          <Textarea heading="Enter the text" mode={mode} showAlert={showAlert}/>
          
          </Route>
          */}
          
          
        </Routes>
        </div>
        </BrowserRouter>
    </>
  );
}

export default App;
