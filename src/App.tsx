import React, {useState, ChangeEvent} from 'react';
// import logo from './logo.svg';
import './App.css';
import {ITask} from "./interfaces/ITask";
import TodoTask from './components/TodoTask';

// function App() {
//   return (
//     <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
//       <p className="text-3xl text-gray-700 font-bold mb-5">
//  Welcome!
//       </p>
//       <p className="text-gray-500 text-lg">
//         React and Tailwind CSS in action
//       </p>
//     </div>
//   );
// }

// export default App;

const App:React.FC =()=>{
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{
    if(event.target.name === 'task') setTask(event.target.value);
    else setDeadLine(Number(event.target.value));
    console.log(event.target.value);
  }

  const addTask = ()=>{
    const newTask ={
      taskName:task,
      deadLine: deadLine,
    };

    setTodo([...todo, newTask]);
    setTask("");
    setDeadLine(0);
  }

  const completeTask = (taskNameToDelete:string)=>{
    setTodo(todo.filter((task)=>{
      return task.taskName !== taskNameToDelete
    }))
  }

  return (
  <div>
    <div>
      <div>
        <input type="text" name="task" placeholder="Add a task" onChange={handleChange} />
        <input type="number" name="deadline" placeholder="Set a deadline(in days)" value={deadLine} onChange={handleChange} />
      </div>
      <button onClick={addTask}>Add</button>
    </div>
    <div className="todoList">
      {todo.map((task:ITask, key:number)=>
        <TodoTask key={key} task={task} completeTask={completeTask} />
      )}
    </div>
  </div>);
}


export default App;