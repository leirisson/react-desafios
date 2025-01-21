import styles from './ShoppingList.module.css'
import { IProduto } from '../interfaces/IProduto';

interface PropsLista {
  produtos: IProduto[];
  removerProduto: (id: IProduto) => void;
}

export function ShoppingList({ produtos, removerProduto }: PropsLista) {

  return (
    <>
      <ul>
        {
          produtos.map((produto: IProduto) => (
            <li key={produto.id}>
              <p>{produto.nome}</p>

              <p>quantidade: 10</p>

              <button>-</button>
              <button>+</button>

              <button onClick={() => removerProduto(produto)}>Remover </button>
            </li>
          ))
        }
      </ul>
    </>
  )
}