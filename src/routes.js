import Dashboard from "./layouts/DashboardLayout";
import Product from "./pages/Products";
import Order from "./pages/Orders";

const routes = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "products",
        element: <Product />,
      },
      {
        path: "orders",
        element: <Order />,
      },
    ],
  },
  {
    path: "team",
    element: <Order />,
  },
];

export default routes;
