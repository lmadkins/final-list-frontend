import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
// import ListsList from './ListsList'
// import CreateListForm from './CreateListForm'
import { ActiveListContext } from '../../contexts/ActiveListContext';
import { UserContext } from '../../contexts/UserContext';
// import EditIcon from '@mui/icons-material/Edit';
// import IconButton from '@mui/material/IconButton';

const EditList = ({id, name,  reloadLists, setReloadLists,}) => {
  // const [reload, setReload] = useState(false)
  const { activeList, setActiveList } = useContext(ActiveListContext)
  // const navigate = useNavigate()
  const [listChanges, setListChanges] = useState({
    name: '',
    details: ''
  });

  const handleChange = (event) => {
    setListChanges({ ...listChanges, [event.target.id]: event.target.value });
    // console.log(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
      axios.patch(`http://localhost:8000/lists/${id}`, listChanges)
      .then(() => {
        setReloadLists(true)
      })
    }
 
  return (
  <>  
   {/* // put some message here to display that it's been deleted */}
          {/* <IconButton edge="end" aria-label="editlist"  id={id}  
          // onClick={handleListEdit}
          >
              <EditIcon/>  
          </IconButton> */}

  </>
  )
}

export default EditList;