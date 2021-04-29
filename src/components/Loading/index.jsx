import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

import styles from './style.module.scss';

const Loading = () => (
  <div className={styles.loading}>
    <AiFillGithub size={95} />
    <p>Carregnado</p>
  </div>
);

export default Loading;
