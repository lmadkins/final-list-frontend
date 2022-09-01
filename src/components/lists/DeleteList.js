import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
// import ListsList from './ListsList'
// import CreateListForm from './CreateListForm'
import { ActiveListContext } from '../../contexts/ActiveListContext';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const DeleteList = ({id}) => {
  const { activeList, setActiveList } = useContext(ActiveListContext)
  const navigate = useNavigate()
  console.log()
  const handleListDelete = () => {
    axios.delete(`http://localhost:8000/lists/${id}`)
        .then(res => {
    // put some message here to display that it's been deleted?
            navigate('/lists');
            setActiveList(null)
        })	
};

 
  return (
  <>
          <IconButton edge="end" aria-label="delete list"  id={id}  onClick={handleListDelete}>
              <DeleteIcon/>  
          </IconButton>

  </>
  )
}

export default DeleteList;