import React from "react";
import FormComponent from "./FormComponent";
import AddShowInfor from "./AddShowInfo";
import { listeners } from "process";
class MyComponent extends React.Component {
     
    state = {
        listUsers : [
            {id: 1, name: "Hoi Dan IT" , age: 30},
        ]
    }
    addUser = (userObject) => {
       this.setState({
        listUsers: [userObject ,...this.state.listUsers] 
       })
    }
      render(){
         return (
          <>
           <FormComponent
            addUser = {this.addUser}
           />
           <br/><br/>
           <AddShowInfor listUsers = {this.state.listUsers}
           />
          </>
         )
      }
}

export default MyComponent