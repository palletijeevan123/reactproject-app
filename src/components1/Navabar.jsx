import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../components1/Navbar.css"
function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Handle category dropdown
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (value) {
      navigate(`/category/${value}`);
    }
  };

  // Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/category?search=${search}`);
      setSearch("");
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <h2 className="logo" onClick={() => navigate("/home")}>
        ShopZone
      </h2>

      {/* Navigation Links */}
      <div className="nav-links">
        <NavLink to="/home" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/services" className="nav-link">Services</NavLink>
        <NavLink to="/contactus" className="nav-link">Contact Us</NavLink>
      </div>

      {/* Actions */}
      <div className="nav-actions">
        {/* Category Dropdown */}
        <select onChange={handleCategoryChange} defaultValue="">
          <option value="" disabled>Select Category</option>
          <option value="mobile">Mobile</option>
          <option value="laptop">Laptop</option>
          <option value="electronics">Electronics</option>
        </select>

        {/* Search */}
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>

        {/* Cart */}
        <NavLink to="/cart" className="cart-link">
          🛒 Cart
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;