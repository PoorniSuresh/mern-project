import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Register from './Register';
import Dashboard from './Dashboard';
import {useAuth} from './context/auth'

const App= () =>{

   const {isAuthenticated} =useAuth();

  return (
  
  <Router>
    <Routes>
    <Route path="/" element={ !isAuthenticated ? <Register />: <Navigate to="/dashboard"/>} />
    <Route path="/login" element={ !isAuthenticated ? <Login />: <Navigate to="/dashboard"/>} />
    <Route path="/daashboard" element={ isAuthenticated ? <Dashboard />: < Login />} />


    </Routes>


  </Router>
    )
  
}

export default App