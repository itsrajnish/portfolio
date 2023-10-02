
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Contact from "./Components/Contact";


function App() {
  return (
    <>
      

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Skills" element={<Skills/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

    </>
  );
}

export default App;
