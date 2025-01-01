import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(3);
    },[])
    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
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
  };
  return (
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
              ref={captchaRef}
                name="captcha"
                type="text"
                placeholder="captcha"
                className="input input-bordered"
                required
              />
              <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-5
              ">Validate</button>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
