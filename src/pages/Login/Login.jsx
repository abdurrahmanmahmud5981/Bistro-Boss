import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {

    const [disabled, setDisabled] = useState(true);
    const {signIn} = useContext(AuthContext);


    const navigate  = useNavigate();
    const location  = useLocation();
    const from = location.state?.from.pathname || "/";
    console.log('navigate', location.state);

    useEffect(() => {
        loadCaptchaEnginge(3);
    },[])
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        const result = validateCaptcha(user_captcha_value);
        console.log(result);
        if (!result) {
            alert("Invalid captcha. Please try again.");
            setDisabled(true);
        } else {
            // Handle successful login
            setDisabled(false);
        }
    }
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            Swal.fire({
              title: " User LogedIn Successfully",
              showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
              }
            });
            navigate(from, {replace:true});
         })
  };
  return (
   <>
   <Helmet>
        <title>Bistro Boss | Login</title>
   </Helmet>
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
              onBlur={handleValidateCaptcha}
                name="captcha"
                type="text"
                placeholder="captcha"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                name="submit"
                value="Login"
                disabled={disabled}
              />
            </div>
          </form>
          <SocialLogin/>
          <p className="p-8 pt-0 text-center"><small>New Here? <Link to='/signup'>Create an account</Link> </small></p>
        </div>
      </div>
     
    </div>
   </>
  );
};

export default Login;
