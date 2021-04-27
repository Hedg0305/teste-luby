import React, { useContext } from 'react';

import { useForm } from "react-hook-form";
import { AiFillGithub } from 'react-icons/ai'
import {useHistory} from 'react-router-dom'

import { getUser } from '../../services/api';
import { UserContext } from '../../contexts/UserContext';

import styles from './searching.module.scss'

const  Searching = () => {
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {
    setUser
  } = useContext(UserContext)
  
  const onSubmit = async ({user}) => {
    console.log(user);
    // const { data } = await getUser(user);
    // setUser(data);
    if (user)
      history.push('/bio');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <AiFillGithub size={98}/>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Usuário" {...register("user", { required: true })} />    
        {errors.user && <span>Campo obrigatório</span>}
      
        <button type="submit">
          Entrar
        </button>
      </form>
      
    </div>
  )
}

export default Searching;