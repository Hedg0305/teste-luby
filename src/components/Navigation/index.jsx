import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';


import { BiHomeAlt } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi';
import { MdPeople } from 'react-icons/md';

import styles from './navigation.module.scss';

const Navigation = () => {
  const useRouter = useRouteMatch();
  

  return (
    <ul className={styles.navigation}>
      <li>
        <Link
          to={'/bio'}
          className={useRouter.path === '/bio' ? styles.currentPage : ''}
        >
          <BiHomeAlt size={26}/>
          Home
        </Link>
      </li>
      
      <li>
        <Link
          to={'/repos'}
          className={useRouter.path === '/repos' ? styles.currentPage : ''}
        >
          <FiGithub size={26}/>
          Repos
        </Link>
      </li>
      
      <li>
        <Link
          to={'/followers'}
          className={useRouter.path === '/repos' ? styles.currentPage : ''}
        >
          <MdPeople size={26}/>
          Seguidores
        </Link>
      </li>
      
      <li>
        <Link
          to={'/following'}
          className={useRouter.path === '/repos' ? styles.currentPage : ''}
        >
          <MdPeople size={26}/>
          Seguindo
        </Link>
      </li>
    </ul>
  )
}

export default Navigation
