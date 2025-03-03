import { useState } from 'react'
import { IContato } from './interfaces/IContato';
import { FormContatos } from "./components/FormContatos";
import { ListaDeContatos } from './components/ListaDeContatos';
import { PesquisarContato } from './components/PesquisarContato';


export function App() {

  const [listaDeContatos, setListaDeContatos] = useState<IContato[]>([])

  function handleAdcionarContatoNaLista(contato: IContato): void {

    setListaDeContatos(prevContato => [...prevContato, contato])
  }

  function handleDeletarContato(contato: IContato): void {
    setListaDeContatos((prevCotato) =>
      prevCotato.filter(contato_filtrado => contato_filtrado.id !== contato.id))
  }

  function handleFiltraContatos(contato: string): void {
    
    setListaDeContatos((prevContato) => {
      const contatosFiltrados = prevContato.filter((contato_filtrado) =>
        contato_filtrado.nome === contato
        
      );
     
      return contatosFiltrados;
    });
  }
  return (
    <>
      <h1>Gerenciador de Contatos</h1>
      <PesquisarContato filtrarContato={handleFiltraContatos} />
      <FormContatos addContato={handleAdcionarContatoNaLista} />

      <ListaDeContatos
        PassarLsitaDeContatos={listaDeContatos}
        onDeletarContato={handleDeletarContato}

      />
    </>
  )
}


