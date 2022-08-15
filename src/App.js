import './App.css';

import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import ModeProvider from './context/Modes';
import CountryPage from './pages/CountryPage';

function App() {
  return (
  <ModeProvider> 
      <Routes>
        <Route exact path="/" element = {<Homepage />} />
        <Route path="/country" element = {<CountryPage />} />
      </Routes>
  </ModeProvider>
  );
}

export default App;
