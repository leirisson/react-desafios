import { useState } from "react";
import { Form } from "./components/Form";
import { ListaUsers } from "./components/ListUsers";
import { User } from './components/ListUsers';

export function App() {



  const [list, setList] = useState<User[]>([])

  function handleUser({id, nome, email}: User){
    const new_user: User = {id, nome, email}

    setList(prevUser => [...prevUser, new_user])
    
    console.log(list)
  }  


  return (
    <>
     <Form handleUser={handleUser}/>


    </>
  )
}


