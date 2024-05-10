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

  handleClick= (event) =>{
    console.log("Tên: ", this.state.name)
    this.setState({
      name: "Lennon"
    })
  }

  handleOnMouse = (event) => {
    console.log("Tên: ", this.state.name)
    this.setState({
      name: "John"
    })
  }

  render(){
     return (
      <>
        <h1>{this.state.name}</h1>
        <button onMouseEnter={this.handleClick}>Click here</button>
        <button onMouseEnter={this.handleOnMouse}>Hover Here</button>
      </>
     )
  }
}

export default App;
