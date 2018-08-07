import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      character: {},
      selectedCharacter: 1,
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount(){

    // const data ={
    //   firstName: 'Josh',
    //   lastName: 'Smith',
    //   passWord: 'password',
    // }

      // axios.post(`https://swapi.co/api/people/1`, data)
      // .then((response)=>{
      //     this.setState({
      //       character:response.data
      //     })
      // })
      // axios.put(`https://swapi.co/api/people/1`, data)
      // .then((response)=>{
      //     this.setState({
      //       character:response.data
      //     })
      // })
      // axios.delete(`https://swapi.co/api/people/1`)
      // .then((response)=>{
      //     this.setState({
      //       character:response.data
      //     })
      // })
  }

  handleClick(){
    axios.get(`https://swapi.co/api/people/${this.state.selectedCharacter}`)
    .then((response)=>{
        this.setState({
          character:response.data
        })
    })
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
          Selected Star Wars Character
          <br/>
          <button onClick={this.handleClick}>Get Character Data</button>
          <input name="selectedCharacter" onChange={this.handleChange} type="number" value={this.state.selectedCharacter}/>
          <p>NAME: {this.state.character.name}</p>
          <p>BIRTH YEAR: {this.state.character.birth_year}</p>
          <p>EYE COLOR: {this.state.character.eye_color}</p>
      </div>
    );
  }
}

export default App;
