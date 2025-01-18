import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import  AuthUserOptionsProps  from '../../interfaces/AuthUserOptionsProps';
import axios from 'axios';




function AuthUserOptions({handleClose}: AuthUserOptionsProps) {
    const navigate = useNavigate();

    const handleLogout = () => {
        try{
            axios.post('http://127.0.0.1:3030/api/logout', {refreshToken:localStorage.getItem('refreshToken')})
        }
        catch(e){
            console.error(e)
        }
      
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        navigate('/');

      };

    return (
        <div>
            <MenuItem onClick={()=>{handleClose(); handleLogout(); }}>Log out</MenuItem>
            <MenuItem onClick={()=>{handleClose(); navigate('/orders')}}>My Orders History</MenuItem>
        </div>
    )
}
export default AuthUserOptions;
  
