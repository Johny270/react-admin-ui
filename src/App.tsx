import Home from "./pages/home/Home.tsx"
import Products from "./pages/products/Products.tsx";
import Users from "./pages/users/Users.tsx"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <div className="main">
        
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "users",
      element: <Users />
    },
    {
      path: "products",
      element: <Products />
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
