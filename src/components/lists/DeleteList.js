import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
// import ListsList from './ListsList'
// import CreateListForm from './CreateListForm'
import { UserContext } from '../../contexts/UserContext';
import { ActiveListContext } from '../../contexts/ActiveListContext';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';

const DeleteList = ({id, name, setReloadItems, items, setItems}) => {
  

  const [deleted, setDeleted] = useState(false)

  const { activeList, setActiveList } = useContext(ActiveListContext)
  
  const [lists, setLists] = useState(null)
  
  

// console.log(id)
const navigate = useNavigate()
  const handleListDelete = () => {
    axios.delete(`http://localhost:8000/lists/${id}`)
        .then(res => {
          // navigate('/lists')
          // setReloadItems(true)
          setItems(null)
          setActiveList('')
          // setDeleted(true)
          // console.log('deleted')
          // axios.get(`http://localhost:8000/lists`)

        })	
};
// useEffect(() => {
//   axios.get(`http://localhost:8000/lists`)
//       .then(res =>
//           setLists(res.data))
// }, [deleted])

// Reload lists list
// useEffect(() => {
//   axios.get(`http://localhost:8000/lists`)
//   .then(res => setLists(res.data))
//   // console.log(createList)
// },[deleted])

  return (
  <>  
   <IconButton edge="end" aria-label="delete" id={id}
   name={name}
   onClick={handleListDelete}
  //  deleted={deleted}
  //  setDeleted={setDeleted}
   >
      <DeleteIcon  />  
    </IconButton> 
   {/* // put some message here to display that it's been deleted */}
    {/* <Stack direction="row" spacing={2}> */}
        {/* <Typography sx={{ p: 4 }}>Delete {name}<p></p>

            <Button 
            variant="outlined" 
            startIcon={<DeleteIcon />}
            onClick={handleListDelete}
            >
            </Button>
          </Typography> */}
      {/* <IconButton edge="end" aria-label="delete list"  id={id}  onClick={handleListDelete}>
              <DeleteIcon/>  
          </IconButton> */}
  </>
  )
}

export default DeleteList;