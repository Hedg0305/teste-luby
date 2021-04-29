import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Navigation from '../../components/Navigation';

import 'react-toastify/dist/ReactToastify.css';

import Header from '../../components/Header';
import ProfilesComponent from '../../components/ProfilesComponent';

import { getFollowing } from '../../services/api';
import { UserContext } from '../../contexts/UserContext';

import styles from './style.module.scss';

const Following = () => {
  const {
    userId,
    following,
    setFollowing,
  } = useContext(UserContext);
  const { id } = useParams();

  useEffect(async () => {
    if (userId === null) {
      try {
        const data = await getFollowing(id);
        setFollowing(data);
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
      <Header number={following.length} title='Seguindo' />
      <div className={styles.following}>
        {following
          && following.map((follow) => <ProfilesComponent item={follow} key={follow.id} />)}
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

export default Following;
