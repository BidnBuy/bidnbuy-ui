import { Outlet } from "react-router-dom";

import { Toaster } from "sonner";

import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
      <div className="hidden lg:block">
        <Header />
      </div>

      <Outlet />
      <Toaster />

      <div className="hidden lg:block">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
