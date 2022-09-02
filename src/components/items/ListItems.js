// returning one specific item from the ItemsList
// Panel showing active list and its items
import React, { useContext, useEffect, useState} from 'react'
import axios from 'axios';
import { ActiveListContext } from '../../contexts/ActiveListContext';
import { UserContext } from '../../contexts/UserContext';
// import { UserContext } from '../../contexts/UserContext';
import Item from './Item';
// import CreateItem from './CreateItem';

// import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// import IconButton from '@mui/material/IconButton';
// import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';


const ListItems = () => {
  // {activeList, activeListContext}
  const { activeList, setActiveList, listSelected, setListSelected } = useContext(ActiveListContext)
  // const [items, setItems] = useState()
  const [selectedItem, setSelectedItem] = useState()
// State for the items in a given list:
  const [items, setItems] = useState(false)
  // console.log(items.items)
  // Reload items list
  // if (activeList !== 'undefined') {
  //     axios.get(`http://localhost:8000/lists/items/${activeList}`)
  //     .then(res => setItems(res.data))
  //     console.log(items)
  // }
  useEffect(() => {
      axios.get(`https://radiant-sierra-50882.herokuapp.com/lists/items/${activeList}`)
      .then(res => setItems(res.data))
      console.log(items)
  }, [activeList])
  // [activeList, selectedItem, listSelectedreloadItems]

  // Reload to use for actions that will need get request to refresh items after a change. Imported into ListItems, EditItem, DeleteItem, CreateItem,
  const [reloadItems, setReloadItems] = useState(false)


  // useEffect(() => {
  //   axios.get(`http://localhost:8000/lists/items/${activeList}`)
  //   .then(res => setItems(res.data))
  //   console.log(`UseEffect in ListItems says the items of the active list are: ${items}`)
  //   // setReloadItems(true)
  // }, [activeList])


    const handleItemClick = (event) => {
      console.log(event.target.id)
      setSelectedItem(event.target.id)
    }

   // Create modal controls    
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };
  
   // FOR ITEM CREATE FORM
   const initialCreateState = { name: '',  details: '', priority: '', }
   const [createItem, setCreateItem] = useState(initialCreateState);

   const handleCreateChange = (event) => {
     setCreateItem({...createItem, [event.target.id]: event.target.value})
   }
      // setItems({...Items, [event.target.id]: event.target.value})

 // console.log(activeList)
 function handleCreateSubmit (event) {
   event.preventDefault()
    // if (createItem.name !== '' && createItem.details !== '')
       axios.post(`https://radiant-sierra-50882.herokuapp.com/lists/items/${activeList}`, createItem)
       .then(res => {
         console.log('created')
         setReloadItems(true)
       })
 }  
 useEffect(() => {
  axios.get(`https://radiant-sierra-50882.herokuapp.com/lists/items/${activeList}`)
  .then(res => setItems(res.data))
  // console.log(items)
}, [reloadItems])

  

  return (
  <>

    { items ? (
      <>
      <h2>{items.name}</h2>
      <h3>{items.details}</h3>
      {/* </> */}

    <Item 
      items={items}
      setItems={setItems}
      activeList={activeList}
      itemsArr={items.items}
      reloadItems={reloadItems} 
      setReloadItems={setReloadItems}
      handleItemClick={handleItemClick}
    // selectedItem={selectedItem}
    // setSelectedItem(setSelectedItem)
    />
    <Button variant="contained"
          startIcon={<LibraryAddIcon/>}
        onClick={handleClickOpen}
        >Add an item
    </Button>
    <Dialog 
        onClose={handleClose}
        open={open}
        component="form"
        noValidate
        autoComplete="off" 
        onSubmit={handleCreateSubmit}
        // sx={{
        //   height: 500,
        //   flexGrow: 1,
        //   minWidth: 500,}}
        >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute', right: 8, top: 8,
            color: (theme) => theme.palette.grey[500],}}>
          <CloseIcon />
        </IconButton>
        <DialogTitle>Create List</DialogTitle>
        <DialogContent onChange={handleCreateChange}>
          <DialogContentText>
            {/* To subscribe to this website, please enter your email address here. We
            will send updates occasionally. */}
          </DialogContentText>
          <br></br>
          {/* <Stack spacing={2}> */}
      <TextField 
        id="name" 
        label="Item Name" 
        variant="outlined" 
        margin="dense"
        fullWidth
        // required='true'
        onChange={handleCreateChange}
        value={createItem.name}
        />
        <TextField
          id="details"
          label="Description the item"
          placeholder="Description"
          margin="dense"
          multiline
          fullWidth
          // required='true'
          value={createItem.details}
          onChange={handleCreateChange}
          />
          <TextField 
        id="priority" 
        label="Low, Medium, or High Priority" 
        variant="outlined" 
        margin="dense"
        fullWidth
        // required='true'
        // placeholder=
        // multiline
        required='true'
        onChange={handleCreateChange}
        value={createItem.priority}
        />
          
        {/* <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item> */}
      {/* </Stack> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained"
          onClick={handleCreateSubmit}
        >Create Item</Button>
        </DialogActions>
      </Dialog>

    {/* <CreateItem 
        activeList={activeList}
        reloadItems={reloadItems} 
        setReloadItems={setReloadItems}
    />   */}
  </> 
    ):(
      <h3> No List Selected</h3>
    )
  }
  </>
  )
}

export default ListItems;

