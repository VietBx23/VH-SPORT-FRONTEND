import React, { useState } from "react";

export default function HeaderComponent() {
  // State for sidebar menu
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar menu
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="menu-desktop text-black text-1xl py-2 title-header">
        <div className="container-fluid">
          <h2 className="text-center mt-2">𝑉𝐻 𝑆𝑃𝑂𝑅𝑇 𝐺𝐸𝑁𝑈𝐼𝑁𝐸 𝑆𝑂𝐶𝐶𝐸𝑅 𝑆𝐻𝑂𝐸𝑆</h2>
        </div>
      </div>

      {/* Header */}
      <header className="py-4 header-desktop">
        <div className="container menu-desktop d-flex justify-content-between align-items-center">
          <div className="d-lg-flex space-x-4 image-logo">
            <img
              src="/src/assets/images/logo-website.png"
              alt="Logo"
              className="img-fluid"
            />
          </div>
          <nav className="d-none d-lg-flex space-x-6 sticky-top">
            <div className="relative">
              <a className="hover:text-gray-400" href="/" role="button">
                <a>Home</a>
              </a>
            </div>

            <div className="relative">
              <a className="hover:text-gray-400 " href="/about" role="button">
                About
              </a>
            </div>

            <div className="relative dropdown">
              <a
                className="hover:text-gray-400 dropdown-toggle"
                href="/ShopPage"
                role="button"
              >
                Shop
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Nike
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Adidas
                  </a>
                </li>
              </ul>
            </div>

            <div className="relative dropdown">
              <a
                className="hover:text-gray-400 dropdown-toggle"
                href="#"
                role="button"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Category 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Category 2
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="d-none d-lg-flex space-x-4" id="topIcons">
            <a className="hover:text-gray-400" href="#">
              <i className="fas fa-search"></i>
            </a>
            <a className="hover:text-gray-400" href="/authPage">
              <i className="fas fa-user"></i>
            </a>
            <a className="hover:text-gray-400" href="#">
              <i className="fas fa-heart"></i>
            </a>
            <a
              className="hover:text-gray-400 relative"
              href="/cart"
              id="cartIcon"
            >
              <i className="fas fa-shopping-cart"></i>
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
                8
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="d-lg-none flex items-center space-x-4">
            <a className="hover:text-gray-400" href="#">
              <i className="fas fa-search"></i>
            </a>
            <a className="hover:text-gray-400 relative" href="#" id="cartIcon">
              <i className="fas fa-shopping-cart"></i>
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
                8
              </span>
            </a>
            <a className="hover:text-gray-400" href="#">
              <i className="fas fa-user"></i>
            </a>

            <button
              id="menuToggle"
              className="listMenuMobile hover:text-gray-400"
              onClick={toggleSidebar}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <nav
        id="sidebarMenu"
        className={`bg-black fixed top-0 right-0 shadow-lg z-50 ${
          isSidebarOpen ? "active" : ""
        }`}
      >
        <div className="p-4">
          <button
            id="closeMenu"
            className="text-white absolute top-4 right-4 text-2xl"
            onClick={toggleSidebar}
          >
            &times;
          </button>
          <ul className="list-unstyled">
            <li>
              <div className="d-flex justify-content-between align-items-center mt-5">
                <a href="#" className="text-white block py-2">
                  Demos
                </a>
                <button className="text-white">
                  {/* No toggle needed here */}
                </button>
              </div>
              <ul className="submenu">
                <li>
                  <a className="dropdown-item" href="#">
                    Demo 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Demo 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Demo 3
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <div className="d-flex justify-content-between align-items-center">
                <a href="#" className="text-white block py-2">
                  Latest
                </a>
                <button className="text-white">
                  {/* No toggle needed here */}
                </button>
              </div>
              <ul className="submenu">
                <li>
                  <a className="dropdown-item" href="#">
                    Latest 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Latest 2
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <div className="d-flex justify-content-between align-items-center">
                <a href="#" className="text-white block py-2">
                  Shop
                </a>
                <button className="text-white">
                  {/* No toggle needed here */}
                </button>
              </div>
              <ul className="submenu">
                <li>
                  <a className="dropdown-item" href="#">
                    Shop 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Shop 2
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="text-white block py-2">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-white block py-2">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
