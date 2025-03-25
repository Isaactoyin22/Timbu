import { Outlet } from "react-router-dom";
import NavBar from "./navBar";
import CoverImage from "./coverImage";
import FilterSection from "./filterSection";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <CoverImage />
      <FilterSection />
      <Outlet />
      <Footer />
    </>
  );
}
