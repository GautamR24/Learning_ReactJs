import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggle = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#051e42';
      showAlert("This has enabled dark mode","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("This has enabled light mode","success");
    }
  }
  return (
    <>
      <Navbar title="TextUtil" mode={mode} toggle={toggle}/>
      <Alert alert={alert}/>
      <div className="container my-3">
          {/* <About/> */}
          <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
          
      </div>
    </>
  );
}

export default App;
