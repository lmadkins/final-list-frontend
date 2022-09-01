// returning one specific item from the ItemsList
// Panel showing active list and its items
import React, { useContext, useEffect, useState} from 'react'
import axios from 'axios';
import { ActiveListContext } from '../../contexts/ActiveListContext';
import { UserContext } from '../../contexts/UserContext';
import Item from './Item';
import CreateItem from './CreateItem';

const ListItems = ({ items, setItems, itemsArr, activeList, activeListContext}) => {
  // const { activeList, setActiveList } = useContext(ActiveListContext)
  console.log(itemsArr)

// const [items, setItems] = useState()

// useEffect(() => {
//   axios.get(`http://localhost:8000/lists/items/${activeList}`)
//   .then(res => setItems(res.data))
//   console.log(items)
// }, [])

  return (
  <>
  <h2>Add an item: </h2>
  <CreateItem 
  activeList={activeList}
  />
  <h2>{items.name}</h2>
  <h3>{items.details}</h3>
    <Item 
    activeList={activeList}
    itemsArr={items.items}
    />

    {/* {items.map((item, i) => (
    
      <p key={i}>
      {item.name}
        <br></br>
      {item.details}
        <br></br>
      Priority: 
      {item.priority}
      </p>

      ))} */}


    {/* // items={items}
    // itemsArr={items.items} */}
   
 {/* {itemsArr.map((items) => (
        <Item  key={items._id} 
        items={items}/>
       ))} */}


  </>
  )
}

export default ListItems;