
// import { Routes, Route } from 'react-router-dom'
// import Home from './components/Home';
import { Routes, Route, Link} from 'react-router-dom'
import { useContext, useState } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Signup from './components/users/Signup';
import Signin from './components/users/Signin';
import UserSettings from './components/users/UserSettings'
import ListItems from './components/items/ListItems';
import Dashboard from './components/lists/Dashboard';
import { UserContext } from './contexts/UserContext';


function App() {

    // SET STATE FOR USER CONTEXT
    const [currentUser, setCurrentUser] = useState({
      displayname: '',
      email: '',
      password: ''
  })


  return (
    <>
    <UserContext.Provider value={{'currentUser': currentUser, 'setCurrentUser': setCurrentUser}}>

    <nav>
      <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 6 }}>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          <Link to= '/'> Final List </Link>   
      </Typography>
{/* 
      { isUserLoggedIn ? (  */}
      <>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.primary">
          <IconButton aria-label="home" color="secondary" >
            <Link to= '/lists'
            sx={{ display: 'flex', alignItems: 'center' }}
            > <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit"/>Home</Link>
        </IconButton> /
        <IconButton aria-label="home" color="primary" >
          <Link to='/lists'><ListAltIcon  fontSize="small" /> Dash</Link>
        </IconButton> /
        <IconButton aria-label="home" color="primary" >
        <Link to='/signin'><LogoutIcon  fontSize="small" />Logout</Link>
        </IconButton>
        </Typography>
        </Breadcrumbs> </>
        {/* ) : ( */}
          <>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to='/users/signup'>Get Started</Link>
            <Link to='/users/signin'>Login</Link>
          </Breadcrumbs>
          </>
        {/* )} */}
      </Stack>
      </nav>
{/* 
    {currentUser ? ( */}
      <Routes>
          <Route path = '/lists' element={<Dashboard />} />
          <Route path = '/lists/items/:id' element={<ListItems />} />
          <Route path='/users/settings' element= {<UserSettings />} />
      {/* </Routes> */}
      {/* ) : ( */}
      {/* <Routes> */}
        <Route path = '/users/signup' element={<Signup />} />
        <Route path='/users/signin' element= {<Signin />} />
      </Routes>
      {/* )
    } */}

    </UserContext.Provider>
    </> 
  );
}

export default App;
