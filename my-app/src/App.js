import "./App.css";
import Counter from "../src/Сounter"; // Исправлено название компонента
import Dropdown from "./Components/Dropdown"; // Убедитесь, что путь правильный
import ColorePicker from "Components/ColorPicker/ColorPicker";
import TodoList from "Components/TodoList";
import { Component } from "react";

class App extends Component {
  state = {
    todos: [{id: "id-1", text: "todo1", completed: false },
            {id: "id-2", text: "todo2", completed: false },
            {id: "id-3", text: "todo3", completed: false },
            {id: "id-4", text: "todo4", completed: true }
    ],
  };

  deleteTodo = (todoId)=>{
   
    this.setState((prevState) =>({
      todos: prevState.todos.filter(todo => todo.id !== todoId)
    }))
  }

  render() {
    const { todos } = this.state;
  
  const qountityActive = todos.reduce((acc,todo)=>(todo.completed? acc+1 : acc),0)  

    return (
      <div>
        <TodoList todos={todos} onDeleteTodo ={this.deleteTodo} todoActive = {qountityActive}/>
        <Counter initialValue={6} />
        <br />
        <Dropdown />
        <br />
        <ColorePicker
          options={[
            { label: "Red", color: "red" },
            { label: "Green", color: "green" },
            { label: "Blue", color: "blue" },
          ]}
        />
        
      </div>
    );
  }
}

export default App;
