import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams, Route, Routes, useNavigate } from 'react-router-dom'
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import { ActiveListContext } from '../../contexts/ActiveListContext';
import { UserContext } from '../../contexts/UserContext';


import GradingIcon from '@mui/icons-material/Grading';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
// import Grid from '@mui/material/Grid';
import EditList from './EditList'
import DeleteList from './DeleteList';
// import Typography from '@mui/material/Typography';
// import FolderIcon from '@mui/icons-material/Folder';


// export const ActiveListContext = createContext()

// component for each individual list in the Lists List

const ListsListing = ({ props, name, id, details, handleClick, lists, list}) => {
  // const { currentUser, setCurrentUser } = useContext(UserContext)
  const { activeList, setActiveList } = useContext(ActiveListContext)
  // const [activeList, setActiveList] = useState()
// console.log(id)

// const navigate = useNavigate()
  function generate(element) {
    return [0].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  const handleListClick = (event) => {
    
    setActiveList(event.target.id)
    // console.log(activeList)

  }



  return (
  <>
    {generate(
      <>
      <ul>
        <li onClick={handleListClick} id={id}>{name}</li>
      </ul>
      <span 
      onClick={handleListClick}
        id={id}>
        <ListItemButton  id={id}>
          <ListItemAvatar 
          onClick={handleListClick}
          >
            <Avatar> <GradingIcon /> </Avatar>
          </ListItemAvatar>
        <ListItemText primary={name} secondary={details} 
        onClick={handleListClick}
        />
        <ListItemText />
        

            
        </ListItemButton>
          </span>    
          <IconButton edge="end" aria-label="edit"  id={id} 
          onClick={handleListClick}
          >
            <EditList id={id} name={name}/>
        </IconButton>
        <IconButton edge="end" aria-label="delete"  id={id}>
          <DeleteList  id={id} name={name}/>  
        </IconButton> 
      
      <Divider />
      </>
    )}
    
  </>
  )
}

export default ListsListing;

// const ItemIdContext = createContext()
  // const [paramsId, setParamsId] = useState()

  // const handleClick = (event) => {
  //   // setActiveList(this.id)
 
  //   // console.log(event.target.id)
  //   // setParamsId(event.target.id)
  //   // console.log(paramsId)
  // }
    // navigate(`/items/${id}`)
    // navigate(`items/${id}`)

  //   useEffect(() => {
  //     axios.get(`http://localhost:8000/album/${albumId}`)
  //         .then(res =>
  //             setAlbum(res.data))
  // }, [NotListedLocationOutlined])

  // // button to delete the list
  // const handleDelete = () => {
  //   axios.delete(`http://localhost:8000/lists/:id`)
  //       .then(res => {
  //   // put some message here to display that it's been deleted?
  //           navigate('/lists');
  //       })	
  // };
