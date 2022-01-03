import React from 'react';
import {Route} from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Friends';
import UsersList from './components/Users/UsersList';
import ProfileContainer from './components/Profile/ProfileContainer';
import { LoginWindowContainer } from './components/LoginWindow/LoginWindowContainer';

function App() {
  return (
      <div className="App">
        <Header />
        <Nav />
        <div className="Body">
            <Route path='/login' render={()=><LoginWindowContainer />}/>
            <Route path='/profile/:userID?' render={()=><ProfileContainer />}/>
            <Route path='/dialogs/:userID?' render={()=><Dialogs />}/>
            <Route path='/friends' render={()=><Friends />}/>
            <Route path='/users' render={()=><UsersList />}/>
        </div>
      </div>
  );
};
export default App;
