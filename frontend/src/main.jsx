import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from './components/auth/ProtectedRoutes';
import RegisterForm from './components/auth/RegisterForm';
import LoginForm from './components/auth/LoginForm';
import LogoutForm from './components/auth/LogoutForm';
import ForumForm from './components/ForumForm';
import ForumList from './components/ForumList';
import ForumPage from './components/ForumPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App /> } >
        <Route path='register' element={ <RegisterForm /> } />
        <Route element={ <ProtectedRoutes /> } >
        <Route path='create-forum' element={ <ForumForm /> } />  
        </Route>
        <Route path='logout' element={ <LogoutForm /> } />
        <Route path='login' element={ <LoginForm /> } />
        <Route path='forums' element={ <ForumList /> } />
        <Route path='forums/:forumId' element= { <ForumPage /> } />
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
