import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navber from "../pages/Shared/Navber/Navber";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");
  return (
    <div className="w-11/12 mx-auto">
      {noHeaderFooter || (
        <header>
          <Navber />
        </header>
      )}
      <Outlet />
      {noHeaderFooter || (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
};

export default Main;
