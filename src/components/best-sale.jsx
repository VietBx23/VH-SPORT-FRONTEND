import React, { useEffect, useState } from "react";
import { getProducts } from "../services/apiService";

export default function BestSaleComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

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

      {/* Kiểm tra nếu không có sản phẩm */}
      {products.length === 0 ? (
        <p>Đang tải sản phẩm...</p>
      ) : (
        <div className="row row-cols-2 row-cols-sm-2 row-cols-lg-4 g-4 mt-2">
          {products.map((product, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <div className="position-relative">
                  <img
                    src={`/src/assets/images/${
                      product.product_image || "default.jpg"
                    }`}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="badge bg-danger text-white position-absolute top-0 start-0 m-2">
                    {product.percentage + " %"}
                  </div>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="text-muted mb-1">
                    <del>${product.price + 500}</del> {/* Giá gốc giả định */}
                    <span className="fw-bold text-danger">
                      {" "}
                      ${product.price}{" "}
                    </span>
                  </p>
                  <div className="d-flex justify-content-center gap-2">
                    <button className="btn btn-primary btn-sm">
                      Add to Cart
                    </button>
                    <button className="btn btn-danger btn-sm">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
