import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import CoverImage from "./CoverImage";
import FilterSection from "./FilterSection";
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
