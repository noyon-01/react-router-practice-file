import { Outlet } from "react-router";
import Navber from "../Home_Page/Navber";

export default function MainLayout() {
  return (
    <>
    <Navber/>
    <Outlet/>
    </>
  )
}
