import { useEffect, useState } from 'react'
// import { UserContext } from '../Home'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ListsList from './ListsList'
import CreateListForm from './CreateListForm'
import EditListForm from './EditListForm'
import CreateList from './CreateList'

// List central, with access to the list of lists, and list create link
const ListsHome = () => {

  // const { currentUser, setCurrentUser } = useContext(UserContext)
  const [lists, setLists] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8000/lists/all`)
    .then(res => setLists(res.data))
  },[lists])

  const initialState = { name: '',  description: '' }
// console.log(lists)
  const [formState, setFormState] = useState(initialState);
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
    return (
    <>
      <h2>Welcome to Final List, here are your lists:</h2>
      {/* <Link to= '/lists/new'> Make a New List</Link><CreateList lists={lists} setLists={setLists}/> */}
      <Link to= '/lists/items/:id'> Edit List</Link>
      <EditListForm />
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


      <ListsList />


    </>
    )
}

export default ListsHome;