import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
// import ListsList from './ListsList'
// import CreateListForm from './CreateListForm'
import { ActiveListContext } from '../../contexts/ActiveListContext';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

// PATCH (update)
//  /lists/items/:listId/:id

const EditItem = ({id, name,  reloadItems, setReloadItems,  handleItemClick, selectedItem, setSelectedItem}) => {
  const [reload, setReload] = useState(false)
  const { activeList, setActiveList } = useContext(ActiveListContext)
  const navigate = useNavigate()

  const [itemChanges, setItemChanges] = useState({
    name: '',
    details: '',
    priority: ''
  });

  const handleChange = (event) => {
    setItemChanges({ ...itemChanges, [event.target.id]: event.target.value });
    // console.log(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
      axios.patch(`http://localhost:8000/lists/${id}`, itemChanges)
      .then(() => {
        setReloadItems(true)
      })
    }

  return (
  <>  
   {/* // put some message here to display that it's been deleted */}
          <IconButton edge="end" aria-label="Edit Item"  id={id}  
          // onClick={handleListEdit}
          >
              <EditIcon/>  
          </IconButton>

  </>
  )
}

export default EditItem;