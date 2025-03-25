import { Outlet } from "react-router-dom";
import NavBar from "./navBar";
import Footer from "./Footer";

export default function CheckoutLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
