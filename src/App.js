import './App.css'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
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
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
