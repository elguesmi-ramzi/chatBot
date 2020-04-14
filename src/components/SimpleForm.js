import React, { Component } from 'react';
import Review from './Review';
import AdaptiveCardWrapper from './AdaptiveCardWrapper'
import AdaptiveUserCard from './AdaptiveUserCard';
import ReviewCard from './ReviewCard';
import '../index.css';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import botAvatar from '../CapGeImage.jpg';






AdaptiveCardWrapper.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

AdaptiveCardWrapper.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

AdaptiveUserCard.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

AdaptiveUserCard.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
}







class SimpleForm extends Component {



    render() {
      return (
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'Hello , I am your virtual assistant , Type your username please !',
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: ' {previousValue}! Type your password please !',
              trigger: 'password',
            },
            {
              id: 'password',
              user: true,
              trigger: 'review',
            },
    
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
              trigger: 'question',
            },

            {
                id: 'question',
                message: '  Ask your question please ?',
                trigger: 'userQuestion',
            },
            {
              id: 'userQuestion',
              user: true,
              trigger: 'questionResult',
            },
            {
              id: 'questionResult',
              component: <AdaptiveUserCard />,
              trigger: 'otherQuestion',
            },

            {
              id: 'otherQuestion',
              message: '  Other question ?',
              trigger: 'otherquestionoption',
            },
         
            {
                id: 'otherquestionoption',
                options: [
                  { value: 'Yes', label: 'Yes', trigger: 'question' },
                  { value: 'No', label: 'No', trigger: 'end-message' },
                ],
            },
            
            {
              id: 'end-message',
              message: 'Thanks see you soon!',
              end: true,
            },
          ]}
        botAvatar={botAvatar}/>
      );
    }
  }
export default SimpleForm  