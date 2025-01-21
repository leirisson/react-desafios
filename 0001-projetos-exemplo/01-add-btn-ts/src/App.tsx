import './App.css'
import { useState } from "react"
import { IncrementButtonProps } from "./components/IncrementButton";
import { DecrementButtonProps } from "./components/DecrementButton";

interface Item {
  id: number;
  nome: string;
  quantidade: number;
}



function App() {
  // estado para manipular os numeros 
  const [item, setItem] = useState<Item>({ id: 1, nome: 'teclado', quantidade: 2 })

  // função opara adicionar mais um
  const handleIncrement = () => {
    setItem((prev) => ({ ...prev, quantidade: prev.quantidade + 1 }))
  }
// função opara remover as coisas 
  const handleDecrement = () => {
    setItem(prevItem => ({ ...prevItem, quantidade: prevItem.quantidade > 0 ? prevItem.quantidade - 1 : 0}))
  }
  return (
    <div className="container">
    <h1 className="title">Item: {item.nome}</h1>
    <p className="quantity">Quantidade: {item.quantidade}</p>
    <div className="button-container">
      <button className="increment" onClick={handleIncrement}>
        +
      </button>
      <button className="decrement" onClick={handleDecrement}>
        -
      </button>
    </div>
  </div>
  )
}

export default App
