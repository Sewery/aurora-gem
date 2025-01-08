import { Outlet } from "react-router-dom";
import TopBar from "./topbar/TopBar";
import userAuthenticated from "../helpers/userAuthenticated";

const MainPage = () => {
  return (
    <div>
      <div className="text-black">
        <TopBar />
      </div>
      <div>
        
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
