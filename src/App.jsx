import './styles/App.css';
import React from "react";
import Header from './Components/Header';
import Footer from './Components/Footer';
import LocPart from './Components/LocPart';
import FicheLogement from './pages/FicheLogement'
import Apropos from './pages/Apropos'
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className='application'>
      <Header />
        <Routes> 
        <Route path="/" element={<LocPart />} />
        <Route path="/pages/fichelogement" element={<FicheLogement />} />
        <Route path="/pages/fichelogement/:id" element={<FicheLogement />} />
        <Route path="/pages/Apropos" element={<Apropos />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App;
