import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import { UserContextProvider } from './contexts/UserContext';

import Bio from './pages/Bio';
import Followers from './pages/Followers';
import Following from './pages/Following';
import Repos from './pages/Repos';
import Searching from './pages/Searching';

import './styles/global.scss';

const App = () => (
  <div className='App'>
    <UserContextProvider>
      <BrowserRouter>
        <Route path='/' exact component={Searching} />
        <Route path='/bio' component={Bio} />
        <Route path='/repos' component={Repos} />
        <Route path='/followers' component={Followers} />
        <Route path='/following' component={Following} />
      </BrowserRouter>
    </UserContextProvider>
  </div>
);

export default App;
