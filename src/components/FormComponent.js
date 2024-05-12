import React from "react";

class FormComponent extends React.Component{
    state = {
        
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
     this.props.addUser({
      id: 1,
      name: this.state.name,
      age : this.state.age
     })
    }
    render(){
        return(
            <>
            <p>My name is {this.state.name} and i am {this.state.age}</p>
            <form onSubmit={(event)=> this.submitForm(event)}>
            <label>Your name: </label>
            <input type='text'
            onChange={(event)=>  this.handleForm(event) }
            value={this.state.name}
            />
            <label>Your address: </label>
             <input type='text'
            onChange={(event)=>  this.handleFormAddress(event) }
            value={this.state.adress}
            />
            <label>Your age: </label>
             <input type='number'
            onChange={(event)=>  this.handleFormAge(event) }
            value={this.state.age}
            />
            <button>Submit</button>
          </form>
            </>
           
        )
    }
}

export default FormComponent