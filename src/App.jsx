import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing";
import AppLayout from "./layouts/app-layout";
import Dashboard from "./pages/dashboard";
import Auth from "./pages/auth";
import RedirectLink from "./pages/redirect-link";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/link/:id",
        element: <Link />,
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
