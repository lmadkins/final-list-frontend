import react, { useEffect } from 'react'
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";
import axios from "axios";
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import { Chip } from '@mui/material';
// returning one specific item from the ItemsList
const Item = ({items, setItems, itemsArr,  activeList, setActiveList, reloadItems, setReloadItems, handleItemClick, selectedItem, setSelectedItem}) => {

  useEffect(() => {
    axios.get(`http://localhost:8000/lists/items/${activeList}`)
    .then(res => setItems(res.data))
    // console.log(`UseEffect in ListItems says the items of the active list are: ${items}`)
    // setReloadItems(true)
  },  [reloadItems])

  // const { activeList, setActiveList } = useContext(ActiveListContext)
  // console.log(itemsArr)
  return (
    <div>
    {itemsArr.map((item, i) => (
  
      <p key={i}>
      {item.name}
        <br></br>
      {item.details}
        <br></br>
      Priority: 
 {item.priority === 'high' && 
      <Chip color="error" label='High' />}
      {item.priority === 'medium' && 
      <Chip color="warning" label='Medium' />}
     {item.priority === 'low' && 
      <Chip color="info" label='Low' />}

      <EditItem 
      id={item._id}
      listId={activeList}
      reloadItems={reloadItems} 
      setReloadItems={setReloadItems}
      handleItemClick={handleItemClick}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
        />
      <DeleteItem 
      id={item._id}
      listId={activeList}
        reloadItems={reloadItems} 
        setReloadItems={setReloadItems}
        handleItemClick={handleItemClick}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
        />
        </p>
    
      
      ))}
  </div>
  )
}

export default Item;
  // { item.where ? (<p>>Get it at: {item.where}):null }

//   const event = new Date(item.createdAt)

  // const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
//   Created on <span>{event.toLocaleDateString(undefined, options)}</span>


