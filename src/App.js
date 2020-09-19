import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from "react-router-dom";
import { MessageContainer } from './components/Message/MessageContainer';
import Music from './components/Music/Music';
import Gachi from './components/Gachi/Gachi';
import Stops from './components/Stop/Stop';
import FriendSide from './components/FriendsSide';
import { FriendsContainer } from './components/Friends/FriendsContainer';


function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div class="osnova">
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/message" render={() => <MessageContainer />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/gachi" render={() => <Gachi />} />
        <Route path="/stop" render={() => <Stops />} />
        <Route path="/friends" render={() => <FriendsContainer />} />
      </div>
      <FriendSide />
    </div>
  );
}

export default App;