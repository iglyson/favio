import React, { useState } from 'react'
import styles from './Conteudo.module.css'

const Conteudo = () => {

  const [email, setEmail] = useState('')
  const [jpIMG, setJPIMG] = useState('')
  const [password, setPassword] = useState('')
  const [favoritos,setFavoritos]=useState([])

  

  function salvarFavorito() {
    console.log('favoritos>>>.')
    setFavoritos([...favoritos, (email,URL)])
    localStorage.setItem("favorito", JSON.stringify({favoritos}))
  }
    
  

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"> Bem vindo </span>

            <span className="login-form-title">
              <img src={jpIMG} alt="Jovem Programador" 
              onChange={(e) => setJPIMG(e.target.value)}
              />
              
            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui cadastro usuario? </span>
              <a className="txt2" href="#">
                Cadastra Usuario
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}



export default Conteudo