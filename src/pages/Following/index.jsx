import React, { useContext } from 'react';
import Navigation from '../../components/Navigation';

import Header from '../../components/Header';
import ProfilesComponent from '../../components/ProfilesComponent';

import styles from './style.module.scss';
import { UserContext } from '../../contexts/UserContext';

const Following = () => {
  const {
    following,
  } = useContext(UserContext);
  console.log(following);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.following}>
        {following && following.map((follow) => <ProfilesComponent login={follow} />)}
      </div>
      <Navigation />
    </div>
  );
};

export default Following;
