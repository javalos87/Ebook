import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
        <div style={{ minHeight: "10vh" }}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
