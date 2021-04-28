import React from 'react';
import { useRouteMatch, Link, useParams } from 'react-router-dom';

import { BiHomeAlt } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi';
import { MdPeople } from 'react-icons/md';

import styles from './style.module.scss';

const Navigation = () => {
  const useRouter = useRouteMatch();
  const { id } = useParams();

  return (
    <ul className={styles.navigation}>
      <li>
        <Link
          to={`/${id}`}
          className={useRouter.path === '/:id' ? styles.currentPage : ''}
        >
          <BiHomeAlt size={26} />
          Home
        </Link>
      </li>

      <li>
        <Link
          to={`/${id}/repositories`}
          className={useRouter.path === '/:id/repositories' ? styles.currentPage : ''}
        >
          <FiGithub size={26} />
          Repos
        </Link>
      </li>

      <li>
        <Link
          to={`/${id}/followers`}
          className={useRouter.path === '/:id/followers' ? styles.currentPage : ''}
        >
          <MdPeople size={26} />
          Seguidores
        </Link>
      </li>

      <li>
        <Link
          to={`/${id}/following`}
          className={useRouter.path === '/:id/following' ? styles.currentPage : ''}
        >
          <MdPeople size={26} />
          Seguindo
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
