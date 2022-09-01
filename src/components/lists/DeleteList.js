import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
// import ListsList from './ListsList'
// import CreateListForm from './CreateListForm'
import { ActiveListContext } from '../../contexts/ActiveListContext';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const DeleteList = ({id, name}) => {
  const { activeList, setActiveList } = useContext(ActiveListContext)
const [deleted, setDeleted] = useState(false)
// const [reload, setReload] = useState(false)
const navigate = useNavigate()
  const handleListDelete = () => {
    axios.delete(`http://localhost:8000/lists/${id}`)
        .then(res => {
          navigate('/lists')
        
          setActiveList(null)
          // setDeleted(true)
          axios.get(`http://localhost:8000/lists/`)
        })	
};
// const [lists, setLists] = useState([])
// useEffect(() => {
//   axios.get(`http://localhost:8000/lists/`)
//   .then(res => setLists(res.data))
//   navigate('/lists')
// },[activeList])
 
  return (
  <>  
   {/* // put some message here to display that it's been deleted */}
          <IconButton edge="end" aria-label="delete list"  id={id}  onClick={handleListDelete}>
              <DeleteIcon/>  
          </IconButton>
  </>
  )
}

export default DeleteList;