import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';
import { AiFillGithub } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

import { getUser } from '../../services/api';
import { UserContext } from '../../contexts/UserContext';

import styles from './style.module.scss';

const Home = () => {
  const history = useHistory();
  const {
    setUser,
  } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async ({ user }) => {
    const data = await getUser(user);

    setUser(data);

    if (data) { history.push(`/${user}`); }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <AiFillGithub size={98} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Usuário' {...register('user', { required: true })} />
        {errors.user && <span>Campo obrigatório</span>}

        <button type='submit'>
          Entrar
        </button>
      </form>

    </div>
  );
};

export default Home;
