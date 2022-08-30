import React, { useEffect, useState } from 'react'
// import { UserContext } from '../Home'
import { Link, useNavigate, useParams, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ListsListing from './ListsListing'

// import ListsList from './ListsList'
// import CreateListForm from './CreateListForm'

// import CreateList from './CreateList'
import ItemsList from '../items/ItemsList';

// List central, with access to the list of lists, and list create link
const ListsHome = () => {

  // const { currentUser, setCurrentUser } = useContext(UserContext)
  const [lists, setLists] = useState([])

  const [listId, setListId] = useState([])
  const navigate = useNavigate()

  const handleClick = (event) => {
    setListId(event.target.id)
    console.log(event.target.id)
    // navigate(`items/${listId}`)
  }



  // FOR LIST CREATE FORM
  const initialState = { name: '',  description: '' }
// console.log(lists)
  // const [formState, setFormState] = useState(initialState);
  const [createList, setCreateList] = useState(initialState);
  const handleChange = (event) => {
    setCreateList({...createList, [event.target.id]: event.target.value})
    // setLists({...lists, [event.target.id]: event.target.value})
}
function handleSubmit (event) {
  event.preventDefault()
  // if (createList.name !== '' && createList.details !== '')
      axios.post('http://localhost:8000/lists/new', createList)
      .then(res => {
         // setNewList(initialState)
          // console.log(currentUser)
      })

}  

// FOR RENDERING LISTS LIST
// const [lists, setLists] = useState([])
  
useEffect(() => {
  axios.get(`http://localhost:8000/lists/all`)
  .then(res => setLists(res.data))
},[lists])

    function generate(element) {
      return [0].map((value) =>
        React.cloneElement(element, {
          key: value,
        }),
      );
    }



    return (
    <>
    
       {/* <Route path = '/:id' element={<ListsListing/>} />  <Routes> */}
      <Routes>
        <Route path = '/lists/items/:id' element={<ItemsList/>} />
        </Routes> 

      <h2>Welcome to Final List, here are your lists:</h2>

      {/* <Link to= '/lists/new'> Make a New List</Link><CreateList lists={lists} setLists={setLists}/> */}
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off" 
      onSubmit={handleSubmit}
      // onChange={handleChange}
      >
      
      <TextField 
        id="name" 
        label="List Name" 
        variant="outlined" 
        // required='true'
        onChange={handleChange}
        value={createList.name}
        />
        <TextField
          id="description"
          label="List Description"
          placeholder="Description"
          multiline
          // required='true'
          value={createList.description}
          onChange={handleChange}
          />
          <Button variant="contained"
    onClick={handleSubmit}
    >Create List</Button>
    </Box>

    <Grid item xs={12} md={2}>
          <List
              sx={{
                width: '100%',
                maxWidth: 500,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 500,
                '& ul': { padding: 0 },
              }}
          >
          {lists.map((list, i) => (
          <ListsListing 
            key={i} 
            id={list._id} 
            name={list.name} 
            details={list.details}
            lists={lists}
          // listId={listId}
          />
          ))}
            
          </List>
    </Grid>



      {/* <ListsList 
        id={listId}/> */}
      {/* <ItemsList  /> */}
        {/* // listId={list._id}  */}


    </>
    )
}

export default ListsHome;