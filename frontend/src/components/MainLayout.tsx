import { Outlet } from "react-router-dom";
import TopBar from "./topbar/TopBar";
import { Divider } from "@mui/material";

const MainLayout = () => {
  return (
    <div>
      <div className="text-black">
        <TopBar />
        <Divider className="m-1" />
      </div>
      <div className="flex flex-col items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
