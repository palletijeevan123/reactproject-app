import ReactProject from './components1/Navabar';
import Footer from "./components1/Footer"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components1/Home';
import About from "./components1/About";
import Categories from './components1/Categories';
import ContactUs from './components1/ContactUs';
import Services from './components1/Services';
import Offline from './components1/Offline';
import Online from './components1/Online';
import Products from './components1/Products';
import Error from './components1/Error';
import Cart from './components1/Cart';

import './App.css';

function App() {
  return (
    <BrowserRouter>

      {/* Navbar / Layout */}
      <ReactProject />
      

      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* ✅ Services with nested routes */}
        <Route path="/services" element={<Services />}>
          <Route path="online" element={<Online />} />
          <Route path="offline" element={<Offline />} />
        </Route>

        <Route path="/categories" element={<Categories />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route path="/category/:name" element={<Products />} />
        <Route path="/category" element={<Products />} />
        <Route path="/cart" element={<Cart />} />

        {/* ✅ Always keep this LAST */}
        <Route path="*" element={<Error />} />

      </Routes>
   <Footer/>
    </BrowserRouter>
    
  );
}

export default App;