import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
// import App from './App.jsx'
import router from "./routes/Routes.jsx";
import AuthProvider from "./components/AuthProvider.jsx";
import { ThemeProvider } from "./themeProvider/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
