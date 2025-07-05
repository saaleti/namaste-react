import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Error } from "./components/Error";
import { ContactUs } from "./components/ContactUs";
import { RestuarentHome } from "./components/RestuarentHome";
//import AboutUs from "./components/AboutUs";

const AboutUs = lazy(() => import("./components/AboutUs"));

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            {" "}
            <AboutUs />{" "}
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurent/:name",
        element: <RestuarentHome />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
