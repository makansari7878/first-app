
import './App.css';

import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';

//import {Route, Switch} from "react-router-dom"
import { Routes, Route, Link } from "react-router-dom";
function App() {

  
  return (

  <>  
<NavBar/>
      <div className="App">
       
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
        
      </div>
    
    </>  
  ) 
}
   
  


export default App;
