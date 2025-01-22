import { useState, Change, FormEvent } from 'react';
import { IContato } from '../interfaces/IContato';

interface PropsPesquisa {
  filtrarContato: (contato: string) => void;

}


export function PesquisarContato({filtrarContato}: PropsPesquisa) {
  const [pesquisa, setPesquisa] = useState('')

  function handleFormPEsquisa(event: FormEvent){
    event.preventDefault()

    if (!pesquisa.trim()) {
      alert('Por favor, insira um nome para buscar.');
      return;
    }
    filtrarContato(pesquisa)
  }

  function handlePesquisa(event: Change){
    setPesquisa(event.target.value)
  }
  return (
    <>
      <form onSubmit={handleFormPEsquisa}>
        <label>Pesquisar
          <input 
          type="search" 
          name="pesquisar" 
          id="pesquisar" 
          value={pesquisa}
          onChange={handlePesquisa}
          />
        </label>
        <button type="submit">Pesquisar</button>
      </form>
    </>
  )
}

