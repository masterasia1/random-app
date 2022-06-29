import React from 'react'
import { useState } from 'react';


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
  



      
  return (
    <main>
       <ul>
        {items.map((item) => (
          <li className='item' key={item.id}>
            <input
              type='checkbox'
              checked={item.checked}
            />
            <label>
              {item.item}
            </label>
            <button>
              Delete
            </button>

          </li>
        ))}
       </ul>
    </main>
  )
}

export default Content