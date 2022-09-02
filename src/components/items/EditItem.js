import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
// import ListsList from './ListsList'
// import CreateListForm from './CreateListForm'
import { ActiveListContext } from '../../contexts/ActiveListContext';
// import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// PATCH (update)
//  /lists/items/:listId/:id

const EditItem = ({id, name,  reloadItems, setReloadItems,  handleItemClick, selectedItem, setSelectedItem, open, handleClose, handleClickOpen}) => {
  // const [reload, setReload] = useState(false)
  // const { activeList, setActiveList } = useContext(ActiveListContext)
  // const navigate = useNavigate()

  const initialFormState = { name: '',  details: '', priority: '', }

  const [itemChanges, setItemChanges] = useState(initialFormState);

  const handleItemChange = (event) => {
    setItemChanges({ ...itemChanges, [event.target.id]: event.target.value });
    // console.log(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
      axios.patch(`https://radiant-sierra-50882.herokuapp.com/lists/${id}`, itemChanges)
      .then(() => {
        setReloadItems(true)
      })
    }

  return (
  <>  
   {/* // put some message here to display that it's been deleted */}
          
          <Dialog open={open} onClose={handleClose}
        component="form"
      //  sx={{
      //    '& .MuiTextField-root': { s:1, width: '30ch' },}}
        noValidate
        autoComplete="off" 
        onSubmit={handleSubmit}
        >
      <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle>Edit Item: {name}</DialogTitle>
        <DialogContent
        onChange={handleItemChange}
        >
          <DialogContentText>
            {/* To subscribe to this website, please enter your email address here. We
            will send updates occasionally. */}
          </DialogContentText>
          <br></br>
          <TextField
            // autoFocus
            // margin="dense"
            // id="name"
            id="outlined-basic" 
            // label="Outlined" 
            variant="outlined"
            label= "Item Name"
            margin="dense"
            // type="text"
            fullWidth
            value={itemChanges.name}
            // variant="standard"
            // onChange={handleListChange}
          />
          <p></p>
          <TextField
            
            id="outlined-basic"
            label="Description"
            margin="dense"
            fullWidth
            // multiline
            // rows={2}
            // type="text"
            variant="outlined"
            // fullWidth
            // defaultValue="New List Description"
            value={itemChanges.details}
            // onChange={handleListChange}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save Changes</Button>
        </DialogActions>
      </Dialog>

  </>
  )
}

export default EditItem;