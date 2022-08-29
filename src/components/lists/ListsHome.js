// import { useContext} from 'react'
// import { UserContext } from '../Home'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import ListsList from './ListsList'
import CreateListForm from './CreateListForm'
import EditListForm from './EditListForm'


// List central, with access to the list of lists, and list create link
const ListsHome = () => {

  // const { currentUser, setCurrentUser } = useContext(UserContext)

    return (
    <>
      <h2>Welcome to Final List, here are your lists:</h2>
      <Link to= '/lists/new'> Make a New List</Link><CreateListForm/>
      <Link to= '/lists/:id'> Edit List</Link>
      <EditListForm />

      <ListsList />

    </>
    )
}

export default ListsHome;