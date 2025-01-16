import { useState } from "react";
import { Form } from "./components/Form";
import { TaskList } from "./components/TaskList";


export function App() {
  const [tasks,setTask] = useState<string[]>([])

  function addTask(newTask: string){
    setTask([...tasks, newTask]);
  }

  return (
    <>
      <Form addTask={addTask}/>
      <TaskList tasks={tasks}/>
    </>
  )
}


