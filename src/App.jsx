import { Home } from './/pages/Home';
import {  Route, BrowserRouter } from 'react-router-dom';

import { UserContextProvider } from './contexts/UserContext';

import './styles/global.scss';
import { Bio } from './pages/Bio';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/bio" component={Bio}/>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
