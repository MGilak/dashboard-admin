import Home from "./pages/homes/Home";
import NewUser from "./pages/newUser/NewUser";
import UserList from "./pages/users/UserList";
import Products from "./pages/products/Products";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UserList /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
];

export default routes;
