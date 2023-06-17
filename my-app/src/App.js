import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProdutsPage from "./pages/Products";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "products", element: <ProdutsPage /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
 