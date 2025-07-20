import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import products from "./products";
import ProductModal from "./ProductModal";
import Contact from "./Contact";

function App() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            <i className="bi bi-capsule"></i> Qayyum Urfa Medical Store
          </a>
          <div>
            <button
              className="btn btn-light"
              data-bs-toggle="offcanvas"
              data-bs-target="#cartDrawer"
            >
              <i className="bi bi-cart"></i> Cart ({cart.reduce((a, c) => a + c.qty, 0)})
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-light py-5 text-center border-bottom">
        <h1 className="display-5 fw-bold text-success">Qayyum Urfa Medical Store</h1>
        <p className="lead mb-1">Smahni Chowk Bhimber AJK</p>
        <p className="mb-1">
          <i className="bi bi-telephone"></i> <a href="tel:03425582748">0342 5582748</a>
        </p>
        <div>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="me-2 text-success fs-4">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://wa.me/923425582748" target="_blank" rel="noopener noreferrer" className="me-2 text-success fs-4">
            <i className="bi bi-whatsapp"></i>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-success fs-4">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>

      {/* Product List */}
      <div className="container my-4">
        <h2 className="mb-4 text-success">Available Medicines</h2>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover", cursor: "pointer" }}
                  onClick={() => setSelectedProduct(product)}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted">{product.category}</p>
                  <p className="card-text">{product.shortDesc}</p>
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold text-success">${product.price}</span>
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => addToCart(product)}
                      >
                        <i className="bi bi-cart-plus"></i> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Drawer */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="cartDrawer"
        aria-labelledby="cartDrawerLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="cartDrawerLabel">
            Shopping Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="list-group">
              {cart.map((item) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={item.id}
                >
                  <div>
                    <strong>{item.name}</strong> <br />
                    <span className="text-muted">${item.price} x {item.qty}</span>
                  </div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
          {cart.length > 0 && (
            <div className="mt-3">
              <h6>
                Total: $
                {cart.reduce((a, c) => a + c.price * c.qty, 0).toFixed(2)}
              </h6>
              <button className="btn btn-success w-100 mt-2" disabled>
                Checkout (Demo)
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-success text-white text-center py-3 mt-5">
        &copy; {new Date().getFullYear()} Qayyum Urfa Medical Store | Smahni Chowk Bhimber AJK | 0342 5582748
        <div className="mt-2">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="me-2 text-white fs-5">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://wa.me/923425582748" target="_blank" rel="noopener noreferrer" className="me-2 text-white fs-5">
            <i className="bi bi-whatsapp"></i>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
