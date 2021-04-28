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
    setId,
    setFollowers,
  } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    const loadInfo = async () => {
      const data = await getFollowers(id);
      setId(id);
      setFollowers(data);
    };
    loadInfo();
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <Header number={10} title='Followersitórios' />
      <div className={styles.followers}>
        {followers
          && followers.map((follow) => <ProfilesComponent login={follow} key={follow.id} />)}
      </div>
      <Navigation />
    </div>
  );
};

export default Followers;
