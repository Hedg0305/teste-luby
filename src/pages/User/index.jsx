import React, { useContext, useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UserContext } from '../../contexts/UserContext';

import Navigation from '../../components/Navigation';

import styles from './style.module.scss';
import Loading from '../../components/Loading';

const User = () => {
  const {
    user,
    loadData,
    setUserId,
  } = useContext(UserContext);
  const { id, tempId } = useParams();
  const [loading, setLoading] = useState(true);

  const loadInfo = async () => {
    try {
      if (tempId === undefined) {
        await loadData(id);
        setUserId(id);
      } else {
        await loadData(tempId);
        setUserId(id);
      }
    } catch {
      toast.error('🚀Falha ao se conectar a api', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    loadInfo();
  }, [id, tempId]);

  return (
    <div className={styles.wrapper}>
      {loading
        ? (
          <div className={styles.loading}>
            <Loading />
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <p>{`#${user.login}`}</p>

              {tempId ? (
                <Link to={`/${tempId}`}>
                  <p>Salvar</p>
                  <FiLogOut style={{ color: 'green', fontSize: 24 }} />
                </Link>
              )
                : (
                  <Link to='/'>
                    <p>Sair</p>
                    <FiLogOut style={{ color: 'red', fontSize: 24 }} />
                  </Link>
                )}
            </div>

            <div className={styles.userAbout}>
              <img src={user.avatar_url} alt='Foto do usuário' />
              <div className={styles.userInfo}>
                <p className={styles.name}>{user.name}</p>
                <p>{user.email ? user?.email : 'E-mail privado'}</p>
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
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};
export default User;
