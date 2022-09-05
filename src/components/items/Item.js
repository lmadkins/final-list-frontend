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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Stack from '@mui/material/Stack';

// returning one specific item from the ItemsList
const Item = ({items, setItems, itemsArr,  activeList, setActiveList, reloadItems, setReloadItems, handleItemClick, selectedItem, setSelectedItem}) => {

  const [deleted, setDeleted] = useState(false);
  const checkboxLabel = { inputProps: { 'aria-label': 'Item checkbox' } };
  
  useEffect(() => {
    activeList !== 'undefined' && 
    axios.get(`http://localhost:8000/lists/items/${activeList}`)
    .then(res => setItems(res.data))
    // console.log(`UseEffect in ListItems says the items of the active list are: ${items}`)
    // setReloadItems(true)
  },  [selectedItem, reloadItems, deleted])

    // Create modal controls    
    const [openEdit, setOpenEdit] = useState(false);
    const handleClickOpenEdit = () => { setOpenEdit(true); };
    const handleCloseEdit = () => { setOpenEdit(false); };


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

const [open, setOpen] = useState(false);
const handleClickOpen = () => { setOpen(true); };
const handleClose = () => { setOpen(false); };

  return (
    <>
  {itemsArr.map((item, i) => (
    <ListItem
    key={i}
    itemId={item._id}
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

  <IconButton edge="end" aria-label="Edit Item" onClick={handleClickOpenEdit}>
        <EditIcon/> 
        <EditItem 
          setOpenEdit={setOpenEdit}
          id={item._id}
          listid={activeList}
          reloadItems={reloadItems} 
          setReloadItems={setReloadItems}
          handleItemClick={handleItemClick}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          openEdit={openEdit}
          handleClickOpen={handleClickOpenEdit}
          handleClose={handleCloseEdit}
          /> 
      </IconButton>
      <IconButton edge="end" aria-label="Delete Item"
      // onClick={handleClickOpen}   
        >
        <DeleteItem 
        itemId={item._id}
        listid={activeList}
        reloadItems={reloadItems} 
        setReloadItems={setReloadItems}
        handleItemClick={handleItemClick}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        deleted={deleted}
        setDeleted={setDeleted}
        />
      </IconButton>
    </>
    }
    disablePadding
  >
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


