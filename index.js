import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const name = this.state.name;
   // console.log("you pressed the submit button");
    this.setState({isSubmitted: true});

    function getAge(username){
    return fetch("https://api.agify.io/?name="+username)
     .then{(response) => console.log(response.json())}
  }

  function getGender(username){
    return fetch("https://api.genderize.io?name="+username)
     .then{(response) => console.log(response.json())}
  }
     Promise.all(getAge (username), getGender(username))
     .then(([age_response, gender_response, nation_rsponse)] => (this.setState({
       isSubmitted: true,
      age: age: age_response.age,
       gender: gender_response.gender,
       nation: nation_response.country(0).country_id,
     }));

     }
  render() {
    return (
     <form onSubmit={this.handleSubmit}>
       <div>
        Enter in a your name:
        <input type="text"  onChange={this.handleChange} /> 
        <button type="submit"> Submit </button>
        <br />
        this.state.isSubmitted ? "Hello" + this.state.name + ". I think you are a " + this.state.gender + "and" + this.state.age + " years old": ""
       </div>
     <form>
    );
  }
}

render(<App />, document.getElementById('root'));
