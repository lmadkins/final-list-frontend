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
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';

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

    <AppBar position="static">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
        >
            <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Final List
        </Typography>
        <Typography sx={{ minWidth: 100 }}><Link to= '/lists'> My Lists</Link></Typography>

        {currentUser === '' &&
        <>
        <Typography sx={{ minWidth: 100 }}><Link to='/users/signup'>Get Started</Link></Typography>
        <Typography sx={{ minWidth: 100 }}><Link to='/users/login'>Login</Link></Typography>

        </>
    }
        {auth && (
            <div>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                    <MenuItem onClick={handleClose}>
                        <Link to= '/users/:id'> Settings</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose} >
                        <Link to= '/' onClick={handleLogout}> Logout</Link>
                    </MenuItem>
            </Menu>
            </div>
        )}
        </Toolbar>
        </AppBar>
    </Box>
    </>
    )
}

export default Navbar;