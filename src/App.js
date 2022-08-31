
// import { Routes, Route } from 'react-router-dom'
// import Home from './components/Home';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { createContext, useState } from 'react';
import Dashboard from './components/lists/Dashboard';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';
// import Navbar from './components/Navbar'
import Signup from './components/users/Signup';
import Signin from './components/users/Signin';
import UserSettings from './components/users/UserSettings'
// import ListsHome from './lists/ListsHome'
import ItemsList from './components/items/ItemsList';
import Dashboard2 from './components/lists/Dashboard2';


export const UserContext = createContext()
// import Navbar from './components/Navbar'
// import Signup from './components/users/Signup';
// import Login from './components/users/Login';
// import UserSettings from './components/users/UserSettings'
// import { createContext, useState } from 'react';

// export const UserContext = createContext()
// const UserContext = createContext()

// import Signup from './components/users/Signup'
// import Login from './components/users/Login'
// import UserSettings from './components/users/UserSettings'
// import './App.css';

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
      {/* set this up later to conditionaly render based on current user logged in or not */}
      <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 4 }}>
        <IconButton aria-label="home" color="secondary" size="large">
            <Link to= '/'> <HomeIcon fontSize="large" /></Link>
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          <Link to= '/'> Final List </Link>   
      </Typography>
        <Link to='/lists'>Dash</Link>
        <Link to='/dash2'>Dash2</Link>
        <Link to='/users/signup'>Get Started</Link>
        <Link to='/users/signin'>Login</Link>
        <Link to='/users/settings'>User Settings</Link>
        <Link to='/'>Logout</Link>
      </Stack>
    </nav>

          {/* if signed in, show <ListsHome /> */}
    {/* <Navbar /> */}
    <Routes>
    <Route path = '/dash2' element={<Dashboard2 />} />
        <Route path = '/lists' element={<Dashboard />} />
        <Route path = '/users/signup' element={<Signup />} />
        <Route path='/users/signin' element= {<Signin />} />
        <Route path='/users/settings' element= {<UserSettings />} />
        <Route path = '/lists/items/:id' element={<ItemsList />} />
    </Routes>
    </UserContext.Provider>
    </> 
  );
}

export default App;
