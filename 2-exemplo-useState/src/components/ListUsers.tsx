import { useState } from "react";

export interface User {
    id: string;
    nome: string;
    email:string;
}

export interface Listuser {
    listUSers: User[]
}



export function ListaUsers({handleList}: { handleList: () => User[] }){
    const [users, setUsers] = useState<User[]>([])

    setUsers(handleList())
    return(
        <>
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}> {user.nome} </li>
                    ))
                }
            </ul>
        </>
    )
}