import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';


class App extends React.Component {

  state = {
    name: '',
    adress: '',
    age: 0
  }

handleForm = (event) => {
  this.setState({
    name: event.target.value,
    age: event.target.value
  })
}

handleFormAge = (event) => {
  this.setState({
    age: event.target.value
  })
}

handleFormAddress = (event) => {
  this.setState({
    adress: event.target.value
  })
}

submitForm = (event) => {
  event.preventDefault();
 console.log(this.state)
}


  render(){
     return (
      <>
      <p>My name is {this.state.name} and i am {this.state.age}</p>
        <form onSubmit={(event)=> this.submitForm(event)}>
          <input type='text'
          onChange={(event)=>  this.handleForm(event) }
          />
           <input type='text'
          onChange={(event)=>  this.handleFormAddress(event) }
          />
           <input type='number'
          onChange={(event)=>  this.handleFormAge(event) }
          />
          <button>Submit</button>
        </form>
      </>
     )
  }
}

export default App;
