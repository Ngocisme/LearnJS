import React from "react";
import FormComponent from "./FormComponent";
import ShowInfor from "./ShowInfo";
class MyComponent extends React.Component {
    
      render(){
        const inforArr = ['a','b','c']
         return (
          <>
           <FormComponent/>
           <br/><br/>
           <ShowInfor name= "Bảo Ngọc" age = {24} address = "TP.HCM" inforArr = {inforArr}/>
           <hr/>
           <ShowInfor name= "Hoi Dan IT" age = {30} address = "Hà Nội" inforArr = {inforArr}/>
          </>
         )
      }
}

export default MyComponent