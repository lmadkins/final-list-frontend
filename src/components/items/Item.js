import React, { useEffect, useState, useContext } from 'react'
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";
import axios from "axios";
import { UserContext } from '../../contexts/UserContext';
// import IconButton from '@mui/material/IconButton';
// import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';
import { Chip } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Tooltip from '@mui/material/Tooltip';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import Stack from '@mui/material/Stack';

// returning one specific item from the ItemsList
const Item = ({items, setItems, itemsArr, activeList, setActiveList, reloadItems, setReloadItems, selectedItem, setSelectedItem, handleItemClick }) => {

  const [deleteItem, setDeleteItem] = useState('');
  const checkboxLabel = { inputProps: { 'aria-label': 'Item checkbox' } };
  


  useEffect(() => {
    activeList !== 'undefined' && 
    axios.get(`http://localhost:8000/lists/items/${activeList}`)
    .then(res => setItems(res.data))
    // console.log(`UseEffect in ListItems says the items of the active list are: ${items}`)
    // setReloadItems(true)
  },  [reloadItems])

    // Edit modal controls    
    const [open, setOpen] = useState(false);
    const handleOpenEdit = () => { setOpen(true); };
    const handleCloseEdit = () => { setOpen(false); };

  // Edit form 
  const initialFormState = { name: '',  details: '', priority: '', }

  const [itemChanges, setItemChanges] = useState(initialFormState);

  const handleItemChange = (event) => {
    setItemChanges({ ...itemChanges, [event.target.id]: event.target.value });
    // console.log(event.target.value)
    
  }

  const handleEditSubmit = (event) => {
    event.preventDefault();
      axios.patch(`http://localhost:8000/lists/${selectedItem}`, itemChanges)
      .then(() => {
        setReloadItems(true)
        handleCloseEdit()
      })
    }

// Checkbox controls
const [checked, setChecked] = React.useState([0]);

const handleToggle = (value) => () => {
  const currentIndex = checked.indexOf(value);
  const newChecked = [...checked];

  if (currentIndex === -1) {
    newChecked.push(value);
  } else {
    newChecked.splice(currentIndex, 1);
  }
  setChecked(newChecked);
}

// const [open, setOpen] = useState(false);
// const handleClickOpen = () => { setOpen(true); };
// const handleClose = () => { setOpen(false); };

  return (
    <>
  {itemsArr.map((item, i) => (
    <div className={item}
    onClick={handleItemClick}
    >
    <ListItem
    key={i}
    id={item._id}
    // itemId={item._id}
    onClick={handleItemClick}
    // listId={activeList}
  
    secondaryAction={
      // <IconButton edge="end" aria-label="comments">
      //   {/* <CommentIcon /> */}
      // </IconButton>
      <>

        {item.priority === 'high' && 
          <Chip color="error" label='High' />
        }
        {item.priority === 'medium' && 
          <Chip color="warning" label='Medium' />
        }
        {item.priority === 'low' && 
          <Chip color="info" label='Low' />
        }
<>
  <Tooltip title="Edit Item" arrow>
    <IconButton edge="end" aria-label="Edit Item" onClick={handleOpenEdit}>
          <EditIcon
          onClick= {handleOpenEdit}/> 
          {/* <EditItem 
            setOpenEdit={setOpen}
            id={item._id}
            listid={activeList}
            // reloadItems={reloadItems} 
            // setReloadItems={setReloadItems}
            // handleItemClick={handleItemClick}
            // selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            openEdit={open}
            handleOpenEdit={handleOpenEdit}
            handleClose={handleCloseEdit}
            />  */}
        </IconButton>
      </Tooltip>


      <Dialog 
        onClose={handleCloseEdit}
        open={open}
        noValidate
        autoComplete="off" 
      >
        
      <IconButton
        aria-label="close"
        onClick={handleCloseEdit}
        sx={{
          position: 'absolute', right: 8, top: 8,
          color: (theme) => theme.palette.grey[500],}}>
        <CloseIcon />
      </IconButton>
      <DialogTitle>Edit {item.name}</DialogTitle>
      <DialogContent >
      <TextField 
        id="name" 
        label="Item Name" 
        variant="outlined" 
        margin="dense"
        fullWidth
        // required={true}
        onChange={handleItemChange}
        value={itemChanges.name}
        />
        <TextField
          id="details"
          label="Describe the item"
          placeholder="Description"
          margin="dense"
          multiline
          fullWidth
          // required={true}
          value={itemChanges.details}
          onChange={handleItemChange}
          />
          <TextField 
          id="priority" 
          label="Low, Medium, or High Priority" 
          variant="outlined" 
          margin="dense"
          fullWidth
          onChange={handleItemChange}
          value={itemChanges.priority}
          />
          {/* </form> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancel</Button>
          <Button variant="contained"
          onClick={handleEditSubmit}
        >Submit Changes</Button>
        </DialogActions>
      </Dialog>
      </>








      <IconButton edge="end" aria-label="Delete Item"
      // onClick={handleClickOpen}   
        >
        <DeleteItem 
        itemID={item._id}
        listid={activeList}
        reloadItems={reloadItems} 
        setReloadItems={setReloadItems}
        // handleItemClick={handleItemClick}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        // deleted={deleted}
        // setDeleted={setDeletePhoto}
        />
      </IconButton>
    </>
    }
    disablePadding>
    <ListItemButton role={undefined} 
    // onClick={handleToggle(value)} 
    dense>
      <ListItemIcon>
        <Checkbox
          edge="start"
          // checked={checked.indexOf(value) !== -1}
          tabIndex={-1}
          disableRipple
          // inputProps={{ 'aria-labelledby': labelId }}
        />
      </ListItemIcon>
      <ListItemText>
      {/* //  id={labelId} primary={`Line item ${value + 1}`}  */}
        <ListItemText primary= {item.name} secondary={item.details} />
      </ListItemText>
    </ListItemButton>
  </ListItem>
  </div>
 )) }
      </>
  )
}

export default Item;
// 
  // { item.where ? (<p>>Get it at: {item.where}):null }

//   const event = new Date(item.createdAt)

  // const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
//   Created on <span>{event.toLocaleDateString(undefined, options)}</span>


