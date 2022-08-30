import { useState, useEffect } from 'react';

import {useContext} from 'react';
import { ActiveListContext } from '../lists/ListsList'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
// import Stack from '@mui/material/Stack';
// import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// returning one specific list and its items
// localhost:3000/lists/items/:id (listId)
const ItemsList = ({listId, id}) => {
  const navigate = useNavigate()
  // let { id } = useParams()

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(listContext)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const popoverId = open ? 'simple-popover' : undefined;
  
  const listContext = useContext(ActiveListContext);
  // const [list, setList] = useState([])
  const [items, setItems] = useState([id])

  useEffect(() => {
    axios.get(`http://localhost:8000/lists/items/${id}`)
    .then(res => setItems(res.data))
      // console.log(items)
  },[items])

  const handleDelete = () => {
    //  /lists/:id
    axios.delete(`http://localhost:8000/lists/${id}`)
        .then(res => {
    // put some message here to display that it's been deleted?
            navigate('/lists/all');
        })	
};

  return (
  <>
  <h2>Hi from ItemsList</h2>
  
<div><IconButton aria-label="delete" size="large" aria-describedby={popoverId} variant="contained" onClick={handleClick}>
  <DeleteIcon />
</IconButton>
      <Popover
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 4 }}>Delete this list?<p></p>
          {/* <Stack direction="row" spacing={2}> */}
            <Button 
            variant="outlined" 
            startIcon={<DeleteIcon />}
            onClick={handleDelete}>
              Delete
            </Button>
            {/* <Button variant="contained">
              Nevermind
            </Button> */}
        {/* </Stack> */}
      </Typography>
      </Popover>
    </div>
  </>
  )
}

export default ItemsList;