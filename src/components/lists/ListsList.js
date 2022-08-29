import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import ListsListing from "./ListsListing";
// Component for the list of a user's Lists
const ListsList = () => {
  const [lists, setLists] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:8000/lists')
      .then(res => setLists(res.data))
      // console.log(lists)
    },[lists])

    function generate(element) {
      return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
          key: value,
        }),
      );
    }

      // const [dense, setDense] = (false);
      // const [secondary, setSecondary] = useState(false);

  return (
  <> <h2>All of your lists:</h2>
   <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text and icon
          </Typography>
            <List>
              {generate(
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
                  <ListItemText
                    primary="Single-line item"
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
      
        </Grid>

      {/* {list.map((List) => (
        <ListsListing key={list._id} id={list._id} listName={list.listName} 
        list={list}/>
      ))} */}

  </>
  )
}

export default ListsList;