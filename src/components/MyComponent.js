import React from "react";
import FormComponent from "./FormComponent";
import ShowInfor from "./ShowInfo";
class MyComponent extends React.Component {
     
    state = {
        listUsers : [
            {id: 1, name: "Hoi Dan IT" , age: 30},
            {id: 2, name: "Hoi Dan AOE" , age: 25},
            {id: 3, name: "Hoi Dan Lien Minh" , age: 65},
            {id: 4, name: "Hoi Dan Lien Minh" , age: 65},
            {id: 5, name: "Hoi Dan Lien Minh" , age: 65}
        ]
    }

      render(){
         return (
          <>
           <FormComponent/>
           <br/><br/>
           <ShowInfor listUsers = {this.state.listUsers}/>
          </>
         )
      }
}

export default MyComponent