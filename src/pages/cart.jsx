import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Giày Sneaker Adidas",
      image: "/src/assets/images/product2.jpg ",
      size: "42",
      color: "Trắng",
      quantity: 1,
      price: 1500000,
      total: 1500000,
    },
    {
      id: 2,
      name: "Giày Sneaker Nike",
      image: "/src/assets/images/product2.jpg ",
      size: "41",
      color: "Đen",
      quantity: 1,
      price: 2000000,
      total: 2000000,
    },
    {
      id: 3,
      name: "Giày Sneaker Puma",
      image: "/src/assets/images/product2.jpg ",
      size: "43",
      color: "Xám",
      quantity: 1,
      price: 1800000,
      total: 1800000,
    },
  ]);

  const handleQuantityChange = (id, quantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        item.quantity = quantity;
        item.total = item.price * quantity;
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.total, 0);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Product</th>
                <th>Image</th>
                <th>Size</th>
                <th>Color</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid"
                    />
                  </td>
                  <td>{item.size}</td>
                  <td>{item.color}</td>
                  <td>
                    <input
                      type="number"
                      className="form-control quantity-input"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                    />
                  </td>
                  <td>{item.price.toLocaleString()} VNĐ</td>
                  <td>{item.total.toLocaleString()} VNĐ</td>
                  <td>
                    <button
                      className="btn btn-sm remove-btn"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="container-fluid col-sm-12">
          <div className="row">
            <div className="col-sm-6 col-6 col-md-6">
              <button className="btn btn-success btn-outline ">
                {" "}
                Continue Shopping
              </button>
              <button className="btn ml-5 btn-outline-danger ">
                {" "}
                Clear All
              </button>
            </div>
            <div className="col-md-6 col-sm-6 col-6">
              <div
                style={{
                  padding: "20px",
                  textAlign: "right",
                }}
              >
                <h4
                  style={{
                    marginBottom: "20px",
                    color: "#333",
                    fontWeight: "bold",
                  }}
                >
                  Cart Summary
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    lineHeight: "1.8",
                  }}
                >
                  <li>
                    <span style={{ fontWeight: "500" }}>Total Products: </span>
                    <strong>{cartItems.length}</strong>
                  </li>
                  <li>
                    <span style={{ fontWeight: "500" }}>Total Quantity: </span>
                    <strong>
                      {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    </strong>
                  </li>
                  <li>
                    <span style={{ fontWeight: "500" }}>Total Value: </span>
                    <strong style={{ color: "green", fontSize: "16px" }}>
                      {cartItems
                        .reduce((sum, item) => sum + item.total, 0)
                        .toLocaleString()}{" "}
                      VND
                    </strong>
                  </li>
                </ul>
                <button
                  style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "14px",
                    transition: "background-color 0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#0056b3")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#007BFF")
                  }
                  onClick={() => (window.location.href = "/checkout")}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Tổng hợp thông tin giỏ hàng */}
        <div className="col-md-12 mt-4"></div>
      </div>
    </div>
  );
};

export default Cart;
