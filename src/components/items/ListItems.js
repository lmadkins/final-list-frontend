// returning one specific item from the ItemsList
// Panel showing active list and its items
import React, { useContext, useEffect, useState} from 'react'
import axios from 'axios';
import { ActiveListContext } from '../../contexts/ActiveListContext';
import { UserContext } from '../../contexts/UserContext';

const ListItems = ({items, activeList, activeListContext}) => {
  // const { activeList, setActiveList } = useContext(ActiveListContext)
  // console.log(items)
  return (
  <>
  <h2>Hi from list items</h2>
  <h2>{items.name}</h2>
  <h3>{items.details}</h3>
  {/* <h5>{items.items[0]}</h5> */}


  </>
  )
}

export default ListItems;