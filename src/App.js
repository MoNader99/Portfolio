import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery';
import 'popper.js';
import '@fortawesome/fontawesome-free/css/all.css';
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage/Home';

function App() { 
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
    </Routes>
  );
}

export default App;
