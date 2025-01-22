import type { IContato } from "../interfaces/IContato"

interface ProsListaDeContatos{
  PassarLsitaDeContatos: IContato[];
  onDeletarContato: (contato: IContato) => void;
}

export function ListaDeContatos({PassarLsitaDeContatos, onDeletarContato}: ProsListaDeContatos){
  return(
    <>
    <ul>
      {
        PassarLsitaDeContatos.map(contato => (
          <li key={contato.id}>
            <p>{contato.nome}</p>
            <p>{contato.telefone}</p>
            <p>{contato.email}</p>
            <button  onClick={() => onDeletarContato(contato)}>Deletar</button>
          </li>
        ))
      }
    </ul>
    </>
  )
}
