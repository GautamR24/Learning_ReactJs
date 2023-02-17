import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [mode,setMode] = useState('light');

  const toggle = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#051e42';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtil" mode={mode} toggle={toggle}/>
      <div className="container my-3">
          {/* <About/> */}
          <TextForm heading="Enter the text to analyze below" mode={mode}/>
          
      </div>
    </>
  );
}

export default App;
