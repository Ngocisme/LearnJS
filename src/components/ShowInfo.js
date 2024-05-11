import React from "react";

class ShowInfor extends React.Component{
    render(){
        console.log(this.props);
        const {name, age, address} = this.props;
        return(
            <>
               <p>My name's {name}</p>
               <p>My age's {age}</p>
               <p>My address's {address}</p>
            </>
        )
    }
}

export default ShowInfor