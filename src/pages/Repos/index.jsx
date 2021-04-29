import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UserContext } from '../../contexts/UserContext';
import { getRepos } from '../../services/api';
import Repositorie from './Repo';

import Navigation from '../../components/Navigation';
import Header from '../../components/Header';

import styles from './style.module.scss';

const Repos = () => {
  const {
    repos,
    userId,
    setRepos,
  } = useContext(UserContext);
  const { id } = useParams();

  useEffect(async () => {
    if (userId === null) {
      try {
        const repositories = await getRepos(id);
        setRepos(repositories);
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
    }
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <Header number={repos.length} title='Repositórios' />

      <div className={styles.repos}>
        {repos && repos.map((repo) => <Repositorie repo={repo} key={repo.id} />)}

      </div>

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

export default Repos;
