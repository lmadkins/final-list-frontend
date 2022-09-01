import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
// import ListsList from './ListsList'
// import CreateListForm from './CreateListForm'
import { ActiveListContext } from '../../contexts/ActiveListContext';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';

const DeleteList = ({id, name}) => {
  
  const { activeList, setActiveList } = useContext(ActiveListContext)
const [deleted, setDeleted] = useState(false)
// const [reload, setReload] = useState(false)
const navigate = useNavigate()
  const handleListDelete = () => {
    axios.delete(`http://localhost:8000/lists/${id}`)
        .then(res => {
          navigate('/lists')
        
          setActiveList(null)
          // setDeleted(true)
          axios.get(`http://localhost:8000/lists/`)
        })	
};


// Delete popover
const [anchorEl, setAnchorEl] = useState(null);
const handleDeleteClick = (event) => {
  setAnchorEl(event.currentTarget);
  // setActiveList(event.target.id)
  // console.log(activeList)
};
const handleDeleteClose = () => {
  setAnchorEl(null);
};
const open = Boolean(anchorEl);
const popoverId = open ? 'simple-popover' : undefined;
// const [lists, setLists] = useState([])
// useEffect(() => {
//   axios.get(`http://localhost:8000/lists/`)
//   .then(res => setLists(res.data))
//   navigate('/lists')
// },[activeList])
 
  return (
  <>  
   {/* // put some message here to display that it's been deleted */}
   <Popover
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleDeleteClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 4 }}>Delete {name}<p></p>
          {/* <Stack direction="row" spacing={2}> */}
            <Button 
            variant="outlined" 
            startIcon={<DeleteIcon />}
            // onClick={handleDelete}
            >
            </Button>
          </Typography>
      </Popover>
      <IconButton edge="end" aria-label="delete list"  id={id}  onClick={handleListDelete}>
              <DeleteIcon/>  
          </IconButton>
  </>
  )
}

export default DeleteList;