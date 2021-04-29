/* eslint-disable camelcase */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

import styles from './style.module.scss';

const ProfilesComponent = ({ item }) => {
  const { id } = useParams();
  const { login, avatar_url } = item;

  return (
    <div>
      <div className={styles.profile}>
        <div>
          <img src={avatar_url} alt='Perfil' />
        </div>
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
