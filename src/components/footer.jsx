import React, { useEffect } from "react";

function Footer() {
  useEffect(() => {
    // Toggle sidebar menu
    document.getElementById("menuToggle1").onclick = function () {
      document.getElementById("sidebarMenu").classList.toggle("active");
    };

    document.getElementById("closeMenu").onclick = function () {
      document.getElementById("sidebarMenu").classList.remove("active");
    };

    // Function to toggle submenu
    function toggleSubmenu(event) {
      const submenu = event.target.closest("li").querySelector(".submenu");
      submenu.classList.toggle("active");

      // Đổi dấu + và -
      const button = event.target;
      if (submenu.classList.contains("active")) {
        button.textContent = "-"; // Hiển thị dấu trừ khi mở
      } else {
        button.textContent = "+"; // Hiển thị dấu cộng khi đóng
      }
    }

    // Add click event listener for submenu toggle
    const submenuButtons = document.querySelectorAll(
      ".menu-item-has-children > a"
    );
    submenuButtons.forEach((button) => {
      button.addEventListener("click", toggleSubmenu);
    });

    return () => {
      submenuButtons.forEach((button) => {
        button.removeEventListener("click", toggleSubmenu);
      });
    };
  }, []);

  return (
    <div>
      {/* Footer Desktop */}
      <footer className=" footer d-none d-md-block sticky-button mt-5 sticky-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-6">
              <h5>ShopApp</h5>
              <p>
                301 The Greenhouse London,
                <br />
                E2 8DY UK
              </p>
              <p>
                <a className="text-dark" href="mailto:support@domain.com">
                  support@domain.com
                </a>
                <br />
                820-885-3321
              </p>
              <div className="social-icons">
                <a href="#" style={{ color: "black" }}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" style={{ color: "black" }}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" style={{ color: "black" }}>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" style={{ color: "black" }}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>

              <button className="btn btn-theme-mode mt-3 text-dark">
                Theme Mode
              </button>
            </div>
            <div className="col-md-2">
              <h5>Support</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Feedback</a>
                </li>
                <li>
                  <a href="#">Unsubscribe</a>
                </li>
                <li>
                  <a href="#">Reservations</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>Policies</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of use</a>
                </li>
                <li>
                  <a href="#">Gift card conditions</a>
                </li>
                <li>
                  <a href="#">Shipping</a>
                </li>
                <li>
                  <a href="#">Return</a>
                </li>
              </ul>
            </div>
            <div className="col-md-5">
              <h5>Stay Up to Date</h5>
              <p>
                Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan.
              </p>
              <div className="input-group mb-3">
                <input
                  className="form-control text-light"
                  placeholder="Enter your username"
                  type="text"
                />
                <button
                  className="btn btn-get-started text-white"
                  type="button"
                >
                  Get Started
                </button>
              </div>
              <p>New UI kits or big discounts. Never spam.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Footer */}
      <div className="mobile-footer mt-5 d-block d-md-none">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <a href="#">
                <i className="fas fa-home"></i>
                <br />
                Home
              </a>
            </div>
            <div className="col">
              <a href="#" id="menuToggle1">
                <i className="fas fa-list"></i>
                <br />
                Menu
              </a>
            </div>
            <div className="col">
              <a href="#">
                <i className="fas fa-bell"></i>
                <br />
                Thông Báo
              </a>
            </div>
            <div className="col">
              <a href="#">
                <i className="fas fa-shopping-cart"></i>
                <br />
                Giỏ Hàng
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div id="sidebarMenu" className="sidebar-menu">
        {/* Add your sidebar menu content here */}
        <ul className="menu">
          <li className="menu-item-has-children">
            <a href="#">Menu Item 1</a>
            <ul className="submenu">
              <li>
                <a href="#">Submenu Item 1</a>
              </li>
              <li>
                <a href="#">Submenu Item 2</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#">Menu Item 2</a>
            <ul className="submenu">
              <li>
                <a href="#">Submenu Item 3</a>
              </li>
              <li>
                <a href="#">Submenu Item 4</a>
              </li>
            </ul>
          </li>
        </ul>
        <button id="closeMenu">Close Menu</button>
      </div>
    </div>
  );
}

export default Footer;
