import './App.css'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import HeaderContainer from './components/Header/HeaderContainer';
import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { initializeAppThunkCreator } from './redux/appReducer';
import PreLoader from './components/common/PreLoader/PreLoader';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

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
          <Suspense fallback={<PreLoader />}>
            <Routes>
              <Route path="/messages" element={<MessagesContainer />} />
              <Route path="/profile" element={<ProfileContainer />}>
                <Route path=":userId" element={<ProfileContainer />} />
              </Route>
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
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
