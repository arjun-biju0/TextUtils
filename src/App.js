
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState("light");
  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#232D3F";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <TextForm heading="Enter the text to analyse: " mode={mode}/>
    </>
  );
}

export default App;
