import React from 'react';
// import { UserContext } from '../../contexts/UserContext';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';

import Foto from '../../assets/perfil.jpg';
import styles from './style.module.scss';

// const {
//   user,
// } = useContext(UserContext);

const Bio = () => (
  <div className={styles.wrapper}>
    <div className={styles.header}>
      {/* <p>#{user.login}</p> */}
      <p>#Teste</p>

      <Link to='/'>
        <p>Sair</p>
        <FiLogOut style={{ color: 'red', fontSize: 24 }} />
      </Link>
    </div>

    <div className={styles.userAbout}>
      <img src={Foto} alt='Foto do usuário' />
      <div className={styles.userInfo}>
        {/* <p>{user.name}</p>
          <p>{user.email ? user.email : 'Não informado'}</p>
          <p>{user.location}</p> */}
        <p>Henrique</p>
        <p>henrique_05@outlook.com</p>
        <p>Pelotas, RS</p>
      </div>
    </div>

    <div className={styles.userNumbers}>
      <div>
        {/* <p>{user.followers}</p>
          <span>Seguidores</span> */}
        <p>45</p>
        <span>Seguidores</span>
      </div>
      <div>
        {/* <p>{user.following}</p> */}
        <p>45</p>
        <span>Seguindo</span>
      </div>

      <div>
        {/* <p>{user.public_repos}</p> */}
        <p>45</p>
        <span>Repositórios</span>
      </div>
    </div>

    <div className={styles.userBio}>
      <h1>Bios</h1>

      {/* <p>{user.bio}</p> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ab aperiam ex molestias? Facilis dolore quia
        provident sit vitae ea id, saepe perspiciatis odio
        similique, deleniti nesciunt veritatis laborum
        error! Optio?

      </p>

    </div>

    <Navigation />
  </div>
);
export default Bio;
