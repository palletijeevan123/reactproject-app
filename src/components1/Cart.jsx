import { useCart } from "./CartContext";

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="container py-5">

      <h2 className="text-center mb-4">🛒 My Cart</h2>

      {cart.length === 0 ? (
        <div className="alert alert-warning text-center">
          Your cart is empty
        </div>
      ) : (
        <div className="row">

          {/* 🧾 Cart Items */}
          <div className="col-lg-8">

            {cart.map((item) => (
              <div key={item.id} className="card mb-3 shadow-sm">

                <div className="row g-0 align-items-center">

                  {/* Image */}
                  <div className="col-md-3">
                    <img
                      src={item.image}
                      className="img-fluid rounded-start"
                      alt={item.name}
                      style={{ height: "120px", objectFit: "cover" }}
                    />
                  </div>

                  {/* Details */}
                  <div className="col-md-6">
                    <div className="card-body">
                      <h6 className="card-title">{item.name}</h6>
                      <p className="text-primary fw-bold mb-1">
                        ₹{item.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => decreaseQty(item.id)}
                        >
                          -
                        </button>

                        <span>{item.qty}</span>

                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => increaseQty(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="col-md-3 text-center">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* 💳 Summary Section */}
          <div className="col-lg-4">

            <div className="card shadow p-4">

              <h5 className="mb-3">Order Summary</h5>

              <p className="d-flex justify-content-between">
                <span>Total Items:</span>
                <span>{cart.length}</span>
              </p>

              <p className="d-flex justify-content-between">
                <span>Total Price:</span>
                <span className="fw-bold">₹{total}</span>
              </p>

              <hr />

              <button className="btn btn-success w-100">
                Proceed to Checkout
              </button>

            </div>

          </div>

        </div>
      )}
    </div>
  );
}

export default Cart;