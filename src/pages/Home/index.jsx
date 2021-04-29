import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';
import { AiFillGithub } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    try {
      const data = await getUser(user);
      setUser(data);
      history.push(`/${user}`);
    } catch {
      toast.error('🚀Falha ao se conectar a api', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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

      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default Home;
