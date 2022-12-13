import Header from './components/Header/Header';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Messages from './components/Messages/Messages';
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className='App'>
      <Header />
      <NavBar />
      <div className='content'>
        <Routes>
          <Route path="/messages" element={<Messages state={props.state.messagesPage} />} />
          <Route path="/profile" element={<Profile state={props.state.profilePage} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
