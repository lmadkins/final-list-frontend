import { useContext, useState } from 'react'
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

const DeleteList = ({id, name, setDeleted}) => {
  
  const { activeList, setActiveList } = useContext(ActiveListContext)



// const navigate = useNavigate()
  const handleListDelete = () => {
    axios.delete(`https://final-list.herokuapp.com/lists/${id}`)
        .then(res => {
          // navigate('/lists')
          // setReloadLists(true)
          setActiveList(false)
          setDeleted(true)
          axios.get(`https://final-list.herokuapp.com/lists`)
        })	
};

  return (
  <>  
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
      <IconButton edge="end" aria-label="delete list"  id={id}  onClick={handleListDelete}>
              <DeleteIcon/>  
          </IconButton>
  </>
  )
}

export default DeleteList;