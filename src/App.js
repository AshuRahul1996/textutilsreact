import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import Alert from './component/Alert';
import TextForm from './component/TextForm';
import React,{useState} from 'react';
// import Alert from './component/Alert';


function App() {
  const [mode, setMode] = useState('light'); //whether darkMode enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
setAlert(null);
    },1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode  ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success");
      document.title = 'TextUtils - light Mode';
    }
  }
  // let myStyle={
  //   color:'white',
  //   backgroundColor:'black'   

  return (
    <>
      {/* <Navbar title="TextUtils2" aboutText="about" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils"mode ={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode ={mode}/>
        {/* <About /> */}
        
      </div>


    </>
  );

}
export default App;
