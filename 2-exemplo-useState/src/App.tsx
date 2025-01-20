import { useState } from "react";
import { Form } from "./components/Form";
import { ListaUsers, User } from './components/ListUsers';


export function App() {
  const [list, setList] = useState<User[]>([])

  function addUser({ id, nome, email }: User) {
    const user: User = { id, nome, email }

    setList((addList) => [...addList, user])
  }

  function removeUser(user_: User) { // filtrando osuarios
    setList((prev) => prev.filter((user) => user.id !== user_.id))
  }

  return (
    <>
      <Form handleUser={addUser} />
      <ListaUsers listUser={list} removeUser={removeUser} />

    </>
  )
}


