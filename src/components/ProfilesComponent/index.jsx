/* eslint-disable camelcase */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

import styles from './style.module.scss';

const ProfilesComponent = ({ item }) => {
  const { login, avatar_url } = item;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/${login}`);
  };

  return (
    <div>
      <div className={styles.profile}>
        <img src={avatar_url} alt='Perfil' />

        <p>{`#${login}`}</p>

        <button type='button' onClick={handleClick}>
          <HiArrowRight size={26} />
        </button>
      </div>
      <hr />
    </div>
  );
};

export default ProfilesComponent;
