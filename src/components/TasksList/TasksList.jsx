import { useState } from "react";
import DoneTask from "../DoneTask/DoneTask";
import PendientTask from "../PendientTask/PendientTask";
import CustomCss from "./taskslist.module.css";

const TasksList = () => {
    const [tasksList, setTasksList] = useState([
        {
            id: 1,
            name: "Lavar los platos",
            done: false
        },
        {
            id: 2,
            name: "Barrer la cocina",
            done: false
        },
        {
            id: 3,
            name: "Cocinar",
            done: false
        }
    ]);

    function updateTask(id) {
        setTasksList(tasksList.map(task => 
            task.id === id ? { ...task, done: !task.done } : task
        ));
    }
    
    const doneTasks = tasksList.map((task) => {
        if(task.done === true){
            return(
                <>
                    <DoneTask key={task.id} {...task} updateTask={updateTask}/>
                </>
            )
        }
    })

    const pendientTasks = tasksList.map((task) => {
        if(task.done === false){
            return(
                <>
                    <PendientTask key={task.id} {...task} updateTask={updateTask}/>
                </>
            )
        }
    })

  return (
    <div className={CustomCss.container}>
        <div>
            <h1>Pendient Tasks</h1>
            <ul>
                {pendientTasks}
            </ul>
        </div>
        <div>
            <h1>Done Tasks</h1>
            <ul>
                {doneTasks}
            </ul>
        </div>
    </div>
  )
}

export default TasksList;