import { NavLink } from "react-router-dom";
import "../components1/Footer.css"
function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 pt-4">

      <div className="container">
        <div className="row">

          {/* 🛍️ About */}
          <div className="col-md-4 mb-3">
            <h5>ShopZone</h5>
            <p>
              Your one-stop shop for mobiles, laptops, and electronics at the
              best prices.
            </p>
          </div>

          {/* 🔗 Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><NavLink to="/home" className="footer-link">Home</NavLink></li>
              <li><NavLink to="/about" className="footer-link">About</NavLink></li>
              <li><NavLink to="/services" className="footer-link">Services</NavLink></li>
              <li><NavLink to="/contactus" className="footer-link">Contact</NavLink></li>
            </ul>
          </div>

          {/* 📞 Contact */}
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>📍 Hyderabad, India</p>
            <p>📞 +91 9392899918</p>
            <p>📧 jeevanpalleti@gmail.com</p>
          </div>

        </div>

        {/* 🔻 Bottom */}
        <div className="text-center border-top pt-3 mt-3">
          <p className="mb-0">
            © {new Date().getFullYear()} ShopZone | All Rights Reserved
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;