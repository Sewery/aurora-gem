// import React, { useEffect, useState } from "react";
// import { Tabs, Tab, Box, Typography } from "@mui/material";
// import CategoryDto from "./products/dto/CategoryDto";
// import authAPI from "../helpers/authAPI";
// import ProductDto from "./products/dto/ProductDto";
// import ProductList from "./products/ProductList";

// const ProductsWithCategories = () => {
//   const [activeTab, setActiveTab] = useState<boolean | string>(false); // No tab active initially
//   const [products, setProducts] = useState<ProductDto[]>();
//   const [categories, setCategories] = useState<ProductDto[]>();
//   const [currentProducts, setCurrentProducts] = useState<ProductDto[]>();
//   console.log("Products:", products);
// console.log("Categories:", categories);
// console.log("Current Products for category:", activeTab, currentProducts);
//   useEffect(() => {
//     authAPI.get("categories/").then((res) => {
//       if (res && res.data.result) setCategories(res.data.result);
//     });
//     authAPI.get("products/").then((res) => {
//       if (res && res.data.result) setProducts(res.data.result);
//     });
//   }, []);
//   const handleTabChange = (_, newValue: string) => {
//     setActiveTab(newValue);
//     setCurrentProducts(getProductsByCategory(newValue));
//   };
//   const getProductsByCategory = (
//     categoryName: string
//   ): ProductDto[] | undefined => {
//     return products?.filter(
//       (product) => product.category.name === categoryName
//     );
//   };
//   return (
//     <Box sx={{ width: "100%", borderColor: "divider" }}>
//       <Tabs
//         value={activeTab}
//         onChange={handleTabChange}
//         indicatorColor="primary"
//         textColor="primary"
//         centered
//       >
//         {categories?.map((cat) => {
//           return <Tab label={cat.name} value={cat.name} />;
//         })}
//       </Tabs>
//       <Box sx={{ padding: 2 }}>
//         <ProductList onCurrProductsChange={()=>currentProducts} />
//       </Box>
//     </Box>
//   );
// };

// export default ProductsWithCategories;
