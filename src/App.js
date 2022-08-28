import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
import {S}
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path = '/' element={<Home />} />
      <Route path = '/users/signup' element={<Signup/>} />
      <Route path = '/users/login' element={<Login/>} />
      <Route path = '/users/:id' element={<UserSettings/>} />
      <Route path = '/lists/new' element={<NewList/>} />
      <Route path = '/lists/:id' element={<EditList/>} />
      <Route path = '/lists' element={<ListsList/>} />
      <Route path = '/lists/items/:listid' element={<ItemList/>} />
      <Route path = '/lists/items/:listId/:id' element={<Item/>} />
      // <Route path = '/lists/items/:listId' element={<NewItem/>} />
      // <Route path = '/lists/items/:listId/:id' element={<EditItem/>} />



    </Routes>
    </>
  );
}

export default App;
