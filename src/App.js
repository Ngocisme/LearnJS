import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';


class App extends React.Component {

  state = {
    name: 'Eric',
    adress: 'nam Ky',
    age: 26
  }

  handleClick(){
    alert('M là thang cc');
  }

  handleOnMouse(event){

    console.log(event)
  }

  render(){
     return (
      <>
        <h1>{this.state.name}</h1>
        <h1>{this.state.adress}</h1>
        <button onClick={this.handleClick}>Click here</button>
        <button onMouseEnter={this.handleOnMouse}>Hover Here</button>
      </>
     )
  }
}

export default App;
