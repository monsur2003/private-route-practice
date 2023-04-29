import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import AuthProvider from "./components/Provider/AuthProvider.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import UserProfile from "./components/UserProfile/UserProfile.jsx";
import Orders from "./components/Orders/Orders.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/register",
            element: <Register></Register>,
         },
         {
            path: "/order",
            element: (
               <PrivateRoute>
                  <Orders></Orders>
               </PrivateRoute>
            ),
         },
         {
            path: "/profile",
            element: (
               <PrivateRoute>
                  <UserProfile></UserProfile>
               </PrivateRoute>
            ),
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AuthProvider>
         <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
   </React.StrictMode>
);
