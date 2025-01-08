import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import  AuthUserOptionsProps  from './interfaces/AuthUserOptionsProps';



function AuthUserOptions({handleClose}: AuthUserOptionsProps) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        navigate('/');
      };

    return (
        <div>
            <MenuItem onClick={()=>{handleClose(); handleLogout(); }}>Log out</MenuItem>
            <MenuItem onClick={()=>{handleClose; navigate('/orders')}}>My Orders</MenuItem>
        </div>
    )
}
export default AuthUserOptions;
  
