import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import Hello from './Hello'
import Product from './Product'

function App() {
  const [count, setCount] = useState(0)
  const ürünad = "buzdolabı";
  return (

    <div>
      < Product ürünad="Ayakkabı" fiyat={3200} />
      < Product ürünad={ürünad} />
    </div>

  )
}

export default App
