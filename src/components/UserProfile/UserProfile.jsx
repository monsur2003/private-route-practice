import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UserProfile = () => {
   const { user } = useContext(AuthContext);
   return (
      <div>
         {user && (
            <div>
               <p>email:{user.email}</p>

               <img src={user.photoURL} alt="" />

               <p>name:{user.name}</p>
            </div>
         )}
      </div>
   );
};

export default UserProfile;
