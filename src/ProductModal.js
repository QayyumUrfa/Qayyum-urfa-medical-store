import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductModal({ product, onClose, onAddToCart }) {
  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{ background: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.name}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid mb-3"
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />
            <p><strong>Category:</strong> {product.category}</p>
            <p>{product.description}</p>
            <p className="fw-bold text-success">${product.price}</p>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-success"
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
            >
              <i className="bi bi-cart-plus"></i> Add to Cart
            </button>
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
