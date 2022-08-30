// import { Routes, Route, useNavigate } from 'react-router-dom'
// // import Home from './components/Home';
// import Navbar from './Navbar'
// import Signup from './users/Signup';
// import Login from './users/Login';
// import UserSettings from './users/UserSettings'
// import ListsHome from './lists/ListsHome'

// import { createContext, useState } from 'react';

// export const UserContext = createContext()
// // const UserContext = createContext()

// const Home = () => {
//     // SET STATE FOR CONTEXT
//     const [currentUser, setCurrentUser] = useState({
//         displayname: '',
//         email: '',
//         password: ''
//     })

// return (
// <>

//     <UserContext.Provider value={{'currentUser': currentUser, 'setCurrentUser': setCurrentUser}}>

//     {/* if signed in, show <ListsHome /> */}
//     <Navbar />
//     <Routes>
//         {/* <Route path = '/' element={<Home />} /> */}
//         <Route path = '/users/signup' element={<Signup />} />
//         <Route path='/users/signin' element= {<Login />} />
//         <Route path = '/users/settings' element={<UserSettings />} />
//         {/* <Route path = '/lists/new' element={<NewList/>} /> */}
//         <Route path = '/lists' element={<ListsHome/>} />
        
//         {/* <Route path="/*" element={<Navigate to="/"/>}/> */}
//         {/* ^ handle mis-typed urls */}

// </Routes>
// </UserContext.Provider>
// </> 
// );
// };

// export default Home;