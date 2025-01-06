import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
/* eslint-disable react/prop-types */
const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const handleAddToCart = () => {
    if (user && user?.email) {
      // send cart to database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Added to Cart",
            text: "Item added to cart successfully",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
            width: 400,
            padding: "20px",
            backdrop: "rgba(0,0,0,0.5)",
            backdropClass: "dark:bg-gray-900",
          });
          // refetch the cart to update the cart items count
          refetch();
        }
      });
    } else {
      console.log("Please login to add to cart");
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please login",
      }).then((result) => {
        if (result.isConfirmed) {
          //  send the user to login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <p className="bg-slate-900 absolute right-2 top-2 p-2 rounded-md text-white">
          ${price}
        </p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button
              onClick={handleAddToCart}
              className="btn btn-outline border-0 border-orange-400 bg-slate-100 border-b-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
