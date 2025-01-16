import { useState } from "react";


interface FormsProps {
    addTask: (task:string) => void;
}

export function Form({addTask}: FormsProps){
    const [task, setTask] = useState('')

    function handleForm(event:React.FormEvent):void{
        event.preventDefault()
        if(task.trim()){
            addTask(task)
            setTask('') // Limpa o campo de texto
        }
    }
    
    function handleTaks(event: React.FormEvent){
        const valueTask = event.target.value
        setTask(valueTask)
    }

    return(
        <>
            <form onSubmit={handleForm }>
                <input 
                    type="text" 
                    value={task}
                    onChange={handleTaks}
                    required
                    placeholder='Digite sua Tarefa...'/>
                <button type='submit'>Nova Tarefa</button>
            </form>
        </>
    )
}