import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import { UserContextProvider } from './contexts/UserContext';
import Bio from './pages/Bio';
import Repos from './pages/Repos';
import  Searching  from './pages/Searching';

import './styles/global.scss';

const App = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <BrowserRouter>
            <Route path="/" exact component={Searching}/>
            <Route path="/bio" component={Bio}/>
            <Route path="/repos" component={Repos}/>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
