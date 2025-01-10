import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  // interceptors for requests
  axiosSecure.interceptors.request.use(
    (config) => {
      if (localStorage.getItem("token")) {
        config.headers.authorization = `Bearer ${localStorage.getItem(
          "token"
        )}`;
      }
      console.log("I am in interactive mode", localStorage.getItem("token"));
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // interceptors for response 401 ,403
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      // TODO: handle errors
      const status = error.response.status;
      if (status === 401 || status === 403) {
        // TODO: handle unauthorized requests
        console.log("Unauthorized request");
        await logOut();
        navigate("/login", { replace: true });
      }
      // console.error("Error in axiosSecure", error);
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
