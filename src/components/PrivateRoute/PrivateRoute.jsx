import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   if (loading) {
      return "loaaaaaaaaaaaaaaaaading bruuuuuuuu";
   } else if (user) {
      return children;
   }
   return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoute;
