import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import { Nopage } from './components/Nopage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='*' element={<Nopage />} />
      </Routes>
    </>
  );
}

export default App;
