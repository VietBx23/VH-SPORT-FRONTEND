import React from "react";
export default function BestSaleComponet() {
  return (
    <div className="container mt-5">
      <div className="header-main">
        <h2>Sale Off</h2>
        <a href="#">
          View All
          <i className="fas fa-arrow-right"> </i>
        </a>
      </div>
      <div className="underline"></div>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-lg-4 g-4 mt-2">
        {/* <!-- Product 1 --> */}
        <div className="col">
          <div className="card h-100">
            <div className="position-relative">
              <img
                src="/src/assets/images/product1.jpeg"
                className="card-img-top"
                alt="Product 1"
              />
              <div className="badge bg-danger text-white position-absolute top-0 start-0 m-2">
                -20%
              </div>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">Product 1</h5>
              <p className="text-muted mb-1">
                <del>$50.00</del>
                <span className="fw-bold text-danger">$40.00</span>
              </p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-primary btn-sm">Add to Cart</button>
                <button className="btn btn-danger btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Product 2 --> */}
        <div className="col">
          <div className="card h-100">
            <div className="position-relative">
              <img
                src="/src/assets/images/product1.jpeg"
                className="card-img-top"
                alt="Product 1"
              />
              <div className="badge bg-danger text-white position-absolute top-0 start-0 m-2">
                -30%
              </div>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">Product 2</h5>
              <p className="text-muted mb-1">
                <del>$70.00</del>
                <span className="fw-bold text-danger">$49.00</span>
              </p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-primary btn-sm">Add to Cart</button>
                <button className="btn btn-danger btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Product 3 --> */}
        <div className="col">
          <div className="card h-100">
            <div className="position-relative">
              <img
                src="/src/assets/images/product1.jpeg"
                className="card-img-top"
                alt="Product 1"
              />
              <div className="badge bg-danger text-white position-absolute top-0 start-0 m-2">
                -15%
              </div>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">Product 3</h5>
              <p className="text-muted mb-1">
                <del>$100.00</del>
                <span className="fw-bold text-danger">$85.00</span>
              </p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-primary btn-sm">Add to Cart</button>
                <button className="btn btn-danger btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Product 4 --> */}
        <div className="col">
          <div className="card h-100">
            <div className="position-relative">
              <img
                src="/src/assets/images/product1.jpeg"
                className="card-img-top"
                alt="Product 1"
              />
              <div className="badge bg-danger text-white position-absolute top-0 start-0 m-2">
                -50%
              </div>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">Product 4</h5>
              <p className="text-muted mb-1">
                <del>$200.00</del>
                <span className="fw-bold text-danger">$100.00</span>
              </p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-primary btn-sm">Add to Cart</button>
                <button className="btn btn-danger btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
