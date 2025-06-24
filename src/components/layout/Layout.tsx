import { Outlet } from "react-router-dom";

import { Toaster } from "sonner";

import Header from "../header-old/Header-old";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
     
        <Header />
   

      <Outlet />
      <Toaster />

     
        <Footer />
   
    </>
  );
};

export default Layout;
