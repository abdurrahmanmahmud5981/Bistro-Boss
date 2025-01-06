import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()
  const handleGoogleLogin = () => {
    googleSignin().then((res) => {
   
      const user = res.user;
      console.log(user);
      // Save user data to Firestore
      axiosPublic.post("/users", {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      }).then((response) => {
        console.log("User data saved successfully", response);
        if (response.data.insertedId) {
          navigate("/")
        }
      }).catch((error) => {
        console.log(error);
      });

 

   
    });

  
  };
  return (
    <div className="flex items-center justify-center pb-3">
      <button
        onClick={handleGoogleLogin}
        className="btn btn-primary flex items-center justify-center"
      >
        {" "}
        <FaGoogle /> Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
