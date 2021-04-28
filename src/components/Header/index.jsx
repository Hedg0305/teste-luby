import React from 'react';
import { useHistory } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import styles from './style.module.scss';

const Header = ({ number, title }) => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <div className={styles.header}>
      <button type='button' onClick={handleClick}>
        <HiArrowLeft size={26} />
      </button>
      <p>{`${number} ${title}`}</p>
      <div />
    </div>
  );
};

export default Header;
