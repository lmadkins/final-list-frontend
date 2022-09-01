
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";

import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
// returning one specific item from the ItemsList
const Item = ({items, itemsArr,  activeList, setActiveList, reloadItems, setReloadItems, handleItemClick, selectedItem, setSelectedItem}) => {

 
  // const { activeList, setActiveList } = useContext(ActiveListContext)
  // console.log(itemsArr)
  return (
    <div>
    {/* {itemsArr.map((item, i) => (
  
      <p key={i}>
      {item.name}
        <br></br>
      {item.details}
        <br></br>
      Priority: 
      {item.priority}
      

      <EditItem 
      id={item._id}
      listId={activeList}
      reloadItems={reloadItems} 
      setReloadItems={setReloadItems}
      handleItemClick={handleItemClick}
      selectedItem={selectedItem}
      setSelectedItem(setSelectedItem)
        />
      <DeleteItem 
      id={item._id}
      listId={activeList}
        reloadItems={reloadItems} 
        setReloadItems={setReloadItems}
        handleItemClick={handleItemClick}
      selectedItem={selectedItem}
      setSelectedItem(setSelectedItem)
        />
        </p>
      // { item.where ? (<p>>Get it at: {item.where}):null }
      
      ))} */}
  </div>
  )
}

export default Item;


//   const event = new Date(item.createdAt)

  // const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
//   Created on <span>{event.toLocaleDateString(undefined, options)}</span>


