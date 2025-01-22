import { useState } from 'react'

import styles from './App.module.css'

import { ShoppingForm } from './components/ShoppingForm'

import { IProduto } from './interfaces/IProduto';
import { ShoppingList } from './components/ShoppingList';


export function App() {
  const [listProduct, setLidtProduct] = useState<IProduto[]>([])

  function addProductInList(produto: IProduto): void {

    setLidtProduct(prevListProduct => [...prevListProduct, produto])

  }

  function removerProduto({ id }: IProduto) {
    setLidtProduct((prevProdutos) => prevProdutos.filter( produto => produto.id !== id))
  }
  
  function handleAdd({ id }: IProduto): void {
    setLidtProduct((prevListProduct) =>
      prevListProduct.map((produto) =>
        produto.id === id
          ? { ...produto, quantidade:produto.quantidade + 1 }
          : produto
      )
    );
  }

  function handleRemove({id}:IProduto):void{
    setLidtProduct((prevListProduct) => 
      prevListProduct.map((produto) => 
      produto.id === id 
  ? {...produto, quantidade: produto.quantidade > 0 ? produto.quantidade - 1 : 0}
  : produto
))
  }

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
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          />
        </div>
      </main>
    </>
  )
}


