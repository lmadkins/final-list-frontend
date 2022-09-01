import ItemEach from "./ItemEach";
// returning one specific item from the ItemsList
const Item = ({items, itemsArr,  activeList}) => {
  console.log(itemsArr)
  return (
  <>
    {itemsArr.map((item, i) => (
    
      <p key={i}>
      {item.name}
        <br></br>
      {item.details}
        <br></br>
      Priority: 
      {item.priority}
      </p>

      ))}
  </>
  )
}

export default Item;


//   const event = new Date(item.createdAt)

  // const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
//   Created on <span>{event.toLocaleDateString(undefined, options)}</span>


