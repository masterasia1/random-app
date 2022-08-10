import React from 'react'
import { useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa'

/* 
const handleNameChange = () => {
  const name = [asia, jim, mushy, bruce]
  const int = Math.floor(Math.random() * 4)
  return name[int]
} */
const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'cocoa beans'
    },

    {
      id: 2,
      checked: false,
      item: 'red beans'
    },

    {
      id: 3,
      checked: false,
      item: 'green beans'

    }
  ]);
  
const handleCheck = (id) => {
  const listItems = items.map((item) => item.id === id ? {...item, checked: !items.checked} : item)
  setItems(listItems);
  localStorage.setItem('shoppinglist', JSON.stringify(listItems))
}


      
  return (
    <main>
       <ul>
        {items.map((item) => (
          <li className='item' key={item.id}>
            <input
              type='checkbox'
              onChange={()=> handleCheck(item.id)}
              checked={item.checked}
            />
            <label  style={(item.checked) ? {}} onDoubleClick={()=> handleCheck(item.id)}>
             


              {item.item}
            </label>
            <FaTrashAlt 
               role='button' 
               tabIndex='0'
            />   
          </li>
        ))}
       </ul>
    </main>
  )
}

export default Content