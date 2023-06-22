import React from 'react';
import { ITask } from "../interfaces/ITask";

interface Props{
    task:ITask;
    completeTask(taskNameToDelete:string):void;
}

const TodoTask = ({task, completeTask}:Props)=>{

    return (
        <div>
            <div>
                <span>{task.taskName}</span>
                <span>{task.deadLine}</span>
            </div>
            <button onClick={()=>{
                completeTask(task.taskName)
            }} >X</button>
        </div>
    )
}

export default TodoTask;