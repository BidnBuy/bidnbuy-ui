import { Outlet } from "react-router-dom";

import { Toaster } from "sonner";

import Header from "../header/Header";
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
