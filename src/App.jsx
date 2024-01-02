import { useState } from 'react'
import ItemList from './components/ItemList'
import InputText from './components/InputText'
import './index.css'

function App() {

  const [item, setItem ]= useState([])

   function handleClick(input){
       setItem((prev)=>{
          return [...prev,input]
       })
   }

  return (
  <div className="container">
    <h1>To DO List</h1>
    <div className="form">
       <InputText
         onclick= {handleClick}
           />
    </div>
    <div className="list">
       <ul>
            {item.map((itr)=>{
               return(
                 <ItemList
                   input={itr}
                />
               )
            })}
       </ul>
    </div>
     
  </div>
  )
}

export default App
