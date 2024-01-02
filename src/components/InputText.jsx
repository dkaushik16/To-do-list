import React from "react"
import { useState } from "react"

function InputText(props){

    const [input, setInput] = useState("")

    function handleChange(event){
        let inVal= event.target.value
        setInput(inVal)
    }

   return(
     <>
         <input
         type="text"
         placeholder="Add an item"
         onChange={handleChange}
         value= {input}
          />
          <button
             onClick={()=>{
                props.onclick(input)
                setInput("")  
                   }}
          >Add</button>
     </>

   )
     
}

export default InputText