import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import  UnAuthUserOptionsProps  from '../../interfaces/UnAuthUserOptionsProps';




function UnAuthUserOptions({handleClose}: UnAuthUserOptionsProps) {
    const navigate = useNavigate();

    return (
        <div>
            <MenuItem onClick={()=>{handleClose; navigate('/login') }}>Log in</MenuItem>
            <MenuItem onClick={()=>{handleClose; navigate('/register')}}>Register</MenuItem>
        </div>
    )
}
export default UnAuthUserOptions;
  
