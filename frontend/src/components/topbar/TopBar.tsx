import Categories from "./Categories";
import { NavigateFunction, useNavigate } from "react-router-dom";
import UserMenu from "../user/UserMenu";
import { Badge } from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
const TopBar = () => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <div className="flex flex-col items-center space-y-4 p-4 ">
      <div className="w-full flex flex-col md:flex-row justify-center items-center max-w-[1280px] relative ">
        <div className="w-full flex justify-center items-center mb-4 cursor-pointer  ">
          <img
            src="/src/assets/logo.png"
            alt="apart_logo"
            className="h-12 w-auto max-w-xs"
            onClick={() => navigate(`/`, { replace: false })}
          />
          <h1 className="ml-3 text-2xl font-bold text-gray-800">Aurora Gem</h1>
        </div>
        <div className="md:absolute md:end-4 flex justify-end items-end">
        <Badge badgeContent={4} color="primary">
            <ShoppingBagIcon />
          </Badge>
          <UserMenu/>
        </div>
      </div>
      <div className="w-full">
        <Categories />
      </div>
    </div>
  );
};

export default TopBar;
