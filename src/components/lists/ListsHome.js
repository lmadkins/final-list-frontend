// import { useContext, useEffect, useState } from 'react'
// import axios from 'axios'
import ListsList from './ListsList'
import CreateListForm from './CreateListForm'

// List central, with access to the list of lists, and list create link
const ListsHome = () => {

  // const { currentUser, setCurrentUser } = useContext(UserContext)

    return (
    <>
      <ListsList />
      <CreateListForm/>
    </>
    )
}

export default ListsHome;