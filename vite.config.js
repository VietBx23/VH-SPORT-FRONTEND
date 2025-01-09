import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost", // Địa chỉ host bạn muốn sử dụng (mặc định là localhost)
    port: 3001, // Thay đổi port thành 3001 hoặc bất kỳ port nào bạn muốn
    open: true, // Tự động mở trình duyệt khi chạy dự án
  },
});
