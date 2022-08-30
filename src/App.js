
// import { Routes, Route } from 'react-router-dom'
// import Home from './components/Home';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { createContext, useState } from 'react';
import Dashboard from './components/lists/Dashboard';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';
import Navbar from './components/Navbar'
import Signup from './components/users/Signup';
import Login from './components/users/Login';
// import UserSettings from '.components/users/UserSettings'
// import ListsHome from './lists/ListsHome'



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
      <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <IconButton aria-label="delete" color="secondary" size="large">
      <HomeIcon fontSize="inherit" />
    </IconButton><IconButton aria-label="delete" color="secondary" size="large">
      <HomeIcon fontSize="inherit" />
    </IconButton><IconButton aria-label="delete" color="secondary" size="large">
      <HomeIcon fontSize="inherit" />
    </IconButton>
    </Stack>
    
    {/* <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
    <Link to= '/'> <HomeIcon fontSize="large" /></Link>   Final List
      </Typography> */}

    <UserContext.Provider value={{'currentUser': currentUser, 'setCurrentUser': setCurrentUser}}>
          {/* if signed in, show <ListsHome /> */}
    {/* <Navbar /> */}
    <Routes>
        <Route path = '/*' element={<Dashboard />} />
        <Route path = '/users/signup' element={<Signup />} />
        <Route path='/users/signin' element= {<Login />} />
        {/* <Route path = '/users/settings' element={<UserSettings />} /> */}
        {/* <Route path = '/lists/new' element={<NewList/>} /> */}
        {/* <Route path = '/lists' element={<Dashboard/>} /> */}
        
        {/* <Route path="/*" element={<Navigate to="/"/>}/> */}
        {/* ^ handle mis-typed urls */}

</Routes>
    </UserContext.Provider>
    {/* NAVBAR */}
    {/* <UserContext.Provider value={{'currentUser': currentUser, 'setCurrentUser': setCurrentUser}}> */}
    {/* <Home />      */}
    {/* <Route path = '/' element={<Home />} /> */}
    {/* <Navbar />
    <Login />
    <Signup /> */}
{/* if signed in, show <ListsHome /> */}
{/* 
    <Routes>
        <Route path = '/home' element={<Home />} />
        <Route path = '/users/signup' element={<Signup />} />
        <Route path='/users/login' element= {<Login />} />
        <Route path = '/users/:id' element={<UserSettings />} /> */}
        {/* <Route path="/*" element={<Navigate to="/"/>}/> */}
        {/* ^ handle mis-typed urls */}

        {/* <Route path = '/lists/new' element={<NewList/>} />
        <Route path = '/lists/:id' element={<EditList/>} />
        <Route path = '/lists' element={<ListsList/>} />
        <Route path = '/lists/items/:listid' element={<ItemList/>} />
        <Route path = '/lists/items/:listId/:id' element={<Item/>} />
        // <Route path = '/lists/items/:listId' element={<NewItem/>} />
        // <Route path = '/lists/items/:listId/:id' element={<EditItem/>} /> */}
    {/* </Routes>
    </UserContext.Provider> */}
    </> 
  );
}

export default App;
