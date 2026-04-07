import { Outlet } from "react-router";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";

export default function MainLayout() {
  return (
    <>
      <Navber />
      <Outlet />
      <Footer />
    </>
  );
}
