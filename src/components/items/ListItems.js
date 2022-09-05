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
// import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const ListItems = () => {
  // {activeList, activeListContext}
  const { activeList, setActiveList, listSelected, setListSelected } = useContext(ActiveListContext)

  const [selectedItem, setSelectedItem] = useState()
// State for the items in a given list:
  const [items, setItems] = useState(false)
  // console.log(items.items)
  // console.log(activeList)
  // Reload items list
  // if (activeList !== 'undefined') {
  //     axios.get(`http://localhost:8000/lists/items/${activeList}`)
  //     .then(res => setItems(res.data))
  //     console.log(items)
  // }
  useEffect(() => {
      axios.get(`http://localhost:8000/lists/items/${activeList}`)
      .then(res => setItems(res.data))
      // console.log(`UseEffect in ListItems says the items of the active list are: ${items}`)
       // setReloadItems(true)
  }, [activeList])

  // Reload to use for actions that will need get request to refresh items after a change. Imported into ListItems, EditItem, DeleteItem, CreateItem,
  const [reloadItems, setReloadItems] = useState(false)


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
  // //  console.log(event)f
  // console.log(createItem)
  // console.log(event.target.value)
   setCreateItem({...createItem, [event.target.id]: event.target.value})
  }

  function handleCreateSubmit (event) {
    event.preventDefault()
    console.log(createItem)
    // if (createItem.name !== '' && createItem.details !== '')
        axios.post(`http://localhost:8000/lists/items/${activeList}`, createItem)
        .then(res => {
          console.log('created')
          handleClose()
          // setReloadItems(true)
        })
  }  


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
        >Add an Item
    
    </Button>
    <Dialog 
      onClose={handleClose}
      open={open}
      // component="form"
      noValidate
      autoComplete="off" 
      // onSubmit={handleCreateSubmit}
      >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute', right: 8, top: 8,
          color: (theme) => theme.palette.grey[500],}}>
        <CloseIcon />
      </IconButton>
      <DialogTitle>Create Item</DialogTitle>
      <DialogContent >
        {/* <form
          onSubmit={handleCreateSubmit}
          > */}
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
          label="Describe the item"
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
          {/* </form> */}
        </DialogContent>
        <DialogActions>
          <Button >Cancel</Button>
            <Button variant="contained"
          onClick={handleCreateSubmit
          }
        >Create Item</Button>
        </DialogActions>
      </Dialog>
  </> 
    ):(
      <h3> No List Selected</h3>
    )
  }
  </>
  )
}

export default ListItems;

