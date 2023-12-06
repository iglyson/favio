import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TelaDeLogin from './Pagina/TelaDeLogin'
import Principal from './Pagina/Principal'
import CadastroUsuario from './Pagina/CadastroUsuario'

export const Rotas = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Principal/>}/>
            <Route path="/teladelogin" element={<TelaDeLogin/>}/>
            <Route path="/cadastrousuario" element={<CadastroUsuario/>}/>
        </Routes>
    </BrowserRouter>
  )
}
export default Rotas