import styles from './ShoppingList.module.css'
import { IProduto } from '../interfaces/IProduto';
import { useState } from 'react';

interface PropsLista {
  produtos: IProduto[];
  removerProduto: (produto: IProduto) => void;
  handleAdd: (produto: IProduto) => void;
  handleRemove: (produto: IProduto) => void;
}

export function ShoppingList({ produtos, removerProduto, handleAdd, handleRemove }: PropsLista) {





  return (
    <>
      <ul>
        {
          produtos.map((produto: IProduto) => (
            <li key={produto.id}>
              <p>{produto.nome}</p>

              <p>quantidade: {produto.quantidade}</p>

              <button onClick={() => handleRemove(produto)}>-</button>
              <button onClick={() => handleAdd(produto)}>+</button>

              <button onClick={() => removerProduto(produto)}>Remover </button>
            </li>
          ))
        }
      </ul>
    </>
  )
}