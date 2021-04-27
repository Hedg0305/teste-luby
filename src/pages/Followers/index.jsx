import React from 'react';
import Header from '../../components/Header';

import Navigation from '../../components/Navigation';
import ProfilesComponent from '../../components/ProfilesComponent';

import styles from './style.module.scss';

const Followers = () => (
  <div className={styles.wrapper}>
    <Header number={10} title='Followersitórios' />
    <div className={styles.followers}>
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

export default Followers;
