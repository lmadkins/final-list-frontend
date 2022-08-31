import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';
import List from '@mui/material/List';
// import Grid from '@mui/material/Grid';

// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ListsListing from './ListsList'

import React, {  createContext , useState, useEffect } from 'react';
import CreateListForm from './CreateList'
import ItemsList from '../items/ItemsList';

// export const ActiveListContext = createContext()

const Dashboard = () => {
  const navigate = useNavigate()

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

    // SET STATE FOR CONTEXT
    const [activeList, setActiveList] = useState()


    const [listId, setListId] = useState([])

// FOR RENDERING LISTS LIST
const [lists, setLists] = useState([])
  
useEffect(() => {
  axios.get(`http://localhost:8000/lists/`)
  .then(res => setLists(res.data))
  // console.log(lists)
},[])

    // function generate(element) {
    //   return [0].map((value) =>
    //     React.cloneElement(element, {
    //       key: value,
    //     }),
    //   );
    // }

    const handleClick = (event) => {
      setListId(event.target.id)
      console.log(listId)
    navigate(`items/${listId}`)
    }


  return (
    <>
    
    <h2>Welcome to Final List, here are your lists:</h2>
    {/* <ActiveListContext.Provider value={{
    'activeList':  activeList, 'setActiveList': setActiveList}}> */}
   
    <Box>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <Item>
          <Paper>
            <List
                sx={{
                  width: '100%',
                  maxWidth: 450,
                  bgcolor: 'background.paper',
                  position: 'relative',
                  overflow: 'auto',
                  maxHeight: 500,
                  '& ul': { padding: 0 },
                }}
                >
              {lists.map((list, i) => (
                
              <ListsListing 
                key={i} 
                id={list._id} 
                name={list.name} 
                details={list.details}
                lists={lists}
              // listId={listId}
              />
              ))}
              
            </List>
            </Paper>
          </Item>
        </Grid>
        <Grid xs={7}>
          <Item>
            <ItemsList />
          </Item>
          </Grid>
          <Grid xs={3}>
          <Item>
            <CreateListForm
              // createList={createList}
              // setCreateList={setCreateList} 
              // handleCreateChange={handleCreateChange} 
              // handleCreateSubmit={handleCreateSubmit}
              />
          </Item>
          </Grid>
      </Grid>
    </Box>
      
   
    {/* </ActiveListContext.Provider> */}
    </> 
  );
};

export default Dashboard;