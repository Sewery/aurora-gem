import Categories from "./Categories";
import { NavigateFunction ,useNavigate} from "react-router-dom";
const TopBar = () => {
    const navigate: NavigateFunction = useNavigate();
  return (
    <div className="flex flex-col items-center space-y-4 p-4">
    <div className="flex justify-center items-center mb-4">
      <img
        src="/src/assets/logo.png"
        alt="apart_logo"
        className="h-12 w-auto max-w-xs"
        onClick={()=>navigate(`/`, { replace: true })}
      />
        <h1 className="ml-3 text-2xl font-bold text-gray-800">Aurora Gem</h1>
    </div>
    <div className="w-full">
      <Categories />
    </div>
  </div>
  );
};

export default TopBar;
