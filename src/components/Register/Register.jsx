import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import eye from "../../assets/eye.png";
import hide from "../../assets/hidden.png";
import { AuthContext } from "../Provider/AuthProvider";
import { sendEmailVerification } from "firebase/auth";

const Register = () => {
   const [control, setControl] = useState(false);
   const { createUser } = useContext(AuthContext);

   const handleSignUp = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      const name = form.name.value;

      createUser(email, password)
         .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            sendMail(loggedUser);
            form.reset();
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const sendMail = (user) => {
      sendEmailVerification(user).then(() => {
         console.log("email send succesfull");
         alert("check your email");
      });
   };

   return (
      <div className="hero w-[100%] mx-auto min-h-screen bg-base-200">
         <div className="hero-content md:flex-col">
            <div className="text-center lg:text-left">
               <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <form
               onSubmit={handleSignUp}
               className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <div className="card-body">
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Name</span>
                     </label>
                     <input
                        type="text"
                        name="name"
                        placeholder="name"
                        className="input input-bordered"
                        required
                     />
                  </div>
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
                     <div className="relative">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input
                           type={control ? "text" : "password"}
                           name="password"
                           placeholder="password"
                           className="input input-bordered"
                           required
                        />
                        <div
                           onClick={() => {
                              setControl(!control);
                           }}
                           className="absolute top-[60px] cursor-pointer transform -translate-y-1/2 right-2 ">
                           {control ? (
                              <img
                                 src={hide}
                                 className="w-5 h-5 opacity-50"
                                 alt=""
                              />
                           ) : (
                              <img
                                 src={eye}
                                 className="w-5 h-5 opacity-50"
                                 alt=""
                              />
                           )}
                        </div>
                     </div>

                     <label className="label">
                        <Link
                           to="/login"
                           href="#"
                           className="label-text-alt link link-hover">
                           Already have an account?
                        </Link>
                     </label>
                  </div>
                  <div className="form-control mt-6">
                     <button className="btn btn-primary">Sign up</button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Register;
