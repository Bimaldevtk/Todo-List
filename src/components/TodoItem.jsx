import { useState } from "react"
import React from 'react'

function TodoItem (probs) {

  const [bool, setBool] = useState(false)



  const toggle = () =>{
    setBool(prevState => !prevState)

  }

  return (

   
  <div  >
  <li onClick={toggle}  style={{textDecoration: bool ? "line-through" : "none" , cursor:"pointer"}} >{probs.text}</li>
  </div>

  )
  
}

export default TodoItem
