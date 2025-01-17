interface TaskList{
    tasks: string[]
}

export function TaskList({tasks}: TaskList){
    return(
        <ul>
            {
                tasks.map(task  => (
                    <li key={task}>{task} <input type="radio" /></li>
                ))
            }
        </ul>
    )
}