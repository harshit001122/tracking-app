import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PostLogin from './pages/PostLogin';
import HomePage from './pages/HomePage';
import Home2 from './pages/Home2';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/post-login" element={<PostLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
