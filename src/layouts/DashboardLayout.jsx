import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Box } from "@mui/material";
import { useStateContext } from "../contexts/ContextProvider";

export default function Dashboard() {
  const { isOpenSidebar, setIsOpenSidebar } = useStateContext();

  return (
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <Box className="main">
        <Sidebar />

        <Box
          className="page"
          sx={{
            marginLeft: isOpenSidebar ? "250px" : "20px",
            transition: "all 0.3s ease-out",
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <div className="footer"></div>
    </div>
  );
}
