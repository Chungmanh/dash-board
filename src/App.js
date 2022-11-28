import { useRoutes } from "react-router-dom";
import routes from "./routes";
import "./app.css";

function App() {
  const router = useRoutes(routes);
  return router;
}

export default App;
