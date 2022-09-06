import React, { useEffect, useState, useContext } from 'react'
import DeleteItem from "./DeleteItem";
// import EditItem from "./EditItem";
import axios from "axios";
// import { UserContext } from '../../contexts/UserContext';
import { ActiveListContext } from '../../contexts/ActiveListContext';
import ChangeItem from './ItemChange';

import Checkbox from '@mui/material/Checkbox';
import { Chip } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


// returning one specific item from the ItemsList
const Item = ({items, setItems, itemsArr,  reloadItems, setReloadItems, selectedItem, setSelectedItem, handleItemClick }) => {

  const { activeList, setActiveList} = useContext(ActiveListContext)
  // const [deleteItem, setDeleteItem] = useState('');

  const checkboxLabel = { inputProps: { 'aria-label': 'Item checkbox' } };
  
  useEffect(() => {
    activeList !== 'undefined' && 
    axios.get(`http://localhost:8000/lists/items/${activeList}`)
    .then(res => setItems(res.data))
  },  [reloadItems])


  const handleClick = (event) => {
    console.log(event.target._id)
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
  return (
    <>
  {itemsArr.map((item, i) => (
    <div className='item'
    id={item.id}
    >
    <ListItem
    key={i}
    id={item._id}
    // onClick={handleClick}
    // itemId={item._id}
    // onClick={handleClick}
    // listId={activeList}
  
    secondaryAction={
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
        <ChangeItem 
        // key={i}
        id={item._id}/>
      </>

      <IconButton edge="end" aria-label="Delete Item"
      // onClick={handleClickOpen}   
        >
        <DeleteItem 
        id={item._id}
        listid={activeList}
        reloadItems={reloadItems} 
        setReloadItems={setReloadItems}
        // handleItemClick={handleItemClick}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
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