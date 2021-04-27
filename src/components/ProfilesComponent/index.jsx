import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

import Img from '../../assets/perfil.jpg';
import styles from './style.module.scss';

const ProfilesComponent = () => (
  <div>
    <div className={styles.profile}>
      <img src={Img} alt='Perfil' />

      <p>#name</p>

      <Link to='/home'>
        <HiArrowRight size={26} />
      </Link>
    </div>
    <hr />
  </div>
);

export default ProfilesComponent;
