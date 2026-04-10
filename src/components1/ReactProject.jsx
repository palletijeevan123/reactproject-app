import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
function MyComponents() {
  
  
    const [search,setSearch]=useState();
      const nav=useNavigate();
    const navigate=useNavigate();
  function handle(event){
    const value=event.target.value;
    if(value){
      nav(`/category/${value}`);
    }

  }
  function handlesubmit(event){
    event.preventDefault();
 navigate(`/category/?search=${search}`);
}

  return (
    <div>
    <nav className="navbar">
    
      <NavLink to="/home" className="nav-link">Home</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
      <NavLink to="/services" className="nav-link">Services</NavLink>
      <NavLink to="/contactus" className="nav-link">ContactUs</NavLink>
    
      
      <select onChange={(event)=>handle(event)}>
        <option value="" >---select---</option>
        <option value="mobile"> Mobile</option>
        <option value="laptop"> Laptop</option>
        <option value="electronics"> electronics</option>

      </select>

      <form onSubmit={handlesubmit}>
        <input type="search" placeholder="enter the brand" value={search} onChange={(event)=>setSearch(event.target.value)}/>
        <button onClick={handlesubmit}>search</button>

      </form>
    
    </nav>
    </div>
    
  );
}

export default MyComponents;