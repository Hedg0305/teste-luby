import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../components/Navigation';

import Header from '../../components/Header';
import ProfilesComponent from '../../components/ProfilesComponent';

import styles from './style.module.scss';
import { UserContext } from '../../contexts/UserContext';
import { getFollowing } from '../../services/api';

const Following = () => {
  const {
    following,
    setFollowing,
  } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    const loadInfo = async () => {
      const data = await getFollowing(id);
      setFollowing(data);
    };
    loadInfo();
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <Header number={following.length} title='Seguindo' />
      <div className={styles.following}>
        {following
          && following.map((follow) => <ProfilesComponent item={follow} key={follow.id} />)}
      </div>
      <Navigation />
    </div>
  );
};

export default Following;
