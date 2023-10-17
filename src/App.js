
import React, { useState } from 'react'
import InputFroms from './components/InputFroms'
import Todoitem from './components/Todoitem';

const App = () => {

  const [items,setItems] = useState([]);

  const addItems = (inputText)=>{
    setItems((prevItems)=>{
      return [...prevItems,inputText]
    })

  };
  

 const deleteItem = (id)=>{
  setItems((prevItems)=>{
    return prevItems.filter((item,index)=>{
      return index !== id
    })
  })
 }
  return (
    <div className='container'>
      <div className='heading'>
        <h1>TO DO LIST</h1>

      </div>
      <InputFroms addItems = {addItems}/>
      <div>
        <ul>
          {items.map((item,index)=>{
            return(
              <Todoitem  key={index} text={item} deleteItem={deleteItem} id={index}/>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App