import React from 'react'
import { useState } from 'react';


/* 
const handleNameChange = () => {
  const name = [asia, jim, mushy, bruce]
  const int = Math.floor(Math.random() * 4)
  return name[int]
} */
const Content = () => {
  const [name, setName] = useState('Asia');
  const [count, setCount] = useState(0)


    const handleNameChange = () => {
        const names = ['mushy', 'bruce', 'asia', 'jim',];
        const int = Math.floor(Math.random() * 4);
        setName(names[int])
      }

      const handleClick = () => {
        setCount(count + 1)
        console.log(count)
      }
      const handleClick2 = (name) => {
        console.log( `${name} is great` )
      }
      
  return (
    <main>
        <p>
        HI {name}
        </p>
        <button onClick={handleNameChange}>Click</button>
        <button onClick={handleClick}>Click</button>
    </main>
  )
}

export default Content