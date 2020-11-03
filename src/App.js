import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile/Profile';
import { Route } from "react-router-dom";
import { MessageContainer } from './components/Message/MessageContainer';
import Music from './components/Music/Music';
import Gachi from './components/Gachi/Gachi';
import Stops from './components/Stop/Stop';
import FriendSide from './components/FriendsSide';
import { FriendsContainer } from './components/Friends/FriendsContainer';
import { HeaderContainer } from './components/HeaderContainer';
import { LoginContainer } from './components/Login/LoginContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Sidebar />
      <div class="osnova">
        <Route path="/profile/:userId?" render={() => <Profile />} />
        <Route path="/message" render={() => <MessageContainer />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/gachi" render={() => <Gachi />} />
        <Route path="/stop" render={() => <Stops />} />
        <Route path="/friends" render={() => <FriendsContainer />} />
        <Route path="/login" render={() => <LoginContainer />} />
      </div>
      <FriendSide />
    </div>
  );
}

export default App;