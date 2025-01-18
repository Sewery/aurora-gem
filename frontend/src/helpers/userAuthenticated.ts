import {jwtDecode} from 'jwt-decode';

const userAuthenticated = ():boolean => {
  const refreshToken = localStorage.getItem('refreshToken');
   if(!refreshToken){
       return false;
   }
    const decodedToken = jwtDecode(refreshToken);
    if(decodedToken==undefined)
    {
        return false;
    }
    if(decodedToken.exp !=undefined && decodedToken.exp * 1000 > Date.now())
    {
        return true;
    }
    localStorage.removeItem('refreshToken');
    return false;
   
    
}

export default userAuthenticated;