import React, { useState } from 'react'

const InputFroms = (props) => {
    const [inputText,setInputText] = useState("");

    const handleChange = (event)=>{
        setInputText(event.target.value)


    }
  return (
    <div className='form'>
        <input type='text' onChange={handleChange} value={inputText}/>

        <button onClick={()=>{
            props.addItems(inputText);
            setInputText("");
        }}>
            <span>ADD</span>
        </button>

    </div>
  )
}

export default InputFroms