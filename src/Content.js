import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['mushy', 'bruce', 'asia', 'jim',];
        const int = Math.floor(Math.random() * 4);
        return names[int]
      }
      
  return (
    <main>
        <p>
        HI {handleNameChange ()}
        </p>
    </main>
  )
}

export default Content