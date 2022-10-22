import Home from "./pages/homes/Home";
import NewUser from "./pages/newUser/NewUser";
import UserList from "./pages/users/UserList";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UserList /> },
  { path: "/newUser", element: <NewUser /> },
];

export default routes;
