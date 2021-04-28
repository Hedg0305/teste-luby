import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import { UserContextProvider } from './contexts/UserContext';

import User from './pages/User';
import Followers from './pages/Followers';
import Following from './pages/Following';
import Repos from './pages/Repos';
import Home from './pages/Home';

import './styles/global.scss';

const App = () => (
  <div className='App'>
    <UserContextProvider>
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route exact path={['/:id', '/:id/temp/:tempId']} component={User} />
        <Route exact path='/:id/repositories' component={Repos} />
        <Route exact path='/:id/followers' component={Followers} />
        <Route exact path='/:id/following' component={Following} />
      </BrowserRouter>
    </UserContextProvider>
  </div>
);

export default App;
