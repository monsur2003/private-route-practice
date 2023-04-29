import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
   const { user, logOut } = useContext(AuthContext);

   const handleSignOut = () => {
      logOut();
   };

   return (
      <div className="bg-primary px-auto text-primary-content  ">
         <div className="flex justify-between items-center">
            <div className="navbar ">
               <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
               <Link className="btn btn-ghost normal-case text-xl" to="/">
                  Home
               </Link>
               <Link className="btn btn-ghost normal-case text-xl" to="/login">
                  Login
               </Link>
               <Link
                  className="btn btn-ghost normal-case text-xl"
                  to="/register">
                  Register
               </Link>
               {user && (
                  <Link
                     className="btn btn-ghost normal-case text-xl"
                     to="/order">
                     Orders
                  </Link>
               )}
               {user && (
                  <Link
                     className="btn btn-ghost normal-case text-xl"
                     to="/profile">
                     Profile
                  </Link>
               )}
            </div>

            <div>
               {user ? (
                  <>
                     <p className="">{user ? user.email : ""}</p>
                     <img src={user ? user.photoURL : null} alt="" />
                     <button
                        onClick={() => {
                           handleSignOut(logOut());
                        }}
                        className="btn btn-accent">
                        signOut
                     </button>
                  </>
               ) : (
                  <Link to="/login" className="btn btn-info">
                     Sign in
                  </Link>
               )}
            </div>
         </div>
      </div>
   );
};

export default Header;
