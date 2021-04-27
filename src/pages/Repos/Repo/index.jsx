import React from 'react';

import { AiOutlineStar } from 'react-icons/ai';
import { BiLockOpenAlt, BiLockAlt } from 'react-icons/bi';

import styles from './style.module.scss';

const Repositorie = () => (
  <div>
    <div className={styles.repo}>
      <h2>teste</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolor nihil repellat vero similique cupiditate nesciunt.
      </p>

      <div className={styles.icons}>
        <div className={styles.stars}>
          <AiOutlineStar style={{ fontSize: 18, color: 'yellow' }} />
          <p>32</p>
        </div>

        <div>
          <BiLockAlt style={{ fontSize: 18, color: 'red' }} />
          <BiLockOpenAlt style={{ fontSize: 18, color: 'green' }} />
        </div>
      </div>
    </div>
    <hr />
  </div>
);

export default Repositorie;
