// import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


// DELETE (destroy)
//  /lists/items/:listId/:id
const DeleteItem = (props, {listid, activeList, setActiveList, itemId,  reloadItems, setReloadItems,  handleItemClick, selectedItem, setSelectedItem, deleted, setDeleted }) => {

// console.log(listId)
// console.log(id)
// console.log(props.listId)
// console.log(props.id)
  const handleItemDelete = () => {
    axios.delete(`http://localhost:8000/list/items/${props.listid}/${props.itemId}`)
        .then(res => {
          // navigate('/lists')
          // setSelectedItem(null)
          setDeleted(true)
        })	
    };

    
  return (
  <>  
    <IconButton edge="end" aria-label="delete item"  
    itemId={itemId} listid={listid} onClick={handleItemDelete}>
      <DeleteIcon/>  
    </IconButton>
  </>
  )
}

export default DeleteItem;

// http://localhost:8000/630d463c81cab02c45de6864/631111e4882d288113642cc3