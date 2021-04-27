import React, { useContext } from 'react';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import { UserContext } from '../../contexts/UserContext';
// import { getRepos } from '../../services/api';
import Repositorie from './Repo';

import styles from './style.module.scss';

const Repos = () => {
  const {
    user,
    repos,
  } = useContext(UserContext);

  return (
    <div className={styles.wrapper}>
      <Header number={user.public_repos} title='Repositórios' />

      <div className={styles.repos}>
        {repos && repos.map((repo) => <Repositorie repo={repo} key={repo.id} />)}

      </div>

      <Navigation />
    </div>
  );
};

export default Repos;
