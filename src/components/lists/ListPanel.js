// Panel showing active list and its items
import React, { useContext, useEffect, useState} from 'react'
import axios from 'axios';
import { ActiveListContext } from '../../contexts/ActiveListContext';
import ListItems from '../items/ListItems';

const ListPanel = () => {

    const { activeList, setActiveList } = useContext(ActiveListContext)
  // const listName = activeList.name
  const [items, setItems] = useState()
 console.log(activeList)



  useEffect(() => {
    axios.get(`http://localhost:8000/lists/items/${activeList}`)
    .then(res => setItems(res.data))

    console.log(items)
  }, [items])

  return (
    <>
    {/* {items} */}
    <ListItems 
        // id={items.id} 
        // name={items.name} 
        // details={items.details}
        items={items}
      />
  </>

  )
}

export default ListPanel;