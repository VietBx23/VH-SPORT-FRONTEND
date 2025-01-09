import React, { useState, useEffect } from "react";

function PaymentPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Sản phẩm A",
      image: "https://via.placeholder.com/50",
      size: "M",
      color: "Đỏ",
      quantity: 2,
      price: 100000,
    },
    {
      id: 2,
      name: "Sản phẩm B",
      image: "https://via.placeholder.com/50",
      size: "L",
      color: "Xanh",
      quantity: 1,
      price: 200000,
    },
  ]);
  const [totalAmount, setTotalAmount] = useState(400000);
  const [shippingFee, setShippingFee] = useState(30000); // Phí vận chuyển
  const [discount, setDiscount] = useState(0); // Giảm giá
  const [voucherCode, setVoucherCode] = useState(""); // Mã voucher
  const [personalInfo, setPersonalInfo] = useState({
    name: "Nguyễn Văn A",
    email: "email@example.com",
    phone: "0987654321",
    address: "123 Đường ABC, Quận 1, TP. HCM",
    province: "", // province field for the province dropdown
    addresses: [
      { id: 1, address: "123 Đường ABC, Quận 1, TP. HCM" },
      { id: 2, address: "456 Đường XYZ, Quận 2, TP. HCM" },
    ], // Mảng địa chỉ
    selectedAddress: 1, // Địa chỉ đang được chọn
  });
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    // Lấy danh sách tỉnh thành từ Province Open API
    fetch("https://api.example.com/provinces") // Thay thế URL với API của bạn
      .then((response) => response.json())
      .then((data) => {
        setProvinces(data); // Giả sử API trả về danh sách tỉnh thành
      })
      .catch((error) => {
        console.error("Error fetching provinces:", error);
      });
  }, []);

  useEffect(() => {
    const total = products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
    setTotalAmount(total);
  }, [products]);

  const handleVoucherChange = (e) => {
    setVoucherCode(e.target.value);
  };

  const applyVoucher = () => {
    if (voucherCode === "DISCOUNT10") {
      setDiscount(0.1 * totalAmount); // Giảm 10%
    } else {
      setDiscount(0);
    }
  };

  const finalAmount = totalAmount + shippingFee - discount;

  return (
    <div className="container">
      <div className="row">
        {/* Left Section: Products List */}

        {/* Right Section: Personal Information */}
        <div className="col-md-4">
          <h5 className="text-center">Thông tin cá nhân</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Họ và tên
              </label>
              <input
                type="text"
                className=" text-dark form-control"
                id="name"
                value={personalInfo.name}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className=""
                id="email"
                value={personalInfo.email}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Số điện thoại
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                value={personalInfo.phone}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Địa chỉ
              </label>
              {/* Dropdown để chọn địa chỉ */}
              <select
                className="form-select"
                id="address"
                value={personalInfo.selectedAddress}
                onChange={(e) =>
                  setPersonalInfo({
                    ...personalInfo,
                    selectedAddress: parseInt(e.target.value),
                  })
                }
              >
                <option value="">Chọn địa chỉ</option>
                {personalInfo.addresses.map((address) => (
                  <option key={address.id} value={address.id}>
                    {address.address}
                  </option>
                ))}
              </select>
            </div>
            {/* Province Dropdown */}
            <div className="mb-3">
              <label htmlFor="province" className="form-label">
                Tỉnh thành
              </label>
              <select
                className="form-select"
                id="province"
                value={personalInfo.province}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, province: e.target.value })
                }
              >
                <option value="">Chọn tỉnh thành</option>
                {provinces.map((province) => (
                  <option key={province.id} value={province.name}>
                    {province.name}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>

        {/* Right Section: Product List */}
        <div className="col-md-8">
          <h4 className="text-center">Danh sách sản phẩm</h4>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Size</th>
                <th>Color</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <th>{index + 1}</th>
                  <td>{product.name}</td>
                  <td>
                    <img src={product.image} alt={product.name} width="50" />
                  </td>
                  <td>{product.size}</td>
                  <td>{product.color}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price.toLocaleString()} VND</td>
                  <td>
                    {(product.price * product.quantity).toLocaleString()} VND
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="6" className="text-end">
                  <strong>Tổng cộng:</strong>
                </td>
                <td>
                  <span id="total-amount" className="total-amount">
                    {totalAmount.toLocaleString()} VND
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="row">
            <div className="col-sm-6">
              <div className="d-flex justify-content-center mb-3">
                <div>
                  <button className="btn btn-outline-primary mb-2 w-100">
                    <i className="fab fa-cc-visa fa-lg"></i> Visa
                  </button>
                  <button className="btn btn-outline-success mb-2 w-100">
                    <i className="fab fa-cc-mastercard fa-lg"></i> Mastercard
                  </button>
                  <button className="btn btn-outline-info mb-2 w-100">
                    <i className="fab fa-cc-paypal fa-lg"></i> PayPal
                  </button>
                  <button className="btn btn-outline-dark mb-2 w-100">
                    <i className="fab fa-apple fa-lg"></i> Apple Pay
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex justify-content-between">
                <span>
                  <strong>Tổng tiền:</strong>
                </span>
                <span>{totalAmount.toLocaleString()} VND</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>
                  <strong>Phí vận chuyển:</strong>
                </span>
                <span>{shippingFee.toLocaleString()} VND</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>
                  <strong>Giảm giá:</strong>
                </span>
                <span>{discount.toLocaleString()} VND</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>
                  <strong>Thành tiền:</strong>
                </span>
                <span>{finalAmount.toLocaleString()} VND</span>
              </div>
            </div>
          </div>

          {/* Discount Section */}
          <div className="input-group mb-3">
            <input
              className="w-8 form-control text-light"
              placeholder="Enter Your Voucher"
              type="text"
            />
            <button className="btn btn-success text-white" type="button">
              Apply voucher
            </button>
          </div>
          {/* Payment Methods, Total Price, Shipping, and Final Amount */}

          <div className="mt-4 text-center">
            <button type="submit" className="btn btn-primary w-50">
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
