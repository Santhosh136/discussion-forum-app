import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForumForm from './compenents/ForumForm';
import ForumList from './compenents/ForumList';
import ForumPage from './compenents/ForumPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App /> } >
        <Route path='create-forum' element={ <ForumForm /> } />
        <Route path='forums' element={ <ForumList /> } />
        <Route path='forums/:forumId' element= { <ForumPage /> } />
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
