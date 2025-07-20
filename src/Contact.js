import React from "react";

function Contact() {
  return (
    <div className="container my-5" id="contact">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-success mb-3">Contact Us</h3>
              <p className="mb-1">
                <i className="bi bi-geo-alt"></i> Smahni Chowk Bhimber AJK
              </p>
              <p className="mb-1">
                <i className="bi bi-telephone"></i> <a href="tel:03425582748">0342 5582748</a>
              </p>
              <div className="mb-2">
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
              <p className="mb-0">
                <strong>Business Hours:</strong> 9:00 AM - 10:00 PM (Mon-Sun)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
