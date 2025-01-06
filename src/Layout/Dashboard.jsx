import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // TODO
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      {/* sidebar */}
      <div className="w-64 min-h-screen bg-orange-300">
        <ul className="menu">
          {isAdmin ? (
         <>
         <li>
           <NavLink to={"/dashboard/adminHome"}>
             {" "}
             <FaHome /> Admin Home
           </NavLink>
         </li>
         <li>
           <NavLink to={"/dashboard/addItems"}>
             {" "}
             <FaUtensils /> Add Items
           </NavLink>
         </li>

         <li>
           <NavLink to={"/dashboard/manageItems"}>
             {" "}
             <FaList /> Manage Items
           </NavLink>
         </li>
         <li>
           <NavLink to={"/dashboard/bookigs"}>
             {" "}
             <FaBook /> Manage Bookings
           </NavLink>
         </li>
         <li>
           <NavLink to={"/dashboard/allUsers"}>
             {" "}
             <FaUsers />All Users
           </NavLink>
         </li>
       </>
          ) : (
            <>
            <li>
              <NavLink to={"/dashboard/userHome"}>
                {" "}
                <FaHome /> User Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/reservation"}>
                {" "}
                <FaCalendar /> Reservation
              </NavLink>
            </li>

            <li>
              <NavLink to={"/dashboard/cart"}>
                {" "}
                <FaShoppingCart /> My Cart ({cart.length})
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/review"}>
                {" "}
                <FaAd /> Add a Review
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/bookings"}>
                {" "}
                <FaList /> My Bookings
              </NavLink>
            </li>
          </>
          )}
          <div className="divider"></div>
          {/* Shared nav links */}
          <li>
            <NavLink to={"/"}>
              {" "}
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              {" "}
              <FaSearch /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              {" "}
              <FaEnvelope /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* main content */}
      <div className="flex-1 p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
