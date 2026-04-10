import ReactProject from './components1/ReactProject';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components1/Home'
import About from "./components1/About";
import Categories from './components1/Categories'
import ContactUs from './components1/ContactUs';
import Services from './components1/Services';
import Offline from './components1/Offline';
import  Online  from './components1/Online';

import Products from './components1/Products';
import Error from './components1/Error';
import Carousels1 from './components1/Carousels1';
import './App.css'

function App(){
  return (
       <div>
        
        
      <BrowserRouter>
    <ReactProject /> 
    <Routes>
   
     <Route path="/home" element={<Home />} />
     <Route path="/About" element={<About />} />
      <Route path="/services" element={<Services />}>
      <Route path="offline" element={<Offline />}/>
      <Route path="online" element={<Online />}/>
      </Route>
     <Route path="/categories" element={<Categories />}/>
     <Route path="/contactUs" element={<ContactUs />}/>
      <Route path="/*" element={<Error />}/>
      <Route path='category/:name' element={<Products/>}/>
      <Route path='/category' element={<Products/>}/>
   </Routes>
    </BrowserRouter>
  

 </div>

 

  );
}




export default App;
