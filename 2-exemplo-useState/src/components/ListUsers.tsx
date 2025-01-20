

export interface User {
    id: string;
    nome: string;
    email: string;
}

export interface PropsListuser {
    listUser: User[];
    removeUser: (user: User) => void;
}



export function ListaUsers({ listUser, removeUser }: PropsListuser) {

    return (
        <>
            <ul>
                {
                    listUser.map((user: User) => (
                        <li key={user.id}>
                            <p>{user.nome} </p>
                            <p>{user.email} </p>
                            <button onClick={() => removeUser(user)}> Remover</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}