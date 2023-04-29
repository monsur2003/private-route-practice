import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
   const { loginUser, googleLogin } = useContext(AuthContext);
   console.log(loginUser);
   const [success, setSuccess] = useState("");
   const [error, setError] = useState("");

   const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      loginUser(email, password)
         .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setError("");
            setSuccess("user login successful");
         })
         .catch((error) => {
            console.log(error);
            setSuccess("");
            setError(error.message);
         });
   };

   const handleGoogle = () => {
      googleLogin();
   };

   return (
      <div className="hero w-[100%] mx-auto min-h-screen bg-base-200">
         <div className="hero-content md:flex-col">
            <div className="text-center lg:text-left">
               <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <form
               onSubmit={handleLogin}
               className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <div className="card-body">
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input
                        type="email"
                        name="email"
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
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                     />
                     <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                           Forgot password?
                        </a>
                     </label>

                     {error ? (
                        <p className="text-red-400">{error}</p>
                     ) : (
                        <p className="text-green-400">{success}</p>
                     )}
                     <label className="label">
                        <span className="label-text-alt ">
                           If You are New on this website please{" "}
                           <Link className="btn btn-link" to="/register">
                              Register
                           </Link>
                        </span>
                     </label>
                  </div>
                  <div className="form-control mt-6">
                     <button className="btn btn-primary">Login</button>
                  </div>
               </div>
            </form>
            <div>
               <button onClick={handleGoogle} className="btn btn-secondary">
                  login with google
               </button>
            </div>
         </div>
      </div>
   );
};

export default Login;
