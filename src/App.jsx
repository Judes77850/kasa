import './styles/App.css';
import React from "react";
import Header from './Components/Header';
import Banner from './Components/Banner'
import Footer from './Components/Footer';
import LocPart from './Components/LocPart';
import Slide from './Components/Slide'
import Hebergements from './pages/Hebergements';
import Apropos from './pages/Apropos';
import Error from './pages/Error';
import AproposBanner from './Components/AproposBanner';
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className='application'>
      <div className='main'>
        <Header />
          <Routes> 
            <Route path="/" element={<><Banner/><LocPart/></>}/>
            <Route path="/kasa" element={<><Banner/><LocPart/></>}/>
            <Route path="/Hebergements/:id" element={<><Slide/><Hebergements/></>} />
            <Route path="/Apropos" element={<><AproposBanner/><Apropos /></>} />
            <Route path="/*" element={<Error />} />
          </Routes>
      </div>
        <Footer />
    </div>
  )
}

export default App;
