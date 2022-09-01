import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams, Route, Routes, useNavigate } from 'react-router-dom'
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import { ActiveListContext } from '../../contexts/ActiveListContext';
import { UserContext } from '../../contexts/UserContext';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GradingIcon from '@mui/icons-material/Grading';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
// import Grid from '@mui/material/Grid';
import EditListForm from './EditListForm'
import DeleteList from './DeleteList';
// import Typography from '@mui/material/Typography';
// import FolderIcon from '@mui/icons-material/Folder';


// export const ActiveListContext = createContext()

// component for each individual list in the Lists List
const ListsListing = ({ name, id, details,lists, list}) => {
  // const { currentUser, setCurrentUser } = useContext(UserContext)
  const { activeList, setActiveList } = useContext(ActiveListContext)
  // const [activeList, setActiveList] = useState()
// console.log(id)

  function generate(element) {
    return [0].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  // const ItemIdContext = createContext()
  // const [paramsId, setParamsId] = useState()

  const navigate = useNavigate()

  const handleClick = (event) => {
    // setActiveList(this.id)
 
    // console.log(event.target.id)
    // setParamsId(event.target.id)
    // console.log(paramsId)
  }
    // navigate(`/items/${id}`)
    // navigate(`items/${id}`)

  //   useEffect(() => {
  //     axios.get(`http://localhost:8000/album/${albumId}`)
  //         .then(res =>
  //             setAlbum(res.data))
  // }, [NotListedLocationOutlined])

  // button to delete the list
  const handleDelete = () => {
    axios.delete(`http://localhost:8000/lists/:id`)
        .then(res => {
    // put some message here to display that it's been deleted?
            navigate('/albums');
        })	
  };

  const handleListClick = (event) => {
    console.log(event.target.id)
    setActiveList(event.target.id)
    // console.log(activeList)
    // setParamsId(event.target.id)
    // console.log(paramsId)
  }


  return (
  <>
    {generate(
      <div onClick={handleListClick} id={id}>
        <ListItemButton  id={id}>
          <ListItemAvatar>
            <Avatar> <GradingIcon /> </Avatar>
          </ListItemAvatar>
        <ListItemText primary={name} secondary={details} />
        <ListItemText />
      
        <div>
          <IconButton edge="end" aria-label="edit"  id={id}>
            <EditIcon />
              <EditListForm id={id}/>
          </IconButton>
          <IconButton edge="end" aria-label="delete"  id={id}>
              <DeleteIcon id={id}/>  
          </IconButton>
          </div>    
        </ListItemButton>
      </div>
    )}
    <Divider />
  </>
  )
}

export default ListsListing;