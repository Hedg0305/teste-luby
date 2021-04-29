import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getFollowers } from '../../services/api';
import { UserContext } from '../../contexts/UserContext';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import ProfilesComponent from '../../components/ProfilesComponent';

import styles from './style.module.scss';

const Followers = () => {
  const {
    userId,
    followers,
    setFollowers,
  } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    const loadInfo = async () => {
      const data = await getFollowers(id);
      setFollowers(data);
    };
    if (userId === null) loadInfo();
  }, [id]);

  useEffect(async () => {
    if (userId === null) {
      try {
        const data = await getFollowers(id);
        setFollowers(data);
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
      <Header number={followers.length} title='Seguidores' />
      <div className={styles.followers}>
        {followers
          && followers.map((follow) => <ProfilesComponent item={follow} key={follow.id} />)}
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

export default Followers;
