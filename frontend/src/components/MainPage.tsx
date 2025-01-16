import { Outlet } from "react-router-dom";
import TopBar from "./topbar/TopBar";
import userAuthenticated from "../helpers/userAuthenticated";
import { Divider } from "@mui/material";

const MainPage = () => {
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

export default MainPage;
