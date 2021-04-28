/* eslint-disable camelcase */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

import styles from './style.module.scss';
import { UserContext } from '../../contexts/UserContext';

const ProfilesComponent = ({ item }) => {
  const { id } = useContext(UserContext);
  const { login, avatar_url } = item;

  return (
    <div>
      <div className={styles.profile}>
        <img src={avatar_url} alt='Perfil' />

        <p>{`#${login}`}</p>

        <Link to={`/${id}/temp/${login}`}>
          <HiArrowRight size={26} />
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default ProfilesComponent;
