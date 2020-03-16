import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import * as serviceWorker from './serviceWorker';
import ChatBot from 'react-simple-chatbot';
import AdaptiveCard from 'react-adaptivecards';
import botAvatar from './CapGeImage.jpg';

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
const payloads={
			  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
			  "type": "AdaptiveCard",
			  "version": "1.0",
			  "body": [
				{
				  "speak": "Tom's Pie is a Pizza restaurant which is rated 9.3 by customers.",
				  "type": "ColumnSet",
				  "columns": [
					{
					  "type": "Column",
					  "width": 2,
					  "items": [
						{
						  "type": "TextBlock",
						  "text": "PIZZA"
						},
						{
						  "type": "TextBlock",
						  "text": "Tom's Pie",
						  "weight": "bolder",
						  "size": "extraLarge",
						  "spacing": "none"
						},
						{
						  "type": "TextBlock",
						  "text": "4.2 ★★★☆ (93) · $$",
						  "isSubtle": true,
						  "spacing": "none"
						},
						{
						  "type": "TextBlock",
						  "text": "**Matt H. said** \"I'm compelled to give this place 5 stars due to the number of times I've chosen to eat here this past year!\"",
						  "size": "small",
						  "wrap": true
						}
					  ]
					},
					{
					  "type": "Column",
					  "width": 1,
					  "items": [
						{
						  "type": "Image",
						  "url": "https://picsum.photos/300?image=882",
						  "size": "auto"
						}
					  ]
					}
				  ]
				}
			  ],
			  "actions": [
				{
				  "type": "Action.OpenUrl",
				  "title": "More Info",
				  "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
				}
			  ]
			};

class AdaptiveCardWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      result: <AdaptiveCard style={{width: '500px', border: '1px solid black', width:'100%'}} payload={payloads} />,
      trigger: false,
    };

    this.triggetNext = this.triggetNext.bind(this);
  }

  componentWillMount() {
    const self = this;
    const { steps } = this.props;
  }

  triggetNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }

  render() {
    const { trigger, loading, result } = this.state;

    return (
      <div className="dbpedia" style={{width:'100%'}}>
		{result}
      </div>
    );
  }
}

AdaptiveCardWrapper.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

AdaptiveCardWrapper.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}! What is your gender?',
            trigger: 'gender',
          },
          {
            id: 'gender',
            options: [
              { value: 'male', label: 'Male', trigger: '5' },
              { value: 'female', label: 'Female', trigger: '5' },
            ],
          },
          {
            id: '5',
            message: 'How old are you?',
            trigger: 'age',
          },
          {
            id: 'age',
            user: true,
            trigger: '7',
            validator: (value) => {
              if (isNaN(value)) {
                return 'value must be a number';
              } else if (value < 0) {
                return 'value must be positive';
              } else if (value > 120) {
                return `${value}? Come on!`;
              }

              return true;
            },
          },
          {
            id: '7',
            message: 'Great! Check out your summary',
            trigger: 'review',
          },
          {
            id: 'review',
            component: <Review />,
            asMessage: true,
            trigger: 'update',
          },
          {
            id: 'update',
            message: 'Would you like to update some field?',
            trigger: 'update-question',
          },
          {
            id: 'update-question',
            options: [
              { value: 'yes', label: 'Yes', trigger: 'update-yes' },
              { value: 'no', label: 'No', trigger: 'wannasee-adaptivecard-question' },
            ],
          },
          {
            id: 'update-yes',
            message: 'What field would you like to update?',
            trigger: 'update-fields',
          },
		  {
            id: 'wannasee-adaptivecard-question',
            message: 'Do you want to see an example of adaptivecard?',
            trigger: 'wannasee-adaptivecard',
          },
          {
            id: 'update-fields',
            options: [
              { value: 'name', label: 'Name', trigger: 'update-name' },
              { value: 'gender', label: 'Gender', trigger: 'update-gender' },
              { value: 'age', label: 'Age', trigger: 'update-age' },
            ],
          },
          {
            id: 'update-name',
            update: 'name',
            trigger: '7',
          },
          {
            id: 'update-gender',
            update: 'gender',
            trigger: '7',
          },
          {
            id: 'update-age',
            update: 'age',
            trigger: '7',
          },
		  {
            id: 'wannasee-adaptivecard',
            options: [
              { value: 'Yes', label: 'Yes', trigger: 'see-adaptivecard' },
              { value: 'No', label: 'No', trigger: 'end-message' },
            ],
          },
		  {
            id: 'see-adaptivecard',
			component: <AdaptiveCardWrapper />,
            trigger: 'end-message',
          },
          {
            id: 'end-message',
            message: 'Thanks! You have seen the possibilities of the chatbot with adaptives cards!',
            end: true,
          },
        ]}
      botAvatar={botAvatar}/>
    );
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <SimpleForm steps={steps} />
  </ThemeProvider>,
  document.getElementById('root')
);
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
