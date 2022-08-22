import './App.css';

import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import ModeProvider from './context/Modes';
import CountryPage from './pages/CountryPage';

function App() {
  return (
  <ModeProvider> 
      <Routes>
        <Route path="/frontend-countries" element = {<Homepage />} />
        <Route path="/frontend-countries/:id" element = {<CountryPage />} />
      </Routes>
  </ModeProvider>
  );
}

export default App;
