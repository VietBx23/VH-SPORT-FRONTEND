import React from "react";
export default function VoucherComponet() {
  return (
    <div class="container-fluid d-flex justify-content-center align-items-center">
      <div class="row align-items-center bg-light">
        <div class="col-md-6 col-sm-6 col-12 text-center text-md-start">
          <h1 class="display-5 fw-bold">Nhận ưu đãi và coupon mới nhất!</h1>
          <p class="lead">
            Chúng tôi cam kết bảo mật không lộ thông tin của bạn.
          </p>
          <div class="input-group mt-4">
            <input
              type="email"
              class="form-control"
              placeholder="Nhập địa chỉ email"
            />
            <button class="btn btn-warning fw-bold text-uppercase">
              Đăng ký
            </button>
          </div>
          <small class="text-muted d-block mt-2">
            Nhận ngay coupon giảm 15% khi đăng ký ngay
          </small>
        </div>

        <div class="col-md-6 col-sm-6 col-12 text-center mt-2 voucher-image">
          <img src="/src/assets/images/voucher.jpg" alt="Demo Image" class="" />
        </div>
      </div>
    </div>
  );
}
