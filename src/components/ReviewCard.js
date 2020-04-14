import React, { Component } from 'react';
import AdaptiveUserCard from './AdaptiveUserCard';



class ReviewCard extends Component {
    constructor(props) {
      super(props);
      this.idUser=''
    }
  
    UNSAFE_componentWillMount() {
        
      const id = this.props.steps.reqUserRes.value; 
      console.log(this.props)
      this.idUser = id
    }
  
  
    render() {
     console.log(this.idUser)
      return <AdaptiveUserCard id = {this.idUser} />
                     
    }
  }

  export default ReviewCard