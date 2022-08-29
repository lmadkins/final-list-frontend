import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListsListing from "./ListsListing";
// Component for the list of a user's Lists
const ListsList = () => {
  const [lists, setLists] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:8000/lists')
      .then(res => setLists(res.data))
      console.log(lists)
    },[lists])

  return (
  <> <h2>All of your lists:</h2>
  
      {/* {list.map((List) => (
        <ListsListing key={list._id} id={list._id} listName={list.listName} 
        list={list}/>
      ))} */}

  </>
  )
}

export default ListsList;