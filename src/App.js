import './App.css';
import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import SignUp from './components/authContent/SignUp';
import SignIn from './components/authContent/SignIn';
import Contact from './components/Pages/Contact';
import EditPage from './components/Pages/EditProfile';
import Home from './components/Pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/SignIn" element={<SignIn />} />
          <Route exact path="/EditPage" element={<EditPage />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>

      </Router>
    </div >
  );
}

export default App;
