import './App.css'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { initializeAppThunkCreator } from './redux/appReducer';
import PreLoader from './components/common/PreLoader/PreLoader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <PreLoader />
    }
    return (
      <div className='App'>
        <HeaderContainer />
        <NavBar />
        <div className='content'>
          <Routes>
            <Route path="/messages" element={<MessagesContainer />} />
            <Route path="/profile" element={<ProfileContainer />}>
              <Route path=":userId" element={<ProfileContainer />} />
            </Route>
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

const mapDispatchToProps = (dispatch) => ({
  initializeApp: () => dispatch(initializeAppThunkCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
