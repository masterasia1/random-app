import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['mushy', 'bruce', 'asia', 'jim',];
        const int = Math.floor(Math.random() * 4);
        return names[int]
      }

      const handleClick = () => {
        console.log('click it good')
      }
      const handleClick2 = (name) => {
        console.log( `${name} is great` )
      }
      
  return (
    <main>
        <p>
        HI {handleNameChange ()}
        </p>
        <button onClick={handleClick}>Click</button>
        <button onClick={() => handleClick2 ('Asia')}>Click</button>
    </main>
  )
}

export default Content