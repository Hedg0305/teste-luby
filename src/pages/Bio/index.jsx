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
      
      <div className={styles.userAbout}>
        <img src={user.avatar_url} alt="Foto do usuário" />
        <div className={styles.userInfo}>
          <p>{user.name}</p>
          <p>{user.email ? user.email : 'Não informado'}</p>
          <p>{user.location}</p>
        </div>
      </div>
      
      <div className={styles.userNumbers}>
        <div>
          <p>{user.followers}</p>
          <span>Seguidores</span>
        </div>
        <div>
          <p>{ user.following }</p>
          <span>Seguindo</span>
        </div>
        
        <div>
          <p>{user.public_repos}</p>
          <span>Repositórios</span>
        </div>
      </div>
      
      <div className={styles.userBio}>
        <h1>Bio</h1>
        <p>{ user.bio }</p>
      </div>
      
      <div className={styles.nav}>
        <h1>Nav</h1>
      </div>
    </div>
  )
}