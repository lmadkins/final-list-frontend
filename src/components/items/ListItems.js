// returning one specific item from the ItemsList
// Panel showing active list and its items
import React, { useContext, useEffect, useState} from 'react'
import axios from 'axios';
import { ActiveListContext } from '../../contexts/ActiveListContext';
import { UserContext } from '../../contexts/UserContext';
import Item from './Item';

const ListItems = ({ items, setItems, activeList, activeListContext}) => {
  // const { activeList, setActiveList } = useContext(ActiveListContext)
  console.log(activeList)

// const [items, setItems] = useState()

// useEffect(() => {
//   axios.get(`http://localhost:8000/lists/items/${activeList}`)
//   .then(res => setItems(res.data))
//   console.log(items)
// }, [])

  return (
  <>
  <h2>Hi from list items</h2>
  <h2>{items.name}</h2>
  <h3>{items.details}</h3>
  {/* 
   */}
    <Item 
    items={items}
    itemsArr={items.items}
    />
 {/* {itemsArr.map((items) => (
        <Item  key={items._id} 
        items={items}/>
       ))} */}


  </>
  )
}

export default ListItems;