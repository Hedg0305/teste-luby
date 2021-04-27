import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

import Img from '../../assets/perfil.jpg';
import styles from './style.module.scss';
import { UserContext } from '../../contexts/UserContext';

const ProfilesComponent = ({ login }) => {
  const newLogin = login;
  const { setUser } = useContext(UserContext);

  const handleClick = () => {
    setUser(newLogin);
  };

  return (
    <div>
      <div className={styles.profile}>
        <img src={Img} alt='Perfil' />

        <p>{`#${login.login}`}</p>

        <Link to='/home'>
          <HiArrowRight size={26} onClick={handleClick} />
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default ProfilesComponent;
