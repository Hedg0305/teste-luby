import React from 'react';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import ProfilesComponent from '../../components/ProfilesComponent';

import styles from './style.module.scss';

const Following = () => (
  <div className={styles.wrapper}>
    <Header />
    <div className={styles.following}>
      <ProfilesComponent />
      <ProfilesComponent />
      <ProfilesComponent />
      <ProfilesComponent />
      <ProfilesComponent />
      <ProfilesComponent />
      <ProfilesComponent />
    </div>
    <Navigation />
  </div>
);

export default Following;
