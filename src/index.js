import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./login"
import Signup from "./signup"
import "./index.css"
import Landing from "./landing"
import { useState } from "react"
const root = ReactDOM.createRoot(document.getElementById("root"))

function App() {
  const [user, setuser] = useState
    (
      [
        {
          username:"bharat",
          password:"123"
        }
      ]
    )
    console.log(user)
  return (<div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login user={user} setuser={setuser}/>}></Route>
        <Route path='/signup' element={<Signup user={user} setuser={setuser} />}></Route>
        <Route path='/landing' element={<Landing/>}></Route>

      </Routes>
    </BrowserRouter>
  </div>)
}

root.render(<App></App>)