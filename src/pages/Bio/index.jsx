import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

import styles from './bio.module.scss'

export function Bio() {
  const {
    user
  } = useContext(UserContext);


  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>#{user.login}</p>
        <p>Sair</p>
      </div>
      
      <div className={styles.userInfo}>
          <img src={user.avatar_url} alt="Foto do usuário"/>
      </div>
      
      <div className={styles.userNumbers}>
        <h1>numbers</h1>
      </div>
      
      <div className={styles.userBio}>
        <h1>
          Bio
        </h1>
      </div>
      
      <div className={styles.nav}>
        <h1>Nav</h1>
      </div>
    </div>
  )
}