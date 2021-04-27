import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import styles from './style.module.scss';

const Header = ({ number, title }) => (

  <div className={styles.header}>
    <Link to='/home'>
      <HiArrowLeft size={26} />
    </Link>
    <p>{`${number} ${title}`}</p>
    <div />
  </div>
);

export default Header;
