import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdaptiveCard from 'react-adaptivecards';

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
      result: <AdaptiveCard style={{border: '1px solid black', width:'100%'}} payload={payloads} />,
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

export default AdaptiveCardWrapper;