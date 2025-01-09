import React from "react";

export default function CarouselComponent() {
  return (
    <section className="w-100">
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/src/assets/images/bannner1.jpg"
              className="d-block w-100"
              alt="Image 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/src/assets/images/banner2.jpg"
              className="d-block w-100"
              alt="Image 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/src/assets/images/banner3.jpg"
              className="d-block w-100"
              alt="Image 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/src/assets/images/banner4.jpg"
              className="d-block w-100"
              alt="Image 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/src/assets/images/banner5.jpg"
              className="d-block w-100"
              alt="Image 1"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
