import './App.css'
import { useState } from "react"
import { IncrementButtonProps } from "./components/IncrementButton";
import { DecrementButtonProps } from "./components/DecrementButton";
import { ResetButton } from './components/ResetButton';

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

  function handleReset(){
    setItem(prev => ({...prev, quantidade: prev.quantidade = 0}))
  }
  return (
    <div className="container">
    <h1 className="title">Item: {item.nome}</h1>
    <p className="quantity">Quantidade: {item.quantidade}</p>
    <div className="button-container">

      <IncrementButtonProps onIncrement={handleIncrement}/>
      <DecrementButtonProps onDecrement={handleDecrement}/>
      <ResetButton handleReset={handleReset}/>
    </div>
  </div>
  )
}

export default App
