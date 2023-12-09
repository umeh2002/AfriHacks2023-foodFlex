import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import RegisterPage from "../auth/RegisterPage";
import SignInPage from "../auth/SignInPage";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/cart-page",
    element: <CartPage />,
  },
]);
