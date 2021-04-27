import React from 'react';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Repositorie from './Repo';

import styles from './style.module.scss';

const Repos = () => (
  <div className={styles.wrapper}>
    <Header />
    <div className={styles.repos}>
      <Repositorie />
    </div>
    <Navigation />
  </div>
);

export default Repos;
