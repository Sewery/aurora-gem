import { jwtDecode, JwtPayload } from "jwt-decode";
import userAuthenticated from "./userAuthenticated";

interface DecodedTokenInterface extends JwtPayload {
  is_admin: boolean;
}

const isUserAdmin = (): boolean => {
  if (!userAuthenticated()) {
    return false;
  }
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) {
    return false;
  }
  const decodedToken = jwtDecode(refreshToken) as DecodedTokenInterface;
  if (decodedToken == undefined) {
    return false;
  }
  if (decodedToken.is_admin != undefined && decodedToken.is_admin) {
    return true;
  }
  return false;
};

export default isUserAdmin;
