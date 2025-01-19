import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import  UnAuthUserOptionsProps  from '../../interfaces/UnAuthUserOptionsProps';




function UnAuthUserOptions({handleClose}: UnAuthUserOptionsProps) {
    const navigate = useNavigate();
    Object.keys(localStorage)
    .filter((key) => key.startsWith("cart-item-"))
    .forEach((key) => {
      localStorage.removeItem(key);
    });
    return (
        <div>
            <MenuItem onClick={()=>{handleClose; navigate('/login') }}>Log in</MenuItem>
            <MenuItem onClick={()=>{handleClose; navigate('/register')}}>Register</MenuItem>
        </div>
    )
}
export default UnAuthUserOptions;
  
