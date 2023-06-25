import React from "react";
import "./App.css";
import HomeSlide from "./components/home/homeSlide.js";
import Open from "./components/News/openNews.js";
import Menu from "./components/menu/menu";
import SingIn from "./components/signIn/signIn.js";
import SignUp from "./components/signIn/signUp";
import AdminPanel from "./components/AdminPanel/AdminPanel.js";
import OpenAdminPanel from "./components/AdminPanel/openAdminPanel.js";
import Theme from "./components/theme/theme.js"
import darkTheme from "./components/theme/dark-theme.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeSlide />,
  },
  {
    path: "/:id",
    element: <Open />,
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
      <darkTheme>
      <Theme/>
      <Menu />
      <RouterProvider router={router} />
      </darkTheme>
    </div>
  );
}
export default App;
