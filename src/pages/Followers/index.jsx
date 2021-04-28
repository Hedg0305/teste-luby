import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getFollowers } from '../../services/api';
import { UserContext } from '../../contexts/UserContext';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import ProfilesComponent from '../../components/ProfilesComponent';

import styles from './style.module.scss';

const Followers = () => {
  const {
    followers,
    setFollowers,
  } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    const loadInfo = async () => {
      const data = await getFollowers(id);
      setFollowers(data);
    };
    loadInfo();
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <Header number={followers.length} title='Seguidores' />
      <div className={styles.followers}>
        {followers
          && followers.map((follow) => <ProfilesComponent item={follow} key={follow.id} />)}
      </div>
      <Navigation />
    </div>
  );
};

export default Followers;
