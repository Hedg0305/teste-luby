import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import { UserContext } from '../../contexts/UserContext';
import { getRepos } from '../../services/api';
import Repositorie from './Repo';

import styles from './style.module.scss';

const Repos = () => {
  const {
    user,
    repos,
    setRepos,
  } = useContext(UserContext);
  console.log(repos);

  useEffect(() => {
    const loadRepos = async () => {
      const { data } = await getRepos(user.login);
      setRepos(data);
    };
    loadRepos();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.repos}>
        {repos?.map((repo) => <Repositorie repo={repo} key={repo.id} />)}

      </div>
      <Navigation />
    </div>
  );
};

export default Repos;
