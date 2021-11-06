import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { Checkbox } from "@material-ui/core";



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function App() {

  const [value,setValue] = useState("");
  const [todos,setTodo] = useState([]);

  const onChange = (e)=> {
    let key = todos.length;
    setValue({
      id: key,
      context: e.target.value
    });
  }       

  const onSubmit = (e) => {
    
    e.preventDefault()
    setTodo(()=> [value,...todos] )
    setValue("")  
  }

  const onRemove = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }
  useEffect(()=>{

  },[])
  return (
    <div className="App">
      <h1>CheckBox</h1>
      <div>
      <form onSubmit={onSubmit}>
      <input onChange={onChange} value={value.context} placeholder="write a todo"/>
      </form>
      <ul>
      {todos.map((todo,index)=>(
      <li key={index}>{todo.context}
      <Checkbox {...label} />
      <button>삭제</button>
      </li>
      
      ))}
      </ul>
      </div>
      {/* <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
   */}
    </div>
  );
}

export default App;
