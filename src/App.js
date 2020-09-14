import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from "react-router-dom";
import Message from './components/Message/Message';
import Music from './components/Music/Music';
import Gachi from './components/Gachi/Gachi';
import Stops from './components/Stop/Stop';
import FriendSide from './components/FriendsSide';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <div class="osnova">
          <Route path="/profile" render={() => <Profile textTemp={props.textTemp} addPost={props.addPost} prI={props.state.profilePage.postsReady} profilePhoto={props.state.profilePage.profilePhoto} />} />
          <Route path="/message" render={() => <Message chI={props.state.dialogiesPages} meI={props.state.dialogiesPages} />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/gachi" render={() => <Gachi />} />
          <Route path="/stop" render={() => <Stops />} />
        </div>
        <FriendSide />
      </div>
    </BrowserRouter>
  );
}

export default App;