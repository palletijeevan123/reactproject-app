import { useLocation, useParams } from "react-router-dom";
import { useCart } from "./CartContext";

import mobile from "./mobile";
import laptop from "./laptop";
import electronics from "./electronics";

function Products() {
  const { addToCart } = useCart();
  const { name } = useParams();
  const location = useLocation();

  // Query params
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search") || "";

  // ✅ Clean category mapping (PRO way)
  const categoryMap = {
    mobile,
    laptop,
    electronics,
  };

  // ✅ Select data
  const data = name
    ? categoryMap[name] || []
    : [...mobile, ...laptop, ...electronics];

  // ✅ Filter data
  const filteredData = data.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-5">

      {/* Title */}
      <h2 className="text-center mb-4">
        {name ? name.toUpperCase() : "ALL"} PRODUCTS
      </h2>

      {/* No Data */}
      {filteredData.length === 0 ? (
        <div className="alert alert-warning text-center">
          No products found
        </div>
      ) : (
        <div className="row g-4">

          {filteredData.map((item) => (
            <div key={item.id} className="col-md-4 col-lg-3">

              <div className="card h-100 shadow-sm product-card">

                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                />

                <div className="card-body d-flex flex-column">

                  <h6 className="card-title">{item.name}</h6>

                  <p className="fw-bold text-primary mb-2">
                    ₹{item.price || item.id}
                  </p>

                  {/* Optional badge */}
                  <span className="badge bg-success mb-2">
                    In Stock
                  </span>

                  <button
                    className="btn btn-primary mt-auto"
                    onClick={() => addToCart(item)}
                  >
                    🛒 Add to Cart
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default Products;