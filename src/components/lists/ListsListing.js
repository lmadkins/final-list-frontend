import React, { useEffect, useState } from 'react';
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
// component for each individual list in the Lists List
const ListsListing = ({ name, id, details, lists, list}) => {
  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

    // const [dense, setDense] = (false);
    const [secondary, setSecondary] = useState(false);

  // console.log(name)
  return (
  <>
    {/* <p>{list.name}</p> */}
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
                //  key={i}
                    primary={name}
                    secondary={details}
                  />
                
                <ListItemText />
            
                  <div >
        
                    {/* <ListsListing list={list} lists={lists} key={i} /> */}
                  </div>    
              </ListItem>
            )}
              
  </>
  )
}

export default ListsListing;