import React, { useState } from "react";

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Change from 4 to 8
  const totalProducts = 12;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container-fluid col-sm-10 custom-shop mt-4">
      <div className="row">
        {/* Filter Section */}
        <div className="col-lg-2 col-md-3 col-sm-12 col-12 custom-filter-section">
          <h4 className="mb-3 text-dark">Filters</h4>

          {/* Brand Filter */}
          <div className="mb-3">
            <label className="form-label text-dark">Brand</label>
            <ul className="list-group">
              {["Nike (10)", "Adidas (8)", "Puma (6)", "Reebok (7)"].map(
                (brand, index) => (
                  <li key={index} className="list-group-item">
                    <a
                      href="#"
                      className="custom-brand-link"
                      data-brand={brand.split(" ")[0]}
                    >
                      {brand}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Size Filter */}
          <div className="mb-3">
            <label className="form-label text-dark">Size</label>
            <div className="d-flex flex-wrap">
              {[36, 37, 38, 39, 40, 41, 42, 43, 44, 45].map((size) => (
                <button
                  key={size}
                  type="button"
                  className="btn btn-outline-secondary custom-filter-button"
                  data-size={size}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Filter */}
          <div className="mb-3">
            <label className="form-label text-dark">Color</label>
            <div className="d-flex flex-wrap">
              {["red", "blue", "green", "black"].map((color) => (
                <button
                  key={color}
                  type="button"
                  className="btn btn-outline-secondary custom-color-button"
                  data-color={color}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mb-3">
            <label className="form-label text-dark">Price Range</label>
            <input
              type="range"
              className="form-range bg-danger"
              min="0"
              max="100"
              step="10"
            />
            <div className="d-flex justify-content-between text-dark">
              <span>$0</span>
              <span>$100</span>
            </div>
            <input
              type="number"
              className="form-control mt-2"
              placeholder="Min Price"
            />
            <input
              type="number"
              className="form-control mt-2"
              placeholder="Max Price"
            />
          </div>

          {/* Other Filters */}
          {[
            {
              label: "Shoe Type",
              options: ["Running", "Casual", "Formal", "Sport"],
            },
            {
              label: "Material",
              options: ["Leather", "Mesh", "Synthetic", "Suede"],
            },
          ].map((filter, index) => (
            <div key={index} className="mb-3">
              <label className="form-label text-dark">{filter.label}</label>
              <div className="d-flex flex-wrap">
                {filter.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className="btn btn-outline-secondary custom-filter-button"
                    data-option={option}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Product Section */}
        <div className="col-lg-10 col-md-8 col-sm-12 col-12 custom-product-section">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Products</h4>
            <div>
              <select id="customSortSelect" className="form-select w-auto">
                <option value="price_asc">Sort by Price (Low to High)</option>
                <option value="price_desc">Sort by Price (High to Low)</option>
                <option value="name_asc">Sort by Name (A to Z)</option>
                <option value="name_desc">Sort by Name (Z to A)</option>
              </select>
            </div>
          </div>

          <div className="row custom-product-row">
            {Array.from({ length: productsPerPage }, (_, index) => {
              const product = (currentPage - 1) * productsPerPage + index + 1;
              return (
                product <= totalProducts && (
                  <div
                    key={product}
                    className="col-lg-3 col-md-6 col-sm-6 col-6 mb-5 custom-product-card"
                  >
                    <div className="card h-100">
                      <div className="position-relative">
                        <img
                          src="/src/assets/images/product1.jpeg"
                          className="card-img-top"
                          alt={`Product ${product}`}
                        />
                        <div className="badge bg-danger text-white position-absolute top-0 start-0 m-2">
                          -20%
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <h5 className="card-title">Product {product}</h5>
                        <p className="text-muted mb-1">
                          <del>$50.00</del>
                          <span className="fw-bold text-danger">$40.00</span>
                        </p>
                        <div className="d-flex justify-content-center gap-2">
                          <button className="btn btn-primary btn-sm">
                            Add to Cart
                          </button>
                          <button className="btn btn-danger btn-sm">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </div>

          {/* Pagination */}
          <nav className="mt-1">
            <ul className="pagination justify-content-center">
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  <button className="page-link">{index + 1}</button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
