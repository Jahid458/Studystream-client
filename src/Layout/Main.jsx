import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div>
      <Toaster></Toaster>
      <Navbar />

      <div className="min-h-[calc(100vh-290px)]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
