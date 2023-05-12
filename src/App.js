import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/Shop/shop";
import { About } from "./pages/About/about";
import { Blog } from "./pages/Blog/blog";
import { Product } from "./pages/Product/product";
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/product' element={<Product />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
