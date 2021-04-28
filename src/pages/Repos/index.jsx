import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';
import { getRepos } from '../../services/api';
import Repositorie from './Repo';

import Navigation from '../../components/Navigation';
import Header from '../../components/Header';

import styles from './style.module.scss';

const Repos = () => {
  const {
    user,
    repos,
    setRepos,
    setId,
  } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    const loadRepos = async () => {
      const repositories = await getRepos(id);
      setId(id);
      setRepos(repositories);
    };
    loadRepos();
  }, [id]);

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
