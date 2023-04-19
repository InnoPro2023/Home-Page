import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import { Nopage } from './components/Nopage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About/>}/>
        <Route path='*' element={<Nopage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
