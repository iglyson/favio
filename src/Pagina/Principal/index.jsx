import React from 'react'
import Navbar from '../../componentes/Navbar/Navbar';
import Rodape from '../../Rodape/Rodape';
import CadastroUsuario from '../CadastroUsuario';
import TelaDeLogin from '../TelaDeLogin/';
const Principal = () => {
  return (
        <>
        <Navbar/>
        <TelaDeLogin/>
        <CadastroUsuario/>
        <Rodape/>
        </>
  )
}

export default Principal