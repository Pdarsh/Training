import React from 'react'

const DomManipulation = () => {
    const addList = () => {
        const list = document.querySelector('ul')
        const liElement = document.createElement('li')
        liElement.setAttribute('id','new')
        liElement.append('1')
        list?.append(liElement)
    }

    const removeList = () => {
        const remElement = document.getElementById('new')
        remElement?.remove()

    }
  return (
    <div>
        <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>

        </ul>
        <button onClick={addList}>Add</button>
        <button onClick={removeList}>Remove</button>

    </div>
  )
}

export default DomManipulation