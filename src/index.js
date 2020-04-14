import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< .mine

=======
import SimpleForm from './SimpleForm.js'
>>>>>>> .theirs

<<<<<<< .mine
ReactDOM.render(<App />, document.getElementById('root'));













=======


/*const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
];
>>>>>>> .theirs

<<<<<<< .mine



























=======
ReactDOM.render(
  <div>
    <ChatBot steps={steps} />
  </div>,
  document.getElementById('root')
);*/
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

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <SimpleForm steps={steps} />
  </ThemeProvider>,
  document.getElementById('root')
);
//ReactDOM.render(<App />, document.getElementById('root'));

>>>>>>> .theirs
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
