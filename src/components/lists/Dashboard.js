// import { useNavigate, } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { ActiveListContext } from '../../contexts/ActiveListContext';
import { styled } from '@mui/material/styles';

import axios from 'axios'

// import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
// list of lists
import ListsListing from './ListsListing'
import ListItems from '../items/ListItems';
import List from '@mui/material/List';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  // Setting state for ActiveList context
  const [activeList, setActiveList] = useState(false)
  const [listSelected, setListSelected] = useState(false)
  
// Reload for actions to do a new get request to refresh lists after a change. Imported into ListsListing, EditList, DeleteList, CreateList
  const [reloadLists, setReloadLists] = useState(false)

  // CREATE LIST FORM 
  const initialCreateState = { name: '',  details: '' }
  const [createList, setCreateList] = useState(initialCreateState);

  const handleCreateChange = (event) => {
    setCreateList({...createList, [event.target.id]: event.target.value})
  }
  const handleCreateSubmit = (event) => {
      event.preventDefault()
      // if (createList.name !== '' && createList.details !== '')
        axios.post('https://localhost:8000/lists/new', createList)
          // axios.post('https://radiant-sierra-50882.herokuapp.com/lists/new', createList)
          .then(res => {
            setCreateList(initialCreateState)
            // navigate('/lists')
            setReloadLists(true)
          })
    }  
  
    // FOR RENDERING LISTS LIST
  const [lists, setLists] = useState([])
  const handleClick = (event) => {
    listSelected(true)
    setActiveList(event.target.id)
    // console.log(`Handleclick in Dashboard: New active list is: ${activeList}`)
  }


// Reload lists list
  useEffect(() => {
    axios.get(`https://localhost:8000/lists/`)
    // axios.get(`https://radiant-sierra-50882.herokuapp.com/lists/`)
    .then(res => setLists(res.data))
    // console.log(createList)
  },[reloadLists, createList])

  // Edit modal controls    
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };


  return (
    <>
    <ActiveListContext.Provider 
          value={{ activeList, setActiveList, listSelected, setListSelected }}> 
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={3}>
        <Grid item xs={6}>
          <Item>
          <h2>Your Lists</h2>
            <List
                sx={{
                    // maxWidth: 450,
                  width: '100%',
                  bgcolor: 'background.paper',
                  position: 'relative',
                  overflow: 'auto',
                  maxHeight: 500,
                  '& ul': { padding: 0 },}}>
                {/* Listing of each individual list, and the icon links to edit and delete  */}
                {lists.map((list, i) => (
                  <ListsListing 
                    key={i} 
                    id={list._id} 
                    name={list.name} 
                    details={list.details}
                    lists={lists}
                    // onClick={handleClick}
                    // activeList = {activeList}
                    // setActiveList = {setActiveList}
                    reloadLists={reloadLists}
                    setReloadLists={setReloadLists}
                  />))}
              
              </List>
              <Button variant="contained" 
              onClick={handleClickOpen}
              startIcon={<PlaylistAddIcon/>}>
              Create New List 
            </Button>
      <Dialog 
        onClose={handleClose}
        open={open}
        component="form"
        noValidate
        autoComplete="off" 
        onSubmit={handleCreateSubmit}
        >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute', right: 8, top: 8,
            color: (theme) => theme.palette.grey[500],}}>
          <CloseIcon />
        </IconButton>
        <DialogTitle>Create List</DialogTitle>
        <DialogContent onChange={handleCreateChange}>
          <DialogContentText>
            {/* To subscribe to this website, please enter your email address here. We
            will send updates occasionally. */}
          </DialogContentText>
          <br></br>
          <TextField 
            id="name" 
            label="List Name" 
            variant="outlined" 
            required='true'
            onChange={handleCreateChange}
            value={createList.name}/>
          <TextField
            id="details"
            label="List Description"
            placeholder="Description"
            multiline
            required='true'
            onChange={handleCreateChange}
            value={createList.details}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleCreateSubmit}>
            Create List</Button>
        </DialogActions>
      </Dialog>
          </Item>
        </Grid>


      <Grid item xs={6}>
        <Item>
        {/* Each item in the selected list, plus links to edit and delete */}
          <ListItems 
          // items={items}
          // itemsArr={items.items}
          // setItems={setItems}
          // activeList = {activeList}
          // setActiveList = {setActiveList}
        />
  
        </Item>
      </Grid>

    {/* <Grid item xs={3}>

      <Item>   
  
      </Item>
    
    </Grid> */}

    </Grid>
  </Box>
  </ActiveListContext.Provider>
  </>
  )
};

export default Dashboard;
