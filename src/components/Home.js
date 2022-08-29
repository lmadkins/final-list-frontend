import { Routes, Route, Link, Navigate } from 'react-router-dom'
// import Home from './components/Home';
import Navbar from './Navbar'
import Signup from './users/Signup';
import Login from './users/Login';
import UserSettings from './users/UserSettings'
import { createContext, useState } from 'react';

export const UserContext = createContext()
// const UserContext = createContext()

const Home = () => {
    // SET STATE FOR CONTEXT
    const [currentUser, setCurrentUser] = useState({
        displayname: '',
        email: '',
        password: ''
    })

return (
<>
    {/* NAVBAR */}
    <UserContext.Provider value={{'currentUser': currentUser, 'setCurrentUser': setCurrentUser}}>

    <Navbar />


    <Routes>
        <Route path = '/' element={<Home />} />
        <Route path = '/users/signup' element={<Signup />} />
        <Route path='/users/login' element= {<Login />} />
        <Route path = '/users/:id' element={<UserSettings />} />
        <Route path="/*" element={<Navigate to="/"/>}/>
        {/* ^ handle mis-typed urls */}

        {/* <Route path = '/lists/new' element={<NewList/>} />
        <Route path = '/lists/:id' element={<EditList/>} />
        <Route path = '/lists' element={<ListsList/>} />
        <Route path = '/lists/items/:listid' element={<ItemList/>} />
        <Route path = '/lists/items/:listId/:id' element={<Item/>} />
        // <Route path = '/lists/items/:listId' element={<NewItem/>} />
        // <Route path = '/lists/items/:listId/:id' element={<EditItem/>} /> */}
    </Routes>
    </UserContext.Provider>
</> 
);
};

export default Home;