import Footer from "./components/footer/Footer.tsx";
import Menu from "./components/menu/Menu.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Home from "./pages/home/Home.tsx"
import Login from "./pages/login/Login.tsx";
import Products from "./pages/products/Products.tsx";
import Users from "./pages/users/Users.tsx"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import "./styles/global.scss"
import User from "./pages/user/User.tsx";
import Product from "./pages/product/Product.tsx";

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/users/:id",
          element: <User />
        },
        {
          path: "/products/:id",
          element: <Product />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App
