function About() {
  return (
    <div className="container py-5">

      {/* 🔥 Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">About Our Store</h1>
        <p className="text-muted">
          Your trusted destination for mobiles, laptops & electronics
        </p>
      </div>

      {/* 📦 Content Section */}
      <div className="row g-4">

        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 p-3">
            <h4 className="mb-3">Who We Are</h4>
            <p>
              We provide the latest smartphones, laptops, and gadgets with top
              quality and best prices. Our goal is to make technology accessible
              to everyone.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 p-3">
            <h4 className="mb-3">What We Offer</h4>
            <ul className="list-unstyled">
              <li>📱 Latest Mobiles</li>
              <li>💻 High-performance Laptops</li>
              <li>🎧 Accessories & Gadgets</li>
              <li>🔥 Best Deals & Offers</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 p-3">
            <h4 className="mb-3">Why Choose Us</h4>
            <ul className="list-unstyled">
              <li>✔ Genuine Products</li>
              <li>✔ Fast Delivery</li>
              <li>✔ Easy Returns</li>
              <li>✔ 24/7 Support</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
}

export default About;