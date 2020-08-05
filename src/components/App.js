import React from 'react';
import logo from '../assets/logo.png';
import './App.css';
import 'fontsource-roboto';
import Menu from './menu';
import Box from '@material-ui/core/Box';

function App() {
  return (
    <div className="App">
      <header className="app-header">
      <Box display="flex" p={1} bgcolor="background.paper">
        <Menu className="menuIcon"/>
        <img src={logo} className="App-logo" alt="logo" />
      </Box>
      </header>
      <body>
        <Box className="blackDivider">
          <div>Free shipping within Amsterdam</div>
        </Box>
      <Box className="subHeader">
        Artisan Made | Eco-Friendly | Handloom | Sustainable | Lifestyle Products.
        <br/>
        Based in SoCal &amp; AMS 
        <br/>
        Shipping worldwide!
        <br/>
        info.chirita@gmail.com
      </Box>
      <a class="yLUwa" href="https://l.instagram.com/?u=https%3A%2F%2Fm.facebook.com%2FCHIRITAbyAnuja.K%2F&amp;e=ATNiH9gBpwxCyrYnhjf85vYEjr1_bLkbX8_YB98G7SULq80nvpZXtL7ThcRY5ckQrS7NzNzxPIJmf3-ZtZi-V3uozx7nwpdTWk_Cjg&amp;s=1" page_id="profilePage" rel="me nofollow noopener noreferrer" target="_blank">m.facebook.com/CHIRITAbyAnuja.K</a>
      </body>
    </div>
  );
}

export default App;
