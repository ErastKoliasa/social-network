import Header from './components/Header/Header';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import MessagesContainer from './components/Messages/MessagesContainer';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <NavBar />
      <div className='content'>
        <Routes>
          <Route path="/messages" element={<MessagesContainer />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
