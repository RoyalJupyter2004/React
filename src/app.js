import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestroMenu from "./components/RestroMenu.js";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

// Header Component
// Restaurant Card Component
// Restaurant List

// Body Component
// App Layout
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
    {
      path:"/",
      element:<Body/>
    },
   {
    path:"/About",
    element:<About/>
  },
  {
  path:"/Contact",
  element:<Contact/>
  },
  {
    path:"/restaurants/:resid",
    element:<RestroMenu/>
  },
  ],
    errorElement:<Error/>
  },
  
])

// Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
 