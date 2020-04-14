import React, { Component } from 'react';
import SimpleForm from './components/SimpleForm';
import { ThemeProvider } from 'styled-components';
import './index.css';
import capSvg from "./img/logo.svg";


const steps = [];
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

class App extends Component {
  render() {
    return (
      <div className="boxcontainer">
        <div className="logo">
          <img src={capSvg} alt="cap.jpg" className="cap"></img>
        </div>
        
        <ThemeProvider theme={theme}>
          <SimpleForm steps={steps} />
        </ThemeProvider>
      </div>
    );
    }  
}

export default App
