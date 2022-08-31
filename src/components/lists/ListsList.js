import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams, Route, Routes, useNavigate } from 'react-router-dom'
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import { ActiveListContext } from '../lists/Dashboard'
import EditIcon from '@mui/icons-material/Edit';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
// import Grid from '@mui/material/Grid';
import EditListForm from './EditListForm'

// import Typography from '@mui/material/Typography';
// import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import GradingIcon from '@mui/icons-material/Grading';

// export const ActiveListContext = createContext()

// component for each individual list in the Lists List
const ListsListing = ({ name, id, details, lists, list}) => {
  // let { id } = useParams()
  // SET STATE FOR CONTEXT
  const [activeList, setActiveList] = useState()


  function generate(element) {
    return [0].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  // const ItemIdContext = createContext()
  const [paramsId, setParamsId] = useState()
//  const { activeList, setActiveList } = useContext(ActiveListContext)

  const navigate = useNavigate()

  const handleClick = (event) => {
    setActiveList(event.target.id)
    setParamsId(event.target.id)
    console.log(paramsId)

    // navigate(`/items/${id}`)
    // navigate(`items/${id}`)
  }

    // const [dense, setDense] = (false);
    const [secondary, setSecondary] = useState(false);

  // console.log(name)
  return (
  <>
  
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
                  {/* <Link to= '/lists/items/:id'> <IconButton edge="end" aria-label="edit">
                      <EditIcon />
                      <EditListForm 
                        // id={id}
                        />
                  </IconButton></Link> */}
              
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