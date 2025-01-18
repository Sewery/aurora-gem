import { useEffect, useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import authAPI from "../../helpers/authAPI";
import ProductDto from "../products/dto/ProductDto";
import { NavigateFunction ,useNavigate} from "react-router-dom";


const Categories = () => {
  const [activeTab, setActiveTab] = useState<boolean | string>(false); // No tab active initially
  const [categories, setCategories] = useState<ProductDto[]>();
  const navigate: NavigateFunction = useNavigate();
  useEffect(() => {
    authAPI.get("http://localhost:3001/categories/").then((res) => {
      if (res && res.data.result) setCategories(res.data.result);
    });
  }, []);
  const handleTabChange = (_, newValue: string) => {
    setActiveTab(newValue.toLowerCase());
    navigate(`/categories/${newValue.toLowerCase()}`, { replace: true });
  };
  return (
    <Box sx={{ width: "100%", borderColor: "divider" }}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {categories?.map((cat) => {
          return <Tab label={cat.name} value={cat.name} key={cat.name} />;
        })}
      </Tabs>
    </Box>
  );
};

export default Categories;