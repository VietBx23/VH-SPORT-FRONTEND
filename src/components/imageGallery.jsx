import React from "react";

export default function ImageGalleryComponet() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-6 col-6 col-md-6">
          <img
            src="/src/assets/images/banner6.jpg"
            alt="Main Image"
            className="rounded shadow"
          />
        </div>
        <div className="col-sm-6 col-6 col-md-6">
          <div className="row">
            <div className="col-12">
              <img
                src="/src/assets/images/banner2.jpg"
                alt="Top Image"
                className="rounded shadow"
              />
            </div>
            <div className="col-12 mt-3">
              <img
                src="/src/assets/images/banner3.jpg"
                alt="Top Image"
                className="rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
