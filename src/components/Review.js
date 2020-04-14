import React, { Component } from 'react';



class Review extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: '',
        password: '',
        
      };
    }
  
    UNSAFE_componentWillMount() {
      const { steps } = this.props;
      const { name, password } = steps;
  
      this.setState({ name, password });
    }
  
    render() {
      const { name,password } = this.state;
      return (
        <div style={{ width: '100%' }}>
          <h3>Sommaire</h3>
          <table>
            <tbody>
              <tr>
                <td>Username</td>
                <td>{name.value}</td>
              </tr>
              <tr>
                <td>Password</td>
                <td>{password.value}</td>
              </tr>
            
            </tbody>
          </table>
        </div>
      );
    }
  }

  export default Review