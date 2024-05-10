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

  render(){
     return (
      <>
        <h1>{this.state.name}</h1>
        <h1>{this.state.adress}</h1>
      </>
     )
  }
}



// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <MyComponent/>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>

     
//     </div>
//   );
// }

export default App;
