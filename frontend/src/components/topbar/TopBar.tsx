import Categories from "./Categories";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import UserMenu from "../user/UserMenu";
import { Badge, IconButton, InputBase, Paper, TextField } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState, } from "react";
const TopBar = () => {
  const navigate: NavigateFunction = useNavigate();
  const [countCart, setCountCart] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
    const fetchCartItemsCount = async () => {
      const sum = (a: number[]) => eval(a.join("+"));
      const keys: number[] = Object.keys(localStorage)
        .filter((key) => key.startsWith("cart-item-"))
        .map((id) => {
          if (id) return Number(localStorage.getItem(id));
          return null;
        })
        .filter((item) => item != null);
      setCountCart(sum(keys));
    };
    fetchCartItemsCount();
  });
  const handleSearch = (value:String) => {
    navigate(`/search/${value}`, { replace: false });
  };


  return (
    <div className="flex flex-col items-center space-y-4 p-4 ">
      <div className="w-full flex flex-col md:flex-row justify-between items-center max-w-[1280px] mx-auto">
        <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
          <Paper
            component="form"
            className=" flex items-center w-full md:w-64"
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Jewelry"
              inputProps={{ "aria-label": "search jewelry" }}
              onChange={(e) => setSearch(e.target.value)}
              
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(search);
                
                }
              
              }}
            />
            <IconButton type="button" aria-label="search" className="p-2" onClick={()=>{handleSearch(search)}}>
              <SearchIcon  />
            </IconButton>
          </Paper>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center cursor-pointer">
          <img
            src="/src/assets/logo.png"
            alt="aurora_logo"
            className="h-12 w-auto max-w-xs"
            onClick={() => navigate(`/`, { replace: false })}
          />
          <h1 className="ml-3 text-2xl font-bold text-gray-800">Aurora Gem</h1>
        </div>

        {/* Cart and User Menu */}
        <div className="flex items-center space-x-6 md:space-x-8 md:w-64 justify-end">
          <Link to={`/cart/`} className="no-underline text-gray-800">
            <Badge badgeContent={countCart} color="primary">
              <ShoppingBagIcon className="text-3xl" />
            </Badge>
          </Link>
          <UserMenu />
        </div>
      </div>
      <div className="w-full">
        <Categories />
      </div>
    </div>
  );
};

export default TopBar;
