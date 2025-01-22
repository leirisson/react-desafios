import { useState, type FormEvent,  Change } from "react"
import { v4 as uuidv4 } from 'uuid';
import type { IProduto } from "../interfaces/IProduto";

interface PropsForm {
  addProductInList: (produto: IProduto) => void;
}

export function ShoppingForm({addProductInList}: PropsForm) {
  const [nome, setNome] = useState('')
  const [quantidade, setQuantidade] = useState(0)

  const new_produto: IProduto = {
    id: uuidv4(),
    nome,
    quantidade
  }

  function handleProduto(event: FormEvent){
    event.preventDefault()

    addProductInList(new_produto)

    setNome('')
    setQuantidade(0)
  }

  function handleNome(event: Change){
    const nome = event.target.value
    setNome(nome)
  }

  function handleQuantidade(event: Change){
    const quantidade  = event.target.value
    setQuantidade(Number(quantidade))
  }

  return (
    <>
      <form onSubmit={handleProduto}>
        <label>Nome: 
          <input type="text" 
          name="nome" 
          id="nome" 
          value={nome}
          onChange={handleNome}
          />
        </label>
        <label>
          Quantidade:
          <input type="number" 
          name="quantidade" 
          id="quantidade" 
          value={quantidade}
          onChange={handleQuantidade}
          />
        </label>
        <button type="submit">Adcionar na Lista</button>
      </form>
    </>
  )
}