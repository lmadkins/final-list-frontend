// returning one specific item from the ItemsList
// Panel showing active list and its items
import React, { useContext, useEffect, useState} from 'react'
import axios from 'axios';
import { ActiveListContext } from '../../contexts/ActiveListContext';
import { UserContext } from '../../contexts/UserContext';
import Item from './Item';
import CreateItem from './CreateItem';

const ListItems = ({ items, setItems, itemsArr, activeList, activeListContext, reloadItems, setReloadItems}) => {
  // const { activeList, setActiveList } = useContext(ActiveListContext)

  const [selectedItem, setSelectedItem] = useState()

  useEffect(() => {
    axios.get(`http://localhost:8000/lists/items/${activeList}`)
    .then(res => setItems(res.data))
    console.log(`UseEffect in ListItems says the items of the active list are: ${items}`)
  }, [])

  const handleItemClick = (event) => {
    console.log(event.target.id)
    // setSelectedItem(event.target.id)
  }

  return (
  <>
  {/* <h2>Add an item: </h2>
    <CreateItem 
    activeList={activeList}
    reloadItems={reloadItems} 
    setReloadItems={setReloadItems}
  />
  <h2>{items.name}</h2>
  <h3>{items.details}</h3>
    <Item 
    activeList={activeList}
    itemsArr={items.items}
    reloadItems={reloadItems} 
    setReloadItems={setReloadItems}
    handleItemClick={handleItemClick}
    selectedItem={selectedItem}
    setSelectedItem(setSelectedItem)
    /> */}

   

  </>
  )
}

export default ListItems;


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
