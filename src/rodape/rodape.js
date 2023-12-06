import React from 'react';
import styles from './Rodapes.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Rodapes(props) {
  const dataAtual = new Date();
  const dataFormatada = dataAtual.toLocaleDateString();

  return (
    <footer className={styles.rodape}>
      <div className={styles.redesSociais}>
        <h2>Redes Sociais</h2>
        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
      <div className={styles.logo}>
        <img src="netflix.png" alt="Logo" />
      </div>
      <div className={styles.contato}>
        <h2>Contato</h2>
        <p>Celular: (84) 45d6-7890</p>
        <p>Endereço: Rua Canindé, 19092004</p>
      </div>
      <div className={styles.divisoria}></div>
      <div className={styles.data}>{dataFormatada}</div>
    </footer>
  );
}
