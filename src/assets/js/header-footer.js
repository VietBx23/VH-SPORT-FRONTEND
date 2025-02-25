document.getElementById("menuToggle").onclick = function () {
  document.getElementById("sidebarMenu").classList.toggle("active");
};

document.getElementById("closeMenu").onclick = function () {
  document.getElementById("sidebarMenu").classList.remove("active");
};
document.getElementById("menuToggle1").onclick = function () {
  document.getElementById("sidebarMenu").classList.toggle("active");
};

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

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header-desktop");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
