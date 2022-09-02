import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
// import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <Router>
      <CssBaseline>
        <App />
      </CssBaseline>
    </Router>

);