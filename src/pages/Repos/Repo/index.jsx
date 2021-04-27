import React from 'react';

import { AiOutlineStar } from 'react-icons/ai';
import { BiLockOpenAlt, BiLockAlt } from 'react-icons/bi';

import styles from './style.module.scss';

const Repositorie = ({ repo }) => (
  <div>
    <div className={styles.repo}>
      <h2>{repo.name}</h2>

      <p>{repo.description}</p>

      <div className={styles.icons}>
        <div className={styles.stars}>
          <AiOutlineStar style={{ fontSize: 18, color: 'yellow' }} />
          <p>{repo.stargazers_count}</p>
        </div>

        <div>
          {repo.private
            ? (<BiLockAlt style={{ fontSize: 18, color: 'red' }} />)
            : (<BiLockOpenAlt style={{ fontSize: 18, color: 'green' }} />)}
        </div>
      </div>
    </div>
    <hr />
  </div>
);

export default Repositorie;
