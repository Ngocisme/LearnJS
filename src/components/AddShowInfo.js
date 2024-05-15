import React from "react";


class AddShowInfor extends React.Component {
    state = {
        showListUsers : true
    }

    componentDidMount() {
        console.log("component did mount")
        setTimeout(() => {
            document.title = "Hoi Dan IT"
        } )
    }

    componentDidUpdate(prevProps, prevState){
        console.log("component did update", this.props,prevProps)
        if(this.props.listUsers !== prevProps.listUsers){
            if(this.props.listUsers.length === 5){
                alert("you got 5 users")
            }
        }
    }

    handleShowHide = () => {
       this.setState({
        showListUsers : !this.state.showListUsers
       })
    }
    render() {
        const { listUsers } = this.props;
        return (
            <>
                <button onClick={() => { this.handleShowHide() }}>{this.state.showListUsers === true ? 'Hide list users' : 'Show list users'}</button>
                <>
                    {listUsers.map(
                        (user) => {
                            console.log(user)

                            return (
                                <>
                                    {this.state.showListUsers &&
                                        <div key={user.id} className={user.age <= 30 ? "green" : "red"}>
                                            <p>ID {user.id}</p>
                                            <p>My name's {user.name}</p>
                                            <p>My age's {user.age}</p>
                                        </div>
                                    }
                                </>
                            )

                        }
                    )}
                </>
            </>
        )
    }
}

export default AddShowInfor