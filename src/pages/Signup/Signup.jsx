import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm();

  const {createUser,updateUserProfile} = useContext(AuthContext);
 const navigate = useNavigate();
  const onSubmit = (data) =>{
    
    console.log(data)
    createUser(data.email, data.password)
        .then((result) => {
            const user = result.user;
            console.log('signin ----',user);
            updateUserProfile(data.photoURL,data.name)
            .then(() => {
              Swal.fire({
                title: 'User registered successfully',
                icon:'success',
                confirmButtonText: 'Login'
              })
              reset()
              navigate('/')
            })
            .catch((error) => console.log(error))
         })
  };
  // console.log(watch("name"));
  return (
   <>
   <Helmet>
      <title>Bistro Boss | Signup</title>
   </Helmet>
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
            
              />
              <p>{errors.name && "Name is required"}</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                {...register("photoURL", { required: true })}
                type="url"
                name="photoURL"
                placeholder="photoURL"
                className="input input-bordered"
            
              />
              <p>{errors.photoURL && "photoURL is required"}</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
            
              />
              <p>{errors.email && "Email is required"}</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: true, minLength:6 ,maxLength:20  })}
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
       
              />
              <p>{errors.password && "Password is required"}</p>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <p><small>Already have an account? <Link to='/login'>Login</Link> </small></p>
        </div>
      </div>
    </div>
   </>
  );
};

export default Signup;
