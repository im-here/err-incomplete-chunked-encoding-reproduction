import { type UserConfigExport } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default ():UserConfigExport=> {
  return {
    resolve: {
      alias: {
        /** @ 符号指向 src 目录 */
        "@": resolve(__dirname, "./src"),
      },
    },
    server:{
      proxy: {
        "/api/v1": {
          target: "http://localhost:3001",
          ws: true,
          changeOrigin: true,
        },
      },
    },
    plugins: [
      vue(),
    ],
  }
}
