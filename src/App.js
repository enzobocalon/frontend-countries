import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import ModeProvider from './context/Modes';
import CountryPage from './pages/CountryPage';

function App() {
  return (
  <ModeProvider> 
    <Router>
      <Routes>
        <Route path="/" element = {<Homepage />} />
        <Route path="/country" element = {<CountryPage />} />
      </Routes>
    </Router>
  </ModeProvider>
  );
}

export default App;
