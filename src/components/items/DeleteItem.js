// import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
// import ListsList from './ListsList'
// import CreateListForm from './CreateListForm'
// import { ActiveListContext } from '../../contexts/ActiveListContext';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
// import { Chip } from '@mui/material';
// import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


// DELETE (destroy)
//  /lists/items/:listId/:id
const DeleteItem = (props, {listId, setActiveList, id,  reloadItems, setReloadItems,  handleItemClick, selectedItem, setSelectedItem }) => {
  // console.log(id)
  // const { activeList, setActiveList } = useContext(ActiveListContext)
// const [deleted, setDeleted] = useState(false)
// const [reload, setReload] = useState(false)

  const handleItemDelete = () => {
    axios.delete(`https://radiant-sierra-50882.herokuapp.com/list/items/${listId}/${props.id}`)
        .then(res => {
          // navigate('/lists')
          // setSelectedItem(null)
          setReloadItems(true)
        })	
    };

  return (
  <>  
    <IconButton edge="end" aria-label="delete item"  
    id={id}  onClick={handleItemDelete}>
      <DeleteIcon/>  
    </IconButton>
  </>
  )
}

export default DeleteItem;

// http://localhost:8000/630d463c81cab02c45de6864/631111e4882d288113642cc3