import React from "react";
import "./App.css";
import MainSlide from "./MainSlide.js";
import FullNews from "./News/fullNews.js";
import NewsBlock from "./newsBlock";
import SingIn from "./signIn/signIn.js";
import SignUp from "./signIn/signUp";
import AdminPanel from "./AdminPanel/AdminPanel.js";
import OpenAdminPanel from "./AdminPanel/openAdminPanel.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainSlide />,
  },
  {
    path: "/:id",
    element: <FullNews />,
  },
  {
    path: "/*",
    element: (
      <div>
        <h1>Page not found | 404</h1>
      </div>
    ),
  },
  {
    path: "/login",
    element: <SingIn />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/adminPanel",
    element: <AdminPanel />,
  },
  {
    path: "/openAdminPanel",
    element: <OpenAdminPanel />,
  },
]);

function App() {
  return (
    <div className='App'>
      <NewsBlock />
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
