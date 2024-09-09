import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { NotificationContainer } from "react-notifications";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import WatchList from "./pages/WatchList";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      // exact: true,
      element: <Home />,
      errorElement: <NotFound />,
    },
    {
      path: "/watchlist",
      element: <WatchList />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    // Add more routes here...
  ]); // import from react-router-dom
  return (
    <div className="App">
      <NotificationContainer />
      <Nav />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
