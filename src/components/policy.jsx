import React from "react";

export default function PolicyComponent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6 col-6">
          <div className="circle pink">
            <i className="fas fa-shipping-fast fa-5x"></i>
          </div>
          <div className="text">
            <h4>Giao hàng nhanh, miễn phí</h4>
            <span></span>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <div className="circle blue">
            <i className="fas fa-undo-alt fa-5x"></i>
          </div>
          <div className="text">
            <h4>Trả hàng, Bảo hành</h4>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 col-6">
          <div className="circle lightblue">
            <i className="fas fa-check-circle fa-5x"></i>
          </div>
          <div className="text">
            <h4>Chính hãng</h4>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <div className="circle yellow">
            <i className="fas fa-user-check fa-5x"></i>
          </div>
          <div className="text">
            <h4>Thành viên</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
