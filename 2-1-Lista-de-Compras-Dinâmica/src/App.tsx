import { useState } from 'react'

import styles from './App.module.css'

import { ShoppingForm } from './components/ShoppingForm'

import { IProduto } from './interfaces/IProduto';
import { ShoppingList } from './components/ShoppingList';


export function App() {
  const [listProduct, setLidtProduct] = useState<IProduto[]>([])

  function addProductInList({ id, nome, quantidade }: IProduto): void {

    const produto: IProduto = { id, nome, quantidade }

    setLidtProduct(prevListProduct => [...prevListProduct, produto])

  }

  function removerProduto({ id }: IProduto) {
    setLidtProduct((prevProdutos) => prevProdutos.filter( produto => produto.id !== id))
  }
  
  // function addMaisQuantidade({quantidade}: IProduto): void{
  // }
    

  return (
    <>
      <h1 className={styles.titulo}>Lista de Compras Dinâmica</h1>
      <main>
        <div className={styles.formContainer}>
          <ShoppingForm addProductInList={addProductInList} />
        </div>
        <div className={styles.listaContainer}>
          <ShoppingList produtos={listProduct} 
          removerProduto={removerProduto}

          />
        </div>
      </main>
    </>
  )
}


