import { useState } from 'react'
import profileImage from './assets/user-profile.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const nom = "HOUNGBE";
  const prenom = "Ulrich";

  return (
    <>
     
      <div>
        <h1>Nom  : {nom}</h1>
        <h3>Prenom : {prenom} </h3>
        <a href="https://react.dev" target="_blank">
          <img src={profileImage} className="profile" alt="logo" />
        </a>
      </div>

    </>
  )
}

export default App
