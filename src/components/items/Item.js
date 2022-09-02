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

  const checkboxLabel = { inputProps: { 'aria-label': 'Item checkbox' } };
  
  useEffect(() => {
    activeList !== 'undefined' && 
    axios.get(`https://radiant-sierra-50882.herokuapp.com/lists/items/${activeList}`)
    .then(res => setItems(res.data))
    // console.log(`UseEffect in ListItems says the items of the active list are: ${items}`)
    // setReloadItems(true)
  },  [selectedItem, reloadItems])


  // Edit modal controls    
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };
  
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

  return (
    <>
  {itemsArr.map((item, i) => (
    <ListItem
    key={i}
  
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

<IconButton edge="end" aria-label="Edit Item" onClick={handleClickOpen}>
        <EditIcon/> 
        <EditItem 
          id={item._id}
          listId={activeList}
          reloadItems={reloadItems} 
          setReloadItems={setReloadItems}
          handleItemClick={handleItemClick}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          /> 
      </IconButton>
      <IconButton edge="end" aria-label="Delete Item"
      // onClick={handleClickOpen}   
        >
        <DeleteItem 
        id={item._id}
        listId={activeList}
        reloadItems={reloadItems} 
        setReloadItems={setReloadItems}
        handleItemClick={handleItemClick}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
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


