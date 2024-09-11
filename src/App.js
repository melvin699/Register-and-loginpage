import './App.css';
import {  Routes, Route } from 'react-router-dom';
import LoginRegister from './Components/LoginRegister';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {< LoginRegister/>} />
      </Routes>
    </div>
  );
}

export default App;
