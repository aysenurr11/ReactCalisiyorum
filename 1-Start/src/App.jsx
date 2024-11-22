import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import Hello from './Hello'

function App() {
  const [count, setCount] = useState(0)
  let a = 10;
  const name = "Ayşe Nur"
  let vize1 = 10;
  let vize2 = 30;
  let sonuc = false;
  let isimler = ["Aysenur", "Mehmet", "Efe"]
  return (

    <div>
      <Hello />
      {/* 
      A nın degeri: {a}
      <h3>İsim neydi  ? :{name}</h3>
      <p>Vize ortalaması: {(vize1 + vize2) / 2}</p>

      (vize1+vize2)/2 ==50 ? <p>Geçtin</p> :<p>Kaldın</p>

      {sonuc ? <p>Ehliyet alırsın</p> : <p>Ehliyet alamazsın</p>}

      {isimler.map((isim, index) => (
        <div style={{
          backgroundColor: 'yellow',
          border: '1 px solid black'
        }} key={index}>{isim}</div>
      ))}

      <Login /> */}
    </div>

  )
}

export default App
