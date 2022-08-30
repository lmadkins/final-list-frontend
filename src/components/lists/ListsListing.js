import React, { useEffect, useState, createContext } from 'react';
import { Link, useParams, Route, Routes, useNavigate } from 'react-router-dom'
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import EditIcon from '@mui/icons-material/Edit';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
// import Grid from '@mui/material/Grid';
import EditListForm from './EditListForm'
import ItemsList from '../items/ItemsList';
// import Typography from '@mui/material/Typography';
// import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import GradingIcon from '@mui/icons-material/Grading';

export const ActiveListContext = createContext()

// component for each individual list in the Lists List
const ListsListing = ({ name, id, details, lists, list}) => {

  // SET STATE FOR CONTEXT
  // const [activeList, setActiveList] = useState()


  function generate(element) {
    return [0].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  // const ItemIdContext = createContext()
  const [activeListId, setActiveListId] = useState({
    listId: ''
  })
 // const { currentUser, setCurrentUser } = useContext(UserContext)

  const navigate = useNavigate()

  const handleClick = (event) => {
    setActiveListId(event.target.id)
    // console.log(activeListId)
    navigate(`items/${id}`)
  }

    // const [dense, setDense] = (false);
    const [secondary, setSecondary] = useState(false);

  // console.log(name)
  return (
  <>
  <ActiveListContext.Provider value={{
    'activeListId':  activeListId, 'setActiveListId': setActiveListId}}>
  <Routes>
        <Route path = '/lists/items/:listId' element={<ItemsList/>} />
    </Routes>
  </ActiveListContext.Provider>
    {/* <p>{list.name}</p> */}
    {generate(
            <div
            
                >
              <ListItemButton
                onClick={handleClick}
                id={id}
                // listId={listId}

              >
                <ListItemAvatar>
                  <Avatar>
                    <GradingIcon />
                  </Avatar>
                </ListItemAvatar>
                {/* Link to using id */}
                <ListItemText
                //  key={i}
                    primary={name}
                    secondary={details}
                  />
                
                <ListItemText />
            
                  <div >
                  <Link to= '/lists/items/:id'> <IconButton edge="end" aria-label="edit">
                      <EditIcon />
                      <EditListForm 
                        // id={listId}
                        />
                  </IconButton></Link>
              
                    {/* <ListsListing list={list} lists={lists} key={i} /> */}
                  </div>    
              </ListItemButton>
              </div>
            )}
              <Divider />
  </>
  )
}

export default ListsListing;