import { useState, FormEvent, Change } from 'react';
import uuid4 from "uuid4";

import { IContato } from '../interfaces/IContato';

interface PropsForms{
  addContato: (contato: IContato)=>void;
}

export function FormContatos({addContato}:PropsForms) {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  function handleForm(event: FormEvent) {
    event.preventDefault()

    const novo_contato = {
      id: uuid4(),
      nome,
      telefone,
      email
    }

    addContato(novo_contato)

    setNome('')
    setTelefone('')
    setEmail('')


  }

  function handleNome(event: Change) {
    setNome(event.target.value)
  }

  function handleTelefone(event: Change) {
    setTelefone(event.target.value)
  }

  function handleEmail(event: Change){
    setEmail(event.target.value)
  }



  return (
    <>

      <form onSubmit={handleForm}>
        <label>Nome:
          <input type="text"
            required
            name="nome"
            id="nome"
            value={nome}
            onChange={handleNome}
          />
        </label>
        <label>Telefone:
          <input type="text"
            required
            name="telefone"
            id="telefone"
            value={telefone}
            onChange={handleTelefone}
          />
        </label>
        <label>E-mail:
          <input type="email"
            required
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
          />
        </label>

        <button type="submit">Adicionar</button>
      </form>
    </>
  )
}