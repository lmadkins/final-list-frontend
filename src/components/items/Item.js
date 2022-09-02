import { useEffect } from 'react'
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";
import axios from "axios";
// import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';
import { Chip } from '@mui/material';
// import { MdSettings } from 'react-icons/md'
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
// Editable from CHakra:
// import { EditablePreview, Box, useColorModeValue, Input, useDisclosure, useEditableControls, ButtonGroup, SlideFade, Editable, Tooltip, EditableInput } from "@chakra-ui/react";
// import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
// import { Icon } from '@chakra-ui/react'
// import { Flex, Spacer } from '@chakra-ui/react'
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
// import CloseIcon from '@mui/icons-material/Close';
// import DoneIcon from '@mui/icons-material/Done';


// returning one specific item from the ItemsList
const Item = ({items, setItems, itemsArr,  activeList, setActiveList, reloadItems, setReloadItems, handleItemClick, selectedItem, setSelectedItem}) => {

  // function EditableControls() {
  //   const {
  //     isEditing,
  //     getSubmitButtonProps,
  //     getCancelButtonProps,
  //     getEditButtonProps,
  //   } = useEditableControls()

  //   return isEditing ? (
  //     <ButtonGroup justifyContent='center' size='sm'>
  //       <IconButton edge="end" aria-label="Done Editing">
  //         <DoneIcon {...getSubmitButtonProps()} />
  //       </IconButton>
  //       <IconButton edge="end" aria-label="Done Editing">
  //         <CloseIcon  {...getCancelButtonProps()} />
  //       </IconButton>
  //     </ButtonGroup>
  //   ) : (
  //     <Flex justifyContent='center'>
  //       {/* <IconButton size='sm' icon={<Icon as={EditIcon} />} {...getEditButtonProps()} /> */}
  //       <IconButton edge="end" aria-label="Edit Item"  
  //         // onClick={handleListEdit}
  //         >
            
  //             <EditIcon {...getEditButtonProps()} />  
  //         </IconButton>
  //     </Flex>
  //   )
  // }

  useEffect(() => {
    activeList !== 'undefined' && 
    axios.get(`http://localhost:8000/lists/items/${activeList}`)
    .then(res => setItems(res.data))
    // console.log(`UseEffect in ListItems says the items of the active list are: ${items}`)
    // setReloadItems(true)
  },  [reloadItems])


  return (
    <>
    {/* <Editable
    //  // defaultValue={item.name}
    //     isPreviewFocusable={true}
    //     selectAllOnFocus={false}
    //   >
    //     <Input py={2} px={4} as={EditableInput} />
    //     <EditableControls />
    //   </Editable> */}


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
    
      
      )) }
      
      </>
  )
}

export default Item;
// 
  // { item.where ? (<p>>Get it at: {item.where}):null }

//   const event = new Date(item.createdAt)

  // const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
//   Created on <span>{event.toLocaleDateString(undefined, options)}</span>


