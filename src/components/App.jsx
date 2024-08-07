import React, {useState} from "react";
import TodoItem from "./TodoItem";

function App() {

const [inputText, setInputText] = useState("")
const [items, setItems] = useState([])



function handleChange (e) {
  const newValue=e.target.value;
  setInputText(newValue);
}

function addItems () {
  setItems((prevItems) => {
    return [...prevItems, inputText]
    
  });
  setInputText("")
}
return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul> 
          {items.map(todoItem =>(
            <TodoItem
            text ={todoItem}
            
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
