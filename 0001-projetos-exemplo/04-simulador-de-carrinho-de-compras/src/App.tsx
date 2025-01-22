import { useState } from "react"
import { IProduto } from "./interfaces/IProduto"


export function App() {
  const [produtos, setProdutos] = useState<IProduto[]>([
    {
      imgUrl: "https://example.com/images/smartphone.jpg",
      titulo: "Smartphone XYZ",
      descricaoDoProduto: "Smartphone com tela AMOLED de 6,5 polegadas, 128GB de armazenamento e câmera de 48MP.",
      valorProduto: 2499.99,
    },
    {
      imgUrl: "https://example.com/images/fone.jpg",
      titulo: "Fone de Ouvido Bluetooth",
      descricaoDoProduto: "Fone sem fio com cancelamento de ruído e bateria de longa duração.",
      valorProduto: 399.99,
    },
    {
      imgUrl: "https://example.com/images/notebook.jpg",
      titulo: "Notebook ABC",
      descricaoDoProduto: "Notebook com processador Intel i7, 16GB de RAM e SSD de 512GB.",
      valorProduto: 5499.99,
    },
    {
      imgUrl: "https://example.com/images/cafeteira.jpg",
      titulo: "Cafeteira Elétrica",
      descricaoDoProduto: "Cafeteira programável com capacidade para 1,5 litros e sistema de desligamento automático.",
      valorProduto: 199.99,
    },
    {
      imgUrl: "https://example.com/images/mochila.jpg",
      titulo: "Mochila para Notebook",
      descricaoDoProduto: "Mochila resistente à água, compatível com notebooks de até 15,6 polegadas.",
      valorProduto: 149.99,
    }
  ])
  const [carrinho, setCarrinho] = useState<IProduto[]>([])

  // 1 - criar o componente para exibir os produtos 
  // 2 - criar o componente de carrinho
  // 3 - criar o item do carrinho
  // 4 - remover um item 
  


  return (
    <>
      <ul>
        {
          produtos.map(produto => (
            <li key={produto.titulo}>
              
              {produto.titulo}
              
            </li>
          ))
        }
      </ul>
    </>
  )
}

