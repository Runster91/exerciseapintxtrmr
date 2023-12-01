import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import Login from "./pages/login"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <route path="/login" element={<Login />}/>
      <route path="/" element={<h2>Home</h2>}/>
      <route path="/productos" element={<h2>Productos</h2>}/>
      <route path="/carrito" element={<h2>Carrito</h2>}/>
     </Routes>
    </>
  )
}

export default App
