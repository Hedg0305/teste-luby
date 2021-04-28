import React, { useContext, useEffect } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

import Navigation from '../../components/Navigation';
import { getUser } from '../../services/api';

import styles from './style.module.scss';

const User = () => {
  const {
    user,
    setUser,
    setId,
  } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    const loadInfo = async () => {
      const userData = await getUser(id);
      setId(id);
      setUser(userData);
    };
    loadInfo();
  }, [id]);

  return (
    <div className={styles.wrapper}>
      {user
        && (
        <>
          <div className={styles.header}>
            <p>{`#${user.login}`}</p>

            <Link to='/'>
              <p>Sair</p>
              <FiLogOut style={{ color: 'red', fontSize: 24 }} />
            </Link>
          </div>

          <div className={styles.userAbout}>
            <img src={user.avatar_url} alt='Foto do usuário' />
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
              <p>{user.following}</p>
              <span>Seguindo</span>
            </div>

            <div>
              <p>{user.public_repos}</p>
              <span>Repositórios</span>
            </div>
          </div>

          <div className={styles.userBio}>
            <h1>Bio</h1>

            <p>{user.bio}</p>
          </div>
        </>
        )}
      <Navigation />

    </div>
  );
};
export default User;
