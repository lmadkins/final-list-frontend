// import Link from '@mui/material/Link';
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// import Signup from './users/Signup';
// import Login from './users/Login';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';

// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import { UserContext } from './Home'

const Navbar = () => {

    const navigate = useNavigate()
    const { currentUser, setCurrentUser } = useContext(UserContext)

    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    const handleLogout = () => {
    window.localStorage.removeItem("Token");
    window.localStorage.removeItem("Email");
    navigate('/')
}
// console.log(currentUser)
    return (
    <>
    <Box sx={{ flexGrow: 1 }}>

        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Final List
        </Typography>
        {/* <Link href="/home" underline="hover">
        My Lists
        </Link> */}
       

        {currentUser === '' &&
        <>
        {/* <Link href="/home" underline="hover">
        My Lists<Link to='/users/signup'>Get Started</Link>
        <Link to='/users/login'>Login</Link>
        </Link> */}
        
        </>
    }
        {auth && (
            <div>
            {/* <Link to= '/users/:id'> Settings</Link>
            <Link to= '/' onClick={handleLogout}> Logout</Link> */}
            
            </div>
        )}
        </Toolbar>

    </Box>
    </>
    )
}

export default Navbar;