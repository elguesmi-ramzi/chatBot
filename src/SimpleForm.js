import React, { Component } from 'react';
import botAvatar from './CapGeImage.jpg';
import DBPedia from './DBPedia.js'
import Review from './Review.js'
import AdaptiveCardWrapper from './AdaptiveCardWrapper.js'
import ChatBot from 'react-simple-chatbot';


class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Comment vous nommez-vous?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Bonjour {previousValue}! Quel est votre genre?',
            trigger: 'gender',
          },
          {
            id: 'gender',
            options: [
              { value: 'male', label: 'Homme', trigger: '5' },
              { value: 'female', label: 'Femme', trigger: '5' },
            ],
          },
          {
            id: '5',
            message: 'Quel âge avez-vous?',
            trigger: 'age',
          },
          {
            id: 'age',
            user: true,
            trigger: '7',
            validator: (value) => {
              if (isNaN(value)) {
                return 'La valeur doit être numérique';
              } else if (value < 0) {
                return 'La valeur doit être positive';
              } else if (value > 120) {
                return `${value}? Saisissez une valeur réaliste!`;
              }

              return true;
            },
          },
          {
            id: '7',
            message: 'Super! Vérifiez que les informations saisies sont correctes',
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
            message: 'Voulez vous modifier certains champs?',
            trigger: 'update-question',
          },
          {
            id: 'update-question',
            options: [
              { value: 'yes', label: 'Oui', trigger: 'update-yes' },
              { value: 'no', label: 'Non', trigger: 'wannasee-adaptivecard-question' },
            ],
          },
          {
            id: 'update-yes',
            message: 'Quel champ aimeriez vous modifier?',
            trigger: 'update-fields',
          },
		  {
            id: 'wannasee-adaptivecard-question',
            message: 'Voulez vous voir un exemple d\'adaptivecard?',
            trigger: 'wannasee-adaptivecard',
          },
          {
            id: 'update-fields',
            options: [
              { value: 'name', label: 'Nom', trigger: 'update-name' },
              { value: 'gender', label: 'Genre', trigger: 'update-gender' },
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
              { value: 'Yes', label: 'Oui', trigger: 'see-adaptivecard' },
              { value: 'No', label: 'Non', trigger: 'start-search' },
            ],
          },
		  {
            id: 'see-adaptivecard',
			component: <AdaptiveCardWrapper />,
            trigger: 'start-search',
          },
		  {
			id: 'start-search',
			message: 'Saisissez une recherche à effectuer sur DBPedia (Pensez à mettre une majuscule au début du mot)',
			trigger: 'search',
		  },
		  {
			id: 'search',
			user: true,
			trigger: 'end-search',
		  },
		  {
			id: 'end-search',
			component: <DBPedia />,
			waitAction: true,
			trigger: 'start-search',
		  },
          /*{
            id: 'end-message',
            message: 'Thanks! You have seen the possibilities of the chatbot with adaptives cards!',
            end: true,
          },*/
        ]}
      botAvatar={botAvatar}/>
    );
  }
}

export default SimpleForm;