// const useCart = () => {
//     const getCart = () => {
//         return JSON.parse(localStorage.getItem('cart')) || [];
//     };

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

//     const setCart = (cart) => {
//         localStorage.setItem('cart', JSON.stringify(cart));
//     };

//     const addToCart = (item) => {
//         const cart = getCart();
//         cart.push(item);
//         setCart(cart);
//     };

//     const removeFromCart = (item) => {
//         const cart = getCart();
//         const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
//         setCart(newCart);
//     };

//     const clearCart = () => {
//         localStorage.removeItem('cart');
//     };

//     return { getCart, setCart, addToCart, removeFromCart, clearCart };
// };

// export default useCart;

const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth();
  const { data: cart = [] , refetch} = useQuery({
    queryKey: ["cart",user?.email],
    queryFn: async () => {
        const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });

  return [cart,refetch];
};

export default useCart;
