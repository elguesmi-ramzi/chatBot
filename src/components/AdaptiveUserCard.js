import React, { Component } from 'react';
import AdaptiveCard from 'react-adaptivecards';
import axios from 'axios';


function payloads(name, siteWeb, email, phone){ 
    return (
      `{
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "type": "AdaptiveCard",
        "version": "1.0",
        "body": [
          {
            "type": "Container",
            "items": [
              {
                "type": "TextBlock",
                "text": "Carte utilisateur",
                "weight": "bolder",
                "size": "medium"
              },
              {
                "type": "ColumnSet",
                "columns": [
                  {
                    "type": "Column",
                    "width": "auto",
                    "items": [
                      {
                        "type": "Image",
                        "url": "https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg",
                        "size": "small",
                        "style": "person"
                      }
                    ]
                  },
                  {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                      {
                        "type": "TextBlock",
                        "text": "${name}",
                        "weight": "bolder",
                        "wrap": true
                      },
                      {
                        "type": "TextBlock",
                        "spacing": "none",
                        "isSubtle": true,
                        "wrap": true
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "Container",
            "items": [
              
              {
                "type": "FactSet",
                "facts": [
                  {
                    "title": "E-mail:",
                    "value": "${email}"
                  },
                  {
                    "title": "Tél:",
                    "value": "${phone}"
                  },
                  {
                    "title": "Site web:",
                    "value": "${siteWeb}"
                  }
                ]
              }
            ]
          }
        ]
      }`
       
    )
  
}


class AdaptiveUserCard extends Component {


  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      trigger: false,
      resultat : {}
    };
    
    this.triggetNext = this.triggetNext.bind(this);
    
  }

  triggetNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }
  


  componentWillMount(){
    var rep = {}
    console.log('didMount- question' + this.props.previousStep.value);
    var question = new FormData()
    question.set("owner", this.props.steps.name.value)
    question.append("question", this.props.previousStep.value)
    question.append("solved", false)
    console.log(question);  
 
  axios({
    method: 'post',
    url: 'http://localhost:8000/backend/request/',
    data: question
    
  })
  .then((reponse) => {
      //On traite la suite une fois la réponse obtenue 
      rep = reponse.data
      console.log(rep);
      this.setState({
        resultat:rep,
        loading:false
        
      })
      console.log(this)
      
  })
  .catch(function (erreur) {
      //On traite ici les erreurs éventuellement survenues
      console.log(erreur);
  });
    
  }
  render() {

        

          return (
          //<div className="dbpedia" style={{width:'100%'}}>
          //  <AdaptiveCard style={{width: '400px', border: '1px solid black'}} payload={this.result} />
         // </div> 
          <div>
          <p>Etat :{this.state.resultat && `${this.state.resultat.message}`}</p>
          <p>Id: {this.state.resultat && `${this.state.resultat.id}`}</p>
          </div>
         );
        
    
    
  }
}

export default AdaptiveUserCard