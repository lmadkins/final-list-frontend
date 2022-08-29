import React, { useEffect, useState } from 'react';
// import {useContext} from 'react';
import axios from 'axios';
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

import ListsListing from "./ListsListing";
// import { UserContext } from '../Home'

// Component for the list of a user's Lists
const ListsList = () => {
  // const { currentUser, setCurrentUser } = useContext(UserContext)
  // console.log(currentUser.email)
  const [lists, setLists] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:8000/lists/all')
      .then(res => setLists(res.data))
      // console.log(...lists)
    },[lists])

    function generate(element) {
      return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
          key: value,
        }),
      );
    }

      // const [dense, setDense] = (false);
      const [secondary, setSecondary] = useState(false);

  return (
    <> 
      <h2>All of your lists:

      {/* {lists.map((List) => (
          <ListsListing key={lists._id} id={lists._id} name={lists.name} 
          lists={lists}/>
          ))} */}
      </h2>
 {/* <listViewer list={list} show={modalShow} onHide={() => setModalShow(false)} deletelist={deletelist}/> */}
      

      <Grid item xs={12} md={2}>
          <List>
          {lists.map((list, i) => (
          <ListsListing key={i} id={list._id} name={list.name} details={list.details}
          lists={lists}/>
          ))}
            {/* {generate(
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                {lists.map((list, i) => (
                <ListItemText
                    primary={list.name}
                    secondary={list.details}
                  />
                  ))}
                <ListItemText />
                 
                  <div >
        
                    {/* <ListsListing list={list} lists={lists} key={i} /> */}
                  {/* </div>    
                */}
        
              {/* </ListItem> */}
            
          </List>
      </Grid>
    </>
  )
}

export default ListsList;