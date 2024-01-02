import React from "react";
import { useState } from "react";

 function ItemList(props){

    const [isclick, setIsclick]= useState(false)
     
    function changeDec(){
        setIsclick(prev => (!prev))
        console.log("clicked")
    }
    return(
     <li onClick={changeDec}
           style={{textDecoration: isclick ? "line-through": "none"}} 
            >{props.input}</li>
    )
     
 }

 export default ItemList