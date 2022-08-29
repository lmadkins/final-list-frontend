
// import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
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

  return (
<>
    {/* NAVBAR */}
    {/* <UserContext.Provider value={{'currentUser': currentUser, 'setCurrentUser': setCurrentUser}}> */}
    <Home />     
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
