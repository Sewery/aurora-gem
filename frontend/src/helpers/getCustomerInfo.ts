import { jwtDecode } from "jwt-decode";
import CustomerInterface from "../interfaces/CustomerInterface";
import userAuthenticated from "./userAuthenticated";

const getCustomerInfo = (): null | CustomerInterface => {
  if (userAuthenticated()) {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      return null;
    }
    const decodedToken = jwtDecode(refreshToken) as CustomerInterface;
    if (decodedToken == undefined) {
      return null;
    }
    return decodedToken;
  }
  return null;
};

export default getCustomerInfo;
