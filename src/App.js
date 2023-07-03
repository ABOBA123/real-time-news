import React, { useEffect, useState } from "react";
import "./App.css";
import HomeSlide from "./components/home/homeSlide.js";
import Open from "./components/News/openNews.js";
import Menu from "./components/menu/menu";
import SingIn from "./components/signIn/signIn.js";
import SignUp from "./components/signIn/signUp";
import AdminPanel from "./components/AdminPanel/AdminPanel.js";
import OpenAdminPanel from "./components/AdminPanel/openAdminPanel.js";
import Theme from "./components/theme/theme.js";
// import "./components/theme/dark-theme.css";
import ClockLoader from "react-spinners/ClockLoader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./globals.css";
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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);
  console.log(loading)
  return (
    <Theme hiding={loading} >
      <div className='App'>
        {loading ? (
          <ClockLoader
            color={"#36d7b7"}
            loading={loading}
            size={75}
            aria-label='Loading Spinner'
            data-testid='loader'
          />
        ) : (
          <>
            <Menu />
            <RouterProvider router={router} />
          </>
        )}
      </div>
    </Theme>
  );
}
export default App;
