import React, { useState, useContext } from 'react';
import { ActiveListContext } from '../../contexts/ActiveListContext';
// import { UserContext } from '../../contexts/UserContext';
import GradingIcon from '@mui/icons-material/Grading';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import DeleteList from './DeleteList';

const ListsListing = ({ props, name, id, details, handleClick, lists, list, deleted, setDeleted, reloadLists, setReloadLists}) => {
  // const { currentUser, setCurrentUser } = useContext(UserContext)
  const { activeList, setActiveList, listSelected, setListSelected } = useContext(ActiveListContext)
  // const [activeList, setActiveList] = useState()

  function generate(element) {
    return [0].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  const handleListClick = (event) => {
    setListSelected(true)
    setActiveList(event.target.id)
  }

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
  <>
    {generate(
      <>
      <List dense={dense}
          id={id}
          onClick={handleListClick}>
            {generate(
              <ListItem
                onClick={handleListClick}
                secondaryAction={
                  <>
                    <IconButton edge="end" aria-label="delete" id={id}>
                      <DeleteList  
                        id={id} name={name}
                        deleted={deleted}
                        setDeleted={setDeleted}
                      />  
                    </IconButton> 
                  </>
                }>
                <ListItemButton  id={id}
                onClick={handleListClick}>
                <ListItemAvatar>
                  <Avatar>
                  <GradingIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={name}
                  secondary={details}
                />
                </ListItemButton>
              </ListItem>
            )}
        </List>
      <Divider />
      </>
    )}
  </>
  )
};

export default ListsListing;
