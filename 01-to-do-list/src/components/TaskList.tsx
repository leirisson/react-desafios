interface TaskList{
    tasks: string[]
}

export function TaskList({tasks}: TaskList){
    return(
        <ul>
            {
                tasks.map(task  => (
                    <li key={task}>{task}</li>
                ))
            }
        </ul>
    )
}