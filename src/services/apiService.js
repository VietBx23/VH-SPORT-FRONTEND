import axios from "axios";

// URL của Backend
const API_BASE_URL = "http://localhost:8081";

// Tạo instance axios với cấu hình mặc định
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Hàm lấy danh sách sản phẩm
export const getProducts = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/products/top4ProductSale`
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy sản phẩm:", error);
    return [];
  }
};
// Hàm lấy danh sách sản phẩm mới
export const getNewProducts = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/products/top4ProductSale`
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy sản phẩm:", error);
    return [];
  }
};
// hàm đăng nhập
export const login = async (username, password) => {
  try {
    const response = await apiClient.post("/users/login", {
      username,
      password,
    });
    return response.data; // trả về token, thông tin người dùng, v.v.
  } catch (error) {
    throw error.response?.data || { message: "Đăng Nhập Thất Bại" };
  }
};

export const loginWithFacebook = async (accessToken) => {
  console.log("Sending Facebook accessToken to backend:", accessToken);
  try {
    const response = await apiClient.post("/users/facebook-login", {
      accessToken,
    });
    return response.data.data;
  } catch (error) {
    console.error("Facebook API error:", error);
    throw error.response?.data || { message: "Facebook login failed" };
  }
};
export const loginWithGoogle = async (idToken) => {
  try {
    const response = await apiClient.post("/users/google-login", { idToken });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Đăng nhập bằng Google thất bại" };
  }
};
// Hàm đăng ký
export const signup = async (username, password, email, fullname, image) => {
  try {
    const response = await apiClient.post("/users/signup", {
      username,
      password,
      email,
      fullname,
      image,
    });
    return response.data; // { message, userId }x
  } catch (error) {
    throw error.response?.data || { message: "Đăng ký thất bại" };
  }
};

// Hàm quên mật khẩu
export const forgotPassword = async (username, email) => {
  try {
    const response = await apiClient.post("/users/forgot-password", {
      username,
      email,
    });
    return response.data; // { message }
  } catch (error) {
    throw error.response?.data || { message: "Gửi yêu cầu thất bại" };
  }
};
