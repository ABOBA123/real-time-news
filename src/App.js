import React from "react";
import "./App.css";
import MainSlide from "./MainSlide.js";
import FullNews from "./News/fullNews.js";
import NewsBlock from "./newsBlock";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainSlide />,
  },
  {
    path: "/1",
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
