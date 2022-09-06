import React, { useContext, useEffect, useState} from 'react'
import axios from 'axios';
import { ActiveListContext } from '../../contexts/ActiveListContext';
// import { UserContext } from '../../contexts/UserContext';
import Item from './Item';
import EditList from '../lists/EditList';
import DeleteList from '../lists/DeleteList';
import Button from '@mui/material/Button';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const ListItems = () => {
  const { activeList, setActiveList} = useContext(ActiveListContext)
  // Reload to use for actions that will need get request to refresh items after a change. Imported into ListItems, EditItem, DeleteItem, CreateItem,
  const [reloadItems, setReloadItems] = useState(false)


// State for the items in a given list:
  const [items, setItems] = useState(false)

  useEffect(() => {
      axios.get(`https://final-list.herokuapp.com/lists/items/${activeList}`)
      .then(res => setItems(res.data))
  }, [activeList, reloadItems])

  // {/* ITEM CREATE */}
  // Modal
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };
  
   // Form
  const initialCreateState = { name: '',  details: '', priority: '', }
  const [createItem, setCreateItem] = useState(initialCreateState);

  const handleCreateChange = (event) => {
    setCreateItem({...createItem, [event.target.id]: event.target.value})
  }

  function handleCreateSubmit (event) {
    event.preventDefault()
        axios.post(`https://final-list.herokuapp.com/lists/items/${activeList}`, createItem)
        .then(res => {
          handleClose()
          setReloadItems(true)
        })
  }  

    // {/* LIST EDIT */}
  // (modal state and functions in EditList component)
  // Form
  const initialFormState = { name: '',  details: '' }
  const [listChanges, setListChanges] = useState(initialFormState);

  const handleChange = (event) => {
    setListChanges({ ...listChanges, [event.target.id]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(listChanges)
      axios.patch(`https://final-list.herokuapp.com/lists/${activeList}`, listChanges)
      .then(() => {
        setListChanges(initialFormState)
        handleClose()
        setReloadItems(true)
      })
    }

const [selectedItem, setSelectedItem] = useState()

// const handleItemClick = (event) => {
//   event.preventDefault()
//   setSelectedItem(event.target.id)
// }

  return (
  <>
    { items ? (
      <>
      {/* List Name and details */}
      <h2>{items.name}</h2>
      <h3>{items.details}</h3>
      {/* List edit component: edit button and modal */}
      <EditList 
        id={items._id}
        name={items.name}
        details={items.details}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        listChanges={listChanges}
        setListChanges={setListChanges}
        />  
      
      <DeleteList 
      id={items._id}
      list={activeList._id}
      name={items.name}
      details={items.details}
      items={items}
      setItems={setItems}
      /> 

    <Item 
      // onClick={handleItemClick} 
      items={items}
      setItems={setItems}
      activeList={activeList}
      itemsArr={items.items}
      reloadItems={reloadItems} 
      setReloadItems={setReloadItems}
      // handleItemClick={handleItemClick}
      // selectedItem={selectedItem}
      // setSelectedItem(setSelectedItem)
    />

   {/* ITEM CREATE */}
   {/* Button */}
    <Button variant="contained"
        startIcon={<LibraryAddIcon/>}
        onClick={handleClickOpen}
        >Add an Item
    </Button>
    {/* Dialog modal */}
    <Dialog 
      onClose={handleClose}
      open={open}
      noValidate
      autoComplete="off" 
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
      <TextField 
        id="name" 
        label="Item Name" 
        variant="outlined" 
        margin="dense"
        fullWidth
        required={true}
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
          // required={true}
          value={createItem.details}
          onChange={handleCreateChange}
          />
          <TextField 
          id="priority" 
          label="Low, Medium, or High Priority" 
          variant="outlined" 
          margin="dense"
          fullWidth
          onChange={handleCreateChange}
          value={createItem.priority}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained"
          onClick={handleCreateSubmit}
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
};

export default ListItems;