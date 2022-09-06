import { useContext } from 'react'
import { ActiveListContext } from '../../contexts/ActiveListContext';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

// DELETE (destroy)
//  /lists/items/:listId/:id
const DeleteItem = (props, {id, listid, itemID,  reloadItems, setReloadItems,  handleItemClick, selectedItem, setSelectedItem, deleted, setDeleted }) => {

// console.log(props.id)
    const { activeList, setActiveList} = useContext(ActiveListContext)

  const handleItemDelete = () => {
    axios.delete(`http://localhost:8000/list/items/${props.listid}/${props.id}`)
        .then(res => {
          // navigate('/lists')
          // setSelectedItem(null)
          setReloadItems(true)
          // setDeleted(true)
        })	
    };

    
  return (
  <>
    <Tooltip title="Delete Item" arrow>
    <IconButton edge="end" aria-label="delete item"  
    itemID={itemID} listid={listid} onClick={handleItemDelete}>
      <DeleteIcon/>  
    </IconButton>
    </Tooltip>
  </>
  )
}

export default DeleteItem;
