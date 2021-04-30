import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import styles from './style.module.scss';

const Header = ({ number, title }) => {
  const { id } = useParams();

  return (
    <div className={styles.header}>
      <Link to={`/${id}`}>
        <HiArrowLeft size={26} />
      </Link>
      <p>{`${number} ${title}`}</p>
      <div />
    </div>
  );
};

export default Header;
