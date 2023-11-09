import { useState } from "react";
import {Routes, Route} from 'react-router-dom';
import './App.css'
import Aboutpage from './Screens/Aboutpage';
import Index from './Screens/Index';
import Servicepage from './Screens/Servicepage';
import Projectpage from './Screens/Projectpage';
import Contactpage from './Screens/Contactpage';
// import Footer from './Components/Footer';
// import Table from './Screens/Table';
import Navbar from './components/Navbar';
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";


function App() {
  const [showModal, setShowModal] = useState(false);
  // const [showInscription, setShowInsctiption] = useState(false);

  const handleButtonClick = () => {
    setShowModal("Modal");
    // setShowInsctiption("Inscription");
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
    // setShowInsctiption(false);
  };
  

  return (
    <>
    <Navbar onClick={handleButtonClick}/>
    {showModal && (<Modal onClose={handleCloseModal}/>)}
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='about' element={<Aboutpage/>}/>
      <Route path='services' element={<Servicepage/>}/>
      <Route path='projet' element={<Projectpage/>}/>
      {/* <Route path='table' element={<Table/>}/> */}
      <Route path='contact' element={<Contactpage/>}/>
    </Routes>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default App
